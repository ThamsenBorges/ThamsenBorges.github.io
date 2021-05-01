const $ = selector => document.querySelector(selector)

function shuffled(array) {
	let shuffled_array = [...array];
	for (let i = shuffled_array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[shuffled_array[i], shuffled_array[j]] = [shuffled_array[j], shuffled_array[i]];
	}
	return shuffled_array;
}

function random_item_from(array) {
	return array[Math.floor(Math.random()*array.length)];
}

function beginning() {
	setTimeout(function() {
		$("aside").classList.toggle('gone');
		middle();
	}
	,2000);
}

function middle() {

	const real_numbers = shuffled([1,2,3,4]);
	const fake_numbers = shuffled([1,2,3,4]);

	class Guess_Tile { // Can only be instantiated 4 times per round (or numbers will be undefined)

		constructor(tile_element) {
			const colors = shuffled(['black', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'purple']);
			const shapes = shuffled(['square', 'circle', 'rectangle', 'triangle']);
			this.real_number = real_numbers.pop();
			this.fake_number = fake_numbers.pop();
			this.text = random_item_from(colors).toUpperCase() + "<br /><br />" +  random_item_from(shapes).toUpperCase();
			this.fake_number_color = colors.pop();
			this.background_color = colors.pop();
			this.shape = random_item_from(shapes);
			this.shape_color = colors.pop();
			this.text_color = colors.pop();
			this.tile_element = tile_element;
		}

		display_real_number() {
			setTimeout(() => this.tile_element.querySelector('.real_number').classList.toggle("gone"),2000);
			this.tile_element.querySelector('.real_number').textContent = this.real_number;
			this.tile_element.querySelector('.real_number').classList.toggle("fade-out");
		}

		display_challenge() {
			this.tile_element.style.background = this.background_color;
			this.tile_element.querySelector('.shape').classList.add(this.shape);
			if (this.shape === "triangle") {
				this.tile_element.querySelector('.shape').style.borderBottom = "100px solid " + this.shape_color;
			}
			else { 
				this.tile_element.querySelector('.shape').style.background=this.shape_color; 
			}
			this.tile_element.querySelector('.text').innerHTML = this.text;
			this.tile_element.querySelector('.text').style.color = this.text_color;
			this.tile_element.querySelector('.fake_number').textContent = this.fake_number;
			this.tile_element.querySelector('.fake_number').style.color = this.fake_number_color;
		}

		property_question_pair() {
			let possible_questions = {
				" <strong>background color</strong> of " : this.background_color,
				" <strong>shape</strong> in " : this.shape,
				" <strong>color of the text</strong> in " : this.text_color,
				" <strong>number</strong> now in " : this.fake_number,
				" <strong>color of the number</strong> now in " : this.fake_number_color,
				" <strong>color of the shape</strong> in " : this.shape_color
			 }
			let first = random_item_from(Object.keys(possible_questions));
			let second = possible_questions[first];
			return [first, second];
		}
	}

	let array_of_tiles = [
	new Guess_Tile($('#square-1')),
	new Guess_Tile($('#square-2')),
	new Guess_Tile($('#square-3')),
	new Guess_Tile($('#square-4'))
	];

	for (tile of array_of_tiles) {
		tile.display_real_number();
	}

	let question_boxes = [random_item_from(array_of_tiles) , random_item_from(array_of_tiles) ];
	let answer_pairs = [ question_boxes[0].property_question_pair(), question_boxes[1].property_question_pair() ];
	let question_text = "Enter the"
						+ answer_pairs[0][0]
						+ "the box originally marked with the number <strong>" 
						+ question_boxes[0].real_number 
						+ "</strong> and the" 
						+ answer_pairs[1][0] 
						+ "the box originally marked with the number <strong>"
						+ question_boxes[1].real_number
						+ "</strong>:";
	for (tile of array_of_tiles) {
		tile.display_challenge();
	}
	$('#question').innerHTML = question_text;

	setTimeout(function () { for (elem of ['#input','#question']) { $(elem).style.visibility = "visible" }}, 2000);
	console.log(answer_pairs[0][1] + " " + answer_pairs[1][1]);

	let answer = "default-wrong";
	$('#answer_box').addEventListener("change", (event) => {
		answer = event.srcElement.value;
		if (answer === answer_pairs[0][1] + " " + answer_pairs[1][1]) {
		end("success");
	}
	else {
		end("failure");
	}
	});
}

function end(result) {
	if (result==="success") {
		alert("YOU'RE IN");
	}
	else if (result==="failure") {
		alert("UNAUTHORIZED");
	}
	else {
		alert("How did you get here?");
	}
}

beginning();