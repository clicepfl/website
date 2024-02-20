(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[5072],{79194:(w,m,e)=>{"use strict";e.d(m,{v:()=>n});var t=e(53547),r=e(86706);function n(d,c){const o=(0,r.oR)();(0,t.useEffect)(()=>{o.injectReducer(d,c)},[o,d,c])}},7761:(w,m,e)=>{"use strict";e.d(m,{pl:()=>s,aY:()=>L,q5:()=>i.q});var t=e(53547),r=e(57993),n=e(25804),d=e(18172);const c={data:[],isLoading:!0},y=(M,A)=>(0,d.ZP)(M,p=>{switch(A.type){case"GET_DATA_SUCCEEDED":{p.data=A.data,p.isLoading=!1;break}case"GET_DATA_ERROR":{p.isLoading=!1;break}default:return p}}),s=({ssoEnabled:M})=>{const[A,p]=(0,t.useReducer)(y,c),T=(0,r.lm)(),{get:g}=(0,r.kY)();return(0,t.useEffect)(()=>{(async()=>{try{if(!M){p({type:"GET_DATA_SUCCEEDED",data:[]});return}const{data:R}=await g((0,n.IF)("providers"));p({type:"GET_DATA_SUCCEEDED",data:R})}catch(R){console.error(R),p({type:"GET_DATA_ERROR"}),T({type:"warning",message:{id:"notification.error"}})}})()},[g,M,T]),A};var a=e(14293),f=e.n(a),h=e(86896),l=e(16550),i=e(71926);const v="strapi-notification-seat-limit",x="https://cloud.strapi.io/profile/billing",O="https://strapi.io/billing/request-seats",L=()=>{const{formatMessage:M}=(0,h.Z)();let{license:A,isError:p,isLoading:T}=(0,i.q)();const g=(0,r.lm)(),{pathname:D}=(0,l.TH)(),{enforcementUserCount:R,permittedSeats:W,licenseLimitStatus:I,isHostedOnStrapiCloud:U}=A;(0,t.useEffect)(()=>{if(p||T)return;const $=!f()(W)&&!window.sessionStorage.getItem(`${v}-${D}`)&&(I==="AT_LIMIT"||I==="OVER_LIMIT");let B;I==="OVER_LIMIT"?B="warning":I==="AT_LIMIT"&&(B="softWarning"),$&&g({type:B,message:M({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:I}),title:M({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:I,enforcementUserCount:R,permittedSeats:W}),link:{url:U?x:O,label:M({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:U})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${v}-${D}`,!0)}})},[g,A,D,M,T,W,I,R,U,p])}},71926:(w,m,e)=>{"use strict";e.d(m,{q:()=>d});var t=e(53547),r=e(57993),n=e(88767);function d({enabled:c}={enabled:!0}){const{get:o}=(0,r.kY)(),{data:y,isError:u,isLoading:s}=(0,n.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:h}}=await o("/admin/license-limit-information");return h},{enabled:c}),a=y??{},f=t.useCallback(h=>(a?.features??[]).find(i=>i.name===h)?.options??{},[a?.features]);return{license:a,getFeature:f,isError:u,isLoading:s}}},11984:(w,m,e)=>{"use strict";e.d(m,{CI:()=>d,FP:()=>o,Js:()=>u,_V:()=>n,fC:()=>r,rI:()=>y,xn:()=>c});var t=e(86978);function r({status:s,data:a}){return{type:t.qZ,payload:{status:s,workflow:a}}}function n(s){return{type:t.x4,payload:{stageId:s}}}function d(s={}){return{type:t.Ot,payload:s}}function c(s,a){return{type:t.Nj,payload:{stageId:s,...a}}}function o(s,a){return{type:t.$k,payload:{newIndex:a,oldIndex:s}}}function y(s){return{type:t.VS,payload:s}}function u(){return{type:t.gu}}},43390:(w,m,e)=>{"use strict";e.d(m,{eJ:()=>p,lx:()=>M,h4:()=>T,fC:()=>A});var t=e(53547),r=e(17034),n=e(185),d=e(49066),c=e(53979),o=e(57993),y=e(67109),u=e(86896),s=e(52713),a=e(86978),f=e(11047),h=e(75515),l=e(12645),i=e(45697),v=e.n(i),x=e(88972);const O=(0,x.ZP)(f.k)`
  svg path {
    fill: ${({theme:g})=>g.colors.neutral600};
  }
`;function P({name:g}){return t.createElement(f.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,o.Q1)(300)},t.createElement(O,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6},t.createElement(l.Z,{width:`${8/16}rem`})),t.createElement(h.Z,{fontWeight:"bold"},g))}P.propTypes={name:v().string.isRequired};function L({type:g,item:D}){switch(g){case a.uL.STAGE:return t.createElement(P,{...D});default:return null}}function M(){return t.createElement(s.r,{renderItem:L})}function A({children:g}){return t.createElement(r.A,null,t.createElement(n.o,{tabIndex:-1},t.createElement(d.D,null,g)))}function p({href:g}){const{formatMessage:D}=(0,u.Z)();return t.createElement(o.rU,{startIcon:t.createElement(y.Z,null),to:g},D({id:"global.back",defaultMessage:"Back"}))}function T({title:g,subtitle:D,navigationAction:R,primaryAction:W}){return t.createElement(t.Fragment,null,t.createElement(o.SL,{name:g}),t.createElement(c.T,{navigationAction:R,primaryAction:W,title:g,subtitle:D}))}},38705:(w,m,e)=>{"use strict";e.d(m,{uT:()=>L,fC:()=>p,Dx:()=>P});var t=e(53547),r=e(75515),n=e(11047),d=e(42866),c=e(59946),o=e(41580),y=e(12028),u=e(80994),s=e(70968),a=e(45697),f=e.n(a),h=e(86896),l=e(88972);const i=e.p+"0cd5f8915b265d5b1856.png",v="limits-title",x="https://strapi.io/pricing-cloud",O="https://strapi.io/contact-sales";function P({children:T}){return t.createElement(r.Z,{variant:"alpha",id:v},T)}P.propTypes={children:f().node.isRequired};function L({children:T}){return t.createElement(r.Z,{variant:"omega"},T)}L.propTypes={children:f().node.isRequired};function M(){const{formatMessage:T}=(0,h.Z)();return t.createElement(n.k,{gap:2,paddingTop:4},t.createElement(u.Q,{variant:"default",isExternal:!0,href:x},T({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),t.createElement(u.Q,{variant:"tertiary",isExternal:!0,href:O},T({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const A=l.ZP.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:T})=>`-${T.spaces[7]}`};
  margin-top: ${({theme:T})=>`-${T.spaces[7]}`};
  width: 360px;
`;function p({children:T,isOpen:g,onClose:D}){const{formatMessage:R}=(0,h.Z)();return g?t.createElement(d.P,{labelledBy:v},t.createElement(c.f,null,t.createElement(n.k,{gap:2,paddingLeft:7,position:"relative"},t.createElement(n.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},T,t.createElement(M,null)),t.createElement(n.k,{justifyContent:"end",height:"100%",width:"40%"},t.createElement(A,{src:i,"aria-hidden":!0,alt:"",loading:"lazy"}),t.createElement(o.x,{display:"flex",position:"absolute",right:0,top:0},t.createElement(y.h,{icon:t.createElement(s.Z,null),"aria-label":R({id:"global.close",defaultMessage:"Close"}),onClick:D})))))):null}p.defaultProps={isOpen:!1},p.propTypes={children:f().node.isRequired,isOpen:f().bool,onClose:f().func.isRequired}},68997:(w,m,e)=>{"use strict";e.d(m,{U:()=>b});var t=e(53547),r=e(41580),n=e(11047),d=e(57993),c=e(45697),o=e.n(c),y=e(86896),u=e(86706),s=e(88972),a=e(11984),f=e(75515),h=e(99782);const l=(0,s.ZP)(h.Z)`
  > circle {
    fill: ${({theme:E})=>E.colors.neutral150};
  }
  > path {
    fill: ${({theme:E})=>E.colors.neutral600};
  }
`,i=(0,s.ZP)(r.x)`
  border-radius: 26px;

  svg {
    height: ${({theme:E})=>E.spaces[6]};
    width: ${({theme:E})=>E.spaces[6]};

    > path {
      fill: ${({theme:E})=>E.colors.neutral600};
    }
  }

  &:hover {
    color: ${({theme:E})=>E.colors.primary600} !important;
    ${f.Z} {
      color: ${({theme:E})=>E.colors.primary600} !important;
    }

    ${l} {
      > circle {
        fill: ${({theme:E})=>E.colors.primary600};
      }
      > path {
        fill: ${({theme:E})=>E.colors.neutral100};
      }
    }
  }

  &:active {
    ${f.Z} {
      color: ${({theme:E})=>E.colors.primary600};
    }

    ${l} {
      > circle {
        fill: ${({theme:E})=>E.colors.primary600};
      }
      > path {
        fill: ${({theme:E})=>E.colors.neutral100};
      }
    }
  }
`;function v({children:E,...Z}){return t.createElement(i,{as:"button",background:"neutral0",border:"neutral150",paddingBottom:3,paddingLeft:4,paddingRight:4,paddingTop:3,shadow:"filterShadow",...Z},t.createElement(n.k,{gap:2},t.createElement(l,{"aria-hidden":!0}),t.createElement(f.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral500"},E)))}v.propTypes={children:o().node.isRequired};var x=e(63237),O=e(48734),P=e(74756),L=e(12028),M=e(63081),A=e(11276),p=e(67819),T=e(16364),g=e(70642),D=e(20022),R=e(12814),W=e(41054),I=e(61080),U=e(21440),$=e(44949),B=e(86978),K=e(5318);const V=(0,K.s)();function S(){return t.createElement(r.x,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",display:"block",hasRadius:!0,padding:6,shadow:"tableShadow"})}function k({id:E,index:Z,canDelete:G,canReorder:ee,canUpdate:H,isOpen:te=!1,stagesCount:z}){const Y=C=>`${C+1} of ${z}`,Q=C=>{J(j({id:"dnd.grab-item",defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:N.value,position:Y(C)}))},ie=C=>{J(j({id:"dnd.drop-item",defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:N.value,position:Y(C)}))},de=()=>{J(j({id:"dnd.cancel-item",defaultMessage:"{item}, dropped. Re-order cancelled."},{item:N.value}))},ce=(C,X)=>{J(j({id:"dnd.reorder",defaultMessage:"{item}, moved. New position in list: {position}."},{item:N.value,position:Y(C)})),q((0,a.FP)(X,C))},[ne,J]=t.useState(null),{formatMessage:j}=(0,y.Z)(),{trackUsage:ue}=(0,d.rS)(),q=(0,u.I0)(),[ae,me]=t.useState(te),[N,re,ge]=(0,W.U$)(`stages.${Z}.name`),[_,oe,pe]=(0,W.U$)(`stages.${Z}.color`),[{handlerId:fe,isDragging:ve,handleKeyDown:he},Ee,ye,Te,se]=(0,U.Y9)(ee,{index:Z,item:{name:N.value},onGrabItem:Q,onDropItem:ie,onMoveItem:ce,onCancel:de,type:B.uL.STAGE}),Se=(0,$.FE)(Ee,ye),we=V.map(({hex:C,name:X})=>({value:C,label:j({id:"Settings.review-workflows.stage.color.name",defaultMessage:"{name}"},{name:X}),color:C}));t.useEffect(()=>{se((0,I.rX)(),{captureDraggingState:!1})},[se,Z]);const{themeColorName:Me}=(0,K.k)(_.value)??{};return t.createElement(r.x,{ref:Se},ne&&t.createElement(x.T,{"aria-live":"assertive"},ne),ve?t.createElement(S,null):t.createElement(O.U,{size:"S",variant:"primary",onToggle:()=>{me(!ae),ae||ue("willEditStage")},expanded:ae,shadow:"tableShadow",error:re.error??oe?.error??!1,hasErrorMessage:!1},t.createElement(P.B,{title:N.value,togglePosition:"left",action:t.createElement(n.k,null,G&&t.createElement(L.h,{background:"transparent",icon:t.createElement(D.Z,null),label:j({id:"Settings.review-workflows.stage.delete",defaultMessage:"Delete stage"}),noBorder:!0,onClick:()=>q((0,a._V)(E))}),t.createElement(L.h,{background:"transparent",disabled:!H,forwardedAs:"div",role:"button",noBorder:!0,tabIndex:0,"data-handler-id":fe,ref:Te,label:j({id:"Settings.review-workflows.stage.drag",defaultMessage:"Drag"}),onClick:C=>C.stopPropagation(),onKeyDown:he},t.createElement(R.Z,null)))}),t.createElement(M.v,{padding:6,background:"neutral0",hasRadius:!0},t.createElement(A.r,{gap:4},t.createElement(p.P,{col:6},t.createElement(T.o,{...N,id:N.name,disabled:!H,label:j({id:"Settings.review-workflows.stage.name.label",defaultMessage:"Stage name"}),error:re.error??!1,onChange:C=>{ge.setValue(C.target.value),q((0,a.xn)(E,{name:C.target.value}))},required:!0})),t.createElement(p.P,{col:6},t.createElement(g.q4,{disabled:!H,error:oe?.error??!1,id:_.name,required:!0,label:j({id:"content-manager.reviewWorkflows.stage.color",defaultMessage:"Color"}),onChange:C=>{pe.setValue(C),q((0,a.xn)(E,{color:C}))},value:_.value.toUpperCase(),startIcon:t.createElement(n.k,{as:"span",height:2,background:_.value,borderColor:Me==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2})},we.map(({value:C,label:X,color:le})=>{const{themeColorName:xe}=(0,K.k)(le);return t.createElement(g.ag,{value:C,key:C,startIcon:t.createElement(n.k,{as:"span",height:2,background:le,borderColor:xe==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2})},X)})))))))}k.propTypes=o().shape({id:o().number.isRequired,color:o().string.isRequired,canDelete:o().bool.isRequired,canReorder:o().bool.isRequired,canUpdate:o().bool.isRequired,stagesCount:o().number.isRequired}).isRequired;const F=(0,s.ZP)(r.x)`
  transform: translateX(-50%);
`;function b({canDelete:E,canUpdate:Z,stages:G}){const{formatMessage:ee}=(0,y.Z)(),H=(0,u.I0)(),{trackUsage:te}=(0,d.rS)();return t.createElement(n.k,{direction:"column",gap:6,width:"100%"},t.createElement(r.x,{position:"relative",spacing:4,width:"100%"},t.createElement(F,{background:"neutral200",height:"100%",left:"50%",position:"absolute",top:"0",width:2,zIndex:1}),t.createElement(n.k,{direction:"column",alignItems:"stretch",gap:6,zIndex:2,position:"relative",as:"ol"},G.map((z,Y)=>{const Q=z?.id??z.__temp_key__;return t.createElement(r.x,{key:`stage-${Q}`,as:"li"},t.createElement(k,{id:Q,index:Y,isOpen:!z.id,canDelete:G.length>1&&E,canReorder:G.length>1,canUpdate:Z,stagesCount:G.length}))}))),Z&&t.createElement(v,{type:"button",onClick:()=>{H((0,a.CI)({name:""})),te("willCreateStage")}},ee({id:"Settings.review-workflows.stage.add",defaultMessage:"Add new stage"})))}b.defaultProps={canDelete:!0,canUpdate:!0,stages:[]},b.propTypes={canDelete:o().bool,canUpdate:o().bool,stages:o().arrayOf(o().shape({id:o().number,__temp_key__:o().number,name:o().string.isRequired}))}},85230:(w,m,e)=>{"use strict";e.d(m,{Y:()=>O});var t=e(53547),r=e(67730),n=e(75515),d=e(11276),c=e(67819),o=e(16364),y=e(57993),u=e(41054),s=e(45697),a=e.n(s),f=e(86896),h=e(86706),l=e(88972),i=e(11984);const v=(0,l.ZP)(r.ML)`
  padding-left: ${({theme:L})=>L.spaces[7]};
`,x=(0,l.ZP)(n.Z)`
  font-style: italic;
`;function O({canUpdate:L,contentTypes:{collectionTypes:M,singleTypes:A},currentWorkflow:p,workflows:T}){const{formatMessage:g,locale:D}=(0,f.Z)(),R=(0,h.I0)(),[W,I,U]=(0,u.U$)("name"),[$,B,K]=(0,u.U$)("contentTypes"),V=(0,y.Xe)(D,{sensitivity:"base"});return t.createElement(d.r,{background:"neutral0",hasRadius:!0,gap:4,padding:6,shadow:"tableShadow"},t.createElement(c.P,{col:6},t.createElement(o.o,{...W,id:W.name,disabled:!L,label:g({id:"Settings.review-workflows.workflow.name.label",defaultMessage:"Workflow Name"}),error:I.error??!1,onChange:S=>{R((0,i.rI)({name:S.target.value})),U.setValue(S.target.value)},required:!0})),t.createElement(c.P,{col:6},t.createElement(r.NU,{...$,customizeContent:S=>g({id:"Settings.review-workflows.workflow.contentTypes.displayValue",defaultMessage:"{count} {count, plural, one {content type} other {content types}} selected"},{count:S.length}),disabled:!L,error:B.error??!1,id:$.name,label:g({id:"Settings.review-workflows.workflow.contentTypes.label",defaultMessage:"Associated to"}),onChange:S=>{R((0,i.rI)({contentTypes:S})),K.setValue(S)},placeholder:g({id:"Settings.review-workflows.workflow.contentTypes.placeholder",defaultMessage:"Select"})},[...M.length>0?[{label:g({id:"Settings.review-workflows.workflow.contentTypes.collectionTypes.label",defaultMessage:"Collection Types"}),children:M.sort((S,k)=>V.compare(S.info.displayName,k.info.displayName)).map(S=>({label:S.info.displayName,value:S.uid}))}]:[],...A.length>0?[{label:g({id:"Settings.review-workflows.workflow.contentTypes.singleTypes.label",defaultMessage:"Single Types"}),children:A.map(S=>({label:S.info.displayName,value:S.uid}))}]:[]].map(S=>"children"in S?t.createElement(r.Ab,{key:S.label,label:S.label,values:S.children.map(k=>k.value.toString())},S.children.map(k=>{const{name:F}=T.find(b=>(p&&b.id!==p.id||!p)&&b.contentTypes.includes(k.value))??{};return t.createElement(v,{key:k.value,value:k.value},g({id:"Settings.review-workflows.workflow.contentTypes.assigned.notice",defaultMessage:"{label} {name, select, undefined {} other {<i>(assigned to <em>{name}</em> workflow)</i>}}"},{label:k.label,name:F,em:(...b)=>t.createElement(n.Z,{as:"em",fontWeight:"bold"},b),i:(...b)=>t.createElement(x,null,b)}))})):t.createElement(r.ML,{key:S.value,value:S.value},S.label)))))}const P=a().shape({uid:a().string.isRequired,info:a().shape({displayName:a().string.isRequired}).isRequired});O.defaultProps={canUpdate:!0,currentWorkflow:void 0},O.propTypes={canUpdate:a().bool,contentTypes:a().shape({collectionTypes:a().arrayOf(P).isRequired,singleTypes:a().arrayOf(P).isRequired}).isRequired,currentWorkflow:a().object,workflows:a().array.isRequired}},86978:(w,m,e)=>{"use strict";e.d(m,{$k:()=>u,Ef:()=>l,FT:()=>f,Nj:()=>y,Ot:()=>o,VS:()=>s,_X:()=>i,gu:()=>n,lv:()=>a,qZ:()=>d,sN:()=>r,uL:()=>h,x4:()=>c});var t=e(42675);const r="settings_review-workflows",n="Settings/Review_Workflows/RESET_WORKFLOW",d="Settings/Review_Workflows/SET_WORKFLOW",c="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",o="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",y="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",u="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",s="Settings/Review_Workflows/WORKFLOW_UPDATE",a={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},f=t.W.colors.primary600,h={STAGE:"stage"},l="numberOfWorkflows",i="stagesPerWorkflow"},52258:(w,m,e)=>{"use strict";e.d(m,{n:()=>n});var t=e(57993),r=e(88767);function n(d={}){const{get:c}=(0,t.kY)(),{id:o="",...y}=d,u={populate:"stages"},{data:s,isLoading:a,status:f,refetch:h}=(0,r.useQuery)(["review-workflows","workflows",o],async()=>(await c(`/admin/review-workflows/workflows/${o}`,{params:{...u,...y}})).data);let l=[];return o&&s?.data?l=[s.data]:Array.isArray(s?.data)&&(l=s.data),{meta:s?.meta??{},workflows:l,isLoading:a,status:f,refetch:h}}},3848:(w,m,e)=>{"use strict";e.d(m,{E:()=>c,I:()=>o});var t=e(18172),r=e(18446),n=e.n(r),d=e(86978);const c={status:"loading",serverState:{workflow:null},clientState:{currentWorkflow:{data:{name:"",contentTypes:[],stages:[]},isDirty:!1,hasDeletedServerStages:!1}}};function o(u=c,s){return(0,t.Uy)(u,a=>{const{payload:f}=s;switch(s.type){case d.qZ:{const{status:h,workflow:l}=f;a.status=h,l&&(a.serverState.workflow=l,a.clientState.currentWorkflow.data={...l,stages:l.stages.map(i=>({...i,color:i?.color??d.FT}))}),a.clientState.currentWorkflow.hasDeletedServerStages=!1;break}case d.gu:{a.clientState.currentWorkflow.data=c.clientState.currentWorkflow.data,a.serverState=c.serverState;break}case d.x4:{const{stageId:h}=f,{currentWorkflow:l}=u.clientState;a.clientState.currentWorkflow.data.stages=l.data.stages.filter(i=>(i?.id??i.__temp_key__)!==h),l.hasDeletedServerStages||(a.clientState.currentWorkflow.hasDeletedServerStages=!!(u.serverState.workflow?.stages??[]).find(i=>i.id===h));break}case d.Ot:{const{currentWorkflow:h}=u.clientState;h.data||(a.clientState.currentWorkflow.data={stages:[]});const l=y(a.clientState.currentWorkflow.data.stages);a.clientState.currentWorkflow.data.stages.push({...f,color:f?.color??d.FT,__temp_key__:l});break}case d.Nj:{const{currentWorkflow:h}=u.clientState,{stageId:l,...i}=f;a.clientState.currentWorkflow.data.stages=h.data.stages.map(v=>(v.id??v.__temp_key__)===l?{...v,...i}:v);break}case d.$k:{const{currentWorkflow:{data:{stages:h}}}=u.clientState,{newIndex:l,oldIndex:i}=f;if(l>=0&&l<h.length){const v=h[i];let x=[...h];x.splice(i,1),x.splice(l,0,v),a.clientState.currentWorkflow.data.stages=x}break}case d.VS:{a.clientState.currentWorkflow.data={...a.clientState.currentWorkflow.data,...f};break}default:break}u.clientState.currentWorkflow.data&&a.serverState.workflow?a.clientState.currentWorkflow.isDirty=!n()((0,t.Vk)(a.clientState.currentWorkflow).data,a.serverState.workflow):a.clientState.currentWorkflow.isDirty=!0})}const y=(u=[])=>{const s=u.map(a=>a.id??a.__temp_key__);return Math.max(...s,-1)+1}},5318:(w,m,e)=>{"use strict";e.d(m,{k:()=>n,s:()=>d});var t=e(42675),r=e(86978);function n(c){if(!c)return null;const y=Object.entries(t.W.colors).filter(([,u])=>u.toUpperCase()===c.toUpperCase()).reduce((u,[s])=>(r.lv?.[s]&&(u=s),u),null);return y?{themeColorName:y,name:r.lv[y]}:null}function d(){return Object.entries(r.lv).map(([c,o])=>({hex:t.W.colors[c].toUpperCase(),name:o}))}},66578:(w,m,e)=>{"use strict";e.d(m,{V:()=>d});var t=e(36968),r=e.n(t),n=e(87561);async function d({values:c,formatMessage:o}){const y=n.Ry({contentTypes:n.IX().of(n.Z_()),name:n.Z_().max(255,o({id:"Settings.review-workflows.validation.name.max-length",defaultMessage:"Name can not be longer than 255 characters"})).required(),stages:n.IX().of(n.Ry().shape({name:n.Z_().required(o({id:"Settings.review-workflows.validation.stage.name",defaultMessage:"Name is required"})).max(255,o({id:"Settings.review-workflows.validation.stage.max-length",defaultMessage:"Name can not be longer than 255 characters"})).test("unique-name",o({id:"Settings.review-workflows.validation.stage.duplicate",defaultMessage:"Stage name must be unique"}),function(u){const{options:{context:s}}=this;return s.stages.filter(a=>a.name===u).length===1}),color:n.Z_().required(o({id:"Settings.review-workflows.validation.stage.color",defaultMessage:"Color is required"})).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i)})).min(1)});try{return await y.validate(c,{abortEarly:!1,context:c}),!0}catch(u){let s={};return u instanceof n.p8&&u.inner.forEach(a=>{r()(s,a.path,a.message)}),s}}},51584:(w,m,e)=>{var t=e(44239),r=e(37005),n="[object Boolean]";function d(c){return c===!0||c===!1||r(c)&&t(c)==n}w.exports=d},7654:(w,m,e)=>{var t=e(81763);function r(n){return t(n)&&n!=+n}w.exports=r},81763:(w,m,e)=>{var t=e(44239),r=e(37005),n="[object Number]";function d(c){return typeof c=="number"||r(c)&&t(c)==n}w.exports=d},7334:(w,m,e)=>{var t=e(79833);function r(n){return t(n).toLowerCase()}w.exports=r},48734:(w,m,e)=>{"use strict";e.d(m,{U:()=>h,y:()=>a});var t=e(85893),r=e(53547),n=e(88972),d=e(13819),c=e(2504),o=e(75515),y=e(11047),u=e(41580);const s=({theme:l,expanded:i,variant:v,disabled:x,error:O})=>O?`1px solid ${l.colors.danger600} !important`:x?`1px solid ${l.colors.neutral150}`:i?`1px solid ${l.colors.primary600}`:v==="primary"?`1px solid ${l.colors.neutral0}`:`1px solid ${l.colors.neutral100}`,a=(0,n.ZP)(o.Z)``,f=(0,n.ZP)(u.x)`
  border: ${s};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:l})=>l.colors.primary600};

    ${a} {
      color: ${({theme:l,expanded:i})=>i?void 0:l.colors.primary700};
    }

    ${o.Z} {
      color: ${({theme:l,expanded:i})=>i?void 0:l.colors.primary600};
    }

    & > ${y.k} {
      background: ${({theme:l})=>l.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:l})=>l.colors.primary200};
    }
  }
`,h=({children:l,disabled:i=!1,error:v,expanded:x=!1,hasErrorMessage:O=!0,id:P,onToggle:L,toggle:M,size:A="M",variant:p="primary",shadow:T})=>{const g=(0,c.M)(P),D=r.useMemo(()=>({expanded:x,onToggle:L,toggle:M,id:g,size:A,variant:p,disabled:i}),[i,x,g,L,A,M,p]);return(0,t.jsxs)(d.S.Provider,{value:D,children:[(0,t.jsx)(f,{"data-strapi-expanded":x,disabled:i,"aria-disabled":i,expanded:x,hasRadius:!0,variant:p,error:v,shadow:T,children:l}),v&&O&&(0,t.jsx)(u.x,{paddingTop:1,children:(0,t.jsx)(o.Z,{variant:"pi",textColor:"danger600",children:v})})]})}},63081:(w,m,e)=>{"use strict";e.d(m,{v:()=>d});var t=e(85893),r=e(13819),n=e(41580);const d=({children:c,...o})=>{const{expanded:y,id:u}=(0,r.A)();if(!y)return null;const s=`accordion-content-${u}`,a=`accordion-label-${u}`,f=`accordion-desc-${u}`;return(0,t.jsx)(n.x,{role:"region",id:s,"aria-labelledby":a,"aria-describedby":f,...o,children:c})}},13819:(w,m,e)=>{"use strict";e.d(m,{A:()=>n,S:()=>r});var t=e(53547);const r=(0,t.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),n=()=>(0,t.useContext)(r)},74756:(w,m,e)=>{"use strict";e.d(m,{B:()=>l});var t=e(85893),r=e(12645),n=e(88972),d=e(48734),c=e(13819);const o=({expanded:i,disabled:v,variant:x})=>{let O="neutral100";return i?O="primary100":v?O="neutral150":x==="primary"&&(O="neutral0"),O};var y=e(39785),u=e(52624),s=e(11047),a=e(75515);const f=(0,n.ZP)(y.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:i,expanded:v})=>v?i.colors.primary600:i.colors.neutral500};
    }
  }
`,h=(0,n.ZP)(s.k)`
  min-height: ${({theme:i,size:v})=>i.sizes.accordions[v]};
  border-radius: ${({theme:i,expanded:v})=>v?`${i.borderRadius} ${i.borderRadius} 0 0`:i.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:i})=>i.colors.primary600};
      }
    }
  }
`,l=({title:i,description:v,as:x="span",togglePosition:O="right",action:P,...L})=>{const{onToggle:M,toggle:A,expanded:p,id:T,size:g,variant:D,disabled:R}=(0,c.A)(),W=`accordion-content-${T}`,I=`accordion-label-${T}`,U=`accordion-desc-${T}`,$=g==="M"?6:4,B=g==="M"?$:$-2,K=o({expanded:p,disabled:R,variant:D}),V={as:x,fontWeight:g==="S"?"bold":void 0,id:I,textColor:p?"primary600":"neutral700",ellipsis:!0,variant:g==="M"?"delta":void 0},S=p?"primary600":"neutral600",k=p?"primary200":"neutral200",F=g==="M"?`${32/16}rem`:`${24/16}rem`,b=()=>{R||(A&&!M?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),A()):M&&M())},E=(0,t.jsx)(s.k,{justifyContent:"center",borderRadius:"50%",height:F,width:F,transform:p?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:k,cursor:R?"not-allowed":"pointer",onClick:b,shrink:0,children:(0,t.jsx)(u.J,{as:r.Z,width:g==="M"?`${11/16}rem`:`${8/16}rem`,color:p?"primary600":"neutral600"})});return(0,t.jsx)(h,{paddingBottom:B,paddingLeft:$,paddingRight:$,paddingTop:B,background:K,expanded:p,size:g,justifyContent:"space-between",cursor:R?"not-allowed":"",children:(0,t.jsxs)(s.k,{gap:3,flex:1,maxWidth:"100%",children:[O==="left"&&E,(0,t.jsx)(f,{onClick:b,"aria-disabled":R,"aria-expanded":p,"aria-controls":W,"aria-labelledby":I,"data-strapi-accordion-toggle":!0,expanded:p,type:"button",flex:1,minWidth:0,...L,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.y,{...V,children:i}),v&&(0,t.jsx)(a.Z,{as:"p",id:U,textColor:S,children:v})]})}),O==="right"&&(0,t.jsxs)(s.k,{gap:3,children:[E,P]}),O==="left"&&P]})})}},67109:(w,m,e)=>{"use strict";e.d(m,{Z:()=>n});var t=e(85893);const r=d=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:(0,t.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),n=r},12814:(w,m,e)=>{"use strict";e.d(m,{Z:()=>n});var t=e(85893);const r=d=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:[(0,t.jsx)("path",{fill:"#212134",d:"M16.563 5.587a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 3.083c-.012.788-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574A1.943 1.943 0 0 1 14.9 2.11c.4-.684 1.2-1.066 1.981-.927a1.954 1.954 0 0 1 1.606 1.9c.011.748 1.17.748 1.158 0A3.138 3.138 0 0 0 17.565.17c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM16.563 14.372a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 11.867c-.012.789-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.968 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.675 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.005ZM16.563 23.392a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 20.89c-.012.787-.487 1.512-1.229 1.796a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.967 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM7.378 5.622a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 3.119c-.011.788-.486 1.512-1.228 1.796a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38.205c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.005ZM7.378 14.406a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 11.902c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38 8.988c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.674 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.006ZM7.378 23.427a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 20.924c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927.933.156 1.594.967 1.605 1.9.012.748 1.17.748 1.16 0A3.139 3.139 0 0 0 8.38 18.01c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.569.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.747-1.147-.747-1.159 0Z"})]}),n=r},99782:(w,m,e)=>{"use strict";e.d(m,{Z:()=>n});var t=e(85893);const r=d=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:[(0,t.jsx)("circle",{cx:12,cy:12,r:12,fill:"#212134"}),(0,t.jsx)("path",{fill:"#F6F6F9",d:"M17 12.569c0 .124-.1.224-.225.224h-3.981v3.982c0 .124-.101.225-.226.225h-1.136a.225.225 0 0 1-.226-.225v-3.981H7.226A.225.225 0 0 1 7 12.567v-1.136c0-.125.1-.226.225-.226h3.982V7.226c0-.124.1-.225.224-.225h1.138c.124 0 .224.1.224.225v3.982h3.982c.124 0 .225.1.225.224v1.138Z"})]}),n=r}}]);
