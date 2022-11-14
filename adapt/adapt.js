var answer;

let questoins= [
    // {
    //     question : "Inside which HTML element do we put the JavaScript?",
    //     a:"<js>",
    //     b:"<script>",
    //     c:"<javascript>",
    //     d:"<scripting>",
    //     correct: "<script>",
    // },
    // {
    //     question : '    Whats the output of the following code?\
    //      var x = "50";\
    //       var y = "100";\
    //        document.write(x+y);',
    //     a:"50100",
    //     b:"Null",
    //     c:"150",
    //     d:"5000",
    //     correct: "50100",
    // },
    // {
    //     question: 'What happens if the tested condition is false?',
    //    a:"The code's execution will be stopped",
    //    b:"The code does nothing and moves to the next section",
    //    c:"The code in the braces is executed anyway",
    //    d:"None",
    //    correct: "The code does nothing and moves to the next section",
    // },
    // {
    //     question: "What built-in property is used to count the number of characters in an object's property?",
    //     a:"write" ,
    //     b:"size" ,
    //     c: "length",
    //     d: "width",
    //     correct: "length",
    //  },
    {
        level:"Adapt",
        question: " An object's properties are similar to variables; methods are similar to: ",
        a:"functions" ,
        b: "conditionals",
        c: "properties",
        d: "None",
        correct: "functions",
    },
    {
        level:"Adapt",

        question: "What is the output of the following expression? function multNmbrs(a, b) {\
         var c = a*b; }\
         multNmbrs(2, 6);\
        ",
        a:"24" ,
        b: "12",
        c: "Nothing",
        d: "None",
        correct: "12",
    },
    {
        level:"Adapt",

        question: "What keyword is used for creating an instance of an object?        ",
        a:"var" ,
        b: "make",
        c:"new" ,
        d:"None" ,
        correct:"new" ,
    },
    {
        level:"Adapt",

        question: "In reference to an object, color, height, weight and name are all examples of:",
        a: "nouns        ",
        b:"properties" ,
        c:"methods        " ,
        d:"None" ,
        correct:"properties" ,
    },
    {
        level:"Adapt",

        question: "What is the correct syntax for referring to an external script\ called 'script.js'?",
        a: "<script name='script.js'>        ",
        b: "<script src='script.js'>        ",
        c: "<script href='script.js'> ",
        d:"None",
        correct: "<script src='script.js'>        ",
    },
    {
        level:"Adapt",

        question: "What is DOM?        ",
        a: "Document Object Model        ",
        b: "Definitive Object Model        ",
        c: "Document Orientation Model        ",
        d:"None",
        correct: "Document Object Model        ",
    },
    
    // {
    //     question: "Which method is used to replace nodes?        ",
    //     a: "replaceChild        ",
    //     b: "replace        ",
    //     c: "replaceElements        ",
    //     d:"None",
    //     correct:"replaceChild        " ,
    // },
    
    // {
    //     question: "A paragraph is inside a div element. You want the paragraphs click event to be handled first. You should use:",
    //     a: "Handling        ",
    //     b: "Capturing        ",
    //     c: "Bubbling        ",
    //     d:"None",
    //     correct: "Bubbling        ",
    // },
    

    // {
    //     question: "What information results from creating a Date Object?        ",
    //     a: "The date when the web page was hosted        ",
    //     b: "An empty string        ",
    //     c: "The current date and time        ",
    //     d:"None",
    //     correct: "The current date and time        ",
    // },
    // {
    //     question: "In associative arrays, index numbers are replaced with:        ",
    //     a: "functions        ",
    //     b: "variable names        ",
    //     c: "constants        ",
    //     d:"strings        ",
    //     correct: "strings        " ,
    // },
    // {
    //     question: "In order to use associative arrays, the 'associated' name is putin:",
    //     a: "functions        ",
    //     b: "variable names        ",
    //     c: "constants        ",
    //     d:"strings        ",
    //     correct: "strings        " ,
    // },
    // {
    //     question: "By entering var example = new Array(); we create an empty array which can be filled... ",
    //     a: "nevermore        ",
    //     b: "anytime later        ",
    //     c: "just after it        ",
    //     d:"None",
    //     correct: "anytime later        " ,
    // },
    // {
    //     question: "What is the output of the following code?\
    //     let names = ['John', 'Fred', 'Ann'];\
    //     let [Ann, Fred, John] = names;\
    //     console.log(John);",
    //     a: "Fred",
    //     b: "John        ",
    //     c: "Error        ",
    //     d: "Ann        ",
    //     correct:"Ann        " ,
    // },
    // {
    //     question: "What is the output of the following code?\
    //     const obj = {one: 1, two: 2};\
    //     let {one:first, two:second} = obj;\
    //     console.log(one); ",
    //     a: "error",
    //     b: "1",
    //     c: "2",
    //     d: "the full object (obj)",
    //     correct:"error" ,
    // },
    // {
    //     question: "The 'this' keyword in the method means:   ",
    //     a: "        The name of the given method        ",
    //     b: "        The name of the web page        ",
    //     c: "        The current object        ",
    //     d: "None",
    //     correct:"        The current object        " ,
    // },
    // {
    //     question: "In order to use the object's properties within a function, use:",
    //     a: "The function's name        ",
    //     b: "The 'this' keyword        ",
    //     c: "Just the name of the property        ",
    //     d: "The 'var' keyword        ",
    //     correct: "The 'this' keyword        ",
    // },
    // {
    //     question: "How do you round the number 7.25, to the nearest integer?        ",
    //     a: "Math.rnd(7.25)        ",
    //     b: "round(7.25)        ",
    //     c: "Math.round(7.25)  ",
    //     d: "rnd(7.25)        ",
    //     correct:"Math.round(7.25) " ,
    // },
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
                location.href='/transpose/transposemain.html';          

            });
}


})