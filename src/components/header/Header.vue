<template lang='pug'>
  div
    v-navigation-drawer(v-model="drawer" app clipped)
      v-list.listing-listy.list(dense)
        v-subheader Home
        v-divider
        NavMenuItem(v-for="(route, index) in routes" :key="index" :route="route")
      div.find-me
        v-switch(
          v-model="isDarkMode"
          @change="saveDarkModeSetting"
          label='Dark Mode'
          color='red'
          hide-details
        )
    v-app-bar(app clipped-left)
      v-app-bar-nav-icon( @click.stop="drawer = !drawer")
      v-toolbar-title.full-width
        v-row(justify='space-between')
          v-col All About Sven
          v-col.flex-end(cols='2')
</template>

<script>
import NavMenuItem from '@/components/header/NavMenuItem.vue'
import { routes } from '@/router/routes'

export default {
  components: {
    NavMenuItem
  },
  data() {
    return {
      routes,
      drawer: null,
      isDarkMode: false
    }
  },
  methods: {
    saveDarkModeSetting() {
      window.localStorage.setItem( 'darkMode', JSON.stringify({ darkMode: !this.darkMode }))
      this.$vuetify.theme.dark = this.isDarkMode
    }
  },
  mounted() {
    try {
      const isDarkMode = JSON.parse(window.localStorage.getItem('darkMode')).darkMode
      this.isDarkMode = isDarkMode
      this.$vuetify.theme.dark = isDarkMode
    } catch (error) {
      // it's fine, theres no previous dark mode setting
    }
  }
}
</script>

<style lang='sass'>
.find-me
  height: 40px
  width: 130px
  position: absolute
  bottom: 20%
  right: 2%
</style>
