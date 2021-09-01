<template>
	<div class="rate-container">
		<div class="rate-top">
			<div class="rate-name">{{name}}</div>
			<div class="rate-val">{{val}}</div>
		</div>
		<div
			class="rate-bottom"
			:style='{}'
		>
			<div
				class="rate-rate"
				:style="{width: `${rate}%`,backgroundImage: `linear-gradient(to right,${color_start},${color_end})`}"
			></div>
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
			default: ''
		},
		color_start: {
			type: String,
			default: ''
		},
		color_end: {
			type: String,
			default: ''
		},
		rate: {
			type: Number,
			default: 0
		},
	},
	data () {
		return {

		}
	},
	mounted () {

	},
}
</script>
<style lang="scss" scoped>
.rate-container {
	width: 100%;
	margin-top: 20px;
	.rate-top {
		font-size: 14px;
		color: #ffffff;
		display: flex;
		justify-content: space-between;
	}
	.rate-bottom {
		height: 20px;
		background: rgba(0, 0, 0, 0.25);
		margin-top: 10px;
		.rate-rate {
			// width: 50%;
			height: 100%;
			// background-image: linear-gradient(right, #8bacff 0%, #154fe4 99%);
		}
	}
}
</style>
