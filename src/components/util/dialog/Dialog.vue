<template lang='pug'>
  v-dialog(v-model="showPopup" :max-width="maxWidth" :persistent="isPersistent")
    v-card
      v-card-title {{ title }}
      v-card-text
        slot(v-slot:content)
      v-row(justify='end' v-if="showActionButtons")
        v-col(cols='6')
          v-card-actions
            v-btn(color="error" text @click="closePopup('close')") {{ cancelText }}
            v-btn(color="success" text @click="closePopup('save')") {{ confirmText }}  
</template>

<script>
  export default {
    name: 'Dialog',
    props: {
      title: {
        type: String,
        required: true
      },
      cancelText: {
        type: String,
        required: false,
        default: 'Cancel'
      },
      confirmText: {
        type: String,
        required: false,
        default: 'Save'
      },
      showPopup: {
        type: Boolean,
        required: true
      },
      maxWidth: {
        type: String,
        required: false,
        default: '500px'
      },
      isPersistent: {
        type: Boolean,
        required: false,
        default: false
      },
      showActionButtons: {
        type: Boolean,
        required: false,
        default: true
      }
    },
    methods: {
      closePopup(instructions){
        this.$emit('dialogClose', instructions)
      }
    }
  }
</script>