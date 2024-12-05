// Import the redis library
import redis from 'redis';

// Create a Redis client
const client = redis.createClient({
	host: 'localhost',
	port: 6379
});

// Handle successful connection
client.on('connect', () => {
	console.log('Redis client connected to the server');
});

// Handle connection error
client.on('error', (err) => {
	console.log(`Redis client not connected to the server: ${err}`);
});

// setNewSchool function
function setNewSchool(schoolName, value) {
	client.set(schoolName, value, redis.print);
}

// displaySchoolValue function
function displaySchoolValue(schoolName) {
	client.get(schoolName, (_, reply) => {
		console.log(reply)
	});
}

// Calls
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
