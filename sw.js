const CACHE_NAME = 'maint3d-v11';
const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './Logo.ico'
];

// Instalar el Service Worker
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Activar y limpiar cachés antiguos
self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptar peticiones (Fetch)
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // EXCLUSIÓN: No cachear modelos 3D, videos ni PDFs pesados para evitar errores de memoria en el móvil
  if (url.pathname.endsWith('.glb') || url.pathname.endsWith('.pdf') || url.pathname.endsWith('.zip') || url.pathname.endsWith('.mp4')) {
    return; // Dejar que el navegador lo maneje normalmente (Network Only)
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
