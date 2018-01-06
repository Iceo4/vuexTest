<template>
	<div>
		<itemcontainer father-component="home"></itemcontainer>
	</div>
</template>
<script>
import itemcontainer from "../../components/itemcontainer";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    itemcontainer
  },
  created() {
    this.$store.dispatch("getData").then(res => {
        console.log(res);
    }).catch(error => {
        console.log(error);
    });
  }
};
</script>

<style>

</style>