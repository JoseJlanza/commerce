// objects with three properties using object literal notation for soccer jerseys 
// var litobjectjersy1 = {
// 	image: "img/barca.jpg",
// 	team: "Barcelona",
// 	size: "medium",
// }
// var litobjectjersy2 = {
// 	image: "img/manU.jpg",
// 	team: "Manchester United",
// 	size: "large",
// }
// var litobjectjersy3 = {
// 	image: "img/madrid.jpg",
// 	team: "Real Madrid",
// 	size: "medium",
// }
// var litobjectjersy4 = {
// 	image: "img/mancity.jpg",
// 	team: "Manchester City",
// 	size: "large",
// }
// var litobjectjersy5 = {
// 	image: "img/psg.jpg",
// 	team: "Paris st.Germen",
// 	size: "large",
// }
// var litobjectjersy6 = {
// 	image: "img/juventus.jpg",
// 	team: "Juventus",
// 	size: "medium",
// }

// console.log(litobjectjersy6,litobjectjersy5,litobjectjersy4,litobjectjersy3,litobjectjersy2,litobjectjersy1)

// product constructor
function Jerseys(team,size,stock,image) {
	this.image = image;
	this.team = team;
	this.size = size;
	this.stock = stock;
}

// create new products from the product constructor



var Jersey1 = new Jerseys ("Barcelona","medium",3 ,"img/barca.jpg")
var Jersey2 = new Jerseys ("Manchester United","large", 13,"img/manu.png")
var Jersey3 = new Jerseys ("Real Madrid","medium",7, "img/realmadrid.jpg")
var Jersey4 = new Jerseys ("Manchester City","large",17,"img/Mancity.jpg")
var Jersey5 = new Jerseys ("Paris St Germen","large",11,"img/psg.jpg")
var Jersey6 = new Jerseys ("Liverpool","medium",22,"img/liverpool.jpg")
// create an array to add products to
// create an array to add products to

var jerseysArray = new Array

// add products to array of products
 
 jerseysArray.push(Jersey1, Jersey2, Jersey3 , Jersey4, Jersey5, Jersey6)


 for( var i = 0; i < jerseysArray.length; i++) {
 	// create new elements for each 
 	//product
 	var newItem = document.createElement("div")
 	var newDiv = document.createElement("div")
 	var teamH1 = document.createElement("h1")
 	var image = document.createElement("img")
 	var sizeH4 = document.createElement("h4")
 	var stockH4 = document.createElement("h4")
 	var btn = document.createElement("button")

 	//create text for new elements 
 	var jTeam = document.createTextNode(jerseysArray[i].team)
 	var jSize = document.createTextNode("available size: " + jerseysArray[i].size)
 	var jStock = document.createTextNode("In Stock: " + jerseysArray[i].stock)
 	var jbtn = document.createTextNode("Buy Now!")

 	// update source attribute
 	image.src = jerseysArray[i].image

 	// update class attributes

 	image.className = "img-responsive"
 	btn.className = " btn btn-primary btn-lg"
 	newItem.className = "col-lg-6"
 	newDiv.className = "Jersey jerseyname" + [i] + "thumbnail"

 	//add text to elements

 	teamH1.appendChild(jTeam)
 	sizeH4.appendChild(jSize)
 	stockH4.appendChild(jStock)
 	btn.appendChild(jbtn)

 	//add elements to new div 

 	newDiv.appendChild(teamH1)
 	newDiv.appendChild(image)
 	newDiv.appendChild(sizeH4)
 	newDiv.appendChild(stockH4)
 	newDiv.appendChild(btn)

 	//add new div to new item div

 	newItem.appendChild(newDiv)

 	// add new item to the element with id="Jersys"
 	document.getElementById("products").appendChild(newItem)


 }
