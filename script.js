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
            'question': 'Who is making the Web standards?',
            'a': 'Mozilla  ',
            'b': 'Google',
            'c': 'Microsoft',
            'd': 'The World Wide Web Consortium',
            'right_answer': 'd'
        },        
        {
            'question': 'What is the correct HTML for creating a hyperlink?',
            'a': convInnerHtmlTxt('<a href="http://www.w3schools.com"> W3Schools</a>  '),
            'b': convInnerHtmlTxt('<a name="http://www.w3schools.com"> W3Schools.com</a>'),
            'c': convInnerHtmlTxt('<a url="http://www.w3schools.com"> W3Schools.com</a>'),
            'd': convInnerHtmlTxt('<a>http://www.w3schools.com</a>'),
            'right_answer': 'a'
        },        
        {
            'question': 'How can you make a numbered list?',
            'a': convInnerHtmlTxt('<ul>'),
            'b': convInnerHtmlTxt('<list>'),
            'c': convInnerHtmlTxt('<ol>'),
            'd': convInnerHtmlTxt('<dl>'),
            'right_answer': 'c'
        },        
        {
            'question': 'How can you make a bulleted list?',
            'a': convInnerHtmlTxt('<ul>'),
            'b': convInnerHtmlTxt('<ol>'),
            'c': convInnerHtmlTxt('<dl>'),
            'd': convInnerHtmlTxt('<list>'),
            'right_answer': 'a'
        },        
        {
            'question': 'What is the correct HTML for making a checkbox?',
            'a': convInnerHtmlTxt('<input type="check">'),
            'b': convInnerHtmlTxt('<checkbox>'),
            'c': convInnerHtmlTxt('<check>'),
            'd': convInnerHtmlTxt('<input type="checkbox">'),
            'right_answer': 'd'
        }
    ],
    'css': [
        {
            'question': 'What does CSS stand for?',
            'a': 'Creative Style Sheets',
            'b': 'Computer Style Sheets',
            'c': 'Cascading Style Sheets',
            'd': 'Colorful Style Sheets',
            'right_answer': 'c'
        },
        {
            'question': 'Which HTML attribute is used to define inline styles?',
            'a': 'font',
            'b': 'style',
            'c': 'styles',
            'd': 'class',
            'right_answer': 'b'
        },
        {
            'question': 'Which is the correct CSS syntax?',
            'a': '{body;color:black;}',
            'b': 'body:color=black;',
            'c': 'body {color: black;} ',
            'd': '{body:color=black;}',
            'right_answer': 'c'
        },
        {
            'question': 'How do you insert a comment in a CSS file?',
            'a': `' this is a comment `,
            'b': '// this is a comment //',
            'c': '// this is a comment',
            'd': '/* this is a comment */ ',
            'right_answer': 'd'
        },
        {
            'question': 'Which CSS property controls the text size?',
            'a': 'font-size',
            'b': 'text-style',
            'c': 'font-style',
            'd': 'text-size',
            'right_answer': 'a'
        },
        {
            'question': convInnerHtmlTxt('What is the correct CSS syntax for making all the <p> elements bold?'),
            'a': convInnerHtmlTxt('p {font-weight:bold;}'),
            'b': convInnerHtmlTxt('<p style="text-size:bold;">'),
            'c': convInnerHtmlTxt('<p style="font-size:bold;">'),
            'd': convInnerHtmlTxt('p {text-size:bold;}'),
            'right_answer': 'a'
        },
        {
            'question': 'How do you display hyperlinks without an underline?',
            'a': 'a {text-decoration:none;}',
            'b': 'a {underline:none;}',
            'c': 'a {decoration:no-underline;}',
            'd': 'a {text-decoration:no-underline;}',
            'right_answer': 'a'
        },
        {
            'question': 'How do you make each word in a text start with a capital letter?',
            'a': 'transform:capitalize',
            'b': 'text-transform:capitalize',
            'c': 'text-style:capitalize',
            'd': `You can't do that with CSS`,
            'right_answer': 'b'
        }
    ],
    'js': [
        {
            'question': 'Inside which HTML element do we put the JavaScript?',
            'a': convInnerHtmlTxt('<javascript> '),
            'b': convInnerHtmlTxt('<js>'),
            'c': convInnerHtmlTxt('<scripting>'),
            'd': convInnerHtmlTxt('<script> '),
            'right_answer': 'd'
        },
        {
            'question': 'How do you write "Hello World" in an alert box?',
            'a': convInnerHtmlTxt('msg("Hello World");'),
            'b': convInnerHtmlTxt('msgBox("Hello World");'),
            'c': convInnerHtmlTxt('alertBox("Hello World");'),
            'd': convInnerHtmlTxt('alert("Hello World");'),
            'right_answer': 'd'
        },
        {
            'question': 'How to write an IF statement in JavaScript?',
            'a': convInnerHtmlTxt('if (i == 5)'),
            'b': convInnerHtmlTxt('if i = 5 then'),
            'c': convInnerHtmlTxt('if i == 5 then'),
            'd': convInnerHtmlTxt('if i = 5'),
            'right_answer': 'a'
        },
        {
            'question': 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
            'a': convInnerHtmlTxt('if i <> 5'),
            'b': convInnerHtmlTxt('if (i <> 5)'),
            'c': convInnerHtmlTxt('if (i != 5)'),
            'd': convInnerHtmlTxt('if i =! 5 then'),
            'right_answer': 'c'
        },
        {
            'question': 'How does a FOR loop start?',
            'a': convInnerHtmlTxt('for (i = 0; i <= 5)'),
            'b': convInnerHtmlTxt('for i = 1 to 5'),
            'c': convInnerHtmlTxt('for (i <= 5; i++)'),
            'd': convInnerHtmlTxt('for (i = 0; i <= 5; i++)'),
            'right_answer': 'd'
        },
        {
            'question': 'What is the correct way to write a JavaScript array?',
            'a': convInnerHtmlTxt('var colors = ["red", "green", "blue"]'),
            'b': convInnerHtmlTxt('var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")'),
            'c': convInnerHtmlTxt('var colors = (1:"red", 2:"green", 3:"blue")'),
            'd': convInnerHtmlTxt('var colors = "red", "green", "blue"'),
            'right_answer': 'a'
        },
        {
            'question': 'How do you round the number 7.25, to the nearest integer?',
            'a': convInnerHtmlTxt('rnd(7.25)'),
            'b': convInnerHtmlTxt('Math.rnd(7.25)'),
            'c': convInnerHtmlTxt('round(7.25)'),
            'd': convInnerHtmlTxt('Math.round(7.25)'),
            'right_answer': 'd'
        },
        {
            'question': 'How do you find the number with the highest value of x and y?',
            'a': convInnerHtmlTxt('Math.max(x, y)'),
            'b': convInnerHtmlTxt('ceil(x, y)'),
            'c': convInnerHtmlTxt('top(x, y)'),
            'd': convInnerHtmlTxt('Math.ceil(x, y)'),
            'right_answer': 'a'
        },
        {
            'question': 'Which event occurs when the user clicks on an HTML element?',
            'a': convInnerHtmlTxt('onclick'),
            'b': convInnerHtmlTxt('onchange'),
            'c': convInnerHtmlTxt('onmouseover'),
            'd': convInnerHtmlTxt('onmouseclick'),
            'right_answer': 'a'
        }
    ],
    'java': [
        {
            'question': 'What is a correct syntax to output "Hello World" in Java?',
            'a': convInnerHtmlTxt('print ("Hello World");'),
            'b': convInnerHtmlTxt('echo("Hello World");'),
            'c': convInnerHtmlTxt('Console.WriteLine("Hello World");'),
            'd': convInnerHtmlTxt('System.out.println("Hello World");'),
            'right_answer': 'd'
        },
        {
            'question': 'Which data type is used to create a variable that should store text?',
            'a': convInnerHtmlTxt('myString'),
            'b': convInnerHtmlTxt('String'),
            'c': convInnerHtmlTxt('string'),
            'd': convInnerHtmlTxt('Txt'),
            'right_answer': 'b'
        },
        {
            'question': 'How do you create a variable with the numeric value 5?',
            'a': convInnerHtmlTxt('int x = 5;'),
            'b': convInnerHtmlTxt('x = 5;'),
            'c': convInnerHtmlTxt('float x = 5;'),
            'd': convInnerHtmlTxt('num x = 5'),
            'right_answer': 'a'
        },
        {
            'question': 'How do you create a variable with the floating number 2.8?',
            'a': convInnerHtmlTxt('int x = 2.8f;'),
            'b': convInnerHtmlTxt('byte x = 2.8f'),
            'c': convInnerHtmlTxt('float x = 2.8f;'),
            'd': convInnerHtmlTxt('x = 2.8f;'),
            'right_answer': 'c'
        },
        {
            'question': 'Which method can be used to find the length of a string?',
            'a': convInnerHtmlTxt('getLength()'),
            'b': convInnerHtmlTxt('length()'),
            'c': convInnerHtmlTxt('getSize()'),
            'd': convInnerHtmlTxt('len()'),
            'right_answer': 'b'
        },
        {
            'question': 'Which method can be used to return a string in upper case letters?',
            'a': convInnerHtmlTxt('tuc()'),
            'b': convInnerHtmlTxt('touppercase()'),
            'c': convInnerHtmlTxt('toUpperCase()'),
            'd': convInnerHtmlTxt('upperCase()'),
            'right_answer': 'c'
        },
        {
            'question': 'Which operator can be used to compare two values?',
            'a': convInnerHtmlTxt('><'),
            'b': convInnerHtmlTxt('='),
            'c': convInnerHtmlTxt('=='),
            'd': convInnerHtmlTxt('<>'),
            'right_answer': 'c'
        },
        {
            'question': 'How do you create a method in Java?',
            'a': convInnerHtmlTxt('methodName.'),
            'b': convInnerHtmlTxt('methodName[]'),
            'c': convInnerHtmlTxt('methodName()'),
            'd': convInnerHtmlTxt('(methodName)'),
            'right_answer': 'c'
        },
        {
            'question': 'Which keyword is used to create a class in Java?',
            'a': convInnerHtmlTxt('MyClass'),
            'b': convInnerHtmlTxt('className'),
            'c': convInnerHtmlTxt('class'),
            'd': convInnerHtmlTxt('class()'),
            'right_answer': 'c'
        },
        {
            'question': 'Which method can be used to find the highest value of x and y?',
            'a': convInnerHtmlTxt('Math.max(x,y)'),
            'b': convInnerHtmlTxt('Math.largest(x,y)'),
            'c': convInnerHtmlTxt('Math.maximum(x,y)'),
            'd': convInnerHtmlTxt('Math.maxNum(x,y)'),
            'right_answer': 'a'
        }
    ]
}
let currentGame = 'html';
let currentQuestionIndx = 0;
let correctAnswerHistory = [];

function init() {
    // show html quiz at first
    currentGame = 'html';
    startGame(currentGame);
}

function addPoint(num) {
    correctAnswerHistory.push(num);
}

function subPoint() {
    correctAnswerHistory = correctAnswerHistory.slice(0, -1);
}

function clearPoint() {
    correctAnswerHistory = [];
}

function convInnerHtmlTxt(tag_text) {
    let oldConvTxt= tag_text;    
    let tagsInside = true;
    // loop, if string contains < / >
    while(tagsInside){
        newConvText = oldConvTxt.replace('<', '&lt;').replace('>', '&gt;');
        if(newConvText != oldConvTxt){
            oldConvTxt = newConvText;
        }
        else{ tagsInside = false; }
    }    
    return oldConvTxt;
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
    // clear points
    clearPoint();    
    // update progress bar
    updateProgressBar();
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
    // update progress bar
    updateProgressBar();
}

function updateProgressBar(){
    // calc percent
    let n_Questions = quizData[currentGame].length;
    let percent = Math.round(currentQuestionIndx / n_Questions * 100);
    // update progress bar
    document.getElementById('progress-bar').style = `width: ${percent}%`;    
}

function replayGame() {
    // start the same game again
    getFirstQuestion();
}

function getFirstQuestion() {
    // open question page
    showPage('question-page', currentGame);
    // set current question indx to start
    currentQuestionIndx = 0;
    // show new question with answer possibilitys
    showQuestionAnswers();
    // clear points
    clearPoint();    
    // update progress bar
    updateProgressBar();
}

function checkAnswer(answer_char) {
    let solution_char = quizData[currentGame][currentQuestionIndx]['right_answer'];
    // correct answer
    if (solution_char == answer_char) {
        setItemColor(answer_char, 'correct', 'add');
        // add point
        addPoint(1);
    }
    // wrong answer
    else {
        // mark wrong answer
        setItemColor(answer_char, 'wrong', 'add');
        // show/mark correct answer        
        setItemColor(solution_char, 'correct', 'add');
        // add zero point
        addPoint(0);
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

function outputScore(){
    // set head title
    let GAME = currentGame.toUpperCase();
    document.getElementById('custom-end-span').innerHTML = `${GAME} QUIZ`;
    // output score
    let points = getSumOfPoints();
    let n_questions = quizData[currentGame].length;
    document.getElementById('score-evaluation').innerHTML = `${points} / ${n_questions}`;
    // update progress bar
    updateProgressBar();
}

function setNextPage() {
    // increment indx
    currentQuestionIndx++;
    // out of range?
    if (currentQuestionIndx >= quizData[currentGame].length) {
        // show end page
        showPageHideOthers('end-page');
        // update endpage
        outputScore();
    }
    else {
        // show next question
        showQuestionAnswers();
    }
}

function getSumOfPoints(){
    if(correctAnswerHistory.length == 0){
        return 0;
    }
    // calc the summation
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return correctAnswerHistory.reduce(reducer);
}

function setBackPage() {
    // decrement indx
    currentQuestionIndx--;
    // out of range, show welcome page
    if (currentQuestionIndx < 0) {
        startGame(currentGame);
    }
    else {
        // decrement array
        subPoint();
        // show next question
        showQuestionAnswers();
    }
}

function getNextQuestion(next_back) {
    // next Question
    if (next_back == 'next') {
        setNextPage();
    }
    // Question back
    if (next_back == 'back') {
        setBackPage();
    }
}