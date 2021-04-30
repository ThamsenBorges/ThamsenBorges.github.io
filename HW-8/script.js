function lazyload() {
	class ViewMasterShowcase {
		constructor(title, image, description, author, image_year) {
			[this.title,this.image,this.description,this.author,this.image_year] = [title, image,description,author,image_year];
		}

		display() {
			$('#title').text(this.title);
			$('#image').fadeOut(500, function () { $('#image').attr('src', currentShowcase.image) });
			$('#description').text(this.description);
			$('#author').text(this.author);
			$('#image_year').text(this.image_year);
		}
	}

	var array_of_showcases = [
	new ViewMasterShowcase('Shiba Biting Her Toy','pics/frisbeeyuna.jpg','Yuna happy with her frisbee','Thamsen Borges','2019'),
	new ViewMasterShowcase('Yellowheaded Blackbird','pics/yellowheaded.jpg','A bird with a yellow head','Thamsen Borges','2019'),
	new ViewMasterShowcase('Red-winged Blackbird','pics/redwing.jpg','A bird with yellow and red accents','Thamsen Borges','2021'),
	new ViewMasterShowcase('Sharp-shinned Hawk','pics/hawk.jpg','Hawk looks for prey','Thamsen Borges','2021'),
	new ViewMasterShowcase('Moon','pics/daymoon.jpg','The moon during the day','Thamsen Borges','2017')
	];

	var currentShowcase = array_of_showcases[Math.floor(Math.random() * array_of_showcases.length)];

	$('#shuffle').click(randomize_and_display);

	function randomize_and_display() {
		$('#shuffle').animate({"top": 200}, 500).animate({"top": 0}, 500);
		currentShowcase = array_of_showcases[Math.floor(Math.random() * array_of_showcases.length)];
		currentShowcase.display();
		$('#image').fadeIn(500);
	}
}