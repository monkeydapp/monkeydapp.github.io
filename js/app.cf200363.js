(function(e){function t(t){for(var n,r,o=t[0],_=t[1],c=t[2],p=0,u=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&u.push(a[r][0]),a[r]=0;for(n in _)Object.prototype.hasOwnProperty.call(_,n)&&(e[n]=_[n]);l&&l(t);while(u.length)u.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],n=!0,o=1;o<i.length;o++){var _=i[o];0!==a[_]&&(n=!1)}n&&(s.splice(t--,1),e=r(r.s=i[0]))}return e}var n={},a={app:0},s=[];function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=n,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/monkeydapp/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],_=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=_;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var n=i("64a9"),a=i.n(n);a.a},1:function(e,t){},"1d45":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return MonkeyEngine}));var _media_bakaking_Brav_bounties_monkeydapp_web_node_modules_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("768b"),regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("96cf"),regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__),_media_bakaking_Brav_bounties_monkeydapp_web_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("3b8d"),core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("f559"),core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("28a5"),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4__),_media_bakaking_Brav_bounties_monkeydapp_web_node_modules_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("d225"),_media_bakaking_Brav_bounties_monkeydapp_web_node_modules_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("b0b4"),Web3=__webpack_require__("6314"),MonkeyEngine=function(){function MonkeyEngine(e,t,i,n){Object(_media_bakaking_Brav_bounties_monkeydapp_web_node_modules_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["a"])(this,MonkeyEngine),this.web3=new Web3(new Web3.providers.HttpProvider(e)),this.senderPk=t,this.sender=this.web3.eth.accounts.privateKeyToAccount(t).address,this.gasPrice=i,this.script=n}return Object(_media_bakaking_Brav_bounties_monkeydapp_web_node_modules_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["a"])(MonkeyEngine,[{key:"parse",value:function(){var e=this.script.split("\n"),t=e.length;this.params=[],this.env={};for(var i=0;i<t;i++)if(e[i].startsWith("PARAM")){var n=e[i].split(" ")[1];this.params.push(n),this.env[n]=e[++i]}}},{key:"run",value:function(){var _run=Object(_media_bakaking_Brav_bounties_monkeydapp_web_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["a"])(regeneratorRuntime.mark((function _callee(onProgress){var lines,lc,i,p,bytecode,abi,params,_ref,_ref2,address;return regeneratorRuntime.wrap((function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:lines=this.script.split("\n"),lc=lines.length,i=0;case 3:if(!(i<lc)){_context.next=19;break}if(!lines[i].startsWith("DEPLOY")){_context.next=16;break}return p=lines[i].split(" ")[1],bytecode=lines[++i],abi=eval(lines[++i]),params=eval(lines[++i]),_context.next=11,this.deployContract(bytecode,abi,params);case 11:_ref=_context.sent,_ref2=Object(_media_bakaking_Brav_bounties_monkeydapp_web_node_modules_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["a"])(_ref,1),address=_ref2[0],this.env[p]=address,onProgress(p,address);case 16:i++,_context.next=3;break;case 19:case"end":return _context.stop()}}),_callee,this)})));function run(e){return _run.apply(this,arguments)}return run}()},{key:"sendTx",value:function(){var e=Object(_media_bakaking_Brav_bounties_monkeydapp_web_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["a"])(regeneratorRuntime.mark((function e(t){var i,n,a,s,r,o,_,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t._parent.options.address,n=t.encodeABI(),a=this.sender,s=5e6,r=this.gasPrice,e.next=7,this.web3.eth.getTransactionCount(this.sender);case 7:return o=e.sent,e.next=10,this.web3.eth.net.getId();case 10:return _=e.sent,c={from:a,to:i,nonce:o,data:n,gas:s,chainId:_,gasPrice:r},e.next=14,this.web3.eth.accounts.signTransaction(c,this.senderPk);case 14:return l=e.sent,e.abrupt("return",this.web3.eth.sendSignedTransaction(l.rawTransaction,{from:this.sender}));case 16:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"deployContract",value:function(){var e=Object(_media_bakaking_Brav_bounties_monkeydapp_web_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["a"])(regeneratorRuntime.mark((function e(t,i,n){var a,s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new this.web3.eth.Contract(i),s=a.deploy({data:"0x"+t,arguments:n}),e.next=4,this.sendTx(s);case 4:return r=e.sent,a.options.address=r.contractAddress,e.abrupt("return",[r.contractAddress,a]);case 7:case"end":return e.stop()}}),e,this)})));function t(t,i,n){return e.apply(this,arguments)}return t}()}]),MonkeyEngine}()},2:function(e,t){},3:function(e,t){},3297:function(e,t,i){e.exports=i.p+"img/logo_2.65f08339.png"},4:function(e,t){},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("div",{staticClass:"container is-fluid",attrs:{id:"app"}},[i("div",{staticClass:"columns"},[i("div",{staticClass:"column is-one-third",staticStyle:{"background-image":"linear-gradient(#eceaea, #ffffff)","background-attachment":"fixed"}},[i("div",{staticClass:"sticky"},[e._m(0),i("b-field",{staticStyle:{"margin-top":"30px"},attrs:{grouped:""}},[i("b-field",{attrs:{label:"RPC Server"}},[i("b-input",{attrs:{required:""},model:{value:e.rpcServer,callback:function(t){e.rpcServer=t},expression:"rpcServer"}})],1),i("b-field",{attrs:{label:"Gas price",expanded:""}},[i("b-input",{attrs:{type:"number",min:"0",required:""},model:{value:e.gasPrice,callback:function(t){e.gasPrice=t},expression:"gasPrice"}})],1)],1),i("b-field",{attrs:{label:"Private key"}},[i("b-input",{attrs:{type:"password",required:"","password-reveal":""},model:{value:e.privateKey,callback:function(t){e.privateKey=t},expression:"privateKey"}})],1)],1)]),i("div",{staticClass:"column"},[i("b-tabs",{staticClass:"block",attrs:{type:"is-boxed"},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[i("b-tab-item",{attrs:{label:"All",icon:"view-list"}},e._l(e.items,(function(t,n){return i("AppItem",{key:n,attrs:{item:t},on:{view:e.onViewClick}})})),1),i("b-tab-item",{attrs:{label:"Favourite",icon:"heart",disabled:!e.liked.length}},e._l(e.likedItems,(function(t,n){return i("AppItem",{key:n,attrs:{item:t},on:{view:e.onViewClick}})})),1),i("b-tab-item",{attrs:{label:"Installed",icon:"download",disabled:!e.installed.length}},e._l(e.installedItems,(function(t,n){return i("AppItem",{key:n,attrs:{item:t},on:{view:e.onViewClick}})})),1),i("b-tab-item",{attrs:{label:"Monkeyfile",icon:"script",disabled:!0}})],1)],1)])]),i("b-modal",{attrs:{active:e.isViewModalActive,width:"90%","can-cancel":["x"]},on:{"update:active":function(t){e.isViewModalActive=t}}},[i("AppDetail",{attrs:{rpcServer:e.rpcServer,privateKey:e.privateKey,gasPrice:parseInt(e.gasPrice),item:e.detail},on:{liked:e.onLikeClick,deployed:e.onDeployed}})],1)],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("figure",{staticClass:"image",staticStyle:{"padding-top":"30px"}},[n("img",{attrs:{src:i("3297"),alt:"Placeholder image"}})])}],r=(i("6762"),i("2fdb"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("article",{staticClass:"media"},[i("figure",{staticClass:"media-left"},[i("p",{staticClass:"image is-64x64"},[i("img",{attrs:{src:e.getImgUrl()}})])]),i("div",{staticClass:"media-content"},[i("div",{staticClass:"content"},[i("p",[i("strong",[e._v(e._s(e.item.name))]),e.item.available?i("b-tag",[e._v("Community")]):e._e(),e.item.available?e._e():i("b-tag",[e._v("Coming soon")]),i("br"),e._v("\n        "+e._s(e.item.desc)+"\n      ")],1)]),i("nav",{staticClass:"level is-mobile"},[i("div",{staticClass:"level-left"},[i("b-taglist",[i("b-tag",{attrs:{type:e.item.available?"is-info":""}},[e._v("Matic")]),i("b-tag",{attrs:{type:e.item.available?"is-info":""}},[e._v("Ganache")]),i("b-tag",{attrs:{type:e.item.available?"is-info":""}},[e._v("Rinkeby")]),i("b-tag",{attrs:{type:e.item.available?"is-info":""}},[e._v("Ropsten")]),i("b-tag",[e._v("Poa")]),i("b-tag",[e._v("Mainnet")])],1)],1)])]),i("div",{staticClass:"media-right"},[e.item.available?i("b-button",{attrs:{type:"is-link",size:"is-medium","icon-left":"download"},on:{click:e.onViewClick}}):e._e()],1)])}),o=[],_={name:"AppItem",props:{item:Object},methods:{getImgUrl:function(){return"/hub/".concat(this.$props.item.id,"/card.jpg")},onViewClick:function(){this.$emit("view",this.$props.item.id)}}},c=_,l=i("2877"),p=Object(l["a"])(c,r,o,!1,null,null,null),u=p.exports,d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"card",staticStyle:{height:"100%","overflow-y":"scroll"}},[i("div",{staticClass:"card-content"},[i("article",{staticClass:"media"},[i("figure",{staticClass:"media-left"},[i("p",{staticClass:"image is-128x128"},[i("img",{attrs:{src:e.getImgUrl()}})])]),i("div",{staticClass:"media-content"},[i("div",{staticClass:"content"},[i("h3",[e._v(e._s(e.item.name))]),i("p",[e._v(e._s(e.item.desc))])])]),i("div",{staticClass:"media-right"},[i("span",{staticStyle:{cursor:"pointer"},on:{click:e.onLikeClick}},[i("b-icon",{attrs:{icon:"heart",type:e.isLiked?"is-primary":""}})],1)])])]),i("div",{staticStyle:{position:"relative"}},[i("b-tabs",{attrs:{type:"is-boxed"},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[i("b-tab-item",{attrs:{label:"Info",icon:"information"}},[i("div",{staticClass:"b-table"},[i("div",{staticClass:"table-wrapper"},[i("table",{staticClass:"table has-mobile-cards"},[i("tbody",[i("tr",[i("td",{staticClass:"strong"},[e._v("Website")]),i("td",[i("a",{attrs:{href:e.item.website,target:"_blank"}},[e._v(e._s(e.item.website))])])]),i("tr",[i("td",{staticClass:"strong"},[e._v("Network")]),i("td",[i("b-taglist",[i("b-tag",{attrs:{type:"is-info"}},[e._v("Matic")]),i("b-tag",{attrs:{type:"is-info"}},[e._v("Ganache")]),i("b-tag",{attrs:{type:"is-info"}},[e._v("Rinkeby")]),i("b-tag",{attrs:{type:"is-info"}},[e._v("Ropsten")]),i("b-tag",[e._v("Poa")]),i("b-tag",[e._v("Mainnet")])],1)],1)]),i("tr",[i("td",{staticClass:"strong"},[e._v("Contributor")]),i("td",[i("b-tag",[e._v("Community")])],1)]),i("tr",[i("td",{staticClass:"strong"},[e._v("Version")]),i("td",[i("b-taglist",[i("b-tag",{attrs:{type:"is-info"}},[e._v("latest")])],1)],1)]),i("tr",[i("td",{staticClass:"strong"},[e._v("Updated")]),i("td",[i("b-tag",{attrs:{type:"is-info"}},[e._v("03/10/2019")])],1)])])])])])]),i("b-tab-item",{attrs:{label:"Deploy",icon:"download"}},[e._l(e.params,(function(t,n){return i("b-field",{key:n,attrs:{horizontal:""}},[i("template",{slot:"label"},[e._v("\n            "+e._s(t)+"\n            "),i("b-tooltip",{attrs:{type:"is-dark",label:"Help text here for explanation"}},[i("b-icon",{attrs:{size:"is-small",icon:"help-circle-outline"}})],1)],1),i("b-input",{attrs:{type:"text",placeholder:t,required:""},model:{value:e.env[t],callback:function(i){e.$set(e.env,t,i)},expression:"env[item]"}})],2)})),i("b-field",{attrs:{horizontal:""}},[i("p",{staticClass:"control"},[i("button",{staticClass:"button is-primary",on:{click:function(t){return e.deploy()}}},[e._v("Deploy")])])])],2),i("b-tab-item",{attrs:{label:"Instances",icon:"briefcase",disabled:!e.instances.length}},[e._l(e.instances,(function(t,n){return i("b-message",{key:n,attrs:{type:"is-success"}},[i("ul",e._l(t,(function(t,n){return i("li",{key:n,staticClass:"field"},[i("strong",[e._v(e._s(t.name))]),e._v(" deployed at\n              "),i("strong",[e._v(e._s(t.address))])])})),0)])})),e.newInstance.length?i("b-message",{attrs:{type:"error"==e.newInstance[e.newInstance.length-1].type?"is-danger":"is-info"}},[i("ul",e._l(e.newInstance,(function(t,n){return i("li",{key:n,staticClass:"field"},["deploy"==t.type?i("p",[i("strong",[e._v(e._s(t.name))]),e._v(" deployed at\n                "),i("strong",[e._v(e._s(t.address))])]):e._e(),"error"==t.type?i("p",[i("strong",[e._v(e._s(t.err))])]):e._e()])})),0)]):e._e()],2)],1),i("b-loading",{attrs:{"is-full-page":!1,active:e.isDeploying},on:{"update:active":function(t){e.isDeploying=t}}})],1)])},b=[],m=(i("6b54"),i("96cf"),i("3b8d")),v=(i("c5f6"),i("1d45")),h={props:{item:Object,rpcServer:String,privateKey:String,gasPrice:Number},data:function(){return{instances:[],newInstance:[],params:[],env:{},activeTab:1,isLiked:!1,isDeploying:!1,me:null}},created:function(){this.$props.item.instances&&(this.instances=this.$props.item.instances,this.activeTab=2),this.isLiked=this.$props.item.isLiked,this.getDataFromApi()},methods:{getImgUrl:function(){return"/hub/".concat(this.$props.item.id,"/card.jpg")},getDataFromApi:function(){var e=this;this.$axios.get("/hub/".concat(this.$props.item.id,"/monkeyfile")).then((function(t){e.me=new v["a"](e.$props.rpcServer,e.$props.privateKey,parseInt(e.$props.gasPrice),t.data),e.me.parse(),e.params=e.me.params,e.env=e.me.env}))},onLikeClick:function(){this.isLiked=!this.isLiked,this.$emit("liked",this.$props.item.id)},deploy:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.activeTab=2,this.isDeploying=!0,t=this,e.prev=3,e.next=6,this.me.run((function(e,i){t.newInstance.push({type:"deploy",name:e,address:i})}));case 6:this.instances.push(this.newInstance),this.newInstance=[],this.$emit("deployed",this.$props.item.id,this.instances),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](3),t.newInstance.push({type:"error",err:e.t0.toString()});case 14:this.isDeploying=!1;case 15:case"end":return e.stop()}}),e,this,[[3,11]])})));function t(){return e.apply(this,arguments)}return t}()}},f=h,g=(i("91d4"),Object(l["a"])(f,d,b,!1,null,null,null)),k=g.exports,y={name:"app",components:{AppItem:u,AppDetail:k},data:function(){return{activeTab:0,isViewModalActive:!1,items:[],liked:[],installed:[],instances:{},logs:"",detail:null,rpcServer:"http://127.0.0.1:7545",privateKey:"0xcc90ad96b5bac509225d6d429e030428b90777c73c6b958826933d489b6c8f9b",gasPrice:0}},computed:{likedItems:function(){var e=this;return this.items.filter((function(t){return e.liked.includes(t.id)}))},installedItems:function(){var e=this;return this.items.filter((function(t){return e.installed.includes(t.id)}))}},created:function(){var e=localStorage.getItem("liked");e&&(this.liked=JSON.parse(e)),this.getDataFromApi()},methods:{getDataFromApi:function(){var e=this;this.$axios.get("/hub/list.json").then((function(t){e.items=t.data}))},onLikeClick:function(e){if(this.liked.includes(e)){var t=this.liked.indexOf(e);t>-1&&(this.liked.splice(t,1),0==this.liked.length&&1==this.activeTab&&(this.activeTab=0))}else this.liked.push(e);localStorage.setItem("liked",JSON.stringify(this.liked))},onViewClick:function(e){for(var t in this.items)this.items[t].id==e&&(this.detail=this.items[t],this.detail.instances=this.instances[e],this.detail.isLiked=this.liked.includes(e));this.isViewModalActive=!0},onDeployed:function(e,t){this.installed.push(e),this.instances[e]=t},check:function(){var e=i("6314"),t=new e(new e.providers.HttpProvider(this.rpcServer)),n=t.eth.accounts.privateKeyToAccount(this.privateKey).address,a=this;t.eth.net.getId().then((function(e){a.logs+=e+"\n"})),t.eth.getBalance(n,(function(e,t){a.logs+=t+"\n"}))}}},w=y,C=(i("034f"),Object(l["a"])(w,a,s,!1,null,null,null)),E=C.exports,P=i("289d"),O=i("bc3a"),x=i.n(O);i("5abe");n["a"].use(P["a"]),n["a"].prototype.$axios=x.a,n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(E)}}).$mount("#app")},"56e7":function(e,t){function i(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}i.keys=function(){return[]},i.resolve=i,e.exports=i,i.id="56e7"},"64a9":function(e,t,i){},"91d4":function(e,t,i){"use strict";var n=i("e769"),a=i.n(n);a.a},e769:function(e,t,i){}});
//# sourceMappingURL=app.cf200363.js.map