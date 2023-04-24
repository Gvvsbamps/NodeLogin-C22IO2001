import express from 'express';
import session  from 'express-session';
const path = require('path');
const client = require('./connection/connection.js');
//database holbolt
const app = express();

client.connect(function (err: any) {
	if (err) throw err;
	console.log("Connected!");
});
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

// http://localhost:3000/ Homepage
app.get('/', function (request: express.Request,response: express.Response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/login.html'));
});
//Login huudasnaas sign up darahad
app.post('/signup', function (request: express.Request,response: express.Response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/signup.html'));
});

// http://localhost:3000/auth Login submit hiih uildel
app.post('/auth1', function (request: express.Request, response: express.Response) {
	//Oroltiin utga
	let username = request.body.username;
	let password = request.body.password;
	// Username Passwordoo shalgana
	if (username && password) {
		// Databasees haina
		client.query('SELECT * FROM accounts WHERE username = $1 AND password = $2', [username, password], function (error: any, results: any, fields: any) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists

			if (results.rowCount>0 && request.session) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

//Burtguuleh heseg deer submit hiihed ajillana
app.post('/auth2', function (request: express.Request, response: express.Response) {
	// Garaas ireh utaguud
	let username = request.body.username;
	let password = request.body.password;
	let email    = request.body.email;
	
	//Talbaruud utgatai esehiig shalgana
	if (username && password && email) {
		//Select hiij username dawhatsaj bga esehiig shalgaad dawhatsaj baival shuud newtreed homeruu zaana
		client.query('SELECT * FROM accounts WHERE username = $1 AND password = $2', [username, password], function (error: any, results: any, fields: any) {
			if (error) throw error;
			if (results.rowCount>0 && request.session) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/home');
			} else {
	//Dawhatsaagui bol Insert hiine 
				client.query('INSERT INTO accounts (username,password,email) VALUES ($1, $2,$3)', [username,password,email],function(error: any, results: any, fields: any){
				})
				//Amjilttai burtguullee huudasruu zaana
				response.redirect('/confirmation');
			}
			response.end();
		});
	}
}
);

//Login huudas deer amjilttai newtersen bol
app.get('/home', function (request: express.Request, response: express.Response) {
	
	if (request.session?.loggedin) {
		response.send('Amjilttai newterlee, ' + request.session.username + '!');
	}else {
		response.send('Medeellee oruulna uu!');
	} 
	response.end();
});

app.get('/confirmation', function (request: express.Request, response: express.Response) {
	// If the user is loggedin
	response.send('Amjilttai burtgegdlee!');
	response.end();
});
app.listen(3000);
