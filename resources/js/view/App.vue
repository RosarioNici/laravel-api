<template>
    <div>
     <NavComponent :nav="nav"/>
     <router-view></router-view>
    </div>
  </template>

  <script>
  import NavComponent from '../components/NavComponent.vue'
  export default {
      name: 'App',
      data(){
          return {
              nav: [{
                      path: '/',
                      label: 'Home'
                  },{
                      path: '/posts',
                      label: 'Blog'
                  },{
                      path: '/about',
                      label: 'Chi Siamo'
                  },{
                      path: '/contacts',
                      label: 'Contatti'
                  }]
          }
      },
      components:{
          NavComponent
          }
      }
  </script>

  <style scoped lang="scss">

  </style>

