(self.webpackChunkreact_overlay_layer=self.webpackChunkreact_overlay_layer||[]).push([[179],{42126:(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__(3012).configure)([__webpack_require__(24597),__webpack_require__(73192)],module,!1)},26663:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{parameters:()=>parameters});__webpack_require__(47941),__webpack_require__(82526),__webpack_require__(57327),__webpack_require__(38880),__webpack_require__(89554),__webpack_require__(54747),__webpack_require__(49337),__webpack_require__(33321),__webpack_require__(69070);var client_api=__webpack_require__(32545),esm=__webpack_require__(59400),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.kg.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,client_api.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,client_api.HZ)(loader,!1)}));case"parameters":return(0,client_api.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,client_api.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,client_api._C)(enhancer)}));case"render":return(0,client_api.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,client_api.h1)(v,!1);default:return console.log(key+" was not supported :( !")}}))},76986:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__(3012)},194:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,OverlayDim:()=>OverlayDim});__webpack_require__(24812),__webpack_require__(19601),__webpack_require__(67294);var _src_hooks_overlay_useOverlay__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(10146),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(85893);const __WEBPACK_DEFAULT_EXPORT__={title:"Overlay/Basic"};var Popup=function Popup(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{width:300,height:300,background:"cadetblue",border:"solid 1px black",borderRadius:3,position:"absolute",top:"calc(50% - 150px)",left:"calc(50% - 150px)"},children:"팝업"})};Popup.displayName="Popup";var Template=function Template(){var overlay=(0,_src_hooks_overlay_useOverlay__WEBPACK_IMPORTED_MODULE_3__.I)((function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Popup,{})}),{dim:!0});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{onClick:function onClick(){overlay.open()},children:"Open with dim option"})};Template.displayName="Template";var OverlayDim=Template.bind({});OverlayDim.parameters=Object.assign({storySource:{source:"() => {\n    const overlay = useOverlay(() => <Popup/>, {dim: true});\n\n    const onClick = () => {\n        overlay.open();\n    };\n\n    return (\n        <button onClick={onClick}>\n            Open with dim option\n        </button>\n    );\n}"}},OverlayDim.parameters);try{OverlayDim.displayName="OverlayDim",OverlayDim.__docgenInfo={description:"",displayName:"OverlayDim",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Overlay.dim.stories.tsx#OverlayDim"]={docgenInfo:OverlayDim.__docgenInfo,name:"OverlayDim",path:"stories/Overlay.dim.stories.tsx#OverlayDim"})}catch(__react_docgen_typescript_loader_error){}},8048:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,Overlay:()=>Overlay});__webpack_require__(24812),__webpack_require__(19601);var react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(67294),_src_main__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(525),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(85893);const __WEBPACK_DEFAULT_EXPORT__={title:"Overlay/Basic"};var Popup=function Popup(){var ov=(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_src_main__WEBPACK_IMPORTED_MODULE_3__.OverlayContext);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{style:{marginTop:300,marginLeft:300,width:300,height:300,background:"skyblue"},children:["HI THERE",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{onClick:function onClick(){return ov.close()},children:"CLOSE"})]})};Popup.displayName="Popup";var Template=function Template(){var overlay=(0,_src_main__WEBPACK_IMPORTED_MODULE_3__.useOverlay)((function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Popup,{})}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{onClick:overlay.opener,children:"HI"})})};Template.displayName="Template";var Overlay=Template.bind({});Overlay.parameters=Object.assign({storySource:{source:"() => {\n\n    const overlay = useOverlay(() => <Popup/>);\n\n    return (\n        <div>\n            <button onClick={overlay.opener}>HI</button>\n        </div>\n    );\n}"}},Overlay.parameters);try{Overlay.displayName="Overlay",Overlay.__docgenInfo={description:"",displayName:"Overlay",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Overlay.stories.tsx#Overlay"]={docgenInfo:Overlay.__docgenInfo,name:"Overlay",path:"stories/Overlay.stories.tsx#Overlay"})}catch(__react_docgen_typescript_loader_error){}},4100:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,OverlayTracer:()=>OverlayTracer});__webpack_require__(24812),__webpack_require__(19601),__webpack_require__(67294);var _src_main__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(525),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(85893);const __WEBPACK_DEFAULT_EXPORT__={title:"Overlay/OverlayTracer"};var Template=function Template(){var overlay=(0,_src_main__WEBPACK_IMPORTED_MODULE_3__.useTracerOverlayWithTracer)((function(ov){if(!ov.tracer.target.position)return null;var _ov$tracer$target$pos=ov.tracer.target.position,bottom=_ov$tracer$target$pos.bottom,left=_ov$tracer$target$pos.left;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{style:{top:bottom+10,left,width:300,height:300,background:"skyblue",position:"absolute"},children:["HI THERE",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{onClick:function onClick(){return ov.close()},children:"CLOSE"})]})}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{ref:overlay.tracer.target.ref,onClick:function onClick(){overlay.open()},children:"Open"})})};Template.displayName="Template";var OverlayTracer=Template.bind({});OverlayTracer.parameters=Object.assign({storySource:{source:"() => {\n    const overlay = useTracerOverlayWithTracer<HTMLButtonElement>(ov => {\n        if (!ov.tracer.target.position) {\n            return null;\n        }\n\n        const {bottom, left} = ov.tracer.target.position;\n\n        return (\n            <div style={{top: bottom + 10, left, width: 300, height: 300, background: 'skyblue', position: \"absolute\"}}>\n                HI THERE\n                <button onClick={() => ov.close()}>CLOSE</button>\n            </div>\n        );\n    });\n\n    const onClick = () => {\n        overlay.open();\n    };\n\n    return (\n        <div>\n            <button\n                ref={overlay.tracer.target.ref}\n                onClick={onClick}\n            >\n                Open\n            </button>\n        </div>\n    );\n}"}},OverlayTracer.parameters);try{OverlayTracer.displayName="OverlayTracer",OverlayTracer.__docgenInfo={description:"",displayName:"OverlayTracer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/OverlayTracer.stories.tsx#OverlayTracer"]={docgenInfo:OverlayTracer.__docgenInfo,name:"OverlayTracer",path:"stories/OverlayTracer.stories.tsx#OverlayTracer"})}catch(__react_docgen_typescript_loader_error){}},10146:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>useOverlay});__webpack_require__(79753),__webpack_require__(82526),__webpack_require__(41817),__webpack_require__(41539),__webpack_require__(32165),__webpack_require__(78783),__webpack_require__(66992),__webpack_require__(33948),__webpack_require__(47042),__webpack_require__(68309),__webpack_require__(91038);var react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(67294),_internal__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(34316);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function useOverlay(renderer,initialOption){var overlay=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_11__.useState)((function(){return new _internal__WEBPACK_IMPORTED_MODULE_12__.Overlay(renderer,initialOption)})),1)[0];(0,_internal__WEBPACK_IMPORTED_MODULE_12__.useOverlayCore)(overlay,renderer).mounted;return overlay}},34316:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Overlay:()=>Overlay,OverlayContext:()=>OverlayContext,OverlayLayer:()=>OverlayLayer,OverlayRenderOrder:()=>OverlayRenderOrder,OverlayStore:()=>OverlayStore,TracerOverlay:()=>TracerOverlay,defaultOverlayOption:()=>defaultOverlayOption,initializeOverlayGlobalRoot:()=>initializeOverlayGlobalRoot,useOverlay:()=>useOverlay.I,useOverlayCore:()=>useOverlayCore,useTracer:()=>useTracer,useTracerOverlay:()=>useTracerOverlay,useTracerOverlayWithTracer:()=>useTracerOverlayWithTracer});var OverlayRenderOrder;__webpack_require__(93376);!function(OverlayRenderOrder){OverlayRenderOrder.NORMAL="NORMAL",OverlayRenderOrder.FAST="FAST",OverlayRenderOrder.LATE="LATE"}(OverlayRenderOrder||(OverlayRenderOrder={}));__webpack_require__(69070);var mobx_esm=__webpack_require__(68949),react=__webpack_require__(67294);function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function defaultOverlayOption(option){var _option$order,_option$dim,_option$onClickOutsid;return{order:null!==(_option$order=null==option?void 0:option.order)&&void 0!==_option$order?_option$order:OverlayRenderOrder.NORMAL,dim:null!==(_option$dim=null==option?void 0:option.dim)&&void 0!==_option$dim&&_option$dim,onCloseOutside:null!==(_option$onClickOutsid=null==option?void 0:option.onClickOutside)&&void 0!==_option$onClickOutsid?_option$onClickOutsid:function(){return!0}}}var idx=1,Overlay=function(){function Overlay(renderer,option){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Overlay),this.id="overlay-"+idx++,this._opened=!1,this._renderer=void 0,this.order=void 0,this.dim=void 0,this.onCloseOutside=void 0,this.opener=function(){_this.toggle()};var opt=defaultOverlayOption(option);this.order=opt.order,this.dim=opt.dim,this.onCloseOutside=opt.onCloseOutside,this._renderer=renderer,(0,mobx_esm.rC)(this,{_opened:mobx_esm.LO,_renderer:mobx_esm.LO,order:mobx_esm.LO,dim:mobx_esm.LO,renderer:mobx_esm.Fl,open:mobx_esm.aD,close:mobx_esm.aD})}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Overlay,[{key:"toggle",value:function toggle(){this.opened?this.close():this.open()}},{key:"open",value:function open(){this._opened=!0}},{key:"close",value:function close(){this._opened=!1}},{key:"remove",value:function remove(){OverlayStore.getGlobalStore().remove(this.id)}},{key:"updateRenderer",value:function updateRenderer(renderer){this.renderer=renderer}},{key:"renderer",get:function get(){var _this$_renderer;return null!==(_this$_renderer=this._renderer)&&void 0!==_this$_renderer?_this$_renderer:function(){return null}},set:function set(renderer){var _this2=this;(0,mobx_esm.z)((function(){_this2._renderer=renderer}))}},{key:"opened",get:function get(){return this._opened}},{key:"getOverriddenObservable",value:function getOverriddenObservable(){return{_opened:mobx_esm.KG,_renderer:mobx_esm.KG,order:mobx_esm.KG,dim:mobx_esm.KG,renderer:mobx_esm.KG,open:mobx_esm.KG,close:mobx_esm.KG}}}]),Overlay}(),OverlayContext=react.createContext({});__webpack_require__(19601),__webpack_require__(68304),__webpack_require__(30489),__webpack_require__(74819),__webpack_require__(38880),__webpack_require__(12419),__webpack_require__(78011);function tracerOverlay_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _get(target,property,receiver){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function _get(target,property,receiver){var base=function _superPropBase(object,property){for(;!Object.prototype.hasOwnProperty.call(object,property)&&null!==(object=_getPrototypeOf(object)););return object}(target,property);if(base){var desc=Object.getOwnPropertyDescriptor(base,property);return desc.get?desc.get.call(receiver):desc.value}})(target,property,receiver||target)}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}var TracerOverlay=function(_Overlay){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(TracerOverlay,_Overlay);var _super=_createSuper(TracerOverlay);function TracerOverlay(renderer,option){var _thisSuper,_this;!function tracerOverlay_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TracerOverlay),(_this=_super.call(this,renderer,option)).tracer=void 0;var opt=function defaultTracerOverlayOption(option){return Object.assign({},defaultOverlayOption(option),{tracer:option.tracer})}(option);return _this.tracer=opt.tracer,(0,mobx_esm.rC)(_assertThisInitialized(_this),Object.assign({},_get((_thisSuper=_assertThisInitialized(_this),_getPrototypeOf(TracerOverlay.prototype)),"getOverriddenObservable",_thisSuper).call(_thisSuper),{tracer:mobx_esm.LO.ref})),_this}return function tracerOverlay_createClass(Constructor,protoProps,staticProps){return protoProps&&tracerOverlay_defineProperties(Constructor.prototype,protoProps),staticProps&&tracerOverlay_defineProperties(Constructor,staticProps),Constructor}(TracerOverlay,[{key:"open",value:function open(){_get(_getPrototypeOf(TracerOverlay.prototype),"open",this).call(this),this.tracer.activate()}},{key:"close",value:function close(){_get(_getPrototypeOf(TracerOverlay.prototype),"close",this).call(this),this.tracer.deactivate()}},{key:"getOverriddenObservable",value:function getOverriddenObservable(){return Object.assign({},_get(_getPrototypeOf(TracerOverlay.prototype),"getOverriddenObservable",this).call(this),{tracer:mobx_esm.KG})}}]),TracerOverlay}(Overlay);__webpack_require__(21249),__webpack_require__(69826),__webpack_require__(89554),__webpack_require__(54747),__webpack_require__(92222),__webpack_require__(57327);function overlayStore_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var OverlayStore=function(){function OverlayStore(){var _this=this;!function overlayStore_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,OverlayStore),this.overlays=mobx_esm.LO.map(),this.downedTarget=null,this.upTarget=null,this.currentDownedOverlayId=null,(0,mobx_esm.rC)(this,{register:mobx_esm.aD,remove:mobx_esm.aD,items:mobx_esm.Fl,openedItems:mobx_esm.Fl,lastOpenedItemId:mobx_esm.Fl}),window.addEventListener("mousedown",(function(event){_this.downedTarget=event.target,_this.currentDownedOverlayId=_this.lastOpenedItemId})),window.addEventListener("mouseup",(function(event){_this.upTarget=event.target})),window.addEventListener("click",(function(event){var currentId=_this.currentDownedOverlayId;if(currentId&&currentId===_this.lastOpenedItemId){var dom=document.querySelector(".rol-overlay-layer[data-overlay-id="+currentId+"]"),overlay=_this.getItem(currentId);if(dom&&overlay){var shouldClose=!1;overlay.dim?dom===_this.downedTarget&&dom===_this.upTarget&&dom===event.target&&document.body.contains(event.target)&&(shouldClose=!0):dom.contains(event.target)||(shouldClose=!0),!shouldClose||overlay.onCloseOutside&&!overlay.onCloseOutside(overlay)||_this.close(currentId)}}}))}return function overlayStore_createClass(Constructor,protoProps,staticProps){return protoProps&&overlayStore_defineProperties(Constructor.prototype,protoProps),staticProps&&overlayStore_defineProperties(Constructor,staticProps),Constructor}(OverlayStore,[{key:"register",value:function register(overlay){this.overlays.set(overlay.id,overlay)}},{key:"remove",value:function remove(id){var _this$overlays$get;null===(_this$overlays$get=this.overlays.get(id))||void 0===_this$overlays$get||_this$overlays$get.close(),this.overlays.delete(id)}},{key:"open",value:function open(id){var _this$overlays$get2;null===(_this$overlays$get2=this.overlays.get(id))||void 0===_this$overlays$get2||_this$overlays$get2.open()}},{key:"close",value:function close(id){var _this$overlays$get3;null===(_this$overlays$get3=this.overlays.get(id))||void 0===_this$overlays$get3||_this$overlays$get3.close()}},{key:"getItem",value:function getItem(id){var _this$items$find,_this$items;return null!==(_this$items$find=null===(_this$items=this.items)||void 0===_this$items?void 0:_this$items.find((function(v){return v.id===id})))&&void 0!==_this$items$find?_this$items$find:null}},{key:"items",get:function get(){var normal=[],fast=[],late=[];return this.overlays.forEach((function(overlay){switch(overlay.order){case OverlayRenderOrder.FAST:fast.push(overlay);break;case OverlayRenderOrder.LATE:late.push(overlay);break;case OverlayRenderOrder.NORMAL:default:normal.push(overlay)}})),[].concat(fast,normal,late)}},{key:"openedItems",get:function get(){return this.items.filter((function(v){return null==v?void 0:v.opened}))}},{key:"lastOpenedItemId",get:function get(){var _this$openedItems$id,_this$openedItems;return null!==(_this$openedItems$id=null===(_this$openedItems=this.openedItems[this.openedItems.length-1])||void 0===_this$openedItems?void 0:_this$openedItems.id)&&void 0!==_this$openedItems$id?_this$openedItems$id:null}}],[{key:"getGlobalStore",value:function getGlobalStore(){return this.global||(this.global=new OverlayStore),this.global}}]),OverlayStore}();OverlayStore.global=void 0;__webpack_require__(79753),__webpack_require__(82526),__webpack_require__(41817),__webpack_require__(41539),__webpack_require__(32165),__webpack_require__(78783),__webpack_require__(66992),__webpack_require__(33948),__webpack_require__(47042),__webpack_require__(68309),__webpack_require__(91038);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function useTracer(){var ref=(0,react.useRef)(null),_useState2=_slicedToArray((0,react.useState)(!1),2),activated=_useState2[0],setActivated=_useState2[1],_useState4=_slicedToArray((0,react.useState)(null),2),position=_useState4[0],setPosition=_useState4[1],loop=(0,react.useCallback)((function(){!function calculate(){if(ref.current){var _ref$current$getBound=ref.current.getBoundingClientRect(),top=_ref$current$getBound.top,left=_ref$current$getBound.left,right=_ref$current$getBound.right,bottom=_ref$current$getBound.bottom;setPosition({top,left,right,bottom,width:right-left,height:bottom-top})}}(),activated&&requestAnimationFrame(loop)}),[activated]),activate=(0,react.useCallback)((function(){activated||setActivated(!0)}),[activated]),deactivate=(0,react.useCallback)((function(){activated&&setActivated(!1)}),[activated]);return(0,react.useEffect)((function(){return activated&&loop(),function(){activated&&deactivate()}}),[activated,deactivate,loop]),{activated,activate,deactivate,target:{ref,position}}}function useOverlayCore_slicedToArray(arr,i){return function useOverlayCore_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function useOverlayCore_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function useOverlayCore_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return useOverlayCore_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return useOverlayCore_arrayLikeToArray(o,minLen)}(arr,i)||function useOverlayCore_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function useOverlayCore_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function useOverlayCore(overlay,renderer){var store=OverlayStore.getGlobalStore(),_useState2=useOverlayCore_slicedToArray((0,react.useState)(!1),2),mounted=_useState2[0],setMounted=_useState2[1];return(0,react.useEffect)((function(){setMounted(!0)}),[]),(0,react.useEffect)((function(){return store.register(overlay),function(){return overlay.remove()}}),[overlay,store]),(0,react.useEffect)((function(){mounted&&overlay.updateRenderer(renderer)}),[mounted,overlay,renderer]),{mounted}}var useOverlay=__webpack_require__(10146);function useTracerOverlay_slicedToArray(arr,i){return function useTracerOverlay_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function useTracerOverlay_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function useTracerOverlay_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return useTracerOverlay_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return useTracerOverlay_arrayLikeToArray(o,minLen)}(arr,i)||function useTracerOverlay_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function useTracerOverlay_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function useTracerOverlay(renderer,initialOption){var overlay=useTracerOverlay_slicedToArray((0,react.useState)((function(){return new TracerOverlay(renderer,initialOption)})),1)[0];useOverlayCore(overlay,renderer).mounted;return overlay}function useTracerOverlayWithTracer(renderer,initialOption){var tracer=useTracer(),overlay=useTracerOverlay(renderer,Object.assign({},initialOption,{tracer}));return(0,react.useEffect)((function(){(0,mobx_esm.z)((function(){overlay.tracer=tracer}))}),[overlay.tracer,tracer]),overlay}var es=__webpack_require__(12938),injectStylesIntoStyleTag=__webpack_require__(93379),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__(7795),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__(90569),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__(3565),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__(19216),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__(44589),styleTagTransform_default=__webpack_require__.n(styleTagTransform),overlayLayer=__webpack_require__(18051),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(overlayLayer.Z,options);overlayLayer.Z&&overlayLayer.Z.locals&&overlayLayer.Z.locals;var jsx_runtime=__webpack_require__(85893),OverlayLayer=(0,es.Pi)((function(_ref){var _renderer,overlay=_ref.overlay,renderer=overlay.renderer,dim=overlay.dim;return(0,jsx_runtime.jsx)("div",{className:"rol-overlay-layer "+(dim?"dim":""),"data-overlay-id":overlay.id,children:(0,jsx_runtime.jsx)(OverlayContext.Provider,{value:overlay,children:null!==(_renderer=renderer(overlay))&&void 0!==_renderer?_renderer:null})})}));try{OverlayLayer.displayName="OverlayLayer",OverlayLayer.__docgenInfo={description:"",displayName:"OverlayLayer",props:{overlay:{defaultValue:null,description:"",name:"overlay",required:!0,type:{name:"Overlay"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/view/layer/OverlayLayer.tsx#OverlayLayer"]={docgenInfo:OverlayLayer.__docgenInfo,name:"OverlayLayer",path:"src/view/layer/OverlayLayer.tsx#OverlayLayer"})}catch(__react_docgen_typescript_loader_error){}var react_dom=__webpack_require__(73935),OverlayRoot=(0,es.Pi)((function(props){var _openedItems$map,id=props.id,className=props.className,openedItems=props.store.openedItems;return(0,jsx_runtime.jsx)("div",{id,className,children:null!==(_openedItems$map=null==openedItems?void 0:openedItems.map((function(overlay){return(0,jsx_runtime.jsx)(OverlayLayer,{overlay},overlay.id)})))&&void 0!==_openedItems$map?_openedItems$map:[]})}));function initializeOverlayGlobalRoot(container){var props=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};react_dom.render((0,jsx_runtime.jsx)(OverlayRoot,Object.assign({},props,{store:OverlayStore.getGlobalStore()})),container)}try{OverlayRoot.displayName="OverlayRoot",OverlayRoot.__docgenInfo={description:"",displayName:"OverlayRoot",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},store:{defaultValue:null,description:"",name:"store",required:!0,type:{name:"OverlayStore"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/view/OverlayRoot.tsx#OverlayRoot"]={docgenInfo:OverlayRoot.__docgenInfo,name:"OverlayRoot",path:"src/view/OverlayRoot.tsx#OverlayRoot"})}catch(__react_docgen_typescript_loader_error){}},525:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{OverlayContext:()=>_internal__WEBPACK_IMPORTED_MODULE_0__.OverlayContext,useOverlay:()=>_internal__WEBPACK_IMPORTED_MODULE_0__.useOverlay,useTracerOverlayWithTracer:()=>_internal__WEBPACK_IMPORTED_MODULE_0__.useTracerOverlayWithTracer});var _internal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(34316),root=document.createElement("div");root.id="react-overlay-layer-global-root",document.body.appendChild(root),(0,_internal__WEBPACK_IMPORTED_MODULE_0__.initializeOverlayGlobalRoot)(root)},93376:()=>{},18051:(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(94015),_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(23645),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rol-overlay-layer{top:0;left:0;right:0;height:0;position:fixed;z-index:9999}.rol-overlay-layer.dim{height:100%;background:rgba(0,0,0,.3)}","",{version:3,sources:["webpack://./src/view/layer/overlayLayer.scss"],names:[],mappings:"AAAA,mBACE,KAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,cAAA,CACA,YAAA,CAEA,uBACE,WAAA,CACA,yBAAA",sourcesContent:[":global .rol-overlay-layer {\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 0;\n  position: fixed;\n  z-index: 9999;\n\n  &.dim {\n    height: 100%;\n    background: rgba(0, 0, 0, .3);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},73192:(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./Overlay.dim.stories.tsx":194,"./Overlay.stories.tsx":8048,"./OverlayTracer.stories.tsx":4100};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=73192},24597:module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id=24597,module.exports=webpackEmptyContext},24654:()=>{}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[362],(()=>(__webpack_exec__(37707),__webpack_exec__(99669),__webpack_exec__(76986),__webpack_exec__(45158),__webpack_exec__(699),__webpack_exec__(59746),__webpack_exec__(84873),__webpack_exec__(62853),__webpack_exec__(81953),__webpack_exec__(22609),__webpack_exec__(64049),__webpack_exec__(21424),__webpack_exec__(26663),__webpack_exec__(42126))));__webpack_require__.O()}]);