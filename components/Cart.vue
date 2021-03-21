<template>
  <div class="wrapper">
    <header>
     <nav><h2>Корзина</h2>
	  </nav>
    </header>
    <div class="body">
      <ul>
        <li class="product" v-for="item in cardList" v-bind:key="item.id">
          <div class="product-image">
            <img :src="item.img" :alt="item.text" class="ProductCard__img" />
          </div>
          <div class="product-details">
            <h3>
              <a href="#">{{ item.text }}</a>
            </h3>
            <span class="price">{{ item.cost }} ₽</span>
            <div class="actions">
              <a
                href="#"
                class="delete-item"
                @click.prevent="removeItem(item.id)"
                >Удалить</a
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
    <footer>
      <router-link to="/checkout" class="checkout btn">
        <em
          >Итого - <span>{{ total }} ₽</span></em
        >
      </router-link>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    removeItem(id) {
      this.$store.commit('remove', id)
    },
  },
  computed: mapGetters({
    cardList: 'get',
    total: 'total'
  })
};
</script>

<style>
</style>
