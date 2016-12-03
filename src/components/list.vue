<template>
 
	  <div class="hello">
	  	<h1>{{msg}}</h1>
	    <ul>
	    	 <transition-group name="slide-fade" tag='li'>
		    	<li v-for="item in items" v-bind:key="item"><span id="">{{item}}</span></li>  	
		  </transition-group>
	    </ul>
	    <button @click='addNo()'>add no</button>
	  </div>
 
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'list vue',
      items:[1,2,3,4,5,6,7,8,9,12,32,12,323,12,43,542,231232,2]
    }
  },
  methods:{
  	addNo:function(){
  		let r = Math.random() * 1000;
  		return this.items.push(r);
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  background: seashell;
}

a {
  color: #42b983;
}



.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}
</style>
