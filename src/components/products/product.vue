<template>
  <div class="product">
  	<div class="title_img"></div>
  	
  	<div class="block list">
  		<div class="list_c">
  			<div class="title">
  				产品与服务
  			</div>
  			<div class="info_list">
  				<ul>
  					<div v-for="(item, index) in list" v-on:click.stop.prevent="listClick(index)" >
  						<li>
		  					<p>{{item.name}}</p>
		  				</li>
					    <ul class="" v-show='item.show' >
	  						<li v-for='(o, index) in item.listDatas' v-on:click.stop.prevent="listItemClick(index,o)">{{o.name}}</li>
	  					</ul>
  					</div>
	  			</ul>
  			</div>
  		</div>
  		<div class="list_c">
  			<div class="title">
  				联系我们
  			</div>
  			<div class="kefu info_list">
  				<div class="kefu_img"></div>
  				<div>
  					<ul>
  						<li>客&ensp;服&ensp;电&ensp;话&ensp;:<span class="strong">400-188-8888</span></li>
  						<li>传&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;真:<span class="strong">0735-1888888</span></li>
  						<li>客户咨询邮箱:<span class="strong">customer@xinyitong.com</span></li>
  						<li>技术支持邮箱:<span class="strong">customer@xinyitong.com</span></li>
  						<li>人员招聘邮箱:<span class="strong">customer@xinyitong.com</span></li>
  					</ul>
  				</div>
  			</div>
  		</div>
  		
  	</div>
    <!--详情模块-->
  	<div class="block info">
  		<div class="info_c">
  			<div class="title">{{pathName}}</div>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '产品与服务',
      list:[{name:"商务智能解决方案",listDatas:[{name:"方案一"},{name:"方案二"},{name:"方案三"}],show:false},
      		{name:"信宜通学院",listDatas:[{name:"信宜通学院"},{name:"知识库"},{name:"学员风采"}],show:false},
      		{name:"农咨服务",listDatas:[{name:"农资一"},{name:"农资二"},{name:"农资三"}],show:false},
      		{name:"客户服务与支持",listDatas:[],show:false}],
      pathNames:['产品与服务']
     
    }
  },
  computed : {
	pathName:function(){
		var str = "";
		for (let i in this.pathNames) {
			str +=  this.pathNames[i];
			if(i < this.pathNames.length -1)str +=">"
		}
		return  str;
	}
  },
  methods:{
  	listClick:function(index){
  		this.pathNames.splice(1,this.pathNames.length);
  		this.pathNames.push(this.list[index].name);
  		return this.list[index].show = !this.list[index].show;
  	},
  	listItemClick:function(index,obj){
  		this.pathNames.splice(2,this.pathNames.length);
  		this.pathNames.push(obj.name);
  		return ;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product{
	width: 100%;min-height: 100px;height: auto;
}
.title_img{
	width: 100%;height: 250px;
	background-image: url(../../assets/u21_normal.png);
}
.block{
	display: inline-block;
	position: relative;
	height: auto;
	min-height: 39rem;
	float: left;
}
.list{
	width: 25%;min-height: 35rem;
}
.list_c{
	width: 90%;height: auto;min-height: 3rem;margin-left: 5%;margin-top: 2rem;box-sizing: border-box;
	border: 0px solid rgba(202,228,248,0.5);border-bottom: 0px solid transparent;
}
.title{
	width: 100%;height: 3rem;line-height: 3rem;background-color: rgba(202,228,248,1);color: #5E5E5E;padding-left: 1rem;box-sizing: border-box;
}
.info_list ul{width: 100%;height: auto;}
.info_list ul li{
	border-left: 1px solid rgba(202,228,248,0.5);border-right: 1px solid rgba(202,228,248,0.5);border-bottom: 1px solid rgba(202,228,248,0.5);height: 2.5rem;line-height: 2.5rem;font-size: 90%;box-sizing: border-box;padding-left: 1rem;
}
.info_list ul li:hover{background: rgba(202,228,248,0.2);}
.info_list ul ul{transition: all 1s;}
.info_list ul ul li{
	padding-left: 2rem;
}
.kefu{
	border: 1px solid rgba(202,228,248,0.5);min-height: 1px;height: auto;
}
.kefu_img{
	margin-top: 1rem;margin-bottom: 1rem;
	width: 100%;height: 150px;
	background-image: url(../../assets/kefu.png);
	background-position: center;
	background-size:90% ;
	background-repeat: no-repeat;
}
.kefu{margin-bottom: 3rem;}
.kefu ul,.kefu ul li{border: 0px;font-size: 90%;}
.kefu ul li{height: 1.5rem;line-height: 1.5rem;}
.kefu ul li:hover{background: transparent;}
.strong{color: rgba(70,114,234,1);font-weight:bold ;}


.info{
	width: 75%;
}
.info_c{
	width: 94%;margin-left: 3%;height: auto;min-height: 5rem;margin-top: 2rem;
}

</style>
