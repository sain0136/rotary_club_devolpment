<template>
  		 <table class="filter-table">
			 <tbody><tr><td align="center"><h3>PROJECT SEARCH</h3></td></tr>
	<tr>
		<td colspan="3"><br><br>
		<form class="form-horizontal" style="background:#dedede;">
					<fieldset>
					<!-- Search input-->
					<div class="form-entry" style="margin-left: 25px">
					  <label for="searchinput">Search</label>
					  <div>
						<input id="searchinput" name="searchinput" type="search" placeholder="Search by Keyword" class="form-control input-md">
					  </div>
					</div>

					<!-- Button Drop Down -->
					<div class="form-entry" style="margin-left: 25px">
					  <label for="buttondropdown">Status</label>
					  
						  <div class="input-group-btn">
              <select class="dropdown"
                    name="status"
                    v-model="status">
                    <option value="">>All Active Statuses</option>
                    <option value="">Looking for Funding</option>
              </select> <br> <br>
						<!-- 	<ul class="dropdown-menu pull-right">
							  <li><a href="#">All Active Statuses</a></li>
							  <li><a href="#">Looking for Funding</a></li>
							  <li><a href="#">Fully Funded</a></li>
							  <li><a href="#">Fully Funded or Better</a></li>
							  <li><a href="#">Pending Approval</a></li>
							  <li><a href="#">Pending Approval or Better</a></li>
							  <li><a href="#">Approved</a></li>
							  <li><a href="#">Approved or Better</a></li>
							  <li><a href="#">Completed</a></li>
							</ul> -->
						 
					
					  </div>
					</div>

					<!-- Button Drop Down -->
					<div class="form-group" style="margin-left: 25px">
					  <label class="
            control-label" for="buttondropdown">Country</label>
					  <div>
						<div class="input-group">
						  <input id="buttondropdown" name="buttondropdown" class="form-control" placeholder="" type="text">
						  <div class="input-group-btn">
							<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
							  Select
							  <span class="caret"></span>
							</button>
							<ul class="dropdown-menu pull-right">
							  <li><a href="#">Option one</a></li>
							  <li><a href="#">Option two</a></li>
							  <li><a href="#">Option three</a></li>
							</ul>
						  </div>
						</div>
					  </div>
					</div>

					<!-- Button Drop Down -->
					<div class="form-group" style="margin-left: 25px">
					  <label for="Year">Year</label>
					  <div>
						<div class="input-group">
						  <input id="Year" name="Year" class="form-control" placeholder="" type="text">
						  <div class="input-group-btn">
							<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
							  Select
							  <span class="caret"></span>
							</button>
							<ul class="dropdown-menu pull-right">
							<ul class="dropdown-menu pull-right">
							  <li><a href="#">2019-2020</a></li>
							  <li><a href="#">2018-2019</a></li>
							  <li><a href="#">2017-2018</a></li>
							  <li><a href="#">2016-2017</a></li>
							  <li><a href="#">2015-2016</a></li>
							  <li><a href="#">2014-2015</a></li>
							  <li><a href="#">All Years</a></li>
							</ul>
						  </ul></div>
						</div>
					  </div>
					</div>

					<!-- Button Drop Down -->
					<div class="form-group" style="margin-left: 25px">
					  <label for="buttondropdown">Type of Project</label>
					  <div>
						<div class="input-group">
						  <input id="buttondropdown" name="buttondropdown" class="form-control" placeholder="" type="text">
						  <div class="input-group-btn">
							<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
							  Action
							  <span class="caret"></span>
							</button>
							<ul class="dropdown-menu pull-right">
							  <li><a href="#">All Types of Projects</a></li>
							  <li><a href="#">Food and Clothing</a></li>
							  <li><a href="#">Health Projects</a></li>
							  <li><a href="#">School/Education Projects</a></li>
							  <li><a href="#">Vision/Blindness Prevention</a></li>
							  <li><a href="#">Vocational Projects</a></li>
							  <li><a href="#">Water Projects</a></li>
							</ul>
						  </div>
						</div>
					  </div>
					</div>

					<!-- Button Drop Down -->
					<div class="form-group" style="margin-left: 25px">
					  <label  for="buttondropdown">Region</label>
					  <div>
						<div class="input-group">
						  <input id="buttondropdown" name="buttondropdown" class="form-control" placeholder="" type="text">
						  <div class="input-group-btn">
							<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
							  Select
							  <span class="caret"></span>
							</button>
							<ul class="dropdown-menu pull-right">
							  <li><a href="#">Africa</a></li>
							  <li><a href="#">Central America</a></li>
							  <li><a href="#">North America</a></li>
							  <li><a href="#">South America</a></li>
							  <li><a href="#">Asia</a></li>
							  <li><a href="#">South-East Asia</a></li>
							  <li><a href="#">Eastern Europe</a></li>
							  <li><a href="#">Western Europe</a></li>
							  <li><a href="#">Middle East</a></li>
							</ul>
						  </div>
						</div>
					  </div>
					</div>

					<!-- Button (Double) -->
					<div class="form-group" style="margin-left: 25px">
					  <div>
						<button id="button1id" name="button1id" class="btn btn-success">Search</button>
						<button id="button2id" name="button2id" class="btn btn-warning">Reset</button>
					  </div>
					</div>

					</fieldset>
					</form>
		</td></tr>
</tbody></table>
</template>

<script>
export default {

}
</script>

<style>

</style>