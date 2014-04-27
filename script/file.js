var fs = require('fs');
var data_path = './Todo/data/todo.json';

function read(callback) {
	fs.readFile(data_path, 'utf-8', function (error, contents) {
		if (error) {
		} else {
			callback(contents);
		}
	});
}

function write(data, callback) {
	fs.writeFile(data_path, data, function(error) {
		if (error) {
		} else {
			callback();
		}
	});
}

exports.read = read;
exports.write = write;