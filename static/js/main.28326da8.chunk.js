(this["webpackJsonpreact-for-beginners"]=this["webpackJsonpreact-for-beginners"]||[]).push([[0],{33:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(16),i=n.n(s),a=n(10),j=n(2),o=n(8),u=n.n(o),b=n(11),d=n(1);var h=function(){var e=Object(j.f)().id,t=function(){var t=Object(b.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e));case 2:return t.next=4,t.sent.json();case 4:n=t.sent,console.log(n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){t()}),[]),Object(d.jsx)("h1",{children:"Detail"})},l=n(15);var O=function(e){var t=e.id,n=e.coverImg,c=e.title,r=e.summary,s=e.genres;return Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:n,alt:c}),Object(d.jsx)("h2",{children:Object(d.jsx)(a.b,{to:"/movie/".concat(t),children:c})}),Object(d.jsx)("p",{children:r}),Object(d.jsx)("ul",{children:s.map((function(e){return Object(d.jsx)("li",{children:e},e)}))})]})};var x=function(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),i=Object(l.a)(s,2),a=i[0],j=i[1],o=function(){var e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,j(t.data.movies),r(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){o()}),[]),Object(d.jsx)("div",{children:n?Object(d.jsx)("h1",{children:"Loading..."}):Object(d.jsx)("div",{children:a.map((function(e){return Object(d.jsx)(O,{id:e.id,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var m=function(){return Object(d.jsx)(a.a,{children:Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{path:"/abot-us",children:Object(d.jsx)("h1",{children:"Hello"})}),Object(d.jsx)(j.a,{path:"/movie/:id",children:Object(d.jsx)(h,{})}),Object(d.jsx)(j.a,{path:"/",children:Object(d.jsx)(x,{})})]})})};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.28326da8.chunk.js.map