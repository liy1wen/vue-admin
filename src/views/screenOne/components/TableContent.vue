<template>
	<div
		class="table-content"
		:style="{width: `${width}`,height: `${height}`}"
	>
		<vue-seamless-scroll
			:data="table_data"
			:class-option="classOption"
		>
			<table
				class="statistics-table"
				cellspacing="0"
				cellpadding="0"
			>
				<tbody>
					<tr
						v-for="(item,index) in table_data"
						:key="index"
					>
						<td
							v-for="(val,key) in item"
							:key="key"
						>{{val}}</td>
					</tr>
				</tbody>
			</table>
		</vue-seamless-scroll>
	</div>
</template>
<script>
export default {
	props: {
		table_data: {
			type: Array,
			default: []
		},
		classOption: {
			type: Object,
			default: () => {
				return {
					step: .4, // 数值越大速度滚动越快
					limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
					hoverStop: true, // 是否开启鼠标悬停stop
					direction: 1, // 0向下 1向上 2向左 3向右
					openWatch: true, // 开启数据实时监控刷新dom
					singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
					singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
					waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
				}
			}
		},
		width: {
			type: String,
			default: '500px'
		},
		height: {
			type: String,
			default: '400px'
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
.table-content {
	overflow: scroll;
	.statistics-table {
		box-sizing: border-box;
		width: 100%;
		color: rgba(255, 255, 255, 0.8);
		font-size: 16px;
		tr:nth-child(odd) {
			background: #141414;
		}
		tr:nth-child(even) {
			background: #343638;
		}
		tr {
			line-height: 42px;
			border-bottom: 1px solid rgba(102, 102, 102, 0.25);
			display: flex;
			justify-content: space-between;
			padding: 0 5%;
			th {
				background: #4a4a4a;
			}
			td {
				text-align: left;
				// padding-left: 85px;
			}
		}
	}
}
</style>