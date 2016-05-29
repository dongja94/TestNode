
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.friend = function(req, res) {
  var i, friendlist = [];
  for(i = 0; i < 3; i++) {
	  var user ={};
	  user.name = "my "+i+" is friend name of "+ req.params.user;
	  user.email = "email" + i;
	  friendlist[i] = user;
  }
  res.json(friendlist);
};

exports.profile = function(req, res) {
	var user = {};
	console.log(req.query);
	user.name = "user name " + req.query.user;
	user.email = "user email";
	res.json(user);
}

exports.modify = function(req, res) {
	var user = {};
	user.name = "name " + req.query.name;
	user.email = "email " + req.query.email;
	res.json(user);
}

exports.newuser = function(req, res) {
	res.json(req.body);
}

exports.updateuser = function(req, res) {
	var user = {};
	console.log(req.body);
	user.name = req.body.name;
	user.email = req.body.email;
	res.json(user);
}

exports.photo = function(req, res) {
	var user = {};
	user.name = req.body.name;
	user.email = req.body.email;
	var image = req.files.photo;
	console.log(req);
	user.photo = image.name;
	res.json(user);
}