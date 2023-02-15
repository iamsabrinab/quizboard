$('#start').on('click', function () {
    game.start();
  })
  
  var questions = [{
    question: 'What is the full version of HTML',
    answers: ['HMLT', 'HTML', 'HTLM'],
    correctAnswer: 'HTML'
  }, {
    question: 'Is C++ a low level language?',
    answers: ['Yes', 'No'],
    correctAnswer: 'Yes'
  }, {
    question: 'What is the other name for Javascript?',
    answers: ['ECMAscript', 'JS', 'I dont know'],
    correctAnswer: 'ECMAscript'
  }, {
    question: 'Is git a version control system?',
    answers: ['Yes', 'No'],
    correctAnswer: 'Yes'
  }, {
    question: 'Which of the following is a programming language?',
    answers: ['JavaScript', 'Python', 'All of the above'],
    correctAnswer: 'All of the above'
  }, {
    question: 'Is HTML a programming language?',
    answers: ['Yes', 'No'],
    correctAnswer: 'Yes'
  }];
  
  var game = {
    correct: 0,
    incorrect: 0,
    counter: 20,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up!");
            game.done();
  
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $('#subWrapper').prepend('<h2><strong>Time Remaining: <span id="counter">20</span> seconds </strong></h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $('#subWrapper').append('<h4><stong>' + questions[i].question + '</strong></h4>')
            for (var j = 0; j < questions[i].answers.length; j++) {
                $('#subWrapper').append("<h6><input type='radio' name='question-" + i + "'value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
    },
    done: function () {
        $.each($('input[name="question-0"]:checked'),
            function () {
                if ($(this).val() == questions[0].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
        });
        $.each($('input[name="question-1"]:checked'),
            function () {
                if ($(this).val() == questions[1].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
        $.each($('input[name="question-2"]:checked'),
            function () {
                if ($(this).val() == questions[2].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
        $.each($('input[name="question-3"]:checked'),
            function () {
                if ($(this).val() == questions[3].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
        $.each($('input[name="question-4"]:checked'),
            function () {
                if ($(this).val() == questions[4].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
        $.each($('input[name="question-5"]:checked'),
            function () {
                if ($(this).val() == questions[5].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
        this.result();
  
        },
    result: function () {
        clearInterval(timer);
        $('#subWrapper h2').remove();
        $('#subWrapper').append("<h3>GAME OVER!</h3>");
        $('#subWrapper').append("<h3>Correct Answers:" + this.correct + "</h3>");
        $('#subWrapper').append("<h3>Incorrect Answers:" + this.incorrect + "</h3>");
        $('#subWrapper').append("<h3>Unanswered:" + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
  
  }