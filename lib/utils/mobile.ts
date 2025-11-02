// Mobile-specific utilities and helpers

/**
 * Check if the device is mobile
 */
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false
  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
}

/**
 * Check if the device supports touch
 */
export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false
  
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    // @ts-ignore - for older browsers
    navigator.msMaxTouchPoints > 0
  )
}

/**
 * Get device type
 */
export function getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop'
  
  const width = window.innerWidth
  
  if (width < 768) return 'mobile'
  if (width < 1024) return 'tablet'
  return 'desktop'
}

/**
 * Check if iOS device
 */
export function isIOS(): boolean {
  if (typeof window === 'undefined') return false
  
  return /iPad|iPhone|iPod/.test(navigator.userAgent)
}

/**
 * Check if Android device
 */
export function isAndroid(): boolean {
  if (typeof window === 'undefined') return false
  
  return /Android/.test(navigator.userAgent)
}

/**
 * Detect swipe gesture from touch events
 */
export interface SwipeResult {
  direction: 'left' | 'right' | 'up' | 'down' | null
  distance: number
}

export function detectSwipe(
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  minDistance = 50
): SwipeResult {
  const deltaX = endX - startX
  const deltaY = endY - startY
  const absX = Math.abs(deltaX)
  const absY = Math.abs(deltaY)
  
  if (absX < minDistance && absY < minDistance) {
    return { direction: null, distance: 0 }
  }
  
  const distance = Math.sqrt(absX * absX + absY * absY)
  
  if (absX > absY) {
    return {
      direction: deltaX > 0 ? 'right' : 'left',
      distance,
    }
  } else {
    return {
      direction: deltaY > 0 ? 'down' : 'up',
      distance,
    }
  }
}

/**
 * Add touch feedback to an element
 */
export function addTouchFeedback(element: HTMLElement): void {
  if (!isTouchDevice()) return
  
  const addActive = () => {
    element.classList.add('touch-active')
  }
  
  const removeActive = () => {
    element.classList.remove('touch-active')
  }
  
  element.addEventListener('touchstart', addActive)
  element.addEventListener('touchend', removeActive)
  element.addEventListener('touchcancel', removeActive)
}

/**
 * Request fullscreen on mobile
 */
export async function requestFullscreen(): Promise<boolean> {
  if (typeof document === 'undefined') return false
  
  const element = document.documentElement
  
  try {
    if (element.requestFullscreen) {
      await element.requestFullscreen()
      return true
    } else if ((element as any).webkitRequestFullscreen) {
      await (element as any).webkitRequestFullscreen()
      return true
    } else if ((element as any).mozRequestFullScreen) {
      await (element as any).mozRequestFullScreen()
      return true
    } else if ((element as any).msRequestFullscreen) {
      await (element as any).msRequestFullscreen()
      return true
    }
  } catch (error) {
    console.error('Fullscreen request failed:', error)
  }
  
  return false
}

/**
 * Exit fullscreen
 */
export async function exitFullscreen(): Promise<boolean> {
  if (typeof document === 'undefined') return false
  
  try {
    if (document.exitFullscreen) {
      await document.exitFullscreen()
      return true
    } else if ((document as any).webkitExitFullscreen) {
      await (document as any).webkitExitFullscreen()
      return true
    } else if ((document as any).mozCancelFullScreen) {
      await (document as any).mozCancelFullScreen()
      return true
    } else if ((document as any).msExitFullscreen) {
      await (document as any).msExitFullscreen()
      return true
    }
  } catch (error) {
    console.error('Exit fullscreen failed:', error)
  }
  
  return false
}

/**
 * Check if currently in fullscreen
 */
export function isFullscreen(): boolean {
  if (typeof document === 'undefined') return false
  
  return !!(
    document.fullscreenElement ||
    (document as any).webkitFullscreenElement ||
    (document as any).mozFullScreenElement ||
    (document as any).msFullscreenElement
  )
}

/**
 * Add "Add to Home Screen" hint for iOS
 */
export function showiOSInstallHint(): void {
  if (!isIOS()) return
  
  // Check if already dismissed
  if (localStorage.getItem('ios-install-hint-dismissed') === 'true') {
    return
  }
  
  // Show a toast or banner with instructions
  const hint = document.createElement('div')
  hint.className = 'ios-install-hint'
  hint.innerHTML = `
    <div style="position: fixed; top: 0; left: 0; right: 0; background: #2563eb; color: white; padding: 16px; text-align: center; z-index: 9999; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">
      <p style="margin: 0 0 8px 0; font-weight: 600;">Add Power BI Course to Home Screen</p>
      <p style="margin: 0; font-size: 14px; opacity: 0.9;">Tap Share <span style="transform: rotate(90deg); display: inline-block;">→</span> Add to Home Screen</p>
      <button onclick="this.parentElement.parentElement.remove(); localStorage.setItem('ios-install-hint-dismissed', 'true');" style="position: absolute; top: 8px; right: 8px; background: transparent; border: none; color: white; font-size: 24px; cursor: pointer;">×</button>
    </div>
  `
  
  document.body.appendChild(hint)
  
  // Auto-dismiss after 10 seconds
  setTimeout(() => {
    if (hint.parentElement) {
      hint.remove()
      localStorage.setItem('ios-install-hint-dismissed', 'true')
    }
  }, 10000)
}

/**
 * Vibrate device (haptic feedback)
 */
export function vibrate(pattern: number | number[]): boolean {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return false
  }
  
  if (!('vibrate' in navigator)) {
    return false
  }
  
  try {
    navigator.vibrate(pattern)
    return true
  } catch (error) {
    console.error('Vibrate failed:', error)
    return false
  }
}

/**
 * Get battery level (if available)
 */
export async function getBatteryLevel(): Promise<number | null> {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return null
  }
  
  // @ts-ignore - Battery API is not in all types
  const battery = await navigator.getBattery?.()
  
  if (!battery) return null
  
  return Math.round(battery.level * 100)
}
