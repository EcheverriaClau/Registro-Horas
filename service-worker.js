const CACHE_NAME = "registro-v3";
const ARCHIVOS = [
  "./index.html",
  "./manifest.json"
];

// Instalación: guardar archivos en caché
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ARCHIVOS))
  );
  // Activar de inmediato sin esperar a que cierre la pestaña anterior
  self.skipWaiting();
});

// Activación: limpiar cachés viejas
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Fetch: primero red, si falla usa caché (mejor para datos frescos)
self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Guardar copia fresca en caché
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
