/* let userName = "hend";
  let nameLenght = userName.length;
  if (nameLenght > 0) {
    console.log("Hello", userName);
  } else {
    console.log("try again");
  }*/
function question() {
  //let userQuestion = prompt("Enter your question:");>>> can use that too in different case
  let userQuestion = document.querySelector("#userInput");
  let text = document.querySelector("#demo");
  if (userQuestion.value != "") {
    userQuestion = Math.floor(Math.random() * 10);
    switch (userQuestion) {
      case 1:
        text.innerHTML = "Go for a hike";
        break;
      case 2:
        text.innerHTML = "Visit a park";
        break;
      case 3:
        text.innerHTML = "Play a musical instrument,";
      case 4:
        text.innerHTML = "Work on a craft project";
        break;
      case 5:
        text.innerHTML =
          "Find a local organization and offer your time and skills to help others";
        break;
      case 6:
        text.innerHTML = "Visit a museum";
        break;
      case 7:
        text.innerHTML =
          "Engage in physical activities like jogging, yoga, or a workout routine";
        break;
      case 8:
        text.innerHTML = "Listen to music";
        break;
      case 9:
        text.innerHTML = "Practice meditation";
        break;
      case 10:
        text.innerHTML = "Explore a new neighborhood";
        break;
    }
  } else {
    text.innerHTML = "Please enter your question";
  }
}
