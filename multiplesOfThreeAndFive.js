var i = 0;

var sum = 0;

function checkI() {

	while(i<999){
    
		i++;
    
		if (i%3===0 || i%5===0){

			sum = sum + i;

		}
	}

	return sum;

}


checkI();