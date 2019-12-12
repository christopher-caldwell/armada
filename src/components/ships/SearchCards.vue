<template lang='pug'>
  v-text-field(
    outlined
    label='Search'
    clearable
    hide-details
    v-model="searchTerm"
    @change="updateSearchTerm"
  )
</template>

<script>
  export default {
    data(){
      return {
        searchTerm: ''
      }
    },
    methods: {
      updateSearchTerm(){
        this.$emit('updateSearchTerm', this.searchTerm)
      }
    }
  }
</script>