export default (input) => {
	if (!input.value.trim().length)
		return `Field ${input.name} is required`
	
	return true; 
};