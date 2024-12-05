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

	// Subscribe to the channel
	client.subscribe('holberton school channel');
});

// Handle connection error
client.on('error', (err) => {
	console.log(`Redis client not connected to the server: ${err}`);
});

// Event listener for receiving messages on the subscribed channel
client.on('message', (_, message) => {
	console.log(message);
	if (message === 'KILL_SERVER') {
		client.unsubscribe('holberton school channel');
		client.quit();
	}
});
