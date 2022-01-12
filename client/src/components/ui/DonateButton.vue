<template>
  <button class="donate-btn">
    DONATE NOW
  </button>
</template>

<script>

export default {
  name: 'DonateButton',
  components: {

  }
}

</script>

<style>

.donate-btn {
	color:#ffb607;
	font-size:14px;
	font-weight:500;
	padding:10px 28px;
	border:2px solid #ffb607;
	font-family: 'Montserrat', sans-serif;
  background-color: #ffff;
  transition: color 500ms;
  transition: background-color 500ms;
  display: inline;
}

.donate-btn:hover {
  color: #ffff;
  background-color: #ffb607;
  transition: color 500ms;
  transition: background-color 500ms;
}

</style>