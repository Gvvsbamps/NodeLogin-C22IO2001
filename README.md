# NodeLogin-C22IO2001
express login page

# create database
```javascript
CREATE DATABASE `nodelogin`;
```
# create table 
``` javascript
CREATE TABLE accounts ( id SERIAL UNIQUE, 
username varchar(50) NOT NULL, 
password varchar(255) NOT NULL, 
email varchar(100) NOT NULL, 
PRIMARY KEY (id) ) 
```
# insert user
```javascript
INSERT INTO accounts (id, username, password, email) VALUES (1, 'test', 'test', 'test@test.com');
```
# install express
```javascript
$ npm i express
```
# install express-session
```javascript
$ npm i express-session
```
# install pg
```javascript
$ npm i pg
```
# install dotenс
```javascript
$ npm i dotenv
```
# install typescript
```javascript
$ npm i typescript
```
# install ts-node
```javascript
$ npm i -g ts-node 
```
# run ts-node
```javascript
ts-node login.ts
```
# View localhost
```javascript
localhost:3000
```
