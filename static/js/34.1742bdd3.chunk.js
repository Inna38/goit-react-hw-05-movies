"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[34],{34:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var c=a(439),s=a(243),n=a(791),r=a(689),i="Cast_img__BXMAa",l="Cast_container__lqDAM",o="Cast_list__ENCh4",h="Cast_item__YUV-p",m=a(184),u=function(){var e=(0,r.UO)().movieId,t=(0,n.useState)(""),a=(0,c.Z)(t,2),u=a[0],_=a[1];return(0,n.useEffect)((function(){s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"}/credits?api_key=9c63cd3e2af40f4c55ff67799c62e3dd\n    ")).then((function(e){var t=e.data;_(t.cast)})).catch((function(e){return console.log(e)}))}),[e]),(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:l,children:u&&u.map((function(e){var t=e.cast_id,a=e.profile_path,c=e.name,s=e.character;return(0,m.jsx)("ul",{className:o,children:(0,m.jsxs)("li",{className:h,children:[a?(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(a),alt:"",className:i}):"",(0,m.jsx)("h4",{children:c}),(0,m.jsxs)("p",{children:["Character: ",s]})]})},t)}))})})}}}]);
//# sourceMappingURL=34.1742bdd3.chunk.js.map