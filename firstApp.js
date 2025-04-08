//const sensorLib = require('node-dht-sensor'); // include existing module called ‘node-dht-sensor’
// Setup sensor, exit if failed
//var sensorType = 11; // 11 for DHT11, 22 for DHT22 and AM2302
//var sensorPin = 4; // The GPIO pin number for sensor signal
//if (!sensorLib.initialize(sensorType, sensorPin))
//{
//print a warning message in the console
//console.warn('Failed to initialize sensor’);
//process.exit(1);
//}
// Automatically update sensor value every 2 seconds
//we use a nested function (function inside another function)
setInterval(function() {
//var readout = sensorLib.read();
var highTem = 30;
var lowTem = 10;
var randomTemparature = Math.random() * (highTem - lowTem) + lowTem
console.log('Temperature:', randomTemparature.toFixed(1) + 'C’);
var highHum = 100;
var lowHum = 0;
var randomHumidity = Math.random() * (highHum - lowHum) + lowHum
console.log('Humidity: ', randomHumidity.toFixed(1) + '%');
}, 2000);
