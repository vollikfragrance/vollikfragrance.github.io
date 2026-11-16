const CACHE='vollik-public-v63';
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./offline.html']))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('vollik-public-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
// Cache public static files only. Never cache account, order, API, or authentication responses.
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==self.location.origin)return;
 if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).catch(()=>caches.match('./offline.html')));return}
 if(!/\.(?:css|js|woff2|png|webp|svg|jpg)$/.test(u.pathname)||u.search)return;
 e.respondWith(fetch(e.request).then(r=>{if(r.ok&&!r.redirected){const copy=r.clone();e.waitUntil(caches.open(CACHE).then(c=>c.put(e.request,copy)))}return r}).catch(()=>caches.match(e.request)));
});
