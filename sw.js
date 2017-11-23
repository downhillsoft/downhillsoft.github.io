var urlsToCache = ['/bstimer.html','/memo.txt'];

self.addEventListener('install',function(event){
	event.waitUntil(
			caches.open('dsblackstrawberrycache_v201711231')
			.then(function(cache){
			console.log('sw.js will cache files');
			return cache.addAll(urlsToCache);
			})
		);	
});

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