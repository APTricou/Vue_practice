(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8692639e"],{"02ab":function(e,t,r){"use strict";var n=r("712e"),a=r.n(n);a.a},"0e46":function(e,t,r){},"14c3":function(e,t,r){var n=r("c6b6"),a=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var i=r.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"1dde":function(e,t,r){var n=r("d039"),a=r("b622"),i=r("2d00"),o=a("species");e.exports=function(e){return i>=51||!n((function(){var t=[],r=t.constructor={};return r[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"25f0":function(e,t,r){"use strict";var n=r("6eeb"),a=r("825a"),i=r("d039"),o=r("ad6d"),s="toString",c=RegExp.prototype,u=c[s],l=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=s;(l||d)&&n(RegExp.prototype,s,(function(){var e=a(this),t=String(e.source),r=e.flags,n=String(void 0===r&&e instanceof RegExp&&!("flags"in c)?o.call(e):r);return"/"+t+"/"+n}),{unsafe:!0})},5319:function(e,t,r){"use strict";var n=r("d784"),a=r("825a"),i=r("7b0b"),o=r("50c4"),s=r("a691"),c=r("1d80"),u=r("8aa5"),l=r("14c3"),d=Math.max,f=Math.min,v=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,h=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var m=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,x=n.REPLACE_KEEPS_$0,b=m?"$":"$0";return[function(r,n){var a=c(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,a,n):t.call(String(a),r,n)},function(e,n){if(!m&&x||"string"===typeof n&&-1===n.indexOf(b)){var i=r(t,e,this,n);if(i.done)return i.value}var c=a(e),v=String(this),p="function"===typeof n;p||(n=String(n));var g=c.global;if(g){var _=c.unicode;c.lastIndex=0}var R=[];while(1){var E=l(c,v);if(null===E)break;if(R.push(E),!g)break;var S=String(E[0]);""===S&&(c.lastIndex=u(v,o(c.lastIndex),_))}for(var P="",C=0,A=0;A<R.length;A++){E=R[A];for(var w=String(E[0]),B=d(f(s(E.index),v.length),0),N=[],$=1;$<E.length;$++)N.push(h(E[$]));var I=E.groups;if(p){var T=[w].concat(N,B,v);void 0!==I&&T.push(I);var D=String(n.apply(void 0,T))}else D=y(w,v,B,N,I,n);B>=C&&(P+=v.slice(C,B)+D,C=B+w.length)}return P+v.slice(C)}];function y(e,r,n,a,o,s){var c=n+e.length,u=a.length,l=g;return void 0!==o&&(o=i(o),l=p),t.call(s,l,(function(t,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,n);case"'":return r.slice(c);case"<":s=o[i.slice(1,-1)];break;default:var l=+i;if(0===l)return t;if(l>u){var d=v(l/10);return 0===d?t:d<=u?void 0===a[d-1]?i.charAt(1):a[d-1]+i.charAt(1):t}s=a[l-1]}return void 0===s?"":s}))}}))},6547:function(e,t,r){var n=r("a691"),a=r("1d80"),i=function(e){return function(t,r){var i,o,s=String(a(t)),c=n(r),u=s.length;return c<0||c>=u?e?"":void 0:(i=s.charCodeAt(c),i<55296||i>56319||c+1===u||(o=s.charCodeAt(c+1))<56320||o>57343?e?s.charAt(c):i:e?s.slice(c,c+2):o-56320+(i-55296<<10)+65536)}};e.exports={codeAt:i(!1),charAt:i(!0)}},"712e":function(e,t,r){},"7fb3":function(e,t,r){"use strict";var n=r("0e46"),a=r.n(n);a.a},8418:function(e,t,r){"use strict";var n=r("c04e"),a=r("9bf2"),i=r("5c6c");e.exports=function(e,t,r){var o=n(t);o in e?a.f(e,o,i(0,r)):e[o]=r}},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},9263:function(e,t,r){"use strict";var n=r("ad6d"),a=r("9f7f"),i=RegExp.prototype.exec,o=String.prototype.replace,s=i,c=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=a.UNSUPPORTED_Y||a.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],d=c||l||u;d&&(s=function(e){var t,r,a,s,d=this,f=u&&d.sticky,v=n.call(d),p=d.source,g=0,h=e;return f&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),h=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(p="(?: "+p+")",h=" "+h,g++),r=new RegExp("^(?:"+p+")",v)),l&&(r=new RegExp("^"+p+"$(?!\\s)",v)),c&&(t=d.lastIndex),a=i.call(f?r:d,h),f?a?(a.input=a.input.slice(g),a[0]=a[0].slice(g),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:c&&a&&(d.lastIndex=d.global?a.index+a[0].length:t),l&&a&&a.length>1&&o.call(a[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(a[s]=void 0)})),a}),e.exports=s},"9f7f":function(e,t,r){"use strict";var n=r("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,r){"use strict";var n=r("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},ae40:function(e,t,r){var n=r("83ab"),a=r("d039"),i=r("5135"),o=Object.defineProperty,s={},c=function(e){throw e};e.exports=function(e,t){if(i(s,e))return s[e];t||(t={});var r=[][e],u=!!i(t,"ACCESSORS")&&t.ACCESSORS,l=i(t,0)?t[0]:c,d=i(t,1)?t[1]:void 0;return s[e]=!!r&&!a((function(){if(u&&!n)return!0;var e={length:-1};u?o(e,1,{enumerable:!0,get:c}):e[1]=1,r.call(e,l,d)}))}},d1f3:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"grid"},[e._m(0),r("div",{staticClass:"inputs"},[r("label",[e._v("queries/day")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.QPD,expression:"QPD"}],attrs:{type:"text"},domProps:{value:e.QPD},on:{input:function(t){t.target.composing||(e.QPD=t.target.value)}}}),r("label",[e._v("R/W ratio")]),r("div",[r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.Reads,expression:"Reads",modifiers:{number:!0}}],attrs:{type:"number",step:"1"},domProps:{value:e.Reads},on:{input:function(t){t.target.composing||(e.Reads=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),r("span",[e._v(" : ")]),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.Writes,expression:"Writes",modifiers:{number:!0}}],attrs:{type:"number",step:"1"},domProps:{value:e.Writes},on:{input:function(t){t.target.composing||(e.Writes=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),r("label",[e._v("bytes per record")]),r("div",{staticClass:"datainputs"},[r("div",{staticClass:"d"},[r("h3",[e._v("record 1")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.BytesPerRecord1,expression:"BytesPerRecord1"}],attrs:{type:"text"},domProps:{value:e.BytesPerRecord1},on:{input:function(t){t.target.composing||(e.BytesPerRecord1=t.target.value)}}})]),r("div",{staticClass:"d"},[r("h3",[e._v("record 2")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.BytesPerRecord2,expression:"BytesPerRecord2"}],attrs:{type:"text"},domProps:{value:e.BytesPerRecord2},on:{input:function(t){t.target.composing||(e.BytesPerRecord2=t.target.value)}}})]),r("textarea",{attrs:{placeholder:"space for notes"}})])]),r("div",{staticClass:"results"},[r("h3",[e._v("Queries")]),r("div",{staticClass:"inline"},[r("p",[e._v(e._s(e.formatNumber(365*e.queries))+" per year")]),r("p",[e._v(e._s(e.formatNumber(7*e.queries))+" per week")]),r("p",[e._v(e._s(e.formatNumber(e.queries))+" per day")]),r("p",[e._v(" "+e._s(e.formatNumber(Math.round(e.queries/86400)))+" per second ")])]),r("h3",[e._v("Reads and Writes")]),r("div",{staticClass:"inline"},[r("p",[e._v(" "+e._s(e.formatNumber(Math.round(e.queries/86400*e.Reads/e.total)))+" reads/s ")]),r("p",[e._v(" "+e._s(e.formatNumber(Math.round(e.queries/86400*e.Writes/e.total)))+" writes/s ")])]),r("h3",[e._v("Data Numbers")]),r("div",{staticClass:"inline"},[r("p",[e._v("Storage needed to hold for 10 years:")]),r("p",[e._v("This assumes all writes are new and unique")]),r("p",[e._v(" "+e._s(e.formatDataNumber(e.BytesComputed1*e.Writes*e.queries*365*10/e.total)||0)+" for record 1 ")]),r("p",[e._v(" "+e._s(e.formatDataNumber(e.BytesComputed2*e.Writes*e.queries*365*10/e.total)||0)+" for record 2 ")])])])]),r("Footer",{attrs:{date:"May 11th, 2020"}})],1)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("h1",[e._v("Service Calculator")])])}],i=(r("fb6a"),r("d3b7"),r("ac1f"),r("25f0"),r("5319"),r("fd2d")),o={data:function(){return{QPD:"0",Reads:1,Writes:1,BytesPerRecord1:"10",BytesPerRecord2:"10",suffixes:{K:"000",M:"000000",B:"000000000",T:"000000000000"},dataSuffixes:{kb:"000",mb:"000000",gb:"000000000",tb:"000000000000"}}},computed:{queries:function(){var e=this;return this.QPD.replace(/([a-z])/gi,(function(t){return e.suffixes[t.toUpperCase()]}))},total:function(){return this.Reads+this.Writes},BytesComputed1:function(){var e=this;return console.log(this.BytesPerRecord1),this.BytesPerRecord1.replace(/([a-z]+)/gi,(function(t){return e.dataSuffixes[t.toLowerCase()]}))},BytesComputed2:function(){var e=this;return this.BytesPerRecord2.replace(/([a-z]+)/gi,(function(t){return e.dataSuffixes[t.toLowerCase()]}))}},methods:{formatNumber:function(e){var t=Math.round(e).toString();return t.length>12?"~"+t.slice(0,-12)+"."+t[t.length-12]+"T":t.length>9?"~"+t.slice(0,-9)+"."+t[t.length-9]+"B":t.length>6?"~"+t.slice(0,-6)+"."+t[t.length-6]+"M":t.length>3?"~"+t.slice(0,-3)+"."+t[t.length-3]+"K":t},formatDataNumber:function(e){var t=Math.round(e).toString();return t.length>12?"~"+t.slice(0,-12)+"."+t[t.length-12]+"Tb":t.length>9?"~"+t.slice(0,-9)+"."+t[t.length-9]+"Gb":t.length>6?"~"+t.slice(0,-6)+"."+t[t.length-6]+"Mb":t.length>3?"~"+t.slice(0,-3)+"."+t[t.length-3]+"kb":t}},components:{Footer:i["a"]}},s=o,c=(r("7fb3"),r("2877")),u=Object(c["a"])(s,n,a,!1,null,"61ee0e60",null);t["default"]=u.exports},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),i=r("b622"),o=r("9263"),s=r("9112"),c=i("species"),u=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),v=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,d){var p=i(e),g=!a((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),h=g&&!a((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[c]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return t=!0,null},r[p](""),!t}));if(!g||!h||"replace"===e&&(!u||!l||f)||"split"===e&&!v){var m=/./[p],x=r(p,""[e],(function(e,t,r,n,a){return t.exec===o?g&&!a?{done:!0,value:m.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),b=x[0],y=x[1];n(String.prototype,e,b),n(RegExp.prototype,p,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}d&&s(RegExp.prototype[p],"sham",!0)}},e8b5:function(e,t,r){var n=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}},fb6a:function(e,t,r){"use strict";var n=r("23e7"),a=r("861d"),i=r("e8b5"),o=r("23cb"),s=r("50c4"),c=r("fc6a"),u=r("8418"),l=r("b622"),d=r("1dde"),f=r("ae40"),v=d("slice"),p=f("slice",{ACCESSORS:!0,0:0,1:2}),g=l("species"),h=[].slice,m=Math.max;n({target:"Array",proto:!0,forced:!v||!p},{slice:function(e,t){var r,n,l,d=c(this),f=s(d.length),v=o(e,f),p=o(void 0===t?f:t,f);if(i(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?a(r)&&(r=r[g],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return h.call(d,v,p);for(n=new(void 0===r?Array:r)(m(p-v,0)),l=0;v<p;v++,l++)v in d&&u(n,l,d[v]);return n.length=l,n}})},fd2d:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._v("Created on "+e._s(e.date))])},a=[],i={name:"Footer",props:["date"]},o=i,s=(r("02ab"),r("2877")),c=Object(s["a"])(o,n,a,!1,null,"9c91f5c6",null);t["a"]=c.exports}}]);
//# sourceMappingURL=chunk-8692639e.c7f85ffd.js.map