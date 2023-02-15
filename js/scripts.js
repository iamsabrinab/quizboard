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
    question: 'What son of the Dali Lama did Carl caddy for when he was in Tibet?',
    answers: ['11th', '14th', '13th', '12th'],
    correctAnswer: '13th'
  }, {
    question: 'Who made the gopher in the movie Caddyshack?',
    answers: ['George Lucas', 'Harold Ramis', 'Steven Spielberg', 'Computer'],
    correctAnswer: 'George Lucas'
  }, {
    question: 'What does Rodney Dangerfield hit with the golf ball before it bounces back and hits his shoulder?',
    answers: ['A Tree', 'A Fire Hydrant', 'A Ball Cleaner', 'Chevy Chase'],
    correctAnswer: 'A Tree'
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
        $('#subWrapper').prepend('<h2>Time Remaining: <span id="counter">20</span> seconds </h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $('#subWrapper').append('<h2>' + questions[i].question + '</h2>')
            for (var j = 0; j < questions[i].answers.length; j++) {
                $('#subWrapper').append("<h2><input type='radio' name='question-" + i + "'value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
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