<template>
    <section class="testpaket" id="testpaket">
           <div class="section__header">
                <h2 class="section__header--title">Entdecke unsere Hautfreundlichkeit</h2>                
                <h2 class="heading-simple section__header--sub ">Wähle deine Größe:</h2>

                <div>
                    <div class="testpaket__size">
                        <a href="#testpaket" @click="paketSelected(0)" :class="[selected === 0 ? 'testpaket__size--btn--active':'testpaket__size--btn']" >
                            <h3>1</h3>
                            <span class="testpaket__size--sub">(2-5 KG)</span>
                        </a>                        
                    </div>
                    <div class="testpaket__size">
                        <a href="#testpaket" @click="paketSelected(1)" :class="[selected === 1 ? 'testpaket__size--btn--active':'testpaket__size--btn']" >
                            <h3>2</h3>
                            <span class="testpaket__size--sub">(4-8 KG)</span>
                        </a>                        
                    </div>
                    <div class="testpaket__size">
                        <a href="#testpaket" @click="paketSelected(2)" :class="[selected === 2 ? 'testpaket__size--btn--active':'testpaket__size--btn']" >
                            <h3>3</h3>
                            <span class="testpaket__size--sub">(6-10 KG)</span>
                        </a>                        
                    </div>
                    <div class="testpaket__size">
                        <a href="#testpaket" @click="paketSelected(3)" :class="[selected === 3 ? 'testpaket__size--btn--active':'testpaket__size--btn']" >
                            <h3>4</h3>
                            <span class="testpaket__size--sub">(9-14 KG)</span>
                        </a>
                        
                    </div>
                    <div class="testpaket__size">
                        <a href="#testpaket"  @click="paketSelected(4)" :class="[selected === 4 ? 'testpaket__size--btn--active':'testpaket__size--btn']" >
                            <h3>5</h3>
                            <span class="testpaket__size--sub">(11-16 KG)</span>
                        </a>
                        
                    </div>
                </div>
            
            </div>
            
            <div class="row testpaket__content">
                <div class="col-1-of-2 testpaket__content--left"> 
                        <img class="testpaket__content--oeko-logo" :src="require('../assets/img/oekotex_green_de.svg')"  />   
                        <img class="testpaket__content--img" :src="require('../assets/img/'+leftImg)"  />
                </div>
                <div class="col-1-of-2 ">
                    
                    <div class="heading-simple">
                        <p>Teste jetzt unsere hautfreundlichen Windeln </p>
                        <transition name="fade">
                            <p v-if="selectedPaketIndex < 3" >und erhalte unsere Feuchttücher mit 99 % Wasser</p>
                        </transition>

                        <transition name="fade">
                        <p v-if="selectedPaketIndex >= 3" >und erhalte die Sensitiven Feuchttücher </p>
                        </transition>
                    </div>
                    
                    <div class="listitem">
                        <i class="listitem--icon"></i>
                        <span class="listitem--text">Erhalte unsere Feuchttücher mit 99 % Wasser.</span>
                    </div>
                    <div class="listitem">
                        <i class="listitem--icon"></i>
                        <span class="listitem--text">Wir zahlen die Produkte, Du nur den Versand.</span>
                    </div>
                    <div class="listitem">
                        <i class="listitem--icon"></i>
                        <span class="listitem--text">Automatischer Übergang ins jederzeit kündbare Windel-Abo für 49,50 € pro Lieferung.</span>
                    </div>
                    <div class="listitem">
                        <i class="listitem--icon"></i>
                        <span class="listitem--text">Preise inkl. MwSt., ggf. zzgl. Versandkosten</span>
                    </div>
                    
                    <div class="listitem">
                        <div class="listitem--btn">
                            <a href="#" class="btn btn--primary btn--animated">in den Warenkorb legen</a>

                        </div>
                    </div>
                </div>
            </div> 
            
        </section>
</template>

<script>

export default {
  name: 'TestPaket',
  data(){
      return {  
        selected:-1
      }
  },
  props: {
        pakets: Array,
        selectedPaketIndex: Number
      },
  computed: {
      leftImg: function() {
            return  this.pakets[this.selectedPaketIndex].imgUrl
      }
  },
  methods: {
        paketSelected:function (index) { 
            this.selected = index;
          this.$emit('paketSelected',index)
        }
  }
}
</script>

<style lang="scss"  >
  .fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-active /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>