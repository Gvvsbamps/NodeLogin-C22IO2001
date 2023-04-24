# NodeLogin-C22IO2001
express login page
# website
Гэрийн даалгавар

# create database
```javascript
CREATE DATABASE `nodelogin`;
```
# create table 
``` CREATE TABLE accounts ( id SERIAL UNIQUE, 
username varchar(50) NOT NULL, 
password varchar(255) NOT NULL, 
email varchar(100) NOT NULL, 
PRIMARY KEY (id) ) ```

# insert user
```
INSERT INTO accounts (id, username, password, email) VALUES (1, 'test', 'test', 'test@test.com');
```
# install express
```javascript
$ npm i express
```
or
```javascript
$ npm i express-session
```
# run server
```javascript
$ npm i tsx
```
# view website
```javascript
localhost:3000
```
or
```javascript
127.0.0.1:3000
```
