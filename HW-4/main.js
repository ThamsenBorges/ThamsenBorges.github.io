let story_objects = {  
        "try again" : {
            story_prompt : "You've just completed your jewelery heist! Are you ready to try and escape?",
            choice_html : "<em>Yes</em> or <em>no</em>?",
            story_img : "heist.jpg"
          },
        "yes" : {
            story_prompt : "Great! Do you want to split off from your gang and try this solo? or stick to the plan and escape togther?",
            choice_html : "Do you <em>escape</em> by yourself or stick to the plan with your <em>gang</em>?",
            story_img : "plan.jpg"
        },
        "escape" : {
            story_prompt : "You split off from your gang into a crowd",
            choice_html : "Do you try to <em>blend</em> in, or <em>run</em> as fast as you can?",
            story_img : "crowd.jpg"
          },
        "no" : {
            story_prompt : "Are you sure? The cops will be here any second!",
            choice_html : "Do you <em>stay</em> and get caught or <em>proceed</em> with the escape?",
            story_img : "Cop car.jpg"
          },
        "gang" : {
            story_prompt : "Your gang rushes into the getaway van.",
            choice_html : "Do you <em>drive</em> yourself or let <em>Igor</em> drive for you?",
            story_img: "steering wheel.jpg"
          },
          "stay" : {
            story_prompt : "One of your boys reaches his hand out to pull you into the van.",
            choice_html : "Do you <em>grab</em> his hand and get in the van, or <em>not</em>?",
            story_img : "hand.jpg"
          },
          "grab" : {
            story_prompt : "Woops! The glove slipped off and they left without you. Sorry!",
            choice_html : "<em>Try again</em>?",
            story_img : "glove.png"
          },
          "proceed" : {
            story_prompt : "Alright. You look around and see some options. What are you gonna do?",
            choice_html : "Do you steal a <em>car</em> or a <em>bike</em>?",
            story_img : "bikeandcar.jpg"
          },
          "blend" : {
            story_prompt : "Welp, the crowd ratted you out. Maybe the whole ski mask look wasn't the smartest look.",
            choice_html : "<em>Try again</em>?",
            story_img : "skimask.jpg"
          },
          "run" : {
            story_prompt : "Hey, you're pretty fast! Nice job; maybe you should try out for Track.",
            choice_html : "<em>Try again</em>?",
            story_img : "track.jpg"
          },
          "drive" : {
            story_prompt : "Nice driving; you got away! Ever try Racing? It's a little less criminal.",
            choice_html : "<em>Try again</em>?",
            story_img : "racetrack.jpg"
          },
          "igor" : {
            story_prompt : "Never let Igor drive... ever",
            choice_html : "<em>Try again</em>?",
            story_img : "crashvan.jpg"
          },
          "not" : {
            story_prompt : "I'm not why you're here then, to be honest.",
            choice_html : "<em>Try again</em>?",
            story_img : "thinking.png"
          },
          "car" : {
            story_prompt : "Turns out it's pretty hard to steal a car and get away with it.",
            choice_html : "<em>Try again</em>?",
            story_img : "Cartheft.jpg"
          },
          "bike" : {
            story_prompt : "Surprisingly, that worked! Who woulda thought?",
            choice_html : "<em>Try again</em>?",
            story_img : "bike.jpg"
          }
      }
window.onload = function () {
    var story_text = document.querySelector('#story_text')
    var choice_text = document.querySelector('#choice_text')
    var decision_text = document.querySelector('#decision_text')
    var story_image = document.querySelector('#story_img')

    decision_text.addEventListener('change', event => {
        story_text.innerHTML = story_objects[decision_text.value.toLowerCase()].story_prompt;
        choice_text.innerHTML = story_objects[decision_text.value.toLowerCase()].choice_html;
        story_image.src = story_objects[decision_text.value.toLowerCase()].story_img;
        decision_text.value = "";
    })

}

