webpackJsonp([1],{"+B2k":function(t,s,e){"use strict";var a=e("m3es"),i=e.n(a),n=e("Jn7X");s.a={props:{selectFoods:{type:Array,default:function(){return[{price:30,count:15}]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],fold:!0}},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){if(0===this.totalPrice)return"￥"+this.minPrice+"元起送";if(this.totalPrice<this.minPrice){return"还差￥"+(this.minPrice-this.totalPrice)+"元起送"}return"去结算"},payClass:function(){return this.totalPrice<this.minPrice?"not-enough":"enough"},listShow:function(){var t=this;if(!this.totalCount)return this.fold=!0,!1;var s=!this.fold;return s&&this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new i.a(t.$refs.listContent,{click:!0})}),s}},methods:{drop:function(t){console.log(t);for(var s=0;s<this.balls.length;s++){var e=this.balls[s];if(!e.show)return e.show=!0,e.el=t,void this.dropBalls.push(e)}},beforeEnter:function(t){for(var s=this.balls.length;s--;){var e=this.balls[s];if(e.show){var a=e.el.getBoundingClientRect(),i=a.left-32,n=-(window.innerHeight-a.top-22);t.style.display="",t.style.webkitTransform="translate3d(0, "+n+"px, 0)",t.style.transform="translate3d(0, "+n+"px, 0)";var o=t.getElementsByClassName("inner-hook")[0];o.style.webkitTransform="translate3d("+i+"px, 0, 0)",o.style.transform="translate3d("+i+"px, 0, 0)"}}},enter:function(t){t.offsetHeight;this.$nextTick(function(){t.style.webkitTransform="translate3d(0, 0, 0)",t.style.transform="translate3d(0, 0, 0)";var s=t.getElementsByClassName("inner-hook")[0];s.style.webkitTransform="translate3d(0, 0, 0)",s.style.transform="translate3d(0, 0, 0)"})},afterEnter:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")},toggleList:function(){this.totalCount&&(this.fold=!this.fold)},empty:function(){this.selectFoods.forEach(function(t){t.count=0})},hideList:function(){this.fold=!0},pay:function(){this.totalPrice<this.minPrice||window.alert("请您支付"+this.totalPrice+"元")}},components:{cartcontrol:n.a}}},"/VxO":function(t,s,e){"use strict";function a(t,s,e){var a=window.localStorage.__seller__;a?(a=JSON.parse(a),a[t]||(a[t]={})):(a={},a[t]={}),a[t][s]=e,window.localStorage.__seller__=o()(a)}function i(t,s,e){var a=window.localStorage.__seller__;return a?(a=JSON.parse(a),a[t]?a[t][s]||e:e):e}s.b=a,s.a=i;var n=e("3cXf"),o=e.n(n)},"/ooO":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"star",class:t.starType},t._l(t.itemClasses,function(t,s){return e("span",{staticClass:"star-item",class:t})}))},i=[],n={render:a,staticRenderFns:i};s.a=n},"0iua":function(t,s,e){"use strict";s.a={props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number,default:2},onlyContent:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},data:function(){return{sele:this.selectType,onlyContent2:this.onlyContent}},methods:{select:function(t,s){s._constructed&&(this.sele=t,console.log(this.sele),this.$root.eventHub.$emit("ratingtype.select",t))},toggleContent:function(t){t._constructed&&(this.onlyContent2=!this.onlyContent2,console.log(this.onlyContent2),this.$root.eventHub.$emit("content.toggle",this.onlyContent2))}},computed:{positives:function(){return this.ratings.filter(function(t){return 0===t.rateType})},negatives:function(){return this.ratings.filter(function(t){return 1===t.rateType})}}}},"1LJY":function(t,s,e){"use strict";var a=e("9cao");s.a={props:{seller:{type:Object}},data:function(){return{supports:[],popupShow:!1}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},methods:{popupBtn:function(){this.popupShow=!0},popupHide:function(){this.popupShow=!1}},components:{star:a.a}}},"7RV1":function(t,s,e){"use strict";var a=e("C0qC");s.a={props:{food:{type:Object}},created:function(){},methods:{addCart:function(t){t._constructed&&(this.food.count?this.food.count++:a.a.set(this.food,"count",1),this.$emit("increment",t.target))},decreaseCart:function(t){t._constructed&&this.food.count&&this.food.count--}}}},"7qt+":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratingselect"},[e("div",{staticClass:"rating-type border-1px"},[e("span",{staticClass:"block positive",class:{active:2===t.selectType},on:{click:function(s){t.select(2,s)}}},[t._v(t._s(t.desc.all)),e("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),t._v(" "),e("span",{staticClass:"block positive",class:{active:0===t.selectType},on:{click:function(s){t.select(0,s)}}},[t._v(t._s(t.desc.positive)),e("span",{staticClass:"count"},[t._v(t._s(t.positives.length))])]),t._v(" "),e("span",{staticClass:"block negative",class:{active:1===t.selectType},on:{click:function(s){t.select(1,s)}}},[t._v(t._s(t.desc.negative)),e("span",{staticClass:"count"},[t._v(t._s(t.negatives.length))])])]),t._v(" "),e("div",{staticClass:"switch",class:{on:t.onlyContent},on:{click:t.toggleContent}},[e("i",{staticClass:"icon-check_circle"}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},i=[],n={render:a,staticRenderFns:i};s.a=n},"8J2q":function(t,s,e){"use strict";function a(t){e("L+o7")}var i=e("i8Fm"),n=e("j1gk"),o=e("46Yf"),r=a,c=o(i.a,n.a,!1,r,null,null);s.a=c.exports},"991W":function(t,s){},"9cao":function(t,s,e){"use strict";function a(t){e("XMqb")}var i=e("irSE"),n=e("/ooO"),o=e("46Yf"),r=a,c=o(i.a,n.a,!1,r,null,null);s.a=c.exports},Ag2r:function(t,s,e){"use strict";var a=e("9cao"),i=e("fJdx"),n=e("m3es"),o=e.n(n),r=e("/VxO");s.a={props:{seller:{type:Object}},components:{star:a.a,split:i.a},data:function(){var t=this;return{favorite:function(){return Object(r.a)(t.seller.id,"favorite",!1)}()}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},mounted:function(){var t=this;if(this.scroll=new o.a(this.$refs.seller,{click:!0}),this.seller.pics){var s=126*this.seller.pics.length-6;this.$refs.picList.style.width=s+"px",this.$nextTick(function(){t.picScroll=new o.a(t.$refs.picWrapper,{scrollX:!0,eventPassthrough:"vertical"})})}},computed:{favoriteText:function(){return this.favorite?"已收藏":"收藏"}},methods:{toggleFavorite:function(t){t._constructed&&(this.favorite=!this.favorite,Object(r.b)(this.seller.id,"favorite",this.favorite))}}}},BEgy:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("my-header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tabs"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("评价")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)]),t._v(" "),e("div",{staticClass:"content"},[e("keep-alive",[e("router-view",{attrs:{seller:t.seller}})],1)],1)],1)},i=[],n={render:a,staticRenderFns:i};s.a=n},CaK3:function(t,s,e){"use strict";function a(t){e("p2oa")}var i=e("1LJY"),n=e("WsTh"),o=e("46Yf"),r=a,c=o(i.a,n.a,!1,r,null,null);s.a=c.exports},CjGD:function(t,s){},DICR:function(t,s,e){"use strict";var a=e("aA9S"),i=e.n(a),n=e("CaK3"),o=e("yEoQ"),r=e.n(o),c=e("LOkV");s.a={name:"app",components:{myHeader:n.a},data:function(){return{seller:{id:function(){return Object(c.a)().id}()}}},created:function(){var t=this;r.a.get("/api/seller").then(function(s){var e=s.data;t.seller=i()({},t.seller,e.data)}).catch(function(t){console.log(t)})}}},Gu9P:function(t,s){},I9qK:function(t,s,e){"use strict";function a(t,s){/(y+)/.test(s)&&(s=s.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var e={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var a in e)if(new RegExp("("+a+")").test(s)){var n=e[a]+"";s=s.replace(RegExp.$1,1===RegExp.$1.length?n:i(n))}return s}function i(t){return("00"+t).substr(t.length)}s.a=a},Jn7X:function(t,s,e){"use strict";function a(t){e("CjGD")}var i=e("7RV1"),n=e("XOpf"),o=e("46Yf"),r=a,c=o(i.a,n.a,!1,r,null,null);s.a=c.exports},KOSp:function(t,s){},KRKn:function(t,s){},"L+o7":function(t,s){},LOkV:function(t,s,e){"use strict";function a(){var t=decodeURIComponent(window.location.search),s={},e=/[?&][^?&]+=[^?&]+/g,a=t.match(e);return a&&a.forEach(function(t){var e=t.substring(1).split("="),a=decodeURIComponent(e[0]),i=decodeURIComponent(e[1]);s[a]=i}),s}s.a=a},M93x:function(t,s,e){"use strict";function a(t){e("KOSp")}var i=e("DICR"),n=e("BEgy"),o=e("46Yf"),r=a,c=o(i.a,n.a,!1,r,null,null);s.a=c.exports},Mvxp:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("C0qC"),i=e("zO6J"),n=e("M93x"),o=e("dfnC"),r=e("aLsr"),c=e("ZWu5"),l=e("991W"),u=(e.n(l),e("VaBq"));e.n(u);a.a.use(i.a);var v=new i.a({routes:[{path:"/goods",component:o.a},{path:"/ratings",component:r.a},{path:"/seller",component:c.a},{path:"/",redirect:"/goods"}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:v,render:function(t){return t(n.a)},data:{eventHub:new a.a},template:"<App/>",components:{App:n.a}})},"Sg+K":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return null!=t.seller?e("div",{ref:"seller",staticClass:"seller"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"overview"},[e("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"desc border-1px"},[e("star",{attrs:{size:36,score:t.seller.score}}),t._v(" "),e("span",{staticClass:"text"},[t._v("("+t._s(t.seller.ratingCount)+")")]),t._v(" "),e("span",{staticClass:"text"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),t._v(" "),e("ul",{staticClass:"remark"},[e("li",{staticClass:"block"},[e("h2",[t._v("起送价")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))]),t._v("元\n          ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("商家配送")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元\n          ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟\n          ")])])]),t._v(" "),e("div",{staticClass:"favorite",on:{click:t.toggleFavorite}},[e("i",{staticClass:"icon-favorite",class:{active:t.favorite}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.favoriteText))])])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"bulletin"},[e("h1",{staticClass:"title"},[t._v("公告与活动")]),t._v(" "),e("div",{staticClass:"content-wrapper border-1px"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,a){return e("li",{staticClass:"support-item border-1px"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[a].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[a].description))])])})):t._e()]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"pics"},[e("h1",{staticClass:"title"},[t._v("商家实景")]),t._v(" "),e("div",{ref:"picWrapper",staticClass:"pic-wrapper"},[e("ul",{ref:"picList",staticClass:"pic-list"},t._l(t.seller.pics,function(t){return e("li",{staticClass:"pic-item"},[e("img",{attrs:{src:t,width:"120",height:"90"}})])}))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"info"},[e("h1",{staticClass:"title border-1px"},[t._v("商家信息")]),t._v(" "),e("ul",t._l(t.seller.infos,function(s){return e("li",{staticClass:"info-item border-1px"},[t._v(t._s(s))])}))])],1)]):t._e()},i=[],n={render:a,staticRenderFns:i};s.a=n},VaBq:function(t,s){},WsTh:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return null!=t.seller?e("div",{staticClass:"header"},[e("div",{staticClass:"header-content"},[e("div",{staticClass:"header-content-left"},[e("img",{attrs:{src:t.seller.avatar,alt:""}})]),t._v(" "),e("div",{staticClass:"header-content-right"},[e("div",{staticClass:"right-content"},[e("span",{staticClass:"brand"}),e("span",{staticClass:"brand-name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"description"},[t._v(t._s(t.seller.description)+" "),e("i",[t._v("/")]),t._v(" "+t._s(t.seller.deliveryTime)+"分钟送达")]),t._v(" "),null!=t.seller.supports?e("div",{staticClass:"decrease"},[e("span",{staticClass:"decrease-jian"}),e("span",{staticClass:"decrease-jian-content"},[t._v(t._s(t.seller.supports[0].description)+" , 满50减10")])]):t._e()])]),t._v(" "),e("div",{staticClass:"button-res",on:{click:t.popupBtn}},[null!=t.seller.supports?e("span",[t._v(t._s(t.seller.supports.length)+"个")]):t._e(),e("span",{staticClass:"icon-keyboard_arrow_right"})])]),t._v(" "),t.seller?e("div",{staticClass:"pub",on:{click:t.popupBtn}},[e("span",{staticClass:"pub-pic"}),e("span",{staticClass:"pub-content"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e(),t._v(" "),t.seller?e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%",alt:""}})]):t._e(),t._v(" "),t.seller?e("div",{directives:[{name:"show",rawName:"v-show",value:t.popupShow,expression:"popupShow"}],staticClass:"popup"},[e("div",{staticClass:"popup-wrapper clearfix"},[e("div",{staticClass:"popup-main"},[e("div",{staticClass:"popup-title"},[e("span",{staticClass:"popup-title-content"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"star-level"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),t._m(0),t._v(" "),null!=t.seller?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,a){return e("li",{staticClass:"support-item"},[e("span",{staticClass:"icon decrease",class:t.classMap[t.seller.supports[a].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[a].description))])])})):t._e(),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"bulletin-content"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("p",{staticClass:"bulletin-content"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("p",{staticClass:"bulletin-content"},[t._v(t._s(t.seller.bulletin))])])]),t._v(" "),e("div",{staticClass:"popup-close",on:{click:t.popupHide}},[e("span",{staticClass:"icon-close"})])])]):t._e()]):t._e()},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"discount"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"discount-text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"discount"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"discount-text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})])}],n={render:a,staticRenderFns:i};s.a=n},XMqb:function(t,s){},XOpf:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.decreaseCart(s)}}},[e("span",{staticClass:"inner  icon-remove_circle_outline"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"cart-add icon-add_circle",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.addCart(s)}}})],1)},i=[],n={render:a,staticRenderFns:i};s.a=n},XwTW:function(t,s,e){"use strict";s.a={data:function(){return{}},methods:{}}},YtwL:function(t,s){},ZWu5:function(t,s,e){"use strict";function a(t){e("YtwL")}var i=e("Ag2r"),n=e("Sg+K"),o=e("46Yf"),r=a,c=o(i.a,n.a,!1,r,null,null);s.a=c.exports},aLsr:function(t,s,e){"use strict";function a(t){e("Mvxp")}var i=e("myrW"),n=e("w1P1"),o=e("46Yf"),r=a,c=o(i.a,n.a,!1,r,null,null);s.a=c.exports},aXxN:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("i",{staticClass:"icon-shopping_cart",class:{highlight:t.totalCount>0}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{highlight:t.totalPrice>0}},[t._v("￥"+t._s(t.totalPrice))]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.pay(s)}}},[e("div",{staticClass:"pay",class:t.payClass},[t._v("\n        "+t._s(t.payDesc)+"\n      ")])])]),t._v(" "),e("div",{staticClass:"ball-container"},t._l(t.balls,function(s){return e("div",[e("transition",{attrs:{name:"drop"},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])])],1)})),t._v(" "),e("transition",{attrs:{name:"fold"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),e("div",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s){return e("li",{staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s}})],1)])}))])])])],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-mask",on:{click:t.hideList}})])],1)},i=[],n={render:a,staticRenderFns:i};s.a=n},dfnC:function(t,s,e){"use strict";function a(t){e("Gu9P")}var i=e("n4E4"),n=e("gOR/"),o=e("46Yf"),r=a,c=o(i.a,n.a,!1,r,null,null);s.a=c.exports},e9KK:function(t,s,e){"use strict";function a(t){e("KRKn")}var i=e("0iua"),n=e("7qt+"),o=e("46Yf"),r=a,c=o(i.a,n.a,!1,r,null,null);s.a=c.exports},fJdx:function(t,s,e){"use strict";function a(t){e("odEE")}var i=e("XwTW"),n=e("jRI3"),o=e("46Yf"),r=a,c=o(i.a,n.a,!1,r,null,null);s.a=c.exports},"gOR/":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return null!=t.seller?e("div",{staticClass:"goods"},[t.goods?e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,a){return e("li",{staticClass:"menu-item",class:{current:t.currentIndex===a},on:{click:function(s){t.selectMenu(a,s)}}},[e("span",{staticClass:"text border-1px"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v(t._s(s.name)+"\n        ")])])}))]):t._e(),t._v(" "),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s){return e("li",{staticClass:"food-list food-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{staticClass:"food-item border-1px",on:{click:function(e){t.selectFood(s,e)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"57",height:"57",src:s.icon,alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"份")]),t._v(" "),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s},on:{increment:t.incrementTotal}})],1)])])}))])}))]),t._v(" "),e("shopcart",{ref:"shopcart",attrs:{"select-foods":t.selectFoods,"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice}}),t._v(" "),e("food",{ref:"food",attrs:{food:t.selectedFood}})],1):t._e()},i=[],n={render:a,staticRenderFns:i};s.a=n},i8Fm:function(t,s,e){"use strict";var a=e("m3es"),i=e.n(a),n=e("C0qC"),o=(e("xSw9"),e("Jn7X")),r=e("fJdx"),c=e("e9KK"),l=e("I9qK");s.a={props:{food:{type:Object}},data:function(){return{showFlag:!1,selectType:2,onlyContent:!0,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},methods:{show:function(){var t=this;this.showFlag=!0,this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new i.a(t.$refs.food,{click:!0})})},hide:function(){this.showFlag=!1},addFirst:function(t){console.log("点击测试"),t._constructed&&(console.log(t.target),this.$emit("increment",t.target),n.a.set(this.food,"count",1))},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)}},created:function(){var t=this;this.$root.eventHub.$on("ratingtype.select",function(s){t.selectType=s,t.$nextTick(function(){t.scroll.refresh()})}),this.$root.eventHub.$on("content.toggle",function(s){t.onlyContent=s,t.$nextTick(function(){t.scroll.refresh()})})},components:{cartcontrol:o.a,split:r.a,ratingselect:c.a},filters:{formatDate:function(t){var s=new Date(t);return Object(l.a)(s,"yyyy-MM-dd hh:mm")}}}},irSE:function(t,s,e){"use strict";s.a={props:{size:{type:Number},score:{type:Number}},data:function(){return{}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0,a=Math.floor(s),i=0;i<a;i++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}},methods:{}}},j1gk:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],ref:"food",staticClass:"food"},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"image-header"},[e("img",{attrs:{src:t.food.image,alt:""}}),t._v(" "),e("div",{staticClass:"back",on:{click:t.hide}},[e("i",{staticClass:"icon-arrow_lift"})])]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount))]),t._v(" "),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:t.food}})],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count||0===t.food.count,expression:"!food.count || food.count === 0"}],staticClass:"buy",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.addFirst(s)}}},[t._v("加入购物车\n            ")])])],1),t._v(" "),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商品信息")]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("ratingselect",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,desc:t.desc,ratings:t.food.ratings}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.food.ratings&&t.food.ratings.length,expression:"food.ratings && food.ratings.length"}]},t._l(t.food.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType, rating.text)"}],staticClass:"rating-item border-1px"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("img",{staticClass:"avatar",attrs:{src:s.avatar,width:"12",height:"12"}})]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))]),t._v(" "),e("div",{staticClass:"text"},[e("span",{class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}}),t._v(t._s(s.text)+"\n                  ")])])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.ratings||!t.food.ratings.length,expression:"!food.ratings || !food.ratings.length"}],staticClass:"no-rating"},[t._v("暂无评价")])])],1)],1)])])},i=[],n={render:a,staticRenderFns:i};s.a=n},jRI3:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{staticClass:"split"})},i=[],n={render:a,staticRenderFns:i};s.a=n},myrW:function(t,s,e){"use strict";var a=e("yEoQ"),i=e.n(a),n=e("I9qK"),o=e("9cao"),r=e("fJdx"),c=e("e9KK"),l=e("m3es"),u=e.n(l);s.a={props:{seller:{type:Object}},data:function(){return{ratings:[],selectType:2,onlyContent:!0,desc:{all:"全部",positive:"满意",negative:"不满意"}}},created:function(){var t=this,s=this;i.a.get("/api/ratings").then(function(e){s.ratings=e.data.data,s.$nextTick(function(){t.scroll=new u.a(t.$refs.ratings,{click:!0})})}).catch(function(t){console.log(t)}),this.$root.eventHub.$on("ratingtype.select",function(s){t.selectType=s,t.$nextTick(function(){t.scroll.refresh()})}),this.$root.eventHub.$on("content.toggle",function(s){t.onlyContent=s,t.$nextTick(function(){t.scroll.refresh()})})},components:{star:o.a,ratingselect:c.a,split:r.a},methods:{select:function(t){var s=this;this.selectType=t,this.$nextTick(function(){s.scroll.refresh()})},onlyContent2:function(t){var s=this;this.onlyContent=t,this.$nextTick(function(){s.scroll.refresh()})},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)}},filters:{formatDate:function(t){var s=new Date(t);return Object(n.a)(s,"yyyy-MM-dd hh:mm")}}}},n4E4:function(t,s,e){"use strict";var a=e("m3es"),i=e.n(a),n=e("xSw9"),o=e("Jn7X"),r=e("8J2q"),c=e("yEoQ"),l=e.n(c);s.a={props:["seller"],data:function(){return{goods:[],listHeight:[],scrollY:0,selectedFood:{}}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"];var t=this;l.a.get("/api/goods").then(function(s){t.goods=s.data.data,t.$nextTick(function(){t._initScroll(),t._calculateHeight()})}).catch(function(t){console.log(t)})},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},methods:{selectMenu:function(t,s){if(s._constructed){var e=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook"),a=e[t];this.foodsScroll.scrollToElement(a,300)}},selectFood:function(t,s){s._constructed&&(this.selectedFood=t,this.$refs.food.show())},incrementTotal:function(t){var s=this;this.$nextTick(function(){s.$refs.shopcart.drop(t)})},_initScroll:function(){var t=this;this.menuScroll=new i.a(this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new i.a(this.$refs.foodsWrapper,{click:!0,probeType:3}),this.foodsScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook"),s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}}},components:{shopcart:n.a,cartcontrol:o.a,food:r.a},events:{"cart.add":function(t){this._drop(t)}}}},odEE:function(t,s){},p2oa:function(t,s){},w1P1:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return null!=t.seller?e("div",{ref:"ratings",staticClass:"ratings"},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"overview-left"},[e("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"title"},[t._v("综合评分")]),t._v(" "),e("div",{staticClass:"rank"},[t._v("高于周边商家"+t._s(t.seller.rankRate))])]),t._v(" "),e("div",{staticClass:"overview-right"},[e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.serviceScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("商品评分")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.foodScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"delivery-wrapper"},[e("span",{staticClass:"title"},[t._v("送达时间")]),t._v(" "),e("span",{staticClass:"delivery"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("split"),t._v(" "),e("ratingselect",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,desc:t.desc,ratings:t.ratings},on:{select:t.select,onlyContent2:t.onlyContent2}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",t._l(t.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType, rating.text)"}],staticClass:"rating-item border-1px"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,width:"28",height:"28"}})]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:24,score:s.score}}),t._v(" "),s.deliveryTime?e("span",{staticClass:"delivery"},[t._v(t._s(s.deliveryTime))]):t._e()],1),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(s.text))]),t._v(" "),s.recommend&&s.recommend.length?e("div",{staticClass:"recommend"},[e("i",{staticClass:"icon-thumb_up"}),t._v(" "),t._l(s.recommend,function(s){return e("span",{staticClass:"item"},[t._v(t._s(s))])})],2):t._e(),t._v(" "),e("div",{staticClass:"time"},[t._v("\n              "+t._s(t._f("formatDate")(s.rateTime))+"\n            ")])])])}))])],1)]):t._e()},i=[],n={render:a,staticRenderFns:i};s.a=n},xSw9:function(t,s,e){"use strict";function a(t){e("zdLT")}var i=e("+B2k"),n=e("aXxN"),o=e("46Yf"),r=a,c=o(i.a,n.a,!1,r,null,null);s.a=c.exports},zdLT:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.3d26682adfc13d6f70f6.js.map