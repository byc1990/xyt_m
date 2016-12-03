<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="touch" @mousedown="touchstart($event)" >touch</div>
  </div>
</template>

<script>


export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dataUrl:'https://mapnew.midea.com/mas-api/restful/msmart/appliance/register/total/num'
    }
  },
  methods:{
  	touchstart:function(e){
  		console.log(e)
  	},
  	getData:function(){
  		this.$http.get(this.dataUrl).then(
	  			    (response) => {
						console.log(response.body);
					},
	  				(response) => {
						console.log(response.body);
					}
  				).catch(
  					function(response){
  					}
  				)
  	}
  },
  created:function(){
  	this.getData();
  },
  beforeRouteEnter:function(to, from, next){
	next();
  },
  beforeRouteLeave:function(to, from, next){
	next()
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
}

a {
  color: #42b983;
}
.touch{
	width: 200px;height: 2rem;background: aliceblue;line-height: 2rem;text-align: center;
}
</style>
