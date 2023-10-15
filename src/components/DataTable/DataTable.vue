<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <th v-for="column in columns" :key="column.key">{{ column.label }}</th>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <!-- Render table rows based on the items prop -->
          <td v-for="column in columns" :key="column.key">{{ item[column.key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    columns: Array, // Define columns as an array prop
    items: Array // Define items as an array prop
  }
}
</script>
