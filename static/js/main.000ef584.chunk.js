(this["webpackJsonpfind-images-from-hooks"]=this["webpackJsonpfind-images-from-hooks"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3nWWt",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2NMTF"}},11:function(e,t,a){e.exports={button:"Button_button__1a7Wm",buttonContainer:"Button_buttonContainer__3QD5C"}},12:function(e,t,a){e.exports={overlay:"Modal_overlay__2i2Hv",modal:"Modal_modal__3KhS2"}},13:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__2jkWJ",error:"ImageGallery_error__lWT8p"}},21:function(e,t,a){},4:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__6wt_o",SearchForm:"Searchbar_SearchForm__xpMeZ",buttonForm:"Searchbar_buttonForm__1oX-p",labelForm:"Searchbar_labelForm__18To3",inputForm:"Searchbar_inputForm__13IJC"}},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),i=(a(21),a(3)),s=a(4),l=a.n(s),u=a(1),m=function(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(i.a)(a,2),c=r[0],o=r[1];return Object(u.jsx)("header",{className:l.a.Searchbar,children:Object(u.jsxs)("form",{className:l.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(c),o("")},children:[Object(u.jsx)("button",{type:"submit",className:l.a.buttonForm,children:Object(u.jsx)("span",{className:l.a.labelForm,children:"Search"})}),Object(u.jsx)("input",{onChange:function(e){var t=e.target.value;o(t)},value:c,className:l.a.inputForm,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},b=a(14),j=a(9),f=a.n(j),d=a(15),h=function(){var e=Object(d.a)(f.a.mark((function e(t,a,n){var r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://pixabay.com/api","/?key=").concat("19168514-abe4fd6e9277293fb68a0fc7f","&q=").concat(t,"&image_type=photo&orientation=horizontal&page=").concat(a,"&per_page=12"));case 3:return r=e.sent,c=r.json(),n(),e.abrupt("return",c);case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a,n){return e.apply(this,arguments)}}(),O=a(10),g=a.n(O),p=function(e){var t=e.id,a=e.webformatURL,n=e.tags;return Object(u.jsx)("li",{className:g.a.ImageGalleryItem,children:Object(u.jsx)("img",{src:a,alt:n,className:g.a.ImageGalleryItemImage})},t)},_=a(11),v=a.n(_),x=function(e){var t=e.onClick;return Object(u.jsx)("div",{className:v.a.buttonContainer,children:Object(u.jsx)("button",{type:"button",className:v.a.button,onClick:function(){t()},children:"Load more"})})},S=a(12),y=a.n(S),I=document.querySelector("#modal-root"),F=function(e){var t=e.modalItem,a=e.tags,r=e.onClose,o=t.largeImageURL;Object(n.useEffect)((function(){return window.addEventListener("keydown",i),function(){window.removeEventListener("keydown",i)}}),[]);var i=function(e){"Escape"===e.code&&r()};return Object(c.createPortal)(Object(u.jsx)("div",{className:y.a.overlay,onClick:function(e){e.target===e.currentTarget&&r()},children:Object(u.jsx)("div",{className:y.a.modal,children:Object(u.jsx)("img",{src:o,alt:a})})}),I)},w=a(16),k=a.n(w),C=a(13),N=a.n(C),G="idle",E="pending",L="resolved",T="rejected",M=function(e){var t=e.onSearch,a=Object(n.useState)([]),r=Object(i.a)(a,2),c=r[0],o=r[1],s=Object(n.useState)(""),l=Object(i.a)(s,2),m=l[0],j=l[1],f=Object(n.useState)(1),d=Object(i.a)(f,2),O=d[0],g=d[1],_=Object(n.useState)(G),v=Object(i.a)(_,2),S=v[0],y=v[1],I=Object(n.useState)(null),w=Object(i.a)(I,2),C=w[0],M=w[1],W=Object(n.useState)(!1),B=Object(i.a)(W,2),J=B[0],q=B[1],R=Object(n.useState)(!1),U=Object(i.a)(R,2),A=U[0],D=U[1],H=Object(n.useState)(null),P=Object(i.a)(H,2),z=P[0],K=P[1],Q=Object(n.useCallback)((function(){g(O+1)}),[O]);Object(n.useEffect)((function(){X()}),[]),Object(n.useEffect)((function(){if(j(t),""!==t){var e=t;m!==e&&(X(),y(E)),h(e,O,Q).then((function(t){var a=t.hits;if(12===a.length&&q(!0),o(a),y(L),0===a.length)return Promise.reject(new Error("At your request  ".concat(e,"   nothing found")))})).catch((function(e){M(e),y(T)}))}}),[t,m]);var X=function(){g(1)},Z=function(){D(!A)};return A?Object(u.jsx)(F,{onClose:Z,modalItem:z}):"idle"===S?null:"pending"===S?Object(u.jsx)(k.a,{type:"Audio",color:"#00BFFF",height:80,width:200,timeout:5e3}):"resolved"===S?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("ul",{className:N.a.imageGallery,onClick:function(e){if(e.target!==e.currentTarget){var t=e.target.attributes.src.value,a=c.find((function(e){return e.webformatURL.includes(t)}));K(a),Z()}},children:c.map(p)}),J&&Object(u.jsx)(x,{onClick:function(){h(t,O,Q).then((function(e){var t=e.hits;q(!0),t.length<12&&q(!1),o([].concat(Object(b.a)(c),Object(b.a)(t))),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){M(e),y(T)}))}})]}):"rejected"===S?Object(u.jsx)("div",{className:N.a.error,children:C.message}):void 0},W=(a(45),function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m,{onSubmit:function(e){r(e)}}),",",Object(u.jsx)(M,{onSearch:a})]})});o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(W,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.000ef584.chunk.js.map