// Service worker מינימלי — נדרש כדי שכרום יציע התקנה.
// לא שומר כלום במטמון: כל בקשה הולכת לרשת, כך שעדכונים לדף מופיעים מיד.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) { e.respondWith(fetch(e.request)); });
