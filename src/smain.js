import Vue from 'vue'
import VueRouter from 'vue-router'
import UserHome  from './components/userHome.vue'
import list from './components/list.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.config.debug = true

const User = {
  template: 
    '<div class="user">'+
      '<h2>User {{ $route.params.id }}</h2>'+
      '<router-view></router-view>'+
    '</div>'
}


const UserProfile = { template: '<div>UserProfile</div>'}
const UserPosts = { template: '<div>UserPosts</div>'}

const router   =   new VueRouter({
  routes: [
    {
    	  path: '/user/:id',
    	  component: User,
      children: [
        { path: '', component: UserHome},
		{ path: 'profile', component: UserProfile },
		{ path: 'posts', component: UserPosts},
		{ path: 'list', component: list}
      ]
    }
  ]
})

new Vue({
  router,
  data:{
  	msg:'hello Vue'
  },
  beforeRouteEnter:function(){

  },
  beforeCreate:function(){
  	console.log("beforeCreate: " + this.msg);
  },
  created:function(){
  	console.log("created: " + this.msg);
  }
  
}).$mount('#app')
