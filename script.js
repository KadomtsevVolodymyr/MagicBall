let centerDiv = document.createElement("div");
centerDiv.classList.add("center");

let question = document.createElement("h1");
question.innerHTML = "Ask Me Anything:";

let mainDiv = document.createElement("div");
mainDiv.classList.add("row");

let fortune = document.createElement("div");
fortune.classList.add("fortune");

fortune.setAttribute("id", "fortune");

let img = document.createElement("img");
//id="ball" alt="Magic 8 Ball" src="ball.png"
img.setAttribute("id", "ball");
img.setAttribute("alt", "Magic 8 Ball");
img.setAttribute("src", "ball.png");

let text = document.createElement("div");
text.innerHTML = "Press";
text.classList.add("centered");

let img2 = document.createElement("img");
//id="ball" alt="Magic 8 Ball" src="ball.png"
img2.setAttribute("id", "ball2");
img2.setAttribute("alt", "Magic");
img2.setAttribute("src", "ball-hole.png");

img2.addEventListener("click", shake);
text.addEventListener("click", shake);

mainDiv.append(img);
mainDiv.append(img2);
mainDiv.append(text);

centerDiv.prepend(question);

document.body.prepend(centerDiv);
document.body.append(mainDiv);
document.body.append(fortune);

function shake() {
  const ball = document.getElementById("ball");
  const messageText = document.getElementById("message");

  //remove previous message if it exists
  if (messageText != null) {
    messageText.parentNode.removeChild(messageText);
  }

  //Make the ball shake by adding the css class
  ball.classList.add("shake");

  //Remove the shake class after it stops shaking
  setTimeout(function () {
    ball.classList.remove("shake");
  }, 1500);

  //call the fortune function to get your fortune only after 2sec
  setTimeout(function () {
    getFortune();
  }, 1500);
}

function getFortune() {
  const fortunes = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes -- definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes, Signs point to yes",
    "Reply hazy",
    "try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Dont count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];

  let fortune = fortunes[Math.floor(Math.random() * fortunes.length)];

  let parent = document.getElementById("fortune");
  let newMessage = document.createElement("div");
  newMessage.setAttribute("id", "message");
  newMessage.innerHTML = '"' + fortune + '"';
  parent.appendChild(newMessage);
}
