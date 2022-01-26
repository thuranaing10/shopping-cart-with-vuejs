<template>
	<ul class="nav bg-dark py-4">
		<li class="nav-item">
			<router-link class="nav-link active" to="/">Home</router-link>
		</li>
		<li class="nav-item">
			<router-link class="nav-link" to="/product">Product</router-link>
		</li>
		<li class="nav-item">
			<router-link class="nav-link text-white" to="/cart">
				<i class="fas fa-shopping-cart"></i>
				<small class="badge badge-danger" style="font-size:10px;">{{ $root.cart.length }}</small>
			</router-link>
		</li>
	</ul>
</template>

<script>
	export default {
		name: "Nav",
	}
</script>