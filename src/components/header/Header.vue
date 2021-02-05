<template>
  <b-container>
    <!-- Content here -->
    <b-row>
      <b-col>
        <header>
          <b-nav>
            <b-nav-item disabled>
              <b>Quiz Fun App</b>
            </b-nav-item>
            <b-nav-item disabled
              >Score {{ totalCorrect }} / {{ totalQuestion }}</b-nav-item
            >
          </b-nav>
        </header>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// RECEVING THESE PROPS FROM PARENT COMPONENT
export default {
  props: {
    totalCorrect: Number,
    totalQuestion: Number,
  },
};
</script>