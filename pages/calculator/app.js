!function(e){var t={};function a(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(r,s,function(t){return e[t]}.bind(null,s));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=2)}([,,function(e,t,a){a(3),a(4),a(5),a(6);const r=e=>8*Math.pow(2,e),s=(e,t)=>e<-1*Math.pow(2,r(t)-1)||e>Math.pow(2,r(t)-1)-1,n={BYTE:0,WORD:1,DWORD:2},c=0,i=1,o=2,u=3,l={NONE:0,EQUAL:1,MOD:2,AND:3,OR:4,XOR:5,ADD:6,SUB:7,MUL:8,DIV:9},d={IDLE:0,AC:1,OP:2,NUM:3,OF:4},O=(e,t)=>{for(var a in e)if(e[a]==t)return a},v=e=>{switch(e){case n.BYTE:return 8;case n.WORD:return 16;case n.DWORD:return 32}},b=(e,t)=>{var a=0;switch(t){case c:a=parseInt(e,16);break;case i:a=parseInt(e,10);break;case o:a=parseInt(e,8);break;case u:a=parseInt(e,2)}return t!=i&&a>Math.pow(2,r(f)-1)-1&&(a-=Math.pow(2,r(f))),a},D=(e,t,a,r)=>{var s=v(r),n=b(e,t);return isNaN(n)?"NaN":a==i?n.toString(10):(-1==Math.sign(n)&&(n=Math.pow(2,s)+n),a==c?n.toString(16).toUpperCase():a==o?n.toString(8):a==u?n.toString(2).padStart(32,"0"):"0")};var f=n.DWORD,p=i,L=0,k=0,M=0,h=0,E=d.IDLE,m=l.NONE,A=l.NONE,T=l.NONE,U="0",N=document.querySelector("#btnType"),S=document.querySelector("#btnAC"),x=document.querySelectorAll(".list__item"),g=document.querySelector("#numpad"),y=g.querySelectorAll(".pad__btn"),w=null;const I=()=>{y.forEach(e=>{e.classList.remove("is-active")})};N.addEventListener("click",e=>{f=(f+1)%Object.keys(n).length,N.innerText=O(n,f);var t=b(U,p);if(s(t,f)){const e=r(f);U=D(t.toString(2).padStart(32,"0").substr(32-e,e),u,p,f)}R(U,f,p)}),x.forEach((e,t)=>{e.addEventListener("click",a=>{I();var r=p;x.forEach(e=>{e.classList.remove("is-active")}),e.classList.add("is-active"),U=D(U,r,p=t,f),y.forEach(e=>{p>c&&e.dataset.tag.match(/^[abcdef]$/)||p>i&&e.dataset.tag.match(/^[98]$/)||p>o&&e.dataset.tag.match(/^[765432]$/)?e.classList.add("is-disabled"):e.classList.remove("is-disabled")})})});const R=(e,t,a)=>{if(E==d.OF)return valueBin.innerText="OVERFLOW",valueDec.innerText="OVERFLOW",valueHex.innerText="OVERFLOW",valueOct.innerText="OVERFLOW",!0;var r=v(t),s=D(e,a,u,t),n=s.substr(24,8);r>8&&(n=s.substr(16,8)+" "+n),r>16&&(n=s.substr(0,8)+" "+s.substr(8,8)+"\n"+n),valueBin.innerText=n;var l=D(e,a,i,t);valueDec.innerText=l,valueHex.innerText=D(e,a,c,t),valueOct.innerText=D(e,a,o,t)},F=()=>{valueBin.innerText=valueDec.innerText=valueHex.innerText=valueOct.innerText=""},V=()=>{L=0,k=0,M=0,h=0,E=d.NUM,m=l.NONE,A=l.ADD,T=l.NONE,U="0",w=null,S.innerText="AC",I(),R(U,f,p)},_=(e,t,a)=>{a=a||!1;var r=b(U,p);const s=e=>t==l.MUL?0==k?r:k*r:t==l.DIV?0==k?r:k/r:e(L,r),n=e=>t==l.ADD||t==l.SUB?L+e(k,r):e(k,r),c=e=>t==l.MUL?0==k?r:k*r:t==l.DIV?0==k?r:k/r:e(L,r),i=e=>{t==l.EQUAL?(L=e(L+k,r),k=0):t==l.MUL||t==l.DIV?(k=r,h++):(L=e(L,r),t==l.MOD&&(k=L,L=0))},o=e=>{t==l.MUL||t==l.DIV||t==l.MOD?(k=e(k,r),h++):(L=e(L,r),h=0)};if(!0===a)switch(e){case l.OR:return c((e,t)=>e|t);case l.XOR:return c((e,t)=>e^t);case l.AND:return c((e,t)=>e&t);case l.ADD:return s((e,t)=>e+t);case l.SUB:return s((e,t)=>e-t);case l.MUL:return n((e,t)=>e*t);case l.DIV:return n((e,t)=>e/t);case l.MOD:return n((e,t)=>e%t);default:return 0}switch(e){case l.OR:i((e,t)=>e|t);break;case l.XOR:i((e,t)=>e^t);break;case l.AND:i((e,t)=>e&t);break;case l.MOD:k%=r;break;case l.ADD:o((e,t)=>e+t);break;case l.SUB:o((e,t)=>e-t);break;case l.MUL:k=0==h?r:k*r,h++;break;case l.DIV:k=0==h?r:parseInt(k/r),h++}t==l.EQUAL&&(M=L+k,e==l.MUL||e==l.DIV?(L=0,k=M):e!=l.ADD&&e!=l.SUB||(L=M,k=0))},P=e=>{e.classList.add("is-active"),setTimeout(()=>{e.classList.remove("is-active")},50)},B=e=>{if(E!=d.OF){if(E!=d.IDLE){var t=_(A,T,!0);F(),setTimeout(()=>{R(t.toString(10),f,i)},20),s(t,f)&&(E=d.OF)}E!=d.OP?(w=e,E==d.IDLE&&(h=0,A==l.ADD||A==l.SUB||A==l.AND||A==l.XOR||A==l.OR?(U=D(L,i,p,f),L=0,A=l.ADD):A!=l.MUL&&A!=l.DIV&&A!=l.MOD||(U=D(k,i,p,f),k=0,A=l.MUL))):E==d.OP&&I(),E=d.OP,e.classList.add("is-active")}};var C="ontouchend"in window?"touchend":"click";const W=e=>{if(!e.classList.contains("pad__btn")||e.classList.contains("is-disabled"))return;const t=t=>{var a=t(parseInt(valueDec.innerText));if(s(a,f))E=d.OF;else{var r=D(a.toString(),i,p,f);R(r,f,p),U=r}P(e)};var a=e.dataset.tag;switch(a){case"+":T=l.ADD,B(e);break;case"-":T=l.SUB,B(e);break;case"*":T=l.MUL,B(e);break;case"/":T=l.DIV,B(e);break;case"&":T=l.AND,B(e);break;case"|":T=l.OR,B(e);break;case"^":T=l.XOR,B(e);break;case"%":T=l.MOD,B(e);break;case"=":(e=>{E!=d.OF&&(I(),E==d.OP&&(_(A,T),m=A,A=T),T=l.EQUAL,_(A,l.EQUAL),E=d.IDLE,F(),s(M,f)?E=d.OF:setTimeout(()=>{R(M.toString(10),f,i)},20),P(e))})(e);break;case"pow":t(e=>Math.pow(2,e));break;case"+/-":t(e=>-1*e);break;case"shr":t(e=>e>>1);break;case"shl":t(e=>e<<1);break;case"~":t(e=>~e);break;case"ac":E==d.OP?(E=d.AC,S.innerText="AC",I(),R("0",f,p)):E==d.NUM?(E=d.AC,T=A,A=m,w&&w.classList.add("is-active"),S.innerText="AC",R(U="0",f,p)):(F(),setTimeout(()=>{V()},20)),P(S);break;default:((e,t)=>{if(E!=d.OF){if(E==d.NUM)s(b(U+t,p),f)?E=d.OF:U+=t;else E==d.OP||E==d.AC?(I(),m=A,A=T,T=l.NONE,E==d.OP&&_(m,A),U=t,E=d.NUM):E==d.IDLE&&(V(),U=t,E=d.NUM);S.innerText="C",R(U,f,p),P(e)}})(e,a)}E==d.OF&&R(0,f,p)};g.addEventListener(C,e=>{W(e.target)},{passive:!1}),document.addEventListener("touchstart",e=>{e.touches.length>1&&e.preventDefault()},{passive:!1});var j=0;document.addEventListener("touchend",e=>{var t=(new Date).getTime();t-j<=300&&e.preventDefault(),j=t},!1);var q=null;const Q=()=>{(q=new Audio).src="./audios/tapping.wav"};Q(),g.addEventListener("touchstart",e=>{Q(),q.currentTime=0}),document.addEventListener("keydown",e=>{var t=e.key.toLowerCase(),a="";switch(t){case"tab":return e.preventDefault(),void document.querySelector("#btnType").click();case"backspace":case"delete":a="ac";break;case"!":a="~";break;case"<":a="shl";break;case">":a="shr";break;case"enter":a="=";break;case"+":case"-":case"*":case"/":case"%":case"&":case"|":case"^":case"~":case"=":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case"a":case"b":case"c":case"d":case"e":case"f":a=t}W(document.querySelector(`.pad__btn[data-tag="${a}"]`))}),V()},function(e,t,a){e.exports=a.p+"index.html"},function(e,t,a){},function(e,t,a){},function(e,t,a){}]);