//dates

let myDate=new Date()
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());

let mycreatedDate =new Date(2023,0,23,5,3)
//console.log(mycreatedDate.toDateString());
let mycreatedDate2=new Date("2023-01-14")
//console.log(mycreatedDate2.toLocaleString());

let mytimestamp=Date.now()
//console.log(mytimestamp);

let newDate=new Date()
//console.log(newDate);
//console.log(newDate.getMonth()+1);
//console.log(newDate.getDay());


console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))