const C='agrostart-es-v1';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./app.html','./manifest.webmanifest','./icon.svg','./icon-192.png'])).catch(()=>{}));self.skipWaiting()});
self.addEventListener('activate',e=>self.clients.claim());
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const k=r.clone();caches.open(C).then(c=>c.put(e.request,k)).catch(()=>{});return r}).catch(()=>caches.match(e.request)))});
