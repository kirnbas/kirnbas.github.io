(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(10),s=a.n(c),i=a(2),l=a(3),o=a(5),d=a(4),j=(a(15),a(0)),u=function(){return Object(j.jsxs)("header",{className:"app__header",children:[Object(j.jsx)("h1",{className:"app__title",children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(j.jsx)("nav",{className:"app__menu",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",children:"Characters"})}),"/",Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",children:"Comics"})})]})})]})},h=a(6),m=a.n(h),b=a(7),f=function e(){var t=this;Object(i.a)(this,e),this._apiBase="https://gateway.marvel.com:443/v1/public/",this._apiKey="apikey=2c131c4fc64c4c0b4307261f8f25ff00",this._baseOffset=210,this.getResource=function(){var e=Object(b.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(b.a)(m.a.mark((function e(){var a,r,n=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>0&&void 0!==n[0]?n[0]:t._baseOffset,e.next=3,t.getResource("".concat(t._apiBase,"characters?limit=9&offset=").concat(a,"&").concat(t._apiKey));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(t._transformCharacter));case 5:case"end":return e.stop()}}),e)}))),this.getCharacter=function(){var e=Object(b.a)(m.a.mark((function e(a){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase,"characters/").concat(a,"?").concat(t._apiKey));case 2:return r=e.sent,e.abrupt("return",t._transformCharacter(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformCharacter=function(e){return{id:e.id,name:e.name,description:e.description,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}}},O=function(){return Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(j.jsx)("g",{transform:"translate(80,50)",children:Object(j.jsx)("g",{transform:"rotate(0)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(j.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(j.jsx)("g",{transform:"rotate(45)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(j.jsx)("g",{transform:"translate(50,80)",children:Object(j.jsx)("g",{transform:"rotate(90)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(j.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(j.jsx)("g",{transform:"rotate(135)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(j.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(j.jsx)("g",{transform:"rotate(180)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(j.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(j.jsx)("g",{transform:"rotate(225)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(j.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(j.jsx)("g",{transform:"rotate(270)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(j.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(j.jsx)("g",{transform:"rotate(315)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},p=a.p+"static/media/error.42292aa1.gif",x=function(){return Object(j.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:p,alt:"Error img"})},v=(a(18),a.p+"static/media/mjolnir.61f31e18.png"),g=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={char:{},loading:!0,error:!1},e.marvelService=new f,e.onCharLoaded=function(t){e.setState({char:t,loading:!1})},e.onCharLoading=function(){e.setState({loading:!0})},e.onError=function(){e.setState({loading:!1,error:!0})},e.updateChar=function(){var t=Math.floor(400*Math.random()+1011e3);e.onCharLoading(),e.marvelService.getCharacter(t).then(e.onCharLoaded).catch(e.onError)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"render",value:function(){var e=this.state,t=e.char,a=e.loading,r=e.error,n=r?Object(j.jsx)(x,{}):null,c=a?Object(j.jsx)(O,{}):null,s=a||r?null:Object(j.jsx)(_,{char:t});return Object(j.jsxs)("div",{className:"randomchar",children:[n,c,s,Object(j.jsxs)("div",{className:"randomchar__static",children:[Object(j.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(j.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(j.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(j.jsx)("button",{onClick:this.updateChar,className:"button button__main",children:Object(j.jsx)("div",{className:"inner",children:"try it"})}),Object(j.jsx)("img",{src:v,alt:"mjolnir",className:"randomchar__decoration"})]})]})}}]),a}(r.Component),_=function(e){var t,a,r=e.char,n=r.name,c=r.description,s=r.thumbnail,i=r.homepage,l=r.wiki;if(c){t=c.length>200?c.slice(0,196)+"...":c}else t="There is no description";return s.includes("image_not_available.jpg")&&(a={objectFit:"contain"}),Object(j.jsxs)("div",{className:"randomchar__block",children:[Object(j.jsx)("img",{src:s,style:a,alt:"Random character",className:"randomchar__img"}),Object(j.jsxs)("div",{className:"randomchar__info",children:[Object(j.jsx)("p",{className:"randomchar__name",children:n}),Object(j.jsx)("p",{className:"randomchar__descr",children:t}),Object(j.jsxs)("div",{className:"randomchar__btns",children:[Object(j.jsx)("a",{href:i,className:"button button__main",children:Object(j.jsx)("div",{className:"inner",children:"homepage"})}),Object(j.jsx)("a",{href:l,className:"button button__secondary",children:Object(j.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},y=g,N=a(9),C=(a(19),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={charList:[],loading:!0,error:!1,newItemLoading:!1,offset:1545,charEnded:!1},e.marvelService=new f,e.onRequest=function(t){e.onCharListLoading(),e.marvelService.getAllCharacters(t).then(e.onCharListLoaded).catch(e.onError)},e.onCharListLoading=function(){e.setState({newItemLoading:!0})},e.onCharListLoaded=function(t){var a=!1;t.length<9&&(a=!0),e.setState((function(e){var r=e.charList,n=e.offset;return{charList:[].concat(Object(N.a)(r),Object(N.a)(t)),loading:!1,newItemLoading:!1,offset:n+9,charEnded:a}}))},e.onError=function(){e.setState({error:!0,loading:!1})},e.onFocus=function(t,a){t.target.parentNode.childNodes.forEach((function(e){return e.classList.remove("char__item_selected")})),t.target.classList.add("char__item_selected"),e.props.onCharSelected(a)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.onRequest()}},{key:"renderItems",value:function(e){var t=this,a=e.map((function(e,a){var r={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===e.thumbnail&&(r={objectFit:"unset"}),Object(j.jsxs)("li",{className:"char__item",tabIndex:a+1,onFocus:function(a){return t.onFocus(a,e.id)},onClick:function(){return t.props.onCharSelected(e.id)},children:[Object(j.jsx)("img",{src:e.thumbnail,alt:e.name,style:r}),Object(j.jsx)("div",{className:"char__name",children:e.name})]},e.id)}));return Object(j.jsx)("ul",{className:"char__grid",children:a})}},{key:"render",value:function(){var e=this,t=this.state,a=t.charList,r=t.loading,n=t.error,c=t.newItemLoading,s=t.offset,i=t.charEnded,l=this.renderItems(a),o=n?Object(j.jsx)(x,{}):null,d=r?Object(j.jsx)(O,{}):null,u=r||n?null:l;return Object(j.jsxs)("div",{className:"char__list",children:[o,d,u,Object(j.jsx)("button",{className:"button button__main button__long",disabled:c,style:{display:i?"none":""},onClick:function(){return e.onRequest(s)},children:Object(j.jsx)("div",{className:"inner",children:"load more"})})]})}}]),a}(r.Component)),k=(a(20),a(21),function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(j.jsxs)("div",{className:"skeleton",children:[Object(j.jsxs)("div",{className:"pulse skeleton__header",children:[Object(j.jsx)("div",{className:"pulse skeleton__circle"}),Object(j.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(j.jsx)("div",{className:"pulse skeleton__block"}),Object(j.jsx)("div",{className:"pulse skeleton__block"}),Object(j.jsx)("div",{className:"pulse skeleton__block"})]})]})}),w=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={char:null,loading:!1,error:!1},e.marvelService=new f,e.updateChar=function(){var t=e.props.charId;t&&(e.onCharLoading(),e.marvelService.getCharacter(t).then(e.onCharLoaded).catch(e.onError))},e.onCharLoaded=function(t){e.setState({char:t,loading:!1})},e.onCharLoading=function(){e.setState({loading:!0})},e.onError=function(){e.setState({loading:!1,error:!0})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"componentDidUpdate",value:function(e,t){this.props.charId!==e.charId&&this.updateChar()}},{key:"render",value:function(){var e=this.state,t=e.char,a=e.loading,r=e.error,n=t||a||r?null:Object(j.jsx)(k,{}),c=r?Object(j.jsx)(x,{}):null,s=a?Object(j.jsx)(O,{}):null,i=a||r||!t?null:Object(j.jsx)(L,{char:t});return Object(j.jsxs)("div",{className:"char__info",children:[n,c,s,i]})}}]),a}(r.Component),L=function(e){var t=e.char,a=t.name,r=t.description,n=t.thumbnail,c=t.homepage,s=t.wiki,i=t.comics;return i.splice(10),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"char__basics",children:[Object(j.jsx)("img",{src:n,alt:a,style:n.includes("image_not_available.jpg")?{objectFit:"contain"}:null}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"char__info-name",children:a}),Object(j.jsxs)("div",{className:"char__btns",children:[Object(j.jsx)("a",{href:c,className:"button button__main",children:Object(j.jsx)("div",{className:"inner",children:"homepage"})}),Object(j.jsx)("a",{href:s,className:"button button__secondary",children:Object(j.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(j.jsx)("div",{className:"char__descr",children:r||"There is no description for this character"}),i.length>0?Object(j.jsx)("div",{className:"char__comics",children:"Comics:"}):null,Object(j.jsx)("ul",{className:"char__comics-list",children:i.map((function(e,t){return Object(j.jsx)("li",{className:"char__comics-item",children:e.name},t)}))})]})},T=w,S=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={error:!1},e}return Object(l.a)(a,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(j.jsx)(x,{}):this.props.children}}]),a}(r.Component),E=a.p+"static/media/vision.067d4ae1.png",I=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={selectedChar:null},e.onCharSelected=function(t){e.setState({selectedChar:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(u,{}),Object(j.jsxs)("main",{children:[Object(j.jsx)(S,{children:Object(j.jsx)(y,{})}),Object(j.jsxs)("div",{className:"char__content",children:[Object(j.jsx)(S,{children:Object(j.jsx)(C,{onCharSelected:this.onCharSelected})}),Object(j.jsx)(S,{children:Object(j.jsx)(T,{charId:this.state.selectedChar})})]}),Object(j.jsx)("img",{className:"bg-decoration",src:E,alt:"vision"})]})]})}}]),a}(r.Component);a(22);s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.eae11939.chunk.js.map