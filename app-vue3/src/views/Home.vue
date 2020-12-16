<template>
  <div class="home">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/subapp/vue2">subapp-vue2</router-link>
    <div id="vue-2">
      another
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {
    // HelloWorld
  },
  // methods: {
  //   test () {
  //     console.log(11)
  //   }
  // }
  setup () {
    const test = () => {
      enum Days {Sun = 7, Mon = 1.5, Tue, Wed, Thu, Fri, Sat};
      enum Directions {
        Up,
        Down,
        Left,
        Right
      }
      // const directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
      console.log(Days)
      console.log(Directions.Up)
    }

    return {
      test
    }
  }
})

</script>
