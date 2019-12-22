<template lang='pug'>
  v-snackbar(
    v-model="snackbar"
    :timeout="timeout"
    :top="position === 'top'"
    :bottom="position === 'bottom'"
    :right="position === 'right'"
    :left="position === 'left'"
    :color="color"
  )
</template>

<script>
  export default {
    name: 'SnackBar',
    props: {
      isShown: {
        type: Boolean,
        required: true
      },
      position: {
        type: String,
        required: false,
        default: 'top'
      },
      color: {
        type: String,
        required: false,
        defualt: 'success'
      },
      timeout: {
        type: Number,
        required: false,
        default: 1000
      }
    }
  }
</script>