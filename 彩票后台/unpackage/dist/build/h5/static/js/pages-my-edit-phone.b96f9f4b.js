(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-edit-phone"],{"00cb":function(t,i,a){"use strict";a.r(i);var e=a("3478"),n=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(i,t,(function(){return e[t]}))}(c);i["default"]=n.a},1446:function(t,i,a){"use strict";a.r(i);var e=a("d551"),n=a("d87f");for(var c in n)"default"!==c&&function(t){a.d(i,t,(function(){return n[t]}))}(c);a("5ce7");var o,s=a("f0c5"),r=Object(s["a"])(n["default"],e["b"],e["c"],!1,null,"07a26db6",null,!1,e["a"],o);i["default"]=r.exports},"1ef0":function(t,i,a){"use strict";var e=a("3985"),n=a.n(e);n.a},"2aa4":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".cu-form-group[data-v-64fadd08]{position:relative}.cu-form-group uni-input[data-v-64fadd08]{text-align:right;padding-right:0}.cu-form-group.code .text-btn[data-v-64fadd08]{margin-left:%?27.27?%}",""]),t.exports=i},3478:function(t,i,a){"use strict";var e=a("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("1446")),c=e(a("c98d")),o={components:{barTitle:n.default},data:function(){return{state:!1,totalTime:120,recordingTime:0,currentTime:0}},onLoad:function(){},onReady:function(){c.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{checking:function(){this.currentTime=this.totalTime,this.state=!0,this.checkingTime()},checkingTime:function(){var t=this;this.state&&this.currentTime>0&&this.recordingTime<=this.totalTime?(this.recordingTime=this.recordingTime+1,this.currentTime=this.totalTime-this.recordingTime,setTimeout((function(){t.checkingTime()}),1e3)):(this.state=!1,this.recordingTime=0,this.currentTime=this.totalTime)}}};i.default=o},"36ab":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};i.default=e},3985:function(t,i,a){var e=a("2aa4");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("60ad9546",e,!0,{sourceMap:!1,shadowMode:!1})},"5ce7":function(t,i,a){"use strict";var e=a("c3f7"),n=a.n(e);n.a},6394:function(t,i,a){"use strict";a.r(i);var e=a("a54d"),n=a("00cb");for(var c in n)"default"!==c&&function(t){a.d(i,t,(function(){return n[t]}))}(c);a("1ef0");var o,s=a("f0c5"),r=Object(s["a"])(n["default"],e["b"],e["c"],!1,null,"64fadd08",null,!1,e["a"],o);i["default"]=r.exports},a54d:function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return c})),a.d(i,"a",(function(){return e}));var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("bar-title",{attrs:{bgColor:"bg-white",isBack:!0}},[a("template",{attrs:{slot:"content"},slot:"content"},[t._v("手机号换绑")]),a("template",{attrs:{slot:"right"},slot:"right"},[a("v-uni-text",{staticClass:"text-orange"},[t._v("保存")])],1)],2),a("v-uni-view",{staticClass:"text-black text-center margin-top padding"},[t._v("完成短信验证进行换绑手机号")]),a("v-uni-view",{staticClass:"cu-list menu sm-border margin-top"},[a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content"},[t._v("当前手机号")]),a("v-uni-view",{staticClass:"action"},[t._v("138****8000")])],1)],1),a("v-uni-view",{staticClass:"cu-form-group solid-top"},[a("v-uni-view",{staticClass:"title"},[t._v("新手机号")]),a("v-uni-input",{attrs:{value:""}})],1),a("v-uni-view",{staticClass:"cu-form-group code"},[a("v-uni-view",{staticClass:"title"},[t._v("验证码")]),a("v-uni-input",{attrs:{value:""}}),t.state?a("v-uni-text",{staticClass:"text-orange text-btn"},[t._v(t._s(t.currentTime)+"s")]):a("v-uni-text",{staticClass:"text-orange text-btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.checking.apply(void 0,arguments)}}},[t._v("发送验证码")])],1),a("v-uni-view",{staticClass:"text-sm text-gray padding-sm"},[t._v("验证码将会发送到您的手机号中~")]),a("v-uni-view",{staticClass:"bg-white wecanui-footer-fixed foot-pb"},[a("v-uni-view",{staticClass:"flex flex-direction padding-sm"},[a("v-uni-button",{staticClass:"cu-btn bg-red"},[t._v("换绑手机号")])],1)],1)],1)},c=[]},c3f7:function(t,i,a){var e=a("efa8");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("1c62c9d9",e,!0,{sourceMap:!1,shadowMode:!1})},d551:function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return c})),a.d(i,"a",(function(){return e}));var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"zaiui-bar-title-box"},[a("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.BackPage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"}),a("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),a("v-uni-view",{staticClass:"content",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?a("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},c=[]},d87f:function(t,i,a){"use strict";a.r(i);var e=a("36ab"),n=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(i,t,(function(){return e[t]}))}(c);i["default"]=n.a},efa8:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-07a26db6]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-07a26db6]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-07a26db6]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-07a26db6]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-07a26db6]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-07a26db6]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-07a26db6]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=i}}]);