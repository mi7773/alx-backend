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

// Using hset
client.hset('HolbertonSchools', 'Portland', '50', redis.print);
client.hset('HolbertonSchools', 'Seattle', '80', redis.print);
client.hset('HolbertonSchools', 'New York', '20', redis.print);
client.hset('HolbertonSchools', 'Bogota', '20', redis.print);
client.hset('HolbertonSchools', 'Cali', '40', redis.print);
client.hset('HolbertonSchools', 'Paris', '2', redis.print);

// Using hgetall
client.hgetall('HolbertonSchools', (_, result) => {
	console.log(result);
});
