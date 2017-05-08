'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CitySchema = new Schema({
	cityName: String,
	cityIMG: String,
	type: String,
	post: String
})

var City = mongoose.model('City', CitySchema);

module.exports = City;