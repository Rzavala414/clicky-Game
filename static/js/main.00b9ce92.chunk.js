(this.webpackJsonpclickgame=this.webpackJsonpclickgame||[]).push([[0],{1:function(e){e.exports=JSON.parse('[{"id":1,"image":"/img/beerus.jpg","clicked":false},{"id":2,"image":"/img/buu.png","clicked":false},{"id":3,"image":"/img/cell.png","clicked":false},{"id":4,"image":"/img/frieza.png","clicked":false},{"id":5,"image":"/img/kingKai.png","clicked":false},{"id":6,"image":"/img/piccolo.png","clicked":false},{"id":7,"image":"/img/sayianMan.png","clicked":false},{"id":8,"image":"/img/vegeta.png","clicked":false},{"id":9,"image":"/img/vegito.png","clicked":false},{"id":10,"image":"/img/Whis.png","clicked":false},{"id":11,"image":"/img/zamasu.png","clicked":false},{"id":12,"image":"/img/goku.png","clicked":false}]')},10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),i=n.n(r),l=(n(15),n(4)),o=n(5),s=n(6),u=n(8),m=n(7),g=n(9);n(16);var d=function(e){return c.a.createElement("img",{src:e.image,role:"img",onClick:function(){return e.handleClick(e.id)},className:"allImg"})};var f=function(e){return c.a.createElement("main",{className:"container"},e.children)},p=n(1);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={data:p,score:0,topScore:0},n.handleCorrectGuess=function(e){console.log("Guessed Correctly"),console.log(p);var t=n.state,a=t.topScore,c=t.score+1,r=Math.max(c,a);n.setState({data:n.shuffle(e),score:c,topScore:r})},n.handleIncorrectGuess=function(e){n.setState({data:n.resetData(e),score:0})},n.resetData=function(e){var t=e.map((function(e){return k({},e,{clicked:!1})}));return n.shuffle(t)},n.shuffle=function(e){return e.sort((function(){return Math.random()-.5})),e},n.handleItemClick=function(e){var t=!1,a=n.state.data.map((function(n){var a=k({},n);return a.id===e&&(a.clicked||(a.clicked=!0,t=!0)),a}));console.log(a),t?n.handleCorrectGuess(a):n.handleIncorrectGuess(a)},n}return Object(g.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(f,null,this.state.data.map((function(t){return c.a.createElement(d,{key:t.id,id:t.id,shake:!e.state.score&&e.state.topScore,handleClick:e.handleItemClick,image:t.image})}))),c.a.createElement("div",null,c.a.createElement("p",null,"Score:",this.state.score),c.a.createElement("p",null,"TopScore:",this.state.topScore)))}}]),t}(a.Component);n(17);var b=function(){return c.a.createElement("div",null,c.a.createElement(v,null))};i.a.render(c.a.createElement(b,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.00b9ce92.chunk.js.map