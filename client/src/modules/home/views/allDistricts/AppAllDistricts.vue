<template>
  <div>
      <h1>All Rotary Districts</h1>
      <div class="big-wrapper">
      <div class="fliter-bar">
        <h4>Filter Districts</h4>
      </div>
      <div class="wrapper">
      <DistrictCard v-for="district in districts" :key="district.id" :district="district" />
     </div> 
     </div>
     <div class="button-container">   <button 
     class="prevLink" 
     v-if="apiData.current_page !=1"
     @click="mutateCurrentPage(apiData.current_page,2)"
     >Prev Page</button>

      <button 
     class="nextLink" 
     
     @click="mutateCurrentPage(apiData.current_page,1)"
     v-if=" apiData.current_page < apiData.last_page"
     >Next Page</button></div>
  
    </div>
 
</template>

<script>
import DistrictCard from '../../components/DistrictCards.vue'
import district from '../../../../api-factory/district'
import {watchEffect} from 'vue'

export default {
  name:'AllDistricts',
  components:{
    DistrictCard,
  },
   data() {
    return {
      apiData:{
        current_page:1,
        limit:3,
        last_page: 0
      },
      districts: Object,
      meta: Object
    }
  },
    async created() {
     
      watchEffect(async ()=>
        { 
          this.districts = null
          console.log(this.apiData)
          const districts = await district.indexPagination(this.apiData)  
          //console.log(districts.districts.data)
          this.districts =districts.districts.data
          this.meta= districts.districts.meta
         this.apiData.last_page= this.meta.last_page
          
        })
  },
  methods:{
      mutateCurrentPage(page,sign){
        if (sign === 1) {
          this.apiData.current_page =  page+1
          console.log(this.apiData.current_page)
          if (this.meta.current_page == this.meta.last_page) {
            console.log(this.meta.current_page)
          }
        }
        else{
          this.apiData.current_page =  page-1
          console.log(this.apiData.current_page)
        }


      }
  },
}
</script>

<style scoped>
.big-wrapper{margin-top: 1em;
 display: grid;
 grid-template-columns: [first] 20% [second] 80%;
 grid-template-rows: 100%;
}
.wrapper{
 display : grid;
 grid-template-columns: 1fr 1fr 1fr;
 grid-row-gap:1em;
 justify-items: center;
}
h1{
    text-align: center;
}
h4{
    text-align: center;
}
.nextLink{
position: relative;

margin-top: 10%;
    width: 10%;
    height: 35%;
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    background-color: #ffb607;
    border: 2px solid #0c0b08;
    text-transform: uppercase;
    float: right;
}

.prevLink{
  position: relative;
  
  margin-top: 10%;
 
    width:10%;
    height: 35%;
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    background-color: #ffb607;
    border: 2px solid #080705;
    text-transform: uppercase;
	

}
.fliter-bar{
      display: inline-block;
  height: 100%;
  width: 80%;
  border: 2px solid black;
  
}
.button-container{

  height: 20em;
}
</style>