let quizData = {
    'html': [

        {
            'question': 'Choose the correct HTML element for the largest heading:',
            'a': convInnerHtmlTxt('<h6>'),
            'b': convInnerHtmlTxt('<head>'),
            'c': convInnerHtmlTxt('<heading>'),
            'd': convInnerHtmlTxt('<h1>  '),
            'right_answer': 'd'
        },
        {
            'question': 'Which character is used to indicate an end tag?',
            'a': convInnerHtmlTxt('<'),
            'b': convInnerHtmlTxt('/'),
            'c': convInnerHtmlTxt('^'),
            'd': convInnerHtmlTxt('*'),
            'right_answer': 'b'
        },
        {
            'question': 'Which of these elements are all <table> elements?',
            'a': convInnerHtmlTxt('<table><head><tfoot>'),
            'b': convInnerHtmlTxt('<table><tr><td>'),
            'c': convInnerHtmlTxt('<table><tr><tt>'),
            'd': convInnerHtmlTxt('<thead><body><tr>'),
            'right_answer': 'b'
        },
        {
            'question': 'Choose the correct HTML element for the largest heading:',
            'a': '<h6>',
            'b': '<head>',
            'c': '<heading>',
            'd': '<h1>  ',
            'right_answer': 'd'
        },
        {
            'question': 'Choose the correct HTML element for the largest heading:',
            'a': '<h6>',
            'b': '<head>',
            'c': '<heading>',
            'd': '<h1>  ',
            'right_answer': 'd'
        },
        {
            'question': 'Choose the correct HTML element for the largest heading:',
            'a': '<h6>',
            'b': '<head>',
            'c': '<heading>',
            'd': '<h1>  ',
            'right_answer': 'd'
        },
        {
            'question': 'Choose the correct HTML element for the largest heading:',
            'a': '<h6>',
            'b': '<head>',
            'c': '<heading>',
            'd': '<h1>  ',
            'right_answer': 'd'
        },
    ]
}
let currentGame;
let currentQuestionIndx = 0;

function init() {
    // show html quiz at first
    currentGame = 'html';
    startGame(currentGame);
}

function convInnerHtmlTxt(tag_text){
    let convTxt = tag_text.replace('<', '&lt;').replace('>', '&gt;');
    return convTxt;
}

function setWelcomeText(game) {
    // conv txt to large characters
    let upperText = game.toUpperCase();
    // write output
    document.getElementById('custom-welcome').innerHTML = `The Awesome ${upperText} Quiz`;
}

function showThisPage(page) {
    // hide all pages
    document.getElementById('welcome-page').classList.add('d-none');
    document.getElementById('question-page').classList.add('d-none');
    document.getElementById('end-page').classList.add('d-none');
    // show current page
    document.getElementById(page).classList.remove('d-none');
}

function setLeftBar(game){   
    // hide all bars
    document.getElementById('bar-left-html').classList.add('d-none');
    document.getElementById('bar-left-css').classList.add('d-none');
    document.getElementById('bar-left-js').classList.add('d-none');
    document.getElementById('bar-left-java').classList.add('d-none');
    // show current bar
    document.getElementById(`bar-left-${game}`).classList.remove('d-none');
}

function showPage(page, game) {

    showThisPage(page); 
    setWelcomeText(game);
    setLeftBar(game);
}

function startGame(game) {
    showPage('welcome-page', game);
}

function firstQuestion(){
    if(currentQuestionIndx == 0){ return true; }
    else { return false; }
}

function setCurrentTextInQuestionPage(){
    let cur_quest_answ = quizData[currentGame][currentQuestionIndx];
    console.log(cur_quest_answ);
    document.getElementById('question-txt').innerHTML = cur_quest_answ['question'];
    document.getElementById('answer-txt-a').innerHTML = cur_quest_answ['a'];
    document.getElementById('answer-txt-b').innerHTML = cur_quest_answ['b'];
    document.getElementById('answer-txt-c').innerHTML = cur_quest_answ['c'];
    document.getElementById('answer-txt-d').innerHTML = cur_quest_answ['d'];
}

function resetAnswerColors(){
    // reset all elements
    document.getElementById('list-item-a').classList.remove('lgi-wrong-answer-color');
    document.getElementById('list-item-a').classList.remove('lgi-correct-answer-color');
    document.getElementById('answer-box-a').classList.remove('acb-wrong-color');
    document.getElementById('answer-box-a').classList.remove('acb-correct-color');
    
    document.getElementById('list-item-b').classList.remove('lgi-wrong-answer-color');
    document.getElementById('list-item-b').classList.remove('lgi-correct-answer-color');
    document.getElementById('answer-box-b').classList.remove('acb-wrong-color');
    document.getElementById('answer-box-b').classList.remove('acb-correct-color');
    
    document.getElementById('list-item-c').classList.remove('lgi-wrong-answer-color');
    document.getElementById('list-item-c').classList.remove('lgi-correct-answer-color');
    document.getElementById('answer-box-c').classList.remove('acb-wrong-color');
    document.getElementById('answer-box-c').classList.remove('acb-correct-color');
    
    document.getElementById('list-item-d').classList.remove('lgi-wrong-answer-color');
    document.getElementById('list-item-d').classList.remove('lgi-correct-answer-color');
    document.getElementById('answer-box-d').classList.remove('acb-wrong-color');
    document.getElementById('answer-box-d').classList.remove('acb-correct-color');
}

function updateQuestionPage(){
    resetAnswerColors();
    setCurrentTextInQuestionPage();    
}

function getNextQuestion(){
    // first call: show question page
    if(firstQuestion()){
        showPage('question-page', currentGame);
    }
    // show new question with answers
    updateQuestionPage();
}