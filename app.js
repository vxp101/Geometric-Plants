/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [

    {
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
