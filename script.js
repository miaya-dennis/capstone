let prev = document.getElementById("prevAnimal");
let nextButton = document.getElementById("nextAnimal"); 
let speciesName = document.getElementById("species-name-1");
let species1 = document.getElementById("species-1");
let speciesImage = document.getElementById("imageSpecies");
let species = [];
let index = 0;





//Species Information function
function speciesInfo() {
	let specie = species[index];

	
	species1.textContent = species[index]["Conservation Status"];
	speciesName.textContent = species[index]["Common Name"];
	speciesImage.src = species[index]["Images"];
	
}





// async function 1
async function changeSpecies()  {
  let response = await fetch ("https://student-data-api.miayadennis.workers.dev/api/v1/datasets/endangered-species-of-canada/records?limit=10");
  let data = await response.json();
  species = data.records;
  // DOM update
  speciesInfo()

  
  //species1.textContent = species[index]["Conservation Status"];
	speciesName.textContent = species[index]["Common Name"];


  console.log("species");
}




// Button Commands

prev.addEventListener("click", function () {
	index = index - 1;
	changeSpecies();
	
});

nextButton.addEventListener("click", function () {
	index = index + 1;
	changeSpecies();
});

	
