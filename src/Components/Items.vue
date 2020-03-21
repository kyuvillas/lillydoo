<template>
    <section class="items">
              <div class="section__header">
                <h2 class="section__header--title-white">Dein Testpaket enthält</h2>

            </div>
            
            <div class="row items__content">
               
                <div class="items__content--mainbox">
                    <div class="item-box">
                        <img src="img/windel-gross.png" class="item-box__icon">
                        <h3 class="heading-tertiary u-margin-bottom-small">10 LILLYDOO WINDELN</h3>
                        <div class="item-box__text">
                            <ul>
                                <li>    0 % Parfüme & Lotionen, 100 % LILLYDOO Schutz </li>
                                <li>    Extra weich und super bequem </li>
                                <li>    Mit unseren Turbo Tunneln für eine ideale Passform und schnelle Absorption</li>
                            </ul>
                        </div>
                    </div>
                </div>
                 
                <div class="items__content--mainbox">
                    <div class="item-box">
                        <img src="img/feuchtücher.png" class="item-box__icon">
                        <h3 class="heading-tertiary u-margin-bottom-small">
                            15 FEUCHTTÜCHER MIT 99 % WASSER
                        </h3>
                        <div class="item-box__text">                           
                            <ul>
                                <li>   0 % Parfüme & PEGs, 100 % biologisch abbaubar
                                </li>
                                <li>   Natürlich rein, extra mild, Alternative zu "Wasser & Watte" </li>
                            </ul>
                        </div>
                    </div>
                </div> 

            </div> 
            
        </section>
</template>

<script>

export default {
  name: 'Items',
  data: function () {
    return {
    }
  }
}
</script>
<style lang="scss">
@import "../sass/main";

</style>