const url = process.argv[2];
const path = process.argv[3]

const request = require('request');
const fs = require('fs')

request(url, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(path, body, (err) => {
    if (err) throw err;
    fs.stat(path,(err, stats)=>{
      // console.log(stats)
      if (!err) console.log(`Downloaded and saved ${stats['size']} bytes to ${path}`)
    });
  });
});

