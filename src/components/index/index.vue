<template>
  <div class="hello">
   	<div class="swiper-container">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide"><a href="#"><img src="../../assets/timg.jpeg"/></a></div>
	        <div class="swiper-slide"><a href="#"><img src="../../assets/timg1.jpeg"/></a></div>
	        <div class="swiper-slide"><a href="#"><img src="../../assets/timg2.jpeg"/></a></div>
	        <div class="swiper-slide"><a href="#"><img src="../../assets/timg3.jpeg"/></a></div>
	    </div>
	    <!-- 如果需要导航按钮 -->
	    <div class="swiper-button-prev"></div>
	    <div class="swiper-button-next"></div>
	</div>
  	<div class="title_msg msg_1">{{titles[0].name}}</div>
  	<div class="content">
  		<div class="service">
  			<div class="info info_left">
  				<img src="../../assets/other.jpg"/>
  			</div>
  			<div class="info info_right">
  				<h1>商务智能解决方案</h1>
  				<p>提供专业的商务解决方案。</p>
  			</div>
  		</div>
  		<div class="service">
  			<div class="info info_left">
  				<img src="../../assets/vis.jpg"/>
  			</div>
  			<div class="info info_right">
  				<h1>信宜通学院</h1>
  				<p>公司提供商务智能bi技术相关培训服务，培训对象包括技术开发人员，最终使用用户，以及在校学生，讲师均为业内资深专业人士.</p>
  			</div>
  		</div>
  		<div class="service">
  			<div class="info info_left">
  				<img src="../../assets/web.jpg"/>
  			</div>
  			<div class="info info_right">
  				<h1>农资服务</h1>
  				<p>内容完善中。。。。敬请期待</p>
  			</div>
  		</div>
  		<div class="service">
  			<div class="info info_left">
  				<img src="../../assets/network.jpg"/>
  			</div>
  			<div class="info info_right">
  				<h1>信宜通客户服务与技术支持</h1>
  				<p>
  					内容完善中。。。。敬请期待
  				</p>
  			</div>
  		</div>
  		
  	</div>
  	<div class="title_msg msg_2">{{titles[1].name}}</div>
  	<div class="content"></div>
  	<div class="title_msg msg_3">{{titles[2].name}}</div>
  	<div class="content"></div>
  	<div class="title_msg msg_4">{{titles[3].name}}</div>
  	<div class="content"></div>
  	<div class="title_msg msg_5">{{titles[4].name}}</div>
  	<div class="content"></div>
  </div>
</template>

<script>
import swiper from "../../lib/swiper/swiper.js"
import "../../lib/swiper/swiper.css"
export default {
  name: 'hello',
  data () {
    return {
      titles:[{name:'我们的服务'},
      		  {name:'成功案例'},
      		  {name:'新闻咨询'},
      		  {name:'合作伙伴'},
      		  {name:'关于我们'},]
    }
  },
  created:function(){
  },
  mounted:function(){
  	new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	    loop: true,
	    autoplay:3500,
	    // 如果需要前进后退按钮
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	  })    
  }
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-container {
    width: 100%;
    text-align: center;
    height: 400px;
}  
.swiper-container .swiper-slide img{
	width: 100%;height: auto;
}

.title_msg{
	position: relative;width: 90%;margin-left: 5%;height: 2rem;
	line-height: 2rem;
    padding-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
}
.msg_1{border-left: 5px solid rgb(82,135,215);}
.msg_2{border-left: 5px solid rgb(193,80,70);}
.msg_3{border-left: 5px solid rgb(133,197,247);}
.msg_4{border-left: 5px solid rgb(98,57,220);}
.msg_5{border-left: 5px solid rgb(210,0,95);}

.content{
	position: relative;width: 90%;margin-left: 5%;height: auto;min-height: 90px;
}
.content .service{
	display: inline-block; height: 90px;width: 24%;
	transition: all .5s;
}
.content .service:hover{background-color: rgba(202,228,248,0.5)}
.content .service .info{
	display: inline-block;
	height: 90px;
	float: left;
}
.content .service .info_left img{
	width: 100%;
}
.content .service .info_left{
	width: 28%;
}
.content .service .info_right{
	width: 68%;text-align: left;overflow: auto;
	padding-left: 2%;
}
.content .service .info_right h1{
	padding-bottom: 8px;
	
}
.content .service .info_right p{
	font-size:80% ;
}

</style>
