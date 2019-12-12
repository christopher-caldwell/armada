<template lang='pug'>
  v-container
    v-row(justify='center')
      v-col(align='center') 9
    v-row(justify='center')
      v-col(align='center') 9
    v-row(justify='center')
      v-col(align='center') 9
    v-row(justify='center')
      v-col(align='center')
        router-link(to='/game')
          v-btn Play Now
    
</template>

<script>
export default {
  name: 'Home',
}
</script>
