<template>
  <div id="app">
    <Header />
    <TestPaket />
    <Items />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import TestPaket from './components/TestPaket.vue'
import Items from './components/Items.vue'

export default {
  name: 'App',
  components: {
    Header,
    TestPaket,
    Items
  }
}
</script>

<style lang="scss"  >
@import "./sass/main.scss";


/* UNIVERSAL RESETS */
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;     
}

html{
    font-size: 62.5%;     /*16/10= 62.5% */   

    @include respond(tab-land) { // width < 1200?
        font-size: 56.25%; //1 rem = 9px, 9/16 = 50%
    }

    @include respond(tab-port) { // width < 900?
        font-size: 50%; //1 rem = 8px, 8/16 = 50%
    }
    
    @include respond(big-desktop) {
        font-size: 75%; //1rem = 12, 12/16
    }
}
body {
    box-sizing: border-box; 
}
</style>
