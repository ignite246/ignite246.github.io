const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hypertext Manipulation Language",
        b: "Hyper Transactional Money Loss",
        c: "Hello To My Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is a mango?",
        a: "Fruit",
        b: "vegetable",
        c: "Country",
        d: "Book Name",
        ans: "ans1"
    },
    {
        question: "Q3: Capital of Japan?",
        a: "Dhaka",
        b: "Tokyo",
        c: "Hongkong",
        d: "Shanghai",
        ans: "ans2"
    },
    {
        question: "Q4: What is a brinjal?",
        a: "City",
        b: "Vegetable",
        c: "Country",
        d: "Game",
        ans: "ans2"
    },
    {
        question: "Q5: Who is the CEO of TCS?",
        a: "N Chandra",
        b: "Cyrus Mistri",
        c: "V Ramaswammy",
        d: "Rajesh Gopinathan",
        ans: "ans4"
    },
];

// quizDB.forEach(obj => {
//     console.log(obj);
// });

const question = document.querySelector('.question');

const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submitBtn = document.querySelector("#submit");

const answers = document.querySelectorAll(".answers");
console.log(answers.length);

const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionObj = quizDB[questionCount];
    question.innerText = questionObj.question;
    option1.innerText = questionObj.a;
    option2.innerText = questionObj.b;
    option3.innerText = questionObj.c;
    option4.innerText = questionObj.d;

}

loadQuestion();

const getCheckedAnswerId = () => {
    let answerId;
    answers.forEach((currElement) => {
        if (currElement.checked) {
            answerId = currElement.id;
        }
    });
    return answerId;
}

const doSelectAll = () => {
    answers.forEach((currElem) => {
        currElem.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const checkedAnswerId = getCheckedAnswerId();
    console.log(checkedAnswerId);

    if (checkedAnswerId === quizDB[questionCount].ans) {
        score++;
    }

    //loading new question
    doSelectAll();
    questionCount++;
    if (questionCount < quizDB.length) {
        loadQuestion();
    }
    else {
        showScore.innerHTML = `
         <h3>You scored ${score}/${quizDB.length} 👌</h3>
         <button class="btn" onclick="location.reload()">Play Again</button>
        `;

        showScore.classList.remove("scoreArea");
    }
});
