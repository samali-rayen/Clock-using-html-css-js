const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
console.log(currentDate.toLocaleDateString('en-US', options));
