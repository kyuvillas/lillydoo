<template>
    <section class="items">
              <div class="section__header">
                <h1 class="section__header--title-white">Dein Testpaket enthält</h1>

            </div>
            
            <div class="row items__content">
               
                <div class="items__content--mainbox"  v-for="item in paketItems" :key="item.id">
                    <div class="item-box">
                        <img  :src="require('../assets/img/'+item.imgUrl)" class="item-box__icon">
                        <h3 class="heading-tertiary u-margin-bottom-small">10 LILLYDOO WINDELN</h3>
                        <div class="item-box__text">
                            <ul>
                                <li  v-for="(d, index) in item.description" :key="index"> {{ d }} </li>
                            </ul>
                        </div>
                    </div>
                </div>
                 
                <!-- <div class="items__content--mainbox">
                    <div class="item-box">
                        <img :src="require('../assets/img/'+paketItems[1].imgUrl)"  class="item-box__icon">
                        <h3 class="heading-tertiary u-margin-bottom-small">
                            15 FEUCHTTÜCHER MIT 99 % WASSER
                        </h3>
                        <div class="item-box__text">                           
                            <ul>
                                <li>   0 % Parfüme & PEGs, 100 % biologisch abbaubar</li>
                                <li>   Natürlich rein, extra mild, Alternative zu "Wasser & Watte" </li>
                            </ul>
                        </div>
                    </div>
                </div>  -->

            </div> 
            
        </section>
</template>

<script>

export default {
  name: 'Items',
  props: {
      paketItems: Array
  }
}
</script>