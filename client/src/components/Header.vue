<template>
  <header class="main-header header-type-one">
    	<!--Header Top-->
    	<div class="header-top">
        	<div class="auto-container">
            	<div class="clearfix">
                    <div class="top-left">
                        <ul class="clearfix">
                        	<!-- li><span class="icon fa fa-phone"></span> (880) 172 380 956</li -->
                        	<li><span class="icon fa fa-envelope"></span>info@cornwallrotary.com</li>
                            <!-- li><span class="icon fa fa-clock-o"></span> Mon-Sat:  8:00am-6:30pm</li -->                           
                        </ul>
                    </div>
                    <div class="top-right clearfix">
                    	<ul class="social-icon-one">
                        	<li><a href="#" title="Facebook"><span class="icon fa fa-facebook"></span></a></li>
                            <li><a href="#" title="Twitter"><span class="icon fa fa-twitter"></span></a></li>
                            <li><a href="main.html" title="Login"><span class="icon fa fa-sign-in"></span></a></li>
                            <!-- li><a href="#"><span class="icon fa fa-google-plus"></span></a></li>
                            <li><a href="#"><span class="icon fa fa-pinterest-p"></span></a></li -->
                        </ul>
                    	<!--Cart Box
                        <a href="shop.html" class="cart-box"><span class="icon flaticon-shopping-bag"></span> (0)</a>-->
                    </div>
                </div>
            </div>
        </div>
    
    	<!--Header-Upper-->
        <div class="header-upper">
        	<div class="auto-container">
            	<div class="clearfix">
                	
                	<div class="pull-left logo-outer">
                    	<div class="logo"><a href="index-2.html"><img src="images/logo-rotary.png" alt="" height="80px" title="Rotary Club of Cornwall"></a></div>
                    </div>
                    
                    <div class="nav-outer clearfix">
                        <!-- Main Menu -->
                        <nav class="main-menu">
                            <div class="navbar-header">
                                <!-- Toggle Button -->    	
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <div><a href="main.html" title="Login"><span class="icon fa fa-sign-in"></span></a></div>
                                </button>
                            </div>
                            
                            <div class="navbar-collapse collapse clearfix">
                                <ul class="navigation clearfix">
                                    <li class="current"><a href="index-2.html">Home</a></li>
                                    <li><a href="about.html">About</a></li>
									<li><a href="causes-grid.html">Projects</a></li>
                                    <li><a href="contact.html">Contact us</a></li>
                                </ul>
                            </div>
                        </nav>
                        
                        <!-- Main Menu End-->
                        <div class="search-box-outer">
                            <div class="dropdown">
                                <button class="search-box-btn dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="fa fa-search"></span></button>
                                <ul class="dropdown-menu pull-right search-panel" aria-labelledby="dropdownMenu3">
                                    <li class="panel-outer">
                                        <div class="form-container">
                                            <form method="post" action="http://rotary.jackcees.com/blog.html">
                                                <div class="form-group">
                                                    <input type="search" name="field-name" value="" placeholder="Search Here" required="">
                                                    <button type="submit" class="search-btn"><span class="fa fa-search"></span></button>
                                                </div>
                                            </form>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <!--Donate Btn-->
                        <div class="donate-btn">
                        	<a class="donate theme-btn" href="donate.html">Donate Now</a>
                        </div>
                        
                	</div>
                    
                </div>
            </div>
        </div>
        <!--End Header Upper-->
        
        <!--Sticky Header-->
        <div class="sticky-header">
        	<div class="auto-container clearfix">
            	<!--Logo-->
            	<div class="logo pull-left">
                	<a href="index-2.html" class="img-responsive"><img src="images/logo-topsmall.png" alt="" title=""></a>
                </div>
                
                <!--Right Col-->
                <div class="right-col pull-right">
                	<!-- Main Menu -->
                    <nav class="main-menu">
                        <div class="navbar-header">
                            <!-- Toggle Button -->    	
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                        
                        <div class="navbar-collapse collapse clearfix">
							<ul class="navigation clearfix">
                                <li class="current"><a href="#">Home</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="causes-grid.html">Projects</a></li>
                                <li><a href="contact.html">Contact us</a></li>
								<li><a class="donate theme-btn" href="donate.html">Donate</a></li>
								<li><a href="main.html" title="Login">&nbsp;&nbsp;<span class="icon fa fa-sign-in"></span>&nbsp;&nbsp;</a></li>
                            </ul>
                        </div>
                    </nav><!-- Main Menu End-->
                </div>
                
            </div>
        </div>
        <!--End Sticky Header-->
    
    </header>
</template>

<script>

export default {
  name: 'Header',
  components: {

  }
}

</script>

<style>

</style>