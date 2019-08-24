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
  }  

  function stop () {
    clearInterval(timeID)
  }

  $("#submit-button").on("click", score)


  var quizQuestions = [
    {
      question: "What training program does everyone miss on their first time?",
      answers: ["The Fly Program", "The Jiu-Jitsu Program", "The Jump Program", "The Helicopter Program"],
      correctAnswer:  2,
    },
    {
      question: "How long did it take to shoot the opening action scene of the movie?",
      answers: ["2 weeks", "4 days", "2 days", "4 weeks"],
      correctAnswer:  1,
    },
    {
      question: "What color pills does Morpheus offer Neo?",
      answers: ["Red and Blue", "Red and Green", "Green and Blue", "Orange and Blue"],
      correctAnswer:  0,
    },
    {
      question: "What is Neo's real name?",
      answers: ["Mark", "Peter", "Samuel", "Thomas"],
      correctAnswer:  3,
    }
  ]
  
  var userAnswers = []
  for (var i = 0; i < quizQuestions.length; i++) {
    userAnswers[i] = null;
  }

  function displayQuestions() {
    $("#quiz-questions").show();

    var questionDisplay
    for (var i = 0; i < quizQuestions.length; i++) {
      $(questionDisplay).append("<p>" + quizQuestions[i].question + "</p>");
    }

    var answerDisplay
    for (var j = 0; j < quizQuestions[i].answers.length; j++) {
      $(answerDisplay).append("<input type='radio' class='d-inline' value=" + quizQuestions[i].correctAnswer + "> " + quizQuestions[i].answers[j] + "</input><br><br>");
    }

    $("#quiz-questions").append(questionDisplay)
    $("#quiz-questions").append(answerDisplay)


    $("input").click(function () {
      $(userAnswers).push(this.value);
    });
  };

  var correct = 0
  var incorrect = 0
  var unanswered = 0

  function score () {
    
    for (var i = 0; i < quizQuestions[i].length; i++) {
      if (quizQuestions[i].correctAnswer === userAnswers[i]) {
        correct++;
      }
        else if (userAnswers[i] === null) {
        unanswered++;
      }
      else {
        incorrect++;
      }
    }  
    console.log(correct)
  }

});


/* function displayQuestions() {
  $("#quiz-questions").show();
  for (var i = 0; i < quizQuestions.length; i++) {
    $("#quiz-questions").append("<p>" + quizQuestions[i].question + "</p>");
  for (var j = 0; j < quizQuestions[i].answers.length; j++)
    $("#quiz-questions").append("<input type='radio' class='d-inline' value=" + quizQuestions[i].correctAnswer + "> " + quizQuestions[i].answers[j] + "</input><br><br>");
  }
  $("input").click(function () {
    $(userAnswers).push(this.value);
  });
};

*/