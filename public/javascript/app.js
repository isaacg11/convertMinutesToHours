
function Convert(num){
	h = Math.floor(num/60);
	m = num%60;
	return(h + "hours"+":"+m+"minutes").toString();
}
console.log(Convert(300));