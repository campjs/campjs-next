
          window.__NEXT_REGISTER_PAGE('/schedule', function() {
            var comp = module.exports=webpackJsonp([7],{542:function(e,t,l){e.exports=l(543)},543:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(0),n=function(e){return e&&e.__esModule?e:{default:e}}(a),r=l(2),u=l(216),i=[u.FRIDAY,u.SATURDAY,u.SUNDAY];t.default=function(){return n.default.createElement(r.Wrapper,{title:"Schedule"},n.default.createElement(r.Box,{is:"nav",display:"flex",flexDirection:"column"},n.default.createElement(r.NavLink,{href:"#"+u.FRIDAY},u.FRIDAY),n.default.createElement(r.NavLink,{href:"#"+u.SATURDAY},u.SATURDAY),n.default.createElement(r.NavLink,{href:"#"+u.SUNDAY},u.SUNDAY)),i.map(function(e){return n.default.createElement(r.Box,{is:"section",id:e,key:e},n.default.createElement(r.StickyHeading,{is:"h1"},e),u.SCHEDULE[e].map(function(e){return n.default.createElement(r.Box,{key:e.time+e.venue,mb:40,pt:"1.8em",id:e.talk},n.default.createElement(r.Text,{p:2,is:"h2",width:1,css:{display:"inline-block","background-color":"#87D337",color:"#21302F"}},n.default.createElement(r.Text,{is:"span"},e.time),n.default.createElement(r.Text,{is:"span",ml:"auto",css:{float:"right"}},e.venue)),e.title&&n.default.createElement(r.Text,{css:{"font-weight":700}},e.title),e.speaker&&n.default.createElement(r.Text,null,e.speaker),e.note&&n.default.createElement(r.Text,null,e.note),e.talk&&n.default.createElement(r.NavLink,{href:"/sessions#"+e.talk},"Read More"),n.default.createElement("br",null),e.start&&e.end&&n.default.createElement(r.SubscribeLink,e))}))}))}}},[542]);
            return { page: comp.default }
          })
        