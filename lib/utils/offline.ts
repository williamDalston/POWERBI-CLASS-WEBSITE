// Offline utilities for caching and progress tracking

export interface OfflineProgressItem {
  lessonId: string;
  moduleId: string;
  completed: boolean;
  timestamp: number;
  watchTime?: number;
}

const OFFLINE_PROGRESS_KEY = 'pwa-offline-progress';
const CACHE_TIMESTAMP_KEY = 'pwa-cache-timestamp';

/**
 * Check if device is currently online
 */
export function isOnline(): boolean {
  if (typeof window === 'undefined') return true;
  return navigator.onLine;
}

/**
 * Listen for online/offline events
 */
export function onNetworkChange(callback: (online: boolean) => void): () => void {
  if (typeof window === 'undefined') {
    return () => {};
  }
  
  const handleOnline = () => callback(true);
  const handleOffline = () => callback(false);
  
  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);
  
  // Return cleanup function
  return () => {
    window.removeEventListener('online', handleOnline);
    window.removeEventListener('offline', handleOffline);
  };
}

/**
 * Store offline progress
 */
export function saveOfflineProgress(item: OfflineProgressItem): void {
  if (typeof window === 'undefined') return;
  
  try {
    const existing = getOfflineProgress();
    existing.push(item);
    
    // Keep only last 100 items
    const trimmed = existing.slice(-100);
    
    localStorage.setItem(OFFLINE_PROGRESS_KEY, JSON.stringify(trimmed));
  } catch (error) {
    console.error('[Offline] Failed to save progress:', error);
  }
}

/**
 * Get all offline progress
 */
export function getOfflineProgress(): OfflineProgressItem[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const data = localStorage.getItem(OFFLINE_PROGRESS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('[Offline] Failed to get progress:', error);
    return [];
  }
}

/**
 * Clear offline progress
 */
export function clearOfflineProgress(): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(OFFLINE_PROGRESS_KEY);
  } catch (error) {
    console.error('[Offline] Failed to clear progress:', error);
  }
}

/**
 * Sync offline progress to server
 */
export async function syncOfflineProgress(): Promise<boolean> {
  if (typeof window === 'undefined' || !isOnline()) {
    return false;
  }
  
  const progress = getOfflineProgress();
  
  if (progress.length === 0) {
    return true; // Nothing to sync
  }
  
  try {
    // In a real app, this would send to your API
    const response = await fetch('/api/sync-progress', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ progress }),
    });
    
    if (response.ok) {
      clearOfflineProgress();
      console.log('[Offline] Progress synced successfully');
      return true;
    }
    
    console.error('[Offline] Failed to sync progress:', response.statusText);
    return false;
  } catch (error) {
    console.error('[Offline] Error syncing progress:', error);
    return false;
  }
}

/**
 * Cache a URL for offline viewing
 */
export async function cacheUrl(url: string): Promise<boolean> {
  if (typeof window === 'undefined' || !('caches' in window)) {
    return false;
  }
  
  try {
    const cache = await caches.open('powerbi-runtime-v1');
    await cache.add(url);
    return true;
  } catch (error) {
    console.error('[Offline] Failed to cache URL:', error);
    return false;
  }
}

/**
 * Cache multiple URLs
 */
export async function cacheUrls(urls: string[]): Promise<number> {
  if (typeof window === 'undefined' || !('caches' in window)) {
    return 0;
  }
  
  let cached = 0;
  
  for (const url of urls) {
    const success = await cacheUrl(url);
    if (success) cached++;
  }
  
  return cached;
}

/**
 * Check if a URL is cached
 */
export async function isCached(url: string): Promise<boolean> {
  if (typeof window === 'undefined' || !('caches' in window)) {
    return false;
  }
  
  try {
    const cache = await caches.open('powerbi-runtime-v1');
    const response = await cache.match(url);
    return !!response;
  } catch (error) {
    console.error('[Offline] Failed to check cache:', error);
    return false;
  }
}

/**
 * Get cache info
 */
export async function getCacheInfo(): Promise<{
  size: number;
  urls: string[];
}> {
  if (typeof window === 'undefined' || !('caches' in window)) {
    return { size: 0, urls: [] };
  }
  
  try {
    const cache = await caches.open('powerbi-runtime-v1');
    const keys = await cache.keys();
    const urls = keys.map((key) => key.url);
    
    return {
      size: keys.length,
      urls,
    };
  } catch (error) {
    console.error('[Offline] Failed to get cache info:', error);
    return { size: 0, urls: [] };
  }
}

/**
 * Clear all cached data
 */
export async function clearCache(): Promise<boolean> {
  if (typeof window === 'undefined' || !('caches' in window)) {
    return false;
  }
  
  try {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames.map((name) => caches.delete(name)));
    console.log('[Offline] Cache cleared');
    return true;
  } catch (error) {
    console.error('[Offline] Failed to clear cache:', error);
    return false;
  }
}

/**
 * Set cache timestamp
 */
export function setCacheTimestamp(): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
}

/**
 * Get cache timestamp
 */
export function getCacheTimestamp(): number {
  if (typeof window === 'undefined') return 0;
  
  const timestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
  return timestamp ? parseInt(timestamp, 10) : 0;
}

/**
 * Check if cache is stale (older than 7 days)
 */
export function isCacheStale(): boolean {
  const timestamp = getCacheTimestamp();
  const sevenDays = 7 * 24 * 60 * 60 * 1000;
  return Date.now() - timestamp > sevenDays;
}





