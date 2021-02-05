// IMPORT A HELPER FUNCTION TO SUFFLE ARRAY VALUE
import { getShuffledArr } from '../../utils/utils.js';

/* 
* props : Receiving props from parent component
* data : all the variable defined under data or you can assume it as local state data variable
* methods: all functions comes under methods Object
* mount : It's a VUE life cycle hook which call every time when component load
* watch: watch is another VUE method it continously watch your component changes or watch props, every time when
        anything got change it will call

* computed : A computed property is used to declaratively describe a value that depends on other values.
 */

export default {
	props: {
		currentQuestion: Object,
		changeQuestion: Function,
		increment: Function,
	},
	data() {
		return {
			selecteAns: null,
			shuffledAnswers: [],
			correctIndex: null,
			answered: false,
		};
	},
	methods: {
		selectedAnswer(index) {
			this.selecteAns = index;
		},
		submit() {
			let isCorrect = false;
			if (this.selecteAns === this.correctIndex) {
				isCorrect = true;
			}
      this.answered = true;
      
      // PASSED THIS INCREMENT TO PARENT COMPONENT AS PROPS
			this.increment(isCorrect);
		},
		suffleAnswer() {
			let answer = [
				...this.currentQuestion.incorrect_answers,
				this.currentQuestion.correct_answer,
			];
			this.shuffledAnswers = getShuffledArr(answer);
			this.correctIndex = this.shuffledAnswers.indexOf(
				this.currentQuestion?.correct_answer
			);
		
		},
	},
	computed: {
		answers() {
			let answer = [
				...this.currentQuestion.incorrect_answers,
				this.currentQuestion.correct_answer,
			];
			return answer;
		},
	},
	mounted() {
		this.suffleAnswer();
	},
	watch: {
		currentQuestion() {
      this.selecteAns = null;
      this.answered = false;
			this.suffleAnswer();
		},
	},
};
