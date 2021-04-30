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
	var array_of_showcases = [];
	$.getJSON( "showcases.json")
	.done(function (data) {
		for (elem of data) {
			array_of_showcases.push( new ViewMasterShowcase( elem.title, elem.image, elem.description, elem.author, elem.image_year) )
		} 
	})

	var currentShowcase = array_of_showcases[Math.floor(Math.random() * array_of_showcases.length)];

	$('#shuffle').click(randomize_and_display);

	function randomize_and_display() {
		$('#shuffle').animate({"top": 200},500).animate({"top": 0},500);
		currentShowcase = array_of_showcases[Math.floor(Math.random() * array_of_showcases.length)];
		currentShowcase.display();
		$('#image').fadeIn(500);
	}
}