function navigateToQuestions() {
    window.location.href = "./questions.html";
}

function navigateHome() {
    window.location.href = "./index.html";
}

function navigateNewQuestions() {
    window.location.href = "./new_questions.html";
}

//set home page navigation
let home_button = document.getElementById("navbar-icon");
home_button.onclick = navigateHome;

//set questions navigation
let questions_tab = document.getElementById("question-tab");
questions_tab.onclick = navigateToQuestions;

// set new questions navigation
let new_questions_tab = document.getElementById("new-question-tab");
new_questions_tab.onclick = navigateNewQuestions;
