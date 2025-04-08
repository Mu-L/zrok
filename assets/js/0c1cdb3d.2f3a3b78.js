"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6595],{8581:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"guides/docker-share/index","title":"Getting Started with Docker","description":"Overview","source":"@site/versioned_docs/version-0.4/guides/docker-share/index.mdx","sourceDirName":"guides/docker-share","slug":"/guides/docker-share/","permalink":"/docs/0.4/guides/docker-share/","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/zrok/blob/main/docs/versioned_docs/version-0.4/guides/docker-share/index.mdx","tags":[],"version":"0.4","frontMatter":{"title":"Getting Started with Docker"},"sidebar":"tutorialSidebar","previous":{"title":"Permission Modes","permalink":"/docs/0.4/guides/permission-modes"},"next":{"title":"Public Share","permalink":"/docs/0.4/guides/docker-share/docker_public_share_guide"}}');var t=r(4848),o=r(8453),i=r(7763);const c={title:"Getting Started with Docker"},a=void 0,l={},d=[{value:"Overview",id:"overview",level:2},{value:"Permanent Public Share",id:"permanent-public-share",level:2},{value:"Temporary Public Share",id:"temporary-public-share",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["To follow the guides in this section you will need ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"Docker"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You have the option to enable a ",(0,t.jsx)(n.code,{children:"zrok"})," account on the Docker host and mount it on the container or you can use the provided Docker Compose project files (",(0,t.jsx)(n.code,{children:"compose.yml"}),") to enable a separate ",(0,t.jsx)(n.code,{children:"zrok"})," environment for each project."]}),"\n",(0,t.jsxs)(n.p,{children:["This page provides ",(0,t.jsx)(n.code,{children:"docker"})," and ",(0,t.jsx)(n.code,{children:"docker compose"})," examples of mounting the host's ",(0,t.jsx)(n.code,{children:"zrok"})," environment on the container. You'll need to first ",(0,t.jsx)(n.a,{href:"/docs/getting-started/#installing-the-zrok-command",children:"enable zrok on the Docker host"})," to use this approach."]}),"\n",(0,t.jsx)(n.h2,{id:"permanent-public-share",children:"Permanent Public Share"}),"\n",(0,t.jsxs)(n.p,{children:["Let's say you have a ",(0,t.jsx)(n.code,{children:"compose.yml"})," file that defines a web app known within the project's bridge network as ",(0,t.jsx)(n.code,{children:"https://myapp:8080"})," and you want to publish it as a reliable, public site."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Reserve a subdomain by running ",(0,t.jsx)(n.code,{children:'zrok reserve public --unique-name "myapp" https://myapp:8080'})," on the Docker host."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Merge this YAML with ",(0,t.jsx)(n.code,{children:"compose.yml"})," or save it in the same directory as ",(0,t.jsx)(n.code,{children:"compose.override.yml"})," to let ",(0,t.jsx)(n.code,{children:"docker compose up"})," merge it for you."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'services:\n  zrok:\n    image: openziti/zrok\n    restart: unless-stopped\n    user: "${UID}"\n    volumes:\n      - ${HOME}/.zrok:/home/ziggy/.zrok\n    environment:\n      PFXLOG_NO_JSON: "true"\n    command: share reserved "myapp" --headless\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The reserved share will be available at ",(0,t.jsx)(n.code,{children:"https://myapp.share.zrok.io"})," each time the ",(0,t.jsx)(n.code,{children:"zrok"})," container starts up."]}),"\n",(0,t.jsx)(n.h2,{id:"temporary-public-share",children:"Temporary Public Share"}),"\n",(0,t.jsxs)(n.p,{children:["Let's say you have a web server running on the host's private network at ",(0,t.jsx)(n.code,{children:"https://10.11.12.13:8080"}),". With one additional ",(0,t.jsx)(n.code,{children:"docker"})," command, you can share the web server publicly as long as the ",(0,t.jsx)(n.code,{children:"zrok"})," container stays running."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="BASH"',children:'docker run \\\n    --rm \\\n    --network=host \\\n    --volume ~/.zrok:/home/ziggy/.zrok \\\n    --user "${UID:-1000}:${GID:-1000}" \\\n    openziti/zrok share public \\\n        --headless \\\n        https://10.11.12.13:8080\n'})}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)("summary",{children:"PowerShell"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:'docker.exe run `\n    --rm `\n    --network "host" `\n    --volume "${env:USERPROFILE}\\.zrok:/.zrok" `\n    --user "1000" `\n    openziti/zrok share public `\n        --headless `\n        https://10.11.12.13:8080\n'})})]}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)("summary",{children:"Command Prompt (batch)"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cmd",children:'docker.exe run ^\n    --rm ^\n    --network "host" ^\n    --volume "%USERPROFILE%\\.zrok:/.zrok" ^\n    --user "1000" ^\n    openziti/zrok share public ^\n        --headless ^\n        https://10.11.12.13:8080\n'})})]}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsx)("summary",{children:"Windows Subsystem for Linux (WSL)"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'docker run \\\n    --rm \\\n    --network "host" \\\n    --volume "/mnt/c/Users/$(powershell.exe -Command \'Write-Output $env:USERNAME\' | tr -d \'\\r\')/.zrok:/home/ziggy/.zrok" \\\n    --user "${UID:-1000}:${GID:-1000}" \\\n    openziti/zrok share public \\\n        --headless \\\n        https://10.11.12.13:8080\n'})})]}),"\n",(0,t.jsx)(n.p,{children:"The public share URL appears near the beginning of the container's log."}),"\n",(0,t.jsx)(n.p,{children:"Let's break down those options and arguments."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--rm"})," don't save this container because it's providing a temporary public share that's destroyed when the container stops"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--network=host"})," shares the host's network with the container so that the container can reach the web server directly. This is always necessary when the web server is listening only on the host's loopback interface, e.g., ",(0,t.jsx)(n.code,{children:"https://::1:8080"}),", and may not be strictly necessary if the target is routeable from the default Docker bridge."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--volume ~/.zrok:/home/ziggy/.zrok"})," mounts the ",(0,t.jsx)(n.code,{children:"zrok"})," configuration from the Docker host into the container."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:'--user "${UID:-1000}:${GID:-1000}"'})," sets the container's user to the current user on the Docker host to avoid permission issues with reading the mounted ",(0,t.jsx)(n.code,{children:"zrok"})," configuration (defaults to ",(0,t.jsx)(n.code,{children:"1000:1000"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"openziti/zrok"})," is the ",(0,t.jsx)(n.code,{children:"zrok"})," Docker image."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"share public"})," is the ",(0,t.jsx)(n.code,{children:"zrok"})," command to share the target publicly until zrok exits."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--headless"})," runs the ",(0,t.jsx)(n.code,{children:"zrok"})," command without the interactive terminal UI."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"https://10.11.12.13:8080"})," is the target web server to share."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},7763:(e,n,r)=>{r.d(n,{A:()=>k});var s=r(6540),t=r(8215),o=r(5066),i=r(5246),c=r(9136),a=r(3535);const l={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var d=r(4848);function h(e){return!!e&&("SUMMARY"===e.tagName||h(e.parentElement))}function u(e,n){return!!e&&(e===n||u(e.parentElement,n))}function p(e){let{summary:n,children:r,...t}=e;(0,i.A)().collectAnchor(t.id);const p=(0,c.A)(),m=(0,s.useRef)(null),{collapsed:x,setCollapsed:j}=(0,a.u)({initialState:!t.open}),[k,g]=(0,s.useState)(t.open),v=s.isValidElement(n)?n:(0,d.jsx)("summary",{children:n??"Details"});return(0,d.jsxs)("details",{...t,ref:m,open:k,"data-collapsed":x,className:(0,o.A)(l.details,p&&l.isBrowser,t.className),onMouseDown:e=>{h(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;h(n)&&u(n,m.current)&&(e.preventDefault(),x?(j(!1),g(!0)):j(!0))},children:[v,(0,d.jsx)(a.N,{lazy:!1,collapsed:x,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{j(e),g(!e)},children:(0,d.jsx)("div",{className:l.collapsibleContent,children:r})})]})}const m={details:"details_b_Ee"},x="alert alert--info";function j(e){let{...n}=e;return(0,d.jsx)(p,{...n,className:(0,t.A)(x,m.details,n.className)})}function k(e){const n=s.Children.toArray(e.children),r=n.find((e=>s.isValidElement(e)&&"summary"===e.type)),t=(0,d.jsx)(d.Fragment,{children:n.filter((e=>e!==r))});return(0,d.jsx)(j,{...e,summary:r,children:t})}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var s=r(6540);const t={},o=s.createContext(t);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);