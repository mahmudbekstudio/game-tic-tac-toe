<template>
  <div class="game-board">
    <div v-for="(row, index1) of matrix" :key="index1">
      <Button @btnClick="btnClick" v-for="(item, index2) of row" :icon="item" :key="index2" :index="[index1, index2]"></Button>
    </div>
  </div>
</template>
<script>
  import Button from './Button';

  export default {
    data () {
      return {
        emptyIndex: []
      }
    },
    props: {
      matrix: {
        type: Array
      }
    },
    components: {
      Button
    },
    methods: {
      btnClick (val) {
        this.$emit('changed', val);
      }
    }
  }
</script>
<style lang="scss">
  .game-board {}
</style>
