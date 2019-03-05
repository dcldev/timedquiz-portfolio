(function() {
    const myQuestions = [
        {
            question: "How many players to a side in Beach Volleyball?",
            answers: {
                a: "2",
                b: "3",
                c: "4",
                d: "0"
            },
            correctAnswer: "a"
        },
        {
            question: "How many times can you touch the volleyball on your side of the net?",
            answers: {
                a: "2",
                b: "1",
                c: "3",
                d: "4"
            },
            correctAnswer: "c"
        },
        {
            question: "What is the term used to describe a player ending the rally?",
            answers: {
                a: "crush",
                b: "destroy",
                c: "kill",
                d: "attack"
            },
            correctAnswer: "c"
        },
        {
            question: "What is the first touch called when receiving a serve?",
            answers: {
                a: "receive",
                b: "pass",
                c: "shovel",
                d: "bump"
            },
            correctAnswer: "d"
        },
        {
            question: "What is the second touch called after bumping the ball?",
            answers: {
                a: "bump",
                b: "set",
                c: "alley-oop",
                d: "loft"
            },
            correctAnswer: "b"
        },
        {
            question: "What is the third touch called after setting the ball?",
            answers: {
                a: "attack",
                b: "smash",
                c: "dunk",
                d: "spike"
            },
            correctAnswer: "d"
        },
    ];

    function buildQuiz() {
        // a variable to store the HTML output
        const output = [];

        // for each question
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // a variable to store the answer choices
            const answers = [];

            // and for each available answer
            for (letter in currentQuestion.answers) {
                // this will add a HTML button
                answers.push(
                    `<label>
                        <input type="radio" name="questions${questionNumber}" value="${letter}">
                        ${letter}:
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="slide">
                    <div class="question"> ${currentQuestion.question}</div>
                    <div class="answers"> ${answers.join("")} </div>
                </div>`
            );
        });

        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather correct answers
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of the correct answers
        let numCorrect = 0;

        // for each question
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find the selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector)|| {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                //color the answers green
                answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if the answer is wrong
                answerContainer[questionNumber].stye.color = "red";
            }
            });

            // show number of correct answers out of total
            resultsContainer.innerHTML = `${numCorrect} "out of" ${myQuestions.length}`;
        }

        function showSlide(n) {
            slides[currentSlide].classList.remove("active-slide");
            slides[n].classList.add("active-slide");
            currentSlide = n;
            
            if (currentSlide === 0) {
              previousButton.style.display = "none";
            } else {
              previousButton.style.display = "inline-block";
            }
            
            if (currentSlide === slides.length - 1) {
              nextButton.style.display = "none";
              submitButton.style.display = "inline-block";
            } else {
              nextButton.style.display = "inline-block";
              submitButton.style.display = "none";
            }
          }
        
          function showNextSlide() {
            showSlide(currentSlide + 1);
          }
        
          function showPreviousSlide() {
            showSlide(currentSlide - 1);
          }
        
          const quizContainer = document.getElementById("quiz");
          const resultsContainer = document.getElementById("results");
          const submitButton = document.getElementById("submit");
        
          // display quiz right away
          buildQuiz();
        
          const previousButton = document.getElementById("previous");
          const nextButton = document.getElementById("next");
          const slides = document.querySelectorAll(".slide");
          let currentSlide = 0;
        
          showSlide(0);
        
          // on submit, show results
          submitButton.addEventListener("click", showResults);
          previousButton.addEventListener("click", showPreviousSlide);
          nextButton.addEventListener("click", showNextSlide);
        })();