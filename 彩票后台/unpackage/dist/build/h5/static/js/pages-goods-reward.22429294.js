(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-reward"],{1446:function(t,a,e){"use strict";e.r(a);var i=e("d551"),n=e("d87f");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("5ce7");var c,r=e("f0c5"),u=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"07a26db6",null,!1,i["a"],c);a["default"]=u.exports},"17be":function(t,a,e){"use strict";var i=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("1446")),o=i(e("c98d")),c={components:{barTitle:n.default},data:function(){return{}},onReady:function(){o.default.setBarColor(!1),uni.pageScrollTo({scrollTop:0,duration:0})}};a.default=c},"35cf":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("bar-title",{attrs:{bgColor:"bg-red"}},[e("template",{attrs:{slot:"content"},slot:"content"},[t._v("打赏")])],2),e("v-uni-view",{staticClass:"padding bg-white"},[e("v-uni-image",{attrs:{src:"/static/images/reward/zfb.png",mode:"widthFix"}}),e("v-uni-image",{attrs:{src:"/static/images/reward/wx.png",mode:"widthFix"}})],1)],1)},o=[]},"36ab":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};a.default=i},"3d7f":function(t,a,e){var i=e("f366");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("03e7167c",i,!0,{sourceMap:!1,shadowMode:!1})},"5ce7":function(t,a,e){"use strict";var i=e("c3f7"),n=e.n(i);n.a},a3ad:function(t,a,e){"use strict";e.r(a);var i=e("35cf"),n=e("cfb1");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("a3e4");var c,r=e("f0c5"),u=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"2d157b02",null,!1,i["a"],c);a["default"]=u.exports},a3e4:function(t,a,e){"use strict";var i=e("3d7f"),n=e.n(i);n.a},c3f7:function(t,a,e){var i=e("efa8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("1c62c9d9",i,!0,{sourceMap:!1,shadowMode:!1})},cfb1:function(t,a,e){"use strict";e.r(a);var i=e("17be"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},d551:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"zaiui-bar-title-box"},[e("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?e("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-back"}),e("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():e("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),e("v-uni-view",{staticClass:"content",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),e("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?e("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},o=[]},d87f:function(t,a,e){"use strict";e.r(a);var i=e("36ab"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},efa8:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-07a26db6]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-07a26db6]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-07a26db6]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-07a26db6]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-07a26db6]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-07a26db6]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-07a26db6]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=a},f366:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,"uni-image[data-v-2d157b02]{width:100%}",""]),t.exports=a}}]);