const questions = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "Berlin",
            b: "Paris",
            c: "Rome",
            d: "Madrid"
        },
        correctAnswer: "b"
    },
    {
        question: "What is 2 + 2?",
        answers: {
            a: "3",
            b: "4",
            c: "5",
            d: "6"
        },
        correctAnswer: "b"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: {
            a: "Earth",
            b: "Venus",
            c: "Mars",
            d: "Jupiter"
        },
        correctAnswer: "c"
    }
];

let currentQuestionIndex = 0;
let currentWinnings = 0;
let fiftyFiftyUsed = false;
let askAudienceUsed = false;
let phoneAFriendUsed = false;

const questionElement = document.getElementById("question");
const answerAElement = document.getElementById("answer-a");
const answerBElement = document.getElementById("answer-b");
const answerCElement = document.getElementById("answer-c");
const answerDElement = document.getElementById("answer-d");
const startButton = document.getElementById("start-button");
const currentWinningsElement = document.getElementById("current-winnings");
const fiftyFiftyButton = document.getElementById("fifty-fifty");
const askAudienceButton = document.getElementById("ask-audience");
const phoneAFriendButton = document.getElementById("phone-a-friend");

function startQuiz() {
    currentQuestionIndex = 0;
    currentWinnings = 0;
    updateWinnings();
    fiftyFiftyUsed = false;
    askAudienceUsed = false;
    phoneAFriendUsed = false;
    fiftyFiftyButton.disabled = false;
    askAudienceButton.disabled = false;
    phoneAFriendButton.disabled = false;
    startButton.style.display = "none";
    loadQuestion();
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answerAElement.textContent = "A: " + currentQuestion.answers.a;
    answerBElement.textContent = "B: " + currentQuestion.answers.b;
    answerCElement.textContent = "C: " + currentQuestion.answers.c;
    answerDElement.textContent = "D: " + currentQuestion.answers.d;

    // Reset button styles
    answerAElement.classList.remove('correct-answer', 'wrong-answer');
    answerBElement.classList.remove('correct-answer', 'wrong-answer');
    answerCElement.classList.remove('correct-answer', 'wrong-answer');
    answerDElement.classList.remove('correct-answer', 'wrong-answer');
}

function checkAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];

    // Disable all answer buttons
    answerAElement.disabled = true;
    answerBElement.disabled = true;
    answerCElement.disabled = true;
    answerDElement.disabled = true;

    let correctAnswerElement;
    if (currentQuestion.correctAnswer === 'a') correctAnswerElement = answerAElement;
    if (currentQuestion.correctAnswer === 'b') correctAnswerElement = answerBElement;
    if (currentQuestion.correctAnswer === 'c') correctAnswerElement = answerCElement;
    if (currentQuestion.correctAnswer === 'd') correctAnswerElement = answerDElement;

    if (answer === currentQuestion.correctAnswer) {
        // Correct answer
        const selectedAnswerElement = document.getElementById('answer-' + answer);
        selectedAnswerElement.classList.add('correct-answer');
        currentWinnings = parseInt(document.querySelector('.money-ladder li:nth-last-child(' + (questions.length - currentQuestionIndex) + ')').dataset.amount);

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
                // Re-enable answer buttons
                answerAElement.disabled = false;
                answerBElement.disabled = false;
                answerCElement.disabled = false;
                answerDElement.disabled = false;
                updateWinnings();
            } else {
                endGame(true);
            }
        }, 1500); // Wait 1.5 seconds before loading next question
    } else {
        // Wrong answer
        const selectedAnswerElement = document.getElementById('answer-' + answer);
        selectedAnswerElement.classList.add('wrong-answer');

        // Show the correct answer
        correctAnswerElement.classList.add('correct-answer');


        setTimeout(() => {
            endGame(false);
        }, 2500); // Wait 2.5 seconds before game over
    }
}

function updateWinnings() {
    currentWinningsElement.textContent = "Current Winnings: $" + currentWinnings;
}

function endGame(win) {
    questionElement.textContent = win ? "Congratulations! You won $" + currentWinnings : "Game Over! You won $" + currentWinnings;
    answerAElement.textContent = "";
    answerBElement.textContent = "";
    answerCElement.textContent = "";
    answerDElement.textContent = "";
    startButton.style.display = "block";

    // Reset button styles
    answerAElement.classList.remove('correct-answer', 'wrong-answer');
    answerBElement.classList.remove('correct-answer', 'wrong-answer');
    answerCElement.classList.remove('correct-answer', 'wrong-answer');
    answerDElement.classList.remove('correct-answer', 'wrong-answer');

    // Re-enable answer buttons
    answerAElement.disabled = false;
    answerBElement.disabled = false;
    answerCElement.disabled = false;
    answerDElement.disabled = false;
}

function useFiftyFifty() {
    if (fiftyFiftyUsed) return;

    const currentQuestion = questions[currentQuestionIndex];
    let incorrectAnswers = [];
    for (let key in currentQuestion.answers) {
        if (key !== currentQuestion.correctAnswer) {
            incorrectAnswers.push(key);
        }
    }

    // Randomly select two incorrect answers to remove
    let firstToRemove = incorrectAnswers.splice(Math.floor(Math.random() * incorrectAnswers.length), 1)[0];
    let secondToRemove = incorrectAnswers.splice(Math.floor(Math.random() * incorrectAnswers.length), 1)[0];

    // Disable the buttons for the removed answers
    document.getElementById("answer-" + firstToRemove).textContent = "";
    document.getElementById("answer-" + firstToRemove).disabled = true;
    document.getElementById("answer-" + secondToRemove).textContent = "";
    document.getElementById("answer-" + secondToRemove).disabled = true;


    fiftyFiftyUsed = true;
    fiftyFiftyButton.disabled = true;
}

function useAskTheAudience() {
    if (askAudienceUsed) return;

    const currentQuestion = questions[currentQuestionIndex];
    let correctAnswer = currentQuestion.correctAnswer;

    // Simulate audience vote percentages (add some randomness)
    let votePercentages = { a: 0, b: 0, c: 0, d: 0 };
    let correctPercentage = Math.floor(Math.random() * 40) + 40; // 40-80%
    votePercentages[correctAnswer] = correctPercentage;

    let remainingPercentage = 100 - correctPercentage;
    let otherAnswers = Object.keys(currentQuestion.answers).filter(key => key !== correctAnswer);

    while (remainingPercentage > 0 && otherAnswers.length > 0) {
        let answer = otherAnswers.pop();
        let percentage = Math.floor(Math.random() * remainingPercentage);
        votePercentages[answer] = percentage;
        remainingPercentage -= percentage;
    }

    // Display the audience percentages (you can customize this part)
    alert(`Audience Vote:\n A: ${votePercentages.a}%\n B: ${votePercentages.b}%\n C: ${votePercentages.c}%\n D: ${votePercentages.d}%`);

    askAudienceUsed = true;
    askAudienceButton.disabled = true;
}

function usePhoneAFriend() {
    if (phoneAFriendUsed) return;

    const currentQuestion = questions[currentQuestionIndex];
    let correctAnswer = currentQuestion.correctAnswer;
    let friendConfidence = Math.floor(Math.random() * 30) + 70; // Friend is 70-100% sure
    let friendResponse = `I'm ${friendConfidence}% sure the answer is ${correctAnswer.toUpperCase()}`;

    alert(`Your friend says: "${friendResponse}"`);

    phoneAFriendUsed = true;
    phoneAFriendButton.disabled = true;
}