import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import aboutUs  from  './components/about/about.vue'
import index  from  './components/index/index.vue'
import news  from  './components/news/news.vue'
import partners  from  './components/partner/partners.vue'
import productAndSer  from  './components/products/product.vue'
import successCase  from  './components/successCase/case.vue'

import './css/base.css'
import './css/page.css'

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.config.debug = true

const router   =   new VueRouter({
  routes: [
    {
    	  path: '/',
    	  component: index
    },
    {
    	  path: '/about',
    	  component: aboutUs
    },
    {
    	  path: '/news',
    	  component: news
    },
    {
    	  path: '/partner',
    	  component: partners
    },
    {
    	  path: '/products',
    	  component: productAndSer
    },
    {
    	  path: '/successCase',
    	  component: successCase
    }
    
  ]
})

new Vue({
  router,
  data:{
  	tools:[{name:'首页',link:'/',isCur:true},
  		   {name:'产品与服务',link:'/products',isCur:false},
  		   {name:'成功案例',link:"/successCase",isCur:false},
  		   {name:'新闻咨询',link:'/news',isCur:false},
  		   {name:'合作伙伴',link:'/partner',isCur:false},
  		   {name:'关于我们',link:'/about',isCur:false}],
  	msg:'hello Vue'
  },
  methods:{
  	toolClick:function(index){
  		for(let i in this.tools){this.tools[i].isCur = false}
  		this.tools[index].isCur = true;
  		return router.push(this.tools[index].link); 
  	}
  	
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
