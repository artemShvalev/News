(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{266:function(t,e,r){"use strict";r.r(e);r(33);var n={data:function(){return{drawer:!1,group:null,links:[{label:"Все Новости",url:"/"},{label:"Бизнес",url:"/BusinessNews"},{label:"Спорт",url:"/SportNews"},{label:"Технологии",url:"/TechnologyNews"},{label:"Здоровье",url:"/HealthNews"},{label:"Наука",url:"/ScienceNews"}],items:[{icon:"mdi-inbox",text:"Inbox"},{icon:"mdi-star",text:"Star"},{icon:"mdi-send",text:"Send"},{icon:"mdi-email-open",text:"Drafts"}],model:1}},computed:{width:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"320px";case"xs2":return"425px";case"sm":return"768px";case"md":return"1024px";case"lg":return"1920px";case"xl":return"2560px"}return this.width}},methods:{toggleThems:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}},l=r(46),o=r(125),c=r.n(o),d=r(384),v=r(369),m=r(366),h=r(300),f=r(301),w=r(293),x=r(264),_=r(377),y=r(370),V=r(272),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("client-only",[r("v-app-bar",{attrs:{app:"",color:"primary"}},[r("v-toolbar-title",[t._v("Новости")]),t._v(" "),r("v-app-bar-nav-icon",{attrs:{rounded:!0,color:"light-blue lighten-5"},on:{click:function(e){t.drawer=!0}}},[r("v-icon",{staticClass:"pl-5"},[t._v("\n          mdi-order-bool-ascending\n        ")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-navigation-drawer",{attrs:{permanent:!1,"hide-overlay":"",fixed:"","mobile-breakpoint":t.width.xs,height:"350",width:"387"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-btn",{staticClass:"my-2",attrs:{color:"orange",text:"",rounded:""},on:{click:t.toggleThems}},[t._v("\n            Сменить тему\n          ")]),t._v(" "),r("v-list",{attrs:{nav:"",dense:""}},t._l(t.links,(function(link){return r("v-list-item",{key:link.label+"-header-link",attrs:{"active-class":"deep-purple--text text--accent-4",text:"",rounded:"",to:link.url},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[r("v-list-item",[r("v-list-item-title",[t._v(t._s(link.label))])],1)],1)})),1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAppBar:d.a,VAppBarNavIcon:v.a,VBtn:m.a,VIcon:h.a,VList:f.a,VListItem:w.a,VListItemTitle:x.a,VNavigationDrawer:_.a,VSpacer:y.a,VToolbarTitle:V.a})},267:function(t,e,r){"use strict";r.r(e);var n={name:"Footer",data:function(){return{links:[{label:"Все Новости",url:"/"},{label:"Бизнес",url:"/BusinessNews"},{label:"Спорт",url:"/SportNews"},{label:"Технологии",url:"/TechnologyNews"},{label:"Здоровье",url:"/HealthNews"},{label:"Наука",url:"/ScienceNews"}]}}},l=r(46),o=r(125),c=r.n(o),d=r(366),v=r(371),m=r(372),h=r(373),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-footer",{attrs:{color:"primary lighten-1",padless:""}},[r("v-row",{attrs:{justify:"center","no-gutters":""}},[t._l(t.links,(function(link){return r("v-btn",{key:link.i,staticClass:"my-2",attrs:{color:"white",text:"",rounded:"",to:link.url}},[t._v("\n        "+t._s(link.label)+"\n      ")])})),t._v(" "),r("v-col",{staticClass:"primary lighten-2 py-4 text-center white--text",attrs:{cols:"12"}},[t._v("\n        "+t._s((new Date).getFullYear())+"\n      ")])],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCol:v.a,VFooter:m.a,VRow:h.a})},381:function(t,e,r){"use strict";r.r(e);var n=r(266),l=r(267),o={name:"PoliticsPage",components:{Navigation:n.default,Footer:l.default},data:function(){return{sciense:null,src:""}},mounted:function(){var t=this;this.$axios.$get("http://newsapi.org/v2/top-headlines?country=ru&category=science&apiKey=d24618ec857b475e8e3f2e60828b9c6b").then((function(e){t.sciense=e.articles})).catch((function(t){alert(t)}))}},c=r(46),d=r(125),v=r.n(d),m=r(261),h=r(366),f=r(309),w=r(263),x=r(308),_=r(374),y=r(370),V=r(273),k=r.n(V),N=r(270),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("Navigation"),t._v(" "),r("v-main",[r("v-card",{staticClass:"mx-auto mt-8",attrs:{"max-width":"1000","max-heigth":"95%",elevation:"5",rounded:"",raised:"",loading:"true"}},t._l(t.sciense,(function(e){return r("v-card-title",{key:e.index,attrs:{color:"cyan lighten-3"}},[t._v("\n        "+t._s(e.title)+"\n        "),r("v-spacer"),t._v(" "),r("v-card-subtitle",{staticClass:"mt-2 mb-2",attrs:{color:"color"}},[t._v("\n          "+t._s(e.description)+"\n        ")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-img",{staticClass:"rounded-b",attrs:{"max-width":"100%","max-height":"500",alt:"Фото статьи",transition:"true",position:"center center",contain:"",src:e.urlToImage,"lazy-src":"bus.urlToImage"}}),t._v(" "),r("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:{center:!0},expression:"{center: true}"}],staticClass:"mt-5",attrs:{href:e.url}},[t._v("\n          Подробнее...\n        ")])],1)})),1)],1),t._v(" "),r("Footer")],1)}),[],!1,null,"27c152a3",null);e.default=component.exports;v()(component,{Navigation:r(266).default,Footer:r(267).default}),v()(component,{VApp:m.a,VBtn:h.a,VCard:f.a,VCardSubtitle:w.a,VCardTitle:w.b,VImg:x.a,VMain:_.a,VSpacer:y.a}),k()(component,{Ripple:N.a})}}]);