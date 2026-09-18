let join = document.getElementById("join");
const buttonRand = document.getElementById("randButton");
let speciesName = document.getElementById("species-name-1");
let species1 = document.getElementById("species-1");
let speciesImage = document.getElementById("imageSpecies");
let message = document.getElementById("specialMessage");
let species = [];
let index = 0;


/*function randomClick() {
	let specie = species[index];
	let randomIndex = Math.floor(Math.random() * data.length);

            species1.textContent = species[index]["Conservation Status"];
	

	
	
	speciesName.textContent = species[index]["Common Name"];
	speciesImage.src = species[index]["Images"];
	
}*/



/*async function 2
async function randomSpecies() {
	let response = await fetch ("https://student-data-api.miayadennis.workers.dev/api/v1/datasets/endangered-species-of-canada/records?limit=10");
  let data = await response.json();
  species = data.records;
  randomClick()



  
  species1.textContent = species[index]["Conservation Status"];
	speciesName.textContent = species[index]["Common Name"];
	
}*/




	
buttonRand.addEventListener("click", async function() {
  const response = await fetch("https://student-data-api.miayadennis.workers.dev/api/v1/datasets/endangered-species-of-canada/records?limit=10");
  const data = await response.json();
  const randomIndex = Math.floor(Math.random() * data.records.length);
  const messages = [
  "Awesome! you chose the spectacular Eschrichtius Robustus as the first record",
  "Hooray! your special animal was the adorable Mustela Nigripes as the second record",
  "Congrats! your cool species was the Oboneus Rosmarus Rosmarus as the third record",
  "Nice! your random animal was the gigantic Balaenoptera Borealis as the fourth record",
  "Congrats! your species is the Balaenoptera Musculus as the fifth record",
  "Hooray! you picked the Balaenoptera Musculus as the sixth record",
  "Woo Hoo! you chose the Dipodomys Ordii as the seventh record",
  "Nice Job! your choice was the Eubalaena Glacialis as the eigth record",
  "Rad! your pick was the Eubalaena Japonica as the ninth record",
  "Fantastic! your random animal was the Gulo Gulo as the tenth record",
  ];
  
	  document.getElementById("species-1").textContent =
	 data.records[randomIndex]["Conservation Status"];
	 
	 document.getElementById("species-name-1").textContent =
	 data.records[randomIndex]["Common Name"];
	 
	 document.getElementById("imageSpecies").src =
	 data.records[randomIndex]["Images"];
	 
	 message.textContent = 
	 data.records[randomIndex]["id"] + " - " + messages[randomIndex];
	 
   
});
	