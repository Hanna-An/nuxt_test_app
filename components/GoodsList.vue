<template>
  <div>
    <vue-up></vue-up>
    <div class="enscart_myimage_wrapper">
        <nuxt-link to="/checkout" class="wripper"><img src="https://i.ibb.co/ZfJ03Ns/shop1.png" class="logo">({{cardCount}})</nuxt-link>
    </div>
    	  <p class="nav__name_market">Магазин "Ритуальные услуги"</p>
    <ul class="ProductSet">
      <li v-for="item in resources" v-bind:key="item.id" class="ProductCard">
        <div class="ProductCard__img-wrapper">
          <img
            :src="item.img"
            :alt="item.text"
            class="ProductCard__img"
          />
        </div>
        <div class="ProductCard__details">
          <div class="ProductCard__details__header">
            <div class="ProductCard__titles">
              <h4 class="ProductCard__title">{{ item.text }}</h4>
              <h5 class="ProductCard__price">{{ item.cost }} ₽</h5>
            </div>
            <button @click="addToItems(item)" class="IconBtn">Купить
            </button>
          </div>
          <p class="ProductCard__description">
            {{ item.text }} - 100% кожа молодого дермантина</br>
            Артопедическая стелька</br>
            Спешите! Количество товара ограничено!!!
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ["resources"],
  methods: {
    addToItems(item) {
      this.$store.commit('add', item)
      this.$popup({
        message: "Добавлено",
        color: "red",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        delay: 1,
        fontSize: 60,
      });
    },
  },
  computed: mapGetters({
    cardList: 'get',
    cardCount: 'count'
  })
};
</script>
<style scoped>
.IconBtn {
  background: greenyellow;
  width: 150px;
  margin: auto;
  padding: 10px;
  color: black;
  border: 2px solid green;
  border-radius: 10px;
  text-align: center;
  vertical-align: middle;
}
header {
  width: 100%;
  background-color: grey;
  font-size: 50px;
  color: black;
  text-align: center;
  margin: 20px;
}
.ProductCard__img {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 15px;
  width: 50%;
}
li {
  list-style-type: none;
}
.wripper {
    color: red;
}
.nav__name_market {
  color: brown;
  font-size: 50px;
}
.enscart_myimage_wrapper {
  float: right;
  background: #ffffff;
  border-radius: 30px;
  width: 60px;
  height: 60px;
  cursor: pointer;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.4);
}
.logo {
  width: 80%;
  padding: 18px 20px 0 0;
  margin: -5px;
}
</style>
