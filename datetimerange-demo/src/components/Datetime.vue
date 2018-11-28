<template>
  <div class="datetime">
    <div class="title">时间范围 <span>({{formdate(rangeS)}}-{{formdate(rangeE)}})</span></div>
		<div class="btn">
			<div class="block" 
				:class="{active: step == 3}"
				@click="getRange(3)">
				<span>3天</span>
			</div>
			<div class="block" 
				:class="{active: step == 7}"
				@click="getRange(7)">
				<span>1周</span>
			</div>
			<div class="block" 
				:class="{active: step == 30}"
				@click="getRange(30)">
				<span>1个月</span>
			</div>
			<div class="block" 
				:class="{active: step == 'diy'}">
		    	<span>自定义</span>
		    	<el-date-picker
		    		class="datapicker"
		    	  v-model="timerange"
		    	  type="daterange"
		    	  start-placeholder="开始日期"
		    	  end-placeholder="结束日期"
		    	  :picker-options="pickerOptions"
		    	  @change="getDiyRange()"
		    	  @focus="initRange()">
		    	</el-date-picker>
		  </div>
		</div>
  </div>
</template>

<script>
const nowtime = new Date();
const endtime = new Date();
endtime.setDate(nowtime .getDate() + 3);
export default {
	name: 'Datetime',
	data () {
  	return {
  		timerange: ["",""],
  		step: 3,
  		rangeS: nowtime,
  		rangeE: endtime,
			minDate: null,
			maxDate: null,
  	}
	},
	methods: {
		formdate (d) {
			var yy = d.getFullYear();
			var mm = (d.getMonth() + 1) > 9? (d.getMonth() + 1) : "0" + (d.getMonth() + 1);
			var dd = d.getDate() > 9 ? d.getDate() : "0" + d.getDate();
			return yy + '.' + mm + '.' + dd;
		},
		getRange (step) {
			this.step = step;
				// debugger
				var sTime = new Date().getTime();
				this.rangeE = new Date(sTime + 86400*1000*step);
		},
		getDiyRange () {
			this.step = "diy";
			this.rangeS = this.timerange[0];
			this.rangeE = this.timerange[1];
		},
		initRange () {
			this.minDate = null;
			this.maxDate = null;
		}
	},
	computed: {
		pickerOptions() {
			var _this = this;
			return {
				disabledDate (time) {
					if (_this.minDate == null && _this.maxDate == null) {
						return (time.getTime() > Date.now()) || (time.getTime() < Date.now() - 86400*1000*90);
					}
					else if (_this.minDate != null && _this.maxDate == null) {
						return (time.getTime() < _this.minDate.getTime() - 86400*1000*30 || time.getTime() > Date.now()) || (time.getTime() > _this.minDate.getTime() + 86400*1000*30 || time.getTime() < Date.now() - 86400*1000*90);
					}
					
				},
				onPick(range) {
					_this.minDate = range.minDate;
					_this.maxDate = range.maxDate;
				}
			}
		},
	}
}
</script>

<style scoped lang="less">
    .datetime {
			.title {
				font-weight: 700;
				font-size: 16px;
				span {
					font-size: 14px;
					font-weight: 400;
					color: #aaa;
				}
			}
			.btn {
				margin-top: 10px;
				.block {
					float: left;
					margin-right: 10px;
					position: relative;
					span {
						border: 1px solid #ddd;
						display: inline-block;
						width: 60px;
						text-align: center;
						height: 25px;
						line-height: 25px;
					}
					.datapicker {
						width: 62px;
						height: 27px;
						padding: 0;
						box-sizing: content-box;
						position: absolute;
						left: 0;
						top: 0;
						opacity: 0;
					}
				}
				.active {
					background-color: #68c1ec;
					color: #fff;
					span {
						border: 1px solid #68c1ec;
					}
				}
			}
    }
</style>
