(this["webpackJsonpscript-assist"]=this["webpackJsonpscript-assist"]||[]).push([[0],{204:function(e,t,n){e.exports=n(368)},210:function(e,t,n){},211:function(e,t,n){},215:function(e,t,n){},216:function(e,t,n){},217:function(e,t,n){},218:function(e,t,n){},219:function(e,t,n){},220:function(e,t,n){},221:function(e,t,n){},223:function(e,t,n){},224:function(e,t,n){},269:function(e,t,n){},368:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(6),r=n.n(i),c=(n(209),n(210),n(153)),l=n(34),s=n(50),u=n(51),m=n(59),d=n(57),h=n(405),f=n(47),E=n(176),v=n(45),g=n(177),b=n.n(g),p="sceneHeading",y="action",C="int_ext",w="time",O="location",k="summary",S="CHARECTOR",j="ACTION",T="PARANTHETICAL",N="DIALOGUE",D="SCENE_HEADING",L="TRANSITION",A="LOGLINE";function H(e,t,n){var a=n,o=e.split("-"),i=Object(v.a)(o,5),r=(i[0],i[1],i[2]),c=i[3],l=i[4];return r===p?l===k?a="Scene ".concat(c,": ").concat(t," \n"):l===C||l===O?a="".concat(a," ").concat(t):l===w&&(a="".concat(a," ").concat(t,"\n")):r===y&&(a="".concat(a).concat(t," \n")),a}var I=function(e,t){return{type:T,id:"board-".concat(t,"-paranthetical-").concat(e.parantheticals)}},B=function(e,t){return{type:L,id:"board-".concat(t,"-transition-").concat(e.transition)}},K=function(e,t){return{type:N,id:"board-".concat(t,"-dialogue-").concat(e.dialogue)}},F=function(e,t){return{type:S,id:"board-".concat(t,"-character-").concat(e.charector)}},P=function(e,t){return{type:j,id:"board-".concat(t,"-action-").concat(e.action)}},R=(n(211),n(58)),W=n(178),x=n.n(W);n(215);var _=function(e){var t=e.value,n=e.elementRef,a=Object(R.a)(e,["value","elementRef"]);return o.a.createElement(x.a,Object.assign({innerRef:n,html:"".concat(t||""),tagName:"div"},a))};n(216);var G=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;Object(s.a)(this,n),a=t.call(this,e);var o=e.id;return a.int_id="".concat(o,"-int_ext"),a.location_id="".concat(o,"-location"),a.time_id="".concat(o,"-time"),a.summary_id="".concat(o,"-summary"),a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.onKeyDownHere,t=this.int_id,n=this.location_id,a=this.time_id,i=this.summary_id,r=this.props,c=r.content,l=(r.sceneNumber,r.elementRef),s=r.onFocus,u=r.onKeyDown,m=Object(R.a)(r,["content","sceneNumber","elementRef","onFocus","onKeyDown"]);return o.a.createElement("div",null,o.a.createElement("div",{className:"scene-heading-summary-header"},o.a.createElement("div",{className:"scene-number"},"Scene summary: "),o.a.createElement(_,{elementRef:l,key:i,className:"scene-heading-summary",id:i,placeholder:"  Scene description",value:c[i],onKeyDown:u})),o.a.createElement("div",{className:"scene-heading"},o.a.createElement(_,{key:t,className:"int-ext",placeholder:"INT/EXT",id:t,onKeyUp:e,value:c[t],onFocus:s,onKeyDown:u}),o.a.createElement(_,{key:n,className:"location",placeholder:"LOCATION",id:n,onKeyUp:e,value:c[n],onFocus:s,onKeyDown:u}),o.a.createElement(_,Object.assign({key:a,className:"time",contentEditable:!0,placeholder:"DAY/NIGHT"},m,{onKeyUp:e,id:a,value:c[a],onFocus:s,onKeyDown:u}))))}}]),n}(o.a.Component),U=function(e){return"Enter"===e.key&&e.shiftKey};n(217);var M=function(e){var t=e.content,n=(e.onKeyDown,e.onContentChange),i=e.toggleElementOptions,r=Object(R.a)(e,["content","onKeyDown","onContentChange","toggleElementOptions"]),c=Object(a.useState)(t[e.id]),l=Object(v.a)(c,2),s=l[0],u=l[1];return o.a.createElement("div",{className:"action"},o.a.createElement(_,Object.assign({placeholder:"Action",value:s,onBlur:function(){n(e.id,s)},onKeyDown:function(e){U(e)&&i(),u(e.currentTarget.innerHTML)}},r)))};n(218);var Y=function(e){return o.a.createElement("div",{className:"charector"},o.a.createElement(_,Object.assign({placeholder:"Character name"},e,{value:e.content[e.id]})))};n(219);var V=function(e){return o.a.createElement("div",{className:"paranthetical"},o.a.createElement(_,Object.assign({placeholder:"describe state of charector"},e,{value:e.content[e.id]})))};n(220);var z=function(e){var t=e.content,n=(e.onKeyDown,e.onContentChange),i=e.toggleElementOptions,r=(Object(R.a)(e,["content","onKeyDown","onContentChange","toggleElementOptions"]),Object(a.useState)(t[e.id])),c=Object(v.a)(r,2),l=c[0],s=c[1];return o.a.createElement("div",{className:"dialogue"},o.a.createElement("div",{className:"dialogue-container"},o.a.createElement(_,Object.assign({placeholder:"Dialogue"},e,{value:l,onBlur:function(){n(e.id,l)},onKeyDown:function(e){U(e)&&i(),s(e.currentTarget.innerHTML)}}))))};n(221);var X=function(e){return o.a.createElement("div",{className:"transition"},o.a.createElement(_,Object.assign({className:"transition",contentEditable:!0,placeholder:"FADEIN/FADEOUT/CUTTO"},e,{value:e.content[e.id]})))},q=n(410),J=n(196);var Q=function(e){var t=e.show,n=e.handleClose,a=e.addSceneHeading,i=e.addAction,r=e.insChar,c=e.addDialogue,l=e.addParanthetical,s=e.addTransition,u=function(e){e(),n()};return o.a.createElement(J.a,{id:"elements-menu",open:t,onClose:n},o.a.createElement(q.a,{onClick:function(){return u(a)}},"Scene heading"),o.a.createElement(q.a,{onClick:function(){return u(i)}},"Action"),o.a.createElement(q.a,{onClick:function(){return u(r)}},"Character"),o.a.createElement(q.a,{onClick:function(){return u(l)}},"Paranthetical"),o.a.createElement(q.a,{onClick:function(){return u(c)}},"Dialogue"),o.a.createElement(q.a,{onClick:function(){return u(s)}},"Transition"))};var Z=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).setShow=function(e){a.setState({show:e})},a.toggleSetShow=function(){a.setShow(!a.state.show)},a.onKeyDown=function(e){var t=a.props,n=t.removeElement,o=t.id,i=t.onContentChange,r=e.currentTarget.innerText;console.log("inside set keydown before",e.currentTarget.innerHTML);var c=e.currentTarget.id,l=c.split("-"),s=Object(v.a)(l,5),u=(s[0],s[1],s[2]),m=(s[3],s[4]),d="Enter"===e.key,h="Backspace"===e.key,f=(e.key,e.shiftKey,a.props,!1);if(f)f(),e.preventDefault();else if(U(e))a.toggleSetShow(),e.preventDefault();else if(h&&!r.length)("sceneHeading"!==u||"sceneHeading"===u&&"int_ext"===m)&&(n(o),e.preventDefault());else if(!d||"character"!==u&&"paranthetical"!==u&&"sceneHeading"!==u){var E=e.key.toLowerCase();if(console.log(e.keyCode),"sceneHeading"===u){var g=String.fromCharCode(e.keyCode),b=/[a-zA-Z0-9-_ ]/.test(g);"int_ext"===m?"backspace"===E?(r="",e.preventDefault()):"INT"!==r&&"EXT"!==r||!b?"i"===E?(r="INT",e.preventDefault()):"e"===E&&(r="EXT",e.preventDefault()):e.preventDefault():"time"===m&&("backspace"===E?(r="",e.preventDefault()):"DAY"!==r&&"NIGHT"!==r||!b?"d"===E?(r="DAY",e.preventDefault()):"n"===E&&(r="NIGHT",e.preventDefault()):e.preventDefault())}else"transition"===u&&("c"===E?r="CUT TO":"fi"===r?r="FADE IN":"fo"===r&&(r="FADE OUT"));console.log("inside set keydown",r),i(c,r)}else e.preventDefault()},a.state={show:!1},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.type,a=t.id,i=this.state.show,r={onKeyDown:this.onKeyDown,onContentChange:this.onContentChange,toggleElementOptions:this.toggleSetShow},c=null;switch(n){case D:c=G;break;case j:c=M;break;case S:c=Y;break;case T:c=V;break;case N:c=z;break;case L:c=X}return o.a.createElement("div",{className:"element"},o.a.createElement(c,Object.assign({key:a},r,this.props)),o.a.createElement(Q,Object.assign({show:i},this.props,{handleClose:function(){e.setShow(!1)}})))}}]),n}(o.a.Component);n(223);var $=function(e){e.elements;var t=e.content,n=e.setElementCount,i=e.elementsCount,r=e.addBoard,c=e.elementsList,l=e.setElemetsList,s=e.currentElement,u=e.setCurrentElement,m=e.removeElement,d=e.id,h=Object(a.useRef)(null);Object(a.useEffect)((function(){h&&h.focus&&(h.focus(),document.execCommand("selectAll",!1,null),document.getSelection().collapseToEnd())}));var f=function(e){l(e),u(e.id)},E=function(e){h=e},v={removeElement:m,addAction:function(){f(P(i,d)),n({action:i.action+1})},addTransition:function(){f(B(i,d)),n({transition:i.transition+1})},addDialogue:function(){f(K(i,d)),n({dialogue:i.dialogue+1})},addParanthetical:function(){f(I(i,d)),n({parantheticals:i.parantheticals+1})},insChar:function(){f(F(i,d)),n({charector:i.charector+1})},addSceneHeading:function(){n({sceneHeading:i.sceneHeading+1}),r()},onContentChange:function(t,n){e.setContent(t,n)},content:t,onFocus:u};return o.a.createElement("div",{className:"board"},c.map((function(e){return o.a.createElement(Z,Object.assign({},e,v,{elementRef:e.id===s?E:null}))})))},ee=(n(224),n(409)),te=n(406),ne=n(407),ae=n(411),oe=n(408),ie=n(404),re=n(179),ce=n.n(re),le=(n(269),ee.a.Option),se=(te.a.Title,["Action Adventure","Thriller","Romantic Comedy","Horror","Drama","Romantic Drama","Mystery","Science Fiction","Horror","Love Story","Family","Fantasy","Animation","Western","Period","Historical","Musical"]),ue=["None","Comedy","Horror","Drama","Thriller","Family","Psychological","Political","Parody","Farce","Slapstick","Dark","Epic","True Story","Suspense","Erotic","Fish-out-of water","Coming-of-age"],me=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).setVisible=function(e){a.setState({visible:e})},a.setFieldValue=function(e,t){a.setState((function(n){return ce()(n,e,t)}))},a.getShortLogline=function(){var e=a.state.logline;return"".concat(e.character," ").concat(e.crisis," ").concat(e.response)},a.onSave=function(){a.setState({isEdit:!1})},a.onEdit=function(){a.setState({isEdit:!0})},a.state={visible:!1,logline:{character:"",crisis:"",response:""},theme:"",genre:se[0],subGanre:ue[0],title:"",isEdit:!0},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.logline,n=e.visible,a=e.theme,i=e.genre,r=e.subGanre,c=e.title,l=e.isEdit,s=this.setVisible,u=this.setFieldValue;return o.a.createElement("div",{className:"logline-container"},o.a.createElement(f.a,{type:"link",onClick:function(){return s(!0)}},"How to write a logline"),l?o.a.createElement("div",{className:"logline-create"},o.a.createElement("div",null,o.a.createElement(ne.a,{title:"1. Your Story Idea",subTitle:"These three questions will get at the guts of your story. Sentence length is limited - if you find you can't add more letters, use fewer or shorter words."},o.a.createElement(ae.a,{column:1},o.a.createElement(ae.a.Item,{label:"a. Your main character (use adjectives, emotional state) who wants x (a basic desire)"},o.a.createElement(ie.a,{value:t.character,onChange:function(e){return u("logline.character",e.target.value)},fullWidth:!0,label:"....E.g., A shy young suburban boy who wants to be noticed..."})),o.a.createElement(ae.a.Item,{label:"b. What CRISIS is he/she/are they facing? Hint: Start with an ACTIVE VERB."},o.a.createElement(ie.a,{value:t.crisis,onChange:function(e){return u("logline.crisis",e.target.value)},fullWidth:!0,label:"...... discovers a strange but friendly alien living in his shed..."})),o.a.createElement(ae.a.Item,{label:"c. How does he/she/do they respond to try and deal with it? Hint: Not too much detail."},o.a.createElement(ie.a,{value:t.response,onChange:function(e){return u("logline.response",e.target.value)},fullWidth:!0,label:"...... and tries to help him get home while keeping his existence a secret. (E.T., The Extra Terrestrial)"}))))),o.a.createElement("div",null,o.a.createElement(ne.a,{title:"2. Your Theme",subTitle:'THEME is what people want to know when they ask that annoying question, "So what\'s it about?"'},o.a.createElement(ae.a,{column:1},o.a.createElement(ae.a.Item,{label:"Make it a one word answer, as corny as it may sound, like Love, Betrayal, or Prejudice. Philadelphia, for example is a story about prejudice; Star Wars is a story about heroism."},o.a.createElement(ie.a,{value:a,onChange:function(e){return u("theme",e.target.value)},fullWidth:!0,label:"Your theme:....."}))))),o.a.createElement("div",null,o.a.createElement(ne.a,{title:"3. Your Title"},o.a.createElement(ae.a,{column:1},o.a.createElement(ae.a.Item,{label:"Based on your theme, choose a title (for now)."},o.a.createElement(ie.a,{value:c,onChange:function(e){return u("title",e.target.value)},fullWidth:!0,label:"Your title:........."}))))),o.a.createElement("div",null,o.a.createElement(ne.a,{title:"4. What type of film is it?"},o.a.createElement(ae.a,{column:1},o.a.createElement(ae.a.Item,{label:"Genre"},o.a.createElement(ee.a,{name:"Genre",value:i,style:{width:200},onChange:function(e){return u("genre",e)}},se.map((function(e,t){return o.a.createElement(le,{key:"genre-".concat(t),value:e},e)})))),o.a.createElement(ae.a.Item,{label:"Sub-Genre"},o.a.createElement(ee.a,{name:"Sub-Genre",value:r,style:{width:200},onChange:function(e){return u("subGanre",e)}},ue.map((function(e,t){return o.a.createElement(le,{key:"sub-genre-".concat(t),value:e},e)})))),o.a.createElement(ae.a.Item,null,o.a.createElement(f.a,{onClick:this.onSave,type:"primary"},"Save")))))):o.a.createElement("div",{className:"logline-view"},o.a.createElement(ne.a,{ghost:!1,title:c,extra:[o.a.createElement(f.a,{key:"2"},"Print"),o.a.createElement(f.a,{key:"1",type:"primary",onClick:this.onEdit},"Edit")]},o.a.createElement(ae.a,{size:"small",column:1},o.a.createElement(ae.a.Item,{label:"Logline (elivator pitch)"},this.getShortLogline()),o.a.createElement(ae.a.Item,{label:"Theme"},a),o.a.createElement(ae.a.Item,{label:"Genre"},i,", ",r)),o.a.createElement(ae.a,{size:"small",column:2},o.a.createElement(ae.a.Item,{label:"Writer(s)"},"name of user"),o.a.createElement(ae.a.Item,{label:"Last modified"},"2017-01-10")))),o.a.createElement(oe.a,{title:"How to write log line",visible:n,onOk:function(){return s(!1)},onCancel:function(){return s(!1)},width:600,footer:null},o.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/r0Fj_H9Q73k",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))}}]),n}(o.a.Component),de=h.a.TabPane,he=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;Object(s.a)(this,n),(a=t.call(this,e)).setElemetsList=function(e){a.setState((function(t){var n=Object(l.a)({},t.elementsLists);return n[t.activeBoard]=[].concat(Object(c.a)(n[t.activeBoard]),[e]),Object(l.a)(Object(l.a)({},t),{},{elementsLists:n,currentElementsList:n[t.activeBoard]})}))},a.removeElement=function(e){var t=a.state,n=t.currentElementsList,o=t.activeBoard,i=Object(l.a)({},a.state.elementsLists);if(n.length>1&&e){var r=n.filter((function(t){return t.id!==e}));i[o]=r,a.setState({elementsLists:i,currentElementsList:r}),a.setCurrentElement(r[r.length-1].id),a.setContent(e,void 0,!0)}},a.setCurrentElement=function(e){a.setState({currentElement:e})},a.addBoard=function(){var e=a.state.elementsCount;a.setState((function(t){var n=Object(c.a)(t.boards),a=n[n.length-1].id+1,o={id:a,note:"",name:"Scene-".concat(a)};n.push(o);var i=Object(l.a)({},t.elementsLists),r={type:D,sceneNumber:e.sceneHeading,id:"board-".concat(o.id,"-sceneHeading-").concat(e.sceneHeading)};return i[o.id]=[r],Object(l.a)(Object(l.a)({},t),{},{boards:n,activeBoard:o.id,elementsLists:i,currentElementsList:i[o.id],currentElement:r.id})}))},a.setContent=function(e,t,n){a.setState((function(a){var o=a.content,i=a.scriptContent;return n?(i.delete(e),delete o[e]):(i.set(e,t),o[e]=t),Object(l.a)(Object(l.a)({},a),{},{content:o,scriptContent:i})}))},a.setElementCount=function(e){a.setState((function(t){var n=t.elementsCount,a=Object(l.a)(Object(l.a)({},n),e);return Object(l.a)(Object(l.a)({},t),{},{elementsCount:a})}))},a.onTabChange=function(e){var t={activeBoard:e};if("logline"!==e){var n=a.state.elementsLists;t.currentElementsList=n[e]}a.setState(t)},a.onSave=function(){!function(e){console.log(e);var t,n=[],a=Object(E.a)(e);try{for(a.s();!(t=a.n()).done;){var o=Object(v.a)(t.value,2),i=H(o[0],o[1],n);n.push(i)}}catch(c){a.e(c)}finally{a.f()}var r=new Blob([].concat(n),{type:"text/plain;charset=utf-8"});b.a.saveAs(r,"screenplay.txt")}(a.state.scriptContent)};var o={sceneHeading:1,action:0,charector:0,dialogue:0,parantheticals:0,transition:0},i={type:D,sceneNumber:o.sceneHeading,id:"board-".concat(1,"-sceneHeading-",o.sceneHeading)},r={1:[i]};return a.state={boards:[{id:"logline",type:A,name:"Logline"},{id:1,note:"",name:"Scene-1"}],activeBoard:1,content:{},scriptContent:new Map,elementsCount:o,elementsLists:r,currentElementsList:r[1],currentElement:i.id},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.activeBoard,a=t.currentElement,i=t.elementsCount,r=t.currentElementsList;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header center"},"Script assist",o.a.createElement("div",{className:"options"},o.a.createElement(f.a,{className:"save-button",onClick:this.onSave},"Save"))),o.a.createElement("div",{className:"App-container"},o.a.createElement(h.a,{activeKey:n.toString(),className:"boards",onChange:this.onTabChange,tabPosition:"top",type:"editable-card",hideAdd:!0},this.state.boards.map((function(t,n){return o.a.createElement(de,{tab:t.name,key:t.id.toString()},t.type===A?o.a.createElement(me,{content:e.state.content,onChange:function(n){var a=n.target.value;e.setContent(t.id,a)},id:t.id}):o.a.createElement($,{id:t.id,key:"board-".concat(t.id),content:e.state.content,setContent:e.setContent,elementsCount:e.state.elementsCount,setElementCount:e.setElementCount,addBoard:e.addBoard,elementsList:r,setElemetsList:e.setElemetsList,currentElement:a,setCurrentElement:e.setCurrentElement,removeElement:e.removeElement}))})))),o.a.createElement("footer",null,/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)&&o.a.createElement("div",{className:"mobile-footer"},o.a.createElement("div",{className:"mobile-options"},o.a.createElement(f.a,{onClick:function(){e.setElementCount({sceneHeading:i.sceneHeading+1}),e.addBoard()}},"Scene heading"),o.a.createElement(f.a,{onClick:function(){e.setElemetsList(P(i,n)),e.setElementCount({action:i.action+1})}},"Action"),o.a.createElement(f.a,{onClick:function(){e.setElemetsList(F(i,n)),e.setElementCount({charector:i.charector+1})}},"Character"),o.a.createElement(f.a,{onClick:function(){e.setElemetsList(I(i,n)),e.setElementCount({parantheticals:i.parantheticals+1})}},"Paranthetical"),o.a.createElement(f.a,{onClick:function(){e.setElemetsList(K(i,n)),e.setElementCount({dialogue:i.dialogue+1})}},"Dialogue"),o.a.createElement(f.a,{onClick:function(){e.setElemetsList(B(i,n)),e.setElementCount({transition:i.transition+1})}},"Transition")))))}}]),n}(o.a.Component),fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ee(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(he,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Script-assist",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Script-assist","/service-worker.js");fe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ee(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ee(t,e)}))}}()}},[[204,1,2]]]);
//# sourceMappingURL=main.4824d154.chunk.js.map