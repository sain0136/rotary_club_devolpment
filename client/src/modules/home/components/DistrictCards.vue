<template>
  <div class="DistrictCard">
      <img class="card-image" src="../assets/rotary-disrict.png" alt="">
      <h3>District Name:</h3>
      <h4>{{district.district_name}}</h4>
      
          <button>
            Go to this District 
          </button>
          
        
    </div>
</template>

<script>
export default {
    name:'DistrictCards',
     props:{
         district: Object
     }
}
</script>

<style scoped>

.DistrictCard{
    width: 70%;
    border: .2em solid black;
    
}
button{
    width: 100%;
    height: 15%;
	position: relative;
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    background-color: #ffb607;
    border: 2px solid #ffb607;
    text-transform: uppercase;
	}

button:hover {
	color:#ffb607;
	background:none;
}
img{
    height: 50%;
    width: 100%;
}

h3{
text-align: center;

}
h4{
text-align: center;

}
</style>