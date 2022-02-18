var amount = document.getElementById("amount");
var people = document.getElementById("number");
var button = document.getElementById("cal");
var service= document.getElementById('select');


button.addEventListener('click' , function(){

     alert("Split Amount is:-" +(amount.value/(people.value)) +" AND Tip Amount is :- " + ((amount.value)/(people.value))*0.10 +"$");
     amount.value= '';
     people.value='';

 });

// $("button").on('click', function(){
// 	if ($(".service.val()== 'Outstanding'")){
// 		alert("Split Amount is:-" +(amount.value/(people.value)) +" AND Tip Amount is :- " + ((amount.value)/(people.value))*0.10 +"$");
// 	amount.value= '';
// 	people.value='';
// 	}
// 	else{
// 		alert("Split Amount is:-" +(amount.value/(people.value)) +" AND Tip Amount is :- 0 $");
// 	amount.value= '';
// 	people.value='';
// 	}
// });  ///naiii kam kr raha