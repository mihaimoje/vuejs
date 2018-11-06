import Vue from "vue";

/**
 * Requirements:
 *  - write a 'name' DATA property, set it to your name
 *  - write an 'uppercaseName' COMPUTED property
 *    - should return 'name' as an uppercase string
 *  - write a METHOD that uses 'uppercaseName' and returns its length
 *
 * Bonus:
 *  - write a METHOD that takes a 'city' argument and concatenates it
 *    with the 'uppercaseName'.
 *    - example: return something like "Radu - Timisoara"
 *
 *  Render the properties above in the DOM. Good luck!
 */

new Vue({
  el: "#app",
  data: {
    name: "Mihai"
  },
  computed: {
    uppercaseName() {
      return this.name.toUpperCase();
    }
  },
  methods: {
    len(n) {
      const l = n.length;
      return l;
    },
    display(city) {
      if (city) {
        return `${this.name} - ${city}`;
      } else {
        return "Wrong city";
      }
    }
  }
});
