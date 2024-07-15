/*! © 2024 Yahoo Holdings, Inc. For license information, see js/gpt_sandbox_1af8191e8956551496c2.bundle.js.LICENSE.txt. */
(()=>{var e={p:""};(()=>{
if(!window.ymailAssetHost)throw new Error("window.ymailAssetHost must be set before running this application.")
;e.p=window.ymailAssetHost})(),(()=>{"use strict";function e(e,i,n){
if(void 0===n&&(n={}),!e){var t=new Error(i)
;throw t.name="Invariant",!n||0===Object.keys(n).length||(t.data=n),t}return e}
var i,n,t,o,r,a;!function(e){e.APP="APP",e.IFRAME="IFRAME"
}(i||(i={})),function(e){e.REQ="REQ",e.RES="RES"}(n||(n={})),function(e){
e.REFRESH="refresh",e.LOADED="loaded",e.INIT_ERROR="initError"
}(t||(t={})),function(e){e.MAIL="mail",e.BASIC_MAIL="basicMail",e.LOGIN="login",
e.AOL_LOGIN="aolLogin",
e.AOL_MAIL="aolMail",e.AOL_BASIC_MAIL="aolBasicMail",e.NOVATION="novation"
}(o||(o={})),function(e){
e.CLIENT="client",e.VERSION="version",e.YMREQID="ymreqid",
e.HAQ="haq",e.CACHE="cache",e.TEST_ID="testid",e.NCID="ncid"
}(r||(r={})),function(e){e.CONFIG="config"}(a||(a={}));var d,s="gpt-passback"
;!function(e){
e.SLOT_RENDER_ENDED="slotRenderEnded",e.SLOT_REQUESTED="slotRequested",
e.SLOT_RESPONSE_RECEIVED="slotResponseReceived",
e.IMPRESSION_VIEWABLE="impressionViewable"}(d||(d={}))
;var l,c="top_right",E="mid_center",v="message_list";!function(e){e.LREC="LREC",
e.LREC4="LREC4",
e.MON="MON",e.SKY="SKY",e.FULL_PANE="FULL_PANE",e.FULL_SCREEN="FULL_SCREEN",
e.HORIZON_DESKTOP="HORIZON_DESKTOP",
e.BILLBOARD="BILLBOARD",e.FLUID="FLUID",e.SPOTLIGHT="SPOTLIGHT",
e.MEDIUM_RECTANGLE="MEDIUM_RECTANGLE",e.LEADERBOARD="LEADERBOARD"}(l||(l={}))
;var g={[l.LREC]:[300,250],[l.LREC4]:[300,250],[l.MON]:[300,600],
[l.SKY]:[160,600],[l.FULL_PANE]:[1200,800],[l.FULL_SCREEN]:[1440,1024],
[l.HORIZON_DESKTOP]:[3,1],[l.SPOTLIGHT]:[3,2],[l.MEDIUM_RECTANGLE]:[300,250],
[l.BILLBOARD]:[970,250],[l.FLUID]:["fluid"],[l.LEADERBOARD]:[320,50]},u=(l.LREC,
l.LREC4,l.MON,l.SKY,{[l.LREC]:"Slot300_250_1",[l.LREC4]:"Slot300_250_2",
[l.MON]:"Slot300_600",[l.SKY]:"Slot160_600"
}),h="RENDER_SUCCEEDED",m="RENDER_FAILED",p="SLOT_REQUESTED",L="SLOT_RESPONSE_RECEIVED",I="IMPRESSION_VIEWABLE",R="index",f={
[o.MAIL]:"yahoo_mail",[o.NOVATION]:"yahoo_mail",[o.BASIC_MAIL]:"yahoo_mail",
[o.AOL_MAIL]:"aol_webmail",[o.AOL_BASIC_MAIL]:"aol_webmail",
[o.LOGIN]:"yahoo_login",[o.AOL_LOGIN]:"aol_login"
},O=/^(https:\/\/([a-z0-9-]+[.])*(mail|login)\.(aol|yahoo)\.com)$/,w=/^(https:\/\/(?:norrin\.)?(alpha-|canary-)?(gpt|gam)\.mail\.(aol|yahoo|yahoosandbox)\.net)$/
;const A=class{constructor(n){
var t=n.mode,o=n.appName,r=n.targetOrigin,a=n.iframeRef
;this.messageId=0,this.listener=null,
t&&Object.keys(i).map((e=>i[e])).includes(t)||e(!1,"Valid 'mode' needs to be specified"),
r||e(!1,"Valid 'targetOrigin' needs to be specified"),
t!==i.APP||a||e(!1,"Valid 'iframeRef' needs to be specified"),
this.mode=t,this.targetOrigin=r,this.iframeRef=a,this.appName=o||"MAIL_APP"}
sendMessage(e){var n,t
;if(e.requestId=++this.messageId,this.mode===i.APP)null==(n=this.iframeRef)||null==(t=n.contentWindow)||t.postMessage(e,this.targetOrigin);else if(this.mode===i.IFRAME){
var o,r;null==(o=window)||null==(r=o.parent)||r.postMessage(e,this.targetOrigin)
}}sendRequestMessage(e,i){void 0===i&&(i={}),this.sendMessage({app:this.appName,
type:n.REQ,name:e,data:i})}isReceivedMessageValid(e){var n,t=this.mode
;return!!Object.keys(i).map((e=>i[e])).includes(t)&&(!!(t!==i.APP||w.test(e.origin)&&e.source===(null==(n=this.iframeRef)?void 0:n.contentWindow))&&!!(t!==i.IFRAME||O.test(e.origin)&&e.source===window.parent))
}attachListener(e){var i=i=>{this.isReceivedMessageValid(i)&&e(i)}
;this.listener&&(window.removeEventListener("message",this.listener),
this.listener=null),window.addEventListener("message",i),this.listener=i}
detachListener(){
this.listener&&(window.removeEventListener("message",this.listener),
this.listener=null)}};var C="devbox";function b(){
return"devbox"===C||"openhouse"===C}var y=e=>{var i=document.getElementById(s)
;if(i&&e){
var n=null==i?void 0:i.children[0],t=null==n?void 0:n.children[0],o=window.innerWidth,r=((e,i)=>{
switch(i){case l.BILLBOARD:return e>=970?250:Math.floor(e/3.88)
;case l.HORIZON_DESKTOP:var n=e>480&&e<1360?4.44:5.33;return Math.floor(e/n)
;case l.SPOTLIGHT:return Math.floor(e/.89);case l.MEDIUM_RECTANGLE:
return e>=300?250:Math.floor(e/1.2)}return 0})(innerWidth,e)
;e!==l.MEDIUM_RECTANGLE?n&&t&&(n.style.height=r+"px",
n.style.width="100%",t.height=r.toString(),
t.width=o.toString()):i.style.textAlign="center"}};function _(){
return _=Object.assign||function(e){for(var i=1;i<arguments.length;i++){
var n=arguments[i]
;for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e
},_.apply(this,arguments)}var S=["slot","yieldGroupIds"],D=e=>{
var i,n=e.client,t=e.messageClient;return e=>{
var r,a,c=null==e||null==(r=e.data)?void 0:r.id,E=null==e||null==(a=e.data)?void 0:a.size,v=(null==e?void 0:e.name)!==h,m=e.gptEvent||{},p=(m.slot,
m.yieldGroupIds,function(e,i){if(null==e)return{};var n,t,o={},r=Object.keys(e)
;for(t=0;t<r.length;t++)n=r[t],i.indexOf(n)>=0||(o[n]=e[n]);return o
}(m,S)),L=((e,i,n)=>{var t=Object.keys(u).find((i=>u[i]===e))||null
;if(t)return t;if(!Array.isArray(i)||!i)return null
;if(0===i[0]&&0===i[1])return l.FLUID
;var o=n.positions,r=(void 0===o?[]:o).reduce(((e,i)=>{var n=i.positionUnits
;return(void 0===n?[]:n).forEach((i=>{e.includes(i)||e.push(i)})),e}),[])
;r.length||(r=Object.keys(g));var a=r.find((e=>{var n=g[e]
;return n[0]===i[0]&&n[1]===i[1]}));return a||null
})(c,E,window._YMIframeConfig||{});if(v||(n===o.LOGIN||n===o.AOL_LOGIN?(e=>{
var i=document.getElementById(s)
;Array.isArray(e)&&i&&(0===e[0]&&0===e[1]?i.setAttribute("style","width:600px;height:1024px;padding-left:200px;padding-right:800px;"):i.setAttribute("style","width:"+e[0]+"px;height:"+e[1]+"px"))
})(E):L===l.HORIZON_DESKTOP||L===l.BILLBOARD||L===l.SPOTLIGHT||L===l.MEDIUM_RECTANGLE?(i&&window.removeEventListener("resize",i),
(i=()=>{y(L)
})(),window.addEventListener("resize",i)):i&&(window.removeEventListener("resize",i),
i=null)),t){var I=_({},p,{position:L,isEmpty:v,size:E})
;t.sendRequestMessage(d.SLOT_RENDER_ENDED,I)}}},M=e=>{
var i=e.benji,n=e.messageClient,t=e.client;i.on(p,(e=>{var i=e.messageClient
;return()=>{i.sendRequestMessage(d.SLOT_REQUESTED)}})({messageClient:n
})),i.on(h,D({client:t,messageClient:n})),i.on(m,D({client:t,messageClient:n})),
i.on(I,(e=>{var i=e.messageClient;return()=>{
i.sendRequestMessage(d.IMPRESSION_VIEWABLE)}})({messageClient:n})),i.on(L,(e=>{
var i=e.messageClient;return()=>{i.sendRequestMessage(d.SLOT_RESPONSE_RECEIVED)}
})({messageClient:n}))},N=e=>{
var i=e.adLocation,n=e.adIndex,t=e.senderDomain,o=void 0===t?"":t,r=e.senderDomainCategory,a=void 0===r?"":r,d=e.senderDomainSubcategory,s=void 0===d?"":d
;return i===v?{loc:""+E+(1===n||!n?"":"_"+n),ri:"1"}:_({},o?{senderdomain:o
}:null,a?{senderdomaincategory:a}:null,s?{senderdomainsubcategory:s}:null,{
loc:i,ri:"1"})},P=e=>{
var i=e.positions||[],n=e.targetingConfig||{},t=n.senderDomain,o=n.senderDomainCategory,r=n.senderDomainSubcategory
;return i.reduce(((e,i)=>{
var n=i.div,a=i.adLocation,d=i.adUnitPath,s=i.size,l=i.stackGroup,c=i.adIndex
;return e[n]=_({id:n,kvs:N({adLocation:a,adIndex:c,senderDomain:t,
senderDomainCategory:o,senderDomainSubcategory:r}),path:d,region:R,size:s},l?{
stackGroup:l}:null),e}),{})},T=function(e,i){
void 0===e&&(e=[]),void 0===i&&(i=!0),e.forEach((e=>{
var n=e.div,t=e.stackGroup,o=document.getElementById(n)||t&&document.getElementById(n+"-collapse")
;if(!o){if((o=document.createElement("div")).id=n,t){
var r="ad-stacking-wrapper-"+t,a=document.getElementById(r)
;return a||((a=document.createElement("div")).id=r,
a.style.width="300px",a.style.height="600px",
a.style.overflow="hidden",document.body.appendChild(a)),
i&&n===u[l.MON]&&(o.id=n+"-collapse",
o.style.overflow="hidden"),void a.appendChild(o)}document.body.appendChild(o)}
}))},B=e=>{
var i,n=e.oldPositions,t=e.removeContainers,o=void 0===t||t,r=n.map((e=>e.div))
;null==(i=window.benji)||i.destroy(r),o&&function(e){
void 0===e&&(e=[]),e.forEach((e=>{var i,n,t=e.div,o=e.stackGroup
;null==(i=document.getElementById(t))||i.remove(),
o&&(null==(n=document.getElementById(t+"-collapse"))||n.remove())}))}(n)},U=e=>{
var n,r=e.config,a=e.client,d=e.haqEnabled,E=(e=>{
var i=e.positions,n=void 0===i?[]:i,t=e.adUnitPath,o=e.size,r=e.div,a=void 0===r?s:r,d=e.targetingConfig
;return n.length||n.push({adUnitPath:t,adLocation:null==d?void 0:d.adLocation,
size:o,div:a}),n})(r),v=new A({mode:i.IFRAME,targetOrigin:r.pageUrl
}),g=!r.yahooPrebid
;r.positions=E,v.sendRequestMessage(t.LOADED),T(r.positions,g);var h=(e=>{
var i=e.config,n=e.client,t=void 0===n?o.MAIL:n,r=e.haqEnabled,a=void 0===r||r,d=i.targetingConfig,s=void 0===d?{}:d,l=i.headerBidderConfig,c=void 0===l?{}:l,E=i.adStackingV2Enabled,v=void 0!==E&&E,g=i.yahooPrebid,u=void 0!==g&&g,h=i.limited,m=void 0!==h&&h,p=i.npa,L=void 0!==p&&p,I=i.pageUrl,R=void 0===I?"":I,O=i.geoCountryCode,w=void 0===O?"":O,A=i.tosCountryCode,C=void 0===A?"":A,b=i.collapseWhenNoFill,y=void 0===b||b,S=s.age,D=void 0===S?0:S,M=s.gender,N=void 0===M?0:M,T=s.colo,B=void 0===T?"":T,U=s.lu,k=void 0===U?"":U,j=s.device,F=void 0===j?"":j,G=s.region,x=void 0===G?"":G,q=s.lang,H=void 0===q?"":q,V=s.spaceId,z=void 0===V?"":V,K=s.AXId,Y=void 0===K?"":K,Q=s.adBlocker,W=void 0===Q?"":Q,Z=c,$=Z.buckets,J=void 0===$?[]:$,X=Z.cobrand,ee=void 0===X?"":X,ie=Z.dv360,ne=void 0===ie?"":ie,te=f[t]||f[o.MAIL]
;return{i13n:_({bka:D.toString(),bkg:N.toString(),colo:B,lu:k,site:te,device:F,
region:x,lang:H,spaceid:z,axid:Y,bucket:J,cobrand:ee,partner:ee,url:R,
axidDv360:ne},W?{abk:W}:null,{usercountry:w.toUpperCase(),
toscountry:C.toUpperCase()}),feature:_({headerBidding:!1,enableYahooPrebid:u
},u?{enableRefreshDebounce:!0}:null,{enableNTSFallback:!1,enableEdgeToEdge:!1,
enableAdStacking:v,collapseWhenNoFill:y,enablef10d509c:a}),setting:{
renderOnStart:!0,consent:{allowOnlyLimitedAds:m,allowOnlyNonPersonalizedAds:L},
tracking:{debug:!1,metrics:!1,performance:!0}},positions:P(i),event:{}}})({
config:r,client:a,haqEnabled:d})
;void 0!==window.benji?window.benji.start(h):window.benji={benjiConfig:h
},null!=(n=window.benji)&&n.isReady?M({client:a,benji:window.benji,
messageClient:v}):window.addEventListener("benji:ready",(()=>{M({client:a,
benji:window.benji,messageClient:v})})),v.attachListener((e=>{var i
;if((null==e||null==(i=e.data)?void 0:i.name)===t.REFRESH){
var n,o=e.data.data,r=o.config,a=o.redefineTargeting,d=o.targetingConfig,s="abp"===d.adBlocker
;if(window._YMIframeConfig=r,a&&d.spaceId)null==(n=window.benji)||n.updateI13N({
spaceid:d.spaceId});var v=r.positions;E&&v&&v.length!==E.length?(B({
oldPositions:E,removeContainers:!0}),(e=>{
var i,n=e.renderConfig,t=!n.yahooPrebid;T(n.positions,t);var o=P(n)
;null==(i=window.benji)||i.render(o)})({renderConfig:r})):((e,i)=>{var n
;if((i||{}).isABPDetected){
var t,o=null==e?void 0:e.some((e=>e.div===u[l.LREC])),r=null==e?void 0:e.some((e=>e.div===u[l.LREC4])),a=null==e?void 0:e.every((e=>e.adLocation.includes(c)))
;if(o&&r&&a)return void(null==(t=window.benji)||t.refresh([u[l.LREC]],{
checkViewport:!1}))}null==(n=window.benji)||n.refresh(R,{checkViewport:!1})
})(v,{isABPDetected:s})}}))},k=e=>{new A({mode:i.IFRAME,targetOrigin:"*"
}).sendRequestMessage(t.INIT_ERROR,e)};(()=>{var e
;window.googletag=window.googletag||{cmd:[]}
;var i=(null==(e=window.location.hash)?void 0:e.substring(1))||"",n=(e=>{
var i={};if(e)for(var n=e.substring(1).split("&"),t=0;t<n.length;t++){
var o=n[t].split("=");i[decodeURIComponent(o[0])]=decodeURIComponent(o[1]||"")}
return i})(window.location.search),t=n.ymreqid,o=n.client,a="1"===n[r.HAQ],d={}
;if(!i){var s="Config hash is empty";throw k({error:s,ymreqid:t}),new Error(s)}
try{var l=i.split("=")[1]||"{}";d=JSON.parse(decodeURIComponent(l))}catch(c){
if(k({error:"Failed to parse config",ymreqid:t}),b())throw c;return}
window._YMIframeConfig=d,U({config:d,client:o,haqEnabled:a})})()})()})();