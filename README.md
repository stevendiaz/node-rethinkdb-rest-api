# node-rethinkdb-rest-api

Install instructions:

1. Clone repository into your directory
2. `$ npm install`
3. `$ rethinkdb`
4. In another terminal tab, `$ node server.js`
5. In another terminal, enter your cURL commands to get started!


Curl Commands

POST

`$ curl -X POST -H "Content-Type: application/json" -d '{"foo":"bar"}' http://localhost:3000/objects`

GET 

`$ curl -i -H "Accept: application/json" http://localhost:3000/objects`

UPDATE 

`$ curl X PUT -i -H "Accept: application/json" -d '{"up":"date"}' http://localhost:3000/objects/$KEY`

DELETE

`$ curl -X DELETE -i -H "Accept: application/json" http://localhost:3000/objects/$KEY`
