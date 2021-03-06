var db = require('./models');

var cities_list = [
	{
		name: 'San Francisco',
		imgURL: '/images/cities/sanfrancisco.jpg',
		type: 'largeCard'
	},
	{
		name: 'Dubai',
		imgURL: '/images/cities/dubai.jpg',
		type: 'mediumCard'
	},
	{
		name: 'Reykjavik',
		imgURL: '/images/cities/reykjavik.jpg',
		type: 'smallCard'
	},
	{
		name: 'Tokyo',
		imgURL: '/images/cities/tokyo.jpg',
		type: 'smallCard'
	},
	{
		name: 'Amsterdam',
		imgURL: '/images/cities/amsterdam.jpg',
		type: 'smallCard'
	},
	{
		name: 'Oslo',
		imgURL: '/images/cities/iceland.jpg',
		type: 'smallCard'
	}
];

var posts_list = [
	{
		userIMG: '/images/profiles/face1.jpg',
		user: 'Anthony L.',
		city: 'San Francisco',
		title: 'Home is Where the Sandwich is',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
		date: '5/10/2017'
	},
	{
		userIMG: '/images/profiles/face2.jpg',
		user: 'George C.',
		city: 'San Francisco',
		title: 'Nowhere Man',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
		date: '1/2/2014'
	},
	{
		userIMG: '/images/profiles/face3.jpg',
		user: 'George C.',
		city: 'San Francisco',
		title: 'Nowhere Man',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
		date: '1/2/2014'
	},
	{
		userIMG: '/images/profiles/face4.jpg',
		user: 'George C.',
		city: 'San Francisco',
		title: 'Nowhere Man',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
		date: '1/2/2014'
	},
	{
		userIMG: '/images/profiles/face5.jpg',
		user: 'Violet',
		city: 'Dubai',
		title: 'Words from a Local',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
		date: '5/10/2017'
	},
	{
		userIMG: '/images/profiles/face6.jpg',
		user: 'Blair',
		city: 'Reykjavik',
		title: 'Really Cool Vibes, Man.',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
		date: '5/10/2017'
	},
	{
		userIMG: '/images/profiles/face7.jpg',
		user: 'Emma Frost',
		city: 'Tokyo',

		title: 'I Want To Hold My Hand',
		text: 'COLD COLD COLD, but the hot springs are a must see.',
		date: '4/10/2016'
	},
	{
		userIMG: '/images/profiles/face8.jpg',
		user: 'Julie Huang',
		city: 'Tokyo',
		title: 'I Want To Hold My Hand',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
		date: '4/10/2016'
	},
	{
		userIMG: '/images/profiles/face9.jpg',
		user: 'Mahmoud Bachir',
		city: 'Amsterdam',
		title: 'Lucy In The Sky With Diamonds',
		text: 'Ramen was so bomb!',
		date: '3/25/2017'
	}
];

db.City.remove({}, function(err, cities) {
console.log('removed all cities');
	db.City.create(cities_list, function(err, cities) {
		if (err) {
			console.log(err);
			return;
		}

		db.Post.remove({}, function(err, posts) {
			console.log('removed all posts')

			posts_list.forEach(function(postInfo) {
				var post = new db.Post({
					userIMG: postInfo.userIMG,
					user: postInfo.user,
					cityName: postInfo.city,
					title: postInfo.title,
					text: postInfo.text,
					date: postInfo.date,
					userID: postInfo.userID
				});
				db.City.findOne({name: postInfo.city}, function(err, foundCity) {
					if(err) {
						console.log(err);
						return;
					}
					post.city = foundCity;
					post.save(function(err, savedPost) {
						if(err) {
							return console.log(err);
						}
						console.log('saved ', savedPost);
					})
				})
			})
		})
	})
})
