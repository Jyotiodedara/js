 //Date has been a long-standing pain point in ECMAScript.
 //this is a prposal for Temporal, a global object that acts as a top-level namesapce(like Math),
 //that brings a modern date/time API to ECMAScript language, for a detailed look of the problems
 //with Date, and the motivations for Temporal 

 //Temporal.Now.instant()-get the current system exact time
 //Temporal.Now.timeZone()-get the current system time zone
 //Temporal.Now.zonedDateTime(calender) -get the current date and wall-clock time in the system time zone and specified calender
 //Temporal.Now.zonedDateTimeISO() - get the current date and wall-clock time in the system time zone and ISO-8601 calender
 //Temporal.Now.plainDate(calender)- get the current date in the system time zone and specified calender
 //Temporal.Now.plainDateISO()- get the current date in the system time zone and ISO-8601 calender
 //Temporal.Now.plainTimeISO()- get the current wall-clock time in the system time zone and ISO-8601 calender
 //Temporal.Now.plainDateTime(calender)-get the current system date/time in the system time zone,but return an object that doesn't 
 //remember its time zone so should not be used to drive other values(e.g.12 hours later)in time zones that use Daylight saving time(DST).
 //Temporal.Now.plainDateTimeISO() -same as above, but return the DateTime in the ISO-8601 calender.
 // hmna aa valid ny gnay

 //Dates

 //let myDate = new Date()
 //console.log(myDate);// output 2026-08-04T11:28:23.193Z

 //convert in string
 
 let myDate = new Date()
 console.log(myDate.toString());// o/p Tue Aug 04 2026 11:30:56 GMT+0000 (Coordinated Universal Time) 
 console.log(myDate.toDateString());// Tue Aug 04 2026 
 console.log(myDate.toLocaleDateString());//  8/4/2026
 console.log(myDate.toLocaleString());// 8/4/2026, 11:39:10 AM
 console.log(typeof myDate);// object

//declare only specific date
//let myCreatedDate = new Date(2026, 0, 23)
//console.log(myCreatedDate.toDateString());//Fri Jan 23 2026 month 0 thi start thy 0=january

//let myCreatedDate = new Date(2026, 0, 23, 5, 3)
//console.log(myCreatedDate.toLocaleString());// 1/23/2026, 5:03:00 AM

//let myCreatedDate = new Date("2023-01-14")// yyyy/mm/dd formate ma
//console.log(myCreatedDate.toLocaleString());// 1/14/2023, 12:00:00 AM

let myCreatedDate = new Date("01-14-2023")// mm/dd/yyyy
//console.log(myCreatedDate.toLocaleString());//1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());// milisecond ma time ape 1785844981245 1673654400000
//console.log(Date.now());// 1785845106891 millisecond ma time 
//console.log(Math.floor(Date.now()/1000));// 1785845400

//few more Date methods
let newDate = new Date()
console.log(newDate);// o/p 2026-08-04T12:13:07.986Z
console.log(newDate.getMonth());// 7 month 0 thi count thy etle 8 ne 7 aypu
console.log(newDate.getMonth() + 1);// exact month o/p 8
console.log(newDate.getDay());// 2

//full time leva mate stirnginterpolation use thy
//`${newDate.getDay()} and the time is`

//extra
newDate.toLocaleString('default',{
    weekday: "long"
})
