<template lang="pug">
.comments
  .comment(v-for="(comment, index) in comments" :key="index")
    p
      strong {{comment.user}}
      | {{comment.text}}
      button.remove-comment( @click="() => removeComment(index)" ) &times;
  form.comment-form(ref="commentForm")
    input(type="text" ref="author" placeholder="author")
    input(type="text" ref="comment" placeholder="comment")
    input(type="submit" @click="handleSubmit")
</template>

<script>
export default {
  name: 'Comments',
  props: {
    code: String
  },
  computed: {
    comments(){
      return this.$store.state.comments[ this.code ] || []
    }
  },
  methods: {
    handleSubmit(e){
      e.preventDefault()
      const comment = {
        code: this.code,
        author: this.$refs['author'].value,
        comment: this.$refs['comment'].value
      }
      this.$store.dispatch('addComment', comment)
      this.$refs['commentForm'].reset()
    },
    removeComment(index){
      this.$store.dispatch('removeComment', {
        code: this.code,
        index
      });
    }
  }
}
</script>