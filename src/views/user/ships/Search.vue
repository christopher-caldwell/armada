<template lang='pug'>
  v-container
    v-row(justify='center')
      v-col(cols='12' align='center')
        h2 Find a Book
    v-row(justify='center')
      v-col(cols='12' align='center')
        SearchableTable(
          :tableHeaders="headers"
          :tableItems="books"
          @itemClick="showDetailedViewOfBook"
        )
</template>

<script>
import SearchableTable from '@/components/table/SearchableTable.vue'
import books from '@/data/books'
import { mobileHeaders, desktopHeaders } from '@/data/bookStructureDefinition'
import { mobileBreakpointPixels } from '@/data/constants'
  export default {
    name: 'SearchBooks',
    components: {
      SearchableTable
    },
    data(){
      return {
        books
      }
    },
    computed: {
      headers(){
        return window.innerWidth <= mobileBreakpointPixels
        ? mobileHeaders
        : desktopHeaders
      }
    },
    methods: {
      showDetailedViewOfBook({ id }){
        this.$router.push(`/books/${id}`)
      }
    }
  }
</script>