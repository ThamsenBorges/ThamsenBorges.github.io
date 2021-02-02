function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "Great! Do you want to split off from your gang and try this solo? or stick to the plan and escape togther?";
        document.getElementById("choice1").innerHTML = "Escape by yourself";
        document.getElementById("choice2").innerHTML = "Stick to the plan with your gang";
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "Are you sure? The cops will be here any second!'";
        document.getElementById("choice1").innerHTML = "Stay and get caught";
        document.getElementById("choice2").innerHTML = "Proceed with the escape";
    } else if (choice == 1 && answer1 == "Escape by yourself") {
        document.getElementById("story").innerHTML = "You split off from your gang into a crowd";
        document.getElementById("choice1").innerHTML = "Try to blend in";
        document.getElementById("choice2").innerHTML = "Run as fast as you can";
    } else if (choice == 2 && answer2 == "Stick to the plan with your gang") {
        document.getElementById("story").innerHTML = "Your gang rushes into the get away van.'";
        document.getElementById("choice1").innerHTML = "Drive the van?";
        document.getElementById("choice2").innerHTML = "Let Igor drive";
    } else if (choice == 1 && answer1 == "Stay and get caught") {
        document.getElementById("story").innerHTML = "One of your boys reaches his hand out to pull you into the van.";
        document.getElementById("choice1").innerHTML = "Grab his hand and get in the van";
        document.getElementById("choice2").innerHTML = "Don't grab his hand";
    } else if (choice == 2 && answer2 == "Proceed with the escape") {
        document.getElementById("story").innerHTML = "What are you gonna do?";
        document.getElementById("choice1").innerHTML = "Steal a car";
        document.getElementById("choice2").innerHTML = "Steal a bike";
    }
    
    else if (choice == 1 && answer1 == "Try to blend in") {
        document.getElementById("story").innerHTML = "Welp, the crowd ratted you out. Maybe the whole ski mask look wasn't the smartest look." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Try again?";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 2 && answer2 == "Run as fast as you can") {
        document.getElementById("story").innerHTML = "Hey you're pretty fast nice job, maybe you should try track." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Try again?";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 1 && answer1 == "Drive the van?") {
        document.getElementById("story").innerHTML = "Nice driving you got away! Ever try Racing? it's a little less criminal" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Try again?";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 2 && answer2 == "Let Igor drive") {
        document.getElementById("story").innerHTML = "Never let Igor drive... ever." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Try again?";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 1 && answer1 == "Grab his hand and get in the van") {
        document.getElementById("story").innerHTML = "Woops glove slipped off and they left without you sorry" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Try again?";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 2 && answer2 == "Don't grab his hand") {
        document.getElementById("story").innerHTML = "I'm not sure why you are here than to be honest" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Try again?";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 1 && answer1 == "Steal a car") {
        document.getElementById("story").innerHTML = "Turns out, Pretty hard to do." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Try again?";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 2 && answer2 == "Steal a bike") {
        document.getElementById("story").innerHTML = "Suprisingly that worked who woulda thought." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Try again?";
        document.getElementById("choice2").innerHTML = "Quit";
    } else if (choice == 1 && answer1 == "Try again?") {
        document.getElementById("story").innerHTML = "You've just completed your jewlery heist! Are you ready to try and escape?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
    } else if (choice == 2 && answer2 == "Quit") {
        document.getElementById("story").innerHTML = "Maybe you aren't cut out for this";

    }


}