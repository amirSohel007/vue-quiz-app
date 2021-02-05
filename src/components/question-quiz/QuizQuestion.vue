<template>
  <b-container>
    <!-- Content here -->
    <b-row>
      <b-col>
        <b-jumbotron>
          <template slot="lead">
            {{ currentQuestion.question }}
          </template>
          <hr class="my-4" />
          <b-list-group>
            <b-list-group-item
              v-for="(answer, index) in answers"
              :key="index"
              @click="selectedAnswer(index)"
              :class="[
                !answered && selecteAns === index
                  ? 'selected'
                  : answered && correctIndex === index
                  ? 'correct'
                  : answered && selecteAns === index && correctIndex !== index
                  ? 'incorrect'
                  : '',
              ]"
            >
              {{ answer }}
            </b-list-group-item>
          </b-list-group>

          <b-button
            :disabled="selecteAns === null || answered"
            @click="submit"
            variant="primary"
            class="mr-4"
            >Submit</b-button
          >
          <b-button @click="changeQuestion" variant="success">Next</b-button>
        </b-jumbotron>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// IMPORT JS SCRIPT FILE HERE
import quizQuestionScript from "./QuizQuestion.js";
export default quizQuestionScript;
</script>

<style scoped>
/* IMPORT CSS FILE HERE */
@import './QuizQuestion.css';
</style>