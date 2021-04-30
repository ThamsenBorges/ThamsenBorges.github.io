function lazyload() {
	class ViewMasterShowcase {
		constructor(title, image, description, author, image_year) {
			[this.title,this.image,this.description,this.author,this.image_year] = [title, image,description,author,image_year];
		}

		display() {
			document.getElementById('title').textContent = this.title;
			document.getElementById('image').src = this.image;
			document.getElementById('description').textContent = this.description;
			document.getElementById('author').textContent = this.author;
			document.getElementById('image_year').textContent = this.image_year;
		}
	}

	var array_of_showcases = [
	new ViewMasterShowcase('Shiba Biting Her Toy','pics/frisbeeyuna.jpg','Yuna happy with her frisbee','Thamsen Borges','2019'),
	new ViewMasterShowcase('Yellowheaded Blackbird','pics/yellowheaded.jpg','A bird with a yellow head','Thamsen Borges','2019'),
	new ViewMasterShowcase('Red-winged Blackbird','pics/redwing.jpg','A bird with yellow and red accents','Thamsen Borges','2021'),
	new ViewMasterShowcase('Sharp-shinned Hawk','pics/hawk.jpg','Hawk looks for prey','Thamsen Borges','2021'),
	new ViewMasterShowcase('Moon','pics/daymoon.jpg','The moon during the day','Thamsen Borges','2017')
	]

	var currentShowcase = array_of_showcases[Math.floor(Math.random() * array_of_showcases.length)];

	document.getElementById('shuffle').addEventListener("click", randomize_and_display);

	function randomize_and_display() {
		currentShowcase = array_of_showcases[Math.floor(Math.random() * array_of_showcases.length)];
		currentShowcase.display();
	}
}