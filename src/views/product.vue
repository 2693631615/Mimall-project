<template>
  <div class="product">
    <product-param></product-param>
    <product-shot></product-shot>
  </div>
</template>

<script>
import productParam from './product-param'
import productShot from './product-shot'
export default {
  name: 'Product',
  data () {
    return {
    }
  },
  components: {
    productParam,
    productShot
  }

}
</script>

<style>

</style>
