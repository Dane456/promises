/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');
// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO

  fs.readFile(filePath, 'utf-8', function(err, body) {
    if (err) {
      callback(err);
    } else {
      var temp = '';
      var i = 0;
      while (body[i] !== '\n') { 
        temp += body[i];
        i++;
      }
      callback(null, temp);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (filePath, callback) {
  // TODO
  request(filePath, function(err, res, body) {
    if (err) {
      callback(err);
    } else {
      callback(null, res.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
