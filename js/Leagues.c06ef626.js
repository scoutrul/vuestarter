(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Leagues"],{"932e":function(e,n,t){"use strict";t.r(n);var u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container"},[t("h1",[e._v("Leagues")]),t("div",e._l(e.leagues,function(n){return t("div",{key:n.league_id},[e._v(e._s(n.name))])}),0)])},a=[],i=(t("e616"),t("dde5")),s={data:function(){return{leagues:{}}},mounted:function(){var e=this;i["a"].getApi("leagues").then(function(n){console.log(n),e.leagues=n.body.api.leagues})}},l=s,o=t("2877"),c=Object(o["a"])(l,u,a,!1,null,null,null);c.options.__file="index.vue";n["default"]=c.exports}}]);
//# sourceMappingURL=Leagues.c06ef626.js.map