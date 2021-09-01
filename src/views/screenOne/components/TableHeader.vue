<template>
	<div
		class="table-header"
		:style="{width: `${width}`,lineHeight: `${height}`}"
	>
		<div
			v-for="(item,index) in headList"
			:key="index"
		>{{item}}</div>
	</div>
</template>
<script>
export default {
	props: {
		headList: {
			type: Array,
			default: []
		},
		width: {
			type: String,
			default: '500px'
		},
		height: {
			type: String,
			default: '42px'
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
.table-header {
	box-sizing: border-box;
	// margin: 0px 2px;
	padding: 0 5%;
	display: flex;
	justify-content: space-between;
	background: #232323;
	// line-height: 42px;
	color: #ffffff;
	div {
		text-align: left;
		// padding-left: 85px;
	}
}
</style>