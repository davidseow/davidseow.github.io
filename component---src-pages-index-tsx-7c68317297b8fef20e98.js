"use strict";(self.webpackChunkdavid_seow_software_testing=self.webpackChunkdavid_seow_software_testing||[]).push([[691],{5231:function(t,o,n){n.r(o),n.d(o,{default:function(){return _}});var e=n(3638),r=n(7294);function s(){return s=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t},s.apply(this,arguments)}function p(t,o){return p=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t},p(t,o)}var u=function(t){var o,n;function e(){return t.apply(this,arguments)||this}n=t,(o=e).prototype=Object.create(n.prototype),o.prototype.constructor=o,p(o,n);var u=e.prototype;return u.getColumns=function(){var t=this.props,o=t.children,n=t.columnsCount,e=Array.from({length:n},(function(){return[]}));return r.Children.forEach(o,(function(t,o){t&&r.isValidElement(t)&&e[o%n].push(t)})),e},u.renderColumns=function(){var t=this.props.gutter;return this.getColumns().map((function(o,n){return r.createElement("div",{key:n,style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,gap:t}},o.map((function(t){return t})))}))},u.render=function(){var t=this.props,o=t.gutter,n=t.className,e=t.style;return r.createElement("div",{style:s({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%",gap:o},e),className:n},this.renderColumns())},e}(r.Component);u.defaultProps={columnsCount:3,gutter:"0",className:null,style:{}};var i=u,a=function(){var t=function(){var t=(0,r.useState)(!1),o=t[0],n=t[1];return(0,r.useEffect)((function(){n(!0)}),[]),o}(),o=(0,r.useState)(0),n=o[0],e=o[1],s=(0,r.useCallback)((function(){t&&e(window.innerWidth)}),[t]);return(0,r.useEffect)((function(){if(t)return window.addEventListener("resize",s),s(),function(){return window.removeEventListener("resize",s)}}),[t,s]),n},l=function(t){var o=t.columnsCountBreakPoints,n=t.children,e=t.className,s=t.style,p=a(),u=(0,r.useMemo)((function(){var t=Object.keys(o).sort((function(t,o){return t-o})),n=t.length>0?o[t[0]]:1;return t.forEach((function(t){t<p&&(n=o[t])})),n}),[p,o]);return r.createElement("div",{className:e,style:s},r.Children.map(n,(function(t,o){return r.cloneElement(t,{key:o,columnsCount:u})})))};l.defaultProps={columnsCountBreakPoints:{350:1,750:2,900:3},className:null,style:null};var c=l,h=i,g=n(7946),f=function(t){var o=t.images;return(0,g.tZ)(c,{columnsCountBreakPoints:{350:1,750:2,900:3},className:"galleryContainer"},(0,g.tZ)(h,{className:"gallery"},o.map((function(t,o){return(0,g.tZ)("img",{key:o.toString(),src:t,alt:""})}))))},j=n(5822);var m=function(t){for(var o,n,e=t.length;0!==e;)n=Math.floor(Math.random()*e),o=t[e-=1],t[e]=t[n],t[n]=o;return t}(["/photos/DSC01435.jpg","/photos/DSCF0469.jpg","/photos/DSCF1140.jpg","/photos/DSCF1264.jpg","/photos/DSCF3189.jpg","/photos/DSCF3526.jpg","/photos/DSCF5285.jpg","/photos/DSCF5552.jpg","/photos/DSCF5848.jpg","/photos/DSCF7549.jpg","/photos/DSCF7599.jpg","/photos/DSCF7608.jpg","/photos/DSCF7961.jpg","/photos/IMG_0065.jpg","/photos/IMG_0159.jpg","/photos/IMG_0399.jpg","/photos/IMG_0404.jpg","/photos/IMG_0512.jpg","/photos/IMG_0556.jpg","/photos/IMG_0634.jpg","/photos/IMG_1096.jpg","/photos/IMG_2327.jpg","/photos/IMG_2352.jpg","/photos/IMG_2538.jpg","/photos/IMG_2866.jpg","/photos/IMG_2874.jpg","/photos/IMG_3063.jpg","/photos/IMG_3292.jpg","/photos/IMG_3384.jpg","/photos/IMG_3488.jpg","/photos/IMG_3557.jpg","/photos/IMG_3627.jpg","/photos/IMG_4089.jpg","/photos/IMG_5387.jpg","/photos/IMG_5876.jpg","/photos/IMG_6127.jpg","/photos/IMG_6951.jpg","/photos/IMG_7404.jpg","/photos/IMG_8186.jpg"]),_=function(){return(0,g.tZ)(e.Z,null,(0,g.tZ)(j.Z,{title:"Home",description:"Home"}),(0,g.tZ)(f,{images:m}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-7c68317297b8fef20e98.js.map