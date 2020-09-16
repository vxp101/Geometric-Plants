/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [

    {
      quizNum: 1,
      question: "What makes a plant green? ",
      answers: [
        'Chlorophyll',
        'Mitochondria',
        'Anthocyanins',
        'Flavanoids',
      ],
      correctAnswer: 'Chlorophyll'
    },
    {
      quizNum: 2,
      question: 'How does a Rose get the color red?',
      answers: [
        'Anthocyanins',
        'Hydrochloric Acid',
        'Hydrogen Oxide',
        'Sulfuric Acid'

      ],
      correctAnswer: 'Anthocyanins'
    },
    {
      quizNum: 3,
      question: 'What chemical breaks down food in the body?',
      answers: [
        'Hydrochloric Acid',
        'Dihydrogen Monoxide',
        'Cyanide',
        'Magnesium Oxide'
      ],
      correctAnswer: 'Hydrochloric Acid'
    },
    /* {
        question: 'text here',
        answers: [

        ],
        correctAnswer:
      },
      {
        question: 'text here',
        answers: [

        ],
        correctAnswer:
      },
      {
        question: 'text here',
        answers: [

        ],
        correctAnswer:
      }*/

  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

$('main').html('<button class="start">Start</button>')

//add a counter for each
function generateQuiz() {

  let num = store.questionNumber

  let template = `
  <div>
  ${store.questionNumber + 1}
  </div>
  <p>${store.questions[num].question}</p><form> <input type="radio" id="answers" name="answers" value="">
  <label for="answers">${store.questions[num].answers[0]}</label>
  <br>
  <input type="radio" id="answers" name="answers" value="">
  <label for="answers">${store.questions[num].answers[1]}</label>
  <br>
  <input type="radio" id="answers" name="answers" value="">
  <label for="answers">${store.questions[num].answers[2]}</label>
  <br>
  <input type="radio" id="answers" name="answers" value="">
  <label for="answers">${store.questions[num].answers[3]}</label>
  <br>
  <button class='previous'>Prev</button>
  <button class='next'>Next</button>
  </form>
`
  return template

}


function render() {
  //function
  /* When turned into a function do function (item){...} and
  change store.questions to item.questions*/
  $('.start').on('click', function (e) {
    e.preventDefault()
    // function
    $('main').html(generateQuiz(store))
    //end
    let start = store.questions.map((question) => {
      return generateQuiz(question)
    })

    return start
  })
  // End



}
//WHEN PRESSING START CHANGE PAGE TO QUESTIONS
render()
/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

  // These functions handle events (submit, click, etc)
