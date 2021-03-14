<template>
  <div>
    <Card :resources="resultQuery" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoryQuery: this.$route.query.category,
      allResources: [
        { title: "BMV", category: "car" },
        { title: "Opel", category: "car" },
        { title: "Toyota", category: "car" },
        { title: "banana", category: "fruts" },
        { title: "apple", category: "fruts" },
        { title: "orange", category: "fruts" },
        { title: "hazelnut", category: "nut" },
        { title: "almond", category: "nut" },
        { title: "seeds", category: "nut" },
      ],
    };
  },
  computed: {
    resultQuery() {
      if (this.categoryQuery) {
        return this.allResources.filter((item) => {
          return this.categoryQuery
            .toLowerCase()
            .split(" ")
            .every(
              (v) =>
                item.category.toLowerCase().includes(v)
            );
        });
      } else {
        return this.allResources;
      }
    },
  },
};
</script>