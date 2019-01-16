(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{216:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(63),i=a.n(s),c=(a(71),a(3)),l=a(4),o=a(6),m=a(5),u=a(7),d=(a(73),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex"}},this.props.data&&this.props.data.map(function(e,t){return r.a.createElement("div",{className:"barchart-bar",key:t,title:e},r.a.createElement("div",{style:{height:10*e+"%"}}))}))}}]),t}(n.Component)),p=a(64),h=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.active,a={labels:["Active Clients","Inactive Clients"],datasets:[{label:"# of Votes",data:[t,e.total-t],text:"ff",backgroundColor:["#67A3E7","#596169"],borderColor:["rgba(0,0,0,0)"],borderWidth:0}]},n={cutoutPercentage:70,rotation:1*Math.PI,circumference:1*Math.PI,legend:{display:!1}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{data:a,options:n,height:200}),r.a.createElement("div",{className:"client-count"},r.a.createElement("span",null,t)),r.a.createElement("div",{className:"info"},r.a.createElement("span",null,"ACTIVE CLIENTS")))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onItemClick=function(e){"LI"===e.target.nodeName&&a.props.setSelectedData(e.target.dataset.item)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"client-options",onClick:this.onItemClick},this.props.dataSets.map(function(e,t){return r.a.createElement("li",{key:t,"data-item":t},"Dataset ",t)}))}}]),t}(n.Component),f=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).onOptionsClick=function(t){e.setState({optionsMenuOpen:!e.state.optionsMenuOpen})},e.setSelectedData=function(t){var a=parseInt(t);e.setState({selectedDataSet:e.props.data[a]})},e.state={selectedDataSet:{},optionsMenuOpen:!1},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.data&&!e.loading&&this.setState({selectedDataSet:e.data[0]})}},{key:"render",value:function(){var e=this.state.selectedDataSet,t=this.props.loading;return r.a.createElement("section",{id:"client-section"},r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"menu-left"},r.a.createElement("h2",null,"CLIENTS ",r.a.createElement("i",{className:"fas fa-caret-right"}))),r.a.createElement("div",{className:"menu-right"},r.a.createElement("div",{className:"options"},r.a.createElement("span",{onClick:this.onOptionsClick,title:"Switch data sets",style:{position:"relative"}},r.a.createElement("i",{className:"fas fa-cog",style:{color:"#747F86"}}),this.state.optionsMenuOpen?r.a.createElement(E,{dataSets:this.props.data,setSelectedData:this.setSelectedData}):null)))),r.a.createElement("div",{className:"graphs"},t?r.a.createElement("span",{className:"loading"},"Loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"graph-container"},r.a.createElement(h,{active:e.active,total:e.total})),r.a.createElement("div",{className:"graph-container align-to-bottom"},r.a.createElement(d,{data:e.lastYear}),r.a.createElement("p",{style:{color:"white",textAlign:"center"}},"LAST 12 MONTHS")),r.a.createElement("div",{className:"graph-container increase align-to-bottom",style:{width:"100px"}},r.a.createElement("div",{style:{textAlign:"center",marginBottom:"20px"}},r.a.createElement("i",{className:"fas fa-angle-double-up"})),r.a.createElement("span",null,e.increase),r.a.createElement("p",{style:{color:"white",textAlign:"center"}},"INCREASE")))))}}]),t}(n.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.itemData;return r.a.createElement("li",{className:"alerts-list-item"},r.a.createElement("div",{className:"alerts-list-item-name"},r.a.createElement("div",{className:"vertically-center"},r.a.createElement("span",{className:"cake-icon"},r.a.createElement("i",{className:"fas fa-birthday-cake"}))),r.a.createElement("h4",{className:"vertically-center"},e.name)),r.a.createElement("div",{className:"alerts-list-item-title vertically-center"},r.a.createElement("span",null,e.content),r.a.createElement("span",null,e.status)),r.a.createElement("div",{className:"alerts-list-item-date vertically-center"},r.a.createElement("span",null,e.date)),r.a.createElement("div",{className:"alerts-list-item-importance vertically-center",style:{textAlign:"right"}},r.a.createElement("span",{title:"Apologies, but this is only 'signal' icon for free on FontAwesome"},r.a.createElement("strong",null,e.importance.desc," ",r.a.createElement("i",{className:"fas fa-signal"})))))}}]),t}(n.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.data,t=this.props.data.slice();"Importance"===this.props.order?e=t.sort(function(e,t){return e.importance.num<t.importance.num?-1:1}):"Name"===this.props.order&&(e=t.sort(function(e,t){return e.name<t.name?-1:1}));var a=this.props.numToRender;return r.a.createElement("ul",{id:"alerts-list"},e.map(function(e,t){return t<a?r.a.createElement(v,{key:t,itemData:e}):null}))}}]),t}(n.Component),b=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).onOrderChange=function(t){e.setState({order:t.target.value})},e.onSeeMoreButtonClick=function(){e.setState({numToRender:e.state.numToRender+3})},e.onViewAllClick=function(){e.setState({numToRender:e.props.data.length})},e.state={numToRender:3,order:"Importance"},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:"alerts-section"},r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"menu-left"},r.a.createElement("h2",{style:{display:"inline"}},"ALERTS"),r.a.createElement("small",{style:{marginLeft:"10px"}},"Latest alerts (",this.props.data.length,")")),r.a.createElement("div",{className:"menu-right"},r.a.createElement("div",{className:"options"},r.a.createElement("span",{title:"Doesn't do anything, sorry!"},r.a.createElement("i",{className:"fas fa-chart-pie"})),r.a.createElement("span",{title:"Doesn't do anything, sorry!"},r.a.createElement("i",{className:"fas fa-filter"})),r.a.createElement("span",{title:"Doesn't do anything, sorry!"},r.a.createElement("i",{className:"fas fa-undo-alt"})),r.a.createElement("span",{title:"Doesn't do anything, sorry!"},r.a.createElement("i",{className:"fas fa-cog"})),r.a.createElement("div",{className:"vertically-center",style:{marginLeft:"15px"}},r.a.createElement("button",{title:"Doesn't save anything, sorry!"},"SAVE ",r.a.createElement("i",{className:"fas fa-caret-down"})))))),r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"menu-left"}),r.a.createElement("select",{title:"Order by",onChange:this.onOrderChange,className:"select-dropdown menu-right hover-animation",style:{marginTop:"20px",padding:"5px",cursor:"pointer",borderRadius:"3px"}},r.a.createElement("option",{value:"Importance"},"IMPORTANCE"),r.a.createElement("option",{value:"Name"},"NAME"))),this.props.loading?r.a.createElement("span",{className:"loading vertically-center"},"Loading..."):r.a.createElement(g,{numToRender:this.state.numToRender,data:this.props.data,order:this.state.order}),this.props.loading?null:r.a.createElement("div",{title:"Load more list items",className:"see-more",style:{textAlign:"center"}},this.state.numToRender<this.props.data.length?r.a.createElement("button",{onClick:this.onSeeMoreButtonClick},"SEE MORE ",r.a.createElement("i",{className:"fas fa-caret-down"})):null),r.a.createElement("div",{style:{margin:"10px 0"}},this.state.numToRender<this.props.data.length?r.a.createElement("span",{title:"Load all items at once",onClick:this.onViewAllClick,className:" hover-animation",style:{padding:"5px",cursor:"pointer",borderRadius:"3px"}},r.a.createElement("strong",null,"VIEW ALL")):null))}}]),t}(n.Component),y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).fetchData=function(){return e.setState({loading:!0}),new Promise(function(e,t){setTimeout(function(){e({clientData:[{active:203,total:300,lastYear:[1,4,3,5,6,7,3,8,4,5,3,7],increase:104},{active:250,total:300,lastYear:[5,4,7,8,6,2,6,5,4,2,1,5],increase:156},{active:160,total:300,lastYear:[5,8,2,5,5,3,7,5,6,7,1,9],increase:600}],alertsData:[{name:"Adam Compton",content:"Adam's End of Year review",status:"coming up",date:"Feb 03",importance:{num:1,desc:"Very"}},{name:"Emma O'Sullivan",content:"Emma's End of Year review",status:"coming up",date:"Feb 03",importance:{num:3,desc:"Low"}},{name:"Brandon Walsh",content:"Brandon's End of Year review",status:"coming up",date:"Feb 15",importance:{num:3,desc:"Low"}},{name:"David O'Brien",content:"David's End of Year review",status:"coming up",date:"Feb 15",importance:{num:2,desc:"Mid"}},{name:"Sophie O'Connor",content:"Sophie's End of Year review",status:"coming up",date:"Feb 15",importance:{num:1,desc:"Very"}},{name:"Steve Wright",content:"Steve's End of Year review",status:"coming up",date:"Mar 12",importance:{num:2,desc:"Mid"}},{name:"Alan Turing",content:"Alan's End of Year review",status:"coming up",date:"Mar 12",importance:{num:2,desc:"Mid"}},{name:"Peter Parker",content:"Adam's End of Year review",status:"coming up",date:"Mar 12",importance:{num:1,desc:"Very"}},{name:"Neils Bohr",content:"Neils's End of Year review",status:"coming up",date:"Apr 21",importance:{num:1,desc:"Very"}},{name:"Marie Curie",content:"Marie's End of Year review",status:"coming up",date:"Apr 21",importance:{num:3,desc:"Low"}},{name:"Enrico Fermi",content:"Enrico's End of Year review",status:"coming up",date:"Apr 21",importance:{num:1,desc:"Very"}}]})},1e3)})},e.state={clientData:[],alertsData:[],loading:!1},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.fetchData().then(function(t){e.setState({clientData:t.clientData,alertsData:t.alertsData,loading:!1})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{data:this.state.clientData,loading:this.state.loading}),r.a.createElement(b,{data:this.state.alertsData,loading:this.state.loading}))}}]),t}(n.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App",id:"wrapper"},r.a.createElement(y,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},66:function(e,t,a){e.exports=a(216)},71:function(e,t,a){},73:function(e,t,a){}},[[66,2,1]]]);
//# sourceMappingURL=main.15ad569e.chunk.js.map