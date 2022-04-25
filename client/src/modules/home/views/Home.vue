<template>
  <div class="sections" id="home">
    <h2>Welcome to Rotary Projects!<br /> Visit districts and view all the projects .</h2> <br>
    <img src="../assets/rotary-logo.png">
    <p>
      From this page; you can view districts and all Rotary club projects!. <br>
      You can also login into your district then your club and create your own projects or pledge.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
}
</script>

<style scoped>

.sections {
  height: 250px;
}

img {
  margin-left: 42%;
  height: 6em;
}

h2 {
  margin-top: 5%;
  text-align: center;
  text-transform: uppercase;
  color: #1A374D;
}

p {
  color: #1A374D;
  text-align: center;
  font-weight: normal;
  font-size: 20px;
}
.call-to-action-section{
	position:relative;
	text-align:center;
	background-size:cover;
	padding:100px 0px 100px;
	background-position:center center;
  bottom: 10%;
}

.call-to-action-section:before{
	position:absolute;
	content:'';
	left:0px;
	top:0px;
	width:100%;
	height:100%;
	display:block;
	background-color:rgba(0,0,0,0.75);
  
}

.call-to-action-section h2{
	position:relative;
	color:#ffffff;
	font-size:54px;
	font-weight:700;
	line-height:1.4em;
	margin-bottom:10px;
}

.call-to-action-section .text{
	position:relative;
	color:#ffffff;
	font-size:22px;
	margin-bottom:30px;
}
.auto-container{
	position:static;
	max-width:1200px;
	padding:0px 15px;
	margin:0 auto;
}
</style>
