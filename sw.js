self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// برای امنیت: چیزی را کش نمی‌کنیم
self.addEventListener("fetch", (event) => {});
