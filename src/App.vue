<template>
  <div id="app">
    <Header /> 
    <TestPaket 
      :pakets="pakets"
      :selectedPaketIndex="selectedPaketIndex"
      @paketSelected="selectedPaketIndex = $event"
    />
    
    <Items
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
      pakets: [
        {
          id: 0, 
          imgUrl: "product1.png",
          paketItems:[
            {
              id: 0,
              name: "10 Lillydoo Windeln",
              imgUrl: "windel-gross.png",
              description: [
                "0 % Parfüme & Lotionen, 100 % LILLYDOO Schutz",
                "Extra weich und super bequem",
                "Mit unseren Turbo Tunneln für eine ideale Passform und schnelle Absorption"
              ]
            },
            {
              id: 1,
              name: "15 Feuchtücher mit 99 % Wasser",
              imgUrl: "feuchtücher_lightblue.png",
              description: [
                "0 % Parfüme & PEGs, 100 % biologisch abbaubar",
                "Extra weich und super bequem"
              ]
            }
          ]
        },
        {
          id: 1, 
          imgUrl: "product2.png",
          paketItems:[
            {
              id: 0,
              name: "10 Lillydoo Windeln",
              imgUrl: "windel-gross.png",
              description: [
                "0 % Parfüme & Lotionen, 100 % LILLYDOO Schutz",
                "Extra weich und super bequem",
                "Mit unseren Turbo Tunneln für eine ideale Passform und schnelle Absorption"
              ]
            },
            {
              id: 1,
              name: "15 Feuchtücher mit 99 % Wasser",
              imgUrl: "feuchtücher_lightblue.png",
              description: [
                "0 % Parfüme & PEGs, 100 % biologisch abbaubar",
                "Extra weich und super bequem"
              ]
            }
          ]
        },
        {
          id: 2, 
          imgUrl: "product3.png",
          paketItems:[
            {
              id: 0,
              name: "10 Lillydoo Windeln",
              imgUrl: "windel-gross.png",
              description: [
                "0 % Parfüme & Lotionen, 100 % LILLYDOO Schutz",
                "Extra weich und super bequem",
                "Mit unseren Turbo Tunneln für eine ideale Passform und schnelle Absorption"
              ]
            },
            {
              id: 1,
              name: "15 Feuchtücher mit 99 % Wasser",
              imgUrl: "feuchtücher_lightblue.png",
              description: [
                "0 % Parfüme & PEGs, 100 % biologisch abbaubar",
                "Extra weich und super bequem"
              ]
            }
          ]
        },
        {
          id: 3, 
          imgUrl: "product4.png",
          paketItems:[
            {
              id: 0,
              name: "10 Lillydoo Windeln",
              imgUrl: "windel-gross.png",
              description: [
                "0 % Parfüme & Lotionen, 100 % LILLYDOO Schutz",
                "Extra weich und super bequem",
                "Mit unseren Turbo Tunneln für eine ideale Passform und schnelle Absorption"
              ]
            },
            {
              id: 1,
              name: "15 Feuchtücher mit 99 % Wasser",
              imgUrl: "feuchtücher.png",
              description: [
                "0 % Parfüme & PEGs, 100 % biologisch abbaubar",
                "Extra weich und super bequem"
              ]
            }
          ]
        },
        {
          id: 4, 
          imgUrl: "product5.png",
          paketItems:[
            {
              id: 0,
              name: "10 Lillydoo Windeln",
              imgUrl: "windel-gross.png",
              description: [
                "0 % Parfüme & Lotionen, 100 % LILLYDOO Schutz",
                "Extra weich und super bequem",
                "Mit unseren Turbo Tunneln für eine ideale Passform und schnelle Absorption"
              ]
            },
            {
              id: 1,
              name: "15 Feuchtücher mit 99 % Wasser",
              imgUrl: "feuchtücher.png",
              description: [
                "0 % Parfüme & PEGs, 100 % biologisch abbaubar",
                "Extra weich und super bequem"
              ]
            }
          ]
        }
      ],
      selectedPaketIndex: 0
    }
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
