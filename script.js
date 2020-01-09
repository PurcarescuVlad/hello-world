
// var button = document.getElementById("01");
// var input = document.getElementById("userInput");
// var Mainlist = document.querySelector("ul");


// function createListElement()
// 	{
// 		var newLi = document.createElement("li");
// 			newLi.appendChild(document.createTextNode(input.value))
// 			Mainlist.appendChild(newLi);
// 			input.value ="";
// 	}

// button.addEventListener("click", function()
// { if(input.value.length>0)
// 	{createListElement();}	
// })

// input.addEventListener("keypress", function(event){
// 	if(input.value.length>0 && event.keyCode ===13)
// 		{createListElement();}
// })





var color01 = document.querySelector(".color01");
var color02 = document.querySelector(".color02");
var body = document.getElementById("body");

color01.addEventListener("input", changeBackground);

color02.addEventListener("input", changeBackground);



function changeBackground()
	{
		body.style.background = "linear-gradient(to right, "+ color01.value + "," +color02.value+" )";
	}


// let obj = {
// 	user01: value01,
// 	user02: value02
// }

// Object.keys(obj).forEach((key, index)=>{
// 	console.log(key, obj[key]);
// })

// Object.values(obj)forEach(value => {
// 	console.log(value);
// })

// Object.entries(obj)forEach(value => {
// 	console.log(value);
// })


// Object.entries(obj).map(value =>
// {
// 	return value[1] +value[0].replace('user', '');
// })

// let user = [['x', 1], ['y', 3]]
// Object.fromEntries(user);















 // class Player {
 // 	constructor(name, type)
 // 	{
 // 		this.name=name;
 // 		this.type=type;
 // 	}

 // 	 introduce(){
 // 		console.log(`Hello! My name is ${this.name} and i am a ${this.type}`);
 // 	}
 // }

 // class Wizard extends Player{
 // 	constructor(name, type)
 // 	{
 // 		super(name, type);
 // 	}
 // 	play(){
 // 		console.log(`Yes, i am a ${this.type}`);
 // 	}
 // }


 // const instance01 = new Wizard("Bob", "Mage");
 // const instance02 = new Player("Margaret", "Fighter");

// const obj = {
// 	name : "player",
// 	color: "red",
// 	value: 15
// }
// let {wizardLevel} = obj;

// const testObj {mama, sita, wow} = obj;


// const name = "bob";

// const obj = {
// 	[name]: "gay",
// 	[1+2]: "hihi"
// }


// const compose = (f,g) =>(a) =>f(g(a));

// const sum = (num) => num+1;

// compose(sum, sum)(3);


// const array = [1,2,10,16];

// const double = [];
// const newArray = array.forEach((num => {double.push(num*2);});

// const manArray = array.map(num => {return num*2;});


// var cutAnimal = document.getElementById("test");

// cutAnimal.addEventListener("mouseover", function(event)
// {
// 	event.target.style.color ="purple";

// 		setTimeout(function(){
// 		event.target.style.color="";
// 	},500)

// }, false);


