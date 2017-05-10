var db = require('../models');

function index(req, res) {


	db.City.findOne({_id: req.params.cityId}, function (err, city) {
		res.json(city.posts);


	});
};

// finds a post by matching ID and returns it
function show(req, res) {

	var postId = req.params.postId;
	db.Posts.findById(postId, function(err, foundPost) {
		res.json(foundPost);
	});
};

function create(req, res) {
	var newPost = new db.Post({
		userIMG: req.body.userIMG,
		user: req.body.user,
		cityName: req.body.cityName,
		title: req.body.title,
		text: req.body.text,
		date: req.body.date
	});

	db.City.findOne({cityName: req.body.cityName}, function(err, city) {
		if (err) {
			console.log(err.message);
		} else {
			console.log('city is: ', city);
			if (city === null) {
				console.log('post create error: ${req.body.cityName} not found');
			} else {
				newPost.cityName = cityName;
s
				newPost.save(function(err, post) {
					if (err) {
						console.log('post save error: ', err);
					} else {
						conosle.log('saved post: ', post);
						res.json(post);
					}
				})
			}
		}
	};
	// console.log('body', req.body);
	// db.Post.create(req.body, function(err, newPost) {
	// 	res.json(newPost);
	// });

	// console.log('req.params for unique post is: ', req.params)
	// var foundCityId = req.params.cityId;
	// var foundPostId = req.params.postId;

	db.Posts.findById(req.params.postId, function(err, post) {
		res.json(post)
		console.log(err);
	});
};

	// console.log(foundPostId);
	// console.log(foundCityId);

	// db.City.findById(foundCityId, function(err, foundCity) {
		
	// 	var allPosts = foundCity.posts;

	// 	allPosts.findById(foundPostId, function(err, foundPost) {

	// 		res.json(foundPost);

	// 	});
	// });




// finds matching post content in db.Posts and returns it
function showOne(req, res) {
	db.Post.findOne({post:req.params.post})
		.exec(function(err, foundPost) {
			res.json(foundPost);
	});
};

function create(req, res) {
	console.log('body', req.body);
	console.log('req params is: ', req.params)
	db.Posts.create(req.body, function(err, newPost) {

		res.json(newPost);
	
		db.City.findById(req.params.cityId, function (err, foundCity) {

			console.log('foundCity posts is: ', foundCity.posts);
			console.log('req.body is: ', req.body)

			foundCity.posts.push(req.body);
			foundCity.save()

		});
	});

};

function destroy(req, res) {
	console.log('made it to empty destroy function')
	// db.City.findOneById(req.params.cityId, function (err, foundCity) {

	// 	foundCity.posts.findOneById(req.params.postId, (err, foundPost) {

	// 		foundPost.delete()
	// 		foundCity.posts.save()

	// 	});

	// });

};

function update(req, res) {

	db.Posts.findOne({city:req.params.city, post:req.params.post}, function (err, updatePost) {
		updatePost.date = req.body.date;
		updatePost.user = req.body.user;
		updatePost.text = req.body.text;
		updatePost.save(function (err, savedPost) {
			res.json(savedPost);
		});
	});
};

module.exports = {
	index: index,
	show: show,
	create: create,
	showOne: showOne,
	destroy: destroy,
	update: update
}


