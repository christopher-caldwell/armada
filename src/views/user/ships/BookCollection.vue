<template lang='pug'>
  v-container
    v-row(justify='center' align='baseline')
      v-col
        h3 Your Books
      v-col
        v-select(
          outlined
          label='List'
          :items="listTypes"
        )
    v-row(justify='center')
      v-col.dense-col(cols='11')
        v-expansion-panels
          v-expansion-panel
            v-expansion-panel-header Add Filters
            v-expansion-panel-content
              v-row
                v-col.dense-col Hello
    v-row(justify='center')
      v-col(cols='12')
        BookCard(v-for="(book, index) in usersBooks" :key="`user-book=${index}`" :book="book")
  
</template>

<script>
import { mapActions } from 'vuex'
import BookCard from '@/components/books/BookCard.vue'
import { listTypes } from '@/data/constants'

  export default {
    name: 'BookCollection',
    components: {
      BookCard
    },
    data(){
      return {
        listTypes,
        usersBooks: []
      }
    },
    async created(){
      this.usersBooks = await this.findBooksForUser()
    },
    methods: {
      ...mapActions('books', ['findBooksForUser'])
    }
  }
</script>