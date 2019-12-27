<template lang='pug'>
  v-text-field(
    outlined
    label='Search'
    clearable
    hide-details
    v-model="searchTerm"
    @input="updateSearchTerm_1"
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
      updateSearchTerm_1(){
        this.$emit('updateSearchTerm', this.searchTerm)
      }
    }
  }
</script>