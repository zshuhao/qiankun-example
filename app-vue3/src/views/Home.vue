<template>
  <div class="home">
    home
    <div @click="test">按钮</div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

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
