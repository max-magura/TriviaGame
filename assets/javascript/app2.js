$(document).ready(function() {

  $("#quiz-questions").hide();
  
  $("#start-button").on("click", start);

  var time = 31
  var timeID

  function start() {
    clearInterval(timeID);
    timeID = setInterval(decreaseTime, 1000);
    displayQuestions()
  }

  function decreaseTime() {
    time--;
    $("#time").html("<h2>" + time + " seconds remaing" + "</h2>");
    $("#start-button").hide();

    if (time === 0) {
      stop();
      alert("Time's Up!")
      score ();
    }

    $("#submit-button").on("click", function () {
       score ()
       stop ()
    })

  } 

  function stop () {
    clearInterval(timeID)
  }

  $("#submit-button").on("click", score)


  var quizQuestions = [ "What training program does everyone miss on their first time?", "How long did it take to shoot the opening action scene of the movie?", "What color pills does Morpheus offer Neo?", "What is Neo's real name?"]

  var answersQues0 = ["The Fly Program", "The Jiu-Jitsu Program", "The Jump Program", "The Helicopter Program"]
  var answersQues1 = ["2 weeks", "4 days", "2 days", "4 weeks"]
  var answersQues2 = ["Red and Blue", "Red and Green", "Green and Blue", "Orange and Blue"]
  var answersQues3 = ["Mark", "Peter", "Samuel", "Thomas"]

  var correctAnswerValues = ["2","1","0","3"]
  var answerValues = [0,1,2,3]

  var answersDisplay0 = $("<div>")
  for (var i=0; i < answersQues0.length; i++) {
    $(answersDisplay0).append("<input type='radio' name='ques0' value=" + answerValues[i] + "> " + answersQues0[i] + "</input><br><br>")
  };

  var answersDisplay1 = $("<div>")
  for (var i=0; i < answersQues0.length; i++) {
    $(answersDisplay1).append("<input type='radio' name='ques1' value=" + answerValues[i] + "> " + answersQues1[i] + "</input><br><br>")
  };

  var answersDisplay2 = $("<div>")
  for (var i=0; i < answersQues2.length; i++) {
    $(answersDisplay2).append("<input type='radio' name='ques2' value=" + answerValues[i] + "> " + answersQues2[i] + "</input><br><br>")
  };

  var answersDisplay3 = $("<div>")
  for (var i=0; i < answersQues3.length; i++) {
    $(answersDisplay3).append("<input type='radio' name='ques3' value=" + answerValues[i] + "> " + answersQues3[i] + "</input><br><br>")
  };

  function displayQuestions() {
    $("#quiz-questions").show();

    $("#quiz-questions").append("<p>" + quizQuestions[0] + "</p>");
    $("#quiz-questions").append(answersDisplay0)

    $("#quiz-questions").append("<p>" + quizQuestions[1] + "</p>");
    $("#quiz-questions").append(answersDisplay1)

    $("#quiz-questions").append("<p>" + quizQuestions[2] + "</p>");
    $("#quiz-questions").append(answersDisplay2)

    $("#quiz-questions").append("<p>" + quizQuestions[3] + "</p>");
    $("#quiz-questions").append(answersDisplay3)


    $(answersDisplay0).addClass("btn-group");
    $(answersDisplay1).addClass("btn-group");
    $(answersDisplay2).addClass("btn-group");
    $(answersDisplay3).addClass("btn-group");

    $("input").click(function () {
      if (this.name === "ques0") {
       userPick0 = this.value
       userAnswers.push(userPick0)
      }
      if (this.name === "ques1") {
        userPick1 = this.value
        userAnswers.push(userPick1)
      }
      if (this.name === "ques2") {
      userPick2 = this.value
      userAnswers.push(userPick2)
      }
      if (this.name === "ques3") {
      userPick3 = this.value
      userAnswers.push(userPick3)
      }

    });

  };

    var userPick0 = ""
    var userPick1 = ""
    var userPick2 = ""
    var userPick3 = ""
    var userAnswers= []
  

  function score () {
    var correct = 0

    for (var i = 0; i < correctAnswerValues[i].length; i++) {
      if (correctAnswerValues[i] === userAnswers[i]) {
        correct++;
        console.log(correct)
      }
    }


    console.log(userAnswers)
    console.log(correctAnswerValues)
    console.log(correct)
  }

});


/* need to figure out how to verify user answers with correct answers & then show the results */