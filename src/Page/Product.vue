<template>
	<Master>
		<!-- Loader -->
		<Loader v-show="isLoad"></Loader>

		<!-- Product -->
		<div class="container" v-show="!isLoad">
			<div class="row">
				<div v-for="(product,index) in products" :key="index" class="col-md-4">
					<div class="card">
						<div class="card-header">
							{{ product.title }}
						</div>
						<div class="card-body">
							<img :src="product.image" width="100%">
						</div>
						<div class="card-footer">
							<span>Price: <small>${{ product.price }}</small></span>
							<a @click="addToCard(product)" class="btn btn-sm btn-dark float-right">Add To Cart</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Master>
</template>

<script>
import Master from '../Layout/Master';
import Loader from '../Component/Loader';
import axios from "axios";
	export default {
		name: "Product",
		components: {
			Master,Loader
		},
		data() {
			return {
				isLoad: true,
				products: [],
			}
		},
		created() {
			axios.get("https://fakestoreapi.com/products").then((res) => {
				this.products = res.data;
				this.isLoad = false;
			});
		},
		methods: {
			addToCard(product) {
				var cart = this.$root.cart;
				var isInCart = cart.find(v => {
					return v.title == product.title;
				});

				if (isInCart) {
					isInCart.qty++;
				}else{
					cart.push({...product, qty : 1});
				}
			}
		}
	}
</script>