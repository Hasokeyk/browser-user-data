var browserUserData=function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function a(e){try{l(n.next(e))}catch(e){r(e)}}function c(e){try{l(n.throw(e))}catch(e){r(e)}}function l(e){e.done?i(e.value):new o((function(t){t(e.value)})).then(a,c)}l((n=n.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var o,n,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function c(r){return function(c){return function(r){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,n&&(i=2&r[0]?n.return:r[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,n=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=t.call(e,a)}catch(e){r=[6,e],n=0}finally{o=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,c])}}},r=this;Object.defineProperty(t,"__esModule",{value:!0});var a=o(1);t.extractConnectedSocialMedias=function(){return n(r,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return e=a.networks.map((function(e){var t=document.createElement("img");return t.src=e.url,new Promise((function(o,n){t.onload=function(){o(e.name)},t.onerror=function(){o(null)}}))})),[4,Promise.all(e)];case 1:return[2,t.sent().filter((function(e){return!!e}))]}}))}))}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(2);t.networks=[{url:"https://squareup.com/login?return_to=%2Ffavicon.ico",name:n.SocialMedia.SQUARE},{url:"https://www.instagram.com/accounts/login/?next=%2Ffavicon.ico",name:n.SocialMedia.INSTAGRAM},{url:"https://twitter.com/login?redirect_after_login=%2Ffavicon.ico",name:n.SocialMedia.TWITTER},{url:"https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Ffavicon.ico%3F_rdr%3Dp",name:n.SocialMedia.FACEBOOK},{url:"https://accounts.google.com/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.google.com%2Ffavicon.ico&uilel=3&hl=de&service=youtube",name:n.SocialMedia.GOOGLE},{url:"https://login.skype.com/login?message=signin_continue&redirect_uri=https%3A%2F%2Fsecure.skype.com%2Ffavicon.ico",name:n.SocialMedia.SKYPE},{url:"https://www.flickr.com/signin/yahoo/?redir=https%3A%2F%2Fwww.flickr.com/favicon.ico",name:n.SocialMedia.FLICKR},{url:"https://www.spotify.com/de/login/?forward_url=https%3A%2F%2Fwww.spotify.com%2Ffavicon.ico",name:n.SocialMedia.SPOTIFY},{url:"https://www.reddit.com/login?dest=https%3A%2F%2Fwww.reddit.com%2Ffavicon.ico",name:n.SocialMedia.REDDIT},{url:"https://www.tumblr.com/login?redirect_to=%2Ffavicon.ico",name:n.SocialMedia.TUMBLR},{url:"https://www.expedia.de/user/login?ckoflag=0&selc=0&uurl=qscr%3Dreds%26rurl%3D%252Ffavicon.ico",name:n.SocialMedia.EXPEDIA},{url:"https://www.dropbox.com/login?cont=https%3A%2F%2Fwww.dropbox.com%2Fstatic%2Fimages%2Ficons%2Ficon_spacer-vflN3BYt2.gif",name:n.SocialMedia.DROPBOX},{url:"https://www.amazon.com/ap/signin/178-4417027-1316064?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=10000000&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Ffavicon.ico",name:n.SocialMedia.AMAZON},{url:"https://www.pinterest.com/login/?next=https%3A%2F%2Fwww.pinterest.com%2Ffavicon.ico",name:n.SocialMedia.PINTEREST},{url:"https://www.netflix.com/Login?nextpage=%2Ffavicon.ico",name:n.SocialMedia.NETFLIX},{url:"https://de.foursquare.com/login?continue=%2Ffavicon.ico",name:n.SocialMedia.FOURSQUARE},{url:"https://eu.battle.net/login/de/index?ref=http://eu.battle.net/favicon.ico",name:n.SocialMedia.BATTLE_NET},{url:"https://store.steampowered.com/login/?redir=favicon.ico",name:n.SocialMedia.STEAM},{url:"https://www.academia.edu/login?cp=/favicon.ico&cs=www",name:n.SocialMedia.ACADEMIA_EDU},{url:"https://stackoverflow.com/users/login?ssrc=head&returnurl=http%3a%2f%2fstackoverflow.com%2ffavicon.ico",name:n.SocialMedia.STACK_OVERFLOW},{url:"https://accounts.google.com/ServiceLogin?service=blogger&hl=de&passive=1209600&continue=https://www.blogger.com/favicon.ico",name:n.SocialMedia.BLOGGER}]},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.SQUARE="Square",e.INSTAGRAM="Instagram",e.TWITTER="Twitter",e.FACEBOOK="Facebook",e.GOOGLE="Google",e.SKYPE="Skype",e.FLICKR="Flickr",e.SPOTIFY="Spotify",e.REDDIT="Reddit",e.TUMBLR="Tumblr",e.EXPEDIA="Expedia",e.DROPBOX="Dropbox",e.AMAZON="Amazon",e.PINTEREST="Pinterest",e.NETFLIX="Netflix",e.FOURSQUARE="Foursquare",e.BATTLE_NET="Battle.net",e.STEAM="Steam",e.ACADEMIA_EDU="Academia.edu",e.STACK_OVERFLOW="Stack Overflow",e.BLOGGER="Blogger"}(t.SocialMedia||(t.SocialMedia={}))}]);
//# sourceMappingURL=browser-user-data-1.0.0.js.map