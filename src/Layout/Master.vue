<template> 
	<div>
		<!-- Nav -->
		<Nav />

		<!-- Content -->
		<slot></slot>

	</div>
</template>

<script>
import Nav from "./Nav";
export default {
	components: {
		Nav
	},
	name: "Master"
};
</script>
