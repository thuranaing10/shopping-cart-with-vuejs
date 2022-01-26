<template>
	<Master>
		<div class="container">
			<table class="table striped">
				<tr>
					<td>Name</td>
					<td>Image</td>
					<td>+ -</td>
					<td>Qty</td>
					<td>Price</td>
					<td>Total</td>
					<td>Remove</td>
				</tr>
				<tr v-for="(product,index) in products" :key="index">
					<td>{{ product.title }}</td>
					<td>
						<img :src="product.image" width="20%">
					</td>
					<td>
						<span @click="addQty(product)" class="btn btn-sm btn-success">+</span>
						<button @click="reduceQty(product)" class="btn btn-sm btn-danger" :disabled="isDisabled">-</button>
					</td>
					<td>{{ product.qty }}</td>
					<td>{{ product.price }}</td>
					<td>{{ product.qty * product.price }}</td>
					<td><button class="btn btn-sm btn-danger" @click="removeProduct(product)">X</button></td>
				</tr>
			</table>
		</div>
	</Master>
</template>

<script>
import Master from "../Layout/Master";
	export default {
		name: "Cart",
		components: {
			Master
		},
		data() {
			return {
				products: [],
				isDisabled: false
			}
		},
		created() {
			this.products = this.$root.cart;
		},
		methods: {
			addQty(product) {
				product.qty++;
			},
			reduceQty(product) {

				product.qty--;
				if (product.qty < 1) {
					this.products = this.products.filter((p) => p.id != product.id);
					this.$root.cart = this.products;
				}
				
			},
			removeProduct(product) {
				this.products = this.products.filter((p) => p.id != product.id);
				this.$root.cart = this.products;
			}
		}
	}
</script>