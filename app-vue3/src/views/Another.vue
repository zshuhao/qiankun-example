<template>
  <div id="vue-2">another</div>
</template>

<script lang="ts">
export default {

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
}
</script>
