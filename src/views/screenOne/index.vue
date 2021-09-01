<template>
	<div class="updateAvatar1">
		<el-button
			type="primary"
			@click="visible = true"
		>修改头像</el-button>
		<el-dialog
			title="修改头像"
			:visible.sync="visible"
			width="800"
			:before-close="handleClose"
		>
			<el-row>
				<el-col
					:span="12"
					style="height: 300px;"
				>
					<vue-cropper
						ref="cropper"
						:img="options.img"
						:info="true"
						:auto-crop="options.autoCrop"
						:auto-crop-width="options.autoCropWidth"
						:auto-crop-height="options.autoCropHeight"
						:fixed-box="options.fixedBox"
						@realTime="realTime"
					/>
					<div class="btnS">
						<el-upload
							ref="uploadCropper"
							:before-upload="beforeAvatarUpload"
							:show-file-list="false"
							action="/"
							style="margin-right: 10px;"
						>
							<el-button
								type="primary"
								size="small"
							>上传头像</el-button>
						</el-upload>
						<el-tooltip
							class="item"
							effect="dark"
							content="向左旋转"
							placement="top"
						>
							<el-button
								size="small"
								@click="rotateLeft"
							><i class="el-icon-refresh-left" /></el-button>
						</el-tooltip>
						<el-tooltip
							class="item"
							effect="dark"
							content="向右旋转"
							placement="top"
						>
							<el-button
								size="small"
								@click="rotateRight"
							><i class="el-icon-refresh-right" /></el-button>
						</el-tooltip>
						<el-tooltip
							class="item"
							effect="dark"
							content="放大"
							placement="top"
						>
							<el-button
								size="small"
								@click="changeScale(1)"
							><i class="el-icon-plus" /></el-button>
						</el-tooltip>
						<el-tooltip
							class="item"
							effect="dark"
							content="缩小"
							placement="top"
						>
							<el-button
								size="small"
								@click="changeScale(-1)"
							><i class="el-icon-minus" /></el-button>
						</el-tooltip>
					</div>
				</el-col>
				<el-col
					:span="12"
					style="height: 300px;"
				>
					<div class="upload-preview">
						<img
							v-show="previews.url"
							:src="previews.url"
							:style="previews.img"
						>
					</div>
				</el-col>
			</el-row>
			<span
				slot="footer"
				class="dialog-footer"
			>
				<el-button
					size="small"
					@click="visible = false"
				>取 消</el-button>
				<el-button
					type="primary"
					:loading="loading"
					size="small"
					@click="submitUpdate"
				>确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
import { VueCropper } from 'vue-cropper'
export default {
	name: 'UpdateAvatar1',
	components: {
		VueCropper
	},
	data () {
		return {
			visible: true,
			options: {
				img: '', // 裁剪图片的地址
				info: true, // 裁剪框的大小信息
				outputSize: 0.8, // 裁剪生成图片的质量
				outputType: '', // 裁剪生成图片的格式
				canScale: false, // 图片是否允许滚轮缩放
				autoCrop: true, // 是否默认生成截图框
				autoCropWidth: 200, // 默认生成截图框宽度
				autoCropHeight: 200,
				fixedBox: true, // 固定截图框大小 是否允许改变
				fixed: true, // 是否开启截图框宽高固定比例
				fixedNumber: [1, 1], // 截图框的宽高比例
				original: false, // 上传图片按照原始比例渲染
				centerBox: false, // 截图框是否被限制在图片里面
				infoTrue: true // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
			},
			previews: {},
			loading: false,
			fileList: [],
			uploadAccept: ['jpeg', 'jpg', 'png']
		}
	},
	methods: {
		// 实时预览函数
		realTime (data) {
			this.previews = data
		},
		handleClose () { },
		beforeAvatarUpload (file) {
			// 此处的上传file有多种处理方式
			console.log(file)
			const type = file.type.split('/')[1]
			if (this.uploadAccept.indexOf(type) > -1) {
				// 上传允许的类型之内
				const reader = new FileReader()
				// 把Array Buffer转化为blob 如果是base64不需要
				// 转化为base64
				reader.readAsDataURL(file)
				reader.onload = () => {
					this.options.img = reader.result
				}
			} else {
				this.$message.warning('您上传的图片格式不符，请重新上传')
			}
		},
		changeScale (num) {
			this.$refs.cropper.changeScale(num)
		},
		rotateLeft () {
			this.$refs.cropper.rotateLeft()
		},
		rotateRight () {
			this.$refs.cropper.rotateRight()
		},
		submitUpdate () {
			this.loading = true
			this.$refs.cropper.getCropData((base64) => {
				this.uploadImg(base64)
			})
		},
		uploadImg () {
			// 发送ajax请求
		}
	}
}
</script>

  <style lang="scss" scoped>
// /deep/ {
// 	.el-dialog {
// 		width: 840px;
// 	}
// 	.el-dialog__body {
// 		width: 800px;
// 	}
// 	.el-dialog__header {
// 		border-bottom: 1px solid #eaeaea;
// 	}
// }
.btnS {
	display: flex;
	padding-top: 20px;
	.i {
		position: relative;
		font-size: 12px;
	}
}
.upload-preview {
	-webkit-box-sizing: content-box;
	-moz-box-sizing: content-box;
	box-sizing: content-box;
	position: absolute;
	top: 50%;
	transform: translate(50%, -50%);
	width: 200px;
	height: 200px;
	border-radius: 50%;
	box-shadow: 0 0 4px #eaeaea;
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
	}
}
</style>
