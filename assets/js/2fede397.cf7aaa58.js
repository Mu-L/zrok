"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7120],{5470:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"guides/agent/linux-service","title":"Linux Agent Service","description":"Overview","source":"@site/../docs/guides/agent/linux-service.mdx","sourceDirName":"guides/agent","slug":"/guides/agent/linux-service","permalink":"/docs/guides/agent/linux-service","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/zrok/blob/main/docs/../docs/guides/agent/linux-service.mdx","tags":[],"version":"current","sidebarPosition":40,"frontMatter":{"title":"Linux Agent Service","sidebar_position":40},"sidebar":"tutorialSidebar","previous":{"title":"Agent","permalink":"/docs/guides/agent/"},"next":{"title":"Windows Agent Service","permalink":"/docs/guides/agent/windows-service/"}}');var i=s(4848),r=s(8453);function o(e){const n={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Set up ",(0,i.jsx)(n.code,{children:"zrok"}),"'s Linux package repository by following ",(0,i.jsx)(n.a,{href:"/docs/guides/install/linux#install-zrok-from-the-repository",children:"the Linux install guide"}),", or run this one-liner to complete the repo setup and install packages."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -sSLf https://get.openziti.io/install.bash \\\n| sudo bash -s zrok-agent\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If you set up the repository by following the guide, then also install the ",(0,i.jsx)(n.code,{children:"zrok-agent"})," package. This package provides the systemd service."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Ubuntu, Debian"',children:"sudo apt install zrok-agent\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Fedora, Rocky"',children:"sudo dnf install zrok-agent\n"})}),"\n"]}),"\n"]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}const a={title:"Linux Agent Service",sidebar_position:40},l=void 0,d={},u=[{value:"Overview",id:"overview",level:2},{value:"Install the Package",id:"install-the-package",level:2},{value:"Enable your Account",id:"enable-your-account",level:2},{value:"Start the Service",id:"start-the-service",level:2},{value:"Use the agent",id:"use-the-agent",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Check the User Service Log",id:"check-the-user-service-log",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["Run the zrok agent as a ",(0,i.jsx)(n.code,{children:"systemd --user"})," service under your Linux user account."]}),"\n",(0,i.jsx)(n.h2,{id:"install-the-package",children:"Install the Package"}),"\n",(0,i.jsxs)(n.p,{children:["The package provides the ",(0,i.jsx)(n.code,{children:"zrok"})," executable and the ",(0,i.jsx)(n.code,{children:"zrok-agent.service"})," unit."]}),"\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h2,{id:"enable-your-account",children:"Enable your Account"}),"\n",(0,i.jsxs)(n.p,{children:["This creates a ",(0,i.jsx)(n.code,{children:"~/.zrok"})," directory enabled for your zrok account."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"zrok enable <your_account_token>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"start-the-service",children:"Start the Service"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"systemctl --user enable --now zrok-agent.service\n"})}),"\n",(0,i.jsx)(n.h2,{id:"use-the-agent",children:"Use the agent"}),"\n",(0,i.jsxs)(n.p,{children:["Learn more about using the zrok agent in the ",(0,i.jsx)(n.a,{href:"/docs/guides/agent/",children:"agent guide"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsx)(n.h3,{id:"check-the-user-service-log",children:"Check the User Service Log"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"journalctl --user -lfu zrok-agent.service\n"})})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(6540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);