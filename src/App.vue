<template>
  <div id="app">
    <!-- Exercise 1) -->
    <!-- Build a local Filter which reverses the Text it is applied on -->
    <h1>Exercise 1</h1>
    <h3>{{ exerciseOneText | reverseText }}</h3>

    <!-- Exercise 2 -->
    <!-- Build a global Filter which counts the length of a word and it appends it -->
    <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
    <h1>Exercise 2</h1>
    <h3>{{ exerciseTwoText | appendLength }}</h3>

    <!-- Exercise 3 -->
    <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->

    <!-- Exercise 4 -->
    <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      exerciseOneText: "a b c d e f g h i j k l m n o p q r s t u v w x y z",
      exerciseTwoText: "Example"
    };
  },
  filters: {
    reverseText(value) {
      return value
        .split("")
        .reverse()
        .join("");
    }
  },
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
