"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[474],{99:function(e,l,s){s.d(l,{Z:function(){return top_bar_header}});var t=s(5893),n=s(7294),i=s(5675),o=s.n(i),r={src:"/_next/static/media/chat_icon.b016cf68.svg",height:16,width:19,blurWidth:0,blurHeight:0},c=s(9583),a=s(155),x=s(1163),d=s(9352),m=s(5434),p=s(6225),u=s(9398),g=s(9498),h=s(8259),f=s(8349),N=s(3857),w=s(1087),j=s(7167),v=s(1579),_=s(655),E=s(6893),b=s(255),top_bar_header=()=>{let e=(0,x.useRouter)(),{users:l,setUsers:s}=(0,n.useContext)(u.S),{connectionError:i,showMenu:c,setShowMenu:d,setshowWalletModal:m,setCurrentWalletTab:p,showGlobalChat:N,setShowGlobalChat:v,setShowHowtoPlayModal:b,addCustomToast:k}=(0,n.useContext)(h.W);(0,n.useEffect)(()=>(f.Z.on(w.Z.UPDATE_USER_BALANCE,onBalanceUpdate),f.Z.on(w.Z.UPDATE_DEMO_USER_BALANCE,onDemoBalanceUpdate),f.Z.on(w.Z.UPDATE_USER_BONUS,onBonusUpdate),f.Z.on(w.Z.UPDATE_ONLINE_USERS,onOnlineUserUpdate),f.Z.on(w.Z.RAIN_DROPPED_NOTIFICATION,onRainNotification),f.Z.on(w.Z.CLIENT_CLAIM_CASHBACK,onClaimCashback),f.Z.on(w.Z.FINAL_BONUS_NOTIFICATION,onFinalBonus),()=>{f.Z.removeAllListeners(w.Z.UPDATE_USER_BALANCE),f.Z.removeAllListeners(w.Z.UPDATE_DEMO_USER_BALANCE),f.Z.removeAllListeners(w.Z.UPDATE_USER_BONUS),f.Z.removeAllListeners(w.Z.RAIN_DROPPED_NOTIFICATION),f.Z.removeAllListeners(w.Z.CLIENT_CLAIM_CASHBACK),f.Z.removeAllListeners(w.Z.FINAL_BONUS_NOTIFICATION)}),[l]);let onFinalBonus=e=>{k("Congrats, Received ksh ".concat(e.value," Final Bonus%success"))},onClaimCashback=e=>{if("error"===e.status)k("".concat(e.message,"%error"));else{let e=l[0];void 0!=e&&(e.balance+=e.cashback,e.cashback=0,s([e]),k("Cashback Claim Successful%success"))}},onRainNotification=e=>{k("RAIN DROPPED !!! %successs")},onBalanceUpdate=e=>{e=(0,j.J)(e);let t=l[0];void 0!=t&&(t.balance=e.value,s([t]))},onDemoBalanceUpdate=e=>{e=(0,j.J)(e);let t=l[0];void 0!=t&&(t.demo_balance=e.value,s([t]))},onBonusUpdate=e=>{e=(0,j.J)(e);let t=l[0];void 0!=t&&(t.bonus=e.bonus,s([t]))},[Z,C]=(0,n.useState)(0);(0,n.useEffect)(()=>(window.addEventListener("resize",e=>{C(window.innerWidth)}),window.removeEventListener("resize",e=>{})));let[A,y]=(0,n.useState)(0),onOnlineUserUpdate=e=>{y(e.value)};return(0,t.jsxs)("div",{className:"flex z-[100] p-1 justify-between items-center bg-sblack w-full h-10 lg:h-7 xl:h-8 2xl:h-9 3xl:h-12",children:[(0,t.jsxs)("div",{className:"flex items-center ",children:[(0,t.jsx)(o(),{onClick:()=>{e.push("/")},src:"/_next/static/media/av_logo.e4f52041.png",width:100,height:100,alt:"logo not found",className:" w-20 lg:w-14 xl:w-16 2xl:w-20  3xl:w-24 p-2"}),(0,t.jsxs)("div",{className:"flex items-center pr-1 font-semibold",children:[(0,t.jsx)("a",{href:"tel:0757331333",className:"flex lg:hidden",children:(0,t.jsx)(E.CoD,{className:"text-[5.8vw] font-bold text-spurple"})}),(0,t.jsxs)("p",{className:"hidden lg:flex",children:["Support"," ",(0,t.jsx)("span",{className:"px-1 text-mgreen lg:cursor-pointer hover:underline",children:"0757331333"})]})]}),(0,t.jsxs)("div",{onClick:()=>{b(!0)},className:"hidden py-1  lg:px-0.5 lg:py-0.5 3xl:py-1 xl:px-2  my-0.5 lg:mx-1 mx-0 2xl:mx-2  lg:bg-mgreen rounded-2xl items-center justify-center  lg:cursor-pointer ",children:[(0,t.jsx)(o(),{src:"/_next/static/media/question-gray.10476c54.svg",className:"w-7  lg:w-3 xl:w-4 2xl:w-5 3xl:w-5 text-mgreen",width:50,height:50,alt:"icon not found "}),(0,t.jsxs)("p",{className:"hidden lg:flex px-1 leading-3  text-gray-600 ",children:[" ","How To Play?"]})]}),l.length>0&&l[0].is_admin&&(0,t.jsx)("p",{className:"pl-2 text-gray-300",children:A})]}),(0,t.jsxs)("div",{className:"flex mx-2 items-center",children:[l.length<1&&(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("p",{onClick:()=>{e.push("/login")},className:"mx-2 lg:cursor-pointer",children:"Login"}),(0,t.jsx)("p",{onClick:()=>{e.push("/signup")},className:"mx-1 lg:cursor-pointer bg-mgreen p-1 text-white px-4 rounded-2xl h-full lg:hover:bg-opacity-80",children:"Register"})]}),l.length>0&&(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsxs)("p",{onClick:e=>{m(!0),p(1)},className:"text-mgreen font-semibold flex items-center  lg:cursor-pointer mx-1",children:[(0,g.VQ)(parseInt(l[0].balance.toString())),".",parseFloat(l[0].balance.toString()).toFixed(2).split(".")[1],(0,t.jsx)("span",{className:"  pl-1 lg:pl-0.5 xl:pl-1 text-gray-400 ",children:_.Cf})]})," ",(0,t.jsx)("p",{onClick:()=>{m(!0),p(1)},className:"mx-1 lg:cursor-pointer bg-mgreen p-1 text-white px-4 rounded-2xl h-full lg:hover:bg-opacity-80",children:"Deposit"})]}),(0,t.jsx)("div",{className:"w-[1px] h-6 mx-2 bg-gray-700"}),(0,t.jsxs)("div",{className:"flex items-center relative ",children:[(0,t.jsx)(a.pLT,{onClick:()=>{d(!c)},className:" text-2xl  lg:cursor-pointer w-10 lg:w-3 xl:w-3 2xl:w-4  3xl:w-6 text-gray-500"}),c&&(0,t.jsx)(UserMenu,{closeMenu:()=>{d(!1)}}),!N&&(0,t.jsx)("div",{className:"w-[1px] h-6 mx-1 xl:mx-1.5 3xl:mx-2 bg-gray-700"}),!N&&(0,t.jsx)(o(),{src:r,alt:"chaticon not found",width:100,height:100,onClick:()=>{v(!0)},className:"   w-7 lg:w-3 xl:w-3 2xl:w-4  3xl:w-5  lg:cursor-pointer "})]})]})]})};let UserMenu=e=>{let l=(0,x.useRouter)(),{users:s,setUsers:i}=(0,n.useContext)(u.S),{soundEnabled:r,setSoundEnabled:g,setShowGameLimitsModal:f,setshowWalletModal:j,setCurrentWalletTab:k,showGlobalChat:Z,setShowGlobalChat:C,playMusicAudio:A,stopMusicAudio:y,musicOn:S,setMusicOn:R,animationOn:U,setAnimationOn:I,setShowFreebetsModal:O,setShowProvablyFairModal:L,setShowRecentBetsModal:T,setShowGameRulesModal:D,setShowChangeAvatarModal:B}=(0,n.useContext)(h.W),P=[{title:"Sound",icon:(0,t.jsx)(E.Gwc,{}),onclick:e=>{g(e),(0,v.p0)("soundEnabled","".concat(e))},checked:r},{title:"Music",icon:(0,t.jsx)(a.EkR,{}),onclick:e=>{R(e),(0,v.p0)("musicOn","".concat(e)),!0==e?A():y()},checked:S},{title:"Animation",icon:(0,t.jsx)(p.wUj,{}),onclick:e=>{I(e)},checked:U}],F=[{title:"Game Rules",icon:(0,t.jsx)(d.FmP,{}),onclick:()=>{e.closeMenu(),D(!0)}},{title:"My Bet History",icon:(0,t.jsx)(m.BMe,{}),onclick:()=>{if(e.closeMenu(),s.length<1){l.push("/login");return}T(!0)}},{title:"Game Limits",icon:(0,t.jsx)(c.b1P,{}),onclick:l=>{e.closeMenu(),f(!0),l.stopPropagation()}},{title:"Logout",icon:(0,t.jsx)(d.aIK,{}),onclick:()=>{l.push("/"),i([]),N.Z.send(JSON.stringify({eventName:w.Z.LOGOUT_USER,data:{token:b.Z.token}})),b.Z.token="",b.Z.amingame_1=!1,b.Z.amingame_2=!1,b.Z.holding_1=!1,b.Z.holding_2=!1,(0,v.Rv)("token"),e.closeMenu()}}];return(0,t.jsxs)("div",{onClick:e=>{e.stopPropagation()},className:"flex flex-col w-64 lg:w-44 xl:w-52 2xl:w-60 3xl:w-72 absolute top-5 right-0 pb-1 rounded-lg  z-50 bg-[#2C2D30] shadow-lg font-medium",children:[(0,t.jsxs)("div",{className:"flex h-12 lg:h-7  xl:h-9 2xl:h-11 3xl:h-14 items-center w-full rounded-t-xl  justify-between px-3  ",children:[s.length>0?(0,t.jsxs)("div",{onClick:l=>{e.closeMenu(),k(0),j(!0),l.stopPropagation()},className:"flex items-center  lg:cursor-pointer ",children:[(0,t.jsx)(o(),{src:"".concat(_.Oy,"/").concat(s[0].avatar),alt:"image not found",width:500,height:500,crossOrigin:"anonymous",className:"w-10 lg:w-5 xl:w-7 2xl:w-8 3xl:w-9 rounded-full filter"}),(0,t.jsx)("p",{className:"pl-1 text-lg lg:text-xs xl:text-sm 3xl:text-lg capitalize",children:s[0].username})]}):(0,t.jsx)("div",{}),(0,t.jsxs)("div",{onClick:()=>{if(e.closeMenu(),s.length<1){l.push("/login");return}B(!0)},className:"border-[1px]  py-0.5 lg:py-0.5 xl:py-1  lg:cursor-pointer bg-[#1B1C1D] border-gray-600 text-gray-500 px-3 lg:px-2 2xl:px-3 rounded-3xl  flex items-center justify-center font-thin text-",children:[(0,t.jsx)(o(),{src:"/_next/static/media/chageav.f02b9dd7.svg",alt:"icon not foud",width:50,height:50,className:"w-6 lg:w-4 2xl:w-5 3xl:w-6"}),(0,t.jsxs)("div",{className:"flex flex-col items-center ml-1  leading-4 lg:leading-[0.6rem] 2xl:leading-3 3xl:leading-4",children:[(0,t.jsx)("p",{children:"Change"}),(0,t.jsx)("p",{children:"Avatar"})]})]})]}),P.map((e,l)=>(0,t.jsxs)("div",{className:"flex bg-[#1B1C1D]   items-center justify-between p-2 lg:p-1 xl:p-1.5 2xl:p-2 3xl:p-2.5 mt-0.5",children:[(0,t.jsxs)("div",{className:"flex space-x-1 items-center  ",children:[(0,t.jsx)("div",{className:"text-xl lg:text-sm  2xl:text-lg 3xl:text-xl text-gray-400 ",children:e.icon}),(0,t.jsx)("p",{children:e.title})]}),(0,t.jsx)("div",{className:"flex items-center  w-[19%] lg:w-[17%]",children:(0,t.jsx)("div",{onClick:()=>{e.onclick(!e.checked)},className:"flex  w-full border-[1px] border-gray-500 rounded-full transition-all duration-0  lg:cursor-pointer ".concat(e.checked?"justify-end bg-mgreen":"justify-start"),children:(0,t.jsx)("div",{className:" w-3 h-3 lg:w-2 lg:h-2 xl:h-2.5 xl:w-2.5 2xl:w-3 2xl:h-3 3xl:w-4 3xl:h-4 bg-gray-100 border-2  m-1 lg:m-0.5 rounded-full  "})})})]},e.title)),(0,t.jsx)("div",{className:"h-[1.5dvh]"}),F.map((e,l)=>(0,t.jsxs)("div",{onClick:e.onclick,className:"".concat("Logout"==e.title&&s.length<1?"hidden":"flex"," bg-[#1B1C1D]  items-center justify-between p-2.5 pb-2 lg:p-1 xl:p-1.5 2xl:p-2 3xl:p-2.5 mt-0.5 lg:cursor-pointer ").concat("Logout"==e.title?"rounded-b-xl":""," ").concat("Game Limits"==e.title&&s.length<1?"rounded-b-xl":""),children:[(0,t.jsxs)("div",{className:"flex space-x-1 items-center ",children:[(0,t.jsx)("div",{className:"text-xl lg:text-sm  2xl:text-lg 3xl:text-xl text-gray-400 ",children:e.icon}),(0,t.jsx)("p",{children:e.title})]}),(0,t.jsx)("div",{className:"flex items-center h-full  "})]},e.title)),s.length>0&&(s[0].is_admin||s[0].is_support)&&(0,t.jsxs)("div",{onClick:()=>{e.closeMenu(),l.push("/admin/homepage")},className:"bg-[#1B1C1D]  items-center justify-between p-2.5 lg:p-1 xl:p-1.5 2xl:p-2 3xl:p-2.5 rounded-b-lg mt-0.5 lg:cursor-pointer",children:[(0,t.jsxs)("div",{className:"flex space-x-1 items-center ",children:[(0,t.jsx)("div",{className:"text-xl lg:text-sm  2xl:text-lg 3xl:text-xl text-gray-500 ",children:(0,t.jsx)(d.Xn2,{})}),(0,t.jsx)("p",{children:"Go To Admin"})]}),(0,t.jsx)("div",{className:"flex items-center h-full  "})]})]})}},5421:function(e,l,s){var t=s(5893),n=s(7691),i=s.n(n),o=s(7294),r=s(708),c=s(9398),a=s(8259),x=s(5534),d=s(8349),m=s(3857),p=s(1087),u=s(7167),g=s(9498),h=s(1579),f=s(6528),N=s(1526),w=s(3495),j=s(7516),v=s(9583),_=s(655),E=s(1163),b=s(255);l.Z=e=>{let{users:l,setUsers:s}=(0,o.useContext)(c.S),{setUnreadMessages:n}=(0,o.useContext)(x.p),{appLoading:k,setAppLoading:Z,setScreenSize:C,screenSize:A,toastInfo:y,addCustomToast:S,connectionError:R,setConnectionError:U,setCurrentLink:I,isInPlayMode:O,showGlobalChat:L,showMenu:T,setShowMenu:D,setUnreadNotifications:B,setConnectedApi:P,connectedApi:F}=(0,o.useContext)(a.W);(0,o.useEffect)(()=>(d.Z.on(p.Z.APP_VERSION_ERROR,onAppVersionError),d.Z.on(p.Z.SESSION_EXPIRED,onSessionExpired),d.Z.on(p.Z.REFRESH_USER_WITH_TOKEN,onRefreshUser),null!==localStorage.getItem("token")&&l.length<1&&m.Z.send(JSON.stringify({eventName:p.Z.REFRESH_USER_WITH_TOKEN,data:{token:localStorage.getItem("token")}})),()=>{d.Z.removeAllListeners(p.Z.APP_VERSION_ERROR),d.Z.removeAllListeners(p.Z.REFRESH_USER_WITH_TOKEN),d.Z.removeAllListeners(p.Z.GET_UNREAD_MESSAGES_COUNT),d.Z.removeAllListeners(p.Z.GET_UNREAD_NOTIFICATIONS_COUNT),d.Z.removeAllListeners(p.Z.NOTIFY_USER_NEW_NOTIFICATION),d.Z.removeAllListeners(p.Z.SESSION_EXPIRED)}),[]);let M=(0,E.useRouter)(),onSessionExpired=e=>{(0,h.Rv)("token"),s([]),b.Z.token="",S("Session Expired, Login Again %error")},onRefreshUser=e=>{"error"==e.status?((0,h.Rv)("token"),b.Z.token="",M.push("/login")):(b.Z.token=e.token,(0,h.p0)("token",e.token),s([e.user[0]]),M.push("/"))},onAppVersionError=e=>{e=(0,u.J)(e),(0,g.jU)()&&e.version!==_.Ji&&window.location.reload()};(0,o.useEffect)(()=>(d.Z.on("connected",()=>{k&&Z(!1)}),(0,g.jU)()&&(window.innerWidth<1024?"mobile"!==A&&C("mobile"):"desktop"!=A&&(C("desktop"),(0,h.p0)("screenSize","desktop")),window.addEventListener("resize",e=>{window.innerWidth<1024?"mobile"!==A&&(C("mobile"),(0,h.p0)("screenSize","mobile")):"desktop"!=A&&(C("desktop"),(0,h.p0)("screenSize","desktop"))})),M.prefetch("/"),M.prefetch("/signup"),M.prefetch("/login"),M.prefetch("/terms_and_conditions"),M.prefetch("/privacy_policy"),M.prefetch("/cookie_policy"),M.prefetch("/responsible_gaming"),()=>{d.Z.removeAllListeners("connected"),(0,g.jU)()&&window.removeEventListener("resize",()=>{})}),[]);let toastIsError=e=>"error"===e.split("%")[1];return(0,t.jsxs)("div",{className:"flex flex-col select-none h-screen w-screen bg-mblack caret-mgreen   text-gray-400 overflow-x-hidden ".concat(i().className,"  relative text-sm lg:text-[8px] xl:text-[9px] 2xl:text-xs 3xl:text-sm leading-5 lg:leading-4 2xl:leading-5 3xl:leading-6"),children:[(0,t.jsx)(N.M,{children:""!=y&&(0,t.jsxs)(w.E.div,{initial:{translateX:200},animate:{translateX:0},exit:{translateX:330},transition:{duration:.5},className:" absolute top-14 3xl:top-16 xl:top-12 2xl:top-14 z-[300] rounded-sm right-1 w-60 lg:w-44 xl:w-52 overflow-hidden 2xl:w-72 text-xs lg:text-[8px] xl:text-[9px] 2xl:text-xs 3xl:w-80 py-2 lg:py-1 2xl:py-2 3xl:text-sm flex justify-center items-center space-x-2 text-white ".concat(toastIsError(y)?"bg-red-600":"bg-green-600"),children:[toastIsError(y)?(0,t.jsx)(j.tJu,{}):(0,t.jsx)(v.l_A,{}),(0,t.jsx)("p",{children:y.split("%")[0]})]},"toast-info-notification")}),!k&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.Z,{}),(0,t.jsx)("div",{onClick:()=>{T&&D(!1)},className:"flex ",children:e.children}),(0,t.jsxs)("audio",{id:"win-sound-id",children:[(0,t.jsx)("source",{src:"/win.mp3",type:"audio/mpeg"}),"Your browser does not support the audio element."]}),(0,t.jsxs)("audio",{id:"music-sound-id",children:[(0,t.jsx)("source",{src:"/aviator_music.mp3",type:"audio/mpeg"}),"Your browser does not support the audio element."]}),(0,t.jsxs)("audio",{id:"start-sound-id",children:[(0,t.jsx)("source",{src:"/cabinsound.mp3",type:"audio/mpeg"}),"Your browser does not support the audio element."]}),(0,t.jsxs)("audio",{id:"flew-sound-id",children:[(0,t.jsx)("source",{src:"/flew-away.mp3",type:"audio/mpeg"}),"Your browser does not support the audio element."]})]}),k&&(0,t.jsx)("div",{className:"h-full flex justify-center items-center w-full ",children:(0,t.jsx)("div",{className:"h-40 mb-10 xl:mb-2 w-72 flex items-center justify-center flex-col",children:(0,t.jsx)(f.Z,{className:"text-3xl xl:text-6xl  ",size:80,color:"#28A909"})})})]})}}}]);