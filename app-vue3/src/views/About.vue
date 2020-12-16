<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    // HelloWorld
  },
  // methods: {
  //   test () {
  //     console.log(11)
  //   }
  // }
  setup () {
    const Directions = {
      Up: 1,
      Down: 2,
      Left: 3,
      Right: 4
    }
    const test = () => {
      console.log(1)
    }

    return {
      test,
      Directions
    }
  }
})

</script>
