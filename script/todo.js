window.addEventListener('DOMContentLoaded', function () {
//Variables
var file = require("./file");
var current_list = {};
var urgentNode   = document.getElementById('urgent-content');
var normalNode   = document.getElementById('normal-content');
var dailyNode    = document.getElementById('daily-content');
var longTermNode = document.getElementById('long-term-content');

//Functions
function initNode(node, jsonData) {
	//alert(JSON.stringify(jsonData));
	for(var jobID in jsonData) {
		//alert("Init node");
		var html = '<div id=' + jobID + '>';
		html += '<h2>' + jsonData[jobID]['content'] + '</h2>'
		html += '<table>'
		//alert(JSON.stringify(jsonData[jobID]['actions']))
		for(var actionNum in jsonData[jobID]['actions']) {
			html += '<tr>';
			html += '<td>' + actionNum + '</td>';
			html += '<td>' + jsonData[jobID]['actions'][actionNum] + '</td>';
			html += '</tr>'
		}
		html += '</table></div>';
		node.innerHTML = html;
	}
}

function init() {
	initNode(urgentNode, current_list['urgent']);
	initNode(normalNode, current_list['normal']);
	initNode(dailyNode, current_list['daily']);
	initNode(longTermNode, current_list['long-term']);
}

function storeToFileSystem() {
	var jsonText = JSON.stringify(current_list);
	file.write(jsonText, function() {
		//LOGGING
	});
}

//Operations
file.read(function(data) {
	//alert(data);
	current_list = JSON.parse(data);
	if (current_list['urgent']) {
		//alert(JSON.stringify(current_list['urgent']));
		init();
	} else {
		alert("Sucks!");
	}
	
});

}, false);