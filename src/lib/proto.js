/*
AUTHOR: Benjamin Ofoedu
Inspired by:
http://www.netinstructions.com/simple-web-scraping-with-node-js-and-javascript/
https://scotch.io/tutorials/scraping-the-web-with-node-js
*/

exports.generateJSON = function(){
  var request = require("request");
  var cheerio = require("cheerio");
  var jsonfile = require("jsonfile");
  //Necessary module imports.
  var url = "http://www.seasky.org/astronomy/astronomy-calendar-current.html";
  request(url, function(error, response, body){ //Get the URL (which is now "body")
    if(error){ //Error handler
      console.log("ERROR: " + error);
      return false;
    }
    console.log(response.statusCode); //Not mandatory, but useful diagnostic.
    var che = cheerio.load(body); //Pass url to cheerio
    var events = []; //Array which we'll parse into JSON.
    var ename;
    var edate;
    var edesc;
        che('div#right-column-content li').each(function(i, elem){ //For each list element on the page
            edesc = che(this).clone().find('p').children().remove().end().text(); //Add the description.
            //Psuedocode: Clone this segment of HTML. Find all instances of 'p'. Find and remove any child segments they may have.
            edate = che(this).find('span.date-text').text(); //Add the date.
            ename = che(this).find('span.title-text').text(); //Add the name.
            edesc = edesc.substring(4); //Remove dash and trailing whitespace.
            events[i] = {"ename":ename, "edate":edate, "edesc":edesc}; //And add it all into the array.
        });
    jsonfile.writeFile('data.json', events, (err)=>{//Create JSON file.
      console.log('success');
    });
  });
}
