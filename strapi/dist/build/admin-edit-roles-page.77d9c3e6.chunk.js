(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[2544],{25545:(X,B,r)=>{"use strict";r.r(B),r.d(B,{CreatePage:()=>Ee,default:()=>$e});var e=r(53547),b=r(185),P=r(53979),R=r(11047),Z=r(29728),O=r(49066),S=r(41580),x=r(75515),D=r(11276),q=r(67819),a=r(16364),H=r(61467),p=r(57993),A=r(67109),F=r(66115),f=r(41054),C=r(27361),w=r.n(C),ue=r(41609),ae=r.n(ue),ie=r(86896),y=r(86706),le=r(16550),Y=r(88972),G=r(14900),_=r(36364),xe=r(442),me=r(87561);const oe=me.Ry().shape({name:me.Z_().required(p.I0.required),description:me.Z_().required(p.I0.required)}),Pe=Y.ZP.div`
  border: 1px solid ${({theme:T})=>T.colors.primary200};
  background: ${({theme:T})=>T.colors.primary100};
  padding: ${({theme:T})=>`${T.spaces[2]} ${T.spaces[4]}`};
  color: ${({theme:T})=>T.colors.primary600};
  border-radius: ${({theme:T})=>T.borderRadius};
  font-size: ${12/16}rem;
  font-weight: bold;
`,Ee=()=>{const T=(0,p.lm)(),{lockApp:ne,unlockApp:z}=(0,p.o1)(),{formatMessage:k}=(0,ie.Z)(),[Q,pe]=(0,e.useState)(!1),{replace:ce}=(0,le.k6)(),ee=(0,e.useRef)(),{trackUsage:de}=(0,p.rS)(),Ze=(0,le.$B)("/settings/roles/duplicate/:id"),Ae=w()(Ze,"params.id",null),{isLoading:Be,data:he}=(0,G.U_)(),{permissions:Oe,isLoading:De}=(0,G.Dq)(Ae),{post:Fe,put:je}=(0,p.kY)(),He=re=>{ne(),pe(!0),de(Ae?"willDuplicateRole":"willCreateNewRole"),Promise.resolve(Fe("/admin/roles",re)).then(async({data:W})=>{const{permissionsToSend:U}=ee.current.getPermissions();return de(Ae?"didDuplicateRole":"didCreateNewRole"),W.data.id&&!ae()(U)&&await je(`/admin/roles/${W.data.id}/permissions`,{permissions:U}),W}).then(W=>{pe(!1),T({type:"success",message:{id:"Settings.roles.created",defaultMessage:"created"}}),ce(`/settings/roles/${W.data.id}`)}).catch(W=>{console.error(W),pe(!1),T({type:"warning",message:{id:"notification.error"}})}).finally(()=>{z()})},Le=`${k({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${(0,F.Z)(new Date,"PPP")}`;return e.createElement(b.o,null,e.createElement(p.SL,{name:"Roles"}),e.createElement(f.J9,{initialValues:{name:"",description:Le},onSubmit:He,validationSchema:oe,validateOnChange:!1},({handleSubmit:re,values:W,errors:U,handleReset:ye,handleChange:Ce})=>e.createElement(p.l0,{noValidate:!0},e.createElement(e.Fragment,null,e.createElement(P.T,{primaryAction:e.createElement(R.k,{gap:2},e.createElement(Z.z,{variant:"secondary",onClick:()=>{ye(),ee.current.resetForm()},size:"L"},k({id:"app.components.Button.reset",defaultMessage:"Reset"})),e.createElement(Z.z,{onClick:re,loading:Q,size:"L"},k({id:"global.save",defaultMessage:"Save"}))),title:k({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:k({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(p.rU,{startIcon:e.createElement(A.Z,null),to:"/settings/roles"},k({id:"global.back",defaultMessage:"Back"}))}),e.createElement(O.D,null,e.createElement(R.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(S.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(R.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(R.k,{justifyContent:"space-between"},e.createElement(S.x,null,e.createElement(S.x,null,e.createElement(x.Z,{fontWeight:"bold"},k({id:"global.details",defaultMessage:"Details"}))),e.createElement(S.x,null,e.createElement(x.Z,{variant:"pi",textColor:"neutral600"},k({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(Pe,null,k({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0}))),e.createElement(D.r,{gap:4},e.createElement(q.P,{col:6},e.createElement(a.o,{name:"name",error:U.name&&k({id:U.name}),label:k({id:"global.name",defaultMessage:"Name"}),onChange:Ce,value:W.name})),e.createElement(q.P,{col:6},e.createElement(H.g,{label:k({id:"global.description",defaultMessage:"Description"}),id:"description",error:U.description&&k({id:U.description}),onChange:Ce},W.description))))),!Be&&!De?e.createElement(S.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(xe.Z,{isFormDisabled:!1,ref:ee,permissions:Oe,layout:he})):e.createElement(S.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(p.dO,null))))))))};function $e(){const T=(0,y.v9)(_._);return e.createElement(p.O4,{permissions:T.settings.roles.create},e.createElement(Ee,null))}},442:(X,B,r)=>{"use strict";r.d(B,{Z:()=>es});var e=r(53547),b=r(82777),P=r(77296),R=r(42761),Z=r(57993),O=r(18721),S=r.n(O),x=r(41609),D=r.n(x),q=r(45697),a=r.n(q),H=r(86896),p=r(41580),A=r(89734),F=r.n(A),f=r(88972),C=r(11047),w=r(92155),ue=r(52337),ae=r(66942),ie=r(27361),y=r.n(ie),le=r(57557),Y=r.n(le),G=r(14900),_=r(29728),xe=r(78114);const me=f.ZP.div`
  position: relative;

  ${({hasConditions:t,disabled:n,theme:o})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${n?o.colors.neutral100:o.colors.primary600};
    }
  `}
`,Re=({onClick:t,className:n,hasConditions:o,variant:s})=>{const{formatMessage:i}=(0,H.Z)();return e.createElement(me,{hasConditions:o,className:n},e.createElement(_.z,{variant:s,startIcon:e.createElement(xe.Z,null),onClick:t},i({id:"global.settings",defaultMessage:"Settings"})))};Re.defaultProps={className:null,hasConditions:!1,variant:"tertiary"},Re.propTypes={onClick:a().func.isRequired,className:a().string,hasConditions:a().bool,variant:a().string};const oe=(0,f.ZP)(Re)``;var Pe=r(42866),Ee=r(24969),$e=r(59946),T=r(75515),ne=r(36856),z=r(63321),k=r(36773),Q=r(18172),pe=r(7739),ce=r.n(pe),ee=r(11700),de=r.n(ee),Ze=r(38953);const Ae=t=>Object.values(t).map(n=>Object.entries(n).filter(([,o])=>o).map(([o])=>o)).flat(),Be=t=>t.reduce((n,[o,s])=>(n.push({label:de()(o),children:s.map(i=>({label:i.displayName,value:i.id}))}),n),[]),he=(t,n)=>t.map(([,o])=>o).flat().reduce((o,s)=>({[s.id]:n.includes(s.id),...o}),{}),Oe=({arrayOfOptionsGroupedByCategory:t,isFormDisabled:n,isGrey:o,label:s,name:i,onChange:l,value:c})=>{const{formatMessage:d}=(0,H.Z)(),m=u=>{l(i,he(t,u))};return e.createElement(C.k,{as:"li",background:o?"neutral100":"neutral0",paddingBottom:3,paddingTop:3},e.createElement(C.k,{paddingLeft:6,style:{width:180}},e.createElement(T.Z,{variant:"sigma",textColor:"neutral600"},d({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"),e.createElement(T.Z,{variant:"sigma",title:s,textColor:"primary600",ellipsis:!0},d({id:`Settings.roles.form.permissions.${s.toLowerCase()}`,defaultMessage:s})),e.createElement(T.Z,{variant:"sigma",textColor:"neutral600"},"\xA0",d({id:"Settings.permissions.conditions.when",defaultMessage:"When"}))),e.createElement(p.x,{style:{maxWidth:430,width:"100%"}},e.createElement(Ze.Q,{id:i,customizeContent:u=>`${u.length} currently selected`,onChange:m,value:Ae(c),options:Be(t),disabled:n})))};Oe.propTypes={arrayOfOptionsGroupedByCategory:a().array.isRequired,isFormDisabled:a().bool.isRequired,isGrey:a().bool.isRequired,label:a().string.isRequired,name:a().string.isRequired,value:a().object.isRequired,onChange:a().func.isRequired};const De=Oe,Fe=(t,n)=>t.reduce((o,s)=>(o[s.id]=y()(n,s.id,!1),o),{}),je=(t,n)=>t.reduce((o,s)=>{const[i,l]=s,c=Fe(l,n);return o[i]=c,o},{}),Le=(t,n,o)=>t.reduce((s,i)=>{const l=y()(n,[...i.pathToConditionsObject,"conditions"],{}),c=je(o,l);return s[i.pathToConditionsObject.join("..")]=c,s},{}),re=({actions:t,headerBreadCrumbs:n,isFormDisabled:o,onClosed:s,onToggle:i})=>{const{formatMessage:l}=(0,H.Z)(),{availableConditions:c,modifiedData:d,onChangeConditions:m}=(0,G.$_)(),u=(0,e.useMemo)(()=>Object.entries(ce()(c,"category")),[c]),g=t.filter(({isDisplayed:h,hasSomeActionsSelected:L,hasAllActionsSelected:$})=>h&&(L||$)),v=(0,e.useMemo)(()=>Le(g,d,u),[g,d,u]),[M,N]=(0,e.useState)(v),j=(h,L)=>{N((0,Q.ZP)($=>{$[h]||($[h]={}),$[h].default||($[h].default={}),$[h].default=L}))},E=()=>{const h=Object.entries(M).reduce((L,$)=>{const[I,te]=$,K=Object.values(te).reduce((J,V)=>({...J,...V}),{});return L[I]=K,L},{});m(h),i()};return e.createElement(Pe.P,{labelledBy:"condition-modal-breadcrumbs",onClose:s},e.createElement(Ee.x,null,e.createElement(z.O,{id:"condition-modal-breadcrumbs",label:n.join(", ")},n.map((h,L,$)=>e.createElement(k.$,{isCurrent:L===$.length-1,key:h},de()(l({id:h,defaultMessage:h})))))),e.createElement($e.f,null,g.length===0&&e.createElement(T.Z,null,l({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})),e.createElement("ul",null,g.map(({actionId:h,label:L,pathToConditionsObject:$},I)=>{const te=$.join("..");return e.createElement(De,{key:h,arrayOfOptionsGroupedByCategory:u,label:L,isFormDisabled:o,isGrey:I%2===0,name:te,onChange:j,value:y()(M,te,{})})}))),e.createElement(ne.m,{startActions:e.createElement(_.z,{variant:"tertiary",onClick:i},l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(_.z,{onClick:E},l({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"}))}))};re.propTypes={actions:a().arrayOf(a().shape({actionId:a().string.isRequired,checkboxName:a().string,hasSomeActionsSelected:a().bool.isRequired,hasAllActionsSelected:a().bool,isDisplayed:a().bool.isRequired,label:a().string})).isRequired,headerBreadCrumbs:a().arrayOf(a().string).isRequired,isFormDisabled:a().bool.isRequired,onClosed:a().func.isRequired,onToggle:a().func.isRequired};const W=re,U=`${120/16}rem`,ye=`${200/16}rem`,Ce=`${53/16}rem`,Ue=f.ZP.div`
  width: ${U};
`,ot=(0,f.ZP)(C.k)`
  padding-right: ${({theme:t})=>t.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:t})=>t&&"cursor: pointer;"}
`,Ke=({children:t,isCollapsable:n,isActive:o,isFormDisabled:s,label:i,onChange:l,onClick:c,checkboxName:d,someChecked:m,value:u})=>{const{formatMessage:g}=(0,H.Z)();return e.createElement(C.k,{alignItems:"center",paddingLeft:6,style:{width:ye,flexShrink:0}},e.createElement(p.x,{paddingRight:2},e.createElement(w.C,{name:d,"aria-label":g({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:i}),disabled:s,onValueChange:v=>l({target:{name:d,value:v}}),indeterminate:m,value:u})),e.createElement(ot,{title:i,alignItems:"center",isCollapsable:n,...n&&{onClick:c,"aria-expanded":o,onKeyDown:({key:v})=>(v==="Enter"||v===" ")&&c(),tabIndex:0,role:"button"}},e.createElement(T.Z,{fontWeight:o?"bold":"",textColor:o?"primary600":"neutral800",ellipsis:!0},de()(i)),t))};Ke.defaultProps={children:null,checkboxName:"",onChange(){},value:!1,someChecked:!1,isCollapsable:!1},Ke.propTypes={checkboxName:a().string,children:a().node,label:a().string.isRequired,isCollapsable:a().bool,isFormDisabled:a().bool.isRequired,onChange:a().func,onClick:a().func.isRequired,someChecked:a().bool,value:a().bool,isActive:a().bool.isRequired};const rt=(0,e.memo)(Ke);var Ft=r(42348),Nt=r.n(Ft),Wt=r(13218),be=r.n(Wt);const at=t=>be()(t)?Nt()(Object.values(t).map(n=>be()(n)?at(n):n)):[],ke=at,ze=t=>t?Object.keys(t).reduce((n,o)=>(o!=="conditions"&&(n[o]=t[o]),n),{}):null,Te=t=>{const n=ze(t),o=ke(n);if(!o.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const s=o.every(l=>l),i=o.some(l=>l)&&!s;return{hasAllActionsSelected:s,hasSomeActionsSelected:i}};var Vt=r(12645);const Ne=(0,f.ZP)(Vt.Z)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:t})=>t?"180":"0"}deg);
  margin-left: ${({theme:t})=>t.spaces[2]};
`,We=t=>`
  ${T.Z} {
    color: ${t.colors.primary600};
    font-weight: ${t.fontWeights.bold}
  }
  ${Ne} {
    display: block;
    path {
      fill: ${t.colors.primary600}
    };
  }
`,Ht=(t,n,o)=>t.map(({actionId:s,isDisplayed:i,applyToProperties:l,label:c})=>{if(!i)return{actionId:s,hasSomeActionsSelected:!1,isDisplayed:i};const d=[...o.split(".."),s],m=D()(l)?[...d,"properties","enabled"]:d,u=m.join(".."),g=y()(n,[...d,"conditions"],null),v=ke(g).some(E=>E);if(D()(l)){const E=y()(n,m,!1);return{actionId:s,checkboxName:u,hasAllActionsSelected:E,hasConditions:v,hasSomeActionsSelected:E,isDisplayed:i,isParentCheckbox:!1,label:c,pathToConditionsObject:d}}const M=y()(n,m,null),{hasAllActionsSelected:N,hasSomeActionsSelected:j}=Te(M);return{actionId:s,checkboxName:u,hasAllActionsSelected:N,hasConditions:v,hasSomeActionsSelected:j,isDisplayed:i,isParentCheckbox:!0,label:c,pathToConditionsObject:d}}),Xe=(t,n)=>`
  ${it} {
    background-color: ${t.colors.primary100};
    color: ${t.colors.primary600};
    border-radius: ${n?"2px 2px 0 0":"2px"};
  }
  ${ct} {
    display: flex;
  }
  ${oe} {
    display: block;
  }
  &:hover {
   ${We(t)}
  }

  &:focus-within {
    ${({theme:o,isActive:s})=>Xe(o,s)}
  }
  
`,it=f.ZP.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: ${Ce};
  background-color: ${({isGrey:t,theme:n})=>t?n.colors.neutral100:n.colors.neutral0};
  border: 1px solid transparent;
`,Gt=f.ZP.div`
  display: inline-flex;
  min-width: 100%;

  ${oe} {
    display: none;
  }
  ${({isActive:t,theme:n})=>t&&Xe(n,t)}
  &:hover {
    ${({theme:t,isActive:n})=>Xe(t,n)}
  }
`,lt=(0,f.ZP)(C.k)`
  width: ${U};
  position: relative;
`,ct=(0,f.ZP)(p.x)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,dt=f.ZP.span`
  position: absolute;
  top: -6px;
  left: 37px;
  width: 6px;
  height: 6px;
  border-radius: 20px;
  background: ${({theme:t})=>t.colors.primary600};
`,Ut=(0,f.ZP)(p.x)`
  position: absolute;
  right: 9px;
  transform: translateY(10px);
`,ut=({availableActions:t,isActive:n,isGrey:o,isFormDisabled:s,label:i,onClickToggle:l,pathToData:c})=>{const[d,m]=(0,e.useState)(!1),{formatMessage:u}=(0,H.Z)(),{modifiedData:g,onChangeParentCheckbox:v,onChangeSimpleCheckbox:M}=(0,G.$_)(),N=()=>{m(K=>!K)},j=()=>{m(!1)},E=y()(g,c.split(".."),{}),h=(0,e.useMemo)(()=>Object.keys(E).reduce((K,J)=>(K[J]=Y()(E[J],"conditions"),K),{}),[E]),{hasAllActionsSelected:L,hasSomeActionsSelected:$}=Te(h),I=(0,e.useMemo)(()=>Ht(t,g,c),[t,g,c]),te=I.some(({hasConditions:K})=>K);return e.createElement(Gt,{isActive:n},e.createElement(it,{isGrey:o},e.createElement(rt,{isCollapsable:!0,isFormDisabled:s,label:i,checkboxName:c,onChange:v,onClick:l,someChecked:$,value:L,isActive:n},e.createElement(ct,{paddingLeft:2},n?e.createElement(ue.Z,null):e.createElement(ae.Z,null))),e.createElement(C.k,{style:{flex:1}},I.map(({actionId:K,hasConditions:J,hasAllActionsSelected:V,hasSomeActionsSelected:fe,isDisplayed:Ie,isParentCheckbox:se,checkboxName:ve,label:Ve})=>Ie?se?e.createElement(lt,{key:K,justifyContent:"center",alignItems:"center"},J&&e.createElement(dt,null),e.createElement(w.C,{disabled:s,name:ve,"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${Ve} ${i}`}),onValueChange:Se=>{v({target:{name:ve,value:Se}})},indeterminate:fe,value:V})):e.createElement(lt,{key:K,justifyContent:"center",alignItems:"center"},J&&e.createElement(dt,null),e.createElement(w.C,{disabled:s,indeterminate:J,name:ve,onValueChange:Se=>{M({target:{name:ve,value:Se}})},value:V})):e.createElement(Ue,{key:K}))),d&&e.createElement(W,{headerBreadCrumbs:[i,"Settings.permissions.conditions.conditions"],actions:I,isFormDisabled:s,onClosed:j,onToggle:N})),e.createElement(Ut,null,e.createElement(oe,{onClick:N,hasConditions:te})))};ut.propTypes={availableActions:a().array.isRequired,isActive:a().bool.isRequired,isGrey:a().bool.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,onClickToggle:a().func.isRequired,pathToData:a().string.isRequired};const Kt=ut,zt=f.ZP.span`
  color: ${({theme:t})=>t.colors.danger700};
  padding-left: ${({theme:t})=>t.spaces[1]}px;
`,mt=()=>e.createElement(zt,null,"*"),Xt=(t,n)=>t.map(o=>{const s=Array.isArray(o.subjects)&&o.subjects.indexOf(n)!==-1;return{...o,isDisplayed:s}}),wt=(0,f.ZP)(p.x)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t})=>t.colors.primary200};
    display: block;
  }
`,Yt=f.ZP.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:n})=>t.colors[n]};
  }
`,we=t=>e.createElement(wt,null,e.createElement(Yt,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})));we.defaultProps={fill:"primary200"},we.propTypes={fill:a().string};const Jt=(0,e.memo)(we),pt=(0,f.ZP)(C.k)`
  width: ${U};
  position: relative;
`,Qt=(0,f.ZP)(C.k)`
  height: ${Ce};
`,qt=(0,f.ZP)(p.x)`
  padding-left: ${31/16}rem;
`,_t=(0,f.ZP)(p.x)`
  border-left: ${({isVisible:t,theme:n})=>t?`4px solid ${n.colors.primary200}`:"4px solid transparent"};
`,en=(0,f.ZP)(C.k)`
  padding-left: ${({theme:t})=>t.spaces[4]};
  width: ${({level:t})=>145-t*36}px;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${Ne} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${We(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&We(n)};
`,tn=f.ZP.div`
  padding-top: ${({theme:t})=>t.spaces[2]};
  margin-top: ${({theme:t})=>t.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:t})=>t.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,Ye=({childrenForm:t,isFormDisabled:n,recursiveLevel:o,pathToDataFromActionRow:s,propertyActions:i,parentName:l,propertyName:c})=>{const{formatMessage:d}=(0,H.Z)(),{modifiedData:m,onChangeParentCheckbox:u,onChangeSimpleCheckbox:g}=(0,G.$_)(),[v,M]=(0,e.useState)(null),N=E=>{M(h=>h===E?null:E)},j=(0,e.useMemo)(()=>v?t.find(({value:E})=>E===v):null,[v,t]);return e.createElement(qt,null,e.createElement(tn,null),t.map(({label:E,value:h,required:L,children:$},I)=>{const te=I+1<t.length,K=Array.isArray($),J=v===h;return e.createElement(_t,{key:h,isVisible:te},e.createElement(Qt,null,e.createElement(Jt,{color:"primary200"}),e.createElement(C.k,{style:{flex:1}},e.createElement(en,{level:o,isActive:J,isCollapsable:K},e.createElement(ot,{alignItems:"center",isCollapsable:K,...K&&{onClick:()=>N(h),"aria-expanded":J,onKeyDown:({key:V})=>(V==="Enter"||V===" ")&&N(h),tabIndex:0,role:"button"},title:E},e.createElement(T.Z,{ellipsis:!0},de()(E)),L&&e.createElement(mt,null),e.createElement(Ne,{$isActive:J}))),e.createElement(C.k,{style:{flex:1}},i.map(({actionId:V,label:fe,isActionRelatedToCurrentProperty:Ie})=>{if(!Ie)return e.createElement(Ue,{key:V});const se=[...s.split(".."),V,"properties",c,...l.split(".."),h],ve=y()(m,se,!1);if(!$)return e.createElement(pt,{key:fe,justifyContent:"center",alignItems:"center"},e.createElement(w.C,{disabled:n,name:se.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${E} ${fe}`}),onValueChange:Me=>{g({target:{name:se.join(".."),value:Me}})},value:ve}));const{hasAllActionsSelected:Ve,hasSomeActionsSelected:Se}=Te(ve);return e.createElement(pt,{key:fe,justifyContent:"center",alignItems:"center"},e.createElement(w.C,{key:fe,disabled:n,name:se.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${E} ${fe}`}),onValueChange:Me=>{u({target:{name:se.join(".."),value:Me}})},value:Ve,indeterminate:Se}))})))),j&&J&&e.createElement(p.x,{paddingBottom:2},e.createElement(Ye,{isFormDisabled:n,parentName:`${l}..${h}`,pathToDataFromActionRow:s,propertyActions:i,propertyName:c,recursiveLevel:o+1,childrenForm:j.children})))}))};Ye.propTypes={childrenForm:a().array.isRequired,isFormDisabled:a().bool.isRequired,parentName:a().string.isRequired,pathToDataFromActionRow:a().string.isRequired,propertyActions:a().array.isRequired,propertyName:a().string.isRequired,recursiveLevel:a().number.isRequired};const nn=(0,e.memo)(Ye),sn=t=>t.reduce((o,s)=>(s.isActionRelatedToCurrentProperty&&o.push(s.actionId),o),[]),on=(t,n,o,s,i)=>{const c=sn(t).reduce((d,m)=>{const u=[...o.split(".."),m,"properties",s,i],g=y()(n,u,!1);return d[m]=g,d},{});return Te(c)},gt=(0,f.ZP)(C.k)`
  width: ${U};
  position: relative;
`,rn=(0,f.ZP)(C.k)`
  height: ${Ce};
  flex: 1;

  ${({isCollapsable:t,theme:n})=>t&&`
      ${Ne} {
        display: block;
        color: ${n.colors.neutral100};
      }
      &:hover {
        ${We(n)}
      }
  `}
  ${({isActive:t,theme:n})=>t&&We(n)};
`,Je=({childrenForm:t,label:n,isFormDisabled:o,name:s,required:i,pathToData:l,propertyActions:c,propertyName:d,isOdd:m})=>{const{formatMessage:u}=(0,H.Z)(),[g,v]=(0,e.useState)(null),{modifiedData:M,onChangeCollectionTypeLeftActionRowCheckbox:N,onChangeParentCheckbox:j,onChangeSimpleCheckbox:E}=(0,G.$_)(),h=g===s,L=(0,e.useMemo)(()=>Array.isArray(t)?t:[],[t]),$=L.length>0,I=(0,e.useCallback)(()=>{$&&v(V=>V===s?null:s)},[$,s]),te=({target:{value:V}})=>{N(l,d,s,V)},{hasAllActionsSelected:K,hasSomeActionsSelected:J}=(0,e.useMemo)(()=>on(c,M,l,d,s),[c,M,l,d,s]);return e.createElement(e.Fragment,null,e.createElement(rn,{alignItems:"center",isCollapsable:$,isActive:h,background:m?"neutral100":"neutral0"},e.createElement(C.k,null,e.createElement(rt,{onChange:te,onClick:I,isCollapsable:$,isFormDisabled:o,label:n,someChecked:J,value:K,isActive:h},i&&e.createElement(mt,null),e.createElement(Ne,{$isActive:h})),e.createElement(C.k,null,c.map(({label:V,isActionRelatedToCurrentProperty:fe,actionId:Ie})=>{if(!fe)return e.createElement(Ue,{key:V});const se=[...l.split(".."),Ie,"properties",d,s];if(!$){const Me=y()(M,se,!1);return e.createElement(gt,{key:Ie,justifyContent:"center",alignItems:"center"},e.createElement(w.C,{disabled:o,name:se.join(".."),"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${s} ${V}`}),onValueChange:ts=>{E({target:{name:se.join(".."),value:ts}})},value:Me}))}const ve=y()(M,se,{}),{hasAllActionsSelected:Ve,hasSomeActionsSelected:Se}=Te(ve);return e.createElement(gt,{key:V,justifyContent:"center",alignItems:"center"},e.createElement(w.C,{disabled:o,name:se.join(".."),onValueChange:Me=>{j({target:{name:se.join(".."),value:Me}})},"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${s} ${V}`}),value:Ve,indeterminate:Se}))})))),h&&e.createElement(nn,{childrenForm:L,isFormDisabled:o,parentName:s,pathToDataFromActionRow:l,propertyName:d,propertyActions:c,recursiveLevel:0}))};Je.defaultProps={childrenForm:[],required:!1},Je.propTypes={childrenForm:a().array,label:a().string.isRequired,isFormDisabled:a().bool.isRequired,name:a().string.isRequired,pathToData:a().string.isRequired,propertyActions:a().array.isRequired,propertyName:a().string.isRequired,required:a().bool,isOdd:a().bool.isRequired};const an=(0,e.memo)(Je),ft=(0,f.ZP)(C.k)`
  width: ${U};
  flex-shrink: 0;
`,ln=(0,f.ZP)(C.k)`
  width: ${ye};
  height: ${Ce};
  flex-shrink: 0;
`,ht=({headers:t,label:n})=>{const{formatMessage:o}=(0,H.Z)(),s=o({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:n});return e.createElement(C.k,null,e.createElement(ln,{alignItems:"center",paddingLeft:6},e.createElement(T.Z,{variant:"sigma",textColor:"neutral500"},s)),t.map(i=>i.isActionRelatedToCurrentProperty?e.createElement(ft,{justifyContent:"center",key:i.label},e.createElement(T.Z,{variant:"sigma",textColor:"neutral500"},o({id:`Settings.roles.form.permissions.${i.label.toLowerCase()}`,defaultMessage:i.label}))):e.createElement(ft,{key:i.label})))};ht.propTypes={headers:a().arrayOf(a().shape({label:a().string.isRequired,isActionRelatedToCurrentProperty:a().bool.isRequired})).isRequired,label:a().string.isRequired};const cn=ht,dn=(t,n)=>t.map(o=>{const s=Array.isArray(o.applyToProperties)&&o.applyToProperties.indexOf(n)!==-1&&o.isDisplayed;return{label:o.label,actionId:o.actionId,isActionRelatedToCurrentProperty:s}}),un=f.ZP.div`
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
`,yt=({availableActions:t,childrenForm:n,isFormDisabled:o,label:s,pathToData:i,propertyName:l})=>{const c=(0,e.useMemo)(()=>dn(t,l),[t,l]);return e.createElement(un,null,e.createElement(cn,{label:s,headers:c}),e.createElement(p.x,null,n.map(({children:d,label:m,value:u,required:g},v)=>e.createElement(an,{childrenForm:d,key:u,label:m,isFormDisabled:o,name:u,required:g,propertyActions:c,pathToData:i,propertyName:l,isOdd:v%2===0}))))};yt.propTypes={childrenForm:a().array.isRequired,availableActions:a().array.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,pathToData:a().string.isRequired,propertyName:a().string.isRequired};const mn=yt,pn=f.ZP.div`
  flex-direction: column;
  display: inline-flex;
  min-width: 100%;
  ${({theme:t,isActive:n})=>n&&`border: 1px solid ${t.colors.primary600};`}
`,Ct=({allActions:t,contentTypeName:n,label:o,index:s,isActive:i,isFormDisabled:l,onClickToggleCollapse:c,pathToData:d,properties:m})=>{const u=(0,e.useCallback)(()=>{c(n)},[n,c]),g=(0,e.useMemo)(()=>Xt(t,n),[t,n]);return e.createElement(pn,{isActive:i},e.createElement(Kt,{availableActions:g,isActive:i,isGrey:s%2===0,isFormDisabled:l,label:o,onClickToggle:u,pathToData:d}),i&&m.map(({label:v,value:M,children:N})=>e.createElement(mn,{availableActions:g,childrenForm:N,isFormDisabled:l,label:v,pathToData:d,propertyName:M,key:M})))};Ct.propTypes={allActions:a().array.isRequired,contentTypeName:a().string.isRequired,index:a().number.isRequired,isActive:a().bool.isRequired,isFormDisabled:a().bool.isRequired,label:a().string.isRequired,onClickToggleCollapse:a().func.isRequired,pathToData:a().string.isRequired,properties:a().array.isRequired};const gn=Ct,Qe=({actions:t,isFormDisabled:n,pathToData:o,subjects:s})=>{const[i,l]=(0,e.useState)(null),c=d=>{l(i===d?null:d)};return s.map(({uid:d,label:m,properties:u},g)=>e.createElement(gn,{allActions:t,key:d,contentTypeName:d,label:m,isActive:i===d,isFormDisabled:n,index:g,onClickToggleCollapse:c,pathToData:`${o}..${d}`,properties:u}))};Qe.defaultProps={actions:[],subjects:[]},Qe.propTypes={actions:a().array.isRequired,isFormDisabled:a().bool.isRequired,pathToData:a().string.isRequired,subjects:a().arrayOf(a().shape({uid:a().string.isRequired,label:a().string.isRequired,properties:a().array.isRequired}))};const fn=(0,e.memo)(Qe),hn=t=>t.filter(({subjects:n})=>n&&n.length),yn=t=>t.map(({actionId:n})=>n),Cn=(t,n)=>t.reduce((o,s)=>(Object.keys(n).forEach(i=>{const l=y()(n,[i,s],{}),c={[i]:ze(l)};o[s]?o[s]={...o[s],...c}:o[s]=c}),o),{}),vn=(t,n)=>{const o=yn(t),s=Cn(o,n);return Object.keys(s).reduce((l,c)=>(l[c]=Te(s[c]),l),{})},En=(0,f.ZP)(C.k)`
  width: ${U};
  flex-shrink: 0;
`,qe=({actions:t,isFormDisabled:n,kind:o})=>{const{formatMessage:s}=(0,H.Z)(),{modifiedData:i,onChangeCollectionTypeGlobalActionCheckbox:l}=(0,G.$_)(),c=(0,e.useMemo)(()=>hn(t),[t]),d=(0,e.useMemo)(()=>vn(c,i[o]),[i,c,o]);return e.createElement(p.x,{paddingBottom:4,paddingTop:6,style:{paddingLeft:ye}},e.createElement(C.k,{gap:0},c.map(({label:m,actionId:u})=>e.createElement(En,{direction:"column",alignItems:"center",justifyContent:"center",key:u,gap:3},e.createElement(T.Z,{variant:"sigma",textColor:"neutral500"},s({id:`Settings.roles.form.permissions.${m.toLowerCase()}`,defaultMessage:m})),e.createElement(w.C,{disabled:n,onValueChange:g=>{l(o,u,g)},name:u,"aria-label":s({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:s({id:`Settings.roles.form.permissions.${m.toLowerCase()}`,defaultMessage:m})}),value:y()(d,[u,"hasAllActionsSelected"],!1),indeterminate:y()(d,[u,"hasSomeActionsSelected"],!1)})))))};qe.defaultProps={actions:[]},qe.propTypes={actions:a().arrayOf(a().shape({label:a().string.isRequired,actionId:a().string.isRequired,subjects:a().array.isRequired})),isFormDisabled:a().bool.isRequired,kind:a().string.isRequired};const bn=(0,e.memo)(qe),xn=(0,f.ZP)(p.x)`
  overflow-x: auto;
`,vt=({isFormDisabled:t,kind:n,layout:{actions:o,subjects:s}})=>{const i=F()([...s],"label");return e.createElement(xn,{background:"neutral0"},e.createElement(bn,{actions:o,kind:n,isFormDisabled:t}),e.createElement(fn,{actions:o,isFormDisabled:t,pathToData:n,subjects:i}))};vt.propTypes={isFormDisabled:a().bool.isRequired,kind:a().string.isRequired,layout:a().shape({actions:a().array,subjects:a().arrayOf(a().shape({uid:a().string.isRequired,label:a().string.isRequired,properties:a().array.isRequired}))}).isRequired};const Et=(0,e.memo)(vt);var Rn=r(18542);const bt=({children:t,value:n})=>e.createElement(Rn.$l.Provider,{value:n},t);bt.propTypes={children:a().node.isRequired,value:a().exact({availableConditions:a().array.isRequired,modifiedData:a().object.isRequired,onChangeCollectionTypeLeftActionRowCheckbox:a().func.isRequired,onChangeConditions:a().func.isRequired,onChangeSimpleCheckbox:a().func.isRequired,onChangeParentCheckbox:a().func.isRequired,onChangeCollectionTypeGlobalActionCheckbox:a().func.isRequired}).isRequired};const Pn=bt;var An=r(48734),Tn=r(74756),Sn=r(63081),xt=r(36213),Mn=r(11276),$n=r(67819);const On=(t,n,o)=>t.map(s=>{const i=[...o,s.action,"properties","enabled"],l=y()(n,i,!1),c=y()(n,[...o,s.action,"conditions"],{}),d=ke(c).some(m=>m);return{...s,isDisplayed:l,checkboxName:i.join(".."),hasSomeActionsSelected:l,value:l,hasConditions:d,label:s.displayName,actionId:s.action,pathToConditionsObject:[...o,s.action]}}),Dn=t=>{const n=Object.entries(t).reduce((s,i)=>{const[l,{conditions:c}]=i;return s[l]=c,s},{});return ke(n).some(s=>s)},jn=f.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,Ln=f.ZP.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:t,disabled:n,theme:o})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${n?o.colors.neutral100:o.colors.primary600};
    }
  `}
`,Rt=({categoryName:t,isFormDisabled:n,subCategoryName:o,actions:s,pathToData:i})=>{const[l,c]=(0,e.useState)(!1),{modifiedData:d,onChangeParentCheckbox:m,onChangeSimpleCheckbox:u}=(0,G.$_)(),{formatMessage:g}=(0,H.Z)(),v=y()(d,i,{}),M=(0,e.useMemo)(()=>Object.keys(v).reduce((I,te)=>(I[te]=ze(v[te]),I),{}),[v]),{hasAllActionsSelected:N,hasSomeActionsSelected:j}=Te(M),E=()=>{c(I=>!I)},h=()=>{c(!1)},L=On(s,d,i),$=Dn(y()(d,[...i],{}));return e.createElement(e.Fragment,null,e.createElement(p.x,null,e.createElement(C.k,{justifyContent:"space-between",alignItems:"center"},e.createElement(p.x,{paddingRight:4},e.createElement(T.Z,{variant:"sigma",textColor:"neutral600"},o)),e.createElement(jn,null),e.createElement(p.x,{paddingLeft:4},e.createElement(xt.X,{name:i.join(".."),disabled:n,onValueChange:I=>{m({target:{name:i.join(".."),value:I}})},indeterminate:j,value:N},g({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(C.k,{paddingTop:6,paddingBottom:6},e.createElement(Mn.r,{gap:2,style:{flex:1}},L.map(({checkboxName:I,value:te,action:K,displayName:J,hasConditions:V})=>e.createElement($n.P,{col:3,key:K},e.createElement(Ln,{disabled:n,hasConditions:V},e.createElement(xt.X,{name:I,disabled:n,onValueChange:fe=>{u({target:{name:I,value:fe}})},value:te},J))))),e.createElement(oe,{hasConditions:$,onClick:E}))),l&&e.createElement(W,{headerBreadCrumbs:[t,o],actions:L,isFormDisabled:n,onClosed:h,onToggle:E}))};Rt.propTypes={actions:a().array.isRequired,categoryName:a().string.isRequired,isFormDisabled:a().bool.isRequired,subCategoryName:a().string.isRequired,pathToData:a().array.isRequired};const kn=Rt,_e=({childrenForm:t,kind:n,name:o,isOpen:s,isFormDisabled:i,isWhite:l,onOpenCategory:c,pathToData:d})=>{const{formatMessage:m}=(0,H.Z)(),u=()=>{c(o)},g=(0,e.useMemo)(()=>o.split("::").pop(),[o]);return e.createElement(An.U,{expanded:s,onToggle:u,id:`accordion-${o}`,variant:l?"primary":"secondary"},e.createElement(Tn.B,{title:de()(g),description:`${m({id:"Settings.permissions.category"},{category:g})} ${n==="plugins"?"plugin":n}`}),e.createElement(Sn.v,null,e.createElement(p.x,{padding:6},t.map(({actions:v,subCategoryName:M,subCategoryId:N})=>e.createElement(kn,{key:M,actions:v,categoryName:g,isFormDisabled:i,subCategoryName:M,pathToData:[...d,N]})))))};_e.defaultProps={},_e.propTypes={childrenForm:a().array.isRequired,isOpen:a().bool.isRequired,isFormDisabled:a().bool.isRequired,isWhite:a().bool.isRequired,kind:a().string.isRequired,name:a().string.isRequired,onOpenCategory:a().func.isRequired,pathToData:a().array.isRequired};const In=_e,Pt=({isFormDisabled:t,kind:n,layout:o})=>{const[s,i]=(0,e.useState)(null),l=c=>{i(c===s?null:c)};return e.createElement(p.x,{padding:6,background:"neutral0"},o.map(({category:c,categoryId:d,childrenForm:m},u)=>e.createElement(In,{key:c,childrenForm:m,kind:n,isFormDisabled:t,isOpen:s===c,isWhite:u%2===1,name:c,onOpenCategory:l,pathToData:[n,d]})))};Pt.propTypes={isFormDisabled:a().bool.isRequired,kind:a().string.isRequired,layout:a().arrayOf(a().shape({category:a().string.isRequired,categoryId:a().string.isRequired,childrenForm:a().arrayOf(a().shape({actions:a().array.isRequired})).isRequired}).isRequired).isRequired};const At=Pt;var Zn=r(82492),Bn=r.n(Zn),Fn=r(36968),ge=r.n(Fn);const Tt=(t,n,o)=>t.find(s=>s.action===n&&s.subject===o),St=(t,n=[])=>t.reduce((o,s)=>(o[s.id]=n.indexOf(s.id)!==-1,o),{}),Mt=({children:t},n,o="")=>t.reduce((s,i)=>{if(i.children)return{...s,[i.value]:Mt(i,n,`${o}${i.value}.`)};const l=n.indexOf(`${o}${i.value}`)!==-1;return s[i.value]=l,s},{}),Nn=(t,n,o)=>t.reduce((s,i)=>{const l=n.properties.find(({value:c})=>c===i);if(l){const c=y()(o,["properties",l.value],[]),d=Mt(l,c);s.properties[i]=d}return s},{properties:{}}),Wn=(t,n)=>n.reduce((o,s)=>{const i=t.find(({uid:l})=>l===s)||null;return i&&(o[s]=i),o},{}),$t=({subjects:t},n,o,s=[])=>n.reduce((i,l)=>{const c=l.subjects,d=Wn(t,c);if(D()(d))return i;const m=Object.keys(d).reduce((u,g)=>{const{actionId:v,applyToProperties:M}=l,E=d[g].properties.map(({value:I})=>I).every(I=>(M||[]).indexOf(I)===-1),h=Tt(s,v,g),L=St(o,y()(h,"conditions",[]));if(D()(M)||E)return ge()(u,[g,v],{properties:{enabled:h!==void 0},conditions:L}),u;const $=Nn(M,d[g],h);return ge()(u,[g,v],{...$,conditions:L}),u},{});return Bn()(i,m)},{}),Vn=(t,n,o)=>t.reduce((s,i)=>{const l=Tt(o,i.action,null);return s[i.action]={properties:{enabled:l!==void 0},conditions:St(n,l?.conditions??[])},s},{}),Hn=(t,n,o)=>t.reduce((s,i)=>(s[i.subCategoryId]=Vn(i.actions,n,o),s),{}),Ot=(t,n,o=[])=>t.reduce((s,{categoryId:i,childrenForm:l})=>{const c=Hn(l,n,o);return s[i]=c,s},{}),Dt=t=>t.split(" ").join("-"),jt=(t,n)=>Object.entries(ce()(t,n)).map(([o,s])=>({category:o,categoryId:Dt(o),childrenForm:Object.entries(ce()(s,"subCategory")).map(([i,l])=>({subCategoryName:i,subCategoryId:Dt(i),actions:l}))})),Gn=(t,n)=>{const{conditions:o,sections:{collectionTypes:s,singleTypes:i,plugins:l,settings:c}}=t,d={collectionTypes:s,singleTypes:i,plugins:jt(l,"plugin"),settings:jt(c,"category")},m={collectionTypes:$t(s,s.actions||[],o,n),singleTypes:$t(i,i.actions||[],o,n),plugins:Ot(d.plugins,o,n),settings:Ot(d.settings,o,n)};return{initialData:m,modifiedData:m,layouts:d}};var Un=r(50361),et=r.n(Un);const Lt=t=>Object.keys(t).reduce((n,o)=>{const s=t[o];if(be()(s)&&!S()(s,"conditions"))return{...n,[o]:Lt(s)};if(be()(s)&&S()(s,"conditions")&&!ke(Y()(s,"conditions")).some(l=>l)){const l=Object.keys(s.conditions).reduce((c,d)=>(c[d]=!1,c),{});return{...n,[o]:{...s,conditions:l}}}return n[o]=s,n},{}),tt=Lt,kt=(t,n,o=!1)=>Object.keys(t).reduce((s,i)=>{const l=t[i];return i==="conditions"&&!o?(s[i]=l,s):be()(l)?{...s,[i]:kt(l,n,i==="fields")}:(s[i]=n,s)},{}),Ge=kt,Kn={initialData:{},modifiedData:{},layouts:{}},zn=(t,n)=>(0,Q.ZP)(t,o=>{switch(n.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:s,actionId:i,value:l}=n,c=["modifiedData",s];Object.keys(y()(t,c)).forEach(d=>{const m=y()(t,[...c,d,i],void 0);if(m){let u=Ge(m,l);if(!l&&u.conditions){const g=Ge(u.conditions,!1);u={...u,conditions:g}}ge()(o,[...c,d,i],u)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:s,propertyName:i,rowName:l,value:c}=n;let d=et()(t.modifiedData);const m=s.split(".."),u=y()(d,m,{});Object.keys(u).forEach(g=>{if(S()(u[g],`properties.${i}`)){const v=y()(u,[g,"properties",i,l]),M=[...m,g,"properties",i,l];if(!be()(v))ge()(d,M,c);else{const N=Ge(v,c);ge()(d,M,N)}}}),c||(d=tt(d)),ge()(o,"modifiedData",d);break}case"ON_CHANGE_CONDITIONS":{Object.entries(n.conditions).forEach(s=>{const[i,l]=s;ge()(o,["modifiedData",...i.split(".."),"conditions"],l)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let s=et()(t.modifiedData);ge()(s,[...n.keys.split("..")],n.value),n.value||(s=tt(s)),ge()(o,"modifiedData",s);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:s,value:i}=n,l=[...s.split("..")];let c=et()(t.modifiedData);const d=y()(c,l,{}),m=Ge(d,i);ge()(c,l,m),i||(c=tt(c)),ge()(o,["modifiedData"],c);break}case"RESET_FORM":{o.modifiedData=t.initialData;break}case"SET_FORM_AFTER_SUBMIT":{o.initialData=t.modifiedData;break}default:return o}}),nt=t=>Object.entries(t).filter(([,n])=>n).map(([n])=>n),Xn=t=>{const[n,{conditions:o}]=t;return{action:n,subject:null,conditions:nt(o),properties:{}}},wn=t=>Object.values(t).reduce((n,o)=>{const s=Object.entries(o).reduce((i,l)=>{const[,{properties:{enabled:c}}]=l;if(!c)return i;const d=Xn(l);return i.push(d),i},[]);return[...n,...s]},[]),It=t=>Object.values(t).reduce((n,o)=>{const s=wn(o);return[...n,...s]},[]),Zt=(t,n="")=>Object.entries(t).reduce((o,s)=>{const[i,l]=s;return be()(l)?[...o,...Zt(l,`${n}${i}.`)]:(l&&!be()(l)&&o.push(`${n}${i}`),o)},[]),Yn=(t,n,{conditions:o,properties:s})=>Object.entries(s).reduce((i,l)=>{const[c,d]=l;return i.properties[c]=Zt(d),i},{action:t,subject:n,conditions:nt(o),properties:{}}),Jn=(t,n,{conditions:o})=>({action:t,subject:n,properties:{},conditions:nt(o)}),Qn=(t,n)=>Object.entries(n).reduce((s,i)=>{const[l,c]=i;if(!ke(c).some(u=>u))return s;if(!c?.properties?.enabled){const u=Yn(l,t,c);return[...s,u]}if(!c.properties.enabled)return s;const m=Jn(l,t,c);return s.push(m),s},[]),Bt=t=>Object.entries(t).reduce((o,s)=>{const[i,l]=s,c=Qn(i,l);return[...o,...c]},[]),qn=t=>{const n=It(t.plugins),o=It(t.settings),s=Bt(t.collectionTypes),i=Bt(t.singleTypes);return[...n,...o,...s,...i]},_n=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],st=(0,e.forwardRef)(({layout:t,isFormDisabled:n,permissions:o},s)=>{const[{initialData:i,layouts:l,modifiedData:c},d]=(0,e.useReducer)(zn,Kn,()=>Gn(t,o)),{formatMessage:m}=(0,H.Z)();(0,e.useImperativeHandle)(s,()=>({getPermissions(){const j=(0,Z.e5)(i.collectionTypes,c.collectionTypes),E=(0,Z.e5)(i.singleTypes,c.singleTypes),h={...j,...E};let L;return D()(h)?L=!1:L=Object.values(h).some($=>Object.values($).some(I=>S()(I,"conditions"))),{permissionsToSend:qn(c),didUpdateConditions:L}},resetForm(){d({type:"RESET_FORM"})},setFormAfterSubmit(){d({type:"SET_FORM_AFTER_SUBMIT"})}}));const u=(j,E,h,L)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:j,propertyName:E,rowName:h,value:L})},g=(j,E,h)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:j,actionId:E,value:h})},v=j=>{d({type:"ON_CHANGE_CONDITIONS",conditions:j})},M=(0,e.useCallback)(({target:{name:j,value:E}})=>{d({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:j,value:E})},[]),N=(0,e.useCallback)(({target:{name:j,value:E}})=>{d({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:j,value:E})},[]);return e.createElement(Pn,{value:{availableConditions:t.conditions,modifiedData:c,onChangeConditions:v,onChangeSimpleCheckbox:M,onChangeParentCheckbox:N,onChangeCollectionTypeLeftActionRowCheckbox:u,onChangeCollectionTypeGlobalActionCheckbox:g}},e.createElement(b.v,{id:"tabs",label:m({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"})},e.createElement(P.m,null,_n.map(j=>e.createElement(P.O,{key:j.id},m({id:j.labelId,defaultMessage:j.defaultMessage})))),e.createElement(R.n,{style:{position:"relative"}},e.createElement(R.x,null,e.createElement(Et,{layout:l.collectionTypes,kind:"collectionTypes",isFormDisabled:n})),e.createElement(R.x,null,e.createElement(Et,{layout:l.singleTypes,kind:"singleTypes",isFormDisabled:n})),e.createElement(R.x,null,e.createElement(At,{layout:l.plugins,kind:"plugins",isFormDisabled:n})),e.createElement(R.x,null,e.createElement(At,{layout:l.settings,kind:"settings",isFormDisabled:n})))))});st.defaultProps={permissions:[],layout:{conditions:[],sections:{collectionTypes:{},singleTypes:{actions:[]},settings:[],plugins:[]}}},st.propTypes={layout:a().object,isFormDisabled:a().bool.isRequired,permissions:a().array};const es=(0,e.memo)(st)},63727:(X,B,r)=>{"use strict";r.r(B),r.d(B,{default:()=>T});var e=r(53547),b=r(57993),P=r(86706),R=r(16550),Z=r(36364),O=r(185),S=r(53979),x=r(11047),D=r(29728),q=r(49066),a=r(41580),H=r(67109),p=r(41054),A=r(27361),F=r.n(A),f=r(86896),C=r(14900),w=r(442),ue=r(75515),ae=r(11276),ie=r(67819),y=r(16364),le=r(61467),Y=r(45697),G=r.n(Y);const _=({disabled:ne,role:z,values:k,errors:Q,onChange:pe,onBlur:ce})=>{const{formatMessage:ee}=(0,f.Z)();return e.createElement(a.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(x.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(x.k,{justifyContent:"space-between"},e.createElement(a.x,null,e.createElement(a.x,null,e.createElement(ue.Z,{fontWeight:"bold"},z?z.name:ee({id:"global.details",defaultMessage:"Details"}))),e.createElement(a.x,null,e.createElement(ue.Z,{textColor:"neutral500",variant:"pi"},z?z.description:ee({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(D.z,{disabled:!0,variant:"secondary"},ee({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:z.usersCount}))),e.createElement(ae.r,{gap:4},e.createElement(ie.P,{col:6},e.createElement(y.o,{disabled:ne,name:"name",error:Q.name&&ee({id:Q.name}),label:ee({id:"global.name",defaultMessage:"Name"}),onChange:pe,onBlur:ce,value:k.name||""})),e.createElement(ie.P,{col:6},e.createElement(le.g,{disabled:ne,label:ee({id:"global.description",defaultMessage:"Description"}),id:"description",error:Q.name&&ee({id:Q.name}),onChange:pe,onBlur:ce},k.description||"")))))};_.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},_.propTypes={disabled:G().bool,errors:G().object.isRequired,onBlur:G().func.isRequired,onChange:G().func.isRequired,role:G().object,values:G().object};const xe=_;var me=r(87561);const oe=me.Ry().shape({name:me.Z_().required(b.I0.required)}),Ee=()=>{const ne=(0,b.lm)(),{formatMessage:z}=(0,f.Z)(),{params:{id:k}}=(0,R.$B)("/settings/roles/:id"),[Q,pe]=(0,e.useState)(!1),ce=(0,e.useRef)(),{lockApp:ee,unlockApp:de}=(0,b.o1)(),{trackUsage:Ze}=(0,b.rS)(),{isLoading:Ae,data:Be}=(0,C.U_)(k),{role:he,permissions:Oe,isLoading:De,onSubmitSucceeded:Fe}=(0,C.Dq)(k),{put:je}=(0,b.kY)(),He=async re=>{try{ee(),pe(!0);const{permissionsToSend:W,didUpdateConditions:U}=ce.current.getPermissions();await je(`/admin/roles/${k}`,re),he.code!=="strapi-super-admin"&&(await je(`/admin/roles/${k}/permissions`,{permissions:W}),U&&Ze("didUpdateConditions")),ce.current.setFormAfterSubmit(),Fe({name:re.name,description:re.description}),ne({type:"success",message:{id:"notification.success.saved"}})}catch(W){console.error(W.response);const U=F()(W,"response.payload.message","An error occured"),ye=F()(W,"response.payload.data.permissions[0]",U);ne({type:"warning",message:ye})}finally{pe(!1),de()}},Le=he.code==="strapi-super-admin";return e.createElement(O.o,null,e.createElement(b.SL,{name:"Roles"}),e.createElement(p.J9,{enableReinitialize:!0,initialValues:{name:he.name,description:he.description},onSubmit:He,validationSchema:oe,validateOnChange:!1},({handleSubmit:re,values:W,errors:U,handleChange:ye,handleBlur:Ce})=>e.createElement("form",{onSubmit:re},e.createElement(S.T,{primaryAction:e.createElement(x.k,{gap:2},e.createElement(D.z,{disabled:he.code==="strapi-super-admin",onClick:re,loading:Q,size:"L"},z({id:"global.save",defaultMessage:"Save"}))),title:z({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:z({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(b.rU,{startIcon:e.createElement(H.Z,null),to:"/settings/roles"},z({id:"global.back",defaultMessage:"Back"}))}),e.createElement(q.D,null,e.createElement(x.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(xe,{isLoading:De,disabled:Le,errors:U,values:W,onChange:ye,onBlur:Ce,role:he}),!Ae&&!De?e.createElement(a.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(w.Z,{isFormDisabled:Le,permissions:Oe,ref:ce,layout:Be})):e.createElement(a.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(b.dO,null)))))))},T=()=>{const ne=(0,P.v9)(Z._),{isLoading:z,allowedActions:{canRead:k,canUpdate:Q}}=(0,b.ss)({read:ne.settings.roles.read,update:ne.settings.roles.update});return z?e.createElement(b.dO,null):!k&&!Q?e.createElement(R.l_,{to:"/"}):e.createElement(Ee,null)}},44174:X=>{function B(r,e,b,P){for(var R=-1,Z=r==null?0:r.length;++R<Z;){var O=r[R];e(P,O,b(O),r)}return P}X.exports=B},81119:(X,B,r)=>{var e=r(89881);function b(P,R,Z,O){return e(P,function(S,x,D){R(O,S,Z(S),D)}),O}X.exports=b},55189:(X,B,r)=>{var e=r(44174),b=r(81119),P=r(67206),R=r(1469);function Z(O,S){return function(x,D){var q=R(x)?e:b,a=S?S():{};return q(x,O,P(D,2),a)}}X.exports=Z},42348:(X,B,r)=>{var e=r(21078),b=1/0;function P(R){var Z=R==null?0:R.length;return Z?e(R,b):[]}X.exports=P},7739:(X,B,r)=>{var e=r(89465),b=r(55189),P=Object.prototype,R=P.hasOwnProperty,Z=b(function(O,S,x){R.call(O,x)?O[x].push(S):e(O,x,[S])});X.exports=Z},48734:(X,B,r)=>{"use strict";r.d(B,{U:()=>H,y:()=>q});var e=r(85893),b=r(53547),P=r(88972),R=r(13819),Z=r(2504),O=r(75515),S=r(11047),x=r(41580);const D=({theme:p,expanded:A,variant:F,disabled:f,error:C})=>C?`1px solid ${p.colors.danger600} !important`:f?`1px solid ${p.colors.neutral150}`:A?`1px solid ${p.colors.primary600}`:F==="primary"?`1px solid ${p.colors.neutral0}`:`1px solid ${p.colors.neutral100}`,q=(0,P.ZP)(O.Z)``,a=(0,P.ZP)(x.x)`
  border: ${D};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:p})=>p.colors.primary600};

    ${q} {
      color: ${({theme:p,expanded:A})=>A?void 0:p.colors.primary700};
    }

    ${O.Z} {
      color: ${({theme:p,expanded:A})=>A?void 0:p.colors.primary600};
    }

    & > ${S.k} {
      background: ${({theme:p})=>p.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:p})=>p.colors.primary200};
    }
  }
`,H=({children:p,disabled:A=!1,error:F,expanded:f=!1,hasErrorMessage:C=!0,id:w,onToggle:ue,toggle:ae,size:ie="M",variant:y="primary",shadow:le})=>{const Y=(0,Z.M)(w),G=b.useMemo(()=>({expanded:f,onToggle:ue,toggle:ae,id:Y,size:ie,variant:y,disabled:A}),[A,f,Y,ue,ie,ae,y]);return(0,e.jsxs)(R.S.Provider,{value:G,children:[(0,e.jsx)(a,{"data-strapi-expanded":f,disabled:A,"aria-disabled":A,expanded:f,hasRadius:!0,variant:y,error:F,shadow:le,children:p}),F&&C&&(0,e.jsx)(x.x,{paddingTop:1,children:(0,e.jsx)(O.Z,{variant:"pi",textColor:"danger600",children:F})})]})}},63081:(X,B,r)=>{"use strict";r.d(B,{v:()=>R});var e=r(85893),b=r(13819),P=r(41580);const R=({children:Z,...O})=>{const{expanded:S,id:x}=(0,b.A)();if(!S)return null;const D=`accordion-content-${x}`,q=`accordion-label-${x}`,a=`accordion-desc-${x}`;return(0,e.jsx)(P.x,{role:"region",id:D,"aria-labelledby":q,"aria-describedby":a,...O,children:Z})}},13819:(X,B,r)=>{"use strict";r.d(B,{A:()=>P,S:()=>b});var e=r(53547);const b=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),P=()=>(0,e.useContext)(b)},74756:(X,B,r)=>{"use strict";r.d(B,{B:()=>p});var e=r(85893),b=r(12645),P=r(88972),R=r(48734),Z=r(13819);const O=({expanded:A,disabled:F,variant:f})=>{let C="neutral100";return A?C="primary100":F?C="neutral150":f==="primary"&&(C="neutral0"),C};var S=r(39785),x=r(52624),D=r(11047),q=r(75515);const a=(0,P.ZP)(S.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:A,expanded:F})=>F?A.colors.primary600:A.colors.neutral500};
    }
  }
`,H=(0,P.ZP)(D.k)`
  min-height: ${({theme:A,size:F})=>A.sizes.accordions[F]};
  border-radius: ${({theme:A,expanded:F})=>F?`${A.borderRadius} ${A.borderRadius} 0 0`:A.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:A})=>A.colors.primary600};
      }
    }
  }
`,p=({title:A,description:F,as:f="span",togglePosition:C="right",action:w,...ue})=>{const{onToggle:ae,toggle:ie,expanded:y,id:le,size:Y,variant:G,disabled:_}=(0,Z.A)(),xe=`accordion-content-${le}`,me=`accordion-label-${le}`,Re=`accordion-desc-${le}`,oe=Y==="M"?6:4,Pe=Y==="M"?oe:oe-2,Ee=O({expanded:y,disabled:_,variant:G}),$e={as:f,fontWeight:Y==="S"?"bold":void 0,id:me,textColor:y?"primary600":"neutral700",ellipsis:!0,variant:Y==="M"?"delta":void 0},T=y?"primary600":"neutral600",ne=y?"primary200":"neutral200",z=Y==="M"?`${32/16}rem`:`${24/16}rem`,k=()=>{_||(ie&&!ae?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),ie()):ae&&ae())},Q=(0,e.jsx)(D.k,{justifyContent:"center",borderRadius:"50%",height:z,width:z,transform:y?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:ne,cursor:_?"not-allowed":"pointer",onClick:k,shrink:0,children:(0,e.jsx)(x.J,{as:b.Z,width:Y==="M"?`${11/16}rem`:`${8/16}rem`,color:y?"primary600":"neutral600"})});return(0,e.jsx)(H,{paddingBottom:Pe,paddingLeft:oe,paddingRight:oe,paddingTop:Pe,background:Ee,expanded:y,size:Y,justifyContent:"space-between",cursor:_?"not-allowed":"",children:(0,e.jsxs)(D.k,{gap:3,flex:1,maxWidth:"100%",children:[C==="left"&&Q,(0,e.jsx)(a,{onClick:k,"aria-disabled":_,"aria-expanded":y,"aria-controls":xe,"aria-labelledby":me,"data-strapi-accordion-toggle":!0,expanded:y,type:"button",flex:1,minWidth:0,...ue,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(R.y,{...$e,children:A}),F&&(0,e.jsx)(q.Z,{as:"p",id:Re,textColor:T,children:F})]})}),C==="right"&&(0,e.jsxs)(D.k,{gap:3,children:[Q,w]}),C==="left"&&w]})})}},38953:(X,B,r)=>{"use strict";r.d(B,{Q:()=>R});var e=r(85893),b=r(88972),P=r(67730);const R=({options:O,...S})=>(0,e.jsx)(P.NU,{...S,children:O.map(x=>"children"in x?(0,e.jsx)(P.Ab,{label:x.label,values:x.children.map(D=>D.value.toString()),children:x.children.map(D=>(0,e.jsx)(Z,{value:D.value,children:D.label},D.value))},x.label):(0,e.jsx)(P.ML,{value:x.value,children:x.label},x.value))}),Z=(0,b.ZP)(P.ML)`
  padding-left: ${({theme:O})=>O.spaces[7]};
`}}]);
