var userFeed = new Instafeed({
        get: 'user',
        userId: '2289781679',
        clientId: '467ede5a6b9b48ae8e03f4e2582aeeb3',
		resolution: 'thumbnail',
		limit: '24',
		template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>'
    });
    userFeed.run();