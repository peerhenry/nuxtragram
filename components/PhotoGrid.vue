<template lang="pug">
.photo-grid
  Photo(v-for="post in posts" :key="post.id" :post="post")
</template>

<script>
import Photo from '@/components/Photo.vue'

export default {
  name: 'PhotoGrid',
  components: {
    Photo
  },
  created(){

  },
  computed: {
    posts(){
      return this.$store.state.posts
    }
  }
}
</script>

<style lang="stylus">
/*
.photo-grid
  display: grid
  grid-template-columns: 1fr 1fr 1fr
*/
</style>