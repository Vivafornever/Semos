// console.log("Hello from Node.js");

// var integer1 = 5;
// var integer2 = 10;

// var sum = integer1+integer2;

// console.log(integer1 + " + " + integer2 + " = " + sum );



// var name = "IVA";
// var pass = "000000";
// var nameUpdated = name.toLowerCase();

// if(nameUpdated == "iva"){
// 	console.log("Hello " + name);
// }
// else{
// 	console.log("Unsucessful");
// }


// switch(name){
// 	case "Iva": 
// 		console.log("Hello " + name);
// 		break;
// 	case "IVA": 
// 		console.log("Hello " + name);
// 		break;
// 	default:
// 		console.log("Unsucessful");
// }


// var firstName = "Iva ";
// var lastName = "Pivkova";

// var fullName = firstName.concat(lastName);
// console.log(fullName);

// var boolean = true;

// console.log(boolean);


// var integer = [3, 4, 5, 6, 7, 8, 9, 10, 12];

// integer[100] = 50;

// console.log(integer);

// for(let i=0; i < integer.length; i++){
// 	console.log(integer[i] +": ");

// 	if(integer[i] % 3 == 0 ){
// 		console.log("buzz");
// 	}

// 	if(integer[i] % 4 == 0){
// 		console.log("fiz");
// 	}

// 	console.log( "\n");

// }


var brojac = 0;

// for(let i = 10; i > brojac; i--){
// 	console.log(i);
// }

// while(brojac < 10){
// 	brojac++;

// 	console.log(brojac);
// }

// do {
// 	brojac++;
// 	console.log(brojac);
// }
// while(brojac < 10)


var names = ['iva', 'ana', 'marija'];
var pass = ['aa', 'bb', '000'];

var myName = 'ana';
var myPass = 'bbb';


for(let i= 0; i< names.length; i++){

	if(names[i] == myName && pass[i] == myPass ){
		console.log("logged in");
	}

	else{
		console.log("error");
	}



}