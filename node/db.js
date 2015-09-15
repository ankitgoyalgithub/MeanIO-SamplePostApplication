var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/social', function(error){
	if(error){
		console.log(err);
		throw err;
	} else {
		console.log('mongdb connected');
	}
});
module.exports = mongoose