"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[881],{544:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(87),s={container:"Header_container__eXaEm",list:"Header_list__vKnU3",nav:"Header_nav__0Ci-Y"},a=n(184),i=function(){return(0,a.jsx)("header",{className:s.container,children:(0,a.jsxs)("ul",{className:s.list,children:[(0,a.jsx)("li",{className:s.item,children:(0,a.jsx)(r.OL,{to:"/",className:s.nav,children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.OL,{to:"/movies",className:s.nav,children:"Movies"})})]})})}},155:function(e,t,n){n.d(t,{O:function(){return i}});var r=n(87),s={list:"MoviesList_list__0Owr9",item:"MoviesList_item__eePYv",nav:"MoviesList_nav__It7w6"},a=n(184),i=function(e){var t=e.movies;return(0,a.jsx)(a.Fragment,{children:t&&t.map((function(e){var t=e.title,n=e.id;return(0,a.jsx)("div",{className:s.container,children:(0,a.jsx)("ul",{className:s.list,children:(0,a.jsx)("li",{className:s.item,children:(0,a.jsx)(r.rU,{to:"/movies/".concat(n),className:s.nav,children:t})})})},n)}))})}},909:function(e,t,n){n.d(t,{$:function(){return s},_:function(){return r}});var r="https://api.themoviedb.org/3/",s="?api_key=9c63cd3e2af40f4c55ff67799c62e3dd"},881:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(439),s=n(243),a=n(686),i=n.n(a),c=n(791),o=n(544),l=n(87),u=n(155),m=n(909),f="Movies_form__4ow+Z",v="Movies_input__KrUqs",d="Movies_btn__TlfBQ",_=n(184),h=function(){var e,t=(0,c.useState)([]),n=(0,r.Z)(t,2),a=n[0],h=n[1],x=(0,l.lr)(),j=(0,r.Z)(x,2),N=j[0],p=j[1],g=null!==(e=N.get("movieId"))&&void 0!==e?e:"";(0,c.useEffect)((function(){g&&s.Z.get("".concat(m._,"search/movie").concat(m.$,"&query=").concat(g)).then((function(e){h(e.data.results),0===e.data.results.length&&(p({}),i().Notify.failure("Not found"))})).catch((function(e){return console.log(e)}))}),[g,p]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(o.Z,{}),(0,_.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.searchParams.value;if(!t)return i().Notify.failure("Please enter your request"),p({});p({movieId:t}),e.currentTarget.reset()},className:f,children:[(0,_.jsx)("input",{type:"text",name:"searchParams",className:v}),(0,_.jsx)("button",{type:"submit",className:d,children:"Search"})]}),(0,_.jsx)(u.O,{movies:a})]})}}}]);
//# sourceMappingURL=881.a8afea5b.chunk.js.map