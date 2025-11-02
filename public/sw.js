// Service Worker for Power BI Course PWA
const CACHE_NAME = 'powerbi-course-v1';
const RUNTIME_CACHE = 'powerbi-runtime-v1';

// Assets to cache immediately on install
const PRECACHE_URLS = [
  '/',
  '/dashboard',
  '/manifest.json',
  '/offline.html',
  // Add more static assets as needed
];

// Install event - cache essential resources
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Caching app shell');
        return cache.addAll(PRECACHE_URLS);
      })
      .then(() => self.skipWaiting()) // Activate immediately
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => self.clients.claim()) // Take control of all pages
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http(s) requests
  if (!request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          return cachedResponse;
        }

        // Otherwise fetch from network
        return fetch(request)
          .then((response) => {
            // Don't cache non-success responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Add to cache
            event.waitUntil(
              caches.open(RUNTIME_CACHE)
                .then((cache) => {
                  cache.put(request, responseToCache);
                })
            );

            return response;
          })
          .catch(() => {
            // Network failed, check if request is for a page
            if (request.headers.get('accept').includes('text/html')) {
              return caches.match('/offline.html');
            }
          });
      })
  );
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('[Service Worker] Background sync:', event.tag);
  
  if (event.tag === 'sync-progress') {
    event.waitUntil(syncProgress());
  }
});

// Sync progress when back online
async function syncProgress() {
  try {
    // Get offline progress from IndexedDB
    const offlineProgress = await getOfflineProgress();
    
    // Send to server
    if (offlineProgress && offlineProgress.length > 0) {
      await fetch('/api/sync-progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(offlineProgress),
      });
      
      // Clear offline progress after successful sync
      await clearOfflineProgress();
      console.log('[Service Worker] Progress synced successfully');
    }
  } catch (error) {
    console.error('[Service Worker] Failed to sync progress:', error);
  }
}

// Helper function to get offline progress
async function getOfflineProgress() {
  // This would typically use IndexedDB
  // For now, return empty array
  return [];
}

// Helper function to clear offline progress
async function clearOfflineProgress() {
  // This would typically clear IndexedDB
  // For now, just log
  console.log('[Service Worker] Offline progress cleared');
}

// Push notification handler
self.addEventListener('push', (event) => {
  console.log('[Service Worker] Push received:', event);
  
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-96x96.png',
    vibrate: [200, 100, 200],
    tag: 'powerbi-update',
    requireInteraction: true,
  };

  event.waitUntil(
    self.registration.showNotification('Power BI Course', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  console.log('[Service Worker] Notification clicked:', event);
  
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/dashboard')
  );
});

