
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