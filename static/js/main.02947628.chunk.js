(this["webpackJsonppokemon-react-app"]=this["webpackJsonppokemon-react-app"]||[]).push([[0],{16:function(t,e,n){t.exports=n(25)},21:function(t,e,n){},22:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(8),o=n.n(c),i=(n(21),n(5)),l=n(9),u=n(10),p=n(15),s=n(14),f=(n(22),n(1)),m=n(2);function d(){var t=Object(f.a)(["\n\tcolor: red;\n\tfont-size: 20px;\n\ttext-align: center;\n\tmargin: 30px 0 0px 0;\n"]);return d=function(){return t},t}var v=m.a.p(d());var h=function(t){var e=t.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(v,{none:!0},e))};function b(){var t=Object(f.a)(["\n\tfont-weight: 700;\n"]);return b=function(){return t},t}function g(){var t=Object(f.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n"]);return g=function(){return t},t}function x(){var t=Object(f.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n"]);return x=function(){return t},t}function E(){var t=Object(f.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n\talign-items: center;\n\tjustify-items: center;\n\tgrid-gap: 25px;\n"]);return E=function(){return t},t}var j=m.a.section(E()),k=m.a.article(x()),y=m.a.header(g()),O=m.a.span(b());var C=function(t){var e=t.filterPokemons;return a.a.createElement(j,null,e.length?e.map((function(t){var e=t.id,n=t.name,r=t.number,c=t.imageUrl,o=t.supertype,i=t.types,l=t.rarity;return a.a.createElement(k,{key:e},a.a.createElement(y,{className:"container__header"},a.a.createElement("h2",null,n),a.a.createElement("p",null,"nr.",r)),a.a.createElement("img",{src:c,alt:n}),a.a.createElement("p",null,a.a.createElement(O,null,"Supertype: "),o||"-"),i?a.a.createElement("p",null,a.a.createElement(O,null,"Types: "),i):null,""===l?null:a.a.createElement("p",null,a.a.createElement(O,null,"Rarity:"),l))})):a.a.createElement("div",null,a.a.createElement(h,null,"There are no results")))};function w(){var t=Object(f.a)(["\n\tfont-size: 16px;\n\tborder: none;\n\tpadding: 10px 20px;\n\twidth: 300px;\n\tborder-bottom: 3px solid red;\n\ttransition: border-bottom-color 0.3s;\n\t&:focus {\n\t\tborder-bottom-color: rgb(6, 42, 220);\n\t}\n"]);return w=function(){return t},t}function S(){var t=Object(f.a)(["\n\tfont-size: 16px;\n\tmargin-left: 20px;\n\tmargin-top: 5px;\n\tdisplay: block;\n\ttransition: opacity 0.3s, visibility 0.3s, transform 0.3s;\n"]);return S=function(){return t},t}function z(){var t=Object(f.a)(["\n\tcolor: rgb(6, 42, 220);\n"]);return z=function(){return t},t}function I(){var t=Object(f.a)(["\n\tcolor: ",";\n"]);return I=function(){return t},t}function L(){var t=Object(f.a)(["\n\twidth: 100%;\n\tmargin: 50px auto;\n\tdisplay: flex;\n\talign-items: center;\n\tflex-direction: row;\n\tjustify-content: space-between;\n"]);return L=function(){return t},t}var M=m.a.header(L()),P=m.a.h1(I(),(function(t){return t.primary?"red":"rgb(247, 205, 70)"})),X=m.a.span(z()),Y=m.a.label(S()),A=m.a.input(w());var F=function(t){return a.a.createElement(M,null,a.a.createElement(P,{primary:!0},"Pokemon",a.a.createElement(X,null,"App")),a.a.createElement("div",null,a.a.createElement(A,{onChange:t.handleChangeInput,value:t.value,type:"text",placeholder:"Search",autoComplete:"off",id:"search"}),a.a.createElement(Y,{htmlFor:"search"})))};function J(){var t=Object(f.a)(["\n\tbackground-color: rgb(247, 205, 70);\n\tcolor: white;\n\tborder: none;\n\tpadding: 15px 60px;\n\tcursor: pointer;\n\tfont-size: 20px;\n"]);return J=function(){return t},t}var N=m.a.button(J());var T=function(t){var e=t.onClick,n=t.children;return a.a.createElement(N,{onClick:e},n)};function _(){var t=Object(f.a)(["\n\tz-index: -3;\n\twidth: 50px;\n\theight: 50px;\n\tbackground: rgb(247, 205, 70);\n\tanimation: "," 1.2s infinite ease-in-out;\n"]);return _=function(){return t},t}function B(){var t=Object(f.a)(["\n0% {\n    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n\t}\n\n\n  50% {\n    transform: perspective(120px) rotateX(-180deg) rotateY(0deg);\n\t}\n\t100% {\n    transform: perspective(120px) rotateX(-180deg) rotateY(-180deg);\n  }\n"]);return B=function(){return t},t}function D(){var t=Object(f.a)(["\n\tpadding: 40px 0;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"]);return D=function(){return t},t}var R=m.a.footer(D()),U=Object(m.b)(B()),q=m.a.div(_(),U);var G=function(t){return a.a.createElement(R,null,t.active?a.a.createElement(T,{onClick:t.onClick},"Load More!"):a.a.createElement(q,null))},H=1,K=function(t){Object(p.a)(n,t);var e=Object(s.a)(n);function n(t){var r;return Object(l.a)(this,n),(r=e.call(this,t)).handleChangeInput=function(t){r.setState({value:t.target.value.substr(0,20)})},r.hideSpinner=function(){r.setState({activeSpinner:!1})},r.handleClick=function(){r.hideSpinner();var t="https://api.pokemontcg.io/v1/cards?page=".concat(H,"&pageSize=").concat(4);fetch(t).then((function(t){if(200!==t.status)throw Error;return t.json()})).then((function(t){var e=t.cards;r.setState({pokemons:[].concat(Object(i.a)(r.state.pokemons),Object(i.a)(e)),activeSpinner:!0}),H++})).catch((function(t){return console.log(t)}))},r.state={pokemons:[],activeSpinner:!0,value:""},r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.handleClick()}},{key:"render",value:function(){var t=this,e=this.state.pokemons.filter((function(e){return-1!==e.name.toLowerCase().indexOf(t.state.value.toLowerCase())}));return console.log(e),a.a.createElement("div",{className:"App"},a.a.createElement(F,{value:this.state.value,handleChangeInput:this.handleChangeInput}),a.a.createElement(C,{filterPokemons:e}),a.a.createElement(G,{onClick:this.handleClick,active:this.state.activeSpinner}))}}]),n}(a.a.Component);o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(K,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.02947628.chunk.js.map