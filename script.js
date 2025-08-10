let ques = document.querySelector(".question");

let btn = document.querySelector(".btn");

let totalScore = 0;

let timer;

let timeleft = 15;
document.querySelector(".timer").innerText = timeleft;



const questions = [
  {
    question: "1. What is the correct file extension for Python files?",
    options: [".pt", ".py", ".pyt", ".python"],
    correctAnswer: ".py"
  },
  {
    question: "2. Which keyword is used to create a function in Python?",
    options: ["function", "define", "def", "fun"],
    correctAnswer: "def"
  },
  {
    question: "3. What will `print(2 ** 3)` output?",
    options: ["6", "8", "9", "Error"],
    correctAnswer: "8"
  },
  {
    question: "4. Which data type is used to store text?",
    options: ["int", "str", "float", "bool"],
    correctAnswer: "str"
  },
  {
    question: "5. Which of the following is a list in Python?",
    options: ["{1, 2, 3}", "[1, 2, 3]", "(1, 2, 3)", "<1, 2, 3>"],
    correctAnswer: "[1, 2, 3]"
  },
  {
    question: "6. How do you start a comment in Python?",
    options: ["//", "#", "<!--", "/*"],
    correctAnswer: "#"
  },
  {
    question: "7. Which method adds an item to a list?",
    options: ["append()", "add()", "insert()", "extend()"],
    correctAnswer: "append()"
  },
  {
    question: "8. How do you check the data type of a variable?",
    options: ["type()", "data()", "typeof()", "checktype()"],
    correctAnswer: "type()"
  },
  {
    question: "9. What does `len()` do?",
    options: ["Adds numbers", "Prints data", "Finds length", "Deletes data"],
    correctAnswer: "Finds length"
  },
  {
    question: "10. Which of these is a Python boolean value?",
    options: ["yes", "TRUE", "True", "On"],
    correctAnswer: "True"
  },
  {
    question: "11. Which loop is used to iterate over a sequence?",
    options: ["if", "for", "repeat", "loop"],
    correctAnswer: "for"
  },
  {
    question: "12. What is the output of `print(10//3)`?",
    options: ["3.3", "3", "3.0", "Error"],
    correctAnswer: "3"
  },
  {
    question: "13. Which function is used to take user input?",
    options: ["get()", "read()", "input()", "scan()"],
    correctAnswer: "input()"
  },
  {
    question: "14. What is the output of `bool(0)`?",
    options: ["True", "False", "0", "None"],
    correctAnswer: "False"
  },
  {
    question: "15. Which operator is used for 'not equal'?",
    options: ["!=", "<>", "!==", "not"],
    correctAnswer: "!="
  },
  {
    question: "16. How do you write an 'if' condition in Python?",
    options: ["if x > y:", "if (x > y)", "if x > y then", "if x > y {}"],
    correctAnswer: "if x > y:"
  },
  {
    question: "17. Which symbol is used to indent code blocks?",
    options: ["Tab/Spaces", "{}", "()", ";"],
    correctAnswer: "Tab/Spaces"
  },
  {
    question: "18. What is the output of `print('Hello' + 'World')`?",
    options: ["Hello+World", "Hello World", "HelloWorld", "Error"],
    correctAnswer: "HelloWorld"
  },
  {
    question: "19. How do you define a variable in Python?",
    options: ["let x = 10", "x := 10", "x = 10", "int x = 10"],
    correctAnswer: "x = 10"
  },
  {
    question: "20. Which of the following is a Python tuple?",
    options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "<1, 2, 3>"],
    correctAnswer: "(1, 2, 3)"
  }
];

btn.addEventListener("click", () => {
  document.querySelector(".heading").classList.add("hide");
  btn.innerText = "Next question";
  document.querySelector(".para").classList.add("hide");



})


function timeinterval() {
  let timeleft = 15;
  document.querySelector(".timer").innerText = timeleft;

  timer = setInterval(() => {
    timeleft--;
    document.querySelector(".timer").innerText = timeleft;

    if (timeleft === 0) {
      clearInterval(timer);
    }
  }, 1000);
}

let p = document.createElement("p");

p.classList.add("newques");

let quesindex = 0;
let answers = document.querySelectorAll(".ans");
let num;

function showques(index) {
  clearInterval(timer);
  if (index < questions.length) {
    timeinterval();
    p.innerText = questions[index].question;

    ques.prepend(p);
     



    for (let ansind = 0; ansind < 4; ansind++) {
  let radio = answers[ansind].querySelector("input[type='radio']");
  let span = answers[ansind].querySelector("span");

  let optionText = questions[index].options[ansind];
  span.innerText = optionText;
  radio.value = optionText; 
  
 

  answers[ansind].classList.remove("hide2");

   num = ansind
}

   
    

  }
  
 

}
btn.addEventListener("click", (e) => {
  e.preventDefault();


if(quesindex>0){
  let select = document.querySelector(`input[name = "option"]:checked`);
  if(select && select.value === questions[quesindex-1].correctAnswer){totalScore++;

  }
  document.querySelectorAll(`input[name = "option"]`).forEach(radio => {
    radio.checked = false;
  })
}if(quesindex<questions.length){
  showques(quesindex);
  quesindex++;
} else {
    ques.remove(p);
    document.querySelector(".timer").classList.add("hide2");
    document.querySelector(".info").classList.remove("hide2");
    document.querySelector(".info").innerText = `The Quiz is over and your score is: ${totalScore}`;
  }


});




