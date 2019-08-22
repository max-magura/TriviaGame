$(document).ready(function() {

  $("#quiz-questions").hide();
  
  $("#start-button").on("click", start);

  var time = 31
  var timeID

  function start() {
    clearInterval(timeID);
    timeID = setInterval(decreaseTime, 1000);
  }

  function decreaseTime() {
    time--;
    $("#time").html("<h2>" + time + " seconds remaing" + "</h2>");
    $("#start-button").hide();
    displayQuestions()

    if (time === 0) {
      stop();
      alert("Time's Up!");
    }
  }
  
  function stop () {
    clearInterval(timeID)
  }

  var quizQuestions = [
    {
      question: "How long did it take to shoot the opening action scene of the movie?",
      answers: ["2 weeks", "4 days", "2 days", "4 weeks"],
      correctAnswer:  "4 days",
    },
  ]

function createAnswerButtons () {
  var answerOptions = ""
  for (var i = 0; i < quizQuestions.length; i++) {
		answerOptions.html('<label><input type="radio" name="optionsRadios" id="optionsRadios2" value="' + [i] +'"><div class="twd-opt">' + quizQuestions[i].answers + '</div></input><br></label>');
	};
}

function displayQuestions() {
  $("#quiz-questions").show();
  for (var i = 0; i < quizQuestions.length; i++) {
    $("#quiz-questions").html(quizQuestions[i].question);
  }
  createAnswerButtons ()
};


});

/* function displayQuestions() {
  $("#quiz-questions").html(quizQuestions.questions);
};
*/