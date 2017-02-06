var express = require('express');
var mongoose = require('mongoose');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

//db
mongoose.connect('mongodb://root:123@ds161038.mlab.com:61038/mymongodb');
var mongoSchema =   mongoose.Schema;

var User = mongoose.model('User',new mongoSchema({
	userName : {type:String,unique:true},
	userPassword : String	
}));

var ida = new mongoose.Schema({
  visits: Number,
  text: String,
  title: String,
  code: String,
  baseUrl: String,
  url: String
});


/// &&

///use place;
app.use(express.static(__dirname))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret:'shhhhhh', resave: false,
  saveUninitialized: true}))
//end
// app.get('/',function(req,res) {
// 	User.find(function(err, users){
// 		if(err){
// 			throw err
// 		}else{
// 		console.log(users)
// 		res.send(users)
			
// 		}
// 	})
// 	//res.sendFile( __dirname + 'index.html');
// });


app.post('/api/login',function(req,res) {
	//console.log('ssajdgasukfguyafgisfgyyasfgasudfguasd')
	//res.sendFile( __dirname + 'index.html');
	User.findOne({userName:req.body.username,userPassword:req.body.password },function(err, users){
		if(err){
			throw err
			res.send("no found")	

		}else{
			console.log(users)
			res.send(users)	
		}
	})
})
app.post('/api/signup',function(req,res) {
	console.log(req.body)
	//console.log('ssajdgasukfguyafgisfgyyasfgasudfguasd')
	//res.sendFile( __dirname + 'index.html');
	User.create({userName:req.body.username,userPassword:req.body.password },function(err, user){
		console.log('imh here')
		if(err){
			throw err
		}
		if(user){
			console.log("bhhdfghjklkjgfdfghjkjfd")
			res.send(user)	
		}else{
			res.send('user exist')
		}
	})
})
// app.post('/',function(req,res) {
// 	console.log('ssajdgasukfguyafgisfgyyasfgasudfguasd')
// 	//res.sendFile( __dirname + 'index.html');
// 	User.find(function(err, users){
// 		if(err){
// 			throw err
// 		}else{
// 		console.log(users)
// 		res.send(users)
			
// 		}
// })
// })
app.listen(process.env.PORT || 8082, function () {
	console.log('Example app listening on port !' +  8082 || process.env.PORT )
});


