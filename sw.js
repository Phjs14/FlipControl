const V='fc-v3',SHELL=['./','manifest.json','icon-192.png','icon-512.png'],CDN=['cdn.tailwindcss.com','cdn.jsdelivr.net','unpkg.com'];
self.addEventListener('install',e=>e.waitUntil(caches.open(V).then(c=>Promise.all(SHELL.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=='GET'||!(u.origin===location.origin||CDN.includes(u.hostname)))return; // API do Supabase nunca é cacheada
  e.respondWith(caches.match(r).then(hit=>{
    const net=fetch(r).then(res=>{if(res.ok||res.type==='opaque')caches.open(V).then(c=>c.put(r,res.clone()));return res}).catch(()=>hit);
    return hit||net;
  }));
});
