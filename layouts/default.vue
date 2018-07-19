<template lang="pug">
div
  Title
  <nuxt/>
</template>

<script>
import Title from '@/components/Title'
require('@/styles/styles.styl')

export default {
  components: {
    Title
  }
}
</script>