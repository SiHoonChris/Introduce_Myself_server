(function(){"use strict";var e={7108:function(e,t,n){var i=n(9242),o=n(3396);const r={class:"main"};function a(e,t){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o.Wm)(n)])}var c=n(89);const s={},u=(0,c.Z)(s,[["render",a],["__scopeId","data-v-681586b2"]]);var p=u,l=n(2483),m=n(7139);const d={class:"lang_selec"};function _(e,t,n,i,r,a){const c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",d,[(0,o.Wm)(c,{to:{name:"Main",params:{lang:r.country}},onClick:a.setNum},{default:(0,o.w5)((()=>[(0,o.Uk)((0,m.zw)(r.greeting),1)])),_:1},8,["to","onClick"])])}var f={data(){return{num:0,greeting:"인사",country:"국가",langs:[{country:"ko",greeting:"안녕하세요"},{country:"en",greeting:"Hello"},{country:"jp",greeting:"こんにちは"}],fn_langSetter:null}},created(){this.greeting=this.langs[Number(this.num)].greeting,this.country=this.langs[Number(this.num)].country},mounted(){this.langSetter()},beforeUnmount(){clearInterval(this.fn_langSetter)},methods:{langSetter(){const e=document.querySelector("div.lang_selec a");e.style.opacity="0",this.changer(e),this.fn_langSetter=setInterval((()=>{this.num++,this.num>this.langs.length-1&&(this.num=0),this.country=this.langs[Number(this.num)].country,this.greeting=this.langs[Number(this.num)].greeting,this.changer(e)}),3e3)},changer(e){setTimeout((()=>{e.style.opacity="1",e.style.transition="opacity 1.7s"}),0),setTimeout((()=>{e.style.opacity="0",e.style.transition="opacity 1.3s"}),1700)},setNum(){this.$axios.post("/cnt").then((e=>0===e.data?console.log("ERROR"):console.log("good"))).catch((e=>{e.message.indexOf("Network Error")>-1&&alert("Error")}))}}};const h=(0,c.Z)(f,[["render",_]]);var g=h;const y=[{path:"/",name:"Intro",component:g},{path:"/:lang/main",name:"Main",component:()=>n.e(966).then(n.bind(n,9966))}],v=(0,l.p7)({history:(0,l.PO)("/"),routes:y});var b=v,j=n(65),k=(0,j.MT)({state:{lang:{ko:{cc_h1:"쓸만한 녀석 하나 나왔다.",cc_span:"새로움과 잠재력.",im_teamplay:"팀플레이에 최적화.",im_name1:"이름",im_name2:"이시훈",im_address1:"주소지",im_address2:"서울특별시 강북구",im_birth1:"생년월일",im_birth2:"1997년 4월 26일 (만 ",im_birth2_sub:"세)",im_email1:"이메일",im_education1:"학력",im_education2:"상명대학교(경제금융학부)",im_github1:"깃허브로 이동하기",im_communication:"명확한 의사소통",im_endurance:"강한 체력",im_adaptation:"빠른 적응",im_english:"영어",im_communication_exp:'"신속정확한 보고와 간단명료한 지시." 장교로서의 군복무 경험은 더욱 명확한 의사소통을 가능케 했습니다.',im_endurance_exp:"어려움 앞에서 포기하지 않고 끊임없이 도전할 수 있는 건 강한 체력 덕분이죠.",im_adaptation_exp:"어디서든, 누구와든 함께 할 수 있습니다.",im_english_exp:"인터넷 상의 정보들 중 약 56%가 영어로 작성된 것을 알고 계신가요? 이제 영어는 필수입니다.",ts_techstack:"기술 스택.",ts_development:"지금 이 순간에도 발전하는 중.",tp_knowing:"아는 것만으로는 부족해요.",tp_apply:"직접 해봐야죠.",tp_check:"저의 토이 프로젝트들을 확인해보세요.",tp_pythonprj1:"재무제표 스크래퍼",tp_pythonprj2:"주식 보조지표",tp_javaprj1:"블랙잭",tp_javaprj2:"지뢰찾기",tp_javaprj3:"투자 포트폴리오 구성 자동화",tp1_first:"처음 해본 팀 프로젝트,",tp1_project:"코드그린.",tp1_definition:"식품 쇼핑몰 제작",tp1_explanation1:"* 회원가입 과정은 ",tp1_explanation2:"로 제작됐습니다.",tp2_second:"두 번째 팀 프로젝트,",tp2_project:"입고살자.",tp2_definition:"의류 쇼핑몰 제작",tp2_explanation1:"* '입고살자'는 ",tp2_explanation2:"를 \n레퍼런스로 진행했습니다.",download:"안내 자료(PDF) 다운로드",learnMore:"더 알아보기"},en:{cc_h1:"Prospect.",cc_span:"The New & Potential.",im_teamplay:"Optimized For Team.",im_name1:"Name",im_name2:"Si-Hoon Lee",im_address1:"Address",im_address2:"Gangbuk-gu, Seoul",im_birth1:"Birth",im_birth2:"Apr. 26, 1997 (",im_birth2_sub:" years)",im_email1:"E-mail ",im_education1:"Edu.",im_education2:"Sangmyung Univ.\n(Economics & Finance, BA.)",im_github1:"Move on to GitHub",im_communication:"Communication",im_endurance:"Endurance",im_adaptation:"Adaptation",im_english:"English",im_communication_exp:'"Report quickly and accurately. Order briefly and clearly." Communication skills became clear serving the Army.',im_endurance_exp:"Able to continue to challenge myself without giving up in the face of difficulties thanks to strong endurance.",im_adaptation_exp:"Can work together with whomever.",im_english_exp:"About 56% of websites on the internet are using English, which means the English is necessary.",ts_techstack:"Tech Stack.",ts_development:"Even for now, On Developing.",tp_knowing:"Knowing is not enough.",tp_apply:"Must Apply.",tp_check:"Check out toy-projects of mine.",tp_pythonprj1:"Financial Statements Scraper",tp_pythonprj2:"Stock Indicator",tp_javaprj1:"Blackjack",tp_javaprj2:"Minesweeper",tp_javaprj3:"Portfolio Auto-builder",tp1_first:"First-ever Team Project,",tp1_project:"Code Green.",tp1_definition:"Food Shopping Mall",tp1_explanation1:"* Sign-up had been created in ",tp1_explanation2:".",tp2_second:"Second Team Project,",tp2_project:"IPGOSALJA.",tp2_definition:"Apparel Shopping Mall",tp2_explanation1:"* IPGOSALJA had been referred to ",tp2_explanation2:".",download:"Download Document(PDF)",learnMore:"Learn more"},jp:{cc_h1:"登場した。",cc_span:"新たと潜在力",im_teamplay:"チームプレーに最適。",im_name1:"名前",im_name2:"李時熏",im_address1:"住所地",im_address2:"ソウル特別市江北区",im_birth1:"生年月日",im_birth2:"1997年 4月 26日 (",im_birth2_sub:"歳)",im_email1:"E-mail",im_education1:"学歴",im_education2:"祥明大學(経済金融学部)",im_github1:"ギットハブに移動",im_communication:"明確な意思疎通",im_endurance:"強い体力",im_adaptation:"早い適応",im_english:"英語",im_communication_exp:'"\n迅速正確な報告と簡単明瞭な指示。" 将校としての軍服務経験は、より明確なコミュニケーションを可能にしました。',im_endurance_exp:"困難の前で諦めずに絶えず挑戦できるのは、強い体力のおかげです。",im_adaptation_exp:"誰とでも一緒に働くことができます。",im_english_exp:"インターネット上の情報のうち、約56%が英語で作成されていることをご存知ですか？ もう英語は必須です。",ts_techstack:"技術スタック。",ts_development:"今この瞬間も発展中。",tp_knowing:"知っているだけでは不十分。",tp_apply:"実践すべきだ。",tp_check:"私のトイプロジェクトをみてください。",tp_pythonprj1:"財務諸表スクラップ",tp_pythonprj2:"罫線表分析法",tp_javaprj1:"ブラックジャック",tp_javaprj2:"マインスイーパ",tp_javaprj3:"ポートフォリオ 自動 構成",tp1_first:"初チームプロジェクト、",tp1_project:"コードグリーン。",tp1_definition:"食品ネットショップ",tp1_explanation1:"* 会員登録は",tp1_explanation2:"で\n制作されました。",tp2_second:"二番チームプロジェクト、",tp2_project:"IGSJ",tp2_definition:"衣類ネットショップ",tp2_explanation1:"* IGSJ(イーブゴサールザ)は",tp2_explanation2:"を参考にして製作しました。",download:"資料(PDF)ダウンロード",learnMore:"さらに詳しく"}}},getters:{},mutations:{},actions:{},modules:{}}),w={mounted(){document.querySelector(".cont-disp")&&setTimeout((()=>{document.querySelector(".cont-disp").style.opacity="1",document.querySelector(".cont-disp").style.transition="opacity 0.4s"}),0)}},S=n(6336);const x={openUrl(e){open(e)},move(e){const t=document.querySelector(".project-container");t.style.transform="translateX("+e+"%)",t.style.transition="0.6s linear"}},A=(0,S.Z)();var E={install(e){e.config.globalProperties.$open=x.openUrl,e.config.globalProperties.$move=x.move,e.config.globalProperties.$emitter=A}},O=n(3071),P={install:(e,t)=>{e.config.globalProperties.$translate=e=>e.split(".").reduce(((e,t)=>{if(e)return e[t]}),t)}};const C=(0,i.ri)(p);C.config.globalProperties.$axios=O.Z,C.use(k).use(b).use(P,k.state.lang).use(E).mixin(w).mount("#app")}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,i,o,r){if(!i){var a=1/0;for(p=0;p<e.length;p++){i=e[p][0],o=e[p][1],r=e[p][2];for(var c=!0,s=0;s<i.length;s++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](i[s])}))?i.splice(s--,1):(c=!1,r<a&&(a=r));if(c){e.splice(p--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[i,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".8664ba75.js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".210f3984.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="introduce-myself:";n.l=function(i,o,r,a){if(e[i])e[i].push(o);else{var c,s;if(void 0!==r)for(var u=document.getElementsByTagName("script"),p=0;p<u.length;p++){var l=u[p];if(l.getAttribute("src")==i||l.getAttribute("data-webpack")==t+r){c=l;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+r),c.src=i),e[i]=[o];var m=function(t,n){c.onerror=c.onload=null,clearTimeout(d);var o=e[i];if(delete e[i],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(m.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=m.bind(null,c.onerror),c.onload=m.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,i,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(n){if(r.onerror=r.onload=null,"load"===n.type)i();else{var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=c,r.parentNode&&r.parentNode.removeChild(r),o(s)}};return r.onerror=r.onload=a,r.href=t,n?n.parentNode.insertBefore(r,n.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var o=n[i],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var a=document.getElementsByTagName("style");for(i=0;i<a.length;i++){o=a[i],r=o.getAttribute("data-href");if(r===e||r===t)return o}},i=function(i){return new Promise((function(o,r){var a=n.miniCssF(i),c=n.p+a;if(t(a,c))return o();e(i,c,null,o,r)}))},o={143:0};n.f.miniCss=function(e,t){var n={966:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=i(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,i){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)i.push(o[2]);else{var r=new Promise((function(n,i){o=e[t]=[n,i]}));i.push(o[2]=r);var a=n.p+n.u(t),c=new Error,s=function(i){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,o[1](c)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,r,a=i[0],c=i[1],s=i[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var p=s(n)}for(t&&t(i);u<a.length;u++)r=a[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(p)},i=self["webpackChunkintroduce_myself"]=self["webpackChunkintroduce_myself"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(7108)}));i=n.O(i)})();
//# sourceMappingURL=app.0d5a325a.js.map