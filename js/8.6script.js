function getTriangleArea(a, h) {
	
	if ( (a>0) && (h>0) ) {
		console.log(a*h/2)
	}
	else {
		console.log('Nieprawidłowe dane.')
	}
}

getTriangleArea(5, -2)
getTriangleArea(5, 2)
getTriangleArea(0, -2)
getTriangleArea(0, 10)
getTriangleArea(125, 12)
