<template lang='pug'>
  v-container
    v-row(justify='center')
      v-col(cols='12' align='center')
        h3.star-wars-font.sw-header {{ chosenBook.title.toLowerCase() }}
    v-row(justify='center')
      v-col(cols='6' align='center')
        v-img.cover-image(
          :src="imageSrc"
          size='sm'
        )
        div.tiny-prompt Tap to see full screen image
    SideBySideInfo( title='Author' useSlot)
      template(name='content')
        a(:href="chosenBook.authorLink" target='_blank' rel='noopener') {{ chosenBook.author }}
    SideBySideInfo( title='Era' :content="chosenBook.era")
    SideBySideInfo( title='Pages' :content="chosenBook.pages")
    v-row.action-row(justify='center')
      v-col(cols='6')
        OutlinedActionButton(ctaText='add to list' @buttonClick="openListDialog('list')")
      v-col(cols='6')
        OutlinedActionButton(ctaText='track progress' @buttonClick="openListDialog('done')")
    Dialog( :title="dialogHeader" :showPopup="isDialogOpen" :showActionButtons="false")
      template(name='content')
        ListDialogContent(@saveComplete="routeToSavedBooks")

</template>

<script>
  import { bookMap } from '@/data/books'
  import ListDialogContent from '@/components/books/save/ListDialogContent.vue'
  import SideBySideInfo from '@/components/util/SideBySideInfo.vue'
  import OutlinedActionButton from '@/components/util/OutlinedActionButton.vue'
  import Dialog from '@/components/util/dialog/Dialog.vue'

  export default {
    name: 'DetailedBook',
    components: {
      SideBySideInfo,
      OutlinedActionButton,
      Dialog,
      ListDialogContent
    },
    data(){
      return {
        chosenBook: null,
        isDialogOpen: false,
        dialogType: '',
        rating: '',
        methodOfReading: '',
        platformBookWasRead: '',
        typeOfWishlist: '',
        pagesRead: 0
      }
    },
    computed: {
      imageSrc(){
        return require(`@/assets/book-covers/${this.chosenBook.image}`)
      },
      dialogHeader(){
        return this.dialogType === 'list'
        ? 'Add to a list'
        : 'How did you like it?'
      },
    },
    created(){
      const bookId = this.$route.params.bookId
      this.chosenBook = bookMap[bookId]
    },
    methods: {
      openListDialog(instructions){
        instructions === 'list'
        ? this.dialogType = 'list'
        : this.dialogType = 'done'
        this.isDialogOpen = true
      },
      updateDialogInput({ name, value }){
        this[name] = value
      },
      routeToSavedBooks(){
        const emailAddress = this.$store.state.user.emailAddress
        this.$router.push(`/${emailAddress}/books`)
      }
    }
  }
</script>

<style lang='sass' scoped>
.action-row
  margin-top: 5%
.tiny-prompt
  margin-top: 3%
  font-size: 0.7em
</style>