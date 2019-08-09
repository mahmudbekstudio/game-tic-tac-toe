<template>
  <div id="app">
    <Board :matrix="matrix"></Board>
  </div>
</template>

<script>
  import calculation from './calculation';
  import config from './config';
  import Board from './components/Board';

export default {
  data () {
    return {
      matrix: [
        [config.emptyCell, config.emptyCell, config.emptyCell],
        [config.emptyCell, config.emptyCell, config.emptyCell],
        [config.emptyCell, config.emptyCell, config.emptyCell]
      ],
      turnIsHuman: false,
      gameStarted: false,
      firstIsHuman: true,
    };
  },
  created () {
    console.log(calculation.getBestMove(config.xCell, [
      [config.xCell, config.oCell, config.xCell],
      [config.emptyCell, config.oCell, config.emptyCell],
      [config.emptyCell, config.emptyCell, config.xCell]
    ]));
  },
  components: {
    Board
  }
};
</script>

<style lang="scss">
#app {}
</style>
