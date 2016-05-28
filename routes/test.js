/**
 * http://usejsdoc.org/
 */
exports.testarray = function(req,res) {
	console.log(req);
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write("Hello,World");
	res.end();
}
