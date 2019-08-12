const axios = require('axios');
const fs = require('fs');
var path = require('path');
const parser = require('xml2json');

const url = 'https://api.ncnu.edu.tw/API/get.aspx?xml=course_ncnu&year=108&semester=1&unitId=all';
const file_path = path.join(__dirname, 'course_data.json');
axios.get(url).then(function(response){
	// console.log(response.data); // ex.: { user: 'Your User'}
	const xml = response.data;
	const json = parser.toJson(xml);
	
	const object = JSON.parse(json);
	const courses = object.course_ncnu.item

	fs.writeFile(file_path, JSON.stringify(courses, undefined, 2), function (err) {
    	if (err)
        	console.log('[Error]', err);
    	else
        	console.log('[Successful]');
	});

}); 
