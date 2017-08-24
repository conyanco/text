var request = require('request');
request('https://api.a3rt.recruit-tech.co.jp/proofreading/v1/typo?apikey=hZKOAncBCO4frSyuxZF7JR9l4j8sTBUE&sentence=', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML.
});
