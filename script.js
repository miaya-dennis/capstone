let prev = document.getElementById("prevAnimal");
let nextButton = document.getElementById("nextAnimal"); 
let join = document.getElementById("join");

let species;
let index= 0;

async function changeSpecies()  {
  let response = await fetch ("https://student-data-api.miayadennis.workers.dev/api/v1/datasets/endangered-species-of-canada/records?limit=10");
  let data = await response.json();
  let species = data.records;

  console.log("species");
}
prev.addEventListener("click", function () {
	changeSpecies();
	
	
});
nextButton.addEventListener("click", function () {
	index = data.record[index] + 1;
	changeSpecies();
	
	
	
});
	
	
