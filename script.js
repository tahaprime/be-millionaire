const questions = [
    {
        question: "What type of motivation does Yolanda use in her management style?",
        answers: {
            a: "Participative motivation",
            b: "Authoritarian motivation",
            c: "Extrinsic motivation",
            d: "Financial motivation"
        },
        correctAnswer: "a",
        price: 50
    },
    {
        question: "According to Xavier, why does he believe strict supervision is necessary?",
        answers: {
            a: "Employees are highly skilled",
            b: "Employees need constant monitoring to avoid laziness",
            c: "Employees are self-motivated",
            d: "Employees perform better with freedom"
        },
        correctAnswer: "b",
        price: 100
    },
    {
        question: "What is the main difference between Theory X and Theory Y?",
        answers: {
            a: "Theory X believes employees dislike work, while Theory Y believes they find satisfaction in it",
            b: "Theory X promotes creativity, while Theory Y discourages it",
            c: "Theory X focuses on teamwork, while Theory Y promotes individual work",
            d: "Theory X is based on rewards, while Theory Y is based on punishments"
        },
        correctAnswer: "a",
        price: 200
    },
    {
        question: "Which psychological theory influenced McGregor’s Theory Y?",
        answers: {
            a: "Herzberg’s Two-Factor Theory",
            b: "Maslow’s Hierarchy of Needs",
            c: "Expectancy Theory",
            d: "Skinner’s Behaviorism"
        },
        correctAnswer: "b",
        price: 300
    },
    {
        question: "What is a possible outcome of implementing Theory Y in a company?",
        answers: {
            a: "Employees become demotivated",
            b: "Employees feel a sense of empowerment and job satisfaction",
            c: "Employees work less efficiently",
            d: "Employees avoid responsibility"
        },
        correctAnswer: "b",
        price: 500
    },
    {
        question: "What is an example of intrinsic motivation?",
        answers: {
            a: "Working for a bonus",
            b: "Learning a skill because it’s interesting",
            c: "Competing for a promotion",
            d: "Completing a task to avoid punishment"
        },
        correctAnswer: "b",
        price: 1000
    },
    {
        question: "What is the main focus of transformational leadership?",
        answers: {
            a: "Rewarding employees for completing tasks",
            b: "Encouraging innovation and inspiring employees",
            c: "Giving employees strict guidelines to follow",
            d: "Ensuring employees meet minimum performance standards"
        },
        correctAnswer: "b",
        price: 2000
    },
    {
        question: "What is a key characteristic of an authoritarian management style?",
        answers: {
            a: "Encouraging employee participation",
            b: "Imposing decisions without consultation",
            c: "Fostering teamwork",
            d: "Providing complete autonomy to employees"
        },
        correctAnswer: "b",
        price: 4000
    },
    {
        question: "Why is the term 'subordinate' considered less frequent than 'employee'?",
        answers: {
            a: "It is too formal and can have negative connotations",
            b: "It is not grammatically correct",
            c: "It is only used in legal documents",
            d: "It is a term exclusive to military organizations"
        },
        correctAnswer: "a",
        price: 8000
    },
    {
        question: "How did McGregor's ideas influence modern management practices?",
        answers: {
            a: "By reinforcing the need for strict discipline",
            b: "By promoting participative styles of management and employee appraisals",
            c: "By eliminating the need for management structures",
            d: "By proving that employees should never be involved in decision-making"
        },
        correctAnswer: "b",
        price: 16000
    },
    {
        question: "What is the main principle behind Herzberg’s Two-Factor Theory?",
        answers: {
            a: "Motivation comes only from financial rewards",
            b: "Job satisfaction and dissatisfaction are influenced by different factors",
            c: "Employees are motivated only by job security",
            d: "Leadership style has no impact on employee satisfaction"
        },
        correctAnswer: "b",
        price: 32000
    },
    {
        question: "Which of the following best describes a democratic leadership style?",
        answers: {
            a: "The leader makes all decisions alone",
            b: "Employees are involved in decision-making",
            c: "The leader enforces strict rules without feedback",
            d: "Employees work without any supervision"
        },
        correctAnswer: "b",
        price: 64000
    },
    {
        question: "How can a combination of Theory X and Theory Y be beneficial in an organization?",
        answers: {
            a: "By using strict control in all cases",
            b: "By adjusting management style based on employee needs and roles",
            c: "By ignoring employee preferences",
            d: "By prioritizing financial rewards only"
        },
        correctAnswer: "b",
        price: 125000
    },
    {
        question: "Which of the following best represents servant leadership?",
        answers: {
            a: "A leader who prioritizes their employees' needs and well-being",
            b: "A leader who focuses on maximizing company profits above all",
            c: "A leader who enforces strict rules and punishments",
            d: "A leader who believes employees should always work independently"
        },
        correctAnswer: "a",
        price: 500000
    },
    {
        question: "Why is emotional intelligence essential in leadership?",
        answers: {
            a: "It helps leaders understand and motivate employees better",
            b: "It imposes decisions without consultation",
            c: "It minimizes communication to the bare minimum",
            d: "It limits innovation to avoid risks"
        },
        correctAnswer: "a",
        price: 1000000
    }
];


let currentQuestionIndex = 0;
let currentWinnings = 0;
let fiftyFiftyUsed = 1;
let askAudienceUsed = false;
let phoneAFriendUsed = 1;
let isEliminated = false;

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
const questionPriceElement = document.getElementById("question-price");

function startQuiz() {
    currentQuestionIndex = 0;
    currentWinnings = 0;
    updateWinnings();
    fiftyFiftyUsed = 1;
    askAudienceUsed = false; 
    phoneAFriendUsed = 1;
    isEliminated = false;
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
    questionPriceElement.textContent = "For: $" + currentQuestion.price;

    answerAElement.classList.remove('correct-answer', 'wrong-answer');
    answerBElement.classList.remove('correct-answer', 'wrong-answer');
    answerCElement.classList.remove('correct-answer', 'wrong-answer');
    answerDElement.classList.remove('correct-answer', 'wrong-answer');

    answerAElement.disabled = false;
    answerBElement.disabled = false;
    answerCElement.disabled = false;
    answerDElement.disabled = false;
}
function checkAnswer(answer) {
    if (isEliminated) {
        return;
    }
    const currentQuestion = questions[currentQuestionIndex];

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
        const selectedAnswerElement = document.getElementById('answer-' + answer);
        selectedAnswerElement.classList.add('correct-answer');
        currentWinnings = parseInt(document.querySelector('.money-ladder li:nth-last-child(' + (questions.length - currentQuestionIndex) + ')').dataset.amount);

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                isEliminated = false;
                loadQuestion();
                updateWinnings();
            } else {
                endGame(true);
            }
        }, 2500);
    } else {
        const selectedAnswerElement = document.getElementById('answer-' + answer);
        selectedAnswerElement.classList.add('wrong-answer');

        correctAnswerElement.classList.add('correct-answer');

        isEliminated = true;

        setTimeout(() => {
            alert("You are eliminated");
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                isEliminated = false;
                loadQuestion();
                updateWinnings();
            } else {
                endGame(false);
            }
        }, 2500);
    }
}


function updateWinnings() {
    currentWinningsElement.textContent = "Current Winnings: $" + currentWinnings;
}

function endGame(win) {
    questionElement.textContent = win ? "Congratulations! Thank you for your participation" : "Game Over! Thank you for your participation";
    questionPriceElement.textContent = "";
    answerAElement.textContent = "";
    answerBElement.textContent = "";
    answerCElement.textContent = "";
    answerDElement.textContent = "";
    startButton.style.display = "block";

    answerAElement.classList.remove('correct-answer', 'wrong-answer');
    answerBElement.classList.remove('correct-answer', 'wrong-answer');
    answerCElement.classList.remove('correct-answer', 'wrong-answer');
    answerDElement.classList.remove('correct-answer', 'wrong-answer');

    answerAElement.disabled = false;
    answerBElement.disabled = false;
    answerCElement.disabled = false;
    answerDElement.disabled = false;
}

function useFiftyFifty() {
    if ((fiftyFiftyUsed < 0) || isEliminated) return;

    const currentQuestion = questions[currentQuestionIndex];
    let incorrectAnswers = [];
    for (let key in currentQuestion.answers) {
        if (key !== currentQuestion.correctAnswer) {
            incorrectAnswers.push(key);
        }
    }

    let firstToRemove = incorrectAnswers.splice(Math.floor(Math.random() * incorrectAnswers.length), 1)[0];
    let secondToRemove = incorrectAnswers.splice(Math.floor(Math.random() * incorrectAnswers.length), 1)[0];

    document.getElementById("answer-" + firstToRemove).textContent = "";
    document.getElementById("answer-" + firstToRemove).disabled = true;
    document.getElementById("answer-" + secondToRemove).textContent = "";
    document.getElementById("answer-" + secondToRemove).disabled = true;

    fiftyFiftyUsed--;
    if(fiftyFiftyUsed < 0) fiftyFiftyButton.disabled = true;
}

function usePhoneAFriend() {
    if ((phoneAFriendUsed < 0) || isEliminated) return;
    alert("you can ask the teacher!");

    phoneAFriendUsed--;
    if(phoneAFriendUsed < 0) phoneAFriendButton.disabled = true;
}