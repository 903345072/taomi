(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-football-optimize","components-zaiui-common-basics-orderdetail"],{"47d1":function(e,t,i){"use strict";var r=i("f720"),n=i.n(r);n.a},5283:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return r}));var r={uniPopup:i("5d69").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("uni-popup",{ref:"orderpop",staticStyle:{"z-index":"9999",height:"600rpx"},attrs:{"mask-click":!0,type:"bottom","background-color":"#fff"}},[i("v-uni-view",{staticClass:"cuIcon-roundclose",staticStyle:{position:"absolute",top:"35rpx",right:"35rpx","font-size":"40rpx",color:"grey"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openorderpop()}}}),i("v-uni-view",{staticStyle:{"min-height":"300rpx",padding:"40rpx 0"}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center",color:"grey","padding-bottom":"20rpx","border-bottom":"1px solid #EEEEEE"}},[i("v-uni-view",{staticStyle:{color:"#000000"}},[e._v("支付给店主")])],1),i("v-uni-view",{staticStyle:{padding:"20rpx 20rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","margin-bottom":"20rpx"}},[i("v-uni-view",[e._v(e._s(e.arr[e.game_type]))]),i("v-uni-view",[e._v(e._s(e.amount)+".00元")])],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between"}},[i("v-uni-view",[e._v("店铺余额")]),i("v-uni-view",[e._v(e._s(this.shop_money>=e.amount?-1*e.amount+".00元":"预存不足"))])],1),this.shop_money<e.amount?i("v-uni-view",{staticStyle:{"background-color":"#007AFF",color:"white",padding:"15rpx 200rpx","text-align":"center","border-radius":"40rpx","margin-top":"20rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goRecharge()}}},[e._v("预存入口")]):e._e(),this.shop_money>=e.amount?i("v-uni-view",{staticStyle:{"background-color":"red",color:"white",padding:"15rpx 200rpx","text-align":"center","border-radius":"40rpx","margin-top":"20rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.doorder()}}},[e._v("立即支付")]):e._e()],1)],1)],1)},a=[]},5988:function(e,t,i){var r=i("ae3d");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=i("4f06").default;n("50a93b0b",r,!0,{sourceMap:!1,shadowMode:!1})},"5b8e":function(e,t,i){"use strict";i.r(t);var r=i("da09"),n=i.n(r);for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);t["default"]=n.a},"612a":function(e,t,i){"use strict";var r=i("5988"),n=i.n(r);n.a},"7f9f":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},opacity:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var e=getCurrentPages();e&&e.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};t.default=r},"948d":function(e,t,i){"use strict";i.r(t);var r=i("bf13"),n=i.n(r);for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);t["default"]=n.a},"9c3f":function(e,t,i){"use strict";var r;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return r}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticStyle:{"border-bottom":"1px solid #EEEEEE"}},[i("bar-title",{attrs:{bgColor:"bg-white",isBack:!0}},[i("template",{attrs:{slot:"content"},slot:"content"},[e._v("奖金优化")])],2)],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center",width:"100%","justify-content":"center","margin-top":"40rpx","margin-bottom":"40rpx"}},[i("v-uni-view",{class:["default",{checked:0==e.cur_index}],staticStyle:{"border-left":"1px solid #004ade"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.check(0)}}},[e._v("奖金平均")]),i("v-uni-view",{class:["default",{checked:1==e.cur_index}],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.check(1)}}},[e._v("博热优化")]),i("v-uni-view",{class:["default",{checked:2==e.cur_index}],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.check(2)}}},[e._v("博冷优化")])],1),i("v-uni-view",{staticStyle:{width:"100%",display:"flex","justify-content":"center"}},[i("v-uni-view",{staticStyle:{border:"1px solid grey",display:"flex","align-items":"center","justify-content":"center",width:"680rpx"}},[i("v-uni-view",{staticStyle:{width:"110rpx","border-right":"1px solid grey","text-align":"center",height:"60rpx","line-height":"60rpx"}},[e._v("过关")]),i("v-uni-view",{staticStyle:{width:"210rpx","border-right":"1px solid grey","text-align":"center",height:"60rpx","line-height":"60rpx"}},[e._v("单注组合")]),i("v-uni-view",{staticStyle:{width:"210rpx","border-right":"1px solid grey","text-align":"center",height:"60rpx","line-height":"60rpx"}},[e._v("注数分布")]),i("v-uni-view",{staticStyle:{width:"150rpx","text-align":"center",height:"60rpx","line-height":"60rpx"}},[e._v("预测奖金")])],1)],1),i("v-uni-view",{staticStyle:{width:"100%","text-align":"center",display:"flex","align-items":"center","flex-direction":"column","margin-bottom":"180rpx"}},[i("v-uni-view",{staticStyle:{width:"680rpx",border:"1px solid grey","border-top":"none","border-bottom":"none"}},e._l(this.games,(function(t,r){return i("v-uni-view",{key:r,staticStyle:{"border-bottom":"1px solid grey"}},[i("v-uni-view",{staticStyle:{display:"flex"}},[i("v-uni-view",{staticStyle:{width:"110rpx",height:"120rpx","line-height":"120rpx"}},[e._v(e._s(1!=t.length?t.length+"串1":"单关"))]),i("v-uni-view",{staticStyle:{width:"210rpx",height:"120rpx",display:"flex","flex-direction":"column","justify-content":"space-around","align-items":"center","border-left":"1px solid grey","border-right":"1px solid grey"}},[e._l(t,(function(t,r){return r<2?i("v-uni-view",{key:r,staticStyle:{"font-size":"22rpx"}},[e._v(e._s(t["h_name"])+"|"+e._s(t["name"])+"("+e._s(t["pl"])+")")]):e._e()})),i("v-uni-view",{staticClass:"cuIcon-unfold",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeDisplay(r)}}})],2),i("v-uni-view",{staticStyle:{width:"210rpx",height:"120rpx","line-height":"120rpx","border-right":"1px solid grey",display:"flex","align-items":"center"}},[i("v-uni-view",{staticStyle:{"background-color":"#EEEEEE",height:"50rpx","text-align":"center",width:"50rpx","margin-left":"20rpx","line-height":"50rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.subZhu(r)}}},[e._v("一")]),i("v-uni-input",{staticStyle:{background:"#EEEEEE",width:"50rpx",margin:"0 5rpx",height:"50rpx","text-align":"center"},attrs:{type:"number"},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.starBlur_(r)},input:function(t){arguments[0]=t=e.$handleEvent(t),e.starBlur(t,r)}},model:{value:e.arr[r]["zhu"],callback:function(t){e.$set(e.arr[r],"zhu",t)},expression:"arr[index]['zhu']"}}),i("v-uni-view",{staticClass:"cuIcon-add",staticStyle:{color:"#000000","background-color":"#EEEEEE",height:"50rpx","text-align":"center",width:"50rpx","line-height":"50rpx","margin-right":"20rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addZhu(r)}}})],1),i("v-uni-view",{class:[{is_red:e.arr[r]["zhu"]*e.arr[r]["one_award"]>e.money}],staticStyle:{width:"150rpx",height:"120rpx","line-height":"120rpx"}},[e._v(e._s((e.arr[r]["zhu"]*e.arr[r]["one_award"]).toFixed(2)))])],1),i("v-uni-view",{ref:r,refInFor:!0,staticStyle:{display:"none"}},[i("v-uni-view",{staticStyle:{border:"1px solid grey",display:"flex","align-items":"center","justify-content":"center","background-color":"#f4ede4","font-weight":"bold"}},[i("v-uni-view",{staticStyle:{"border-right":"1px solid grey","text-align":"center",height:"60rpx","line-height":"60rpx",flex:"1"}},[e._v("场次")]),i("v-uni-view",{staticStyle:{"border-right":"1px solid grey","text-align":"center",height:"60rpx","line-height":"60rpx",flex:"1"}},[e._v("主队")]),i("v-uni-view",{staticStyle:{"border-right":"1px solid grey","text-align":"center",height:"60rpx","line-height":"60rpx",flex:"1"}},[e._v("客队")]),i("v-uni-view",{staticStyle:{"text-align":"center",height:"60rpx","line-height":"60rpx",flex:"1"}},[e._v("投注内容")])],1),e._l(t,(function(t,r){return i("v-uni-view",{key:r,staticStyle:{border:"1px solid grey",display:"flex","align-items":"center","justify-content":"center","background-color":"#f4ede4"}},[i("v-uni-view",{staticStyle:{"border-right":"1px solid grey","text-align":"center",height:"60rpx","line-height":"60rpx",flex:"1"}},[e._v(e._s(t["week"]))]),i("v-uni-view",{staticStyle:{"border-right":"1px solid grey","text-align":"center",height:"60rpx","line-height":"60rpx",flex:"1"}},[e._v(e._s(t["h_name"]))]),i("v-uni-view",{staticStyle:{"border-right":"1px solid grey","text-align":"center",height:"60rpx","line-height":"60rpx",flex:"1"}},[e._v(e._s(t["a_name"]))]),i("v-uni-view",{staticStyle:{"text-align":"center",height:"60rpx","line-height":"60rpx",flex:"1"}},[e._v(e._s(t["name"])+"("+e._s(t["pl"])+")")])],1)}))],2)],1)})),1)],1),i("v-uni-view",{staticStyle:{position:"fixed","z-index":"999",left:"0",bottom:"0",right:"0","background-color":"#ffffff"}},[i("v-uni-view",{staticStyle:{"border-top":"1px solid #e8e8e8","border-bottom":"1px solid #e8e8e8","text-align":"center",padding:"10rpx 10rpx"}},[e._v("单注预测奖金:"),i("v-uni-text",{staticStyle:{color:"red"}},[e._v(e._s(e.getExpectAward()))])],1),i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",padding:"20rpx 20rpx"}},[i("v-uni-view",[e._v("方案共"),i("v-uni-text",{staticStyle:{color:"red"}},[e._v(e._s(this.getMoney())+"元")])],1),i("v-uni-view",[i("v-uni-view",{staticStyle:{display:"inline-block",background:"linear-gradient(to right,#97e2e2,#ffaaff)",padding:"10rpx 50rpx","border-radius":"0 16rpx 16rpx 0"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openorderpop()}}},[e._v("提交")])],1)],1)],1),i("payorder",{ref:"orderpop_",attrs:{num_arr:e.arr,amount:this.money,shop_money:this.shop_money,bei:e.bei,check_game:e.games,mode:4,chuan_arr:e.chuan_arr,game_type:e.type},on:{closeopendoor:function(t){arguments[0]=t=e.$handleEvent(t),e.closeopendoor()}}})],1)},a=[]},ae3d:function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,"uni-page-body[data-v-454555b4]{background:#fff;overflow-y:scroll}.is_red[data-v-454555b4]{color:red}.default[data-v-454555b4]{color:#004ade;border-right:1px solid #004ade;border-top:1px solid #004ade;border-bottom:1px solid #004ade;background-color:#fff;padding:%?10?% %?60?%}.checked[data-v-454555b4]{background-color:#004ade;color:#fff}body.?%PAGE?%[data-v-454555b4]{background:#fff}",""]),e.exports=t},ae42:function(e,t,i){"use strict";i.r(t);var r=i("9c3f"),n=i("5b8e");for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("612a");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],r["b"],r["c"],!1,null,"454555b4",null,!1,r["a"],o);t["default"]=s.exports},b2f8:function(e,t,i){"use strict";var r;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return r}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"zaiui-bar-title-box",style:{opacity:1==e.opacity?0:1}},[i("v-uni-view",{staticClass:"cu-bar",class:[e.fixed?"fixed":"",e.shadow?"":"no-shadow",e.bgColor]},[e.isBack?i("v-uni-view",{staticClass:"action",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.BackPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"}),i("v-uni-text",[e._v(e._s(e.backText))])],1):e._e(),e.isBack?e._e():i("v-uni-view",{staticClass:"action",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.leftTap.apply(void 0,arguments)}}},[e._t("left")],2),i("v-uni-view",{staticClass:"content",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.contentTap.apply(void 0,arguments)}}},[e._t("content")],2),i("v-uni-view",{staticClass:"action",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.rightTap.apply(void 0,arguments)}}},[e._t("right")],2)],1),e.fixed?i("v-uni-view",{staticClass:"zaiui-seat-height"}):e._e()],1)},a=[]},b353:function(e,t,i){"use strict";i.r(t);var r=i("5283"),n=i("948d");for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);var o,c=i("f0c5"),s=Object(c["a"])(n["default"],r["b"],r["c"],!1,null,"46d6c030",null,!1,r["a"],o);t["default"]=s.exports},bf13:function(e,t,i){"use strict";i("4de4"),i("b64b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"payorder",data:function(){return{arr:{foot:"竞彩足球",bd:"北京单场",basket:"竞彩篮球",pl3:"排列三",pl5:"排列五",sfc:"胜负彩",renjiu:"任选九",gj:"冠军竞猜",gyj:"冠亚军竞猜"}}},props:{expect_min_award:{type:String,default:"0"},expect_max_award:{type:String,default:"0"},is_open:{type:String,default:"0"},shop_money:null,amount:null,check_game:null,game_type:{type:String,default:"foot"},mode:null,bei:null,chuan_arr:null,num_arr:null,plan_desc:{type:String,default:"没有华丽的宣言,只有最稳的红单"},pl_type:{type:String,default:"1"},num:null},methods:{goRecharge:function(){uni.navigateTo({url:"/pages/finace/recharge?money="+this.shop_money})},doorder:function(){var e=this.chuan_arr;if(e=e.filter((function(e){return 1==e["checked"]})),"gj"!=this.game_type&&"gyj"!=this.game_type)if("pl3"!=this.game_type)for(var t in this.check_game)Array.isArray(this.check_game[t])||(this.check_game[t]=[this.check_game[t]]);else for(var i in this.check_game){var r=this.check_game[i],n=[];for(var a in r)n.push(r[a]["value"]);this.check_game[i]=n}var o=1;"pl3"==this.game_type?o=this.num:"gj"==this.game_type||"gyj"==this.game_type?o=Object.keys(this.check_game).length:this.check_game.length;var c={type:this.game_type,num:o,checkGame:JSON.stringify(this.check_game),bei:this.bei,mode:this.mode,chuan:JSON.stringify(e),num_arr:JSON.stringify(this.num_arr),plan_desc:this.plan_desc,is_open:this.is_open,expect_min_award:this.expect_min_award,expect_max_award:this.expect_max_award,pl_type:this.pl_type};this.$api.doorder_(c).then((function(e){var t=encodeURIComponent(JSON.stringify(e.data));uni.navigateTo({url:"/pages/order/orderdetail?str="+t})}))},openorderpop:function(){this.$emit("closeopendoor")}}};t.default=r},d09b:function(e,t,i){"use strict";i.r(t);var r=i("b2f8"),n=i("d3d5");for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("47d1");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],r["b"],r["c"],!1,null,"7f1a2e51",null,!1,r["a"],o);t["default"]=s.exports},d3d5:function(e,t,i){"use strict";i.r(t);var r=i("7f9f"),n=i.n(r);for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);t["default"]=n.a},d58e:function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,".zaiui-bar-title-box .cu-bar[data-v-7f1a2e51]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-7f1a2e51]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-7f1a2e51]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-7f1a2e51]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-7f1a2e51]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-7f1a2e51]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-7f1a2e51]{width:100%;height:calc(0px + %?101?%)}",""]),e.exports=t},da09:function(e,t,i){"use strict";var r=i("4ea4");i("4e82"),i("d3b7"),i("acd8"),i("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(i("d09b")),a=r(i("b353")),o={name:"optimize",components:{barTitle:n.default,payorder:a.default},data:function(){return{bei:1,chuan_arr:[],arr:[],money:0,games:[],cur_index:0,type:"foot",shop_money:0,is_order_open:!1}},onLoad:function(e){var t=JSON.parse(decodeURIComponent(e.str));for(var i in t)Array.isArray(t[i])||(t[i]=[t[i]]);this.money=e.money,this.games=t,this.type=e.type,this.setPingJunArr()},methods:{closeopendoor:function(){this.$refs.orderpop_.$refs.orderpop.close("bottom"),this.is_order_open=!1},openorderpop:function(){0==this.is_order_open?this.getUserInfo():(this.$refs.orderpop_.$refs.orderpop.close("bottom"),this.is_order_open=!1)},getUserInfo:function(){var e=this,t={};this.$api.getUserInfo(t).then((function(t){var i=t.data.data;e.shop_money=i.total_money,e.$refs.orderpop_.$refs.orderpop.open("bottom"),e.is_order_open=!0;var r=e.clone(e.games);for(var n in r){var a=r[n].length,o="";o=1==a?"单关":a.toString(),e.chuan_arr.push({value:o,checked:!0})}}))},getMoney:function(){var e=0;for(var t in this.arr)e+=2*this.arr[t]["zhu"];return e},subZhu:function(e){this.arr[e]["zhu"]>1&&this.arr[e]["zhu"]--},addZhu:function(e){this.arr[e]["zhu"]++},starBlur_:function(e){this.arr[e]["zhu"]<1&&(this.arr[e]["zhu"]=1)},starBlur:function(e,t){e.detail.value<1&&(this.arr[t]["zhu"]=1)},getExpectAward:function(){var e=this.clone(this.arr),t=0,i=0,r=e.sort((function(e,t){return(e["one_award"]*e["zhu"]).toFixed(2)-(t["one_award"]*t["zhu"]).toFixed(2)}));return t=(r[0]["one_award"]*r[0]["zhu"]).toFixed(2),i=(r[e.length-1]["one_award"]*r[e.length-1]["zhu"]).toFixed(2),t+"~"+i},findMinIndex:function(e){var t=0,i=1e7;for(var r in e)e[r]["one_award"]*e[r]["zhu"]<i&&(i=e[r]["one_award"]*e[r]["zhu"],t=r);return t},clone:function(e){var t;if(e instanceof Array){t=[];var i=e.length;while(i--)t[i]=this.clone(e[i]);return t}if(e instanceof Object){for(var r in t={},e)t[r]=this.clone(e[r]);return t}return e},changeDisplay:function(e){this.$refs[e][0].$el.style.display="none"!=this.$refs[e][0].$el.style.display?"none":"block"},check:function(e){e!=this.cur_index&&(this.cur_index=e,0==e&&this.setPingJunArr(),1==e&&this.setBoReArr(),2==e&&this.setBoLengArr())},setPingJunArr:function(){var e=this.money/2-this.games.length,t=[];for(var i in this.games){var r=2;for(var n in this.games[i])r*=parseFloat(this.games[i][n]["pl"]);var a={zhu:1};a["one_award"]=r,t[i]=a}for(var o=this.clone(t),c=0;c<e;c++){var s=this.findMinIndex(o);t[s]["zhu"]=t[s]["zhu"]+1,o[s]["zhu"]=t[s]["zhu"]+1}this.arr=t},setBoReArr:function(){this.setPingJunArr();var e=1e6,t=0;for(var i in this.arr)this.arr[i]["one_award"]<e&&(e=this.arr[i]["one_award"],t=i);var r=0;for(var n in this.arr)if(n!=t)while(this.arr[n]["one_award"]*(this.arr[n]["zhu"]-1)>this.money)this.arr[n]["zhu"]=this.arr[n]["zhu"]-1,r++;this.arr[t]["zhu"]=this.arr[t]["zhu"]+r},setBoLengArr:function(){this.setPingJunArr();var e=0,t=0;for(var i in this.arr)this.arr[i]["one_award"]>e&&(e=this.arr[i]["one_award"],t=i);var r=0;for(var n in this.arr)if(n!=t)while(this.arr[n]["one_award"]*(this.arr[n]["zhu"]-1)>this.money)this.arr[n]["zhu"]=this.arr[n]["zhu"]-1,r++;this.arr[t]["zhu"]=this.arr[t]["zhu"]+r}}};t.default=o},f720:function(e,t,i){var r=i("d58e");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=i("4f06").default;n("5d5cf0dc",r,!0,{sourceMap:!1,shadowMode:!1})}}]);