"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4196],{8724:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var s=n(5893),i=n(1151);const o={sidebar_position:20,sidebar_label:"Private Share"},t="Docker Private Share",a={id:"guides/docker-share/docker_private_share_guide",title:"Docker Private Share",description:"With zrok, you can privately share a server app that's running in Docker, or any server that's reachable by the zrok container. Then, a zrok private access running somewhere else can use the private share. In this guide we'll cover both sides: the private share and the private access.",source:"@site/../docs/guides/docker-share/docker_private_share_guide.md",sourceDirName:"guides/docker-share",slug:"/guides/docker-share/docker_private_share_guide",permalink:"/docs/guides/docker-share/docker_private_share_guide",draft:!1,unlisted:!1,editUrl:"https://github.com/openziti/zrok/blob/main/docs/../docs/guides/docker-share/docker_private_share_guide.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,sidebar_label:"Private Share"},sidebar:"tutorialSidebar",previous:{title:"Public Share",permalink:"/docs/guides/docker-share/docker_public_share_guide"},next:{title:"Self Hosting",permalink:"/docs/category/self-hosting"}},c={},h=[{value:"Walkthrough Video",id:"walkthrough-video",level:2},{value:"Before You Begin",id:"before-you-begin",level:2},{value:"Begin Sharing Privately with zrok in Docker",id:"begin-sharing-privately-with-zrok-in-docker",level:2},{value:"Access the Private Share",id:"access-the-private-share",level:2},{value:"Going Further with Private Access",id:"going-further-with-private-access",level:2},{value:"Cleaning Up",id:"cleaning-up",level:2}];function l(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"docker-private-share",children:"Docker Private Share"}),"\n",(0,s.jsx)(r.p,{children:"With zrok, you can privately share a server app that's running in Docker, or any server that's reachable by the zrok container. Then, a zrok private access running somewhere else can use the private share. In this guide we'll cover both sides: the private share and the private access."}),"\n",(0,s.jsxs)(r.p,{children:["Here's a short article with an overview of ",(0,s.jsx)(r.a,{href:"/docs/concepts/sharing-private",children:"private sharing with zrok"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"walkthrough-video",children:"Walkthrough Video"}),"\n",(0,s.jsx)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/HxyvtFAvwUE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,s.jsx)(r.h2,{id:"before-you-begin",children:"Before You Begin"}),"\n",(0,s.jsxs)(r.p,{children:["To follow this guide you will need ",(0,s.jsx)(r.a,{href:"https://docs.docker.com/get-docker/",children:"Docker"})," and ",(0,s.jsx)(r.a,{href:"https://docs.docker.com/compose/install/",children:"the Docker Compose plugin"})," for running ",(0,s.jsx)(r.code,{children:"docker compose"})," commands in your terminal."]}),"\n",(0,s.jsx)(r.p,{children:"If you have installed Docker Desktop on macOS or Windows then you are all set."}),"\n",(0,s.jsx)(r.h2,{id:"begin-sharing-privately-with-zrok-in-docker",children:"Begin Sharing Privately with zrok in Docker"}),"\n",(0,s.jsx)(r.p,{children:"First, let's create the private share."}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Make a folder on your computer to use as a Docker Compose project for your zrok private share."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"In your terminal, change directory to your newly-created project folder."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Download ",(0,s.jsx)(r.a,{href:"pathname:///zrok-private-share/compose.yml",children:"the zrok-private-share Docker Compose project file"})," into your new project folder and make sure it's named ",(0,s.jsx)(r.code,{children:"compose.yml"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Copy your zrok environment token from the zrok web console to your clipboard and paste it in a file named ",(0,s.jsx)(r.code,{children:".env"})," in the same folder like this:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:'# file name ".env"\nZROK_ENABLE_TOKEN="8UL9-48rN0ua"\n'})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"If you are self-hosting zrok then it's important to set your API endpoint URL too. If you're using the hosted zrok service then you can skip this step."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:'# file name ".env"\nZROK_API_ENDPOINT="https://zrok.example.com"\n'})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Run your Compose project to start sharing the built-in demo web server:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"docker compose up\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Read the private share token from the output. One of the last lines is like this:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"zrok-private-share-1  | zrok access private wr3hpf2z5fiy\n"})}),"\n",(0,s.jsx)(r.p,{children:"Keep track of this token so you can use it in your zrok private access project."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"access-the-private-share",children:"Access the Private Share"}),"\n",(0,s.jsx)(r.p,{children:"Now that we have a private share we can access it with the zrok command or by running a separate Docker Compose project."}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Make a folder on your computer to use as a Docker Compose project for your zrok private access."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"In your terminal, change directory to your newly-created project folder."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Download ",(0,s.jsx)(r.a,{href:"pathname:///zrok-private-access/compose.yml",children:"the zrok-private-access Docker Compose project file"})," into your new project folder and make sure it's named ",(0,s.jsx)(r.code,{children:"compose.yml"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Copy your zrok environment token from the zrok web console to your clipboard and paste it in a file named ",(0,s.jsx)(r.code,{children:".env"})," in the same folder like this:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:'# file name ".env"\nZROK_ENABLE_TOKEN="8UL9-48rN0ua"\n'})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Now copy the zrok private access token from the zrok private share project's output to your clipboard and paste it in the same file named ",(0,s.jsx)(r.code,{children:".env"})," here in your private share project folder like this:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:'# file name ".env"\nZROK_ENABLE_TOKEN="8UL9-48rN0ua"\nZROK_ACCESS_TOKEN="wr3hpf2z5fiy"\n'})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Run your Compose project to start accessing the private share:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"docker compose up zrok-private-access\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Now your zrok private access proxy is ready on ",(0,s.jsx)(r.a,{href:"http://127.0.0.1:9191",children:"http://127.0.0.1:9191"}),". You can visit the demo web server in your browser."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"going-further-with-private-access",children:"Going Further with Private Access"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Try changing the demo web server used in the private share project. One alternative demo server is provided: ",(0,s.jsx)(r.code,{children:"httpbin"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Try accessing the private share from ",(0,s.jsx)(r.em,{children:"inside"})," a container running in the private access project. One demo client is provided: ",(0,s.jsx)(r.code,{children:"demo-client"}),". You can run it like this."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"docker compose up demo-client\n"})}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["You'll see in the terminal output that the demo-client container is getting a response from the private share indicating the source IP of the request from the perspective of the demo server: ",(0,s.jsx)(r.code,{children:"httpbin"})," that's running in the private share project."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"cleaning-up",children:"Cleaning Up"}),"\n",(0,s.jsx)(r.p,{children:'Run the "down" command in both Compose projects to destroy them when you\'re all done. This will stop the running containers and delete zrok environments\' storage volumes. Then delete the selected zrok environment by clicking "Actions" in the web console.'}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"docker compose down --remove-orphans --volumes\n"})})]})}function d(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>t});var s=n(7294);const i={},o=s.createContext(i);function t(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);