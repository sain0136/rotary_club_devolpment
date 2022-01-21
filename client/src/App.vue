<template>
  <router-view>
  </router-view>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i|Lobster+Two:400,400i,700,700i|Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i');

/*Create button style*/
.plus {
  position: relative;
  z-index: 1;
  width: 80px;
  height: 80px;
  font-weight: bolder;
  color: #B1D0E0;
  background: #6998AB;
  border-radius: 50%;
  border: none;
  -webkit-transition: -webkit-box-shadow 400ms cubic-bezier(0.2, 0, 0.7, 1), -webkit-transform 200ms cubic-bezier(0.2, 0, 0.7, 1);
  transition: -webkit-box-shadow 400ms cubic-bezier(0.2, 0, 0.7, 1), -webkit-transform 200ms cubic-bezier(0.2, 0, 0.7, 1);
  transition: box-shadow 400ms cubic-bezier(0.2, 0, 0.7, 1), transform 200ms cubic-bezier(0.2, 0, 0.7, 1);
  transition: box-shadow 400ms cubic-bezier(0.2, 0, 0.7, 1), transform 200ms cubic-bezier(0.2, 0, 0.7, 1), -webkit-box-shadow 400ms cubic-bezier(0.2, 0, 0.7, 1), -webkit-transform 200ms cubic-bezier(0.2, 0, 0.7, 1);
}

.plus:after {
  content: "+";
  font-size: 4.5em;
  line-height: 0.6em;
}

.plus:hover {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
  -webkit-box-shadow: 0 0 1px 15px rgba(183, 215, 232, 0.4), 0 0 1px 30px rgba(207, 224, 232, 0.1), 0 0 1px 45px rgba(183, 215, 232, 0.1);
          box-shadow: 0 0 1px 15px rgba(183, 215, 232, 0.4), 0 0 1px 30px rgba(207, 224, 232, 0.1), 0 0 1px 45px rgba(36, 179, 44, 0.1);
}

.crud-buttons {
  background-color: transparent;
  border: none;
  margin-right: 10px;
}

.crud-buttons:hover {
  transition: opacity 131ms;
  opacity: 0.5;
}


/**General table styling */
table {
  border: 1px solid #b2b2b259;
  margin: auto;
  box-shadow: 0px 3px 20px 0 rgba(0, 0, 0, 0.384);
  overflow: auto;
  height: 200px;
}

th {
  border: 1px solid #b2b2b2c5;
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
}

td {
  border: 1px solid #b2b2b294;
  font-family: 'Lato', sans-serif;
  padding: 5px;
  width: 25%;
}

tr:nth-child(even) {
  background-color: #b2b2b249;
}

</style>
