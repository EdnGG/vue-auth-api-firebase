(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"16c8":function(e,t,r){},"1a24":function(e,t,r){"use strict";r.r(t);var a=r("7a23"),n=Object(a["g"])("h1",{class:"text-center mt-4"},"Edit Section",-1);function c(e,t,r,c,o,s){var i=Object(a["w"])("Input");return Object(a["p"])(),Object(a["d"])(a["a"],null,[n,Object(a["g"])("form",{onSubmit:t[1]||(t[1]=Object(a["G"])((function(t){return e.updateTarea(e.tarea)}),["prevent"]))},[Object(a["g"])(i,{tarea:e.tarea},null,8,["tarea"])],32)],64)}var o=r("5530"),s=r("5502"),i=r("1270"),u={components:{Input:i["a"]},computed:Object(o["a"])({},Object(s["d"])(["tarea"])),methods:Object(o["a"])({},Object(s["b"])(["setTarea","updateTarea"])),created:function(){this.setTarea(this.$route.params.id)}};u.render=c;t["default"]=u},2532:function(e,t,r){"use strict";var a=r("23e7"),n=r("5a34"),c=r("1d80"),o=r("ab13");a({target:"String",proto:!0,forced:!o("includes")},{includes:function(e){return!!~String(c(this)).indexOf(n(e),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(e,t,r){var a=r("861d"),n=r("c6b6"),c=r("b622"),o=c("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==n(e))}},"5a34":function(e,t,r){var a=r("44e7");e.exports=function(e){if(a(e))throw TypeError("The method doesn't accept regular expressions");return e}},"73cf":function(e,t,r){"use strict";r.r(t);var a=r("7a23"),n=Object(a["H"])("data-v-1bdb99e9");Object(a["s"])("data-v-1bdb99e9");var c=Object(a["g"])("h1",{class:"my-5 text-center"},"Users Register",-1),o={key:0,class:"alert alert-danger"};Object(a["q"])();var s=n((function(e,t,r,n,s,i){return Object(a["p"])(),Object(a["d"])(a["a"],null,[c,null!==e.error.tipo?(Object(a["p"])(),Object(a["d"])("div",o,Object(a["y"])(e.error.mensaje),1)):Object(a["e"])("",!0),Object(a["g"])("form",{onSubmit:t[4]||(t[4]=Object(a["G"])((function(){return i.procesarFormulario.apply(i,arguments)}),["prevent"]))},[Object(a["F"])(Object(a["g"])("input",{type:"email",placeholder:"email",class:["form-control my-2",["email"===e.error.tipo?"is-invalid":""]],"onUpdate:modelValue":t[1]||(t[1]=function(e){return s.email=e})},null,2),[[a["C"],s.email,void 0,{trim:!0}]]),Object(a["F"])(Object(a["g"])("input",{type:"password",placeholder:"password",class:"form-control my-2","onUpdate:modelValue":t[2]||(t[2]=function(e){return s.pass1=e})},null,512),[[a["C"],s.pass1,void 0,{trim:!0}]]),Object(a["F"])(Object(a["g"])("input",{type:"password",placeholder:"password",class:"form-control my-2","onUpdate:modelValue":t[3]||(t[3]=function(e){return s.pass2=e})},null,512),[[a["C"],s.pass2,void 0,{trim:!0}]]),Object(a["g"])("button",{type:"submit",class:"btn btn-primary btn-lg text-center my-4",disabled:i.bloquear}," Register ",8,["disabled"])],32)],64)})),i=(r("caad"),r("2532"),r("96cf"),r("1da1")),u=r("5530"),l=r("5502"),d={data:function(){return{email:"",pass1:"",pass2:""}},computed:Object(u["a"])({bloquear:function(){return!this.email.includes("@")||!(this.pass1.length>5&&this.pass1===this.pass2)}},Object(l["d"])(["error"])),methods:Object(u["a"])(Object(u["a"])({},Object(l["b"])(["registrarUsuario"])),{},{procesarFormulario:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.registrarUsuario({email:e.email,password:e.pass1});case 2:if(null===e.error.tipo){t.next=4;break}return t.abrupt("return");case 4:e.email="",e.pass1="",e.pass2="";case 7:case"end":return t.stop()}}),t)})))()}})};r("dec5");d.render=s,d.__scopeId="data-v-1bdb99e9";t["default"]=d},a55b:function(e,t,r){"use strict";r.r(t);var a=r("7a23"),n=Object(a["g"])("h1",{class:"my-5 text-center"},"Login User",-1),c={key:0,class:"alert alert-danger"};function o(e,t,r,o,s,i){return Object(a["p"])(),Object(a["d"])(a["a"],null,[n,null!==e.error.tipo?(Object(a["p"])(),Object(a["d"])("div",c,Object(a["y"])(e.error.mensaje),1)):Object(a["e"])("",!0),Object(a["g"])("form",{onSubmit:t[3]||(t[3]=Object(a["G"])((function(){return i.procesarFormulario.apply(i,arguments)}),["prevent"]))},[Object(a["F"])(Object(a["g"])("input",{type:"email",placeholder:"email",class:["form-control my-2",["email"===e.error.tipo?"is-invalid":""]],"onUpdate:modelValue":t[1]||(t[1]=function(e){return s.email=e})},null,2),[[a["C"],s.email,void 0,{trim:!0}]]),Object(a["F"])(Object(a["g"])("input",{type:"password",placeholder:"password",class:["form-control my-2",["password"===e.error.tipo?"is-invalid":""]],"onUpdate:modelValue":t[2]||(t[2]=function(e){return s.pass1=e})},null,2),[[a["C"],s.pass1,void 0,{trim:!0}]]),Object(a["g"])("button",{type:"submit",class:"btn btn-primary my-4 btn-lg",disabled:i.bloquear}," Login ",8,["disabled"])],32)],64)}r("caad"),r("2532"),r("96cf");var s=r("1da1"),i=r("5530"),u=r("5502"),l={data:function(){return{email:"",pass1:""}},computed:Object(i["a"])({bloquear:function(){return!this.email.includes("@")||!(this.pass1.length>5)}},Object(u["d"])(["error"])),methods:Object(i["a"])(Object(i["a"])({},Object(u["b"])(["loginUsuario"])),{},{procesarFormulario:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loginUsuario({email:e.email,password:e.pass1});case 2:if(null===e.error.tipo){t.next=4;break}return t.abrupt("return");case 4:e.email="",e.pass1="";case 6:case"end":return t.stop()}}),t)})))()}})};l.render=o;t["default"]=l},ab13:function(e,t,r){var a=r("b622"),n=a("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,"/./"[e](t)}catch(a){}}return!1}},caad:function(e,t,r){"use strict";var a=r("23e7"),n=r("4d64").includes,c=r("44d2"),o=r("ae40"),s=o("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:!s},{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),c("includes")},dec5:function(e,t,r){"use strict";r("16c8")},f820:function(e,t,r){"use strict";r.r(t);var a=r("7a23"),n={class:"about"},c=Object(a["g"])("h1",null,"This is an about page",-1);function o(e,t,r,o,s,i){return Object(a["p"])(),Object(a["d"])("div",n,[c])}const s={};s.render=o;t["default"]=s}}]);
//# sourceMappingURL=about.b543abd9.js.map