<template>
  <div id="app">
    <Header :totalCorrect="totalCorrect" :totalQuestion="totalQuestion" />
    <QuizQuestion
      v-if="this.questions.length"
      :currentQuestion="questions[index]"
      :changeQuestion="next"
      :increment="increment"
    />
  </div>
</template>

<script>
import Axios from "axios";
import Header from "./components/header/Header.vue";
import QuizQuestion from "./components/question-quiz/QuizQuestion.vue";
export default {
  name: "App",
  components: {
    Header,
    QuizQuestion,
  },
  props: {
    checkAnswer: Boolean,
  },
  data: function () {
    return {
      questions: [],
      index: 0,
      totalCorrect: 0,
      totalQuestion: 0,
    };
  },
  mounted: async function () {
    //START MUSIC
    this.playMusic();

    // Fetch Random quedtion from server
    let response = await Axios.get(
      "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy"
    );
    let jsonData = await response;
    this.questions = jsonData.data.results;
  },
  methods: {
    next() {
      this.index++;
    },

    increment(isCorrect) {
      if (isCorrect) {
        this.totalCorrect++;
      }
      this.totalQuestion++;
    },
    playMusic() {
      let audio = new Audio(
        "https://coderadio-relay-nyc.freecodecamp.org/radio/8010/radio.mp3"
      );
      audio.play();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
}
</style>
