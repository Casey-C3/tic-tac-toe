(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(6),s=c.n(n),r=(c(12),c(7)),i=c(2),j=c(0),l=function(e){var t=e.board,c=e.placeMark;return t.isArray&&console.log(t),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"game",children:Object(j.jsx)("h1",{children:"Tic-Tac-Toe"})}),Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"board",children:t.map((function(e,t){return Object(j.jsx)("div",{className:"board-row-child",id:t,onClick:function(e){return c(e.target.id)},children:e},t+1)}))})})]})},o=function(e){var t=e.showModal,c=e.win,a=e.closeModal;return t?Object(j.jsx)("div",{className:"modal",children:Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsxs)("h2",{children:[""===c?"Draw":"Player ".concat(c," wins"),"!"]}),Object(j.jsx)("button",{onClick:a,children:"Restart"})]})}):null},d=function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(["","","","","","","","",""]),d=Object(i.a)(s,2),b=d[0],O=d[1],u=Object(a.useState)(""),h=Object(i.a)(u,2),v=h[0],x=h[1],m=Object(a.useState)(0),f=Object(i.a)(m,2),w=f[0],p=f[1],N=Object(a.useState)(!1),g=Object(i.a)(N,2),k=g[0],M=g[1],S=Object(a.useState)(!1),y=Object(i.a)(S,2),T=y[0],X=y[1],C=[[0,1,2],[3,4,5],[6,7,8],[0,3,5],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{}),Object(j.jsx)(l,{board:b,placeMark:function(e){var t=w+1;if(p(t),0===b[e].length){var a=Object(r.a)(b);a[e]=c?"X":"O";for(var s=0;s<C.length;s++){var i=C[s][0],j=C[s][1],l=C[s][2];if(""!==a[i]&&a[i]===a[j]&&a[l]===a[i])x(c?"X":"O"),M(!0)}O(a),n(!c)}9===t&&""===v&&(X(!T),M(!0))}}),Object(j.jsx)(o,{showModal:k,win:v,closeModal:function(){O(["","","","","","","","",""]),x(""),n(!0),M(!1),p(0),X(!1)},draw:T}),Object(j.jsxs)("div",{className:"player-turn",children:["Next Player: ",c?"X":"O"]})]})};s.a.render(Object(j.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.168ce68e.chunk.js.map