<template>
	<div>
		<div class="container-item-title">{{title}}</div>
		<div
			class="container-item-line"
			:style="{width: `${width}`}"
		></div>
	</div>

</template>
<script>
export default {
	props: {
		width: {
			type: String,
			default: '0%'
		},
		title: {
			type: String,
			default: ''
		}
	},
	data () {
		return {

		}
	},
	created () {

	},
}
</script>
<style lang="scss" scoped>
.container-item-line {
	height: 6px;
	margin: 10px 0;
	background: linear-gradient(
		to right,
		rgba(109, 255, 229, 1) 0%,
		rgba(109, 255, 229, 1) 15%,
		rgba(57, 167, 229, 1) 15%,
		rgba(57, 167, 229, 0) 99%
	);
}
.container-item-title {
	font-size: 40px;
	// color: #74daff;
	background-image: -webkit-linear-gradient(left, #97ffe8 0%, #238dff 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>