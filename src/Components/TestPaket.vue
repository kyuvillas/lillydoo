<template>
    <section class="testpaket" id="testpaket">
           <div class="section__header">
                <h2 class="section__header--title">Entdecke unsere Hautfreundlichkeit</h2>                
                <h2 class="section__header--sub">Wähle deine Größe:</h2>

                <div>
                    <div class="testpaket__size">
                        <a href="#testpaket" @click="paketSelected(0)" class="testpaket__size--btn">
                            <span>1</span>
                            <span class="testpaket__size--sub">(2-5 KG)</span>
                        </a>                        
                    </div>
                    <div class="testpaket__size">
                        <a href="#testpaket" @click="paketSelected(1)" class="testpaket__size--btn">
                            <span>2</span>
                            <span class="testpaket__size--sub">(4-8 KG)</span>
                        </a>                        
                    </div>
                    <div class="testpaket__size">
                        <a href="#testpaket" @click="paketSelected(2)" class="testpaket__size--btn">
                            <span>3</span>
                            <span class="testpaket__size--sub">(6-10 KG)</span>
                        </a>                        
                    </div>
                    <div class="testpaket__size">
                        <a href="#testpaket" @click="paketSelected(3)" class="testpaket__size--btn">
                            <span>4</span>
                            <span class="testpaket__size--sub">(9-14 KG)</span>
                        </a>
                        
                    </div>
                    <div class="testpaket__size">
                        <a href="#testpaket" @click="paketSelected(4)" class="testpaket__size--btn">
                            <span>5</span>
                            <span class="testpaket__size--sub" >(11-16 KG)</span>
                        </a>
                        
                    </div>
                </div>
            
            </div>
            
            <div class="row testpaket__content">
                <div class="col-1-of-2 testpaket__content--left">
                        <!-- <img class="testpaket__content--img"  :src="require(leftImg)"  /> -->
                        <img class="testpaket__content--img" :src="require('../assets/img/'+leftImg)"  />
                        <!-- <img class="testpaket__content--img" src="~../img/product2.png"/> -->
                        <!-- <img :src="require('@/assets/logo.png')" -->
                </div>
                <div class="col-1-of-2 ">
                    
                    <h3>Teste jetzt unsere hautfreundlichen Windeln </h3>
                    
                    <div class="listitem">
                        <!-- <svg class="listitem--icon" src="icons/checkmark.svg"></svg> -->
                        <span class="listitem--text">- Erhalte unsere Feuchttücher mit 99 % Wasser.</span>
                    </div>
                    <div class="listitem">
                        <!-- <i class="fas fa-check listitem--icon"></i> -->
                        <span class="listitem--text">- Wir zahlen die Produkte, Du nur den Versand.</span>
                    </div>
                    <div class="listitem">
                        <!-- <i class="fas fa-check listitem--icon"></i> -->
                        <span class="listitem--text">-  Automatischer Übergang ins jederzeit kündbare Windel-Abo für 49,50 € pro Lieferung.</span>
                    </div>
                    <div class="listitem">
                        <!-- <i class="fas fa-check listitem--icon"></i> -->
                        <span class="listitem--text">- Preise inkl. MwSt., ggf. zzgl. Versandkosten</span>
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
          this.selectedPaketIndex = index;
          this.$emit('paketSelected',this.selectedPaketIndex)
        }
  }
}
</script>

<style lang="scss">
@import "../sass/main";

</style>