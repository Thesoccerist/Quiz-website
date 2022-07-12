const quizDB = [
    {
        question: "Q1: What is the capital of India?",
        a: "Jaipur",
        b: "New Delhi",
        c: "Kashmir",
        d: "Mumbai",
        ans:"2"
    },
    {
        question: "Q2: What is national animal of India?",
        a: "Panther",
        b: "Tiger",
        c: "Cow",
        d: "Lion",
        ans:"2"
    },
    {
        question: "Q3: Which is the longest river in India?",
        a: "Indus",
        b: "Godavari",
        c: "Ganga",
        d: "Kaveri",
        ans:"3"
    },
    {
        question: "Q4: What are the tricolours of the Indian flag?",
        a: "Saffron, white and green",
        b: "White, green and yellow",
        c: "White, blue and red",
        d: "White, pink and orange",
        ans:"1"
    },
    {
    question: "Q5: Which animal is known as the 'Ship of the Desert'?",
    a: "Camel",
    b: "Rat",
    c: "Sheep",
    d: "Rattle snake",
    ans:"1"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const options = document.querySelectorAll('.option');

const youScore = document.querySelector('#youScore');


let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    options.forEach((curAnsElm) => {
        if(curAnsElm.checked){
            answer = curAnsElm.id;
        }

   
    });
    return answer;

};

const deselctAll = () => {
    options.forEach((curAnsElm) => curAnsElm.checked = false);
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    }

    // Use this comment if you want to add negative marking for your answers
    // else{
    //     score--;
    // };

    questionCount++;

    deselctAll();    

    if(questionCount < quizDB.length){
        loadQuestion();
    } else{
        youScore.innerHTML = `
        <h3> You scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()"> Play again</button>
        `;

        youScore.classList.remove('scoreArea');
    }

});