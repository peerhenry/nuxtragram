<template lang="pug">
.single-photo
  Photo(:post="post")
  Comments(:code="code")
</template>

<script>
import Photo from '@/components/Photo.vue'
import Comments from '@/components/Comments.vue'

export default {
  name: 'Single',
  components: {
    Photo,
    Comments
  },
  computed: {
    code(){
      return this.$route.params.code
    },
    post(){
      return this.$store.state.posts.find(p => p.code === this.code)
    }
  }
}
</script>
