var panel = $('#quiz-area');
///////////////////////////////////////////////////////////////////////////////
//CLICK EVENTS
///////////////////////////////////////////////////////////////////////////////
$(document).on('click', '#start', function(e) {
  game.start();
});

$(document).on('click', '#done', function(e) {
  game.done();
});
///////////////////////////////////////////////////////////////////////////////
//Question set
///////////////////////////////////////////////////////////////////////////////

var questions = [{
  question: "On the surface, the world portrayed in this novel is perfect: however, it's probably the most nightmarish scenario imaginable.",
  answers: ['The Sleeper Awakes', 'WE', '1984', 'Brave New World'],
  correctAnswer: "Brave New World",
 // image:"images/bravenewworld.jpg"
}, {
  question: "What anti-hero was sent into a super-max prison to rescue the President from a warlord?",
  answers: ['Snake Plissken', 'John Preston', 'Bernard Marx', 'Professor Cavor'],
  correctAnswer: "Snake Plissken",
 // image:"images/snake.jpg"
}, {
  question: "What bleak satire of Stalinism takes place in a glass city state and happens 1000 yrs after the 200 year war?",
  answers: ['WE', 'THX 1138', 'Equilibrium', 'The Time Machine'],
  correctAnswer: "WE",
 // image:"images/we.jpg"
}, {
  question: "The protagoinst of this film escaped from prison in a sterile underground city.",
  answers: ['THX 1138', 'LUH 3417', 'Bernard Marx', 'John Savage'],
  correctAnswer: "THX 1138",
 // image:"images/thx1138.jpg"
}, {
  question: "What post WWIII society was brought down by a high ranking secret police agent.",
  answers: ['Libria', 'One State', 'Metropolis', 'Mega City One'],
  correctAnswer: "Libria",
  //image:"images/preston.jpg"
}, {
  question: "What London based surrogate relative persistantly monitors your activities?",
  answers: ["Control", "Mustafa Monds", "Big Brother", "Father"],
  correctAnswer: "Big Brother",
  //image:"images/brother.jpg"
}, {
  question: "In conclusion, the realtive equality of all beings is derived from the superior equality of a select few.",
  answers: ["Rossums Universal Robots", "Brave New World", "We", "Animal Farm"],
  correctAnswer: "Animal Farm",
  //image:"images/farm.jpg"
}, {
  question: "What Eastern European play coined the colloquial term for mass produced, artificially intelligent beings .",
  answers: ['Rossums Universal Robots', 'Metropolis', 'Do Androids Dream of Electric Sheep', 'Animal Farm'],
  correctAnswer: "Rossums Universal Robots",
  //image:"images/rur.jpg"
}];

var game = {
  correct:0,
  incorrect:0,
  counter:150,
  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      console.log('TIME UP');
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);

    $('#subwrapper').prepend('<h3>Time Remaining: <span id="counter-number">120</span> Seconds</h3>');
    $('#start').remove();


    for (var i = 0; i < questions.length; i++) {
      panel.append('<h4>' + questions[i].question + '</h4>');
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
      }
    }

    panel.append('<button id="done">Done</button>');
  },
  done: function() {


    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() == questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },
    result: function() {

    clearInterval(timer);

    $('#subwrapper h3').remove();
    panel.html('<h2>All Done!</h2>');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
  }
};