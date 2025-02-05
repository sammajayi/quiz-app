// Getting all rewuired elements
const start_btn = document.querySelector(".start_btn button")
const info_box = document.querySelector(".info_box")
const exit_btn = document.querySelector(".buttons .quit")
const continue_btn = document.querySelector(".buttons .restart")
const quiz_box = document.querySelector(".quiz_box")

// If Start Quiz BUtton Clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo") //show the info box
}

// If Exit BUtton Clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo") //hide the info box
}

// If Continue BUtton Clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo") //hide the info box
    quiz_box.classList.add("activeQuiz")
    showQuestion(0)
}

let que_count = 0;

// getting questions and answers from Array
function showQuestion(index){
    const que_text = document.querySelector(".que_text")
    let que_tag = '<span>'+  questions[index].question +'</span>';
    que_text.innerHTML = que_tag
}