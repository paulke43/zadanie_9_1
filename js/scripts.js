function getTriangleArea(a, h) {
	
	if ((a <= 0) || (h <= 0)) {
		return 'Nieprawidłowe dane';
	}
	return (a*h/2);
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(5, 0);
var triangle3Area = getTriangleArea(-1, 3);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);