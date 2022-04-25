<template>
  <div class="page-wrapper">
    <section class="page-title" >
      <div class="auto-container">
        <div class="inner-box">
          <h1>About us</h1>
        </div>
      </div>
    </section>
    <section class="services-section">
    	<div class="auto-container">
          <div class="services-title"><h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2><br>
	<div class="text">Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam vel dignissim nisi, a accumsan felis. 
              Nulla vitae massa tellus. Fusce pharetra augue ac sodales tempus. Nam sed lacus quam. Aliquam accumsan ante sed dictum condimentum. 
              Mauris ut velit nec ligula commodo lacinia vel in odio. Donec pellentesque sapien urna, ac maximus nibh porttitor at. Nunc a est magna. 
              Integer lacinia vel lacus quis posuere. Nulla gravida varius felis, nec aliquam erat fermentum volutpat. Curabitur a posuere neque.</div>
        </div>
    </div></section>
    <section class="who-we-are-section">
    	<div class="auto-container">
        	<div class="inner-container">
            	<div class="row clearfix">
                	<!--Services Style Two-->
                    <div class="services-style-two col-md-4 col-sm-6 col-xs-12">
                    	<div class="inner-box">
                        	<div class="block-number">01</div>
                            <h2><a href="#">Our History</a></h2>
                            <div class="title">Work Since 1987 with Pride!!</div>
                            <div class="text">Raise more money with our custom made solution. Unlimited campai pages pledge giving, monthly giving.</div>
                        </div>
                    </div>
                    
                    <!--Services Style Two-->
                    <div class="services-style-two col-md-4 col-sm-6 col-xs-12">
                    	<div class="inner-box">
                        	<div class="block-number">02</div>
                            <h2><a href="#">Our Mission</a></h2>
                            <div class="title">Mission to make smile the world</div>
                            <div class="text">Raise more money with our custom made solution. Unlimited campai pages pledge giving, monthly giving.</div>
                        </div>
                    </div>
                    
                    <!--Services Style Two-->
                    <div class="services-style-two col-md-4 col-sm-6 col-xs-12">
                    	<div class="inner-box">
                        	<div class="block-number">03</div>
                            <h2><a href="#">Large Community</a></h2>
                            <div class="title">Join our community &amp; help others</div>
                            <div class="text">Raise more money with our custom made solution. Unlimited campai pages pledge giving, monthly giving.</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
name:'AboutUs',

}
</script>

<style>
.page-wrapper {
  
}
.page-title {
  position: relative;
  padding: 30px 0px 40px;
  background-size: cover;
  text-align: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #b1a8a8;
}

.services-section {
    position: relative;
    padding: 110px 0px 80px;
}
.auto-container {
    position: static;
    max-width: 1200px;
    padding: 0px 15px;
    margin: 0 auto;
}

.services-section .services-title {
    position: relative;
    text-align: center;
    margin-bottom: 100px;
}


.services-section .services-title h2 {
    position: relative;
    color: #111111;
    font-size: 36px;
    line-height: 1.3em;
    margin-bottom: 25px;
    font-family: 'Lato', sans-serif;
}
.who-we-are-section {
    position: relative;
    padding-bottom: 115px;
}


.auto-container {
    position: static;
    max-width: 1200px;
    padding: 0px 15px;
    margin: 0 auto;
}
.who-we-are-section .inner-container {
    position: relative;
    border: 1px solid #f2f2f2;
}
.row {
    margin-right: -15px;
    margin-left: -15px;
}
.services-style-two {
    position: relative;
}
.services-style-two .inner-box {
    position: relative;
    padding: 35px 40px 40px;
    border-right: 1px solid #f2f2f2;
}
.services-style-two .inner-box .block-number {
    position: relative;
    font-weight: 700;
    font-size: 60px;
    line-height: 1em;
    color: rgba(0,0,0,0.07);
    font-family: 'Montserrat', sans-serif;
}
.services-style-two .inner-box h2 {
    position: relative;
    font-size: 22px;
    font-weight: 500;
    margin-top: -30px;
    text-transform: capitalize;
}
.services-style-two .inner-box h2 a {
    color: #111111;
    transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
}
.services-style-two .inner-box .title {
    position: relative;
    color: #767676;
    font-size: 16px;
    font-style: italic;
    font-family: 'Montserrat', sans-serif;
}
.services-style-two .inner-box .text {
    position: relative;
    font-size: 16px;
    margin-top: 15px;
    color: rgba(0,0,0,0.45);
}
</style>
