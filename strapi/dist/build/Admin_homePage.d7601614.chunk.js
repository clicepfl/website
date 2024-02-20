"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[3981],{89687:(j,E,n)=>{n.r(E),n.d(E,{HomePageCE:()=>z,default:()=>Qe});var e=n(53547),r=n(41580),x=n(17034),M=n(185),Z=n(11276),C=n(67819),s=n(57993),H=n(64593),D=n(50841),k=n(86896),O=n(680);function K(t,l){var a=t.values,i=(0,D._T)(t,["values"]),d=l.values,u=(0,D._T)(l,["values"]);return(0,O.wU)(d,a)&&(0,O.wU)(i,u)}function I(t){var l=(0,k.Z)(),a=l.formatMessage,i=l.textComponent,d=i===void 0?e.Fragment:i,u=t.id,w=t.description,P=t.defaultMessage,f=t.values,g=t.children,v=t.tagName,S=v===void 0?d:v,A=t.ignoreTag,Ne={id:u,description:w,defaultMessage:P},b=a(Ne,f,{ignoreTag:A});return typeof g=="function"?g(Array.isArray(b)?b:[b]):S?e.createElement(S,null,e.Children.toArray(b)):e.createElement(e.Fragment,null,b)}I.displayName="FormattedMessage";var W=e.memo(I,K);W.displayName="MemoizedFormattedMessage";const Q=W;var N=n(16550),m=n(88972),p=n(11047),y=n(75515),V=n(29728),G=n(37323),$=n(99571),Y=n(45697),c=n.n(Y),h=n(16334),J=n(43234),X=n(2364);const L=({type:t,title:l,number:a,content:i,hasLine:d})=>{const{formatMessage:u}=(0,k.Z)();return e.createElement(r.x,null,e.createElement(p.k,null,e.createElement(r.x,{minWidth:(0,s.Q1)(30),marginRight:5},e.createElement(X.Z,{type:t,number:a})),e.createElement(y.Z,{variant:"delta",as:"h3"},u(l))),e.createElement(p.k,{alignItems:"flex-start"},e.createElement(p.k,{justifyContent:"center",minWidth:(0,s.Q1)(30),marginBottom:3,marginTop:3,marginRight:5},d&&e.createElement(J.Z,{type:t,minHeight:t===h.lW?(0,s.Q1)(85):(0,s.Q1)(65)})),e.createElement(r.x,{marginTop:2},t===h.lW&&i)))};L.defaultProps={content:void 0,number:void 0,type:h.VM,hasLine:!0},L.propTypes={content:c().node,number:c().number,title:c().shape({id:c().string,defaultMessage:c().string}).isRequired,type:c().oneOf([h.lW,h.hx,h.VM]),hasLine:c().bool};const q=L,_=(t,l)=>t===-1||l<t?h.hx:l>t?h.VM:h.lW,T=({sections:t,currentSectionKey:l})=>{const a=t.findIndex(i=>i.key===l);return e.createElement(r.x,null,t.map((i,d)=>e.createElement(q,{key:i.key,title:i.title,content:i.content,number:d+1,type:_(a,d),hasLine:d!==t.length-1})))};T.defaultProps={currentSectionKey:void 0},T.propTypes={sections:c().arrayOf(c().shape({key:c().string.isRequired,title:c().shape({id:c().string,defaultMessage:c().string}).isRequired,content:c().node})).isRequired,currentSectionKey:c().string};const ee=T,te=()=>{const{guidedTourState:t,setSkipped:l}=(0,s.c1)(),{formatMessage:a}=(0,k.Z)(),{trackUsage:i}=(0,s.rS)(),d=Object.entries($.Z).map(([f,g])=>({key:f,title:g.home.title,content:e.createElement(s.Qj,{onClick:()=>i(g.home.trackingEvent),to:g.home.cta.target,endIcon:e.createElement(G.Z,null)},a(g.home.cta.title))})),w=d.map(f=>({isDone:Object.entries(t[f.key]).every(([,g])=>g),...f})).find(f=>!f.isDone)?.key,P=()=>{l(!0),i("didSkipGuidedtour")};return e.createElement(r.x,{hasRadius:!0,shadow:"tableShadow",paddingTop:7,paddingRight:4,paddingLeft:7,paddingBottom:4,background:"neutral0"},e.createElement(p.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(y.Z,{variant:"beta",as:"h2"},a({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"})),e.createElement(ee,{sections:d,currentSectionKey:w})),e.createElement(p.k,{justifyContent:"flex-end"},e.createElement(V.z,{variant:"tertiary",onClick:P},a({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"}))))},ne=t=>Object.entries(t).every(([,l])=>Object.entries(l).every(([,a])=>a));var ae=n(92686),oe=n(80902);const le=n.p+"7e9af4fb7e723fcebf1f.svg";var o=n(85893);const se=t=>(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...t,children:[(0,o.jsx)("path",{fill:"#4945FF",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,o.jsx)("path",{fill:"#fff",d:"M15.733 8c.343 0 .678.108.963.31.285.202.507.49.639.826.13.337.165.707.098 1.064a1.879 1.879 0 0 1-.474.942 1.705 1.705 0 0 1-.887.504 1.64 1.64 0 0 1-1.002-.105 1.76 1.76 0 0 1-.778-.678A1.924 1.924 0 0 1 14 9.841a1.9 1.9 0 0 1 .508-1.302c.325-.345.766-.539 1.225-.539ZM20 24h-8v-2.265h2.933v-6.23H12.8v-2.266h4.267v8.495H20V24Z"})]}),ie=se,re=t=>(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...t,children:[(0,o.jsx)("path",{fill:"#D9822F",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,o.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M17.143 18.659v2.912l6.856-3.878v-2.815L17.143 11v2.906l4.16 2.38-4.16 2.373Zm-2.287 0-4.16-2.374 4.16-2.38V11L8 14.877v2.816l6.856 3.878v-2.912Z",clipRule:"evenodd"})]}),ce=re,de=t=>(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...t,children:[(0,o.jsx)("path",{fill:"#66B7F1",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,o.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M12 10.921a.5.5 0 0 1 .773-.419l8.582 5.579a.5.5 0 0 1 0 .838l-8.582 5.579a.5.5 0 0 1-.773-.42V10.922Z",clipRule:"evenodd"})]}),me=de,pe=t=>(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...t,children:[(0,o.jsx)("path",{fill:"#9736E8",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,o.jsx)("path",{fill:"#fff",d:"M18.037 11.774a28.578 28.578 0 0 0-2.948 2.706c-1.995 2.109-3.55 4.093-4.761 6.06-.289.469-.574.945-.855 1.418a9.074 9.074 0 0 0-.463 1.536c-.074.37.275.68.577.395.312-.299.587-.64.851-.985.467-.608.906-1.237 1.342-1.867 3.37.242 7.27-2.048 8.933-4.857a.196.196 0 0 0 .017-.167.183.183 0 0 0-.114-.118c-.809-.27-1.798-.44-2.207-.462-.017 0-.034-.014-.037-.035a.039.039 0 0 1 .024-.043c1.113-.58 1.924-.647 2.877-.505.07.01.134-.046.16-.114.095-.217.356-.87.537-1.404a.201.201 0 0 0-.087-.239c-.71-.384-1.656-.643-2.035-.682-.017 0-.03-.018-.034-.036a.039.039 0 0 1 .024-.043c1.1-.483 1.485-.497 2.364-.302.087.018.17-.05.19-.142.433-1.714.574-3.197.608-3.68a.21.21 0 0 0-.057-.157.177.177 0 0 0-.148-.05c-2.444.356-4.403.865-6.093 1.55-.057.022-.11.072-.11.136.144.551-.242 1.209-.845 1.703a.042.042 0 0 1-.044.018.046.046 0 0 1-.027-.043c.004-.046.158-.665.067-1.116-.013-.064-.033-.125-.084-.16a.173.173 0 0 0-.17-.014c-7.924 3.811-5.922 10.098-5.922 10.098.01.004.02.004.03.007.895-1.86 1.904-3.232 3.49-5.035 1.178-1.337 2.331-2.425 3.525-3.325.75-.565 2.448-1.738 3.51-2.144a.285.285 0 0 1 .105-.021c.097 0 .177.064.2.16a.264.264 0 0 1-.046.228l-2.344 1.731Z"})]}),ue=pe,ge=n.p+"27d16aefee06412db90a.png",he=n.p+"bb4d0d527bdfb161bc5a.svg",fe=n.p+"bb3108f7fd1e6179bde1.svg",ve=m.ZP.a`
  text-decoration: none;
`,Ee=(0,m.ZP)(r.x)`
  background-image: url(${({backgroundImage:t})=>t});
`,xe=(0,m.ZP)(p.k)`
  background: rgba(255, 255, 255, 0.3);
`,ye=()=>{const{formatMessage:t}=(0,k.Z)(),{trackUsage:l}=(0,s.rS)();return e.createElement(ve,{href:"https://cloud.strapi.io",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>{l("didClickOnTryStrapiCloudSection")}},e.createElement(p.k,{shadow:"tableShadow",hasRadius:!0,padding:6,background:"neutral0",position:"relative",gap:6},e.createElement(Ee,{backgroundImage:ge,hasRadius:!0,padding:3},e.createElement(xe,{width:(0,s.Q1)(32),height:(0,s.Q1)(32),justifyContent:"center",hasRadius:!0,alignItems:"center"},e.createElement("img",{src:fe,alt:t({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"})}))),e.createElement(p.k,{gap:1,direction:"column",alignItems:"start"},e.createElement(p.k,null,e.createElement(y.Z,{fontWeight:"semiBold",variant:"pi"},t({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"}))),e.createElement(y.Z,{textColor:"neutral600"},t({id:"app.components.BlockLink.cloud.content",defaultMessage:"A fully composable, and collaborative platform to boost your team velocity."})),e.createElement(r.x,{src:he,position:"absolute",top:0,right:0,as:"img"}))))},B=m.ZP.a`
  text-decoration: none;
`,Me=()=>{const{formatMessage:t}=(0,k.Z)(),{trackUsage:l}=(0,s.rS)(),a=i=>{l(i)};return e.createElement(p.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(ye,null),e.createElement(B,{href:"https://strapi.io/resource-center",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>a("didClickonReadTheDocumentationSection")},e.createElement(s.Y_,{title:t({id:"global.documentation",defaultMessage:"Documentation"}),subtitle:t({id:"app.components.BlockLink.documentation.content",defaultMessage:"Discover the essential concepts, guides and instructions."}),icon:e.createElement(ie,null),iconBackground:"primary100"})),e.createElement(B,{href:"https://strapi.io/starters",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>a("didClickonCodeExampleSection")},e.createElement(s.Y_,{title:t({id:"app.components.BlockLink.code",defaultMessage:"Code example"}),subtitle:t({id:"app.components.BlockLink.code.content",defaultMessage:"Learn by using ready-made starters for your projects."}),icon:e.createElement(ce,null),iconBackground:"warning100"})),e.createElement(B,{href:"https://strapi.io/blog/categories/tutorials",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>a("didClickonTutorialSection")},e.createElement(s.Y_,{title:t({id:"app.components.BlockLink.tutorial",defaultMessage:"Tutorials"}),subtitle:t({id:"app.components.BlockLink.tutorial.content",defaultMessage:"Follow step-by-step instructions to use and customize Strapi."}),icon:e.createElement(me,null),iconBackground:"secondary100"})),e.createElement(B,{href:"https://strapi.io/blog",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>a("didClickonBlogSection")},e.createElement(s.Y_,{title:t({id:"app.components.BlockLink.blog",defaultMessage:"Blog"}),subtitle:t({id:"app.components.BlockLink.blog.content",defaultMessage:"Read the latest news about Strapi and the ecosystem."}),icon:e.createElement(ue,null),iconBackground:"alternative100"})))};var U=n(36182);const ke=(0,m.ZP)(y.Z)`
  word-break: break-word;
`,F=({hasCreatedContentType:t,onCreateCT:l})=>{const{formatMessage:a}=(0,k.Z)();return e.createElement("div",null,e.createElement(r.x,{paddingLeft:6,paddingBottom:10},e.createElement(p.k,{direction:"column",alignItems:"flex-start",gap:5},e.createElement(y.Z,{as:"h1",variant:"alpha"},a(t?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome \u{1F44B}"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})),e.createElement(ke,{textColor:"neutral600",variant:"epsilon"},a(t?{id:"app.components.HomePage.welcomeBlock.content.again",defaultMessage:"We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."}:{id:"app.components.HomePage.welcomeBlock.content",defaultMessage:"Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"})),t?e.createElement(U.r,{isExternal:!0,href:"https://strapi.io/blog"},a({id:"app.components.HomePage.button.blog",defaultMessage:"See more on the blog"})):e.createElement(V.z,{size:"L",onClick:l,endIcon:e.createElement(G.Z,null)},a({id:"app.components.HomePage.create",defaultMessage:"Create your first Content type"})))))};F.defaultProps={hasCreatedContentType:void 0,onCreateCT:void 0},F.propTypes={hasCreatedContentType:c().bool,onCreateCT:c().func};const Ce=F;var Ze=n(80994);const we=t=>(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...t,children:(0,o.jsx)("path",{fill:"#7289DA",d:"M20.04 0H3.96A2.464 2.464 0 0 0 1.5 2.468v16.2a2.464 2.464 0 0 0 2.46 2.469h13.608l-.636-2.217 1.536 1.426 1.452 1.342 2.58 2.277V2.468A2.464 2.464 0 0 0 20.04 0Zm-4.632 15.65s-.432-.516-.792-.972c1.572-.443 2.172-1.425 2.172-1.425-.492.323-.96.55-1.38.707-.6.251-1.176.419-1.74.515a8.417 8.417 0 0 1-3.108-.012 10.086 10.086 0 0 1-1.764-.515 7.053 7.053 0 0 1-.876-.408c-.036-.024-.072-.036-.108-.06a.166.166 0 0 1-.048-.036 4.202 4.202 0 0 1-.336-.203s.576.958 2.1 1.414c-.36.455-.804.994-.804.994-2.652-.084-3.66-1.821-3.66-1.821 0-3.859 1.728-6.986 1.728-6.986 1.728-1.294 3.372-1.258 3.372-1.258l.12.144c-2.16.623-3.156 1.57-3.156 1.57s.264-.144.708-.348c1.284-.563 2.304-.72 2.724-.755.072-.012.132-.024.204-.024A9.792 9.792 0 0 1 16.8 7.297s-.948-.898-2.988-1.521l.168-.192s1.644-.036 3.372 1.258c0 0 1.728 3.127 1.728 6.986 0 0-1.02 1.737-3.672 1.821Zm-5.58-5.597c-.684 0-1.224.6-1.224 1.33 0 .731.552 1.33 1.224 1.33.684 0 1.224-.599 1.224-1.33.012-.73-.54-1.33-1.224-1.33Zm4.38 0c-.684 0-1.224.6-1.224 1.33 0 .731.552 1.33 1.224 1.33.684 0 1.224-.599 1.224-1.33 0-.73-.54-1.33-1.224-1.33Z"})}),Pe=we,be=t=>(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...t,children:(0,o.jsx)("path",{fill:"#FF4500",fillRule:"evenodd",d:"M23.634 12.018c0 6.583-5.263 11.92-11.754 11.92C5.388 23.938.125 18.6.125 12.018S5.388.098 11.88.098c6.491 0 11.754 5.337 11.754 11.92ZM17.94 10.34a1.73 1.73 0 0 1 1.779 1.677c.012.67-.36 1.286-.95 1.585.012.175.012.35 0 .524 0 2.673-3.067 4.842-6.851 4.842s-6.852-2.172-6.852-4.842a3.925 3.925 0 0 1 0-.524 1.662 1.662 0 0 1-.461-.314 1.756 1.756 0 0 1-.076-2.46 1.697 1.697 0 0 1 2.425-.076 8.339 8.339 0 0 1 4.584-1.467l.868-4.136v-.006a.364.364 0 0 1 .435-.282l2.881.584c.184-.326.517-.545.888-.584a1.18 1.18 0 0 1 1.295 1.058 1.188 1.188 0 0 1-1.044 1.313 1.18 1.18 0 0 1-1.294-1.058l-2.515-.536-.763 3.718a8.277 8.277 0 0 1 4.526 1.467 1.71 1.71 0 0 1 1.125-.483Zm-8.798 1.677c-.648 0-1.177.536-1.177 1.194a1.19 1.19 0 0 0 1.177 1.194c.649 0 1.178-.536 1.178-1.194 0-.658-.53-1.194-1.178-1.194Zm2.747 5.39a4.47 4.47 0 0 0 2.904-.919v.047a.339.339 0 0 0 .006-.47.327.327 0 0 0-.465-.007 3.83 3.83 0 0 1-2.457.726 3.802 3.802 0 0 1-2.446-.75.314.314 0 0 0-.403 0 .327.327 0 0 0-.044.454 4.47 4.47 0 0 0 2.905.918Zm1.516-4.155c0 .658.529 1.194 1.178 1.194l-.01.045h.06a1.186 1.186 0 0 0 1.127-1.239c0-.657-.529-1.194-1.178-1.194-.648 0-1.177.537-1.177 1.194Z",clipRule:"evenodd"})}),Be=be,Se=t=>(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 80 80",...t,children:[(0,o.jsx)("path",{fill:"#4945FF",d:"M0 27.7c0-13 0-19.6 4-23.6C8.2 0 14.8 0 27.8 0h24.6C65.4 0 72 0 76 4c4 4.2 4 10.8 4 23.8v24.6c0 13 0 19.6-4 23.6-4.2 4-10.8 4-23.8 4H27.7c-13 0-19.6 0-23.6-4C0 71.8 0 65.2 0 52.2V27.7Z"}),(0,o.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M55.2 24.3h-27V38H42v13.7h13.7V24.8c0-.3-.2-.5-.5-.5Z",clipRule:"evenodd"}),(0,o.jsx)("path",{fill:"#fff",d:"M41.5 38h.5v.5h-.5z"}),(0,o.jsx)("path",{fill:"#9593FF",d:"M28.3 38h13.2c.3 0 .5.2.5.5v13.2H28.8a.5.5 0 0 1-.5-.5V38ZM42 51.7h13.7L42.5 65c-.2.2-.5 0-.5-.2v-13ZM28.3 38H15.2a.3.3 0 0 1-.2-.5l13.3-13.2V38Z"})]}),je=Se;var He=n(11462);const Le=t=>(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...t,children:[(0,o.jsx)("path",{fill:"#231F20",d:"M12.103 0C5.533 0 0 5.278 0 11.79V24l12.1-.012c6.57 0 11.9-5.481 11.9-11.992C24 5.486 18.666 0 12.103 0Z"}),(0,o.jsx)("path",{fill:"#FFF9AE",d:"M12.22 4.564a7.43 7.43 0 0 0-3.644.956 7.346 7.346 0 0 0-2.692 2.614 7.26 7.26 0 0 0-.149 7.22L4.4 19.606l4.793-1.072a7.433 7.433 0 0 0 6.355-.14 7.36 7.36 0 0 0 2.513-2.057 7.28 7.28 0 0 0 1.372-2.93 7.243 7.243 0 0 0-.035-3.228A7.281 7.281 0 0 0 17.96 7.28a7.365 7.365 0 0 0-2.557-2.002 7.432 7.432 0 0 0-3.178-.715h-.007Z"}),(0,o.jsx)("path",{fill:"#00AEEF",d:"M18.071 7.426a7.262 7.262 0 0 1 1.51 4.499 7.264 7.264 0 0 1-1.595 4.47 7.38 7.38 0 0 1-4.028 2.558 7.437 7.437 0 0 1-4.765-.43L4.4 19.61l4.88-.571a7.432 7.432 0 0 0 5.181.858 7.381 7.381 0 0 0 4.443-2.778 7.258 7.258 0 0 0-.833-9.693Z"}),(0,o.jsx)("path",{fill:"#00A94F",d:"M16.713 6.078a7.253 7.253 0 0 1 .86 8.928 7.361 7.361 0 0 1-3.736 2.962 7.437 7.437 0 0 1-4.784.065L4.4 19.61l4.793-1.075a7.436 7.436 0 0 0 5.24.313 7.362 7.362 0 0 0 4.123-3.22 7.249 7.249 0 0 0 .914-5.123 7.296 7.296 0 0 0-2.757-4.427Z"}),(0,o.jsx)("path",{fill:"#F15D22",d:"M6.176 15.515a7.246 7.246 0 0 1-.26-4.876 7.312 7.312 0 0 1 2.9-3.95 7.427 7.427 0 0 1 9.26.735 7.387 7.387 0 0 0-4.603-2.771 7.431 7.431 0 0 0-5.277 1.068A7.311 7.311 0 0 0 5.06 10.06a7.249 7.249 0 0 0 .676 5.294L4.4 19.607l1.776-4.092Z"}),(0,o.jsx)("path",{fill:"#E31B23",d:"M5.735 15.353a7.25 7.25 0 0 1-.764-4.818 7.294 7.294 0 0 1 2.465-4.222 7.415 7.415 0 0 1 4.596-1.744 7.42 7.42 0 0 1 4.681 1.509 7.404 7.404 0 0 0-4.865-2.26 7.421 7.421 0 0 0-5.12 1.61 7.293 7.293 0 0 0-2.66 4.626A7.256 7.256 0 0 0 5.28 15.24l-.877 4.37 1.332-4.257Z"})]}),Te=Le;var Fe=n(57750),Re=n(17772);const Ae=(0,m.ZP)(Pe)`
  path {
    fill: #7289da !important;
  }
`,De=(0,m.ZP)(Be)`
  > path:first-child {
    fill: #ff4500;
  }
`,R=(0,m.ZP)(je)`
  > path:first-child {
    fill: #4945ff;
  }
  > path:nth-child(2) {
    fill: #fff;
  }
  > path:nth-child(4) {
    fill: #9593ff;
  }
`,Oe=(0,m.ZP)(He.Z)`
  path {
    fill: #1da1f2 !important;
  }
`,Ie=(0,m.ZP)(Te)`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`,We=[{name:{id:"app.components.HomePage.community.links.github",defaultMessage:"Github"},link:"https://github.com/strapi/strapi/",icon:e.createElement(Fe.Z,{fill:"#7289DA"}),alt:"github"},{name:{id:"app.components.HomePage.community.links.discord",defaultMessage:"Discord"},link:"https://discord.strapi.io/",icon:e.createElement(Ae,null),alt:"discord"},{name:{id:"app.components.HomePage.community.links.reddit",defaultMessage:"Reddit"},link:"https://www.reddit.com/r/Strapi/",icon:e.createElement(De,null),alt:"reddit"},{name:{id:"app.components.HomePage.community.links.twitter",defaultMessage:"Twitter"},link:"https://twitter.com/strapijs",icon:e.createElement(Oe,null),alt:"twitter"},{name:{id:"app.components.HomePage.community.links.forum",defaultMessage:"Forum"},link:"https://forum.strapi.io",icon:e.createElement(Ie,null),alt:"forum"},{name:{id:"app.components.HomePage.community.links.blog",defaultMessage:"Blog"},link:"https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",icon:e.createElement(R,null),alt:"blog"},{name:{id:"app.components.HomePage.community.links.career",defaultMessage:"We are hiring!"},link:"https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",icon:e.createElement(R,null),alt:"career"}],Ve=(0,m.ZP)(Ze.Q)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({theme:t})=>t.spaces[6]};
    height: ${({theme:t})=>t.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`,Ge=(0,m.ZP)(Z.r)`
  row-gap: ${({theme:t})=>t.spaces[2]};
  column-gap: ${({theme:t})=>t.spaces[4]};
`,Ue=()=>{const{formatMessage:t}=(0,k.Z)(),{communityEdition:l}=(0,s.L7)(),a=[...We,{icon:e.createElement(R,null),link:l?"https://discord.strapi.io":"https://support.strapi.io/support/home",name:{id:"Settings.application.get-help",defaultMessage:"Get help"}}];return e.createElement(r.x,{as:"aside","aria-labelledby":"join-the-community",background:"neutral0",hasRadius:!0,paddingRight:5,paddingLeft:5,paddingTop:6,paddingBottom:6,shadow:"tableShadow"},e.createElement(r.x,{paddingBottom:7},e.createElement(p.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(p.k,{direction:"column",alignItems:"stretch",gap:3},e.createElement(y.Z,{variant:"delta",as:"h2",id:"join-the-community"},t({id:"app.components.HomePage.community",defaultMessage:"Join the community"})),e.createElement(y.Z,{textColor:"neutral600"},t({id:"app.components.HomePage.community.content",defaultMessage:"Discuss with team members, contributors and developers on different channels"}))),e.createElement(U.r,{href:"https://feedback.strapi.io/",isExternal:!0,endIcon:e.createElement(Re.Z,null)},t({id:"app.components.HomePage.roadmap",defaultMessage:"See our road map"})))),e.createElement(Ge,null,a.map(({icon:i,link:d,name:u})=>e.createElement(C.P,{col:6,s:12,key:u.id},e.createElement(Ve,{size:"L",startIcon:i,variant:"tertiary",href:d,isExternal:!0},t(u))))))},ze=(0,m.ZP)(r.x)`
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: ${150/16}rem;
  }
`,z=()=>{const{collectionTypes:t,singleTypes:l,isLoading:a}=(0,ae.G)(),{guidedTourState:i,isGuidedTourVisible:d,isSkipped:u}=(0,s.c1)(),w=!ne(i)&&d&&!u,{push:P}=(0,N.k6)(),f=v=>{v.preventDefault(),P("/plugins/content-type-builder/content-types/create-content-type")},g=(0,e.useMemo)(()=>{const v=S=>S.filter(A=>A.isDisplayed);return v(t).length>1||v(l).length>0},[t,l]);return a?e.createElement(s.dO,null):e.createElement(x.A,null,e.createElement(Q,{id:"HomePage.helmet.title",defaultMessage:"Homepage"},v=>e.createElement(H.q,{title:v[0]})),e.createElement(M.o,null,e.createElement(ze,null,e.createElement("img",{alt:"","aria-hidden":!0,src:le})),e.createElement(r.x,{padding:10},e.createElement(Z.r,null,e.createElement(C.P,{col:8,s:12},e.createElement(Ce,{onCreateCT:f,hasCreatedContentType:g}))),e.createElement(Z.r,{gap:6},e.createElement(C.P,{col:8,s:12},w?e.createElement(te,null):e.createElement(Me,null)),e.createElement(C.P,{col:4,s:12},e.createElement(Ue,null))))))};function Ke(){const t=(0,oe.c)(z,async()=>(await n.e(8296).then(n.bind(n,66831))).HomePageEE);return t?e.createElement(t,null):null}const Qe=Ke},17034:(j,E,n)=>{n.d(E,{A:()=>C});var e=n(85893),r=n(88972),x=n(41580);const M=(0,r.ZP)(x.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:s})=>s?"auto 1fr":"1fr"};
`,Z=(0,r.ZP)(x.x)`
  overflow-x: hidden;
`,C=({sideNav:s,children:H})=>(0,e.jsxs)(M,{hasSideNav:!!s,children:[s,(0,e.jsx)(Z,{paddingBottom:10,children:H})]})},57750:(j,E,n)=>{n.d(E,{Z:()=>x});var e=n(85893);const r=M=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...M,children:(0,e.jsx)("path",{fill:"#161614",d:"M12 0C5.373 0 0 5.501 0 12.288c0 5.43 3.438 10.035 8.206 11.66.6.114.82-.266.82-.59 0-.294-.01-1.262-.016-2.289-3.338.744-4.043-1.45-4.043-1.45-.546-1.42-1.332-1.797-1.332-1.797-1.089-.763.082-.747.082-.747 1.205.086 1.84 1.266 1.84 1.266 1.07 1.878 2.807 1.335 3.491 1.021.108-.794.42-1.336.762-1.643-2.665-.31-5.467-1.364-5.467-6.073 0-1.341.469-2.437 1.236-3.298-.124-.31-.535-1.56.117-3.252 0 0 1.007-.33 3.3 1.26A11.25 11.25 0 0 1 12 5.942c1.02.005 2.047.141 3.006.414 2.29-1.59 3.297-1.26 3.297-1.26.653 1.693.242 2.943.118 3.252.77.86 1.235 1.957 1.235 3.298 0 4.72-2.808 5.76-5.48 6.063.43.382.814 1.13.814 2.276 0 1.644-.014 2.967-.014 3.372 0 .327.216.71.825.59C20.566 22.32 24 17.715 24 12.288 24 5.501 18.627 0 12 0Z"})}),x=r},11462:(j,E,n)=>{n.d(E,{Z:()=>x});var e=n(85893);const r=M=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...M,children:(0,e.jsx)("path",{fill:"#1DA1F2",d:"M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 3.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 4.557Z"})}),x=r}}]);
