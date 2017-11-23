
var cacheName = 'dsblackstrawberrycache_v201711231-2';

var urlsToCache = [
'/bstimer.html'
,'/memo.txt'
,'/img/blackstrawberry.png'
,'del.png'
];

self.addEventListener('install',function(event){
	event.waitUntil(
			caches.open(cacheName)
			.then(function(cache){
			console.log('sw.js will cache files');
			return cache.addAll(urlsToCache);
			})
		);	
});


self.addEventListener('activate', function(e) {
  console.log('handling activate event..');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );


self.addEventListener('fetch',function(event){
	event.respondWith(
		caches.match(event.request)
			.then(function(response){
				if(response){
				 console.log('responding from cache');
				 return response;
				}
				return fetch(event.request);
			  }
			)
	);
});