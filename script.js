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
        // {
        //     'question': 'Choose the correct HTML element for the largest heading:',
        //     'a': '<h6>',
        //     'b': '<head>',
        //     'c': '<heading>',
        //     'd': '<h1>  ',
        //     'right_answer': 'd'
        // },
        // {
        //     'question': 'Choose the correct HTML element for the largest heading:',
        //     'a': '<h6>',
        //     'b': '<head>',
        //     'c': '<heading>',
        //     'd': '<h1>  ',
        //     'right_answer': 'd'
        // },
        // {
        //     'question': 'Choose the correct HTML element for the largest heading:',
        //     'a': '<h6>',
        //     'b': '<head>',
        //     'c': '<heading>',
        //     'd': '<h1>  ',
        //     'right_answer': 'd'
        // },
        // {
        //     'question': 'Choose the correct HTML element for the largest heading:',
        //     'a': '<h6>',
        //     'b': '<head>',
        //     'c': '<heading>',
        //     'd': '<h1>  ',
        //     'right_answer': 'd'
        // }
    ]
}
let currentGame;
let currentQuestionIndx = 0;

function init() {
    // show html quiz at first
    currentGame = 'html';
    startGame(currentGame);
}

function convInnerHtmlTxt(tag_text) {
    let convTxt = tag_text.replace('<', '&lt;').replace('>', '&gt;');
    return convTxt;
}

function setWelcomeText(game) {
    // conv txt to large characters
    let upperText = game.toUpperCase();
    // write output
    document.getElementById('custom-welcome').innerHTML = `The Awesome ${upperText} Quiz`;
}

function showPageHideOthers(page) {
    // hide all pages
    document.getElementById('welcome-page').classList.add('d-none');
    document.getElementById('question-page').classList.add('d-none');
    document.getElementById('end-page').classList.add('d-none');
    // show current page
    document.getElementById(page).classList.remove('d-none');
}

function setLeftBar(game) {
    // hide all bars
    document.getElementById('bar-left-html').classList.add('d-none');
    document.getElementById('bar-left-css').classList.add('d-none');
    document.getElementById('bar-left-js').classList.add('d-none');
    document.getElementById('bar-left-java').classList.add('d-none');
    // show current bar
    document.getElementById(`bar-left-${game}`).classList.remove('d-none');
}

function setGame(game) {
    currentGame = game;
}

function setcurrentQuestionIndx(indx) {
    currentQuestionIndx = indx;
}

function showPage(page, game) {
    // show page 
    showPageHideOthers(page);
    // create wlcometext
    setWelcomeText(game);
    // set bar left
    setLeftBar(game);
}

function startGame(game) {
    // set game
    setGame(game);
    // set first question indx
    setcurrentQuestionIndx(0);
    // show page
    showPage('welcome-page', game);
}

function setCurrentTextInQuestionPage() {
    let cur_quest_answ = quizData[currentGame][currentQuestionIndx];
    document.getElementById('question-txt').innerHTML = cur_quest_answ['question'];
    document.getElementById('answer-txt-a').innerHTML = cur_quest_answ['a'];
    document.getElementById('answer-txt-b').innerHTML = cur_quest_answ['b'];
    document.getElementById('answer-txt-c').innerHTML = cur_quest_answ['c'];
    document.getElementById('answer-txt-d').innerHTML = cur_quest_answ['d'];
}

function setItemColor(char, wrong_correct, add_remove) {
    // get list item name
    let li_id = `list-item-${char}`;
    // get answer box name
    let ab_id = `answer-box-${char}`;

    // add
    if (add_remove == 'add') {
        if (wrong_correct == 'correct') {
            document.getElementById(li_id).classList.add('lgi-correct-answer-color');
            document.getElementById(ab_id).classList.add('acb-correct-color');
        }
        if (wrong_correct == 'wrong') {
            document.getElementById(li_id).classList.add('lgi-wrong-answer-color');
            document.getElementById(ab_id).classList.add('acb-wrong-color');
        }
    }
    // remove
    if (add_remove == 'remove') {
        if (wrong_correct == 'correct') {
            document.getElementById(li_id).classList.remove('lgi-correct-answer-color');
            document.getElementById(ab_id).classList.remove('acb-correct-color');
        }
        if (wrong_correct == 'wrong') {
            document.getElementById(li_id).classList.remove('lgi-wrong-answer-color');
            document.getElementById(ab_id).classList.remove('acb-wrong-color');
        }
    }
}

function resetAnswerColors() {
    // reset all elements
    let answer_chars = ['a', 'b', 'c', 'd'];
    // loop all chars
    for (let i = 0; i < answer_chars.length; i++) {
        setItemColor(answer_chars[i], 'correct', 'remove');
        setItemColor(answer_chars[i], 'wrong', 'remove');
    }
}

function showQuestionAnswers() {
    resetAnswerColors();
    setCurrentTextInQuestionPage();
    // make buttons active
    enableButtons();
}

function getFirstQuestion() {
    // open question page
    showPage('question-page', currentGame);
    // show new question with answer possibilitys
    showQuestionAnswers();
}

function checkAnswer(answer_char) {
    let solution_char = quizData[currentGame][currentQuestionIndx]['right_answer'];
    // correct answer
    if (solution_char == answer_char) {
        setItemColor(answer_char, 'correct', 'add');
    }
    // wrong answer
    else {
        // mark wrong answer
        setItemColor(answer_char, 'wrong', 'add');
        // show/mark correct answer        
        setItemColor(solution_char, 'correct', 'add');
    }
}

function disableButtons() {
    // get all elements
    let answer_chars = ['a', 'b', 'c', 'd'];
    let li_id;
    // loop all chars
    for (let i = 0; i < answer_chars.length; i++) {
        // get id
        li_id = `list-item-${answer_chars[i]}`;
        document.getElementById(li_id).classList.add('disable-Item');
    }
}

function enableButtons() {
    // get all elements
    let answer_chars = ['a', 'b', 'c', 'd'];
    let li_id;
    // loop all chars
    for (let i = 0; i < answer_chars.length; i++) {
        // get id
        li_id = `list-item-${answer_chars[i]}`;
        document.getElementById(li_id).classList.remove('disable-Item');
    }
}

function answer(answer_char) {
    // check answer and color it
    checkAnswer(answer_char);
    // can't click again
    disableButtons();
}

function getNextQuestion(next_back) {
    // next Question
    if (next_back == 'next') {
        // increment indx
        currentQuestionIndx++;
        // out of range?
        if (currentQuestionIndx >= quizData[currentGame].length) {
            // show end page
            showPageHideOthers('end-page');
        }
        else {
            // show next question
            showQuestionAnswers();
        }
    }
    // Question back
    if (next_back == 'back') {
        // decrement indx
        currentQuestionIndx--;
        // out of range, show welcome page
        if (currentQuestionIndx < 0) {
            startGame(currentGame);
        }
        else {
            // show next question
            showQuestionAnswers();
        }
    }
}