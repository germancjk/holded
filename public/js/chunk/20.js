(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{208:function(s,e,a){"use strict";a.r(e);var t=a(5);function r(s,e){var a=Object.keys(s);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(s);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),a.push.apply(a,t)}return a}function i(s,e,a){return e in s?Object.defineProperty(s,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):s[e]=a,s}var o={components:{},data:function(){return{userId:localStorage.getItem("user_id"),name:"",email:"",business_name:"",business_ruc:"",business_address:"",password:"",new_password:"",new_password_confirmation:"",submitName:"Actualizar",showError:!1,showSuccessUpdate:!1,showErrorPassword:!1,messageSuccessUpdate:"Actualizado!",showSuccessUpdatePassword:!1,messageSuccessUpdatePassword:"Actualizado!"}},methods:{update:function(s){var e=this;if(s.preventDefault(),this.name.length>0){var a={user_id:this.userId,name:this.name,business_name:this.business_name,business_ruc:this.business_ruc,business_address:this.business_address};axios.patch("".concat(this.baseApiUrl,"/api/user/update"),a).then((function(s){200==s.status&&(e.showSuccessUpdate=!0)}))}else this.showError=!0,this.messageError="Error chars length"},updatePasssword:function(s){var e=this;s.preventDefault();var a=!0;if(this.password.length<=6&&(this.messageErrorPassword="Error",a=!1),this.password!=this.new_password&&(this.messageError="Error",a=!1),a){var t={user_id:this.userId,password:this.password,new_password:this.new_password,new_password_confirmation:this.new_password_confirmation};axios.patch("".concat(this.baseApiUrl,"/api/user/updatePassword"),t).then((function(s){200==s.status&&(e.showSuccessUpdatePassword=!0)}))}else this.showErrorPassword=!0},info:function(){var s=this;axios.defaults.headers.common["Content-Type"]="application/json",axios.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("jwt"),axios.post("".concat(this.baseApiUrl,"/api/user/info"),{user_id:this.userId}).then((function(e){s.name=e.data.name,s.email=e.data.email,s.business_name=e.data.business_name,s.business_ruc=e.data.business_ruc,s.business_address=e.data.business_address}))}},mounted:function(){this.showError=!1,this.info()},computed:function(s){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(s,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(s,e,Object.getOwnPropertyDescriptor(a,e))}))}return s}({},Object(t.c)(["baseApiUrl"]))},n=a(4),d=Object(n.a)(o,(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"board"}},[a("div",{staticClass:"container"},[a("small",[a("ul",{staticClass:"list-inline-mb-0 pl-0"},[a("li",{staticClass:"list-inline-item"},[a("router-link",{attrs:{to:{name:"board"}}},[s._v("Panel")]),s._v(" >")],1),s._v(" "),a("li",{staticClass:"list-inline-item"},[s._v("Perfil")])])]),s._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm mb-3"},[a("p",{staticClass:"lead"},[s._v("Perfil")]),s._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[s.showSuccessUpdate?a("div",{staticClass:"alert alert-success"},[s._v("\n                "+s._s(s.messageSuccessUpdate)+"\n              ")]):s._e(),s._v(" "),s.showError?a("div",{staticClass:"alert alert-danger"},[s._v("\n                "+s._s(s.messageError)+"\n              ")]):s._e(),s._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),s.handleSubmit(e)}}},[a("div",{staticClass:"form-group"},[a("div",{staticClass:"col-12"},[a("label",{attrs:{for:"name"}},[s._v("Email")]),s._v(" "),a("p",[a("strong",[s._v(s._s(s.email))])])]),s._v(" "),a("div",{staticClass:"col-12"},[a("label",{attrs:{for:"name"}},[s._v("Nombre")]),s._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:s.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"name","aria-describedby":"name",required:"",autofocus:""},domProps:{value:s.name},on:{input:function(e){e.target.composing||(s.name=e.target.value)}}})]),s._v(" "),a("div",{staticClass:"col-12"},[a("label",{attrs:{for:"business_name"}},[s._v("Nombre de Empresa")]),s._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:s.business_name,expression:"business_name"}],staticClass:"form-control",attrs:{type:"text",id:"business_name","aria-describedby":"business_name",required:""},domProps:{value:s.business_name},on:{input:function(e){e.target.composing||(s.business_name=e.target.value)}}})]),s._v(" "),a("div",{staticClass:"col-12"},[a("label",{attrs:{for:"business_ruc"}},[s._v("RUT")]),s._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:s.business_ruc,expression:"business_ruc"}],staticClass:"form-control",attrs:{type:"text",id:"business_ruc","aria-describedby":"business_ruc",required:""},domProps:{value:s.business_ruc},on:{input:function(e){e.target.composing||(s.business_ruc=e.target.value)}}})]),s._v(" "),a("div",{staticClass:"col-12"},[a("label",{attrs:{for:"business_address"}},[s._v("Dirección")]),s._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:s.business_address,expression:"business_address"}],staticClass:"form-control",attrs:{type:"text",id:"business_address","aria-describedby":"business_address",required:""},domProps:{value:s.business_address},on:{input:function(e){e.target.composing||(s.business_address=e.target.value)}}})])]),s._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:s.update}},[s._v(s._s(s.submitName))])])])])]),s._v(" "),a("div",{staticClass:"col-sm mb-3"},[a("p",{staticClass:"lead"},[s._v("Cambiar Clave")]),s._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[s.showSuccessUpdatePassword?a("div",{staticClass:"alert alert-success"},[s._v("\n                "+s._s(s.messageSuccessUpdatePassword)+"\n              ")]):s._e(),s._v(" "),s.showErrorPassword?a("div",{staticClass:"alert alert-danger"},[s._v("\n                "+s._s(s.messageErrorPassword)+"\n              ")]):s._e(),s._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),s.handleSubmit(e)}}},[a("div",{staticClass:"form-group"},[a("div",{staticClass:"col-12"},[a("label",{attrs:{for:"password"}},[s._v("Clave Actual")]),s._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"form-control",attrs:{type:"text",id:"password","aria-describedby":"password",required:"",autofocus:""},domProps:{value:s.password},on:{input:function(e){e.target.composing||(s.password=e.target.value)}}})]),s._v(" "),a("div",{staticClass:"col-12"},[a("label",{attrs:{for:"new_password"}},[s._v("Nueva Clave")]),s._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:s.new_password,expression:"new_password"}],staticClass:"form-control",attrs:{type:"text",id:"new_password","aria-describedby":"new_password",required:""},domProps:{value:s.new_password},on:{input:function(e){e.target.composing||(s.new_password=e.target.value)}}})]),s._v(" "),a("div",{staticClass:"col-12"},[a("label",{attrs:{for:"new_password_confirmation"}},[s._v("Repetir Nueva Clave")]),s._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:s.new_password_confirmation,expression:"new_password_confirmation"}],staticClass:"form-control",attrs:{type:"text",id:"new_password_confirmation","aria-describedby":"new_password_confirmation",required:""},domProps:{value:s.new_password_confirmation},on:{input:function(e){e.target.composing||(s.new_password_confirmation=e.target.value)}}})])]),s._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:s.updatePasssword}},[s._v(s._s(s.submitName))])])])])])])])])}),[],!1,null,null,null);e.default=d.exports}}]);