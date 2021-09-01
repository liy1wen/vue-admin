<template>
	<div class="echart-container">
		<div class="echart-top">
			<div
				ref="chart1"
				class="chart"
			></div>
			<div
				ref="chart3"
				class="chart3"
			></div>
			<div
				ref="chart4"
				class="chart3"
			></div>
			<div
				ref="chart5"
				class="chart5"
			></div>
		</div>

		<div
			ref="chart2"
			class="chart2"
		></div>
		<div
			ref="chart6"
			class="chart6"
		></div>
		<div
			ref="chart7"
			class="chart7"
		></div>
		<div
			ref="chart8"
			class="chart8"
		></div>
	</div>
</template>
<script>
import * as echarts from 'echarts';
export default {
	data () {
		return {

		}
	},
	mounted () {
		this.initChartOne()
		this.initChartTwo()
		this.initChartThree()
		this.initChartFour()
		this.initChartFive()
		this.initChartSix()
		this.initChartSeven()
		this.initChartEight()
	},
	methods: {
		initChartOne () {
			let chart = echarts.init(this.$refs.chart1)
			let option_one = {
				grid: {
					top: '0%',
					left: '5%',
					right: '0%',
					bottom: '0%',
					containLabel: true,
				},
				tooltip: {
					trigger: 'item',
					formatter: '{a} <br/>{b}: {c} ({d}%)',
					textStyle: {
						fontSize: 12
					}
				},
				legend: {
					orient: 'vertical',
					x: 'right',
					y: 'center',
					itemGap: 15,
					itemHeight: 15,
					textStyle: { color: '#fff', fontSize: 12, fontWeight: 500 },
					data: [
						{ name: '门诊药品收入', icon: 'circle' },
						{ name: '住院药品收入', icon: 'circle' },
						{ name: '辅助用药收入', icon: 'circle' },
						{ name: '其他药品收入', icon: 'circle' },
					],
				},
				series: [
					{
						name: '访问来源',
						type: 'pie',
						radius: '50%',
						center: ['35%', '50%'],
						labelLine: {
							normal: {
								length: 0,
								// length2: 7,
								lineStyle: {
									color: '#ffffff',
								}
							}
						},
						label: {
							//饼图图形上的文本标签
							normal: {
								show: true,
								position: 'outer', //标签的位置
								textStyle: {
									fontWeight: 500,
									color: '#ffffff',
									fontSize: 14, //文字的字体大小
								},
								formatter: '{d}%',
							},
						},
						data: [
							{
								value: 335,
								name: '门诊药品收入',
								itemStyle: { color: '#357FEC' },
							},
							{
								value: 310,
								name: '住院药品收入',
								itemStyle: { color: '#87B294' },
							},
							{
								value: 234,
								name: '辅助用药收入',
								itemStyle: { color: '#1E2E8D' },
							},
							{
								value: 135,
								name: '其他药品收入',
								itemStyle: { color: '#B9DFFF' },
							},
						],
					},
				],
			}
			chart.setOption(option_one)
		},
		initChartTwo () {
			let chart = echarts.init(this.$refs.chart2, 'customed')
			let option_two = {
				title: {
					text: '过去一个月收入统计',
					padding: [25, 0, 0, 50],
					textStyle: {
						color: '#ffffff', //颜色
						fontStyle: 'normal', //风格
						fontWeight: 'normal', //粗细
						fontSize: 24, //大小
						align: 'left', //水平对齐
					},
				},
				tooltip: {
					trigger: 'axis',
					textStyle: {
						fontSize: 36
					},
					axisPointer: {
						type: 'cross',
						label: {
							backgroundColor: '#6a7985',
						},
					},
				},
				grid: {
					top: '20%',
					left: '2%',
					right: '3.5%',
					bottom: '8%',
					containLabel: true,
				},
				legend: {
					orient: 'horizontal',
					x: 'right',
					y: '5%',
					padding: [10, 30],
					textStyle: { color: '#ffffff', fontSize: 16 },
					itemHeight: 10,
					itemWidth: 50,
					itemGap: 50,
					data: [
						{ name: '抗菌药物收入', icon: 'rect' },
						{ name: '药品收入', icon: 'rect' },
						{ name: '总收入', icon: 'rect' },
					],
				},
				xAxis: {
					type: 'category',
					boundaryGap: true,
					axisTick: {
						//轴刻度线
						show: false,
					},
					data: ['3-01', '3-05', '3-10', '3-15', '3-20', '3-25', '3-30'],
					axisLine: {
						lineStyle: {
							color: 'rgba(255,255,255,.5)',
						},
					},
					axisLabel: {
						show: true,
						textStyle: {
							color: '#ffffff', //更改坐标轴文字颜色
							fontSize: 16, //更改坐标轴文字大小
						},
					},
				},
				yAxis: {
					type: 'value',
					axisTick: {
						//y轴刻度线
						show: false,
					},
					axisLine: {
						//y轴
						show: false,
						lineStyle: {
							color: 'rgba(255,255,255,.5)',
						},
					},
					axisLabel: {
						show: true,
						textStyle: {
							color: '#ffffff', //更改坐标轴文字颜色
							fontSize: 16, //更改坐标轴文字大小
						},
					},
				},
				series: [
					{
						data: [339, 219, 312, 171, 143, 217, 420],
						name: '抗菌药物收入',
						stack: '总量',
						type: 'line',
						lineStyle: {
							width: 4,
						},
						areaStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [
									{
										offset: 0,
										color: '#3EA8DF', // 0% 处的颜色
									},
									{
										offset: 1,
										color: 'rgba(62,168,223,.1)', // 100% 处的颜色
									},
								],
								global: false, // 缺省为 false
							},
						},
						itemStyle: {
							color: '#3EA8DF',
						},
					},
					{
						data: [239, 119, 212, 71, 43, 117, 320],
						name: '药品收入',
						stack: '总量',
						type: 'line',
						lineStyle: {
							width: 4,
						},
						areaStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [
									{
										offset: 0,
										color: '#22A371', // 0% 处的颜色
									},
									{
										offset: 1,
										color: 'rgba(34,163,113,.1)', // 100% 处的颜色
									},
								],
								global: false, // 缺省为 false
							},
						},
						itemStyle: {
							color: '#22A371',
						},
					},
					{
						data: [439, 319, 412, 271, 243, 317, 520],
						name: '总收入',
						stack: '总量',
						type: 'line',
						lineStyle: {
							width: 4,
						},
						areaStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [
									{
										offset: 0,
										color: '#8B9F23', // 0% 处的颜色
									},
									{
										offset: 1,
										color: 'rgba(139,159,35,.1)', // 100% 处的颜色
									},
								],
								global: false, // 缺省为 false
							},
						},
						itemStyle: {
							color: '#8B9F23',
						},
					},
				],
			}
			chart.setOption(option_two)
		},
		initChartThree () {
			let chart = echarts.init(this.$refs.chart3)
			let option_three = {
				grid: {
					left: '0%',
					right: '0%',
					bottom: '0%',
					top: '0%',
					containLabel: true,
				},
				title: {
					text: '{a|' + 70 + '}{b|' + '%' + '}',
					x: 'center',
					y: 'center',
					textStyle: {
						rich: {
							a: {
								fontSize: 64,
								color: '#ffffff',
							},
							b: {
								fontSize: 36,
								color: 'rgba(255,255,255,.7)',
								padding: [0, 0, 0, 10],
							},
						},
					},
				},
				series: [
					{
						type: 'gauge',
						radius: '80%',
						clockwise: false,
						startAngle: '90',
						endAngle: '-269.9999',
						splitNumber: 25,
						detail: {
							formatter: ' ',
						},
						zlevel: 3,
						axisTick: {
							show: false,
						},
						splitLine: {
							show: true,
							length: 32,
							lineStyle: {
								color: 'rgba(0,0,0,0.07)',
								width: 8,
							},
						},
						pointer: {
							show: false,
						},
						axisLine: {
							show: false,
						},
						axisTick: {
							show: false,
						},
						axisLabel: {
							show: false,
						},
					},
					{
						type: 'pie',
						name: '外层细圆环',
						radius: ['90%', '92%'],
						hoverAnimation: false,
						clockWise: false,
						itemStyle: {
							normal: {
								color: 'rgba(200,200,200,.3)',
							},
						},
						label: {
							show: false,
						},
						data: [100],
					},
					{
						type: 'pie',
						name: '内层层细圆环',
						radius: ['80%', '82%'],
						hoverAnimation: false,
						clockWise: false,
						itemStyle: {
							normal: {
								color: 'rgba(200,200,200,.3)',
							},
						},
						label: {
							show: false,
						},
						data: [100],
					},
					// {
					//   type: 'pie',
					//   zlevel: 3,
					//   silent: true,
					//   radius: ['60%', '80%'],
					//   label: {
					//     normal: {
					//       show: false,
					//     },
					//   },
					//   labelLine: {
					//     normal: {
					//       show: false,
					//     },
					//   },
					// },
					{
						name: '药物指标',
						type: 'pie',
						clockWise: false,
						radius: ['60%', '80%'],
						itemStyle: {
							normal: {
								color: {
									colorStops: [
										{
											offset: 0,
											color: 'rgba(44,104,231,1)',
										},
										{
											offset: 1,
											color: 'rgba(31,230,239,1)',
										},
									],
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									type: 'linear',
									global: false,
								},
								label: {
									show: false,
								},
								labelLine: {
									show: false,
								},
							},
						},
						hoverAnimation: false,
						data: [
							{
								value: 70,
								label: {
									normal: {
										position: 'center',
										show: false,
										textStyle: {
											fontSize: '50',
											color: '#1cc7ff',
										},
									},
								},
							},
							{
								value: 50,
								name: 'invisible',
								itemStyle: {
									normal: {
										color: 'rgba(200,200,200,.1)',
									},
									emphasis: {
										color: 'rgba(200,200,200,.1)',
									},
								},
							},
						],
					},
				],
			}
			chart.setOption(option_three)
		},
		initChartFour () {
			let chart = echarts.init(this.$refs.chart4)
			let option_four = {
				title: {
					text: '{a|' + 75 + '}{b|' + '%' + '}',
					x: 'center',
					y: 'center',
					textStyle: {
						rich: {
							a: {
								fontSize: 72,
								color: '#ffffff',
							},
							b: {
								fontSize: 48,
								color: 'rgba(255,255,255,.7)',
								padding: [0, 0, 0, 10],
							},
						},
					},
				},
				polar: {},
				angleAxis: {
					max: 100,
					show: false,
					startAngle: 0,
				},
				radiusAxis: {
					type: 'category',
					show: true,
					axisLabel: {
						show: false,
					},
					axisLine: {
						show: false,
					},
					axisTick: {
						show: false,
					},
				},
				series: [
					{
						type: 'pie',
						radius: '90%',
						data: [
							{
								hoverOffset: 1,
								value: 30,
								name: '',
								itemStyle: {
									color: 'rgba(3,140,197,0)',
								},
								label: {
									show: false,
								},
								labelLine: {
									normal: {
										smooth: true,
										lineStyle: {
											width: 0,
										},
									},
								},
								hoverAnimation: false,
							},
							{
								label: {
									show: false,
								},
								labelLine: {
									normal: {
										smooth: true,
										lineStyle: {
											width: 0,
										},
									},
								},
								value: 0,
								hoverAnimation: false,
								itemStyle: {
									color: '#3c3a48',
								},
							},
						],
					},
					//齿轮
					{
						name: '大环',
						type: 'gauge',
						splitNumber: 25,
						radius: '80%',
						startAngle: 90,
						endAngle: -269.9999,
						axisLine: {
							show: false,
							lineStyle: {
								color: [
									[(100 - 75) / 100, 'rgba(200,200,200,.1)'],
									[(100 - 75) / 100 + 0.01, 'rgba(200,200,200,.1)'],
									[((100 - 75) / 100 + 1) / 2, '#1b9fff'],
									[1, '#0175ff'],
								],
							},
						},
						axisTick: {
							show: false,
						},
						splitLine: {
							show: true,
							length: 16,
							lineStyle: {
								color: 'auto',
								width: 8,
							},
						},
						axisLabel: {
							show: false,
						},
						detail: {
							show: false,
						},
					},
				],
			}
			chart.setOption(option_four)
		},
		initChartFive () {
			let chart = echarts.init(this.$refs.chart5)
			let option_five = {
				grid: {
					top: '0%',
					left: '0%',
					right: '0%',
					bottom: '0%',
					containLabel: true,
				},
				series: [
					{
						startAngle: 180, // 仪表盘起始角度,默认 225。圆心 正右手侧为0度，正上方为90度，正左手侧为180度。
						endAngle: 0, // 仪表盘结束角度,默认 -45
						name: '1',
						type: 'gauge',
						center: ['50%', '70%'], // 默认全局居中
						radius: '90%',
						min: 0,
						// max: 400,
						// splitNumber: 10,
						axisLine: {
							// 坐标轴线
							lineStyle: {
								// 属性lineStyle控制线条样式
								color: [
									[
										0.9,
										new echarts.graphic.LinearGradient(0, 0, 1, 0, [
											{
												offset: 0,
												color: '#357FEC',
											},
											{
												offset: 0.9,
												color: '#A7F1FF',
											},
										]),
									],
									[
										1,
										new echarts.graphic.LinearGradient(0, 0, 1, 0, [
											{
												offset: 1,
												color: '#2458A3',
											},
										]),
									],
								],
								width: 24, //半径
								shadowColor: '#fff', //默认透明
								shadowBlur: 1,
							},
						},
						pointer: {
							show: false,
						},
						axisLabel: {
							//show:false,
							// 坐标轴小标记
							textStyle: {
								// 属性lineStyle控制线条样式
								fontWeight: 'bolder',
								color: 'transparent', //刻度数字颜色 隐藏
								shadowColor: '#fff', //默认透明
								shadowBlur: 10,
							},
						},
						axisTick: {
							// 坐标轴小标记
							length: 24, // 属性length控制线长
							lineStyle: {
								// 属性lineStyle控制线条样式
								color: 'transparent', //坐标轴 小刻度线颜色
								shadowColor: '#fff', //默认透明
								shadowBlur: 10,
							},
						},
						splitLine: {
							// 分隔线
							length: 40, // 属性length控制线长
							lineStyle: {
								// 属性lineStyle（详见lineStyle）控制线条样式
								width: 6,
								color: 'transparent', //分割线
								shadowColor: '#fff', //默认透明
								shadowBlur: 10,
							},
						},
						detail: {
							//show : true ,
							borderColor: '#fff',
							shadowColor: '#fff', //默认透明
							offsetCenter: ['-15%', '-15%'],
							textStyle: {
								// 其余属性默认使用全局文本样式，详见TEXTSTYLE
								fontWeight: '500',
								fontSize: 64,
								color: '#357FEC',
							},
							formatter: '{value}',
						},
						data: [{ value: '90', name: '%' }],
						title: {
							offsetCenter: ['40%', '-10%'],
							textStyle: {
								color: 'rgba(255,255,255)', //颜色
								fontStyle: 'normal', //风格
								fontWeight: 'normal', //粗细
								fontSize: 32, //大小
								align: 'center', //水平对齐
							},
						},
					},
				],
			}
			chart.setOption(option_five)
		},
		initChartSix () {
			let chart = echarts.init(this.$refs.chart6)
			let option_six = {
				// backgroundColor: '#fff',
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow',
					},
				},
				grid: {
					top: '6%',
					left: '3%',
					right: '3.5%',
					bottom: '10%',
					containLabel: true,
				},
				xAxis: {
					type: 'category',
					boundaryGap: false,
					axisTick: {
						//轴刻度线
						show: false,
					},
					data: ['05-01', '05-02', '05-03', '05-04', '05-05', '05-06', '05-07'],
					axisLine: {
						lineStyle: {
							color: 'rgba(255,255,255,.5)',
						},
					},
				},
				yAxis: {
					type: 'value',
					axisTick: {
						//y轴刻度线
						show: false,
					},
					axisLine: {
						//y轴
						show: false,
						lineStyle: {
							color: 'rgba(255,255,255,.5)',
						},
					},
				},
				series: [
					{
						data: ['2000', '2200', '2600', '2300', '1800', '2000', '2500'],
						type: 'line',
						lineStyle: {
							width: 4,
						},
						areaStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [
									{
										offset: 0,
										color: '#22C241', // 0% 处的颜色
									},
									{
										offset: 1,
										color: 'rgba(34,194,65,0)', // 100% 处的颜色
									},
								],
								global: false, // 缺省为 false
							},
						},
						itemStyle: {
							color: '#82FFB1',
						},
					},
				],
			}
			let count = 0;
			setInterval(() => {
				chart.dispatchAction({
					type: 'showTip',
					seriesIndex: 0,  // 显示第几个series
					dataIndex: count % 7 // 显示第几个数据
				});
				count++;
			}, 1500);
			chart.setOption(option_six)
		},
		initChartSeven () {
			let chart = echarts.init(this.$refs.chart7)
			let option_seven = {
				tooltip: {
					trigger: 'axis',
					textStyle: {
						fontSize: 16
					},
					axisPointer: {
						type: 'cross',
						label: {
							backgroundColor: '#6a7985',
						},
					},
				},
				grid: {
					top: '20%',
					left: '1%',
					right: '1%',
					bottom: '8%',
					containLabel: true,
				},
				legend: {
					orient: 'horizontal',
					x: 'center',
					y: '5%',
					padding: [10, 30],
					textStyle: { color: '#ffffff', fontSize: 16 },
					itemHeight: 6,
					itemWidth: 50,
					itemGap: 500,
					data: [
						{ name: '抗菌药物收入', icon: 'rect' },
						{ name: '药品收入', icon: 'rect' }
					],
				},
				xAxis: {
					type: 'category',
					boundaryGap: false,
					axisTick: {
						//轴刻度线
						show: false,
					},
					data: ['3-01', '3-05', '3-10', '3-15', '3-20', '3-25', '3-30'],
					axisLine: {
						lineStyle: {
							color: 'rgba(255,255,255,.5)',
						},
					},
					axisLabel: {
						show: true,
						textStyle: {
							color: '#ffffff', //更改坐标轴文字颜色
							fontSize: 16, //更改坐标轴文字大小
						},
						interval: 0
					},
				},
				yAxis: {
					type: 'value',
					interval: 200,
					axisTick: {
						//y轴刻度线
						show: false,
					},
					axisLine: {
						//y轴
						show: false,
						lineStyle: {
							color: 'rgba(255,255,255,.5)',
						},
					},
					axisLabel: {
						show: true,
						textStyle: {
							color: '#ffffff', //更改坐标轴文字颜色
							fontSize: 16, //更改坐标轴文字大小
						},
					},
				},
				series: [
					{
						data: [339, 219, 312, 171, 143, 217, 420],
						name: '抗菌药物收入',
						stack: '总量',
						type: 'line',
						lineStyle: {
							width: 4,
						},
						// areaStyle: {
						// 	color: {
						// 		type: 'linear',
						// 		x: 0,
						// 		y: 0,
						// 		x2: 0,
						// 		y2: 1,
						// 		colorStops: [
						// 			{
						// 				offset: 0,
						// 				color: '#3EA8DF', // 0% 处的颜色
						// 			},
						// 			{
						// 				offset: 1,
						// 				color: 'rgba(62,168,223,.1)', // 100% 处的颜色
						// 			},
						// 		],
						// 		global: false, // 缺省为 false
						// 	},
						// },
						itemStyle: {
							color: '#3EA8DF',
						},
					},
					{
						data: [239, 119, 212, 71, 43, 117, 320],
						name: '药品收入',
						stack: '总量',
						type: 'line',
						lineStyle: {
							width: 4,
						},
						// areaStyle: {
						// 	color: {
						// 		type: 'linear',
						// 		x: 0,
						// 		y: 0,
						// 		x2: 0,
						// 		y2: 1,
						// 		colorStops: [
						// 			{
						// 				offset: 0,
						// 				color: '#22A371', // 0% 处的颜色
						// 			},
						// 			{
						// 				offset: 1,
						// 				color: 'rgba(34,163,113,.1)', // 100% 处的颜色
						// 			},
						// 		],
						// 		global: false, // 缺省为 false
						// 	},
						// },
						itemStyle: {
							color: '#22A371',
						},
					}
				],
			}
			chart.setOption(option_seven)
		},
		initChartEight () {
			let chart = echarts.init(this.$refs.chart8)
			let xdata = ['北京', '上海', '武汉']
			let ydata = [100, 30, 30]
			let option_eight = {
				tooltip: {
					trigger: "axis"
				},
				grid: {
					top: "15%",
					left: "8%",
					right: "12%",
					bottom: "3%",
					containLabel: true
				},
				xAxis: {
					type: "category",
					data: xdata,
					name: '教室',
					splitLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					axisLine: {
						symbol: ['none', 'arrow'],
						symbolSize: [15, 17],
						lineStyle: {
							color: '#000000',
							width: 2 //  改变坐标线的颜色
						}
					},
					axisLabel: {
						//调整x轴的lable
						textStyle: {
							fontSize: 12,// 让字体变大
						}
					}
				},
				yAxis: {
					type: "value",
					name: '时长（小时）',
					splitLine: {    //刻度线
						show: false,
					},

					axisTick: {
						show: false
					},
					axisLabel: {
						//调整y轴的lable
						textStyle: {
							fontSize: 12 // 让字体变大
						},
						show: true
					},
					axisLine: {
						symbol: ['none', 'arrow'],
						symbolSize: [15, 17],
						lineStyle: {
							color: '#000000',
							width: 2 //  改变坐标线的颜色
						}
					}
				},
				series: [
					{
						name: "时长统计",
						type: "bar",
						showSymbol: false,
						hoverAnimation: false,
						data: ydata,
						barWidth: 17, //柱图宽度
						itemStyle: {          //左面
							normal: {
								color: function (params) {
									let colorList = ["#EA5353", "#DB8D4D", "#9DD530", "#38CFCA", "#6C54E2", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570"];
									return colorList[params.dataIndex];
								},
								barBorderRadius: [0, 0, 0, 180],
							}
						}
					}, {
						name: 'a',
						tooltip: {
							show: false
						},
						type: 'bar',
						barWidth: 17,
						itemStyle: {       //右面
							normal: {
								color: function (params) {
									let colorList = ["#FA6363", "#F1A363", "#AEE93C", "#41EBE5", "#866FF5", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570"];
									return colorList[params.dataIndex];
								},
								barBorderRadius: [0, 0, 180, 0]
							}
						},
						data: ydata,
						barGap: 0
					}, {
						name: 'b',
						tooltip: {
							show: false
						},
						type: 'pictorialBar',
						itemStyle: {        //顶部
							normal: {
								color: function (params) {
									let colorList = ["#FC9F9F", "#F7B177", "#BBF64A", "#4DF4EE", "#947FFA", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570"];
									return colorList[params.dataIndex];
								},
								borderColor: '',
								borderWidth: 0.01,
								label: {
									show: true, //开启显示
									position: 'top', //在上方显示
									textStyle: { //数值样式
										color: 'black',
										fontSize: 16,
										fontFamily: '微软雅黑',
									}
								}
							}
						},
						symbol: 'rect',
						symbolRotate: 45,
						symbolSize: ['24', '24'],
						symbolOffset: ['0', '-11'],
						symbolPosition: 'end',
						data: ydata,
						z: 3
					}]

			};
			chart.setOption(option_eight)
		}
	},
}
</script>
<style lang="scss" scoped>
.echart-container {
	padding: 20px;
	background: #1b1b1b; //背景色
	.echart-top {
		display: flex;
		justify-content: space-around;
		.chart {
			width: 360px;
			height: 250px;
		}
		.chart3 {
			width: 250px;
			height: 250px;
		}
		.chart5 {
			width: 250px;
			height: 250px;
		}
	}

	.chart2,
	.chart7 {
		width: 100%;
		height: 350px;
	}
	.chart6 {
		height: 350px;
		width: 100%;
	}
	.chart8 {
		height: 350px;
		width: 100%;
	}
}
</style>
