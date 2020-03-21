<template>
  <div id="app">
    <Header /> 
    <TestPaket 
      :pakets="pakets"
      :selectedPaketIndex="selectedPaketIndex"
      @paketSelected="selectedPaketIndex = $event"
    />
    
    <Items v-if="pakets"
    :paketItems="pakets[selectedPaketIndex].paketItems" 
    />
  </div>
</template>

<script>
import Header from './components/Header'
import TestPaket from './components/TestPaket'
import Items from './components/Items'

export default {
  name: 'App',
  components: {
    Header,
    TestPaket,
    Items
  },
  data () {
    return {
      pakets: [],
      selectedPaketIndex: 0
    }
  },
  mounted: function() {
    fetch('/data.json',{
      method: 'get'
    })
    .then((response) => {
     return (response.json());
      
    })
    .then((jsonData) => {
      console.log(jsonData);
      this.pakets = jsonData;
    })
  }
}
</script>

<style lang="scss"  >
  
  @import "./sass/main.scss";

</style>
