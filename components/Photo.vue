<template lang="pug">
figure.grid-figure
  .grid-photo-wrap
    router-link(:to="'/photo/'+post.code")
      img( :src="post.display_src" :alt="post.caption" class="grid-photo")
  figcaption
    p {{post.caption}}
    .control-buttons
      button.likes(@click="increment") &hearts; {{ likes }}
      router-link(:to="'/photo/'+post.code" class="button")
        span.comment-count
          span.speech-bubble
          | {{ comments[post.code] ? comments[post.code].length : 0 }}
</template>

<script>
export default{
  name: 'Photo',
  props: {
    post: Object
  },
  computed: {
    likes(){
      return this.post.likes
    },
    comments(){
      return this.$store.state.comments
    }
  },
  methods: {
    increment(){
      this.$store.dispatch('incrementLikes', this.post.id)
    }
  }
}
</script>