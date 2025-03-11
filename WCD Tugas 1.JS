// Soal 1 Luas segitiga
function rectangleArea(length, width){
    return length * width;
}
console.log(rectangleArea(5, 3));

// Soal 2 Luas Lingkaran
function circleProperties(radius) {
    let diameter = 2 * radius;
    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * radius * radius;
    return {
        diameter: diameter,
        circumference: circumference.toFixed(4), 
        area: area.toFixed(3)
    };
}
console.log(circleProperties(5));

// Soal 3 sudut ketiga pada segitiga
function thirdAngle(a ,b) {
    return 180 - (a + b);
}
console.log(thirdAngle(80, 65));

// Soal 4 selisih hari dari 2 tanggal
function dateDifference(date1, date2){
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    let diffTime = Math.abs(d2.getTime() - d1.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
console.log(dateDifference("2024-03-19", "2024-03-21"));

// Soal 5 fetch inisial
function getInitials(name) {
    return name.split(' ').map(word => word[0].toUpperCase()).join('');
}
console.log(getInitials("John Doe"));
