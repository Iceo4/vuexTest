<template>
	<div>
		<itemcontainer father-component="home"></itemcontainer>
	</div>
</template>
<script>
	import itemcontainer from '../../components/itemcontainer';

	export default {
		name: 'home',
		data() {
			return {
			}
		},
		components: {
			itemcontainer
		},
	}
</script>

<style>
</style>