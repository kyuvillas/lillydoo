<template>
  <div id="app">
    <Header /> 
    <ContentHeader />
    <TestPaket 
      :pakets="pakets"
      :selectedPaketIndex="selectedPaketIndex"
      @paketSelected="selectedPaketIndex = $event"
    />
    
    <Items v-if="pakets"
    :paketItems="pakets[selectedPaketIndex].paketItems" 
    />

    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import ContentHeader from './components/ContentHeader'
import TestPaket from './components/TestPaket'
import Items from './components/Items'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    ContentHeader,
    TestPaket,
    Items,
    Footer
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

</style>
