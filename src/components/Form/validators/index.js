import required from './required.js';
import email from './email.js';

export default {
	required: (input) => required(input),
	email: (input) => email(input)
};