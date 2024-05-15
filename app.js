//Task1
var today = new Date();
document.write(today, '<br><br>');

//Task2
let month = today.getMonth();
let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
document.write(monthNames[month], '<br><br>');

//Task3
let day = today.getDay();
let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
document.write('Today is ', dayNames[day], '<br><br>');

//Task4
if (day == 0 || day == 6) {
    document.write("It's Fun day <br><br>");
}
else{
    document.write("It's not a Fun day <br><br>");

}

//Task5
let date = today.getDate();

if (date <= 15){
    document.write("First fifteen days of the month <br><br>");
}
else if (date >= 16){
    document.write("Last days of the month <br><br>");
}

//Task6
let oldtime = today.getTime()
document.write('Current Date: ', today, '<br>');
document.write('Elapsed miliseconds since January 1, 1970: ', oldtime, '<br>');
document.write('Elapsed minutes since January 1, 1970: ', oldtime/(1000 * 60), '<br><br>');

//Task7
let hours = today.getHours();
let AMfinder
if(hours >= 0 && hours <= 12){
    AMfinder = 'AM'
}
else if(hours >= 13 && hours <= 23){
    AMfinder = 'PM'
}
document.write("It's ", AMfinder, '<br><br>');

//Task8
let laterDate = new Date('31 Dec 2020');
document.write("Later date: ", laterDate, '<br><br>');

//Task9
let daysfinder = new Date('June 18, 2015');
let diff = today - daysfinder
let remain = Math.round(diff/ (1000 * 60 * 60 * 24));

document.write(`${remain} days passed since 1st Ramadan, 2015 <br> <br>`);

//Task10
let startof2015 = new Date('1 Jan 2015');
let referenceDate = new Date('5 Dec 2015');
let diff2015 = referenceDate - startof2015;
let seconds2015 = Math.round(diff2015 / 1000);

document.write(`On reference date: ${referenceDate}, ${seconds2015} seconds had passed since the beginning of 2015 <br> <br>`);

//Task11
let todayDate = new Date();
let todayHours = todayDate.getHours();

document.write(`Current Date: ${todayDate} <br>`);

todayDate.setHours(todayHours - 1);
document.write(`1 hour ago: ${todayDate} <br> <br>`);

//Task12
let todayDate12 = new Date();
let todayYear = todayDate12.getFullYear();

todayDate12.setFullYear(todayYear - 100);
alert(`Current Date: ${today}, 100 years back: ${todayDate12}`);

//Task13
let age = prompt('your age');
let birthyear = today.getFullYear() - age
alert(`Your birthyear: ${birthyear}`);
