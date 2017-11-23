var urlsToCache = ['/bstimer.html','/memo.txt'];

self.addEventListener('install',function(event){
	event.waitUntil(
			caches.open('dsblackstrawberrycache_v201711231')
			.then(function(cache){
			console.log('sw.js has opened cache..');
			return cache.addAll(urlsToCache);
			})
		);	
});