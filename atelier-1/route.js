const http = require('http');
const url = require('url');
module.exports = http.createServer((req, res) => {
  var coursOps = require('./controller.js');
  const reqUrl =  url.parse(req.url, true);
  // GET endpoint
  if(reqUrl.pathname == '/getCours' && req.method === 'GET') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.getCours(req, res);
  // POST endpoint
  } else if(reqUrl.pathname == '/createCours' && req.method === 'POST') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.createCours(req, res);
  // URL invalide
  } else {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.invalidUrl(req, res);
  }
})