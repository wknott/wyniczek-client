(this["webpackJsonpwyniczek-client"]=this["webpackJsonpwyniczek-client"]||[]).push([[0],{138:function(e,t){},140:function(e,t){},159:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n),a=r(16),c=r.n(a);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=r(8),l=r(23),o=r(98);const d=Object(l.b)({name:"auth",initialState:{isAuthenticated:null!==localStorage.getItem("user")},reducers:{handleLogout:e=>{e.isAuthenticated=!1},handleLogin:e=>{e.isAuthenticated=!0}}}),{handleLogout:u,handleLogin:b}=d.actions,p=e=>e.auth;var m=d.reducer;const h=Object(l.b)({name:"nav",initialState:{open:!1},reducers:{handleOpen:e=>{e.open=!0},handleClose:e=>{e.open=!1}}}),{handleOpen:j,handleClose:x}=h.actions,g=e=>e.nav.open;var O=h.reducer;const y=Object(l.b)({name:"games",initialState:{games:[],loading:!1,newGamesFromQuery:[],newGameDetails:null,game:null},reducers:{fetchGames:e=>{e.loading=!0},fetchGamesSuccess:(e,t)=>{let{payload:r}=t;e.games=r,e.loading=!1},fetchNewGameDetails:e=>{e.loading=!0},fetchNewGameDetailsSuccess:(e,t)=>{let{payload:r}=t;e.newGameDetails=r,e.loading=!1},fetchNewGamesByQuery:e=>{e.loading=!0},fetchNewGamesByQuerySuccess:(e,t)=>{let{payload:r}=t;e.newGamesFromQuery=r,e.loading=!1},fetchGame:e=>{e.loading=!0},fetchGameSuccess:(e,t)=>{let{payload:r}=t;e.game=r,e.loading=!1},fetchError:e=>{e.loading=!1}}}),{fetchGames:f,fetchError:w,fetchGamesSuccess:v,fetchNewGamesByQuery:k,fetchNewGamesByQuerySuccess:A,fetchNewGameDetails:$,fetchNewGameDetailsSuccess:z,fetchGame:C,fetchGameSuccess:S}=y.actions,R=e=>e.games,E=e=>R(e).games,M=e=>R(e).loading,L=e=>R(e).newGamesFromQuery,T=e=>R(e).newGameDetails,B=e=>R(e).game;var G=y.reducer;const D=Object(l.b)({name:"results",initialState:{results:[],numberOfResults:null,loading:!1,result:null},reducers:{fetchResult:e=>{e.loading=!0},changeResult:(e,t)=>{let{payload:r}=t;e.result=r},fetchResultSuccess:(e,t)=>{let{payload:r}=t;e.result=r,e.loading=!1},fetchResults:e=>{e.loading=!0},fetchResultsSuccess:(e,t)=>{let{payload:r}=t;e.results=r.results,e.numberOfResults=r.numberOfResults,e.loading=!1},fetchError:e=>{e.loading=!1}}}),{fetchResult:F,fetchResultSuccess:I,fetchResults:N,fetchError:Q,fetchResultsSuccess:U,changeResult:P}=D.actions,V=e=>e.results,_=e=>V(e).result;var J=D.reducer;const X=Object(l.b)({name:"users",initialState:{users:[],loading:!1},reducers:{fetchUsersSuccess:(e,t)=>{let{payload:r}=t;e.users=r,e.loading=!1},fetchUsers:e=>{e.loading=!0},fetchError:e=>{e.loading=!1}}}),{fetchUsers:W,fetchUsersSuccess:H,fetchError:K}=X.actions,Y=e=>e.users,Z=e=>Y(e).users,q=e=>Y(e).loading;var ee=X.reducer;const te={theme:localStorage.getItem("theme")||"light"},re=Object(l.b)({name:"theme",initialState:te,reducers:{toggleTheme(e){const t="light"===e.theme?"dark":"light";e.theme=t,localStorage.setItem("theme",t)}}}),ne=e=>e.theme.theme,{toggleTheme:ie}=re.actions;var ae=re.reducer,ce=r(9);function*se(){try{yield localStorage.removeItem("user")}catch(e){yield Object(ce.b)(alert,"Nie uda\u0142o si\u0119 wylogowa\u0107.")}}function*le(){yield Object(ce.e)(u.type,se)}var oe=r(40),de=r.n(oe),ue=r(59);function be(){return JSON.parse(localStorage.getItem("user"))}const pe=e=>{const t=new URLSearchParams("");for(const r in e){const n=e[r];n?t.set(r,n):t.delete(r)}return t.toString()},me=function(){const e=be();return e&&e.token?{Authorization:"Bearer "+e.token}:{}}().Authorization,he="https://wyniczekapi.bieda.it",je=async e=>{let{path:t,parameters:r}=e;return(await de.a.get(`${he}${t}${pe(r)?"?":""}${pe(r)}`)).data},xe=async()=>je({path:"/api/games"}),ge=async e=>je({path:`/api/games/${e}`}),Oe=async(e,t)=>je({path:"/api/results",parameters:{page:e,gameId:t}}),ye=async()=>je({path:"/api/games/last"}),fe=async()=>je({path:"/api/games/numberOfResults"}),we=async e=>je({path:`/api/games/numberOfResults/${e}`}),ve=async e=>je({path:`/api/results/${e}`}),ke=async e=>je({path:"/api/results",parameters:{last:"true",gameId:e}}),Ae=async(e,t)=>je({path:`/api/users/${e}`,parameters:{gameId:t}}),$e=async e=>{const t={"Content-Type":"application/json",Authorization:me};return await de.a.patch(`${he}/api/results/${e._id}`,{scores:e.scores.map((e=>{let{_id:t,points:r,user:n}=e;return{_id:t,points:r,user:n.id}}))},{headers:t})},ze="https://api.geekdo.com/xmlapi2",Ce=async e=>{try{const t=await fetch(`${ze}/search?${pe({query:e,type:"boardgame"})}`);if(!t.ok)throw new Error(t.statusText);const r=await t.text(),n=await Object(ue.xml2js)(r,{compact:!0,spaces:4});switch(+n.items._attributes.total){case 0:return[];case 1:return[{id:n.items.item._attributes.id,name:n.items.item.name._attributes.value,yearPublished:n.items.item.yearpublished._attributes.value}];default:const e=n.items.item.slice(0,10).map((e=>({id:e._attributes.id,name:e.name._attributes.value,yearPublished:e.yearpublished?e.yearpublished._attributes.value:0})));return e}}catch(t){return t}},Se=async e=>{try{const t=await fetch(`${ze}/thing?id=${e}`),r=await t.text(),n=await Object(ue.xml2js)(r,{compact:!0,spaces:4}),i=Array.isArray(n.items.item.name)?n.items.item.name.map((e=>e._attributes.value)):[n.items.item.name._attributes.value];return{name:i,img:n.items.item.image._text,thumbnail:n.items.item.thumbnail._text,minPlayers:n.items.item.minplayers._attributes.value,maxPlayers:n.items.item.maxplayers._attributes.value,id:e}}catch(t){return t}},Re=async e=>{try{const t=await fetch(`${ze}/thing?id=${e}&stats=1`),r=await t.text(),n=await Object(ue.xml2js)(r,{compact:!0,spaces:4}),i=parseInt(n.items.item.statistics.ratings.ranks.rank[0]._attributes.value)||99999,a=n.items.item.statistics.ratings.averageweight._attributes.value||0;return{bggRank:i,weight:a}}catch(t){return{bggRank:99999,weight:0}}};function Ee(e){let{payload:t}=e;return function*(){try{const e=yield Object(ce.b)(xe);if(null!==t&&void 0!==t&&t.withoutStats)yield Object(ce.d)(v(e));else{const t=yield Object(ce.b)(ye),r=yield Object(ce.b)(fe),n=yield Object(ce.a)(e.map((e=>Object(ce.b)(Re,e.bggId)||{bggRank:99999,weight:0}))),i=e.map(((e,i)=>{var a,c;return{...e,lastResultDate:null===(a=t.find((t=>{let{_id:r}=t;return r===e._id})))||void 0===a?void 0:a.lastGameDate,numberOfResults:null===(c=r.find((t=>{let{_id:r}=t;return r===e._id})))||void 0===c?void 0:c.numberOfResults,...n[i]}}));yield Object(ce.d)(v(i))}}catch(e){yield Object(ce.b)(alert,"Nie uda\u0142o si\u0119 wczyta\u0107 gier, spr\xf3buj od\u015bwie\u017cy\u0107 stron\u0119."),yield Object(ce.d)(w())}}()}function Me(e){let{payload:t}=e;return function*(){try{const e=yield Object(ce.b)(Se,t);yield Object(ce.d)(z(e))}catch(e){yield Object(ce.b)(alert,"Nie uda\u0142o si\u0119 wczyta\u0107 gier, spr\xf3buj od\u015bwie\u017cy\u0107 stron\u0119."),yield Object(ce.d)(w())}}()}function Le(e){let{payload:t}=e;return function*(){try{const e=yield Object(ce.b)(Ce,t);yield Object(ce.d)(A(e))}catch(e){yield Object(ce.b)(alert,"Nie uda\u0142o si\u0119 wczyta\u0107 gier, spr\xf3buj od\u015bwie\u017cy\u0107 stron\u0119."),yield Object(ce.d)(w())}}()}function Te(e){let{payload:t}=e;return function*(){try{const e=yield Object(ce.b)(ge,t),r=yield Object(ce.b)(ke,t),n=yield Object(ce.b)(we,t),i=yield Object(ce.b)(Re,e.bggId),a={...e,lastResultDate:r.results.date,numberOfResults:n,...i};yield Object(ce.d)(S(a))}catch(e){yield Object(ce.b)(alert,"Nie uda\u0142o si\u0119 wczyta\u0107 gry, spr\xf3buj od\u015bwie\u017cy\u0107 stron\u0119."),yield Object(ce.d)(w())}}()}function*Be(){yield Object(ce.e)(f.type,Ee),yield Object(ce.e)($.type,Me),yield Object(ce.c)(500,k.type,Le),yield Object(ce.e)(C.type,Te)}function Ge(e){let{payload:t}=e;return function*(){try{const{results:e,numberOfResults:r}=yield Object(ce.b)(Oe,t.page,t.selectedGameId);yield Object(ce.d)(U({results:e,numberOfResults:r}))}catch(e){yield Object(ce.b)(alert,"Nie uda\u0142o si\u0119 wczyta\u0107 wynik\xf3w."),yield Object(ce.d)(Q)}}()}function De(e){let{payload:t}=e;return function*(){try{const e=yield Object(ce.b)(ve,t.id);yield Object(ce.d)(I(e))}catch(e){yield Object(ce.b)(alert,"Nie uda\u0142o si\u0119 wczyta\u0107 wynik\xf3w."),yield Object(ce.d)(Q)}}()}function Fe(e){let{payload:t}=e;return function*(){try{yield Object(ce.b)($e,t)}catch(e){yield Object(ce.b)(alert,"Nie uda\u0142o si\u0119 aktualizowa\u0107 wyniku."),yield Object(ce.d)(Q)}}()}function*Ie(){yield Object(ce.e)(N.type,Ge)}function*Ne(){yield Object(ce.e)(F.type,De)}function*Qe(){yield Object(ce.e)(P.type,Fe)}function Ue(e){let{payload:t}=e;return function*(){try{const e=yield Object(ce.b)(Ae,"numberOfResults",t);yield Object(ce.d)(H(e))}catch(e){yield Object(ce.b)(alert,"Nie uda\u0142o si\u0119 wczyta\u0107 u\u017cytkownik\xf3w."),yield Object(ce.d)(K)}}()}function*Pe(){yield Object(ce.e)(W.type,Ue)}const Ve=Object(o.a)(),_e=Object(l.a)({reducer:{auth:m,nav:O,games:G,results:J,users:ee,theme:ae},middleware:[Ve]});Ve.run((function*(){yield Object(ce.a)([Be(),Ie(),Ne(),le(),Pe(),Qe()])}));var Je=_e,Xe=r(17),We=r(20),He=r(3);const Ke=function(){let{gameId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{gameId:""};return"/wyniki"+(e?`?gra=${e}`:"")},Ye=function(){let{game:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{game:""};return"/nowy-wynik"+(e?`?gra=${e}`:"")},Ze=function(){let{id:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:":id"};return`/gry/nowa/${e}`},qe=function(){let{id:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:":id"};return`/gry/${e}`},et=function(){let{id:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{id:":id"};return`/wyniki/${e}`},tt="link-active",rt=He.d.nav`
  background-color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  display: grid;
  grid-template-columns: auto 5fr auto;

  @media(max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px){
    display: grid;
    grid-template-areas: 
      "logo burger"
      "list list";
  }
`,nt=He.d.ul`
  max-width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  text-transform: uppercase;
`,it=Object(He.d)(nt)`
  display: flex;
  justify-content: flex-start;

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px) {
    display: none;
  }
`,at=Object(He.d)(nt)`
  grid-area: list;
  
  @media (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px) {
    display: none;
  }
`,ct=He.d.li`
  list-style-type: none;
  display: inline-block;
  padding: 20px;
  align-self: center;

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px) {
    display: block;
    padding: 10px 20px;
  }
`,st=Object(He.d)(ct)`
  margin-left: auto;
  color: ${e=>{let{theme:t}=e;return t.colors.brightText}};
`,lt=Object(He.d)(st)`
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px) {
    display: none;
  }
`,ot=Object(He.d)(st)`
  @media (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px) {
    display: none;
  }
`,dt=Object(He.d)(ct)`
  margin-left: auto;
  
  @media (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px) {
    display: none;
  }
`,ut=Object(He.d)(Xe.c).attrs((()=>({activeClassName:tt})))`
  &.${tt} {
    font-weight: bold;
  };

  color: ${e=>{let{theme:t}=e;return t.colors.brightText}};
`,bt=He.d.span`
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.brightText}};
    text-decoration: none;
    border-bottom: 1px solid;
  }
`,pt=He.d.img`
  margin: 0px 20px;
  height: 62px;

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px){
    height: 52px;
  }
`,mt=He.d.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${e=>{let{theme:t}=e;return t.colors.brightText}};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    
    :first-child {
      transform: ${e=>{let{open:t}=e;return t?"rotate(45deg)":"rotate(0)"}};
    }

    :nth-child(2) {
      opacity: ${e=>{let{open:t}=e;return t?"0":"1"}};
      transform: ${e=>{let{open:t}=e;return t?"translateX(20px)":"translateX(0)"}};
    }

    :nth-child(3) {
      transform: ${e=>{let{open:t}=e;return t?"rotate(-45deg)":"rotate(0)"}};
    }
  }
`;var ht=r(1);var jt=()=>{const e=Object(s.c)(g),t=Object(s.b)();return Object(ht.jsxs)(mt,{open:e,onClick:()=>t(e?x():j()),children:[Object(ht.jsx)("div",{}),Object(ht.jsx)("div",{}),Object(ht.jsx)("div",{})]})},xt=r.p+"static/media/logo.cf59f2d6.png";const gt=He.d.button`
  width: 64px;
  height: 32px;
  padding: 8px;
  border-radius: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: ${e=>{let{theme:t}=e;return t.colors.themeSwitcherBackground}};
  transition: all 0.3s linear;
`,Ot=He.d.div`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  position: absolute;
  top: 4px;
  transition: all 0.3s linear;
`,yt=Object(He.d)(Ot)`
  left: 4px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.secondary}};

  ${e=>{let{isDarkThemeEnabled:t}=e;return t&&He.c`
    left: calc(100% - 28px);
  `}}
`,ft=Object(He.d)(Ot)`
  left: 30px;
  width: 20px;
  height: 20px;
  top: 3px;
  background: ${e=>{let{theme:t}=e;return t.colors.themeSwitcherBackground}};

  ${e=>{let{isDarkThemeEnabled:t}=e;return!t&&He.c`
    left: -16px;
  `}}
`;var wt=()=>{const e=Object(s.b)(),t="dark"===Object(s.c)(ne);return Object(ht.jsxs)(gt,{onClick:()=>e(ie()),children:[Object(ht.jsx)(yt,{isDarkThemeEnabled:t}),Object(ht.jsx)(ft,{isDarkThemeEnabled:t})]})};var vt=()=>{const e=Object(s.c)(g),{isAuthenticated:t}=Object(s.c)(p),r=Object(s.b)(),n=Object(ht.jsxs)(ht.Fragment,{children:[t&&Object(ht.jsx)(ct,{as:ut,to:Ye(),children:Object(ht.jsx)(bt,{children:"Nowy wynik"})}),Object(ht.jsx)(ct,{as:ut,to:"/gry",children:Object(ht.jsx)(bt,{children:"Gry"})}),Object(ht.jsx)(ct,{as:ut,to:"/uzytkownicy",children:Object(ht.jsx)(bt,{children:"U\u017cytkownicy"})}),Object(ht.jsx)(lt,{children:Object(ht.jsx)(wt,{})}),t?Object(ht.jsx)(st,{as:ut,to:"/wyloguj",onClick:()=>r(u()),children:Object(ht.jsx)(bt,{children:"Wyloguj"})}):Object(ht.jsx)(st,{as:ut,to:"/logowanie",children:Object(ht.jsx)(bt,{children:"Logowanie"})})]});return Object(ht.jsxs)(rt,{children:[Object(ht.jsx)("div",{children:Object(ht.jsx)(Xe.c,{to:Ke(),onClick:()=>r(x()),children:Object(ht.jsx)(pt,{src:xt,alt:"Logo"})})}),Object(ht.jsx)(it,{onClick:()=>r(x()),children:n}),Object(ht.jsx)(ot,{children:Object(ht.jsx)(wt,{})}),Object(ht.jsx)(dt,{children:Object(ht.jsx)(jt,{})}),e&&Object(ht.jsx)(at,{open:e,onClick:()=>r(x()),children:n})]})},kt=r(200);function At(e,t){const r=new Date(e);let n;switch(t){case"short":return n={day:"2-digit",month:"2-digit",year:"2-digit"},r.toLocaleDateString("pl-pl",n);case"long":return n={second:"numeric",minute:"numeric",hour:"numeric",day:"2-digit",month:"long",year:"numeric"},r.toLocaleDateString("pl-pl",n);default:return n={day:"2-digit",month:"long",year:"numeric"},r.toLocaleDateString("pl-pl",n)}}function $t(e){const t=Math.max(...e.scores.map((e=>Object.values(e.points).reduce(((e,t)=>e+t),0))));return e.scores.filter((e=>Object.values(e.points).reduce(((e,t)=>e+t),0)===t&&Object.values(e.points).reduce(((e,t)=>e+t),0)>0)).map((e=>e.user.name))}function zt(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(r,n){if(!r.hasOwnProperty(e)||!n.hasOwnProperty(e))return 0;const i="string"===typeof r[e]?r[e].toUpperCase():r[e],a="string"===typeof n[e]?n[e].toUpperCase():n[e];let c=0;return i>a?c=1:i<a&&(c=-1),"desc"===t?-1*c:c}}const Ct=e=>{const t=Object(We.h)();return new URLSearchParams(t.search).get(e)},St=()=>{const e=Object(We.h)(),t=new URLSearchParams(e.search),r=Object(We.g)();return n=>{let{key:i,value:a}=n;a?t.set(i,a):t.delete(i),t?r.push(`${e.pathname}?${t.toString()}`):r.push(`${e.pathname}`)}},Rt="strona",Et="gra";var Mt=r(94),Lt=r.n(Mt);const Tt=He.d.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`,Bt=He.d.p`
  text-align: center;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  margin: 48px 0;
`,Gt=Object(He.d)(Lt.a)`
  fill: ${e=>{let{theme:t}=e;return t.colors.primary}} !important;
`;var Dt=e=>{let{message:t,size:r}=e;return Object(ht.jsxs)(Tt,{children:[t&&Object(ht.jsx)(Bt,{children:t}),Object(ht.jsx)("div",{children:Object(ht.jsx)(Gt,{type:"spin",height:`${r||128}px`,width:`${r||128}px`})})]})},Ft=r(199);const It=Object(He.d)(Ft.a)`
  background-color: ${e=>{let{theme:t}=e;return t.colors.sectionBackground}};
  & .MuiSvgIcon-root {
      fill: ${e=>{let{theme:t}=e;return t.colors.text}};
    }
  & .MuiSvgIcon-root {
      fill: ${e=>{let{theme:t}=e;return t.colors.text}};
    }
  & .MuiFilledInput-underline:before {
    border-bottom-color: ${e=>{let{theme:t}=e;return t.colors.text}} !important;
  }
  & label {
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
  }
  & input {
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
  }
  & label .Mui-focused {
    color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }
  & .MuiInput-underline:after {
    border-bottom-color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }
`;var Nt=e=>{let{firstOption:t}=e;const r=Object(s.c)(E),i=Object(s.c)(M),a=[...r].sort(zt("numberOfResults","desc")),c=Ct(Et),l=St(),o=Object(s.b)();Object(n.useEffect)((()=>{o(f({withoutStats:!0}))}),[o]);return i?Object(ht.jsx)(Dt,{}):Object(ht.jsx)(kt.a,{options:a,getOptionLabel:e=>e.name,value:r.find((e=>e._id===c))||null,onChange:(e,t)=>{(e=>{l({key:Rt}),l({key:Et,value:e})})(null===t||void 0===t?void 0:t._id)},renderInput:e=>Object(ht.jsx)(It,{...e,label:t,variant:"filled"})})},Qt=He.d.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primary}};
`;const Ut=He.d.select`
  width: 100%;
  padding: 10px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.primary}};
`;var Pt=e=>{let{value:t,options:r,onChange:n,firstOption:i}=e;return Object(ht.jsxs)(Ut,{value:void 0!==t?t._id:"",onChange:e=>n(e.target.value),children:[Object(ht.jsx)("option",{value:"",children:i}),r.map((e=>Object(ht.jsx)("option",{value:e._id,children:e.name},e._id)))]})},Vt=He.d.button`
  padding: 16px 24px;
  font-size: 14px;
  border: none;
  background-color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  color: ${e=>{let{theme:t}=e;return t.colors.brightText}};
  transition: 0.5s;
  text-transform: uppercase;
  cursor: pointer;
  
  &:hover {
    filter: brightness(115%);
  }

  &:active {
    filter: brightness(130%);
  }

  &:disabled {
    background-color: ${e=>{let{theme:t}=e;return t.colors.disabled}};
    color: ${e=>{let{theme:t}=e;return t.colors.grey}};
    cursor: not-allowed;

    &:hover {
      filter: none;
    }

    &:active {
      filter: none;
    }
  }
`;const _t=He.d.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
`,Jt=He.d.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: minmax(160px, auto) repeat( ${e=>{let{columns:t}=e;return t-1}}, minmax(80px, 400px));

  @media(max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px) {
    grid-gap: 4px;
    grid-template-columns: minmax(100px, auto) repeat( ${e=>{let{columns:t}=e;return t-1}}, minmax(80px, 400px));
  }
`,Xt=Object(He.d)(Vt)`
  background-color: ${e=>{let{theme:t,color:r}=e;return t.colors[r]}};
  
  &:hover {
    filter: brightness(90%);
  }

  &:active {
    filter: brightness(80%);
  }

  @media(max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px) {
    padding: unset;
  }
`,Wt=Object(He.d)(Vt)`
  grid-column-start: 1;
  grid-column-end: -1;
`,Ht=(He.d.div`
  grid-column-start: 1;
  grid-column-end: -1;
`,He.d.p`
  margin: 0;
  align-self: center;
  font-size: 16px;
  font-weight: 600;
  padding: 10px;
  color: ${e=>{let{theme:t}=e;return t.colors.brightText}};

  @media(max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px) {
    font-size: 13px;
  }
`),Kt=Object(He.d)(Ht)`
  background-color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,Yt=Object(He.d)(Ht)`
  text-align: center;
  background-color: ${e=>{let{theme:t}=e;return t.colors.secondary}};
`,Zt=He.d.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 4px;
`;He.d.input`
  align-self: center;
  margin-left: 10px;
  width: 20px;
  height: 20px;
`;var qt=function(){const[e,t]=Object(n.useState)([]),[r,a]=Object(n.useState)(2),[c,l]=Object(n.useState)([]),[o,d]=Object(n.useState)(!1),[u,b]=Object(n.useState)(""),p=Object(s.c)(Z),m=[...p].sort(zt("numberOfResults","desc")),h=Object(s.c)(q),j=Ct(Et),x=Object(s.c)(E),g=x.find((e=>e._id===j)),O=Object(We.g)(),y=Object(s.b)();function w(e,t,r){const n=Array.from({length:e},((e,n)=>({user:void 0!==r&&r.length>n?r[n].id:null,points:Array.from({length:t},(()=>null))})));void 0===r||r.length<2?l(c.concat(n).slice(0,e)):l(n.slice(0,e))}async function v(e){e.preventDefault();const t={game:g._id,scores:c,author:JSON.parse(localStorage.user).id,playingTime:+u};try{const e=await(async e=>{const t={"Content-Type":"application/json",Authorization:me};return await de.a.post(`${he}/api/results`,e,{headers:t})})(t),r=e.data;return O.push(Ke()),r}catch(r){return r}}return Object(n.useEffect)((()=>{y(W()),x||y(f())}),[y,x]),Object(n.useEffect)((()=>{(async()=>{if(d(!0),void 0!==g){const{results:e}=await ke(g._id);if(void 0!==(null===e||void 0===e?void 0:e.scores)){const r=e.scores.map((e=>e.user)),n=await r.slice().reverse();t(n),w(2,g.pointFields.length,n)}else w(2,g.pointFields.length)}d(!1),a(2)})()}),[g]),h||o||!g?Object(ht.jsx)(ht.Fragment,{}):Object(ht.jsxs)(_t,{onSubmit:e=>v(e),children:[Object(ht.jsxs)(Jt,{columns:c.length+1,children:[Object(ht.jsxs)(Zt,{children:[Object(ht.jsx)(Xt,{type:"button",color:"green",onClick:()=>(e.length>r?w(r+1,g.pointFields.length,[e[r]]):w(r+1,g.pointFields.length),void a(r+1)),disabled:r===g.maxPlayers,children:Object(ht.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjCRcMITrfU/vuAAACaUlEQVRo3u2YP2gTURzHvy8p8Q821sF/GK3QHkINpYsR2sVWrIOICNJRB6WTXTo5uhQHBydx6tChSxFLF0Gsg6kU0eqkQwgFEYMprRQbsLaSfB2Oxrbp3f3e3bsE6n2mu9zv3vfz7iXvXR4QERHxv6NMNsYDSOEoSviOBVWpaz+Y5DBnWOYGBT7h+XqFKw5xkbVU+JSnw4/fy3E6s8TecOMTzNKdNfaFKTBKb5bYFlZ8ryCeJJ+HE6/4QShAXghD4Jw4nhx3aqWpplkLt6snWeX28K5p2F5hQq3L+tW/yfuha+VLjSdApnduJRZgDI5rVZ8wL9CsVX3QvMCiVnXRvMA3reqCeYFXGrVf1Lx5gSlQXDvpdCGAgPqKCWHpOh47tsK5bZ8kYVWPF2rG+a56+++EbfiMPQKBR2rY8ZrWZEL2b7v7luCej9zvIhdMAOCIxx3zTLk+naACAO9wzbF+hkc8hie4AMAznGClprbAQTZ5xMOzQILKYYAduI7LOIVjWEERc5jCC/XbR2Py1dAMQSaiSGB3CBj5FdhQoQVJNGMVJZTUal0EGMNZ9CANC+1oRXzTlWXkkUcO7zGrVkIQ4EncwCV0O71q4RAyyAAAKvyE15hEVpUlAj8wXT3O7xjdgpsYQLd4byGGTnRiCEU+w5h657fLdvhh3uey5vS9lTe86jd8Hx/wV6DwDWbZpR/fwZyRcJs/vEed7SH28KfBeJtRsQKtgOPuxIhwl4zTuOjzi+NOGZm4dxXTCGtZjiEhWQvC6b1Nn0RA71+wHimJgGCYfBNv+HIcCTRcQDAR0UJrozUjIiJ2M38BzvF48Xqw44QAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDktMjNUMTI6MzM6NTgrMDA6MDADLG3bAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA5LTIzVDEyOjMzOjU4KzAwOjAwcnHVZwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=",width:"auto",height:"15",alt:""})}),Object(ht.jsx)(Xt,{type:"button",color:"red",onClick:()=>(l(c.slice(0,r-1)),void a(r-1)),disabled:r===g.minPlayers,children:Object(ht.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjCRcMLh39wVJKAAACR0lEQVRo3u2XMUxTQRjH/8drKhooECJKrGAC1QQZWMBEFguJDsQYF0ZdiJMOMDm6EAcHExcnBgcSY4iEhcREFzHEKJo4ODSEhIGGNkCqNAEa0/5dsKmW1/cd766L9+v0+r533+/e3X33DnA4HP87ymRjbEIcZ5DHJrKqVNd+MMYpLrHIP6T5nFfqlVzxAbdYTYlzvGA/fSNn6c82k3bTR/metSlwxKbADIPZZo+t9EnKWLQ1+b5QyjUbAoOUM+vXSkNVs3/9anJLw3aMUaGABjqFpgUXzQt0akWfMy/QrBXdYl5gSys6Y15gQys6bV7gnUbsulozL7AQtE4rmJeXF3kdAF8Ky1DBfzdQXAEA7CB3+E8Tusp3d5CtiG1DO+6rjxUCPfiOE4JePVVT/r3Q4/o/T98VPPOVp2q9xlACAKcDnlhjvPY4hhQAOMGCb/wSO4ImUmgBgJf4iqWq2DTvMRI0PSIwgEphnH24jRvowlnsIoMVLOCNOjjGuYBRtJUv9lS+7gcT2ju3GK+ETsAIEXNNUaEVMTRjH3nk1X5dBNiAyxhGPxLoRTe8ijs5rGIVKXzGstrVaVK4G/I8J7nIH4LiVeQ3PmOSnmwZxtBbvsiqI75j2Io7GMdV7TWawWu8UJ/CvfLTfMQcw/CBN4+b/CQfc48mWOaAfvo+pmiOX3xInSHkMH/SNDNiBSZCjrsf08Ldhm8xaqUMFjHkCdL344m1jSAq2QtGLW4FIxKBTosCcYmAZ1HAc98DTkBQiJhANxwOh8MavwGu55VjxXSnpwAAAABJRU5ErkJggg==",width:"auto",height:"15",alt:""})})]}),c.map(((e,t)=>Object(ht.jsx)(Pt,{value:p.find((t=>t._id===e.user)),onChange:t=>((e,t)=>{const r={user:e,points:t.points},n=c.map((e=>e===t?r:e));l(n)})(t,e),options:m,firstOption:`${t+1}. Gracz`},t))),g.pointFields.map(((e,t)=>Object(ht.jsxs)(i.a.Fragment,{children:[Object(ht.jsx)(Kt,{children:e}),c.map(((e,r)=>Object(ht.jsx)(Qt,{type:"number",value:e.points[t]||"",onChange:r=>function(e,t,r){const n=parseInt(e.target.value,10)||null,i=r.points.map(((e,r)=>r===t?n:e)),a={user:r.user,points:i},s=c.map((e=>e===r?a:e));l(s)}(r,t,e)},r)))]},t))),0===g.pointFields.length?Object(ht.jsxs)(ht.Fragment,{children:[Object(ht.jsx)(Kt,{children:"Wynik"}),c.map(((e,t)=>Object(ht.jsx)(Qt,{type:"number",value:e.points[0]||"",onChange:t=>function(e,t){const r=parseInt(e.target.value,10)||null,n={user:t.user,points:[r]},i=c.map((e=>e===t?n:e));l(i)}(t,e)},t)))]}):Object(ht.jsxs)(ht.Fragment,{children:[Object(ht.jsx)(Kt,{children:"Wynik"}),c.map(((e,t)=>Object(ht.jsx)(Yt,{children:Object.values(e.points).reduce(((e,t)=>e+t),0)},t)))]})]}),Object(ht.jsxs)(Jt,{columns:2,children:[Object(ht.jsx)(Kt,{children:"Czas rozgrywki (w\xa0minutach)"}),Object(ht.jsx)(Qt,{type:"number",value:u,onChange:e=>{let{target:t}=e;return b(t.value)}})]}),Object(ht.jsx)(Wt,{disabled:!function(){const e=c.map((e=>e.user));return e.length>0&&JSON.stringify(e)===JSON.stringify([...new Set(e)])&&c.every((e=>e.user))&&+u>0}(),variant:"primary",type:"submit",children:"Dodaj wynik"})]})};const er=He.d.div`
  width: 100%;
  overflow-x: auto;
`,tr=He.d.div`
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;

  @media(max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px) {
    padding: 12px;
    grid-gap: 12px;
  };
`;var rr=()=>Object(ht.jsxs)(tr,{children:[Object(ht.jsx)(Nt,{firstOption:"Wybierz gr\u0119"}),Object(ht.jsx)(er,{children:Object(ht.jsx)(qt,{})})]});var nr=function(e){let{component:t,...r}=e;return Object(ht.jsx)(We.b,{...r,render:e=>localStorage.getItem("user")?Object(ht.jsx)(t,{...e}):Object(ht.jsx)(We.a,{to:{pathname:"/",state:{from:e.location,alert:"Wymagane logowanie."}}})})},ir=He.d.main`
  padding: 10px;
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  @media(max-width: 1132px){
    max-width: calc(100% - 2 * 16px);
  }

  @media(max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px) {
    max-width: calc(100% - 2 * 4px);
  }
`,ar=r(97);const cr=He.d.div`
  overflow-x: auto;
  width: 100%;
`,sr=He.d.table`
  border-collapse: collapse;
  width: 100%;
`,lr=He.d.td`
  padding: 16px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.text}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.body}};
  text-align: center;

  @media(max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px){
    font-size: 12px;
    padding: 8px 4px;
  }
`,or=He.d.th`
  padding: 16px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.text}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  color: ${e=>{let{theme:t}=e;return t.colors.brightText}};
  text-align: center;
  
  @media(max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px){
    font-size: 12px;
    padding: 8px 4px;
    font-weight: normal;
  }
`,dr=He.d.tr`
  background-color: ${e=>{let{theme:t}=e;return t.colors.brightText}};

  &:hover{
    background-color: ${e=>{let{theme:t}=e;return t.colors.secondaryary}};
  }
`,ur=He.d.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`,br=He.d.p`
  margin: 0;
  font-size: 12px;
`,pr=He.d.button`
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  background: none;
  border: none;
  cursor: pointer;
  
  & svg {
    width: 32px;
    height: 32px;
  }

  &:hover{
    filter: brightness(1.3);
  }

  &:active{
    filter: brightness(1.5);
  }

  ${e=>{let{disabled:t}=e;return t&&He.c`
    color: ${e=>{let{theme:t}=e;return t.colors.disabled}};

    &:hover,
    &:active {
      filter: unset;
      cursor: unset;
    }
  `}} 
`;var mr;function hr(){return hr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},hr.apply(null,arguments)}function jr(e,t){let{title:r,titleId:i,...a}=e;return n.createElement("svg",hr({fill:"currentColor",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"122.883px",height:"122.882px",viewBox:"0 0 122.883 122.882",enableBackground:"new 0 0 122.883 122.882",xmlSpace:"preserve",ref:t,"aria-labelledby":i},a),r?n.createElement("title",{id:i},r):null,mr||(mr=n.createElement("g",null,n.createElement("path",{d:"M61.441,0L61.441,0l0.001,0.018c16.974,0,32.335,6.872,43.443,17.98s17.98,26.467,17.98,43.441h0.018v0.002l0,0h-0.018 c0,16.976-6.873,32.335-17.98,43.443c-11.109,11.107-26.467,17.979-43.442,17.979v0.018h-0.002l0,0v-0.018 c-16.975,0-32.335-6.872-43.443-17.98C6.89,93.775,0.018,78.417,0.018,61.442H0v-0.001V61.44h0.018 c0-16.975,6.872-32.334,17.98-43.443C29.106,6.89,44.465,0.018,61.44,0.018L61.441,0L61.441,0L61.441,0z M71.701,42.48 c1.908-1.962,1.863-5.101-0.098-7.009c-1.963-1.909-5.102-1.865-7.01,0.097L42.755,58.088l3.553,3.456l-3.568-3.46 c-1.911,1.971-1.863,5.118,0.108,7.029c0.058,0.056,0.116,0.109,0.175,0.162l21.571,22.057c1.908,1.962,5.047,2.006,7.01,0.097 c1.961-1.908,2.006-5.047,0.098-7.01L53.227,61.529L71.701,42.48L71.701,42.48z"}))))}const xr=n.forwardRef(jr);var gr;r.p;function Or(){return Or=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Or.apply(null,arguments)}function yr(e,t){let{title:r,titleId:i,...a}=e;return n.createElement("svg",Or({fill:"currentColor",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 122.88 122.88",style:{enableBackground:"new 0 0 122.88 122.88"},xmlSpace:"preserve",ref:t,"aria-labelledby":i},a),r?n.createElement("title",{id:i},r):null,gr||(gr=n.createElement("g",null,n.createElement("path",{d:"M84.93,4.66C77.69,1.66,69.75,0,61.44,0C44.48,0,29.11,6.88,18,18C12.34,23.65,7.77,30.42,4.66,37.95 C1.66,45.19,0,53.13,0,61.44c0,16.96,6.88,32.33,18,43.44c5.66,5.66,12.43,10.22,19.95,13.34c7.24,3,15.18,4.66,23.49,4.66 c8.31,0,16.25-1.66,23.49-4.66c7.53-3.12,14.29-7.68,19.95-13.34c5.66-5.66,10.22-12.43,13.34-19.95c3-7.24,4.66-15.18,4.66-23.49 c0-8.31-1.66-16.25-4.66-23.49c-3.12-7.53-7.68-14.29-13.34-19.95C99.22,12.34,92.46,7.77,84.93,4.66L84.93,4.66z M72.88,47.13 c2.48-2.52,2.45-6.58-0.08-9.05s-6.58-2.45-9.05,0.08L45.08,57.13c-2.45,2.5-2.45,6.49,0,8.98l18.32,18.62 c2.48,2.52,6.53,2.55,9.05,0.08c2.52-2.48,2.55-6.53,0.08-9.05l-13.9-14.13L72.88,47.13L72.88,47.13z M80.02,16.55 c5.93,2.46,11.28,6.07,15.76,10.55c4.48,4.48,8.09,9.83,10.55,15.76c2.37,5.71,3.67,11.99,3.67,18.58c0,6.59-1.31,12.86-3.67,18.58 c-2.46,5.93-6.07,11.28-10.55,15.76c-4.48,4.48-9.83,8.09-15.76,10.55C74.3,108.69,68.03,110,61.44,110s-12.86-1.31-18.58-3.67 c-5.93-2.46-11.28-6.07-15.76-10.55c-4.48-4.48-8.09-9.82-10.55-15.76c-2.37-5.71-3.67-11.99-3.67-18.58 c0-6.59,1.31-12.86,3.67-18.58c2.46-5.93,6.07-11.28,10.55-15.76c4.48-4.48,9.83-8.09,15.76-10.55c5.71-2.37,11.99-3.67,18.58-3.67 C68.03,12.88,74.3,14.19,80.02,16.55L80.02,16.55z"}))))}const fr=n.forwardRef(yr);var wr;r.p;function vr(){return vr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},vr.apply(null,arguments)}function kr(e,t){let{title:r,titleId:i,...a}=e;return n.createElement("svg",vr({fill:"currentColor",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 122.88 122.88",style:{enableBackground:"new 0 0 122.88 122.88"},xmlSpace:"preserve",ref:t,"aria-labelledby":i},a),r?n.createElement("title",{id:i},r):null,wr||(wr=n.createElement("g",null,n.createElement("path",{d:"M37.95,4.66C45.19,1.66,53.13,0,61.44,0c16.96,0,32.33,6.88,43.44,18c5.66,5.66,10.22,12.43,13.34,19.95 c3,7.24,4.66,15.18,4.66,23.49c0,16.96-6.88,32.33-18,43.44c-5.66,5.66-12.43,10.22-19.95,13.34c-7.24,3-15.18,4.66-23.49,4.66 c-8.31,0-16.25-1.66-23.49-4.66c-7.53-3.12-14.29-7.68-19.95-13.34C12.34,99.22,7.77,92.46,4.66,84.93C1.66,77.69,0,69.75,0,61.44 c0-8.31,1.66-16.25,4.66-23.49C7.77,30.42,12.34,23.66,18,18C23.65,12.34,30.42,7.77,37.95,4.66L37.95,4.66z M50,47.13 c-2.48-2.52-2.45-6.58,0.08-9.05c2.52-2.48,6.58-2.45,9.05,0.08L77.8,57.13c2.45,2.5,2.45,6.49,0,8.98L59.49,84.72 c-2.48,2.52-6.53,2.55-9.05,0.08c-2.52-2.48-2.55-6.53-0.08-9.05l13.9-14.13L50,47.13L50,47.13z M42.86,16.55 c-5.93,2.46-11.28,6.07-15.76,10.55c-4.48,4.48-8.09,9.83-10.55,15.76c-2.37,5.71-3.67,11.99-3.67,18.58 c0,6.59,1.31,12.86,3.67,18.58c2.46,5.93,6.07,11.28,10.55,15.76c4.48,4.48,9.83,8.09,15.76,10.55c5.72,2.37,11.99,3.67,18.58,3.67 c6.59,0,12.86-1.31,18.58-3.67c5.93-2.46,11.28-6.07,15.76-10.55c4.48-4.48,8.09-9.82,10.55-15.76c2.37-5.71,3.67-11.99,3.67-18.58 c0-6.59-1.31-12.86-3.67-18.58c-2.46-5.93-6.07-11.28-10.55-15.76c-4.48-4.48-9.83-8.09-15.76-10.55 c-5.71-2.37-11.99-3.67-18.58-3.67S48.58,14.19,42.86,16.55L42.86,16.55z"}))))}const Ar=n.forwardRef(kr);var $r;r.p;function zr(){return zr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},zr.apply(null,arguments)}function Cr(e,t){let{title:r,titleId:i,...a}=e;return n.createElement("svg",zr({fill:"currentColor",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"122.88px",height:"122.88px",viewBox:"0 0 122.88 122.88",enableBackground:"new 0 0 122.88 122.88",xmlSpace:"preserve",ref:t,"aria-labelledby":i},a),r?n.createElement("title",{id:i},r):null,$r||($r=n.createElement("g",null,n.createElement("path",{d:"M61.439,0L61.439,0v0.016c-16.976,0-32.335,6.874-43.443,17.981S0.016,44.464,0.016,61.438H0v0.002l0,0h0.016 c0,16.978,6.874,32.336,17.981,43.444c11.107,11.106,26.467,17.98,43.441,17.98v0.016h0.002l0,0v-0.016 c16.977,0,32.336-6.874,43.443-17.98c11.107-11.108,17.981-26.467,17.981-43.441h0.016v-0.003l0,0h-0.016 c0-16.976-6.874-32.335-17.981-43.442S78.416,0.016,61.442,0.016V0H61.439L61.439,0z M51.181,42.479 c-1.909-1.964-1.864-5.1,0.098-7.01c1.961-1.909,5.1-1.866,7.009,0.098l21.838,22.519l-3.554,3.456l3.569-3.458 c1.91,1.971,1.862,5.116-0.108,7.027c-0.057,0.057-0.115,0.109-0.175,0.161L58.288,87.329c-1.909,1.963-5.048,2.007-7.009,0.097 c-1.962-1.907-2.007-5.045-0.098-7.009l18.473-18.889L51.181,42.479L51.181,42.479z"}))))}const Sr=n.forwardRef(Cr);r.p;var Rr=e=>{let{numberOfResults:t}=e;const r=Ct(Rt)||1,i=St(),a=Math.ceil(t/10);return Object(n.useEffect)((()=>{r>a&&i({key:Rt})}),[i,a,r]),Object(ht.jsxs)(ur,{children:[Object(ht.jsx)(pr,{disabled:r<2,onClick:()=>i({key:Rt}),children:Object(ht.jsx)(xr,{})}),Object(ht.jsx)(pr,{disabled:r<2,onClick:()=>i({key:Rt,value:2===+r?null:r-1}),children:Object(ht.jsx)(fr,{})}),Object(ht.jsxs)(br,{children:["Strona ",Object(ht.jsx)("strong",{children:r})," z ",Object(ht.jsx)("strong",{children:a})]}),Object(ht.jsx)(pr,{disabled:r>a-1,onClick:()=>i({key:Rt,value:r>a-1?+a:+r+1}),children:Object(ht.jsx)(Ar,{})}),Object(ht.jsx)(pr,{disabled:r>a-1,onClick:()=>i({key:Rt,value:+a}),children:Object(ht.jsx)(Sr,{})})]})};const Er=Object(He.d)(cr)`
  margin-top: 24px;
`,Mr=He.d.img`
  width: 64px;
  text-align: center;

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px){
    width: 48px;
  }
`,Lr=Object(He.d)(lr)`
  padding: 8px;
  text-align: center;

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px){
    padding: 4px;
  }
`,Tr=He.d.img`
  height: 24px;
  filter: invert(100%);
`,Br=(Object(He.d)(Xe.b)`
  text-decoration: none;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};

  &:hover{
    text-decoration: none;
  }
`,He.d.p`
  margin: 0px;
  
  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px){
    display: none;
  }
`),Gr=He.d.p`
  margin: 0px;
  
  @media (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px){
    display: none;
  }
`,Dr=Object(He.d)(dr)`
  cursor: pointer;
`;var Fr=r.p+"static/media/firstPlayer.04d77bfa.svg",Ir=r.p+"static/media/numberOfPlayers.65b0bd8e.svg",Nr=r.p+"static/media/date.41853813.svg",Qr=r.p+"static/media/hourglass.47dd2316.svg";var Ur=()=>{const{results:e,numberOfResults:t,loading:r}=Object(s.c)(V),i=Ct(Rt)||1,a=Ct(Et),c=Object(s.b)(),l=Object(We.g)(),o=[{icon:Fr,description:"Pierwszy gracz"},{icon:Ir,description:"Liczba graczy"},{icon:Nr,description:"Data wyniku"},{icon:Qr,description:"Czas rozgrywki"}];return Object(n.useEffect)((()=>{c(N({page:i,selectedGameId:a}))}),[c,a,i]),Object(ht.jsx)(Er,{children:r?Object(ht.jsx)(Dt,{message:"Trwa \u0142adowanie danych, prosz\u0119 czeka\u0107\u2026"}):Object(ht.jsxs)(ht.Fragment,{children:[Object(ht.jsxs)(sr,{children:[Object(ht.jsx)("thead",{children:Object(ht.jsxs)(dr,{children:[Object(ht.jsx)(or,{}),Object(ht.jsx)(or,{children:"Nazwa gry"}),o.map((e=>Object(ht.jsxs)(or,{children:[Object(ht.jsx)(Tr,{src:e.icon,"data-tip":e.description}),Object(ht.jsx)(ar.a,{place:"top",type:"info",effect:"solid"})]},e.description)))]})}),Object(ht.jsx)("tbody",{children:e.map(((e,t)=>Object(ht.jsxs)(Dr,{onClick:()=>l.push(et({id:e._id})),children:[Object(ht.jsx)(Lr,{children:Object(ht.jsx)(Mr,{src:e.game.thumbnailUrl,alt:""})}),Object(ht.jsx)(lr,{children:e.game.name}),Object(ht.jsx)(lr,{children:e.scores.find(((e,t)=>0===t)).user.name}),Object(ht.jsx)(lr,{children:e.scores.length}),Object(ht.jsxs)(lr,{children:[Object(ht.jsx)(Br,{children:At(e.date)}),Object(ht.jsx)(Gr,{children:At(e.date,"short")})]}),Object(ht.jsx)(lr,{children:e.playingTime?`${e.playingTime} min.`:"-"})]},e._id)))})]}),t>10&&Object(ht.jsx)(Rr,{numberOfResults:t})]})})},Pr=He.d.h1`
  font-size: 32px;
  margin: 24px 0px 14px;
  
  @media(max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px){
    font-size: 24px;
    margin: 12px 0px 2px;
  }
`;var Vr=()=>Object(ht.jsxs)(ht.Fragment,{children:[Object(ht.jsx)(Pr,{children:"Historia wynik\xf3w"}),Object(ht.jsx)(Nt,{firstOption:"Wpisz nazw\u0119 gry"}),Object(ht.jsx)(Ur,{})]}),_r=He.d.ul`
  list-style-type: none;
  padding: 10px 20px;
`;const Jr=He.d.li`
  padding: 10px 0px;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  text-decoration: none;
  display: block;
  cursor: pointer;

  &:hover{
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
  }
`;var Xr=He.d.a`
  display: inline;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};

  &:hover {
    filter: brightness(130%);
    border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.primary}};
  }

  &:active {
    filter: brightness(150%);
  }
`;var Wr=()=>{const e=Object(s.c)(L),t=Object(s.b)(),r=Ct("query")||"";return Object(n.useEffect)((()=>{r.length>2&&t(k(r))}),[t,r]),Object(ht.jsxs)(ht.Fragment,{children:[Object(ht.jsx)(_r,{children:e&&e.map((e=>Object(ht.jsxs)(Jr,{as:Xe.b,to:Ze({id:e.id}),children:[Object(ht.jsx)("strong",{children:e.name})," (",e.yearPublished,")"]},Object(l.c)())))}),e.length>0&&Object(ht.jsxs)("p",{children:["Tytu\u0142y wyszukiwanych gier pochodz\u0105 z serwisu"," ",Object(ht.jsx)(Xr,{target:"_blank",rel:"noopener noreferrer",href:"https://boardgamegeek.com/",children:"BoardGameGeek"}),"."]})]})};const Hr=He.d.label`
  padding: 10px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.primary}}; 
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  display: flex;
  align-items: center; 
  width: 100%;
`,Kr=He.d.img`
  margin-right: 8px;
  width: 24px;
  height: 24px;
  filter: invert(80%);
`,Yr=He.d.input`
  padding: 12px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.primary}}; 
  color: ${e=>{let{theme:t}=e;return t.colors.brightText}}; 
  border: none;
  outline: none;
  
  &::placeholder {
    color: ${e=>{let{theme:t}=e;return t.colors.brightText}}; 
  }
`;var Zr=r.p+"static/media/search.dcc917b4.svg";var qr=e=>{let{placeholder:t}=e;const r=St(),n=Ct("query")||"";return Object(ht.jsxs)(Hr,{children:[Object(ht.jsx)(Kr,{src:Zr,alt:""}),Object(ht.jsx)(Yr,{value:n,onChange:e=>{let{target:t}=e;r({key:"query",value:t.value})},placeholder:t})]})};var en=()=>Object(ht.jsxs)(ht.Fragment,{children:[Object(ht.jsx)(qr,{placeholder:"Wpisz nazw\u0119 gry\u2026"}),Object(ht.jsx)(Wr,{})]}),tn=r.p+"static/media/meeple.cc451552.svg",rn=He.d.div`
  box-shadow: 0px 4px 12px ${e=>{let{theme:t}=e;return t.colors.primary}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.disabled}};
  padding: 24px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 24px;

  @media(max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px) {
    grid-gap: 12px;
  }
`;const nn=Object(He.d)(rn)`
  text-decoration: none;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  transition: 0.3s;
  
  &:hover {
    transform: scale(1.03);
    opacity: 0.9;
    text-decoration: none;
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
  }
  
  grid-template-columns: 1fr;
  text-align: center;
  justify-items: center;

  @media(max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px){
    padding: 16px;
    grid-gap: 8px;
    ${e=>{let{small:t}=e;return!t&&He.c`
     grid-template-columns: 1fr 2fr;
    `}}
  }
`,an=He.d.div`
  padding-top: calc(100% * 100 / 100);
  width: 100%;
  background-image: url("${e=>{let{url:t}=e;return t}}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`,cn=He.d.h2`
  margin: 0;
  font-size: 24px;
  
  @media(max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px){
    font-size: 16px;
    font-weight: 700;
  }
`,sn=He.d.p`
  margin: 0px;
`,ln=He.d.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
`,on=He.d.p`
  font-size: 14px;
  text-transform: none;
  background-color: ${e=>{let{theme:t,color:r}=e;return t.colors[r]}};
  color: black;
  padding: 10px;
  margin: 0;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;var dn=e=>{let{lastResultDate:t,gameId:r}=e;const n=Object(We.g)(),i=(e=>{if(!e)return 0;const t=new Date,r=new Date(e),n=Math.round((t.getTime()-r.getTime())/864e5);return 0===n?.5:n})(t);let a;switch(i){case 0:a="Brak wpisanych wynik\xf3w!";break;case.5:a="Ostatni wynik: dzisiaj";break;case 1:a=`Ostatni wynik:  ${i}. dzie\u0144 temu`;break;default:a=`Ostatni wynik:  ${i}. dni temu`}return Object(ht.jsx)(on,{onClick:()=>n.push(Ke({gameId:r})),color:function(e){switch(!0){case e<21:return"green";case e<42:return"secondary";default:return"red"}}(i),children:a})};var un=e=>{let{game:t,withoutLastResult:r,small:n}=e;return t?Object(ht.jsxs)(nn,{as:Xe.b,to:qe({id:t._id}),small:n?1:0,children:[Object(ht.jsx)(an,{url:t.imgUrl||tn}),Object(ht.jsxs)(ln,{children:[Object(ht.jsx)(cn,{children:t.name}),!r&&Object(ht.jsx)(dn,{lastResultDate:t.lastResultDate,gameId:t._id}),t.numberOfResults&&Object(ht.jsxs)(sn,{children:["Liczba wynik\xf3w:"," ",Object(ht.jsx)("strong",{children:t.numberOfResults})]}),t.bggRank&&Object(ht.jsxs)(sn,{children:["Ranking BGG:"," ",Object(ht.jsx)("strong",{children:t.bggRank})]}),t.bggRank&&Object(ht.jsxs)(sn,{children:["Poziom trudno\u015bci:"," ",Object(ht.jsx)("strong",{children:parseFloat(t.weight).toFixed(2)})]})]})]}):Object(ht.jsx)(ht.Fragment,{})};const bn=He.d.div`
  display: grid;
  grid-template-columns: repeat( ${e=>{let{numberOfTiles:t}=e;return t<2?2:"auto-fit"}}, minmax(250px, 1fr));
  grid-gap: 20px;
  justify-content: space-between; 

  @media(max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px) {
    grid-template-columns: 1fr;
  }
`,pn=He.d.div`
  display: grid;
  grid-template-columns: repeat(5,1fr);
  grid-gap: 10px;

  @media(max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileVertical}}px){
    grid-template-columns: 1fr;
  }
`,mn=Object(He.d)(Vt)`
  display: flex;
  align-items: center;
  justify-content: center;
  translate: 0.3s 0.3s;

  ${e=>{let{active:t}=e;return!t&&He.c`
    outline: none;
    background-color: ${e=>{let{theme:t}=e;return t.colors.secondary}};
`}};

  @media(max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileVertical}}px){
    font-size: 13px;
    padding: 8px;
  }
`;var hn=He.d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,jn=Object(He.d)(Xe.b)`
  background-color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  padding: 16px 32px;
  font-size: 14px;
  text-align: center;
  color: ${e=>{let{theme:t}=e;return t.colors.brightText}};
  display: block;
  text-transform: uppercase;
  
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.brightText}};
    text-decoration: none;
    filter: brightness(110%);
  }
`,xn=Object(He.d)(jn)`
  margin: 24px 0 14px;
  display: flex;
  align-items: center;

  @media(max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileVertical}}px){
    font-size: 13px;
    margin: 12px 0 2px;
  }
`;var gn=function(){var e;const[t,r]=Object(n.useState)("numberOfResults"),[i,a]=Object(n.useState)("desc"),{isAuthenticated:c}=Object(s.c)(p),l=Object(s.b)(),o=Object(s.c)(E),d=Object(s.c)(M),u=null===(e=Ct("query"))||void 0===e?void 0:e.toUpperCase(),b=[...[...o].filter((e=>u?e.name.toUpperCase().includes(u):1))].sort(zt(t,i));return Object(n.useEffect)((()=>{l(f())}),[l]),d?Object(ht.jsx)(Dt,{message:"Trwa \u0142adowanie danych, prosz\u0119 czeka\u0107\u2026"}):Object(ht.jsxs)(ht.Fragment,{children:[Object(ht.jsxs)(hn,{children:[Object(ht.jsx)(Pr,{children:"Lista gier"}),c&&Object(ht.jsx)(xn,{to:"/gry/szukaj",children:"Dodaj now\u0105 gr\u0119"})]}),Object(ht.jsx)(qr,{placeholder:"Wpisz nazw\u0119 gry\u2026"}),Object(ht.jsx)(pn,{children:[{id:"name",label:"Nazwa"},{id:"lastResultDate",label:"Ostatni wynik"},{id:"numberOfResults",label:"Liczba wynik\xf3w"},{id:"bggRank",label:"Ranking BGG"},{id:"weight",label:"Poziom trudno\u015bci"}].map((e=>Object(ht.jsx)(mn,{active:e.id.localeCompare(t),onClick:()=>{return n=e.id,r(n),void(t===n&&a("desc"===i?"asc":"desc"));var n},children:e.label},e.id)))}),Object(ht.jsx)(bn,{numberOfTiles:b.length,children:null===b||void 0===b?void 0:b.map(((e,t)=>Object(ht.jsx)(un,{game:e},t)))})]})};const On=He.d.section`
  padding: 10px;
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.primary}};
  box-shadow: 5px 5px 5px 0px ${e=>{let{theme:t}=e;return t.colors.emperor}};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  max-width: 100%;

  @media(min-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px){
    padding: 30px;
  }
`,yn=He.d.h2`
  font-size: 30px;
  text-align: center;
`;var fn=e=>{let{sectionHeader:t,children:r}=e;return Object(ht.jsxs)(On,{children:[t&&Object(ht.jsx)(yn,{children:t}),r]})};const wn=He.d.img`
  width: 20vw;
  max-width: 300px;
  object-fit: contain;

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px) {
    width: 100%;
  };
`,vn=He.d.img`
  width: 100px;

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px) {
    width: 50px;
  };
`,kn=He.d.div`
  width: 300px;
  height: 100%;
  background-color: ${e=>{let{theme:t}=e;return t.colors.imageBackground}};
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px) {
    width: 100px;
  };
`,An=(Object(He.d)(fn)`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 12px;
`,He.d.ul`
  margin: 0;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-left: -8px;
  margin-bottom: 16px;

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px) {
    margin-bottom: 16px;
  };
`),$n=He.d.li`
  background-color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  color: ${e=>{let{theme:t}=e;return t.colors.brightText}};
  font-size: 14px;
  line-height: 140%;
  
  margin-left: 8px;
  margin-bottom: 8px;
  padding: 8px 16px;

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px) {
    padding: 4px 8px;
    font-size: 10px;
    margin-bottom: 8px;
  };
`,zn=He.d.h1`
  margin-top: 0;
  font-size: 32px;
  font-weight: 700;

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px) {
    font-size: 18px;
  };
`,Cn=He.d.h2`
  font-size: 24px;
  font-weight: 700;

  @media (max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px) {
    font-size: 16px;
  };
`,Sn=Object(He.d)(rn)`
  grid-template-columns: auto 1fr;
  grid-gap: 32px;

  @media(max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileVertical}}px){
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`,Rn=He.d.dl`
  font-size: 24px;
  margin: 0 0 8px;

  @media(max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px) {
    font-size: 16px;
  }
`,En=He.d.dt`
  margin-right: 10px;
  display: inline;
`,Mn=He.d.dd`
  margin: 0;
  display: inline;
  font-weight: 700;
`;var Ln=e=>{let{metaData:t=[]}=e;return Object(ht.jsx)("div",{children:t.map((e=>{let{key:t,value:r}=e;return r&&Object(ht.jsxs)(Rn,{DescriptionList:!0,children:[t&&Object(ht.jsxs)(En,{children:[t,":"]}),Object(ht.jsx)(Mn,{children:r})]},t)}))})};var Tn=e=>{let{gameId:t}=e;const r=Object(s.b)(),i=Object(s.c)(q),a=[...[...Object(s.c)(Z)].filter((e=>e.numberOfResults>0))].sort(zt("numberOfResults","desc"));return Object(n.useEffect)((()=>{r(W(t))}),[]),i?Object(ht.jsx)(Dt,{message:"Trwa \u0142adowanie danych, prosz\u0119 czeka\u0107\u2026"}):Object(ht.jsx)(cr,{children:Object(ht.jsxs)(sr,{className:"table",responsive:!0,striped:!0,bordered:!0,hover:!0,children:[Object(ht.jsx)("thead",{children:Object(ht.jsxs)(dr,{children:[Object(ht.jsx)(or,{children:"#"}),Object(ht.jsx)(or,{children:"Nazwa"}),Object(ht.jsx)(or,{children:"Liczba wynik\xf3w"})]})}),Object(ht.jsx)("tbody",{children:a!==[]?a.map(((e,t)=>Object(ht.jsxs)(dr,{children:[Object(ht.jsx)(or,{className:"tableHeader",children:t+1}),Object(ht.jsx)(lr,{children:e.name}),Object(ht.jsx)(lr,{children:e.numberOfResults})]},t))):Object(ht.jsx)(ht.Fragment,{})})]})})};var Bn=()=>{const{id:e}=Object(We.i)(),t=Object(s.c)(B),r=Object(s.c)(M),i=Object(s.b)();Object(n.useEffect)((()=>{i(C(e))}),[i,e]);const a=[{key:"Link do BGG",value:Object(ht.jsx)(Xr,{target:"_blank",rel:"noopener noreferrer",href:`https://boardgamegeek.com/boardgame/${null===t||void 0===t?void 0:t.bggId}`,children:null===t||void 0===t?void 0:t.name})},{key:"Liczba wynik\xf3w",value:null===t||void 0===t?void 0:t.numberOfResults},{key:"Ranking BGG",value:null===t||void 0===t?void 0:t.bggRank},{key:"Poziom trudno\u015bci",value:parseFloat(null===t||void 0===t?void 0:t.weight).toFixed(2)}];return!r&&t?Object(ht.jsxs)(ht.Fragment,{children:[Object(ht.jsxs)(Sn,{children:[t.imgUrl?Object(ht.jsx)(wn,{src:t.imgUrl,alt:"game"}):Object(ht.jsx)(kn,{children:Object(ht.jsx)(vn,{src:tn,alt:"meeple"})}),Object(ht.jsxs)("div",{children:[Object(ht.jsx)(zn,{children:t.name}),Object(ht.jsx)(Ln,{metaData:a}),t.pointFields.length>0&&Object(ht.jsxs)(ht.Fragment,{children:[Object(ht.jsx)(Cn,{children:"Kategorie punkt\xf3w:"}),Object(ht.jsx)(An,{children:t.pointFields.map((e=>Object(ht.jsx)($n,{children:e},e)))})]}),Object(ht.jsx)(dn,{lastResultDate:t.lastResultDate,gameId:t._id})]})]}),Object(ht.jsxs)(Cn,{children:["Statystyki wynik\xf3w ",Object(ht.jsx)("q",{children:t.name})]}),Object(ht.jsx)(Tn,{gameId:t._id})]}):Object(ht.jsx)(Dt,{})};const Gn=He.d.img`
  width: 100%;

  @media(max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileVertical}}px){
    max-height: 300px;
    object-fit: contain;
  }
`,Dn=He.d.div`
  display: grid;
  grid-gap: 20px;
  margin-bottom: 10px;
  grid-template-columns: 1fr 1fr;
`,Fn=He.d.div`
  display: flex;
  flex-direction: column;
`,In=Object(He.d)(rn)`
  grid-template-columns: 1fr 2fr;

  @media(max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileVertical}}px){
    grid-template-columns: 1fr; 
  }
`,Nn=He.d.p`
  padding: 10px;
  margin-top: 5px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.red}};
  color: ${e=>{let{theme:t}=e;return t.colors.brightText}};
`,Qn=Object(He.d)(Pr)`
  margin: 0;
`,Un=He.d.label`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 12px;
`,Pn=He.d.span`
  font-size: 16px;
  font-weight: 600;
  max-width: 150px;
  width: 100%;
`;var Vn=e=>{let{children:t,labelText:r}=e;return Object(ht.jsxs)(Un,{children:[Object(ht.jsxs)(Pn,{children:[r,": "]}),t]})};var _n=()=>{const{id:e}=Object(We.i)(),t=Object(s.c)(T),r=Object(s.c)(M),i=Object(s.b)(),[a,c]=Object(n.useState)([]),[o,d]=Object(n.useState)(null===t||void 0===t?void 0:t.name[0]),[u,b]=Object(n.useState)(!1),[p,m]=Object(n.useState)(null),h=Object(We.g)();Object(n.useEffect)((()=>{e&&i($(e))}),[i,e]);const j=Object(ht.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:`https://boardgamegeek.com/boardgame/${null===t||void 0===t?void 0:t.id}`,children:null===t||void 0===t?void 0:t.name[0]}),x=[{key:"Liczba graczy",value:`${null===t||void 0===t?void 0:t.minPlayers} - ${null===t||void 0===t?void 0:t.maxPlayers}`},{key:"Link do opisu gry na BGG",value:j},{key:"",value:'Je\u015bli chcesz doda\u0107 kategorie punkt\xf3w kliknij przycisk "Dodaj kategori\u0119", a nast\u0119pnie wpisz nazw\u0119 kategorii w odpowiednim polu formularza.'}];return Object(ht.jsx)("div",{children:r||!t?Object(ht.jsx)(Dt,{}):Object(ht.jsxs)(In,{children:[Object(ht.jsx)(Gn,{src:t.img,alt:"game-image"}),Object(ht.jsxs)(Fn,{children:[Object(ht.jsx)(Qn,{children:t.name[0]}),Object(ht.jsx)(Ln,{metaData:x}),Object(ht.jsxs)(Dn,{children:[Object(ht.jsx)(Vt,{onClick:()=>{c([...a,""])},children:"Dodaj kategori\u0119"}),Object(ht.jsx)(Vt,{disabled:0===a.length,onClick:()=>{c(a.filter(((e,t)=>t!==a.length-1)))},children:"Usu\u0144 kategori\u0119"})]}),Object(ht.jsxs)("form",{onSubmit:async function(r){r.preventDefault();const{minPlayers:n,maxPlayers:i,img:c,thumbnail:s}=t,l={name:o||(null===t||void 0===t?void 0:t.name[0]),minPlayers:n,maxPlayers:i,pointFields:a,bggId:e,imgUrl:c,thumbnailUrl:s};try{b(!0);const e=await(async e=>{const t={"Content-Type":"application/json",Authorization:me};return await de.a.post(`${he}/api/games`,e,{headers:t})})(l);if(b(!1),201===e.status)h.push("/gry");else{m("Nie uda\u0142o si\u0119 doda\u0107 gry!\n        Sprawd\u017a, czy nie doda\u0142e\u015b jej wcze\u015bniej\u2026")}return e.data}catch(d){return d}},children:[a.map(((e,t)=>Object(ht.jsx)(Vn,{labelText:`${t+1}. kategoria`,children:Object(ht.jsx)(Qt,{type:"text",placeholder:`Nazwa ${t+1}. kategorii...`,value:e,onChange:e=>c(a.map(((r,n)=>n===t?e.target.value:r)))})},t))),Object(ht.jsx)(Vn,{labelText:"Nazwa gry",children:Object(ht.jsx)(Ut,{required:!0,value:o,onChange:e=>{let{target:t}=e;return d(t.value)},children:t.name.map((e=>Object(ht.jsx)("option",{value:e,children:e},Object(l.c)())))})}),Object(ht.jsx)(Vt,{disabled:u,type:"submit",children:"Dodaj do listy gier"}),p&&Object(ht.jsx)(Nn,{children:p})]})]})]})})};const Jn=He.d.td`
  display: grid;
  grid-template-columns: auto 30px 30px;
  grid-gap: 10px;
  margin-right: 10px;
`,Xn=He.d.button`
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
  background-image: url("${e=>{let{url:t}=e;return t}}");
  background-repeat: no-repeat;
  transition: 0.3s;
  
  &:hover{
    transform: scale(1.1);
  }
`,Wn=Object(He.d)(Qt)`

`,Hn=He.d.img`
  width: 30px;
  height: 30px;
`;var Kn=r.p+"static/media/confirm.4b6aa430.svg",Yn=r.p+"static/media/deny.a118e9c6.svg";var Zn=e=>{let{setEditCell:t,score:r,indexk:i}=e;const[a,c]=Object(n.useState)(r),l=Object(s.c)(_),o=Object(s.b)();return Object(ht.jsxs)(Jn,{children:[Object(ht.jsx)(Wn,{type:"number",onChange:e=>(e=>{const t={...a,points:a.points.map(((t,r)=>r===i?+e.target.value:t))};c(t)})(e),value:a.points[i]||""}),Object(ht.jsx)(Xn,{onClick:()=>{const e={...l,scores:l.scores.map((e=>e._id===a._id?a:e))};o(P(e)),t(null)},children:Object(ht.jsx)(Hn,{src:Kn})}),Object(ht.jsx)(Xn,{onClick:()=>t(null),children:Object(ht.jsx)(Hn,{src:Yn})})]})};const qn=Object(He.d)(lr)`
  font-size: 20px;
  font-weight: 700;
  background-color: ${e=>{let{theme:t}=e;return t.colors.secondary}};

  @media(max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px) {
    font-size: 14px;
  }
`,ei=Object(He.d)(sr)`
  /* @media(min-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px ){
    width: auto;
  }; */
`;var ti=e=>{let{result:t,isUserResultAuthor:r}=e;const[i,a]=Object(n.useState)(null),c=(e,t)=>{r()&&a({index:e,indexk:t})};return Object(ht.jsx)(cr,{children:Object(ht.jsxs)(ei,{children:[Object(ht.jsx)("thead",{children:Object(ht.jsxs)(dr,{children:[Object(ht.jsx)(or,{children:"Kategoria"}),t.scores.map(((e,t)=>Object(ht.jsx)(or,{children:e.user.name},t)))]})}),Object(ht.jsxs)("tbody",{children:[t.game.pointFields.map(((e,r)=>Object(ht.jsxs)(dr,{children:[Object(ht.jsx)(or,{children:e}),t.scores.map(((e,t)=>(null===i||void 0===i?void 0:i.index)===t&&(null===i||void 0===i?void 0:i.indexk)===r?Object(ht.jsx)(Zn,{setEditCell:a,score:e,indexk:r},t):Object(ht.jsx)(lr,{onClick:()=>c(t,r),children:e.points[r]||"0"},t)))]},r))),Object(ht.jsxs)(dr,{children:[Object(ht.jsx)(qn,{children:"Wynik"}),t.scores.map(((e,r)=>0===t.game.pointFields.length?(null===i||void 0===i?void 0:i.index)===r&&0===(null===i||void 0===i?void 0:i.indexk)?Object(ht.jsx)(Zn,{setEditCell:a,score:e,indexk:0},r):Object(ht.jsx)(qn,{onClick:()=>c(r,0),children:e.points[0]},r):Object(ht.jsx)(qn,{children:Object.values(e.points).reduce(((e,t)=>e+t),0)},r)))]})]})]})})};const ri=He.d.div`
  width: 100%;
  margin-top: 64px;
  padding: 40px;
  display: grid;
  grid-template-areas: 
    "table table"
    "game details";
  grid-gap: 40px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.sectionBackground}};
  box-shadow: ${e=>{let{theme:t}=e;return t.colors.sectionBackground}} 0px 4px 12px;
  
  @media(max-width: ${e=>{let{theme:t}=e;return t.breakpoints.mobileMax}}px) {
    margin-top: 24px;
    padding: 20px;
    grid-gap: 12px;
    grid-template-columns: 1fr;
    grid-template-areas: 
      "table"
      "details"
      "game";
  };
`,ni=He.d.div`
  grid-area: game;
`,ii=He.d.div`
  grid-area: table;
`,ai=He.d.div`
  grid-area: details;
`,ci=Object(He.d)(xn)`
  justify-content: center;
  padding: 16px;
`;Object(He.d)(Pr)`
  grid-column: span 2;
`;var si=()=>{const{id:e}=Object(We.i)(),t=Object(s.c)(_),{isAuthenticated:r}=Object(s.c)(p),i=Object(s.b)(),a=t&&$t(t).join(" "),c=t&&t.scores.find(((e,t)=>0===t)).user.name;Object(n.useEffect)((()=>{i(F({id:e}))}),[i,e]);const l=[{key:"Zwyci\u0119zc"+(-1!==(null===a||void 0===a?void 0:a.indexOf(" "))?"y":"a"),value:a},{key:"Gracz rozpoczynaj\u0105cy",value:c},{key:"Czas rozgrywki",value:null!==t&&void 0!==t&&t.playingTime?`${t.playingTime} min.`:void 0}];return t&&Object(ht.jsx)(ht.Fragment,{children:Object(ht.jsxs)(ri,{children:[Object(ht.jsxs)(ii,{children:[Object(ht.jsxs)(Pr,{children:["Wynik dodany ",At(null===t||void 0===t?void 0:t.date,"short")]}),Object(ht.jsx)(ti,{isUserResultAuthor:()=>r&&t.author===JSON.parse(localStorage.user).id,result:t})]}),Object(ht.jsxs)(ai,{children:[Object(ht.jsx)(Ln,{metaData:l}),r&&Object(ht.jsx)(ci,{to:Ye({game:t.game._id}),children:"Rewan\u017c"})]}),Object(ht.jsx)(ni,{children:Object(ht.jsx)(un,{game:t.game,withoutLastResult:!0,small:!0})})]})})};const li=He.d.form`
  max-width: 400px;
  width: 100%;
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.primary}};
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
`,oi=He.d.div`
  display: flex;
  justify-content: center;
`,di=Object(He.d)(Vt)`
  width: 100%;
`,ui=He.d.p`
  color: ${e=>{let{theme:t}=e;return t.colors.red}};
`;var bi=e=>{let{onSubmit:t,message:r,showPassword:i,buttonText:a,name:c,setName:s,password:l,setPassword:o}=e;const d=Object(n.useRef)();return Object(n.useEffect)((()=>{d.current.focus()}),[]),Object(ht.jsx)(oi,{children:Object(ht.jsxs)(li,{onSubmit:t,children:[Object(ht.jsx)(Vn,{labelText:"Login",children:Object(ht.jsx)(Qt,{type:"text",placeholder:"Podaj login",required:!0,value:c,onChange:e=>s(e.target.value),ref:d,minLength:3})}),i&&Object(ht.jsx)(Vn,{labelText:"Has\u0142o",children:Object(ht.jsx)(Qt,{type:"password",placeholder:"Podaj has\u0142o",required:!0,value:l,onChange:e=>o(e.target.value)})}),r&&Object(ht.jsx)(ui,{children:r}),Object(ht.jsx)(di,{children:a})]})})};var pi=()=>{const e=Object(s.b)(),t=Object(We.g)(),[r,i]=Object(n.useState)(""),[a,c]=Object(n.useState)(""),[l,o]=Object(n.useState)("");return Object(ht.jsx)(bi,{onSubmit:async n=>{n.preventDefault();const s={username:r,password:a};try{const r=await(async e=>(await de.a.post(`${he}/api/users/authenticate`,e)).data)(s);null!=r.token?(localStorage.setItem("user",JSON.stringify(r)),e(b()),t.push(Ke())):(o(r.message),i(""),c(""))}catch(l){return l}},message:l,name:r,setName:i,password:a,setPassword:c,showPassword:!0,buttonText:"Zaloguj"})};var mi=()=>{const{isAuthenticated:e}=Object(s.c)(p);return Object(ht.jsxs)(ht.Fragment,{children:[Object(ht.jsxs)(hn,{children:[Object(ht.jsx)(Pr,{children:"U\u017cytkownicy"}),e&&Object(ht.jsx)(xn,{to:"/nowy-uzytkownik",children:"Dodaj nowego u\u017cytkownika"})]}),Object(ht.jsx)(Tn,{})]})};var hi=()=>{const e=Object(We.g)(),[t,r]=Object(n.useState)(""),[i,a]=Object(n.useState)("");return Object(ht.jsx)(bi,{onSubmit:async t=>{t.preventDefault();const n={name:i};try{const t=await(async e=>(await de.a.post(`${he}/api/users/register`,e)).data)(n);return e.push("/uzytkownicy"),t}catch(c){return a(""),r(`U\u017cytkownik o nazwie ${i} ju\u017c istnieje.`),c}},message:t,name:i,setName:a,showPassword:!1,buttonText:"Dodaj nowego u\u017cytkownika"})};const ji={mobileVertical:575,mobileMax:767},xi="#252525",gi="#FFFFFF",Oi="#DBDBDB",yi="#CCCCCC",fi="#FF0000",wi="#FFBF00",vi="#27173A",ki="#00FF00",Ai={colors:{primary:"#2188FF",body:xi,text:gi,brightText:gi,disabled:Oi,imageBackground:yi,red:fi,secondary:wi,sectionBackground:"#313131",themeSwitcherBackground:vi,green:ki},breakpoints:ji},$i={colors:{primary:"#0366D6",body:"#FBFBFE",text:xi,brightText:gi,disabled:Oi,imageBackground:yi,red:fi,secondary:wi,sectionBackground:gi,themeSwitcherBackground:vi,green:ki},breakpoints:ji},zi=He.b`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: "Roboto", sans-serif;
    background-color: ${e=>{let{theme:t}=e;return t.colors.body}};
    overflow-y: scroll;
    padding-bottom: 100px;
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    transition: all 0.25s linear;
  }

  a {
    text-decoration: none;
  }
`;var Ci=()=>{const e=Object(s.c)(ne);return Object(ht.jsxs)(He.a,{theme:"light"===e?$i:Ai,children:[Object(ht.jsx)(zi,{}),Object(ht.jsxs)(Xe.a,{children:[Object(ht.jsx)(vt,{}),Object(ht.jsx)(ir,{children:Object(ht.jsxs)(We.d,{children:[Object(ht.jsx)(nr,{path:Ye(),component:rr}),Object(ht.jsx)(nr,{path:"/gry/szukaj",component:en}),Object(ht.jsx)(nr,{path:Ze(),component:_n}),Object(ht.jsx)(We.b,{path:et(),children:Object(ht.jsx)(si,{})}),Object(ht.jsx)(We.b,{path:Ke(),children:Object(ht.jsx)(Vr,{})}),Object(ht.jsx)(We.b,{path:qe(),children:Object(ht.jsx)(Bn,{})}),Object(ht.jsx)(We.b,{path:"/gry",children:Object(ht.jsx)(gn,{})}),Object(ht.jsx)(We.b,{path:"/logowanie",children:Object(ht.jsx)(pi,{})}),Object(ht.jsx)(We.b,{exact:!0,path:"/",children:Object(ht.jsx)(Vr,{})}),Object(ht.jsx)(We.b,{path:"/uzytkownicy",children:Object(ht.jsx)(mi,{})}),Object(ht.jsx)(We.b,{path:"/nowy-uzytkownik",children:Object(ht.jsx)(hi,{})}),Object(ht.jsx)(We.b,{path:"/",children:Object(ht.jsx)(We.a,{to:Vr()})})]})})]})]})};c.a.render(Object(ht.jsx)(s.a,{store:Je,children:Object(ht.jsx)(Ci,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()})).catch((e=>{console.error(e.message)}))}},[[159,1,2]]]);
//# sourceMappingURL=main.381e0664.chunk.js.map