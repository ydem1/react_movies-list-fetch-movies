(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var c=i(6),s=i.n(c),a=(i(12),i(2)),n=i(1),r=(i(13),i(14),i(15),i(0)),l=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(r.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(l,{movie:e},e.imdbId)}))})},o=i(7);i(17);var j=function(e){var t=e.movies,i=e.addMovie,c=Object(n.useState)(!1),s=Object(a.a)(c,2),d=s[0],j=s[1],m=Object(n.useState)(!1),b=Object(a.a)(m,2),v=b[0],h=b[1],u=Object(n.useState)(""),O=Object(a.a)(u,2),x=O[0],p=O[1],f=Object(n.useState)(!1),N=Object(a.a)(f,2),g=N[0],y=N[1],w=Object(n.useState)({title:"Title",description:"Plot",imgUrl:"Poster",imdbUrl:"imdbUrl",imdbId:"imdbID"}),I=Object(a.a)(w,2),U=I[0],C=I[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input",value:x,onChange:function(e){j(!1),p(e.target.value)}})}),d&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"searchButton",type:"submit",className:"button is-light ".concat(g?"is-loading":""),onClick:function(e){var t;e.preventDefault(),y(!0),(t=x,fetch("".concat("https://www.omdbapi.com/?apikey=dc33175c","&t=").concat(t)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))).then((function(e){if("Error"in e)j(!0);else{h(!0);var t=e.Title,i=e.Plot,c=e.Poster,s=e.imdbID,a={title:t,description:i,imgUrl:"N/A"===c?"https://via.placeholder.com/360x270.png?text=no%20preview":c,imdbUrl:"https://www.imdb.com/title/".concat(s),imdbId:s};C(a)}})).finally((function(){y(!1)}))},disabled:!x,children:"Find a movie"})}),v&&Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){if(!t.find((function(e){return e.imdbId===U.imdbId}))){var e=[].concat(Object(o.a)(t),[U]);i(e)}h(!1),p("")},children:"Add to the list"})})]})]}),v&&Object(r.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),Object(r.jsx)(l,{movie:U})]})]})},m=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),i=t[0],c=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(d,{movies:i})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(j,{movies:i,addMovie:c})})]})};s.a.render(Object(r.jsx)(m,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.b1e1ff10.chunk.js.map