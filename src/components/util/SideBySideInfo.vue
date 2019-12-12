<template lang='pug'>
   v-row(:justify="rowJustification")
      v-col(:class="denseClass" :cols="titleCols" align='start') {{ title }}
      v-col(:class="denseClass" :cols="contentCols" align='start')
        div(v-if="!useSlot") {{ content }}
        slot(v-slot:content v-else)
</template>

<script>
  export default {
    name: 'SideBySideInfo',
    props: {
      isDense: {
        type: Boolean,
        required: false,
        default: false
      },
      rowJustification: {
        type: String,
        required: false,
        default: 'center'
      },
      useSlot: {
        type: Boolean,
        required: false,
        default: false
      },
      titleCols: {
        type: String,
        required: false,
        default: '4'
      },
      contentCols: {
        type: String,
        required: false,
        default: '6'
      },
      title: {
        type: String,
        required: true,
      },
      content: {
        type: [String, Number],
        required: false,
        default: ''
      }
    },
    computed: {
      denseClass(){
        return this.isDense
        ? 'dense-col'
        : null
      }
    }
  }
</script>