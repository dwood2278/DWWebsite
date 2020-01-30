(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{77:function(s,e,a){"use strict";a.r(e);var r=a(7),t=a(26),i=a.n(t),o=a(27),l=a(25),n=a.n(l),d=function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"card mx-auto",staticStyle:{"max-width":"400px"}},[a("h5",{staticClass:"card-header"},[s._v("Login")]),s._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-text"},[s.errorMessage?a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[a("i",{staticClass:"fas fa-exclamation-triangle"}),s._v(" "+s._s(s.errorMessage)+"\n                    ")])])]):s._e(),s._v(" "),a("form",{attrs:{action:"/login",method:"POST"}},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-4 col-form-label",attrs:{for:"txtUserName"}},[s._v("\n                        Username "),a("span",{directives:[{name:"show",rawName:"v-show",value:s.$v.userName.$error,expression:"$v.userName.$error"}],staticClass:"error-asterisk"},[s._v("*")])]),s._v(" "),a("div",{staticClass:"col-sm-8"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.userName,expression:"userName"}],staticClass:"form-control",class:{"invalid-field":s.$v.userName.$error},attrs:{type:"text",name:"txtUserName"},domProps:{value:s.userName},on:{input:function(e){e.target.composing||(s.userName=e.target.value)}}})]),s._v(" "),a("div",{staticClass:"offset-sm-4 col-sm-8 field-error-message"},[a("span",{directives:[{name:"show",rawName:"v-show",value:s.$v.userName.$error&&!s.$v.userName.required,expression:"$v.userName.$error && !$v.userName.required"}]},[s._v("Username is required.")])])]),s._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-4 col-form-label",attrs:{for:"txtPassword"}},[s._v("\n                        Password "),a("span",{directives:[{name:"show",rawName:"v-show",value:s.$v.password.$error,expression:"$v.password.$error"}],staticClass:"error-asterisk"},[s._v("*")])]),s._v(" "),a("div",{staticClass:"col-sm-8"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"form-control",class:{"invalid-field":s.$v.password.$error},attrs:{type:"password",name:"txtPassword"},domProps:{value:s.password},on:{input:function(e){e.target.composing||(s.password=e.target.value)}}})]),s._v(" "),a("div",{staticClass:"offset-sm-4 col-sm-8 field-error-message"},[a("span",{directives:[{name:"show",rawName:"v-show",value:s.$v.password.$error&&!s.$v.password.required,expression:"$v.password.$error && !$v.password.required"}]},[s._v("Password is required.")])])]),s._v(" "),a("div",{staticClass:"form-group row"},[a("div",{staticClass:"col-12 text-center"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:s.submitForm}},[a("i",{staticClass:"fas fa-sign-in-alt"}),s._v(" Login")])])])])])])])};d._withStripped=!0;var c=a(4),m={name:"loginApp",data:()=>({userName:"",password:""}),props:["errorMessage"],validations:{userName:{required:c.required},password:{required:c.required}},methods:{submitForm:function(s){this.$v.$touch(),this.$v.$anyError&&s.preventDefault()}}},u=a(6),v=Object(u.a)(m,d,[],!1,null,null,null);v.options.__file="public/src/components/Login.vue";var f=v.exports,p=function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:s.successfullyChangedPassword&&s.showSuccessMessage,expression:"successfullyChangedPassword && showSuccessMessage"}],staticClass:"row"},[a("div",{staticClass:"col-12"},[a("b-alert",{attrs:{show:"",variant:"success"}},[a("i",{staticClass:"fas fa-check"}),s._v(" Successfully changed password.\n            ")])],1)]),s._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:s.errorMessage,expression:"errorMessage"}],staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[a("i",{staticClass:"fas fa-exclamation-triangle"}),s._v(" "+s._s(s.errorMessage)+"\n            ")])])]),s._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!s.successfullyChangedPassword||!s.showSuccessMessage,expression:"!successfullyChangedPassword || !showSuccessMessage"}]},[a("div",{directives:[{name:"show",rawName:"v-show",value:s.requireCurrentPassword,expression:"requireCurrentPassword"}],staticClass:"form-group row"},[a("label",{staticClass:"col-md-6 col-form-label",attrs:{for:"txtCurrentPassword"}},[s._v("\n                Current Password "),s.$v.currentPassword.$error?a("span",{staticClass:"error-asterisk"},[s._v("*")]):s._e()]),s._v(" "),a("div",{staticClass:"col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:s.currentPassword,expression:"currentPassword",modifiers:{lazy:!0}}],staticClass:"form-control",class:{"invalid-field":s.$v.currentPassword.$error},attrs:{type:"password",name:"txtCurrentPassword"},domProps:{value:s.currentPassword},on:{change:function(e){s.currentPassword=e.target.value}}})]),s._v(" "),a("div",{staticClass:"offset-md-6 col-md-6 field-error-message"},[s.$v.currentPassword.$error&&!s.$v.currentPassword.currentPasswordRequired?a("span",[s._v("Current password is required.")]):s._e()])]),s._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-6 col-form-label",attrs:{for:"txtNewPassword"}},[s._v("\n                New Password "),s.$v.newPassword.$error?a("span",{staticClass:"error-asterisk"},[s._v("*")]):s._e()]),s._v(" "),a("div",{staticClass:"col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.newPassword,expression:"newPassword"}],staticClass:"form-control",class:{"invalid-field":s.$v.newPassword.$error},attrs:{type:"password",name:"txtNewPassword"},domProps:{value:s.newPassword},on:{input:function(e){e.target.composing||(s.newPassword=e.target.value)}}})]),s._v(" "),a("div",{staticClass:"offset-md-6 col-md-6 field-error-message"},[s.$v.newPassword.$error&&!s.$v.newPassword.required?a("span",[s._v("New password is required.")]):s._e()])]),s._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-6 col-form-label",attrs:{for:"txtNewPasswordConf"}},[s._v("\n                Confirm New Password  "),s.$v.newPasswordConf.$error?a("span",{staticClass:"error-asterisk"},[s._v("*")]):s._e()]),s._v(" "),a("div",{staticClass:"col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.newPasswordConf,expression:"newPasswordConf"}],staticClass:"form-control",class:{"invalid-field":s.$v.newPasswordConf.$error},attrs:{type:"password",name:"txtNewPasswordConf"},domProps:{value:s.newPasswordConf},on:{input:function(e){e.target.composing||(s.newPasswordConf=e.target.value)}}})]),s._v(" "),a("div",{staticClass:"offset-md-6 col-md-6 field-error-message"},[s.$v.newPasswordConf.$error&&!s.$v.newPasswordConf.required?a("span",[s._v("New password confirmation is required.")]):s.$v.newPasswordConf.$error&&!s.$v.newPasswordConf.sameAsPassword?a("span",[s._v("Confirmation password does not match new password.")]):s._e()])]),s._v(" "),a("div",{staticClass:"form-group row"},[a("div",{staticClass:"col-12 text-center"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:s.submitForm}},[a("i",{staticClass:"fas fa-key"}),s._v(" Change Password")])])])])])};p._withStripped=!0;var h=a(2),w=a.n(h),g={name:"changePasswordApp",data:()=>({currentPassword:"",newPassword:"",newPasswordConf:"",errorMessage:"",successfullyChangedPassword:!1}),props:["user","showSuccessMessage","requireCurrentPassword"],validations:{currentPassword:{currentPasswordRequired(s){return!this.requireCurrentPassword||s}},newPassword:{required:c.required},newPasswordConf:{required:c.required,sameAsPassword:Object(c.sameAs)("newPassword")}},methods:{submitForm:async function(s){if(this.errorMessage="",this.$v.$touch(),!this.$v.$anyError)try{if(this.requireCurrentPassword){if(!(await w.a.post("/userapi/verifypassword/"+this.user.id,{password:this.currentPassword})).data.isPasswordVerified)return void(this.errorMessage="Invalid current password.")}w.a.defaults.headers.common["x-access-token"]=$cookies.get("DWWebsite_token");let s=await w.a.patch("/userapi/users/"+this.user.id,{password:this.newPassword});s.data.errorMessage?this.errorMessage=s.data.errorMessage:(this.successfullyChangedPassword=!0,this.$v.$reset(),this.currentPassword="",this.newPassword="",this.newPasswordConf="",this.$emit("password-changed",{id:this.user.id,firstName:this.firstName,middleName:this.middleName,lastName:this.lastName,email:this.email,userName:this.userName}))}catch(s){console.log(s),this.errorMessage=s}}}},N=Object(u.a)(g,p,[],!1,null,null,null);N.options.__file="public/src/components/ChangePassword.vue";var _=N.exports,C=function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:s.successfullyUpdated&&s.showSuccessMessage,expression:"successfullyUpdated && showSuccessMessage"}],staticClass:"row"},[a("div",{staticClass:"col-12"},[a("b-alert",{attrs:{show:"",variant:"success"}},[a("i",{staticClass:"fas fa-check"}),s._v(" Successfully submitted user changes.\n            ")])],1)]),s._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:s.errorMessage,expression:"errorMessage"}],staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[a("i",{staticClass:"fas fa-exclamation-triangle"}),s._v(" "+s._s(s.errorMessage)+"\n            ")])])]),s._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!s.successfullyUpdated||!s.showSuccessMessage,expression:"!successfullyUpdated || !showSuccessMessage"}]},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-xl-2 col-form-label",attrs:{for:"txtFirstName"}},[s._v("\n                First Name\n                "),s.$v.firstName.$error?a("span",{staticClass:"error-asterisk"},[s._v("*")]):s._e()]),s._v(" "),a("div",{staticClass:"col-lg-9 col-xl-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.firstName,expression:"firstName"}],staticClass:"form-control",class:{"invalid-field":s.$v.firstName.$error},attrs:{type:"text",name:"txtFirstName"},domProps:{value:s.firstName},on:{input:function(e){e.target.composing||(s.firstName=e.target.value)}}})]),s._v(" "),a("div",{staticClass:"offset-lg-3 offset-xl-2 col-lg-9 col-xl-10 field-error-message"},[s.$v.firstName.$error&&!s.$v.firstName.required?a("span",[s._v("First name is required.")]):s._e()])]),s._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-xl-2 col-form-label",attrs:{for:"txtMiddleName"}},[s._v("\n                Middle Name\n            ")]),s._v(" "),a("div",{staticClass:"col-lg-9 col-xl-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.middleName,expression:"middleName"}],staticClass:"form-control",attrs:{type:"text",name:"txtMiddleName"},domProps:{value:s.middleName},on:{input:function(e){e.target.composing||(s.middleName=e.target.value)}}})])]),s._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-xl-2 col-form-label",attrs:{for:"txtLastName"}},[s._v("\n                Last Name\n                "),s.$v.lastName.$error?a("span",{staticClass:"error-asterisk"},[s._v("*")]):s._e()]),s._v(" "),a("div",{staticClass:"col-lg-9 col-xl-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.lastName,expression:"lastName"}],staticClass:"form-control",class:{"invalid-field":s.$v.lastName.$error},attrs:{type:"text",name:"txtLastName"},domProps:{value:s.lastName},on:{input:function(e){e.target.composing||(s.lastName=e.target.value)}}})]),s._v(" "),a("div",{staticClass:"offset-lg-3 offset-xl-2 col-lg-9 col-xl-10 field-error-message"},[s.$v.lastName.$error&&!s.$v.lastName.required?a("span",[s._v("Last name is required.")]):s._e()])]),s._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-xl-2 col-form-label",attrs:{for:"txtEmail"}},[s._v("\n                Email\n                "),s.$v.email.$error?a("span",{staticClass:"error-asterisk"},[s._v("*")]):s._e()]),s._v(" "),a("div",{staticClass:"col-lg-9 col-xl-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.email,expression:"email"}],staticClass:"form-control",class:{"invalid-field":s.$v.email.$error},attrs:{type:"email",name:"txtEmail"},domProps:{value:s.email},on:{input:function(e){e.target.composing||(s.email=e.target.value)}}})]),s._v(" "),a("div",{staticClass:"offset-lg-3 offset-xl-2 col-lg-9 col-xl-10 field-error-message"},[s.$v.email.$error&&!s.$v.email.required?a("span",[s._v("Email is required.")]):s._e()])]),s._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"admin"!=s.userName,expression:"userName != 'admin'"}],staticClass:"form-group row"},[a("div",{staticClass:"offset-lg-3 offset-xl-2 col-lg-9 col-xl-10"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.useEmailAsUserName,expression:"useEmailAsUserName"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"chkUseEmailAsUserName",name:"chkUseEmailAsUserName"},domProps:{checked:Array.isArray(s.useEmailAsUserName)?s._i(s.useEmailAsUserName,null)>-1:s.useEmailAsUserName},on:{change:function(e){var a=s.useEmailAsUserName,r=e.target,t=!!r.checked;if(Array.isArray(a)){var i=s._i(a,null);r.checked?i<0&&(s.useEmailAsUserName=a.concat([null])):i>-1&&(s.useEmailAsUserName=a.slice(0,i).concat(a.slice(i+1)))}else s.useEmailAsUserName=t}}}),s._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"chkUseEmailAsUserName"}},[s._v("\n                        Use email address as username.\n                    ")])])])]),s._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-xl-2 col-form-label",attrs:{for:"txtUsername"}},[s._v("\n                Username "),a("span",{directives:[{name:"show",rawName:"v-show",value:s.$v.userName.$error,expression:"$v.userName.$error"}],staticClass:"error-asterisk"},[s._v("*")])]),s._v(" "),a("div",{staticClass:"col-lg-9 col-xl-10"},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.userName,expression:"userName"}],staticClass:"form-control",class:{"invalid-field":s.$v.userName.$error},attrs:{type:"text",name:"txtUserName",disabled:"admin"==s.userName||s.useEmailAsUserName},domProps:{value:s.userName},on:{input:function(e){e.target.composing||(s.userName=e.target.value)}}}),s._v(" "),a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text"},[s.$v.userName.required?s.$v.$pending?a("span",[a("i",{staticClass:"fas fa-cog fa-spin"})]):s.$v.userName.isUserNameAvailable?a("span",{staticStyle:{color:"green"}},[a("i",{staticClass:"fas fa-check-circle"})]):a("span",{staticStyle:{color:"red"}},[a("i",{staticClass:"fas fa-times-circle"})]):a("span",[a("i",{staticClass:"fas fa-cog"})])])])])]),s._v(" "),a("div",{staticClass:"offset-lg-3 offset-xl-2 col-lg-9 col-xl-10",staticStyle:{height:"15px"}},[s.$v.userName.$error&&!s.$v.userName.required?a("span",{staticClass:"field-error-message"},[s._v("Username is required.")]):s.$v.$pending||s.$v.userName.isUserNameAvailable?!s.$v.$pending&&s.$v.userName.required&&s.$v.userName.isUserNameAvailable?a("span",{staticClass:"field-valid-message"},[s._v("Username is available.")]):s._e():a("span",{staticClass:"field-error-message"},[s._v("Username is unavailable.")])])]),s._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:s.enableChangeAdmin,expression:"enableChangeAdmin"}],staticClass:"form-group row"},[a("div",{staticClass:"offset-lg-3 offset-xl-2 col-lg-9 col-xl-10"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.isAdmin,expression:"isAdmin"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"chkIsAdmin",name:"chkIsAdmin"},domProps:{checked:Array.isArray(s.isAdmin)?s._i(s.isAdmin,null)>-1:s.isAdmin},on:{change:function(e){var a=s.isAdmin,r=e.target,t=!!r.checked;if(Array.isArray(a)){var i=s._i(a,null);r.checked?i<0&&(s.isAdmin=a.concat([null])):i>-1&&(s.isAdmin=a.slice(0,i).concat(a.slice(i+1)))}else s.isAdmin=t}}}),s._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"chkIsAdmin"}},[s._v("\n                        This user is an admin.\n                    ")])])])]),s._v(" "),a("div",{staticClass:"form-group row"},[a("div",{staticClass:"col-12 text-center"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:s.submitForm}},[a("i",{staticClass:"fas fa-user-edit"}),s._v(" Update")])])])])])};C._withStripped=!0;var x={name:"editUserApp",data(){return{loggedInUser:$cookies.get("DWWebsite_user"),id:this.user.id,firstName:this.user.firstName,middleName:this.user.middleName,lastName:this.user.lastName,email:this.user.email,isAdmin:this.user.isAdmin,useEmailAsUserName:!0,userName:this.user.userName,successfullyUpdated:!1,errorMessage:""}},props:["user","showSuccessMessage"],created(){this.useEmailAsUserName=this.userName==this.email&&"admin"!=this.userName},validations:{firstName:{required:c.required},lastName:{required:c.required},email:{required:c.required},userName:{required:c.required,async isUserNameAvailable(s){if(""==s)return!0;try{return w.a.defaults.headers.common["x-access-token"]=$cookies.get("DWWebsite_token"),(await w.a.post("/userapi/isusernameavaliable/"+this.id,{userName:this.userName})).data.isUserNameAvaliable}catch(s){console.log(s)}}}},watch:{email:function(s){this.useEmailAsUserName&&(this.userName=this.email)},useEmailAsUserName:function(s){this.useEmailAsUserName&&(this.userName=this.email)}},computed:{enableChangeAdmin:function(){return"admin"!=this.userName&&this.loggedInUser.id!=this.id}},methods:{submitForm:async function(s){if(this.errorMessage="",this.$v.$touch(),!this.$v.$anyError)try{w.a.defaults.headers.common["x-access-token"]=$cookies.get("DWWebsite_token");let s=await w.a.patch("/userapi/users/"+this.user.id,{firstName:this.firstName,middleName:this.middleName,lastName:this.lastName,email:this.email,userName:this.userName,isAdmin:this.isAdmin});s.data.errorMessage?this.errorMessage=s.data.errorMessage:(this.successfullyUpdated=!0,this.$emit("user-updated",{id:this.user.id,firstName:this.firstName,middleName:this.middleName,lastName:this.lastName,email:this.email,userName:this.userName,isAdmin:this.isAdmin}))}catch(s){console.log(s),this.errorMessage=s}}}},$=Object(u.a)(x,C,[],!1,null,null,null);$.options.__file="public/src/components/EditUser.vue";var b=$.exports,P=function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-xl-2 col-form-label",attrs:{for:"txtFirstName"}},[s._v("\n            First Name "),s.$v.firstName.$error?a("span",{staticClass:"error-asterisk"},[s._v("*")]):s._e()]),s._v(" "),a("div",{staticClass:"col-lg-9 col-xl-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.firstName,expression:"firstName"}],staticClass:"form-control",class:{"invalid-field":s.$v.firstName.$error},attrs:{type:"text",name:"txtFirstName"},domProps:{value:s.firstName},on:{input:function(e){e.target.composing||(s.firstName=e.target.value)}}})]),s._v(" "),a("div",{staticClass:"offset-lg-3 offset-xl-2 col-lg-9 col-xl-10 field-error-message"},[s.$v.firstName.$error&&!s.$v.firstName.required?a("span",[s._v("First name is required.")]):s._e()])]),s._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-xl-2 col-form-label",attrs:{for:"txtMiddleName"}},[s._v("Middle Name")]),s._v(" "),a("div",{staticClass:"col-lg-9 col-xl-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.middleName,expression:"middleName"}],staticClass:"form-control",attrs:{type:"text",name:"txtMiddleName"},domProps:{value:s.middleName},on:{input:function(e){e.target.composing||(s.middleName=e.target.value)}}})])]),s._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-xl-2 col-form-label",attrs:{for:"txtLastName"}},[s._v("\n            Last Name "),s.$v.lastName.$error?a("span",{staticClass:"error-asterisk"},[s._v("*")]):s._e()]),s._v(" "),a("div",{staticClass:"col-lg-9 col-xl-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.lastName,expression:"lastName"}],staticClass:"form-control",class:{"invalid-field":s.$v.lastName.$error},attrs:{type:"text",name:"txtLastName"},domProps:{value:s.lastName},on:{input:function(e){e.target.composing||(s.lastName=e.target.value)}}})]),s._v(" "),a("div",{staticClass:"offset-lg-3 offset-xl-2 col-lg-9 col-xl-10 field-error-message"},[s.$v.lastName.$error&&!s.$v.lastName.required?a("span",[s._v("Last name is required.")]):s._e()])]),s._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-xl-2 col-form-label",attrs:{for:"txtEmail"}},[s._v("\n            Email "),s.$v.email.$error?a("span",{staticClass:"error-asterisk"},[s._v("*")]):s._e()]),s._v(" "),a("div",{staticClass:"col-lg-9 col-xl-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.email,expression:"email"}],staticClass:"form-control",class:{"invalid-field":s.$v.email.$error},attrs:{type:"email",name:"txtEmail"},domProps:{value:s.email},on:{input:function(e){e.target.composing||(s.email=e.target.value)}}})]),s._v(" "),a("div",{staticClass:"offset-lg-4 offset-xl-2 col-lg-8 col-xl-10 field-error-message"},[s.$v.email.$error&&!s.$v.email.required?a("span",[s._v("Email is required.")]):s._e()])]),s._v(" "),a("div",{staticClass:"form-group row"},[a("div",{staticClass:"offset-lg-3 offset-xl-2  col-lg-9 col-xl-10"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.useEmailAsUserName,expression:"useEmailAsUserName"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"chkUseEmailAsUserName",name:"chkUseEmailAsUserName"},domProps:{checked:Array.isArray(s.useEmailAsUserName)?s._i(s.useEmailAsUserName,null)>-1:s.useEmailAsUserName},on:{change:function(e){var a=s.useEmailAsUserName,r=e.target,t=!!r.checked;if(Array.isArray(a)){var i=s._i(a,null);r.checked?i<0&&(s.useEmailAsUserName=a.concat([null])):i>-1&&(s.useEmailAsUserName=a.slice(0,i).concat(a.slice(i+1)))}else s.useEmailAsUserName=t}}}),s._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"chkUseEmailAsUserName"}},[s._v("\n                    Use email address as username.\n                ")])])])]),s._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-xl-2 col-form-label",attrs:{for:"txtUsername"}},[s._v("\n            Username "),s.$v.userName.$error?a("span",{staticClass:"error-asterisk"},[s._v("*")]):s._e()]),s._v(" "),a("div",{staticClass:"col-lg-9 col-xl-10"},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.userName,expression:"userName"}],staticClass:"form-control",class:{"invalid-field":s.$v.userName.$error},attrs:{type:"text",name:"txtUserName",readonly:s.useEmailAsUserName},domProps:{value:s.userName},on:{input:function(e){e.target.composing||(s.userName=e.target.value)}}}),s._v(" "),a("div",{staticClass:"input-group-append"},[a("span",{staticClass:"input-group-text"},[s.$v.userName.required?s.$v.$pending?a("span",[a("i",{staticClass:"fas fa-cog fa-spin"})]):s.$v.userName.isUserNameAvailable?a("span",{staticStyle:{color:"green"}},[a("i",{staticClass:"fas fa-check-circle"})]):a("span",{staticStyle:{color:"red"}},[a("i",{staticClass:"fas fa-times-circle"})]):a("span",[a("i",{staticClass:"fas fa-cog"})])])])])]),s._v(" "),a("div",{staticClass:"offset-lg-3 offset-xl-2 col-lg-9 col-xl-10",staticStyle:{height:"15px"}},[s.$v.userName.$error&&!s.$v.userName.required?a("span",{staticClass:"field-error-message"},[s._v("Username is required.")]):s.$v.$pending||s.$v.userName.isUserNameAvailable?!s.$v.$pending&&s.$v.userName.required&&s.$v.userName.isUserNameAvailable?a("span",{staticClass:"field-valid-message"},[s._v("Username is available.")]):s._e():a("span",{staticClass:"field-error-message"},[s._v("Username is unavailable.")])])]),s._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-xl-2 col-form-label",attrs:{for:"txtPassword"}},[s._v("\n            Password "),s.$v.password.$error?a("span",{staticClass:"error-asterisk"},[s._v("*")]):s._e()]),s._v(" "),a("div",{staticClass:"col-lg-9 col-xl-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"form-control",class:{"invalid-field":s.$v.password.$error},attrs:{type:"password",name:"txtPassword"},domProps:{value:s.password},on:{input:function(e){e.target.composing||(s.password=e.target.value)}}})]),s._v(" "),a("div",{staticClass:"offset-lg-3 offset-xl-2 col-lg-9 col-xl-10 field-error-message"},[s.$v.password.$error&&!s.$v.password.required?a("span",[s._v("Password is required.")]):s._e()])]),s._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-xl-2 col-form-label",attrs:{for:"txtPasswordConf"}},[s._v("\n            Confirm Password  "),s.$v.passwordConf.$error?a("span",{staticClass:"error-asterisk"},[s._v("*")]):s._e()]),s._v(" "),a("div",{staticClass:"col-lg-9 col-xl-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.passwordConf,expression:"passwordConf"}],staticClass:"form-control",class:{"invalid-field":s.$v.passwordConf.$error},attrs:{type:"password",name:"txtPasswordConf"},domProps:{value:s.passwordConf},on:{input:function(e){e.target.composing||(s.passwordConf=e.target.value)}}})]),s._v(" "),a("div",{staticClass:"offset-lg-3 offset-xl-2 col-lg-9 col-xl-10 field-error-message"},[s.$v.passwordConf.$error&&!s.$v.passwordConf.required?a("span",[s._v("Password confirmation is required.")]):s.$v.passwordConf.$error&&!s.$v.passwordConf.sameAsPassword?a("span",[s._v("Confirmation password does not match new password.")]):s._e()])]),s._v(" "),a("div",{staticClass:"form-group row"},[a("div",{staticClass:"offset-lg-3 offset-xl-2 col-lg-9 col-xl-10"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.isAdmin,expression:"isAdmin"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"chkIsAdmin",name:"chkIsAdmin"},domProps:{checked:Array.isArray(s.isAdmin)?s._i(s.isAdmin,null)>-1:s.isAdmin},on:{change:function(e){var a=s.isAdmin,r=e.target,t=!!r.checked;if(Array.isArray(a)){var i=s._i(a,null);r.checked?i<0&&(s.isAdmin=a.concat([null])):i>-1&&(s.isAdmin=a.slice(0,i).concat(a.slice(i+1)))}else s.isAdmin=t}}}),s._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"chkIsAdmin"}},[s._v("\n                    This user is an admin.\n                ")])])])]),s._v(" "),a("div",{staticClass:"form-group row"},[a("div",{staticClass:"col-12 text-center"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:s.submitForm}},[a("i",{staticClass:"fas fa-user-plus"}),s._v(" Create User")])])])])};P._withStripped=!0;var A={name:"createUserApp",data:()=>({loggedInUser:$cookies.get("DWWebsite_user"),firstName:"",middleName:"",lastName:"",email:"",isAdmin:!1,useEmailAsUserName:!0,userName:"",password:"",passwordConf:""}),validations:{firstName:{required:c.required},lastName:{required:c.required},email:{required:c.required,email:c.email},userName:{required:c.required,async isUserNameAvailable(s){if(""==s)return!0;try{return w.a.defaults.headers.common["x-access-token"]=$cookies.get("DWWebsite_token"),(await w.a.post("/userapi/isusernameavaliable",{userName:this.userName})).data.isUserNameAvaliable}catch(s){console.log(s)}}},password:{required:c.required},passwordConf:{required:c.required,sameAsPassword:Object(c.sameAs)("password")}},watch:{email:function(s){this.useEmailAsUserName&&(this.userName=this.email)},useEmailAsUserName:function(s){this.useEmailAsUserName&&(this.userName=this.email)}},methods:{submitForm:async function(s){if(this.$v.$touch(),!this.$v.$anyError)try{w.a.defaults.headers.common["x-access-token"]=$cookies.get("DWWebsite_token");let s=await w.a.post("/userapi/users",{firstName:this.firstName,middleName:this.middleName,lastName:this.lastName,email:this.email,userName:this.userName,password:this.password,isAdmin:this.isAdmin});this.resetForm(),this.$emit("user-created",s.data)}catch(s){console.log(s)}},resetForm:function(){this.firstName="",this.middleName="",this.lastName="",this.email="",this.isAdmin=!1,this.useEmailAsUserName=!0,this.userName="",this.password="",this.passwordConf="",this.$v.$reset()}}},U=Object(u.a)(A,P,[],!1,null,null,null);U.options.__file="public/src/components/CreateUser.vue";var y=U.exports,k=function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",[a("div",{staticClass:"row my-3"},[a("div",{staticClass:"col-12 col-md-6"},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"modal-create-user",expression:"'modal-create-user'"}],attrs:{variant:"primary"}},[a("i",{staticClass:"fas fa-user-plus"}),s._v(" Create User")])],1),s._v(" "),a("label",{staticClass:"col-form-label col-6 col-md-3 text-right",attrs:{for:"ddlSortOrder"}},[s._v("Sort Order:")]),s._v(" "),a("div",{staticClass:"col-6 col-md-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:s.sortOrder,expression:"sortOrder"}],staticClass:"form-control",attrs:{id:"ddlSortOrder"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(s){return s.selected})).map((function(s){return"_value"in s?s._value:s.value}));s.sortOrder=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"firstName"}},[s._v("First Name")]),s._v(" "),a("option",{attrs:{value:"lastName"}},[s._v("Last Name")]),s._v(" "),a("option",{attrs:{value:"email"}},[s._v("Email")]),s._v(" "),a("option",{attrs:{value:"userName"}},[s._v("User Name")]),s._v(" "),a("option",{attrs:{value:"isAdmin"}},[s._v("Admin")])])])]),s._v(" "),a("div",{staticClass:"row justify-content-center"},s._l(s.sortedPagedUserList,(function(e){return a("div",{key:e.id,staticClass:"col-md-12 col-lg-6 d-flex align-items-stretch",staticStyle:{width:"100%"}},[a("div",{staticClass:"card flex-fill my-2",class:{"border-dark":e.isAdmin}},[a("h5",{staticClass:"card-header"},[s._v("\n                    "+s._s(e.firstName)+" "+s._s(e.lastName)+" "),e.isAdmin?a("span",[s._v("(Admin)")]):s._e()]),s._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[s._v("\n                            ID: "+s._s(e.id)),a("br"),s._v("\n                            First Name: "+s._s(e.firstName)),a("br"),s._v("\n                            Middle Name: "+s._s(e.middleName)),a("br"),s._v("\n                            Last Name: "+s._s(e.lastName)),a("br"),s._v("\n                            Email: "),a("a",{attrs:{href:"mailto:"+e.email}},[s._v(s._s(e.email))]),a("br"),s._v("\n                            Admin User: "+s._s(e.isAdmin?"Yes":"No")+"\n                        ")])]),s._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center my-2"},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"modal-edit-user-"+e.id,expression:"'modal-edit-user-' + aUser.id"}],staticClass:"btn-block",attrs:{variant:"primary"}},[a("i",{staticClass:"fas fa-pencil-alt"}),s._v(" Edit User")])],1),s._v(" "),a("div",{staticClass:"col-12 text-center my-2"},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"modal-change-password-"+e.id,expression:"'modal-change-password-' + aUser.id"}],staticClass:"btn-block",attrs:{variant:"primary"}},[a("i",{staticClass:"fas fa-key"}),s._v(" Change Password")])],1),s._v(" "),s.isDefaultAdminOrLoggedInUser(e)?s._e():a("div",{staticClass:"col-12 text-center my-2"},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"modal-delete-user-"+e.id,expression:"'modal-delete-user-' + aUser.id"}],staticClass:"btn-block",attrs:{variant:"danger"}},[a("i",{staticClass:"fas fa-trash"}),s._v(" Delete")])],1)])])]),s._v(" "),a("b-modal",{attrs:{id:"modal-edit-user-"+e.id,title:"Edit "+e.firstName+" "+e.lastName,size:"xl","hide-footer":""}},[a("edit-user",{attrs:{user:e,"show-success-message":!1},on:{"user-updated":s.onUserUpdated}})],1),s._v(" "),a("b-modal",{attrs:{id:"modal-change-password-"+e.id,title:"Change Password for "+e.firstName+" "+e.lastName,"hide-footer":""}},[a("change-password",{attrs:{user:e,"show-success-message":!1,"require-current-password":s.loggedInUser.id==e.id},on:{"password-changed":s.onPasswordChanged}})],1),s._v(" "),a("b-modal",{attrs:{id:"modal-delete-user-"+e.id,title:"Delete "+e.firstName+" "+e.lastName,"ok-variant":"danger","ok-title":"Yes","cancel-title":"No"},on:{ok:function(a){return s.deleteUser(e)}}},[s._v("\n                This action will delete the user "+s._s(e.firstName)+" "+s._s(e.lastName)+" permanently. Are you sure you want to do this?\n            ")])],1)})),0),s._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:s.userList.length>s.perPage,expression:"userList.length > perPage"}],staticClass:"row my-3"},[a("div",{staticClass:"col-12"},[a("b-pagination",{attrs:{"total-rows":s.userList.length,"per-page":s.perPage,align:"center"},model:{value:s.currentPage,callback:function(e){s.currentPage=e},expression:"currentPage"}})],1)]),s._v(" "),a("b-modal",{attrs:{id:"modal-create-user",title:"Create New User",size:"xl","hide-footer":""}},[a("create-user",{on:{"user-created":s.onUserCreated}})],1)],1)};k._withStripped=!0;var q=a(12),E=a.n(q),M={name:"manageUsersApp",data:()=>({userList:[],password:"",loggedInUser:$cookies.get("DWWebsite_user"),sortOrder:"lastName",currentPage:1,perPage:10}),components:{CreateUser:y,EditUser:b,ChangePassword:_},async created(){try{w.a.defaults.headers.common["x-access-token"]=$cookies.get("DWWebsite_token");let s=await w.a.get("/userapi/users");this.userList=s.data.userList}catch(s){console.log(s)}},watch:{sortOrder:function(s){this.currentPage=1}},computed:{sortedPagedUserList:function(){var s=(this.currentPage-1)*this.perPage,e=Math.min(s+this.perPage,this.userList.length);return E.a.orderBy(this.userList,this.sortOrder,"asc").slice(s,e)},numberOfPages:function(){return Math.ceil(this.userList.length/this.perPage)}},methods:{onUserCreated:function(s){this.$bvModal.hide("modal-create-user"),this.userList.push(s)},onUserUpdated:function(s){this.$bvModal.hide("modal-edit-user-"+s.id);var e=E.a.find(this.userList,{id:s.id});e.firstName=s.firstName,e.middleName=s.middleName,e.lastName=s.lastName,e.email=s.email,e.userName=s.userName,e.isAdmin=s.isAdmin},onPasswordChanged:function(s){this.$bvModal.hide("modal-change-password-"+s.id)},deleteUser:async function(s){try{w.a.defaults.headers.common["x-access-token"]=$cookies.get("DWWebsite_token");await w.a.delete("/userapi/users/"+s.id);this.userList=E.a.filter(this.userList,(function(e){return e.id!=s.id}))}catch(s){console.log(s)}},isDefaultAdminOrLoggedInUser:function(s){return"admin"==s.userName||s.id==this.loggedInUser.id}}},D=Object(u.a)(M,k,[],!1,null,null,null);D.options.__file="public/src/components/ManageUsers.vue";var L=D.exports,S=function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"card mx-auto"},[a("h5",{staticClass:"card-header"},[s._v("Sense Hat Data "),s.isRefreshing?a("i",{staticClass:"fas fa-circle-notch fa-spin"}):s._e()]),s._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-text"},[s.isLoading?a("div",{staticClass:"row"},[s._m(0)]):s._e(),s._v(" "),s.isLoading||s.serverRequestError?s._e():a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[s._v("\n                    CPU Temp: "+s._s(s.celsiusToFahrenheit(s.senseHatData.cpuTemp).toFixed(1))+" F"),a("br"),s._v("\n                    Temperature: "+s._s(s.celsiusToFahrenheit(s.senseHatData.temperature).toFixed(1))+" F"),a("br"),s._v("\n                    Pressure: "+s._s(s.mbarToInHg(s.senseHatData.pressure).toFixed(2))+" inHg "),a("br"),s._v("\n                    Temp from Pressure Sensor: "+s._s(s.celsiusToFahrenheit(s.senseHatData.temperatureFromPressure).toFixed(1))+" F"),a("br"),s._v("\n                    Humidity: "+s._s(s.senseHatData.humidity.toFixed(1))+"%"),a("br"),s._v("\n                    Pitch: "+s._s(s.senseHatData.pitch.toFixed(1))),a("br"),s._v("\n                    Roll: "+s._s(s.senseHatData.roll.toFixed(1))),a("br"),s._v("\n                    Yaw: "+s._s(s.senseHatData.yaw.toFixed(1))),a("br"),a("br"),s._v("\n                    Last Updated at "+s._s(s.lastUpdatedDate.toLocaleDateString()+" "+s.lastUpdatedDate.toLocaleTimeString())+"\n                ")])]),s._v(" "),s.serverRequestError?a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("b-alert",{attrs:{variant:"danger",show:""}},[a("i",{staticClass:"fas fa-exclamation-triangle"}),s._v(" "+s._s(s.serverRequestError)+"\n                    ")])],1)]):s._e()])])])};S._withStripped=!0;var F={name:"senseHatApp",data:()=>({senseHatData:{cpuTemp:0,temperature:0,pressure:0,temperatureFromPressure:0,humidity:0,pitch:0,roll:0,yaw:0},lastUpdatedDate:new Date,isLoading:!1,isRefreshing:!1,refreshInterval:3e4,serverRequestError:""}),created:async function(){this.isLoading=!0,w.a.defaults.headers.common["x-access-token"]=$cookies.get("DWWebsite_token");try{let s=await w.a.get("/sensehatapi/getsensehatdata");this.senseHatData=s.data,this.lastUpdatedDate=new Date,this.isLoading=!1,setInterval(this.refreshSenseHatData,this.refreshInterval)}catch(s){this.serverRequestError=s,console.log(s),this.isLoading=!1}},methods:{refreshSenseHatData:async function(){this.isRefreshing=!0,w.a.defaults.headers.common["x-access-token"]=$cookies.get("DWWebsite_token");try{let s=await w.a.get("/sensehatapi/getsensehatdata");this.senseHatData=s.data,this.lastUpdatedDate=new Date,this.isRefreshing=!1}catch(s){this.serverRequestError=s,console.log(s),this.isRefreshing=!1}},celsiusToFahrenheit:function(s){return 9*s/5+32},mbarToInHg:function(s){return s/33.864}}},W=Object(u.a)(F,S,[function(){var s=this.$createElement,e=this._self._c||s;return e("div",{staticClass:"col-12 large-wait-spinner"},[e("i",{staticClass:"fas fa-circle-notch fa-spin"}),this._v("\n                    Fetching Sense Hat Data\n                ")])}],!1,null,null,null);W.options.__file="public/src/components/SenseHatData.vue";var H=W.exports;a(70),a(72);r.default.use(i.a),r.default.use(o.a),r.default.use(n.a),new r.default({el:"#app",components:{Login:f,ChangePassword:_,EditUser:b,CreateUser:y,ManageUsers:L,SenseHatData:H}})}},[[77,18,3,16,1,2,15,17,4,5,6,7,8,9,10,12,13,14,11]]]);