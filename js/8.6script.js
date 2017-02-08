function getTriangleArea(a, h) {
	
	if ( (a>0) && (h>0) ) {
		alert(a*h/2)
	}
	else {
		alert('Nieprawidłowe dane.')
	}
}

getTriangleArea(5, -2)


/* Na kodilli ot chyba było w ten sposób

function getTriangleArea(a, h) {
	if ( (a<0) || (h<0) ) {
		alert('Nieprawidłowe dane.')
	} else {
		alert(a*h/2)
	}
}

getTriangleArea(5, -2)
*/