// PWA Utilities for install prompt and management

export interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

/**
 * Check if the app is running as a PWA
 */
export function isPWA(): boolean {
  if (typeof window === 'undefined') return false;
  
  // Check if running in standalone mode
  if (window.matchMedia('(display-mode: standalone)').matches) {
    return true;
  }
  
  // Check if installed on iOS
  if ((window.navigator as any).standalone === true) {
    return true;
  }
  
  // Check if running from an installed PWA
  if (document.referrer.includes('android-app://')) {
    return true;
  }
  
  return false;
}

/**
 * Check if the app can be installed
 */
export function isInstallable(): boolean {
  if (typeof window === 'undefined') return false;
  
  return !isPWA() && !hasBeenDismissed();
}

/**
 * Get or set the beforeinstallprompt event
 */
let deferredPrompt: BeforeInstallPromptEvent | null = null;

export function setDeferredPrompt(event: BeforeInstallPromptEvent) {
  deferredPrompt = event;
}

export function getDeferredPrompt(): BeforeInstallPromptEvent | null {
  return deferredPrompt;
}

export function clearDeferredPrompt() {
  deferredPrompt = null;
}

/**
 * Prompt user to install the PWA
 */
export async function promptInstall(): Promise<boolean> {
  if (!deferredPrompt) {
    console.log('No deferred prompt available');
    return false;
  }
  
  try {
    // Show the install prompt
    await deferredPrompt.prompt();
    
    // Wait for user response
    const choiceResult = await deferredPrompt.userChoice;
    
    // Clear the prompt
    clearDeferredPrompt();
    
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
      markAsInstalled();
      return true;
    } else {
      console.log('User dismissed the install prompt');
      markAsDismissed();
      return false;
    }
  } catch (error) {
    console.error('Error showing install prompt:', error);
    clearDeferredPrompt();
    return false;
  }
}

/**
 * Check if the install prompt has been dismissed before
 */
function hasBeenDismissed(): boolean {
  if (typeof window === 'undefined') return false;
  const dismissed = localStorage.getItem('pwa-install-dismissed');
  return dismissed === 'true';
}

/**
 * Mark the install prompt as dismissed
 */
function markAsDismissed(): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('pwa-install-dismissed', 'true');
}

/**
 * Mark the app as installed
 */
function markAsInstalled(): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('pwa-installed', 'true');
}

/**
 * Check if the app has been installed before
 */
export function hasBeenInstalled(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('pwa-installed') === 'true';
}

/**
 * Register service worker
 */
export async function registerServiceWorker(): Promise<ServiceWorkerRegistration | null> {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return null;
  }
  
  try {
    const registration = await navigator.serviceWorker.register('/sw.js');
    console.log('[PWA] Service Worker registered:', registration);
    return registration;
  } catch (error) {
    console.error('[PWA] Service Worker registration failed:', error);
    return null;
  }
}

/**
 * Unregister service worker (for development)
 */
export async function unregisterServiceWorker(): Promise<void> {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return;
  }
  
  const registration = await navigator.serviceWorker.ready;
  await registration.unregister();
  console.log('[PWA] Service Worker unregistered');
}

/**
 * Check if notifications are supported
 */
export function areNotificationsSupported(): boolean {
  if (typeof window === 'undefined') return false;
  return 'Notification' in window && 'serviceWorker' in navigator;
}

/**
 * Check if notifications are granted
 */
export async function areNotificationsGranted(): Promise<boolean> {
  if (!areNotificationsSupported()) return false;
  
  if (Notification.permission === 'granted') return true;
  if (Notification.permission === 'denied') return false;
  
  return false;
}

/**
 * Request notification permission
 */
export async function requestNotificationPermission(): Promise<boolean> {
  if (!areNotificationsSupported()) {
    console.log('Notifications not supported');
    return false;
  }
  
  if (Notification.permission === 'granted') {
    return true;
  }
  
  if (Notification.permission === 'denied') {
    console.log('Notification permission denied');
    return false;
  }
  
  try {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  } catch (error) {
    console.error('Error requesting notification permission:', error);
    return false;
  }
}

/**
 * Send a push notification
 */
export async function sendNotification(title: string, options?: NotificationOptions): Promise<void> {
  if (!areNotificationsSupported()) {
    console.log('Notifications not supported');
    return;
  }
  
  if (!(await areNotificationsGranted())) {
    console.log('Notification permission not granted');
    return;
  }
  
  const registration = await navigator.serviceWorker.ready;
  
  await registration.showNotification(title, {
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-96x96.png',
    ...options,
  });
}

/**
 * Get PWA capabilities
 */
export function getPWACapabilities(): {
  installable: boolean;
  offline: boolean;
  notifications: boolean;
  backgroundSync: boolean;
} {
  return {
    installable: 'serviceWorker' in navigator,
    offline: 'serviceWorker' in navigator && 'caches' in window,
    notifications: 'Notification' in window && 'serviceWorker' in navigator,
    backgroundSync: 'serviceWorker' in navigator && 'sync' in (self as any),
  };
}

