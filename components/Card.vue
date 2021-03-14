<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <strong>Поиск</strong>
    </div>
    <div class="row">
      <div class="search-wrapper panel-heading col-sm-12">
        <input
          class="form-control"
          type="text"
          v-model="searchQuery"
          placeholder="Search"
        />
      </div>
    </div>
    <div class="table-responsive">
      <table v-if="resources.length" class="table">
        <thead>
          <tr>
            <th>Данные о товаре</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in resultQuery">
            <td>
              <h3>{{ item.title }}</h3>
              <p>{{ item.category }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    resources: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      searchQuery: null,
    };
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.resources.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(
              (v) => item.title.toLowerCase().includes(v)
            );
        });
      } else {
        return this.resources;
      }
    },
  },
};
</script>