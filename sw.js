const CACHE_NAME = 'maint3d-v14';
const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './Logo.ico',
  './pdf.min.js',
  './pdf.worker.min.js'
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
  // IMPORTANTE: Se usa event.respondWith(fetch(...)) en lugar de un return vacío,
  // para que el Service Worker no bloquee silenciosamente la petición en algunos navegadores.
  if (url.pathname.endsWith('.glb') || url.pathname.endsWith('.pdf') || url.pathname.endsWith('.zip') || url.pathname.endsWith('.mp4')) {
    event.respondWith(fetch(event.request)); // Network Only — nunca cache
    return;
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
