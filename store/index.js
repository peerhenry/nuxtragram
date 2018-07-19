import Vue from 'vue'
import Vuex from 'vuex'
import comments from '@/data/comments.js'
import shitposts from '@/data/posts.js'

function getRandomImage(){
  const items = [
    "https://i.pinimg.com/564x/85/c2/95/85c29595ff79dbbae6c5622acacc2f68.jpg",
    "https://i.pinimg.com/564x/63/be/53/63be535ee04a55ba0f1a8ea38ad13353.jpg",
    "https://i.pinimg.com/564x/87/6d/fe/876dfec8d00b835640867e38418c0480.jpg",
    "https://i.pinimg.com/564x/4e/fe/5a/4efe5a2ea33b136bc328599580fa1b90.jpg",
    "https://i.pinimg.com/564x/1e/f7/1b/1ef71b60e8eee1e1645852ed27396fbc.jpg"
  ]
  var item = items[Math.floor(Math.random()*items.length)]
  return item;
}

const posts = shitposts.map(p => {
  p.display_src = getRandomImage()
  return p
})

const state = {
  posts,
  comments
}

const actions = {
  incrementLikes({ commit }, payload){
    commit('incrementLikes', payload)
  },
  addComment({ commit }, payload){
    commit('addComment', payload)
  },
  removeComment({ commit }, payload){
    commit('removeComment', payload)
  }
}

const mutations = {
  incrementLikes(state, postId){
    let post = state.posts.find(p => p.id === postId)
    if(post) post.likes++
    else alert('Post not found!')
  },
  addComment(state, { code, author, comment }){
    const newThing = {
      text: comment,
      user: author
    }
    state.comments[code] ? state.comments[code].push(newThing) : Vue.set(state.comments, code, [newThing])
  },
  removeComment(state, { code, index }){
    state.comments[code].splice(index, 1)
  }
}

const createStore = () => {
  return new Vuex.Store({
    state,
    mutations,
    actions
  })
}

export default createStore