# todo-list-mongo-backend
Backend with express and mongodb for the [To-do list frontend](https://github.com/gbosetti/todo-list-loopback-backend.git). It is used as a demo for learning purposes. 

This service can be used interchangeably with:
* [A Loopback-based backend](https://github.com/gbosetti/todo-list-loopback-backend)
* [A JsonServer-based backend](https://github.com/gbosetti/todo-list-jsonserver-backend)

## Setup

Clone the repo
```
git clone https://github.com/gbosetti/todo-list-mongo-backend.git
```
Install dependencies
```
npm install
```

## Use

Start the DBMS (mongod)
```
mongod --dbpath ./bin/data/db/
```
Run `node server.js`. Then, you can use the 
You can use the frontend application to check the service is working or use some tool like curl: 
```
curl -X POST -H "Content-Type: application/json" -d '{"name": "demo"}' http://localhost:3000/todos
```
```
curl -X GET "http://localhost:3000/todos"
```
