(this["webpackJsonpdad-jokes"]=this["webpackJsonpdad-jokes"]||[]).push([[0],{22:function(e,t,a){e.exports=a(49)},27:function(e,t,a){},29:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(18),r=a.n(o),i=(a(27),a(2)),c=a(3),l=a(5),u=a(4),m=a(8),h=a(7),p=a.n(h),k=a(21),d=a(19),v=a(6),f=(a(29),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"getColor",value:function(){return this.props.votes>=15?"#4CAF50":this.props.votes>=12?"#8BC34A":this.props.votes>=9?"#CDDC39":this.props.votes>=6?"#FFEB3B":this.props.votes>=3?"#FFC107":this.props.votes>=0?"#FF9800":"#f44336"}},{key:"getEmoji",value:function(){return this.props.votes>=15?"em em-rolling_on_the_floor_laughing":this.props.votes>=12?"em em-laughing":this.props.votes>=9?"em em-smiley":this.props.votes>=6?"em em-slightly_smiling_face":this.props.votes>=3?"em em-neutral_face":this.props.votes>=0?"em em-confused":"em em-angry"}},{key:"render",value:function(){return s.a.createElement("div",{className:"Joke"},s.a.createElement("div",{className:"Joke-buttons"},s.a.createElement("i",{className:"fas fa-arrow-up",onClick:this.props.upvote}),s.a.createElement("span",{style:{borderColor:this.getColor()},className:"Joke-votes"},this.props.votes),s.a.createElement("i",{className:"fas fa-arrow-down",onClick:this.props.downvote})),s.a.createElement("div",{className:"Joke-text"},this.props.text),s.a.createElement("div",{className:"Joke-smiley"},s.a.createElement("i",{class:this.getEmoji()})))}}]),a}(n.Component)),g=a(20),j=a.n(g),b=a(51),E=(a(47),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={jokes:JSON.parse(window.localStorage.getItem("jokes")||"[]"),loading:!1},n.seenJokes=new Set(n.state.jokes.map((function(e){return e.text}))),n.handleClick=n.handleClick.bind(Object(v.a)(n)),n}return Object(c.a)(a,[{key:"handleClick",value:function(){this.setState({loading:!0},this.getJokes)}},{key:"getJokes",value:function(){var e=Object(d.a)(p.a.mark((function e(){var t,a,n,s=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t=[];case 2:if(!(t.length<this.props.numJokes)){e.next=10;break}return e.next=5,j.a.get("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}});case 5:a=e.sent,n=a.data.joke,this.seenJokes.has(n)||t.push({id:Object(b.a)(),text:n,votes:0}),e.next=2;break;case 10:this.setState((function(e){return{loading:!1,jokes:[].concat(Object(k.a)(e.jokes),t)}}),(function(){return window.localStorage.setItem("jokes",JSON.stringify(s.state.jokes))})),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),alert(e.t0),this.setState({loading:!1});case 17:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){0===this.state.jokes.length&&this.getJokes()}},{key:"handleVote",value:function(e,t){var a=this;this.setState((function(a){return{jokes:a.jokes.map((function(a){return a.id===e?Object(m.a)(Object(m.a)({},a),{},{votes:a.votes+t}):a}))}}),(function(){return window.localStorage.setItem("jokes",JSON.stringify(a.state.jokes))}))}},{key:"render",value:function(){var e=this;if(this.state.loading)return s.a.createElement("div",{className:"JokeList-spinner"},s.a.createElement("i",{className:"far fa-8x fa-laugh fa-spin"}),s.a.createElement("h1",{className:"JokeList-title"},"Loading..."));var t=this.state.jokes.sort((function(e,t){return t.votes-e.votes}));return s.a.createElement("div",{className:"JokeList"},s.a.createElement("div",{className:"JokeList-sidebar"},s.a.createElement("h1",{className:"JokeList-title"},s.a.createElement("span",null,"Dad")," Jokes"),s.a.createElement("img",{src:"https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg",alt:"smiley-face"}),s.a.createElement("button",{className:"JokeList-getmore",onClick:this.handleClick},"Fetch Jokes")),s.a.createElement("div",{className:"JokeList-jokes"},t.map((function(t){return s.a.createElement(f,{key:t.id,votes:t.votes,text:t.text,upvote:function(){return e.handleVote(t.id,1)},downvote:function(){return e.handleVote(t.id,-1)}})}))))}}]),a}(n.Component));E.defaultProps={numJokes:10};var J=E,y=(a(48),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(J,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.13585112.chunk.js.map