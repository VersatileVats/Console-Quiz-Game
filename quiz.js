(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again :)');
            sc = callback(false);
        }
        
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }
    
    
    var Q1 = new Question("India is in which continent?", ["Asia","Africa","Europe","South America"], 0);
    var Q2 = new Question("Who is the captain of Indian Men's Cricket team?", ["MS Dhoni","Ajinkya Rahane","Virat Kohli","Rishabh Pant"], 2);
    var Q3 = new Question("What is the best e-larning platform?", ["GeeksForGeeks","ABC","Vyjus","Dureka"], 0);
    var Q4 = new Question("What is the national tree of India?", ["Papaya","Mango","Neem","Banyan"], 3);
    var Q5 = new Question("Is yalk a water animal?", ["Yes","No"], 1);

    var questions = [Q1,Q2,Q3,Q4,Q5];
    
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();
    
    
    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');

        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            
            nextQuestion();
        }
    }
    
    nextQuestion();
    
})();