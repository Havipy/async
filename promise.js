const p = new Promise(function(resolve, reject) { 
	setTimeout(() => {
		console.log('Preparing data…');
		const backendData = {
			server: 'aws',
			port: 2000,
			status: 'wokring'
		}
		resolve()
	}
		, 2000)
	})
p.then(() => {
	console.log('Promise resolved')
})