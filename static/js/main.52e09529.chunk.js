(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(7),o=n.n(s),i=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))}),a=(n(13),n(2)),h=n(3),l=n(5),d=n(4),b=n(0),j=function(e){var t=e.id,n=e.name,r=e.email;return Object(b.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?size=200x200")}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:n}),Object(b.jsx)("p",{children:r})]})]})},u=function(e){var t=e.robots.map((function(e){return Object(b.jsx)(j,{id:e.id,name:e.name,email:e.email},e.id)}));return Object(b.jsx)("div",{children:t})},f=function(e){return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{onChange:e.searchChange,className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots"})})},O=function(e){return Object(b.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px",position:"fixed"},children:e.children})},p=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(b.jsx)("h1",{children:" Oooops. That is not good"}):this.props.children}}]),n}(r.Component),g=(n(15),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).onSearchChanged=function(e){r.setState({searchField:e.target.value})},r.state={robots:[],searchField:""},r}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return 0===t.length?Object(b.jsx)("h1",{children:"Loading..."}):Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"f1",children:"Robo Friends"}),Object(b.jsx)(f,{searchChange:this.onSearchChanged}),Object(b.jsx)(O,{children:Object(b.jsx)(p,{children:Object(b.jsx)(u,{robots:r})})})]})}}]),n}(r.Component));o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),i()}},[[16,1,2]]]);
//# sourceMappingURL=main.52e09529.chunk.js.map