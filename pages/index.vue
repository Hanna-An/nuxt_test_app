<template>
  <div class="container">
    <Header />
    <GoodsList :resources="products" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          text: "Правый ботинок",
          cost: 100,
          img: "/img/right_boots.jpg",
        },
        {
          id: 2,
          text: "Левый ботинок",
          cost: 200,
          img: "/img/left_boots.jpg",
        },
        {
          id: 3,
          text: "Белые тапочки",
          cost: 300,
          img: "/img/white_slippers.jpg",
        }
      ]
    };
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
