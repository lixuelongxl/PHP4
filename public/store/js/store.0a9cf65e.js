(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["store"],{"194d":function(e,t,r){"use strict";r("e661")},"4d55":function(e,t,r){"use strict";r.d(t,"e",(function(){return i})),r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return l})),r.d(t,"d",(function(){return s})),r.d(t,"c",(function(){return d}));var a=r("b775"),n={list:"/store.address/list",all:"/store.address/all",add:"/store.address/add",edit:"/store.address/edit",delete:"/store.address/delete"};function i(e){return Object(a["b"])({url:n.list,method:"get",params:e})}function o(e){return Object(a["b"])({url:n.all,method:"get",params:e})}function l(e){return Object(a["b"])({url:n.add,method:"post",data:e})}function s(e){return Object(a["b"])({url:n.edit,method:"post",data:e})}function d(e){return Object(a["b"])({url:n.delete,method:"post",data:e})}},"88bc":function(e,t,r){(function(t){var r=1/0,a=9007199254740991,n="[object Arguments]",i="[object Function]",o="[object GeneratorFunction]",l="[object Symbol]",s="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,c=s||d||Function("return this")();function u(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function m(e,t){var r=-1,a=e?e.length:0,n=Array(a);while(++r<a)n[r]=t(e[r],r,e);return n}function f(e,t){var r=-1,a=t.length,n=e.length;while(++r<a)e[n+r]=t[r];return e}var p=Object.prototype,h=p.hasOwnProperty,b=p.toString,v=c.Symbol,g=p.propertyIsEnumerable,C=v?v.isConcatSpreadable:void 0,w=Math.max;function y(e,t,r,a,n){var i=-1,o=e.length;r||(r=q),n||(n=[]);while(++i<o){var l=e[i];t>0&&r(l)?t>1?y(l,t-1,r,a,n):f(n,l):a||(n[n.length]=l)}return n}function x(e,t){return e=Object(e),_(e,t,(function(t,r){return r in e}))}function _(e,t,r){var a=-1,n=t.length,i={};while(++a<n){var o=t[a],l=e[o];r(l,o)&&(i[o]=l)}return i}function S(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var r=arguments,a=-1,n=w(r.length-t,0),i=Array(n);while(++a<n)i[a]=r[t+a];a=-1;var o=Array(t+1);while(++a<t)o[a]=r[a];return o[t]=i,u(e,this,o)}}function q(e){return $(e)||j(e)||!!(C&&e&&e[C])}function F(e){if("string"==typeof e||A(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}function j(e){return O(e)&&h.call(e,"callee")&&(!g.call(e,"callee")||b.call(e)==n)}var $=Array.isArray;function L(e){return null!=e&&N(e.length)&&!I(e)}function O(e){return V(e)&&L(e)}function I(e){var t=k(e)?b.call(e):"";return t==i||t==o}function N(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}function k(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function V(e){return!!e&&"object"==typeof e}function A(e){return"symbol"==typeof e||V(e)&&b.call(e)==l}var R=S((function(e,t){return null==e?{}:x(e,m(y(t,1),F))}));e.exports=R}).call(this,r("c8ba"))},"976c":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",{attrs:{bordered:!1}},[r("div",{staticClass:"card-title"},[e._v(e._s(e.$route.meta.title))]),r("a-spin",{attrs:{spinning:e.isLoading}},[r("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[r("a-form-item",{attrs:{label:"商城名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["store_name",{rules:[{required:!0,min:2,message:"请输入至少2个字符"}]}],expression:"['store_name', {rules: [{required: true, min: 2, message: '请输入至少2个字符'}]}]"}]})],1),r("a-form-item",{attrs:{label:"商城简介",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["describe"],expression:"['describe']"}]})],1),r("a-form-item",{attrs:{label:"商城Logo",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"建议尺寸: 300*300"}},[r("SelectImage",{directives:[{name:"decorator",rawName:"v-decorator",value:["logo_image_id"],expression:"['logo_image_id']"}],attrs:{defaultList:e.record.logoImage?[e.record.logoImage]:[]}})],1),r("a-form-item",{attrs:{"wrapper-col":{span:e.wrapperCol.span,offset:e.labelCol.span}}},[r("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("提交")])],1)],1)],1)],1)},n=[],i=(r("d3b7"),r("88bc")),o=r.n(i),l=r("33ca"),s=r("2af9"),d={components:{SelectImage:s["e"]},data:function(){return{labelCol:{span:4},wrapperCol:{span:10},isLoading:!1,form:this.$form.createForm(this),record:{}}},created:function(){this.getDetail()},methods:{getDetail:function(){var e=this;this.isLoading=!0,l["a"]().then((function(t){e.record=t.data.storeInfo,e.setFieldsValue()})).finally((function(t){e.isLoading=!1}))},setFieldsValue:function(){var e=this.record,t=this.form.setFieldsValue;this.$nextTick((function(){t(o()(e,["store_name","describe","logo_image_id"]))}))},handleSubmit:function(e){var t=this;e.preventDefault();var r=this.form.validateFields;r((function(e,r){!e&&t.onFormSubmit(r)}))},onFormSubmit:function(e){var t=this;this.isLoading=!0,l["b"]({form:e}).then((function(e){t.$message.success(e.message,1.5)})).finally((function(e){t.isLoading=!1}))}}},c=d,u=(r("194d"),r("2877")),m=Object(u["a"])(c,a,n,!1,null,"6bc7e79e",null);t["default"]=m.exports},e661:function(e,t,r){},f30f:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",{attrs:{bordered:!1}},[r("div",{staticClass:"card-title"},[e._v(e._s(e.$route.meta.title))]),r("div",{staticClass:"table-operator"},[r("a-row",[r("a-col",{attrs:{span:5}},[r("a-button",{directives:[{name:"action",rawName:"v-action:add",arg:"add"}],attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")])],1),r("a-col",{staticClass:"flex flex-x-end",attrs:{span:11,offset:8}},[r("a-select",{staticStyle:{width:"220px","margin-right":"20px"},attrs:{placeholder:"请选择地址类型"},model:{value:e.queryParam.type,callback:function(t){e.$set(e.queryParam,"type",t)},expression:"queryParam.type"}},[r("a-select-option",{attrs:{value:0}},[e._v("全部")]),r("a-select-option",{attrs:{value:10}},[e._v("发货地址")]),r("a-select-option",{attrs:{value:20}},[e._v("退货地址")])],1),r("a-input-search",{staticStyle:{"max-width":"300px","min-width":"150px"},attrs:{placeholder:"请输入姓名/联系电话"},on:{search:e.onSearch},model:{value:e.queryParam.search,callback:function(t){e.$set(e.queryParam,"search",t)},expression:"queryParam.search"}})],1)],1)],1),r("s-table",{ref:"table",attrs:{rowKey:"address_id",loading:e.isLoading,columns:e.columns,data:e.loadData,pageSize:15},scopedSlots:e._u([{key:"full_address",fn:function(t){return r("span",{},[r("p",{staticClass:"twoline-hide",staticStyle:{width:"270px"}},[e._v(e._s(t))])])}},{key:"type",fn:function(t){return r("span",{},[r("a-tag",[e._v(e._s(10==t?"发货地址":"退货地址"))])],1)}},{key:"action",fn:function(t,a){return r("span",{},[r("a",{directives:[{name:"action",rawName:"v-action:edit",arg:"edit"}],staticStyle:{"margin-right":"8px"},on:{click:function(t){return e.handleEdit(a)}}},[e._v("编辑")]),r("a",{directives:[{name:"action",rawName:"v-action:delete",arg:"delete"}],on:{click:function(t){return e.handleDelete(a)}}},[e._v("删除")])])}}])}),r("AddForm",{ref:"AddForm",on:{handleSubmit:e.handleRefresh}}),r("EditForm",{ref:"EditForm",on:{handleSubmit:e.handleRefresh}})],1)},n=[],i=r("5530"),o=(r("d3b7"),r("4d55")),l=r("2af9"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:e.title,width:720,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-form",{attrs:{form:e.form}},[r("a-form-item",{attrs:{label:"地址类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{initialValue:10,rules:[{required:!0}]}],expression:"['type', {initialValue: 10, rules: [{required: true}]}]"}]},[r("a-radio",{attrs:{value:10}},[e._v("发货地址")]),r("a-radio",{attrs:{value:20}},[e._v("退货地址")])],1)],1),r("a-form-item",{attrs:{label:"联系人姓名",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入联系人姓名"}]}],expression:"['name', {rules: [{required: true, message: '请输入联系人姓名'}]}]"}]})],1),r("a-form-item",{attrs:{label:"联系电话",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["phone",{rules:[{required:!0,message:"请输入联系电话"}]}],expression:"['phone', {rules: [{required: true, message: '请输入联系电话'}]}]"}]})],1),r("a-form-item",{attrs:{label:"选择地区",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("SelectRegion",{directives:[{name:"decorator",rawName:"v-decorator",value:["cascader",{rules:[{required:!0,message:"请选择省市区"}]}],expression:"['cascader', {rules: [{required: true, message: '请选择省市区'}]}]"}],attrs:{placeholder:"请选择省市区"}})],1),r("a-form-item",{attrs:{label:"详细地址",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["detail",{rules:[{required:!0,message:"请输入详细地址"}]}],expression:"['detail', {rules: [{required: true, message: '请输入详细地址'}]}]"}]})],1),r("a-form-item",{attrs:{label:"排序",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"数字越小越靠前"}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:100,rules:[{required:!0,message:"请输入排序值"}]}],expression:"['sort', {initialValue: 100, rules: [{required: true, message: '请输入排序值'}]}]"}],attrs:{min:0}})],1)],1)],1)],1)},d=[],c={components:{SelectRegion:l["f"]},data:function(){return{title:"新增地址",labelCol:{span:7},wrapperCol:{span:13},visible:!1,confirmLoading:!1,form:this.$form.createForm(this)}},methods:{add:function(){this.visible=!0},handleSubmit:function(e){var t=this;e.preventDefault();var r=this.form.validateFields;r((function(e,r){!e&&t.onFormSubmit(r)}))},handleCancel:function(){this.visible=!1,this.form.resetFields()},onFormSubmit:function(e){var t=this;this.confirmLoading=!0,o["a"]({form:e}).then((function(r){t.$message.success(r.message,1.5),t.handleCancel(),t.$emit("handleSubmit",e)})).finally((function(){t.confirmLoading=!1}))}}},u=c,m=r("2877"),f=Object(m["a"])(u,s,d,!1,null,null,null),p=f.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:e.title,width:720,visible:e.visible,confirmLoading:e.confirmLoading,maskClosable:!1},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-form",{attrs:{form:e.form}},[r("a-form-item",{attrs:{label:"地址类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{initialValue:10,rules:[{required:!0}]}],expression:"['type', {initialValue: 10, rules: [{required: true}]}]"}]},[r("a-radio",{attrs:{value:10}},[e._v("发货地址")]),r("a-radio",{attrs:{value:20}},[e._v("退货地址")])],1)],1),r("a-form-item",{attrs:{label:"联系人姓名",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入联系人姓名"}]}],expression:"['name', {rules: [{required: true, message: '请输入联系人姓名'}]}]"}]})],1),r("a-form-item",{attrs:{label:"联系电话",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["phone",{rules:[{required:!0,message:"请输入联系电话"}]}],expression:"['phone', {rules: [{required: true, message: '请输入联系电话'}]}]"}]})],1),r("a-form-item",{attrs:{label:"选择地区",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("SelectRegion",{directives:[{name:"decorator",rawName:"v-decorator",value:["cascader",{rules:[{required:!0,message:"请选择省市区"}]}],expression:"['cascader', {rules: [{required: true, message: '请选择省市区'}]}]"}],attrs:{placeholder:"请选择省市区"}})],1),r("a-form-item",{attrs:{label:"详细地址",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["detail",{rules:[{required:!0,message:"请输入详细地址"}]}],expression:"['detail', {rules: [{required: true, message: '请输入详细地址'}]}]"}]})],1),r("a-form-item",{attrs:{label:"排序",labelCol:e.labelCol,wrapperCol:e.wrapperCol,extra:"数字越小越靠前"}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:100,rules:[{required:!0,message:"请输入排序值"}]}],expression:"['sort', {initialValue: 100, rules: [{required: true, message: '请输入排序值'}]}]"}],attrs:{min:0}})],1)],1)],1)],1)},b=[],v=r("88bc"),g=r.n(v),C={components:{SelectRegion:l["f"]},data:function(){return{title:"编辑地址",labelCol:{span:7},wrapperCol:{span:13},visible:!1,confirmLoading:!1,form:this.$form.createForm(this),record:{}}},methods:{edit:function(e){this.visible=!0,this.record=e,this.setFieldsValue()},setFieldsValue:function(){var e=this.record,t=this.form.setFieldsValue;e.cascader=[e.province_id,e.city_id,e.region_id],this.$nextTick((function(){t(g()(e,["type","name","phone","cascader","detail","sort"]))}))},handleSubmit:function(e){var t=this;e.preventDefault();var r=this.form.validateFields;r((function(e,r){!e&&t.onFormSubmit(r)}))},handleCancel:function(){this.visible=!1,this.form.resetFields()},onFormSubmit:function(e){var t=this;this.confirmLoading=!0,o["d"]({addressId:this.record.address_id,form:e}).then((function(r){t.$message.success(r.message,1.5),t.handleCancel(),t.$emit("handleSubmit",e)})).finally((function(){t.confirmLoading=!1}))}}},w=C,y=Object(m["a"])(w,h,b,!1,null,null,null),x=y.exports,_={name:"Index",components:{STable:l["c"],AddForm:p,EditForm:x},data:function(){var e=this;return{queryParam:{},isLoading:!1,columns:[{title:"地址ID",dataIndex:"address_id"},{title:"联系人姓名",dataIndex:"name"},{title:"联系电话",dataIndex:"phone"},{title:"详细地址",dataIndex:"full_address",scopedSlots:{customRender:"full_address"}},{title:"地址类型",dataIndex:"type",scopedSlots:{customRender:"type"}},{title:"排序",dataIndex:"sort"},{title:"添加时间",dataIndex:"create_time"},{title:"操作",dataIndex:"action",width:"180px",scopedSlots:{customRender:"action"}}],loadData:function(t){return o["e"](Object(i["a"])(Object(i["a"])({},t),e.queryParam)).then((function(e){return e.data.list}))}}},created:function(){},methods:{handleAdd:function(){this.$refs.AddForm.add()},handleEdit:function(e){this.$refs.EditForm.edit(e)},handleDelete:function(e){var t=this,r=this.$confirm({title:"您确定要删除该记录吗?",content:"删除后不可恢复",onOk:function(){return o["c"]({addressId:e.address_id}).then((function(e){t.$message.success(e.message,1.5),t.handleRefresh()})).finally((function(e){r.destroy()}))}})},handleRefresh:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$refs.table.refresh(e)},onSearch:function(){this.handleRefresh(!0)}}},S=_,q=Object(m["a"])(S,a,n,!1,null,null,null);t["default"]=q.exports}}]);