<template>
  <div class="game-button" @click="buttonClick" v-bind:style="buttonStyle" v-html="icon"></div>
</template>
<script>
import config from '../config';

export default {
  data() {
    return {
      config,
    };
  },
  props: {
    icon: {
      default: config.iconEmpty,
    },
    index: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    buttonStyle() {
      return {
        width: config.buttonSize,
        height: config.buttonSize,
        lineHeight: config.buttonSize,
        fontSize: config.buttonFontSize,
        visibility: this.icon === config.iconEmpty ? 'hidden' : 'visible',
      };
    },
  },
  methods: {
    buttonClick() {
      this.$emit('btnClick', this.index);
    },
  },
};
</script>
<style lang="scss">
  .game-button {
    border: 1px solid silver;
    border-radius: 5px;
    display: inline-block;
    text-align: center;
    box-shadow: 2px 2px 4px silver;
    font-family: Verdana, Arial, SansSerif;
    cursor: pointer;
    margin: 3px;
    user-select: none;
  }
</style>
