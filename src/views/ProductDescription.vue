<template>
  <div class="event-single">

    <section class="event-content">
      <div class="container">

        <div class="event-images columns is-multiline">
          <img class="column is-two-fifths" :src="product.image" :alt="product.name" />
          <div class="column">
            <p class="is-size-3 "> <strong>{{ product.shortDescription }}</strong> </p>
            <p style="font-size: 15px; color: darkgray; font-weight: 500;"> <span> Ratings: {{ product.avgRating }}/5
              </span>
              <span> & Seller Count: {{ product.sellerCount }} </span> </p>
            <p style="font-size: 1.5rem; color: #B12704; text-decoration:" v-if="product.discount == 0"> Price : <span>
                &#8377; </span> {{ product.price }} </p>
            <div v-else>
              <p style="font-size: 1.5rem; color: #B12704; text-decoration: line-through"> MRP : <span> &#8377; </span>
                {{ product.price }} </p>
              <p style="font-size: 1.5rem; color: #B12704;"> Offer Price : <span> &#8377; </span>
                {{ product.offerPrice }} </p>
            </div>
            <p style="font-size: .80rem; font-weight: bold; "> Inclusive of all taxes </p>
            <p style="font-size: 1rem;  font-weight: bold;" v-if="product.deliveryCharge == 0">
              FREE delivery on this product
            </p>
            <p v-else style="font-size: 1rem; font-weight: bold;">
              Delivery Charges: <span> &#8377; </span> {{ product.deliveryCharge }}
            </p>
          </div>
        </div>

        <hr>

        <div>
          <h2>PRODUCT DESCRIPTION</h2>
          <p style="font-family: Georgia, Times New Roman, Times, serif; color: #3f414d; font-size: 15px;">
            {{ product.description }}</p>
        </div>

        <hr>
        <div>
          <h2>PRODUCT REVIEWS</h2>
          <div class="overall-review">
            <p style="font-size: 15px; font-weight: 500; padding-top:13px;"> <span> {{ product.avgRating }}/5
                <strong>Overall Ratings</strong></span> </p>
          </div>
          <div v-for="review in product.reviews" :key="review.id" class="column is-half">
            <p style="font-family: Source Sans Pro,sans-serif; font-size: 15px; font-weight: bold;">" {{review.subject}}
              "</p>
            <p>{{review.body}}</p>
            <hr>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import EventService from '@/services/EventService.js'
const client = EventService.getApiClient();
export default {
  name: 'ProductDescription',
  data () { return{
    product: null
  }
  },
  created() {
    const ID = Number(this.$route.params.id);
    // let event = this.products.find(product => product.id === ID);
    // this.product = event;
    client.get('/product-service/product_util/'+ ID).then(response =>{
      this.product = response.data;
    }).catch();
  }
}
</script>

<style lang="scss" scoped>
  .overall-review {
  width: 190px;
  height: 50px;
  box-shadow: 3px 2px 5px 1px #969696;
  margin: 10px;
  text-align: center;
  }
  hr{
       box-shadow: 3px 2px 5px 0px #969696;
  }
  h2{
      font-family: Georgia, Times New Roman, Times, serif;
      color: #3f414d;
      font-size: 20px;
      margin-top: 32px;
      margin-bottom: 20px;
      font-weight: 400;
  }
</style>