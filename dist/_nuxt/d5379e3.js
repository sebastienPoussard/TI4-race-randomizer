(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(r,e,n){var content=n(177);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[r.i,content,""]]),content.locals&&(r.exports=content.locals);(0,n(37).default)("33d57732",content,!0,{sourceMap:!1})},125:function(r,e,n){"use strict";var t={components:{Button:n(88).a}},o=n(20),component=Object(o.a)(t,(function(){var r=this,e=r._self._c;return e("div",{staticClass:"[][ flex-ns flex-row-ns justify-center-ns ]"},[e("div",{staticClass:"[][ w-50-ns ]"},[e("div",{staticClass:"[ pa2 flex flex-row justify-between ]"},[e("Button",{attrs:{styling:"h",href:"/"}},[r._v("Homepage")]),r._v(" "),e("Button",{attrs:{styling:"hw",href:"https://github.com/1Mill/twilight-imperium-race-selector",target:"_blank"}},[r._v("Source code")])],1),r._v(" "),e("nuxt",{staticClass:"[ mb4 ]"})],1)])}),[],!1,null,null,null);e.a=component.exports},126:function(r,e,n){r.exports=n(127)},172:function(r,e,n){var content=n(173);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[r.i,content,""]]),content.locals&&(r.exports=content.locals);(0,n(37).default)("6cec1190",content,!0,{sourceMap:!1})},173:function(r,e,n){var t=n(36)(!1);t.push([r.i,":root {\n\t--brand-orange: #F95C39;\n\t--brand-orange-dark: #CC4C2F;\n\t--brand-blue: #247BA0;\n\t--brand-blue-dark: #1B5A75;\n}\n\n\n/* Brand Orange */\n.brand-first { color: var(--brand-orange); }\n.bg-brand-first { background-color: var(--brand-orange); }\n.b--brand-first { border-color: var(--brand-orange); }\n\n.hover-brand-first:hover,\n.hover-brand-first:focus { color: var(--brand-orange); }\n\n.hover-bg-brand-first:hover,\n.hover-bg-brand-first:focus { background-color: var(--brand-orange); }\n\n/* Brand Orange Dark */\n.brand-first-dark { color: var(--brand-orange-dark); }\n.bg-brand-first-dark { background-color: var(--brand-orange-dark); }\n.b--brand-first-dark { border-color: var(--brand-orange-dark); }\n\n.hover-brand-first-dark:hover,\n.hover-brand-first-dark:focus { color: var(--brand-orange-dark); }\n\n.hover-bg-brand-first-dark:hover,\n.hover-bg-brand-first-dark:focus { background-color: var(--brand-orange-dark); }\n\n/* Brand Blue */\n.brand-second { color: var(--brand-blue); }\n.bg-brand-second { background-color: var(--brand-blue); }\n.b--brand-second { border-color: var(--brand-blue); }\n\n.hover-brand-second:hover,\n.hover-brand-second:focus { color: var(--brand-blue); }\n\n.hover-bg-brand-second:hover,\n.hover-bg-brand-second:focus { background-color: var(--brand-blue); }\n\n/* Brand Blue Dark */\n.brand-second-dark { color: var(--brand-blue-dark); }\n.bg-brand-second-dark { background-color: var(--brand-blue-dark); }\n.b--brand-second-dark { border-color: var(--brand-blue-dark); }\n\n.hover-brand-second-dark:hover,\n.hover-brand-second-dark:focus { color: var(--brand-blue-dark); }\n\n.hover-bg-brand-second-dark:hover,\n.hover-bg-brand-second-dark:focus { background-color: var(--brand-blue-dark); }\n",""]),r.exports=t},174:function(r,e,n){var content=n(175);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[r.i,content,""]]),content.locals&&(r.exports=content.locals);(0,n(37).default)("61f95d7c",content,!0,{sourceMap:!1})},175:function(r,e,n){var t=n(36)(!1);t.push([r.i,"* {\n\tfont-family: 'Open Sans', sans-serif;\n}\n",""]),r.exports=t},176:function(r,e,n){"use strict";n(118)},177:function(r,e,n){var t=n(36)(!1);t.push([r.i,"\n._Button[data-v-3016f751] {\n\t-webkit-user-select: none;  /* Chrome all / Safari all */\n\t-moz-user-select: none;     /* Firefox all */\n\t-ms-user-select: none;      /* IE 10+ */\n}\n",""]),r.exports=t},178:function(r,e,n){"use strict";n.r(e),function(r){var t=n(2),o=(n(35),n(17),n(26),n(24),n(115),n(33)),c=n(0),l=n(91);e.default=function(){return new o.a.Store({state:{races:[],players:[],player_names:"",races_per_player:2,speaker_option:1,is_player_races_shown:!0},mutations:{INIT_RACE_ACTIVE_ATTRIBUTE:function(r){r.races.forEach((function(r){return c.a.set(r,"active",!0)}))},SET_RACES:function(r,e){r.races=e},CREATE_PLAYER:function(e,n){var t=Math.max(r.lastIndexOf(e.players),0)+1,o=n||"unknown";e.players.length<8&&e.players.push({id:"Player "+t,name:o,races:[],revealed:e.is_player_races_shown,speaker:!1})},DELETE_PLAYER:function(r){r.players.length>2&&r.players.pop()},REVEAL_PLAYER:function(r,e){e.revealed=!0},PUT_IS_PLAYER_RACES_SHOWN:function(r,e){r.is_player_races_shown=e},PUT_RACE_ACTIVE_TO_FALSE:function(r,e){c.a.set(e,"active",!1)},PUT_RACE_ACTIVE_TO_TRUE:function(r,e){c.a.set(e,"active",!0)},PUT_RACES_PER_PLAYER:function(r,e){r.races_per_player=e},PUT_PLAYER_NAMES:function(r,e){r.player_names=e},PUT_SPEAKER_OPTION:function(r,e){r.speaker_option=e}},actions:{nuxtServerInit:function(r){return Object(t.a)(regeneratorRuntime.mark((function e(){var n,t,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r.state,n=r.commit,t=l.races,n("SET_RACES",t.sort((function(a,b){return a.name.localeCompare(b.name)}))),n("INIT_RACE_ACTIVE_ATTRIBUTE"),i=1;i<=6;i++)n("CREATE_PLAYER");case 5:case"end":return e.stop()}}),e)})))()},addPlayer:function(r){var e=r.state,n=r.commit;n("CREATE_PLAYER");var t=Math.floor(e.races.length/e.players.length);t<e.races_per_player&&n("PUT_RACES_PER_PLAYER",t)},removePlayer:function(r){(0,r.commit)("DELETE_PLAYER")},revealPlayer:function(r,e){(0,r.commit)("REVEAL_PLAYER",e)},toggleRace:function(r,e){var n=r.commit;!0===e.active?n("PUT_RACE_ACTIVE_TO_FALSE",e):n("PUT_RACE_ACTIVE_TO_TRUE",e)},togglePlaceRacesShown:function(r){var e=r.state;(0,r.commit)("PUT_IS_PLAYER_RACES_SHOWN",!e.is_player_races_shown),e.players.forEach((function(r){return c.a.set(r,"revealed",e.is_player_races_shown)}))},checkAllRaces:function(r,e){var n=r.state,t=r.commit;!0===e?n.races.forEach((function(r){return t("PUT_RACE_ACTIVE_TO_TRUE",r)})):n.races.forEach((function(r){return t("PUT_RACE_ACTIVE_TO_FALSE",r)}))},updateRacesPerPlayer:function(r,e){(0,r.commit)("PUT_RACES_PER_PLAYER",e)},generatePlayerRaces:function(e){var n=e.state,t=(e.commit,e.getters),o=n.is_player_races_shown,l=n.players,d=n.races_per_player,m=n.speaker_option;if(0===t.numberOfAdditionalRacesNeeded){var h=n.races.filter((function(r){return!0===r.active})).map((function(r){return r.name}));h=r.shuffle(h),h=r.chunk(h,d),l.forEach((function(r,e){return c.a.set(r,"races",h[e])}));var f=r.split(n.player_names,",");l.forEach((function(r,e){return c.a.set(r,"name",f[e]||"unknown")})),l.forEach((function(r){return c.a.set(r,"speaker",!1)})),2==m&&c.a.set(r.sample(l),"speaker",!0),l.forEach((function(r){return c.a.set(r,"revealed",o)}))}},updatePlayerNames:function(r,e){(0,r.commit)("PUT_PLAYER_NAMES",e)}},getters:{playerCount:function(r){return r.players.length},activeRaces:function(r){return r.races.filter((function(r){return!0===r.active}))},minNumberOfRaces:function(r){return r.races_per_player*r.players.length},numberOfAdditionalRacesNeeded:function(r,e){return Math.max(0,e.minNumberOfRaces-e.activeRaces.length)}}})}}.call(this,n(179))},87:function(r,e,n){"use strict";var t=n(0),o=n(122),c=n.n(o);t.a.use(c.a)},88:function(r,e,n){"use strict";var t={props:{styling:{required:!0,type:String},disabled:{type:Boolean}},computed:{getStylingClasses:function(){var r="";switch(this.styling){case"c":r+="[ pv3 ph4 white bg-brand-first hover-bg-brand-first-dark shadow-4 ]";break;case"d":r+="[ pv2 ph3 brand-first ba bw1 hover-brand-first-dark shadow-4 ]";break;case"dw":r+="[ pv2 ph3 white ba bw1 hover-moon-gray shadow-4 ]";break;case"h":r+="[ pv2 ph3 brand-second hover-brand-second-dark ]";break;case"hw":r+="[ pv2 ph3 moon-gray hover-silver ]"}return r}}},o=(n(176),n(20)),component=Object(o.a)(t,(function(){var r=this;return(0,r._self._c)("a",{staticClass:"[ dib no-underline br2 pointer underline-hover _Button ]",class:r.getStylingClasses,style:r.disabled?"cursor: not-allowed; opacity: 0.5;":""},[r._t("default")],2)}),[],!1,null,"3016f751",null);e.a=component.exports},91:function(r){r.exports=JSON.parse('{"races":[{"name":"Arborec","url":"https://twilight-imperium.fandom.com/wiki/The_Arborec"},{"name":"Barony of Letnev ¹","url":"https://twilight-imperium.fandom.com/wiki/The_Barony_of_Letnev"},{"name":"Clan of Saar","url":"https://twilight-imperium.fandom.com/wiki/The_Clan_of_Saar"},{"name":"Embers of Muaat","url":"https://twilight-imperium.fandom.com/wiki/The_Embers_of_Muaat"},{"name":"Emirates of Hacan ¹","url":"https://twilight-imperium.fandom.com/wiki/The_Emirates_of_Hacan"},{"name":"Federation of Sol ¹","url":"https://twilight-imperium.fandom.com/wiki/The_Federation_of_Sol"},{"name":"Ghosts of Creuss","url":"https://twilight-imperium.fandom.com/wiki/The_Ghosts_of_Creuss"},{"name":"L1z1x Mindnet ¹","url":"https://twilight-imperium.fandom.com/wiki/The_L1Z1X_Mindnet"},{"name":"Mentak Coalition","url":"https://twilight-imperium.fandom.com/wiki/The_Mentak_Coalition"},{"name":"Naalu Collective","url":"https://twilight-imperium.fandom.com/wiki/The_Naalu_Collective"},{"name":"Nekro Virus","url":"https://twilight-imperium.fandom.com/wiki/The_Nekro_Virus"},{"name":"Sardak N\'orr","url":"https://twilight-imperium.fandom.com/wiki/Sardakk_N%27orr"},{"name":"Universities of Jol-Nar ¹","url":"https://twilight-imperium.fandom.com/wiki/The_Universities_of_Jol-Nar"},{"name":"Winnu","url":"https://twilight-imperium.fandom.com/wiki/The_Winnu"},{"name":"Xxcha Kingdom ¹","url":"https://twilight-imperium.fandom.com/wiki/The_Xxcha_Kingdom"},{"name":"Yin Brotherhood","url":"https://twilight-imperium.fandom.com/wiki/The_Yin_Brotherhood"},{"name":"Yssaril Tribes ¹","url":"https://twilight-imperium.fandom.com/wiki/The_Yssaril_Tribes"},{"name":"Argent Flight ⁺","url":"https://twilight-imperium.fandom.com/wiki/The_Argent_Flight"},{"name":"Empyrean ⁺","url":"https://twilight-imperium.fandom.com/wiki/The_Empyrean"},{"name":"Mahact Gene Sorcerers ⁺","url":"https://twilight-imperium.fandom.com/wiki/The_Mahact_Gene-Sorcerers"},{"name":"Naaz-Rokha Alliance ⁺","url":"https://twilight-imperium.fandom.com/wiki/The_Naaz-Rokha_Alliance"},{"name":"Nomad ⁺","url":"https://twilight-imperium.fandom.com/wiki/The_Nomad"},{"name":"Titans of Ul ⁺","url":"https://twilight-imperium.fandom.com/wiki/The_Titans_of_Ul"},{"name":"Vuil\'Raith Cabal ⁺","url":"https://twilight-imperium.fandom.com/wiki/The_Vuil%27Raith_Cabal"},{"name":"The Council Keleres ⁼","url":"https://twilight-imperium.fandom.com/wiki/The_Council_Keleres"}]}')}},[[126,4,1,5]]]);