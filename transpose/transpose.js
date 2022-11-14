var answer;

let questoins= [
    {
        level:"Transpose",

        question: "Which method is used to replace nodes?        ",
        a: "replaceChild        ",
        b: "replace        ",
        c: "replaceElements        ",
        d:"None",
        correct:"replaceChild        " ,
    },
    
    {
        level:"Transpose",

        question: "A paragraph is inside a div element. You want the paragraphs click event to be handled first. You should use:",
        a: "Handling        ",
        b: "Capturing        ",
        c: "Bubbling        ",
        d:"None",
        correct: "Bubbling        ",
    },
    

    {
        level:"Transpose",

        question: "What information results from creating a Date Object?        ",
        a: "The date when the web page was hosted        ",
        b: "An empty string        ",
        c: "The current date and time        ",
        d:"None",
        correct: "The current date and time        ",
    },
    {
        level:"Transpose",

        question: "In associative arrays, index numbers are replaced with:        ",
        a: "functions        ",
        b: "variable names        ",
        c: "constants        ",
        d:"strings        ",
        correct: "strings        " ,
    },
    {
        level:"Transpose",

        question: "In order to use associative arrays, the 'associated' name is putin:",
        a: "functions        ",
        b: "variable names        ",
        c: "constants        ",
        d:"strings        ",
        correct: "strings        " ,
    },
    {
        level:"Transpose",

        question: "By entering var example = new Array(); we create an empty array which can be filled... ",
        a: "nevermore        ",
        b: "anytime later        ",
        c: "just after it        ",
        d:"None",
        correct: "anytime later        " ,
    },
    {
        level:"Transpose",

        question: "What is the output of the following code?\
        let names = ['John', 'Fred', 'Ann'];\
        let [Ann, Fred, John] = names;\
        console.log(John);",
        a: "Fred",
        b: "John        ",
        c: "Error        ",
        d: "Ann        ",
        correct:"Ann        " ,
    },
    {
        level:"Transpose",

        question: "What is the output of the following code?\
        const obj = {one: 1, two: 2};\
        let {one:first, two:second} = obj;\
        console.log(one); ",
        a: "error",
        b: "1",
        c: "2",
        d: "the full object (obj)",
        correct:"error" ,
    },
    {
        level:"Transpose",

        question: "The 'this' keyword in the method means:   ",
        a: "        The name of the given method        ",
        b: "        The name of the web page        ",
        c: "        The current object        ",
        d: "None",
        correct:"        The current object        " ,
    },
    {
        level:"Transpose",

        question: "In order to use the object's properties within a function, use:",
        a: "The function's name        ",
        b: "The 'this' keyword        ",
        c: "Just the name of the property        ",
        d: "The 'var' keyword        ",
        correct: "The 'this' keyword        ",
    },
    {
        level:"Transpose",

        question: "How do you round the number 7.25, to the nearest integer?        ",
        a: "Math.rnd(7.25)        ",
        b: "round(7.25)        ",
        c: "Math.round(7.25)  ",
        d: "rnd(7.25)        ",
        correct:"Math.round(7.25) " ,
    },
]

      let finish= document.querySelector('#finish');
      finish.style.display="none"

const level = document.querySelector('#header');
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

var answers = Array.from (document.getElementsByName("answer"));
console.log(answers);

let questionCount =0;
let score = localStorage.getItem('score');
let wrong=0;

function loadQuestion(){

    const questionList = questoins[questionCount];
    level.innerHTML = questionList.level;
    question.innerHTML = questionList.question;   
    option1.innerText =  questionList.a;
    option2.innerText =  questionList.b;
    option3.innerText =  questionList.c;
    option4.innerText =  questionList.d;
    
    answers[0].value  = questionList.a;
    answers[1].value  = questionList.b;
    answers[2].value  = questionList.c;
    answers[3].value  = questionList.d;


}

loadQuestion();

 function getCheckAnswer(){
    // forEach calls a function for each element in an array
    const questionList = questoins[questionCount];
    let userAnswer ;
    answers.forEach(
        function(curAnsElem){
            if(curAnsElem.checked ) {
                

                userAnswer = curAnsElem.value;
                console.log(curAnsElem.value);
              
                if(userAnswer == questionList.correct){
                  
                    score++;
                    localStorage.setItem("score",score);

                    console.log(score);
                } 
                else {
                    wrong++ ;
                    localStorage.setItem("wrong",wrong);

                    console.log(wrong);
                }             
                // console.log(userAnswer)
            }
   
        }
    );
    // if (userAnswer == questionList.correct){
    //     console.log()
    // }
    return answer;

}

function deselect(){
    answers.forEach(function(curAnsElem){
        curAnsElem.checked = false ;
    })

}


submit.addEventListener('click', function () {

       getCheckAnswer();
/*      console.log(checkedAnswer);
 */    if(answer){
        // score++;
        // console.log(score);
    };

    questionCount++;
    

    deselect();

    if(questionCount< questoins.length-1){
        
        loadQuestion();

    }
    else if(questionCount == questoins.length-1){
                loadQuestion();

        let next=document.querySelector('#submit');
        next.style.display="none";
/*         alert(`${score}`)
 */       /* location.href="sth.html"; */
            let finish= document.querySelector('#finish');
            

            finish.style.display="block";
            finish.addEventListener('click',function (){
                const questionList = questoins[questionCount];
                let userAnswer ;
                answers.forEach(
                    function(curAnsElem){
                        if(curAnsElem.checked ) {
                            
            
                            userAnswer = curAnsElem.value;
                            console.log(curAnsElem.value);
                          
                            if(userAnswer == questionList.correct){
                              
                                score++;
                                localStorage.setItem("score",score);
            
                                console.log(score);
                            } 
                            else {
                                wrong++ ;
                                localStorage.setItem("wrong",wrong);
            
                                console.log(wrong);
                            }             
                            // console.log(userAnswer)
                        }
               
                    }
                );
                // if (userAnswer == questionList.correct){
                //     console.log()
                // }
                           
                quizfinish();

            });
}


})
function quizfinish(){
    var score = localStorage.getItem("score");
    if (score >= 10){
        location.href="/RESULTSPage.html";
    }
    else{
        location.href="/RESULTSPageFailed.html";
    }
}