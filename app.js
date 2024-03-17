// chapter 14 to 16

//Question 1
// var JS=[];
// console.log(JS)
// JS.push("Zohaib ali shah");
// JS.push("Jibran");


//Question 2

// var fruits=['Apple','Banana','Grapes','Mango'];
// console.log(fruits[0]);
// console.log(fruits[2]);


// //Question 3
// var num=['5','6','9','3','33'];
// console.log(num[0]);
// console.log(num[4]);


//Question 4
// var booleanArray = [true, false, true, true, false];
// console.log(booleanArray[0]); 
// console.log(booleanArray[2]);

//Question 5

// var mixed=['sadar',0,true,false,'karachi',10]
// console.log(mixed[3])
// console.log(mixed[1])

//Question 7

// var qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];

// document.write('<h2> Qualifications in Pakistan:</h2>');
// document.write('<ol>');

// for (var i = 0; i < qualifications.length; i++) {
//     document.write('<li>' + qualifications[i] + '</li>');
// }

// document.write('<ol>');


//Queestion 8

// var studentNames = ['zohaib', 'shoaib', 'huzaif'];
// var scores = [420, 380, 450]; // Assuming total marks are 500 for each student

// // Calculate percentages for each student
// var totalMarks = 500;
// var percentageJohn = (scores[0] / totalMarks) * 100;
// var percentageSarah = (scores[1] / totalMarks) * 100;
// var percentageMike = (scores[2] / totalMarks) * 100;


// // Display the scores and percentages of students
// document.write('<h1> Marks and percentage</h1>')
// document.write('<table >');


// document.write('<tr>');
// document.write('<td>' + studentNames[0] + '</td>');
// document.write('<td>'+"Score is  "+ scores[0] + '</td>');
// document.write('<td>'+",percentage is   "+ percentageJohn.toFixed(2) + '%</td>');
// document.write('</tr>');

// document.write('<tr>');
// document.write('<td>' + studentNames[1] + '</td>');
// document.write('<td>'+"Score is  "+ scores[1] + '</td>');
// document.write('<td>' +",percentage is   " + percentageSarah.toFixed(2) + '%</td>');
// document.write('</tr>');

// document.write('<tr>');
// document.write('<td>' + studentNames[2] + '</td>');
// document.write('<td>'+"Score is  " + scores[2] + '</td>');
// document.write('<td>' +",percentage is   " + percentageMike.toFixed(2) + '%</td>');
// document.write('</tr>');

// document.write('</table>');


//Question 9

// var colors = ['Red', 'Green', 'Blue'];
// document.write( colors.join(',') );
// var colorAdd=prompt("enter color you want");
// colorAdd.unshift(colorAdd)
// document.write(colors.join(','))
// var colorToAddEnd = prompt('Enter a color to add to the end:');
// colors.push(colorToAddEnd);
// document.write('<p>' + colors.join(', ') + '</p>');

//Question 10

// var studentScores = [85, 92, 78, 88, 95];
// document.write('<p>' +"Score of stydent : "+ studentScores.join(', ') + '</p>');
// studentScores.sort(function(a, b) {
//     return a - b;
// });

// document.write('<p>' + studentScores.join(', ') + '</p>');\


//Question 11

// var cities = ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad'];
// document.write('<h1> cities</h1>')
// document.write(cities)

// var selectedCities = [];
// selectedCities = cities.slice(0,2); 
// document.write('<h1>Selected Cities:</h1>');
// document.write('<p>' + selectedCities.join(', ') + '</p>');



//Question 12

// var arr = ['This', 'is', 'my', 'cat'];
// document.write('<h3> Array:</h3>')
// document.write(arr);
// var String = arr.join(' , ');
// document.write('<h3> String:</h3>');
// document.write('<p>' + String + '</p>');

//Question 15
// var manufacturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];

// var select =
//   '<select>' +
//   '<option >' + manufacturers[0] + '</option>' +
//   '<option >' + manufacturers[1] + '</option>' +
//   '<option>' + manufacturers[2] + '</option>' +
//   '<option>' + manufacturers[3] + '</option>' +
//   '<option >' + manufacturers[4] + '</option>' +
//   '<option >' + manufacturers[5] + '</option>' +
//   '</select>';


// document.write('<h3>Select Phone Manufacturer:</h3>');
// document.write(select);