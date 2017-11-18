self.addEventListener('install',function(event){
	event.waitUntil(
			caches.open('mycache1')
			.then(function(cache){
			console.log('sw.js has opened cache..');
			return cache.addAll('/cached.css');
			})
		);	
});