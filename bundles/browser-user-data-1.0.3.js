var browserUserData=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function l(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new n((function(t){t(e.value)})).then(a,l)}c((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},a=this;Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),c=o(n(3));t.extractData=function(e){return void 0===e&&(e={extractLocation:!0}),r(a,void 0,void 0,(function(){var t,n;return i(this,(function(o){switch(o.label){case 0:return t={},[4,r(a,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return e=l.networks.map((function(e){var t=document.createElement("img");return t.src=e.url,new Promise((function(n,r){t.onload=function(){n(e.name)},t.onerror=function(){n(null)}}))})),[4,Promise.all(e)];case 1:return[2,t.sent().filter((function(e){return!!e}))]}}))}))];case 1:return t.connectedSocialMedias=o.sent(),e.extractLocation?[4,r(a,void 0,void 0,(function(){return i(this,(function(e){return navigator.geolocation?[2,new Promise((function(e,t){navigator.geolocation.getCurrentPosition((function(t){e({latitude:t.coords.latitude,longitude:t.coords.longitude})}),t)}))]:[2]}))})).catch((function(){}))]:[3,3];case 2:return n=o.sent(),[3,4];case 3:n=void 0,o.label=4;case 4:return t.location=n,[4,r(a,void 0,void 0,(function(){return i(this,(function(e){return[2,document.referrer]}))}))];case 5:return t.referrer=o.sent(),[4,r(a,void 0,void 0,(function(){return i(this,(function(e){return[2,{name:c.name,version:c.version,layout:c.layout,os:c.os?{architecture:c.os.architecture,family:c.os.family,version:c.os.version}:void 0,description:c.description,product:c.product,manufacturer:c.manufacturer}]}))}))];case 6:return t.platform=o.sent(),[4,r(a,void 0,void 0,(function(){function e(e){var t={renderer:"",vendor:""},n=e.getExtension("WEBGL_debug_renderer_info");return n&&(t.renderer=e.getParameter(n.UNMASKED_RENDERER_WEBGL),t.vendor=e.getParameter(n.UNMASKED_VENDOR_WEBGL)),t}var t,n,r,o,a;return i(this,(function(i){switch(i.label){case 0:return t=document.createElement("canvas"),n=t.getContext("experimental-webgl"),(r=navigator).getBattery?[4,r.getBattery()]:[3,2];case 1:return a=i.sent(),[3,3];case 2:a=null,i.label=3;case 3:return o=a,[2,{vendor:e(n).vendor,renderer:e(n).renderer,screenWidth:screen.width,screenHeight:screen.height,battery:o?{level:o.level,charging:o.charging}:void 0}]}}))}))];case 7:return[2,(t.hardware=o.sent(),t)]}}))}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.networks=[{url:"https://squareup.com/login?return_to=%2Ffavicon.ico",name:r.SocialMedia.SQUARE},{url:"https://www.instagram.com/accounts/login/?next=%2Ffavicon.ico",name:r.SocialMedia.INSTAGRAM},{url:"https://twitter.com/login?redirect_after_login=%2Ffavicon.ico",name:r.SocialMedia.TWITTER},{url:"https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Ffavicon.ico%3F_rdr%3Dp",name:r.SocialMedia.FACEBOOK},{url:"https://accounts.google.com/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.google.com%2Ffavicon.ico&uilel=3&hl=de&service=youtube",name:r.SocialMedia.GOOGLE},{url:"https://login.skype.com/login?message=signin_continue&redirect_uri=https%3A%2F%2Fsecure.skype.com%2Ffavicon.ico",name:r.SocialMedia.SKYPE},{url:"https://www.spotify.com/de/login/?forward_url=https%3A%2F%2Fwww.spotify.com%2Ffavicon.ico",name:r.SocialMedia.SPOTIFY},{url:"https://www.reddit.com/login?dest=https%3A%2F%2Fwww.reddit.com%2Ffavicon.ico",name:r.SocialMedia.REDDIT},{url:"https://www.tumblr.com/login?redirect_to=%2Ffavicon.ico",name:r.SocialMedia.TUMBLR},{url:"https://www.expedia.de/user/login?ckoflag=0&selc=0&uurl=qscr%3Dreds%26rurl%3D%252Ffavicon.ico",name:r.SocialMedia.EXPEDIA},{url:"https://www.dropbox.com/login?cont=https%3A%2F%2Fwww.dropbox.com%2Fstatic%2Fimages%2Ficons%2Ficon_spacer-vflN3BYt2.gif",name:r.SocialMedia.DROPBOX},{url:"https://www.amazon.com/ap/signin/178-4417027-1316064?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=10000000&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Ffavicon.ico",name:r.SocialMedia.AMAZON},{url:"https://www.pinterest.com/login/?next=https%3A%2F%2Fwww.pinterest.com%2Ffavicon.ico",name:r.SocialMedia.PINTEREST},{url:"https://www.netflix.com/Login?nextpage=%2Ffavicon.ico",name:r.SocialMedia.NETFLIX},{url:"https://de.foursquare.com/login?continue=%2Ffavicon.ico",name:r.SocialMedia.FOURSQUARE},{url:"https://eu.battle.net/login/de/index?ref=http://eu.battle.net/favicon.ico",name:r.SocialMedia.BATTLE_NET},{url:"https://store.steampowered.com/login/?redir=favicon.ico",name:r.SocialMedia.STEAM},{url:"https://www.academia.edu/login?cp=/favicon.ico&cs=www",name:r.SocialMedia.ACADEMIA_EDU},{url:"https://stackoverflow.com/users/login?ssrc=head&returnurl=http%3a%2f%2fstackoverflow.com%2ffavicon.ico",name:r.SocialMedia.STACK_OVERFLOW},{url:"https://accounts.google.com/ServiceLogin?service=blogger&hl=de&passive=1209600&continue=https://www.blogger.com/favicon.ico",name:r.SocialMedia.BLOGGER}]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.SQUARE="Square",e.INSTAGRAM="Instagram",e.TWITTER="Twitter",e.FACEBOOK="Facebook",e.GOOGLE="Google",e.SKYPE="Skype",e.SPOTIFY="Spotify",e.REDDIT="Reddit",e.TUMBLR="Tumblr",e.EXPEDIA="Expedia",e.DROPBOX="Dropbox",e.AMAZON="Amazon",e.PINTEREST="Pinterest",e.NETFLIX="Netflix",e.FOURSQUARE="Foursquare",e.BATTLE_NET="Battle.net",e.STEAM="Steam",e.ACADEMIA_EDU="Academia.edu",e.STACK_OVERFLOW="Stack Overflow",e.BLOGGER="Blogger"}(t.SocialMedia||(t.SocialMedia={}))},function(e,t,n){(function(e,r){var i;
/*!
 * Platform.js v1.3.6
 * Copyright 2014-2020 Benjamin Tan
 * Copyright 2011-2013 John-David Dalton
 * Available under MIT license
 */(function(){"use strict";var o={function:!0,object:!0},a=o[typeof window]&&window||this,l=o[typeof t]&&t,c=o[typeof e]&&e&&!e.nodeType&&e,s=l&&c&&"object"==typeof r&&r;!s||s.global!==s&&s.window!==s&&s.self!==s||(a=s);var u=Math.pow(2,53)-1,p=/\bOpera/,d=Object.prototype,b=d.hasOwnProperty,f=d.toString;function h(e){return(e=String(e)).charAt(0).toUpperCase()+e.slice(1)}function m(e){return e=v(e),/^(?:webOS|i(?:OS|P))/.test(e)?e:h(e)}function S(e,t){for(var n in e)b.call(e,n)&&t(e[n],n,e)}function g(e){return null==e?h(e):f.call(e).slice(8,-1)}function w(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}function x(e,t){var n=null;return function(e,t){var n=-1,r=e?e.length:0;if("number"==typeof r&&r>-1&&r<=u)for(;++n<r;)t(e[n],n,e);else S(e,t)}(e,(function(r,i){n=t(n,r,i,e)})),n}function v(e){return String(e).replace(/^ +| +$/g,"")}var y=function e(t){var n=a,r=t&&"object"==typeof t&&"String"!=g(t);r&&(n=t,t=null);var i=n.navigator||{},o=i.userAgent||"";t||(t=o);var l,c,s,u,d,b=r?!!i.likeChrome:/\bChrome\b/.test(t)&&!/internal|\n/i.test(f.toString()),h=r?"Object":"ScriptBridgingProxyObject",y=r?"Object":"Environment",O=r&&n.java?"JavaPackage":g(n.java),E=r?"Object":"RuntimeObject",M=/\bJava/.test(O)&&n.java,F=M&&g(n.environment)==y,P=M?"a":"α",A=M?"b":"β",T=n.document||{},R=n.operamini||n.opera,B=p.test(B=r&&R?R["[[Class]]"]:g(R))?B:R=null,_=t,k=[],C=null,I=t==o,W=I&&R&&"function"==typeof R.version&&R.version(),G=x([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"],(function(e,n){return e||RegExp("\\b"+(n.pattern||w(n))+"\\b","i").exec(t)&&(n.label||n)})),N=function(e){return x(e,(function(e,n){return e||RegExp("\\b"+(n.pattern||w(n))+"\\b","i").exec(t)&&(n.label||n)}))}(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"(?:Edge|Edg|EdgA|EdgiOS)"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Vivaldi","Waterfox","WebPositive",{label:"Yandex Browser",pattern:"YaBrowser"},{label:"UC Browser",pattern:"UCBrowser"},"Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chromium","Chrome",{label:"Chrome",pattern:"(?:HeadlessChrome)"},{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),j=$([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),L=function(e){return x(e,(function(e,n,r){return e||(n[j]||n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(j)]||RegExp("\\b"+w(r)+"(?:\\b|\\w*\\d)","i").exec(t))&&r}))}({Apple:{iPad:1,iPhone:1,iPod:1},Alcatel:{},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},Huawei:{},Lenovo:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Oppo:{},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1},Xiaomi:{Mi:1,Redmi:1}}),D=function(e){return x(e,(function(e,n){var r=n.pattern||w(n);return!e&&(e=RegExp("\\b"+r+"(?:/[\\d.]+|[ \\w.]*)","i").exec(t))&&(e=function(e,t,n){var r={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return t&&n&&/^Win/i.test(e)&&!/^Windows Phone /i.test(e)&&(r=r[/[\d.]+$/.exec(e)])&&(e="Windows "+r),e=String(e),t&&n&&(e=e.replace(RegExp(t,"i"),n)),e=m(e.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])}(e,r,n.label||n)),e}))}(["Windows Phone","KaiOS","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian",{label:"DragonFly BSD",pattern:"DragonFly"},"Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);function $(e){return x(e,(function(e,n){var r=n.pattern||w(n);return!e&&(e=RegExp("\\b"+r+" *\\d+[.\\w_]*","i").exec(t)||RegExp("\\b"+r+" *\\w+-[\\w]*","i").exec(t)||RegExp("\\b"+r+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(t))&&((e=String(n.label&&!RegExp(r,"i").test(n.label)?n.label:e).split("/"))[1]&&!/[\d.]+/.test(e[0])&&(e[0]+=" "+e[1]),n=n.label||n,e=m(e[0].replace(RegExp(r,"i"),n).replace(RegExp("; *(?:"+n+"[_-])?","i")," ").replace(RegExp("("+n+")[-_.]?(\\w)","i"),"$1 $2"))),e}))}function K(e){return x(e,(function(e,n){return e||(RegExp(n+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(t)||0)[1]||null}))}if(G&&(G=[G]),/\bAndroid\b/.test(D)&&!j&&(l=/\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(t))&&(j=v(l[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i,"")||null),L&&!j?j=$([L]):L&&j&&(j=j.replace(RegExp("^("+w(L)+")[-_.\\s]","i"),L+" ").replace(RegExp("^("+w(L)+")[-_.]?(\\w)","i"),L+" $2")),(l=/\bGoogle TV\b/.exec(j))&&(j=l[0]),/\bSimulator\b/i.test(t)&&(j=(j?j+" ":"")+"Simulator"),"Opera Mini"==N&&/\bOPiOS\b/.test(t)&&k.push("running in Turbo/Uncompressed mode"),"IE"==N&&/\blike iPhone OS\b/.test(t)?(L=(l=e(t.replace(/like iPhone OS/,""))).manufacturer,j=l.product):/^iP/.test(j)?(N||(N="Safari"),D="iOS"+((l=/ OS ([\d_]+)/i.exec(t))?" "+l[1].replace(/_/g,"."):"")):"Konqueror"==N&&/^Linux\b/i.test(D)?D="Kubuntu":L&&"Google"!=L&&(/Chrome/.test(N)&&!/\bMobile Safari\b/i.test(t)||/\bVita\b/.test(j))||/\bAndroid\b/.test(D)&&/^Chrome/.test(N)&&/\bVersion\//i.test(t)?(N="Android Browser",D=/\bAndroid\b/.test(D)?D:"Android"):"Silk"==N?(/\bMobi/i.test(t)||(D="Android",k.unshift("desktop mode")),/Accelerated *= *true/i.test(t)&&k.unshift("accelerated")):"UC Browser"==N&&/\bUCWEB\b/.test(t)?k.push("speed mode"):"PaleMoon"==N&&(l=/\bFirefox\/([\d.]+)\b/.exec(t))?k.push("identifying as Firefox "+l[1]):"Firefox"==N&&(l=/\b(Mobile|Tablet|TV)\b/i.exec(t))?(D||(D="Firefox OS"),j||(j=l[1])):!N||(l=!/\bMinefield\b/i.test(t)&&/\b(?:Firefox|Safari)\b/.exec(N))?(N&&!j&&/[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(l+"/")+8))&&(N=null),(l=j||L||D)&&(j||L||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(D))&&(N=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(D)?D:l)+" Browser")):"Electron"==N&&(l=(/\bChrome\/([\d.]+)\b/.exec(t)||0)[1])&&k.push("Chromium "+l),W||(W=K(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)","Version",w(N),"(?:Firefox|Minefield|NetFront)"])),(l=("iCab"==G&&parseFloat(W)>3?"WebKit":/\bOpera\b/.test(N)&&(/\bOPR\b/.test(t)?"Blink":"Presto"))||/\b(?:Midori|Nook|Safari)\b/i.test(t)&&!/^(?:Trident|EdgeHTML)$/.test(G)&&"WebKit"||!G&&/\bMSIE\b/i.test(t)&&("Mac OS"==D?"Tasman":"Trident")||"WebKit"==G&&/\bPlayStation\b(?! Vita\b)/i.test(N)&&"NetFront")&&(G=[l]),"IE"==N&&(l=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t)||0)[1])?(N+=" Mobile",D="Windows Phone "+(/\+$/.test(l)?l:l+".x"),k.unshift("desktop mode")):/\bWPDesktop\b/i.test(t)?(N="IE Mobile",D="Windows Phone 8.x",k.unshift("desktop mode"),W||(W=(/\brv:([\d.]+)/.exec(t)||0)[1])):"IE"!=N&&"Trident"==G&&(l=/\brv:([\d.]+)/.exec(t))&&(N&&k.push("identifying as "+N+(W?" "+W:"")),N="IE",W=l[1]),I){if(u="global",d=null!=(s=n)?typeof s[u]:"number",/^(?:boolean|number|string|undefined)$/.test(d)||"object"==d&&!s[u])g(l=n.runtime)==h?(N="Adobe AIR",D=l.flash.system.Capabilities.os):g(l=n.phantom)==E?(N="PhantomJS",W=(l=l.version||null)&&l.major+"."+l.minor+"."+l.patch):"number"==typeof T.documentMode&&(l=/\bTrident\/(\d+)/i.exec(t))?(W=[W,T.documentMode],(l=+l[1]+4)!=W[1]&&(k.push("IE "+W[1]+" mode"),G&&(G[1]=""),W[1]=l),W="IE"==N?String(W[1].toFixed(1)):W[0]):"number"==typeof T.documentMode&&/^(?:Chrome|Firefox)\b/.test(N)&&(k.push("masking as "+N+" "+W),N="IE",W="11.0",G=["Trident"],D="Windows");else if(M&&(_=(l=M.lang.System).getProperty("os.arch"),D=D||l.getProperty("os.name")+" "+l.getProperty("os.version")),F){try{W=n.require("ringo/engine").version.join("."),N="RingoJS"}catch(e){(l=n.system)&&l.global.system==n.system&&(N="Narwhal",D||(D=l[0].os||null))}N||(N="Rhino")}else"object"==typeof n.process&&!n.process.browser&&(l=n.process)&&("object"==typeof l.versions&&("string"==typeof l.versions.electron?(k.push("Node "+l.versions.node),N="Electron",W=l.versions.electron):"string"==typeof l.versions.nw&&(k.push("Chromium "+W,"Node "+l.versions.node),N="NW.js",W=l.versions.nw)),N||(N="Node.js",_=l.arch,D=l.platform,W=(W=/[\d.]+/.exec(l.version))?W[0]:null));D=D&&m(D)}if(W&&(l=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(W)||/(?:alpha|beta)(?: ?\d)?/i.exec(t+";"+(I&&i.appMinorVersion))||/\bMinefield\b/i.test(t)&&"a")&&(C=/b/i.test(l)?"beta":"alpha",W=W.replace(RegExp(l+"\\+?$"),"")+("beta"==C?A:P)+(/\d+\+?/.exec(l)||"")),"Fennec"==N||"Firefox"==N&&/\b(?:Android|Firefox OS|KaiOS)\b/.test(D))N="Firefox Mobile";else if("Maxthon"==N&&W)W=W.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(j))"Xbox 360"==j&&(D=null),"Xbox 360"==j&&/\bIEMobile\b/.test(t)&&k.unshift("mobile mode");else if(!/^(?:Chrome|IE|Opera)$/.test(N)&&(!N||j||/Browser|Mobi/.test(N))||"Windows CE"!=D&&!/Mobi/i.test(t))if("IE"==N&&I)try{null===n.external&&k.unshift("platform preview")}catch(e){k.unshift("embedded")}else(/\bBlackBerry\b/.test(j)||/\bBB10\b/.test(t))&&(l=(RegExp(j.replace(/ +/g," *")+"/([.\\d]+)","i").exec(t)||0)[1]||W)?(D=((l=[l,/BB10/.test(t)])[1]?(j=null,L="BlackBerry"):"Device Software")+" "+l[0],W=null):this!=S&&"Wii"!=j&&(I&&R||/Opera/.test(N)&&/\b(?:MSIE|Firefox)\b/i.test(t)||"Firefox"==N&&/\bOS X (?:\d+\.){2,}/.test(D)||"IE"==N&&(D&&!/^Win/.test(D)&&W>5.5||/\bWindows XP\b/.test(D)&&W>8||8==W&&!/\bTrident\b/.test(t)))&&!p.test(l=e.call(S,t.replace(p,"")+";"))&&l.name&&(l="ing as "+l.name+((l=l.version)?" "+l:""),p.test(N)?(/\bIE\b/.test(l)&&"Mac OS"==D&&(D=null),l="identify"+l):(l="mask"+l,N=B?m(B.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(l)&&(D=null),I||(W=null)),G=["Presto"],k.push(l));else N+=" Mobile";(l=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(t)||0)[1])&&(l=[parseFloat(l.replace(/\.(\d)$/,".0$1")),l],"Safari"==N&&"+"==l[1].slice(-1)?(N="WebKit Nightly",C="alpha",W=l[1].slice(0,-1)):W!=l[1]&&W!=(l[2]=(/\bSafari\/([\d.]+\+?)/i.exec(t)||0)[1])||(W=null),l[1]=(/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(t)||0)[1],537.36==l[0]&&537.36==l[2]&&parseFloat(l[1])>=28&&"WebKit"==G&&(G=["Blink"]),I&&(b||l[1])?(G&&(G[1]="like Chrome"),l=l[1]||((l=l[0])<530?1:l<532?2:l<532.05?3:l<533?4:l<534.03?5:l<534.07?6:l<534.1?7:l<534.13?8:l<534.16?9:l<534.24?10:l<534.3?11:l<535.01?12:l<535.02?"13+":l<535.07?15:l<535.11?16:l<535.19?17:l<536.05?18:l<536.1?19:l<537.01?20:l<537.11?"21+":l<537.13?23:l<537.18?24:l<537.24?25:l<537.36?26:"Blink"!=G?"27":"28")):(G&&(G[1]="like Safari"),l=(l=l[0])<400?1:l<500?2:l<526?3:l<533?4:l<534?"4+":l<535?5:l<537?6:l<538?7:l<601?8:l<602?9:l<604?10:l<606?11:l<608?12:"12"),G&&(G[1]+=" "+(l+="number"==typeof l?".x":/[.+]/.test(l)?"":"+")),"Safari"==N&&(!W||parseInt(W)>45)?W=l:"Chrome"==N&&/\bHeadlessChrome/i.test(t)&&k.unshift("headless")),"Opera"==N&&(l=/\bzbov|zvav$/.exec(D))?(N+=" ",k.unshift("desktop mode"),"zvav"==l?(N+="Mini",W=null):N+="Mobile",D=D.replace(RegExp(" *"+l+"$"),"")):"Safari"==N&&/\bChrome\b/.exec(G&&G[1])?(k.unshift("desktop mode"),N="Chrome Mobile",W=null,/\bOS X\b/.test(D)?(L="Apple",D="iOS 4.3+"):D=null):/\bSRWare Iron\b/.test(N)&&!W&&(W=K("Chrome")),W&&0==W.indexOf(l=/[\d.]+$/.exec(D))&&t.indexOf("/"+l+"-")>-1&&(D=v(D.replace(l,""))),D&&-1!=D.indexOf(N)&&!RegExp(N+" OS").test(D)&&(D=D.replace(RegExp(" *"+w(N)+" *"),"")),G&&!/\b(?:Avant|Nook)\b/.test(N)&&(/Browser|Lunascape|Maxthon/.test(N)||"Safari"!=N&&/^iOS/.test(D)&&/\bSafari\b/.test(G[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(N)&&G[1])&&(l=G[G.length-1])&&k.push(l),k.length&&(k=["("+k.join("; ")+")"]),L&&j&&j.indexOf(L)<0&&k.push("on "+L),j&&k.push((/^on /.test(k[k.length-1])?"":"on ")+j),D&&(l=/ ([\d.+]+)$/.exec(D),c=l&&"/"==D.charAt(D.length-l[0].length-1),D={architecture:32,family:l&&!c?D.replace(l[0],""):D,version:l?l[1]:null,toString:function(){var e=this.version;return this.family+(e&&!c?" "+e:"")+(64==this.architecture?" 64-bit":"")}}),(l=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(_))&&!/\bi686\b/i.test(_)?(D&&(D.architecture=64,D.family=D.family.replace(RegExp(" *"+l),"")),N&&(/\bWOW64\b/i.test(t)||I&&/\w(?:86|32)$/.test(i.cpuClass||i.platform)&&!/\bWin64; x64\b/i.test(t))&&k.unshift("32-bit")):D&&/^OS X/.test(D.family)&&"Chrome"==N&&parseFloat(W)>=39&&(D.architecture=64),t||(t=null);var X={};return X.description=t,X.layout=G&&G[0],X.manufacturer=L,X.name=N,X.prerelease=C,X.product=j,X.ua=t,X.version=N&&W,X.os=D||{architecture:null,family:null,version:null,toString:function(){return"null"}},X.parse=e,X.toString=function(){return this.description||""},X.version&&k.unshift(W),X.name&&k.unshift(N),D&&N&&(D!=String(D).split(" ")[0]||D!=N.split(" ")[0]&&!j)&&k.push(j?"("+D+")":"on "+D),k.length&&(X.description=k.join(" ")),X}();a.platform=y,void 0===(i=function(){return y}.call(t,n,t,e))||(e.exports=i)}).call(this)}).call(this,n(4)(e),n(5))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]);
//# sourceMappingURL=browser-user-data-1.0.3.js.map