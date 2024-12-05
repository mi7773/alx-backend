// Import kue
import kue from 'kue';

// Create a queue
const queue = kue.createQueue();

// Create an object containing the job data
const jobData = {
		phoneNumber: '1234567890',
		message: 'abcdefghi',
};

// Create a job
const job = queue.create('push_notification_code', jobData)
	.save((err) => {
		if (!err) {
			console.log(`Notification job created: ${job.id}`);
		}
	});

// Listen for job events
job.on('complete', () => {
	console.log('Notification job completed');
});

job.on('failed', () => {
	console.log('Notification job failed');
});
