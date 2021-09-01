<template>
	<div class="container-item-box">
		<div class="container-item-name">{{name}}</div>
		<div class="container-item-val">
			<span class="val">{{val}}</span><span class="unit">{{unit}}</span>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		name: {
			type: String,
			default: ''
		},
		val: {
			type: String,
			default: '0'
		},
		unit: {
			type: String,
			dafault: ''
		}
	},
	data () {
		return {

		}
	},
}
</script>
<style lang="scss" scoped>
.container-item-box {
	margin: 30px 0;
	.container-item-name {
		font-size: 26px;
		color: #ffffff;
	}
	.container-item-val {
		width: 100%;
		text-align: center;
		.val {
			font-size: 80px;
			// color: #357fec;
			line-height: 112px;
			background-image: -webkit-linear-gradient(
				top,
				rgba(44, 104, 231, 1) 0%,
				rgba(31, 230, 239, 1) 100%
			);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
		.unit {
			font-size: 30px;
			color: #ffffff;
			margin-left: 38px;
		}
	}
}
</style>