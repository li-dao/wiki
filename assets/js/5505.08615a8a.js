"use strict";(self.webpackChunklidao_wiki=self.webpackChunklidao_wiki||[]).push([[5505],{8651:(e,t,r)=>{r.d(t,{A:()=>ae});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)})),this.tags=[],this.ctr=0},e}(),a=Math.abs,i=String.fromCharCode,o=Object.assign;function s(e){return e.trim()}function c(e,t,r){return e.replace(t,r)}function l(e,t){return e.indexOf(t)}function u(e,t){return 0|e.charCodeAt(t)}function f(e,t,r){return e.slice(t,r)}function d(e){return e.length}function p(e){return e.length}function h(e,t){return t.push(e),e}var m=1,g=1,v=0,y=0,b=0,k="";function w(e,t,r,n,a,i,o){return{value:e,root:t,parent:r,type:n,props:a,children:i,line:m,column:g,length:o,return:""}}function x(e,t){return o(w("",null,null,"",null,null,0),e,{length:-e.length},t)}function C(){return b=y>0?u(k,--y):0,g--,10===b&&(g=1,m--),b}function A(){return b=y<v?u(k,y++):0,g++,10===b&&(g=1,m++),b}function S(){return u(k,y)}function _(){return y}function E(e,t){return f(k,e,t)}function P(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T(e){return m=g=1,v=d(k=e),y=0,[]}function O(e){return k="",e}function $(e){return s(E(y-1,M(91===e?e+2:40===e?e+1:e)))}function R(e){for(;(b=S())&&b<33;)A();return P(e)>2||P(b)>3?"":" "}function N(e,t){for(;--t&&A()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return E(e,_()+(t<6&&32==S()&&32==A()))}function M(e){for(;A();)switch(b){case e:return y;case 34:case 39:34!==e&&39!==e&&M(b);break;case 40:41===e&&M(e);break;case 92:A()}return y}function z(e,t){for(;A()&&e+b!==57&&(e+b!==84||47!==S()););return"/*"+E(t,y-1)+"*"+i(47===e?e:A())}function L(e){for(;!P(S());)A();return E(e,y)}var I="-ms-",F="-moz-",j="-webkit-",H="comm",q="rule",D="decl",U="@keyframes";function W(e,t){for(var r="",n=p(e),a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function G(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case D:return e.return=e.return||e.value;case H:return"";case U:return e.return=e.value+"{"+W(e.children,n)+"}";case q:e.value=e.props.join(",")}return d(r=W(e.children,n))?e.return=e.value+"{"+r+"}":""}function B(e){return O(X("",null,null,null,[""],e=T(e),0,[0],e))}function X(e,t,r,n,a,o,s,f,p){for(var m=0,g=0,v=s,y=0,b=0,k=0,w=1,x=1,E=1,P=0,T="",O=a,M=o,I=n,F=T;x;)switch(k=P,P=A()){case 40:if(108!=k&&58==u(F,v-1)){-1!=l(F+=c($(P),"&","&\f"),"&\f")&&(E=-1);break}case 34:case 39:case 91:F+=$(P);break;case 9:case 10:case 13:case 32:F+=R(k);break;case 92:F+=N(_()-1,7);continue;case 47:switch(S()){case 42:case 47:h(Y(z(A(),_()),t,r),p);break;default:F+="/"}break;case 123*w:f[m++]=d(F)*E;case 125*w:case 59:case 0:switch(P){case 0:case 125:x=0;case 59+g:-1==E&&(F=c(F,/\f/g,"")),b>0&&d(F)-v&&h(b>32?J(F+";",n,r,v-1):J(c(F," ","")+";",n,r,v-2),p);break;case 59:F+=";";default:if(h(I=V(F,t,r,m,g,a,f,T,O=[],M=[],v),o),123===P)if(0===g)X(F,t,I,I,O,o,v,f,M);else switch(99===y&&110===u(F,3)?100:y){case 100:case 108:case 109:case 115:X(e,I,I,n&&h(V(e,I,I,0,0,a,f,T,a,O=[],v),M),a,M,v,f,n?O:M);break;default:X(F,I,I,I,[""],M,0,f,M)}}m=g=b=0,w=E=1,T=F="",v=s;break;case 58:v=1+d(F),b=k;default:if(w<1)if(123==P)--w;else if(125==P&&0==w++&&125==C())continue;switch(F+=i(P),P*w){case 38:E=g>0?1:(F+="\f",-1);break;case 44:f[m++]=(d(F)-1)*E,E=1;break;case 64:45===S()&&(F+=$(A())),y=S(),g=v=d(T=F+=L(_())),P++;break;case 45:45===k&&2==d(F)&&(w=0)}}return o}function V(e,t,r,n,i,o,l,u,d,h,m){for(var g=i-1,v=0===i?o:[""],y=p(v),b=0,k=0,x=0;b<n;++b)for(var C=0,A=f(e,g+1,g=a(k=l[b])),S=e;C<y;++C)(S=s(k>0?v[C]+" "+A:c(A,/&\f/g,v[C])))&&(d[x++]=S);return w(e,t,r,0===i?q:u,d,h,m)}function Y(e,t,r){return w(e,t,r,H,i(b),f(e,2,-2),0)}function J(e,t,r,n){return w(e,t,r,D,f(e,0,n),f(e,n+1,-1),n)}var K=function(e,t,r){for(var n=0,a=0;n=a,a=S(),38===n&&12===a&&(t[r]=1),!P(a);)A();return E(e,y)},Z=function(e,t){return O(function(e,t){var r=-1,n=44;do{switch(P(n)){case 0:38===n&&12===S()&&(t[r]=1),e[r]+=K(y-1,t,r);break;case 2:e[r]+=$(n);break;case 4:if(44===n){e[++r]=58===S()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=i(n)}}while(n=A());return e}(T(e),t))},Q=new WeakMap,ee=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Q.get(r))&&!n){Q.set(e,!0);for(var a=[],i=Z(t,a),o=r.props,s=0,c=0;s<i.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=a[s]?i[s].replace(/&\f/g,o[l]):o[l]+" "+i[s]}}},te=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function re(e,t){switch(function(e,t){return 45^u(e,0)?(((t<<2^u(e,0))<<2^u(e,1))<<2^u(e,2))<<2^u(e,3):0}(e,t)){case 5103:return j+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return j+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return j+e+F+e+I+e+e;case 6828:case 4268:return j+e+I+e+e;case 6165:return j+e+I+"flex-"+e+e;case 5187:return j+e+c(e,/(\w+).+(:[^]+)/,j+"box-$1$2"+I+"flex-$1$2")+e;case 5443:return j+e+I+"flex-item-"+c(e,/flex-|-self/,"")+e;case 4675:return j+e+I+"flex-line-pack"+c(e,/align-content|flex-|-self/,"")+e;case 5548:return j+e+I+c(e,"shrink","negative")+e;case 5292:return j+e+I+c(e,"basis","preferred-size")+e;case 6060:return j+"box-"+c(e,"-grow","")+j+e+I+c(e,"grow","positive")+e;case 4554:return j+c(e,/([^-])(transform)/g,"$1"+j+"$2")+e;case 6187:return c(c(c(e,/(zoom-|grab)/,j+"$1"),/(image-set)/,j+"$1"),e,"")+e;case 5495:case 3959:return c(e,/(image-set\([^]*)/,j+"$1$`$1");case 4968:return c(c(e,/(.+:)(flex-)?(.*)/,j+"box-pack:$3"+I+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+j+e+e;case 4095:case 3583:case 4068:case 2532:return c(e,/(.+)-inline(.+)/,j+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(d(e)-1-t>6)switch(u(e,t+1)){case 109:if(45!==u(e,t+4))break;case 102:return c(e,/(.+:)(.+)-([^]+)/,"$1"+j+"$2-$3$1"+F+(108==u(e,t+3)?"$3":"$2-$3"))+e;case 115:return~l(e,"stretch")?re(c(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==u(e,t+1))break;case 6444:switch(u(e,d(e)-3-(~l(e,"!important")&&10))){case 107:return c(e,":",":"+j)+e;case 101:return c(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+j+(45===u(e,14)?"inline-":"")+"box$3$1"+j+"$2$3$1"+I+"$2box$3")+e}break;case 5936:switch(u(e,t+11)){case 114:return j+e+I+c(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return j+e+I+c(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return j+e+I+c(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return j+e+I+e+e}return e}var ne=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case D:e.return=re(e.value,e.length);break;case U:return W([x(e,{value:c(e.value,"@","@"+j)})],n);case q:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return W([x(e,{props:[c(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return W([x(e,{props:[c(t,/:(plac\w+)/,":"+j+"input-$1")]}),x(e,{props:[c(t,/:(plac\w+)/,":-moz-$1")]}),x(e,{props:[c(t,/:(plac\w+)/,I+"input-$1")]})],n)}return""}))}}],ae=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var a,i,o=e.stylisPlugins||ne,s={},c=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)s[t[r]]=!0;c.push(e)}));var l,u,f,d,h=[G,(d=function(e){l.insert(e)},function(e){e.root||(e=e.return)&&d(e)})],m=(u=[ee,te].concat(o,h),f=p(u),function(e,t,r,n){for(var a="",i=0;i<f;i++)a+=u[i](e,t,r,n)||"";return a});i=function(e,t,r,n){l=r,W(B(e?e+"{"+t.styles+"}":t.styles),m),n&&(g.inserted[t.name]=!0)};var g={key:t,sheet:new n({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:i};return g.sheet.hydrate(c),g}},6289:(e,t,r)=>{function n(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}r.d(t,{A:()=>n})},6341:(e,t,r)=>{r.d(t,{E:()=>b,T:()=>d,a:()=>h,c:()=>v,h:()=>m,w:()=>f});var n=r(6540),a=r(8651),i=r(8168),o=function(e){var t=new WeakMap;return function(r){if(t.has(r))return t.get(r);var n=e(r);return t.set(r,n),n}},s=r(41),c=r(6255),l=r(1287),u=n.createContext("undefined"!=typeof HTMLElement?(0,a.A)({key:"css"}):null),f=(u.Provider,function(e){return(0,n.forwardRef)((function(t,r){var a=(0,n.useContext)(u);return e(t,a,r)}))}),d=n.createContext({}),p=o((function(e){return o((function(t){return function(e,t){return"function"==typeof t?t(e):(0,i.A)({},e,t)}(e,t)}))})),h=function(e){var t=n.useContext(d);return e.theme!==t&&(t=p(t)(e.theme)),n.createElement(d.Provider,{value:t},e.children)};var m={}.hasOwnProperty,g="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",v=function(e,t){var r={};for(var n in t)m.call(t,n)&&(r[n]=t[n]);return r[g]=e,r},y=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return(0,s.SF)(t,r,n),(0,l.s)((function(){return(0,s.sk)(t,r,n)})),null},b=f((function(e,t,r){var a=e.css;"string"==typeof a&&void 0!==t.registered[a]&&(a=t.registered[a]);var i=e[g],o=[a],l="";"string"==typeof e.className?l=(0,s.Rk)(t.registered,o,e.className):null!=e.className&&(l=e.className+" ");var u=(0,c.J)(o,void 0,n.useContext(d));l+=t.key+"-"+u.name;var f={};for(var p in e)m.call(e,p)&&"css"!==p&&p!==g&&(f[p]=e[p]);return f.className=l,r&&(f.ref=r),n.createElement(n.Fragment,null,n.createElement(y,{cache:t,serialized:u,isStringTag:"string"==typeof i}),n.createElement(i,f))}))},6255:(e,t,r)=>{r.d(t,{J:()=>g});var n={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},a=r(6289),i=!1,o=/[A-Z]|^ms/g,s=/_EMO_([^_]+?)_([^]*?)_EMO_/g,c=function(e){return 45===e.charCodeAt(1)},l=function(e){return null!=e&&"boolean"!=typeof e},u=(0,a.A)((function(e){return c(e)?e:e.replace(o,"-$&").toLowerCase()})),f=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(s,(function(e,t,r){return h={name:t,styles:r,next:h},t}))}return 1===n[e]||c(e)||"number"!=typeof t||0===t?t:t+"px"},d="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function p(e,t,r){if(null==r)return"";var n=r;if(void 0!==n.__emotion_styles)return n;switch(typeof r){case"boolean":return"";case"object":var a=r;if(1===a.anim)return h={name:a.name,styles:a.styles,next:h},a.name;var o=r;if(void 0!==o.styles){var s=o.next;if(void 0!==s)for(;void 0!==s;)h={name:s.name,styles:s.styles,next:h},s=s.next;return o.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=p(e,t,r[a])+";";else for(var o in r){var s=r[o];if("object"!=typeof s){var c=s;null!=t&&void 0!==t[c]?n+=o+"{"+t[c]+"}":l(c)&&(n+=u(o)+":"+f(o,c)+";")}else{if("NO_COMPONENT_SELECTOR"===o&&i)throw new Error(d);if(!Array.isArray(s)||"string"!=typeof s[0]||null!=t&&void 0!==t[s[0]]){var h=p(e,t,s);switch(o){case"animation":case"animationName":n+=u(o)+":"+h+";";break;default:n+=o+"{"+h+"}"}}else for(var m=0;m<s.length;m++)l(s[m])&&(n+=u(o)+":"+f(o,s[m])+";")}}return n}(e,t,r);case"function":if(void 0!==e){var c=h,m=r(e);return h=c,p(e,t,m)}}var g=r;if(null==t)return g;var v=t[g];return void 0!==v?v:g}var h,m=/label:\s*([^\s;{]+)\s*(;|$)/g;function g(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";h=void 0;var i=e[0];null==i||void 0===i.raw?(n=!1,a+=p(r,t,i)):a+=i[0];for(var o=1;o<e.length;o++){if(a+=p(r,t,e[o]),n)a+=i[o]}m.lastIndex=0;for(var s,c="";null!==(s=m.exec(a));)c+="-"+s[1];var l=function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(a)+c;return{name:l,styles:a,next:h}}},5505:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(8168),a=r(6341),i=r(6255),o=r(1287),s=r(41),c=r(6540),l=r(6289),u=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,f=(0,l.A)((function(e){return u.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),d=function(e){return"theme"!==e},p=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?f:d},h=function(e,t,r){var n;if(t){var a=t.shouldForwardProp;n=e.__emotion_forwardProp&&a?function(t){return e.__emotion_forwardProp(t)&&a(t)}:a}return"function"!=typeof n&&r&&(n=e.__emotion_forwardProp),n},m=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return(0,s.SF)(t,r,n),(0,o.s)((function(){return(0,s.sk)(t,r,n)})),null},g=function e(t,r){var o,l,u=t.__emotion_real===t,f=u&&t.__emotion_base||t;void 0!==r&&(o=r.label,l=r.target);var d=h(t,r,u),g=d||p(f),v=!g("as");return function(){var y=arguments,b=u&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==o&&b.push("label:"+o+";"),null==y[0]||void 0===y[0].raw)b.push.apply(b,y);else{var k=y[0];b.push(k[0]);for(var w=y.length,x=1;x<w;x++)b.push(y[x],k[x])}var C=(0,a.w)((function(e,t,r){var n=v&&e.as||f,o="",u=[],h=e;if(null==e.theme){for(var y in h={},e)h[y]=e[y];h.theme=c.useContext(a.T)}"string"==typeof e.className?o=(0,s.Rk)(t.registered,u,e.className):null!=e.className&&(o=e.className+" ");var k=(0,i.J)(b.concat(u),t.registered,h);o+=t.key+"-"+k.name,void 0!==l&&(o+=" "+l);var w=v&&void 0===d?p(n):g,x={};for(var C in e)v&&"as"===C||w(C)&&(x[C]=e[C]);return x.className=o,r&&(x.ref=r),c.createElement(c.Fragment,null,c.createElement(m,{cache:t,serialized:k,isStringTag:"string"==typeof n}),c.createElement(n,x))}));return C.displayName=void 0!==o?o:"Styled("+("string"==typeof f?f:f.displayName||f.name||"Component")+")",C.defaultProps=t.defaultProps,C.__emotion_real=C,C.__emotion_base=f,C.__emotion_styles=b,C.__emotion_forwardProp=d,Object.defineProperty(C,"toString",{value:function(){return"."+l}}),C.withComponent=function(t,a){return e(t,(0,n.A)({},r,a,{shouldForwardProp:h(C,a,!0)})).apply(void 0,b)},C}}.bind(null);["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){g[e]=g(e)}))},1287:(e,t,r)=>{var n;r.d(t,{s:()=>o});var a=r(6540),i=!!(n||(n=r.t(a,2))).useInsertionEffect&&(n||(n=r.t(a,2))).useInsertionEffect,o=i||function(e){return e()};i||a.useLayoutEffect},41:(e,t,r)=>{r.d(t,{Rk:()=>n,SF:()=>a,sk:()=>i});function n(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):r&&(n+=r+" ")})),n}var a=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},i=function(e,t,r){a(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var i=t;do{e.insert(t===i?"."+n:"",i,e.sheet,!0),i=i.next}while(void 0!==i)}}}}]);