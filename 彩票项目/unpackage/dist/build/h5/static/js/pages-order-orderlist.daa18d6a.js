(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-orderlist","components-zaiui-common-basics-orderdetail"],{"0899":function(t,e,i){t.exports=i.p+"static/img/renjiu.71c1eb9c.png"},"27db":function(t,e,i){"use strict";i.r(e);var a=i("cd51"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},3669:function(t,e,i){t.exports=i.p+"static/img/pcjcmc.3ed697b2.png"},"414c":function(t,e,i){"use strict";var a=i("ec26"),n=i.n(a);n.a},"47d1":function(t,e,i){"use strict";var a=i("f720"),n=i.n(a);n.a},"52e7":function(t,e,i){t.exports=i.p+"static/img/jclq.8aac4248.png"},"5a3d":function(t,e,i){t.exports=i.p+"static/img/jczq.eacea4f2.png"},"711f":function(t,e,i){t.exports=i.p+"static/img/pl3.d66cc098.png"},"7b05":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",["foot"==t.type?a("v-uni-image",{style:{width:t.width+"rpx",height:t.height+"rpx"},attrs:{src:i("5a3d")}}):t._e(),"basket"==t.type?a("v-uni-image",{staticClass:"img",style:{width:t.width+"rpx",height:t.height+"rpx"},attrs:{src:i("52e7")}}):t._e(),"bd"==t.type?a("v-uni-image",{staticClass:"img",style:{width:t.width+"rpx",height:t.height+"rpx"},attrs:{src:i("ca0a")}}):t._e(),"pl3"==t.type?a("v-uni-image",{staticClass:"img",style:{width:t.width+"rpx",height:t.height+"rpx"},attrs:{src:i("711f")}}):t._e(),"renjiu"==t.type||"sfc"==t.type?a("v-uni-image",{staticClass:"img",style:{width:t.width+"rpx",height:t.height+"rpx"},attrs:{src:i("0899")}}):t._e(),"gj"==t.type||"gyj"==t.type?a("v-uni-image",{staticClass:"img",style:{width:t.width+"rpx",height:t.height+"rpx"},attrs:{src:i("3669")}}):t._e()],1)],1)},r=[]},"7f9f":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},opacity:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};e.default=a},"7fb1":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uniPopup:i("5d69").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("bar-title",{attrs:{bgColor:"bg-white"},on:{rightTap:function(e){arguments[0]=e=t.$handleEvent(e),t.barEditTap.apply(void 0,arguments)}}},[i("template",{attrs:{slot:"content"},slot:"content"},[t._v("订单记录")]),i("template",{staticStyle:{display:"flex","align-items":"center"},attrs:{slot:"right"},slot:"right"},[i("v-uni-text",{staticClass:"cuIcon-searchlist",staticStyle:{"font-size":"40rpx"}}),i("v-uni-picker",{staticStyle:{flex:"1",margin:"0 20rpx"},attrs:{value:t.index,range:t.array},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange.apply(void 0,arguments)}}},[t._v("筛选")])],1)],2),i("v-uni-view",{staticClass:"content"},[t._l(t.dataList,(function(e,a){return i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"item-title",staticStyle:{padding:"30rpx 20rpx","background-color":"white","margin-bottom":"20rpx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.open(e)}}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","margin-right":"20rpx"}},[i("game-img",{attrs:{width:60,height:60,type:e.type}}),i("v-uni-text",{staticStyle:{"font-size":"24rpx","margin-top":"10rpx",color:"#000000","font-weight":"bold"}},[t._v(t._s(e.en_type))])],1),i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"flex-start"}},[i("v-uni-view",{style:{color:2==e.state||3==e.state?"red":"#797374","font-weight":"bold"}},[t._v(t._s(e.en_state))]),i("v-uni-view",{staticStyle:{padding:"10rpx 0",color:"#515151"}},[t._v(t._s(e.order_time))]),i("v-uni-view",{staticStyle:{color:"#515151"}},[t._v("订单编号:"+t._s(e.order_no))])],1)],1),i("v-uni-view",{staticStyle:{color:"#515151"}},[t._v("订单"),i("v-uni-text",{staticStyle:{color:"red"}},[t._v(t._s(e.amount)+"元")])],1)],1)],1)],1)})),i("uni-popup",{ref:"popup",staticStyle:{"z-index":"999999",top:"101rpx"},attrs:{"mask-click":!1,type:"top",backgroundColor:"#FAFAFA"}},[i("v-uni-scroll-view",{style:{overflow:"scroll",height:t.scrollH+"rpx"},attrs:{"scroll-y":!0}},[i("orderdetail",{style:{overflow:"scroll"},attrs:{orderdetail:this.orderdetail},on:{closeWindow:function(e){arguments[0]=e=t.$handleEvent(e),t.closeWindow()}}})],1)],1)],2)],1)},r=[]},a020:function(t,e,i){"use strict";i.r(e);var a=i("7b05"),n=i("e707");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);var o,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"a734207c",null,!1,a["a"],o);e["default"]=s.exports},b2f8:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"zaiui-bar-title-box",style:{opacity:1==t.opacity?0:1}},[i("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"}),i("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),i("v-uni-view",{staticClass:"content",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?i("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},r=[]},b653:function(t,e,i){"use strict";i.r(e);var a=i("7fb1"),n=i("27db");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("414c");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"e2ac6838",null,!1,a["a"],o);e["default"]=s.exports},ca0a:function(t,e,i){t.exports=i.p+"static/img/bjdc.b529018a.png"},cd51:function(t,e,i){"use strict";var a=i("4ea4");i("99af"),i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("d09b")),r=a(i("879b")),o=a(i("a020")),c={name:"orderlist",components:{barTitle:n.default,orderdetail:r.default,gameImg:o.default},onReachBottom:function(){this.getList(1)},computed:{scrollH:function(){var t=uni.getSystemInfoSync(),e=t.windowWidth,i=750/e,a=parseInt(t.windowHeight*i);return a}},data:function(){return{emulator_Height:0,state:0,dataList:[],orderdetail:{},array:[],index:0,pageNo:1,pageSize:10,hava:!0}},methods:{bindPickerChange:function(t){this.pageNo=1,this.hava=!0,this.state=t.target.value,this.getList(0)},open:function(t){this.orderdetail=t,this.orderdetail["flag"]=0,this.$refs.popup.open("top")},closeWindow:function(){this.$refs.popup.close("top")},barEditTap:function(){},getList:function(t){var e=this;if(0!=this.hava){0==t&&(this.pageNo=1),1==t&&this.pageNo++,this.array[0]="全部",this.array[1]="待出票",this.array[2]="待开奖",this.array[3]="未中奖",this.array[4]="待派奖",this.array[5]="已派奖";var i={state:this.state,pageNo:this.pageNo,pageSize:this.pageSize};this.$api.getOrderList(i).then((function(i){0==t?e.dataList=i.data:(0==i.data.length&&(e.hava=!1),e.dataList=e.dataList.concat(i.data))}))}}},onLoad:function(){this.getList(0)}};e.default=c},ceb5:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".pages[data-v-e2ac6838]{margin-top:calc(0px + %?121?%)}.image_[data-v-e2ac6838]{width:%?60?%;height:%?60?%}.popup-content[data-v-4141175d][data-v-e2ac6838]{display:flex;flex-direction:row;align-items:center;justify-content:center;padding:15px;background-color:#fff}",""]),t.exports=e},d09b:function(t,e,i){"use strict";i.r(e);var a=i("b2f8"),n=i("d3d5");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("47d1");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"7f1a2e51",null,!1,a["a"],o);e["default"]=s.exports},d3d5:function(t,e,i){"use strict";i.r(e);var a=i("7f9f"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},d58e:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-7f1a2e51]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-7f1a2e51]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-7f1a2e51]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-7f1a2e51]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-7f1a2e51]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-7f1a2e51]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-7f1a2e51]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=e},e707:function(t,e,i){"use strict";i.r(e);var a=i("efb2"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},ec26:function(t,e,i){var a=i("ceb5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("545152e0",a,!0,{sourceMap:!1,shadowMode:!1})},efb2:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"gameImg",props:{width:null,height:null,type:null}};e.default=a},f720:function(t,e,i){var a=i("d58e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("5d5cf0dc",a,!0,{sourceMap:!1,shadowMode:!1})}}]);