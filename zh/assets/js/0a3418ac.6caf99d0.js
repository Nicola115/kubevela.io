(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[81772],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,k=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:function(e,t,a){"use strict";var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},41395:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(67294),r=a(80944),l=a(86010),i="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,u=39;var c=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,p=e.values,m=e.groupId,d=e.className,k=(0,r.Z)(),v=k.tabGroupChoices,b=k.setTabGroupChoices,f=(0,n.useState)(c),h=f[0],g=f[1],y=n.Children.toArray(e.children),N=[];if(null!=m){var w=v[m];null!=w&&w!==h&&p.some((function(e){return e.value===w}))&&g(w)}var O=function(e){var t=e.currentTarget,a=N.indexOf(t),n=p[a].value;g(n),null!=m&&(b(m,n),setTimeout((function(){var e,a,n,r,l,i,s,u;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,l=e.right,i=window,s=i.innerHeight,u=i.innerWidth,a>=0&&l<=u&&r<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},x=function(e){var t,a;switch(e.keyCode){case u:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case s:var r=N.indexOf(e.target)-1;a=N[r]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},d)},p.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:O,onClick:O},a)}))),t?(0,n.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,a){"use strict";var n=(0,a(67294).createContext)(void 0);t.Z=n},80944:function(e,t,a){"use strict";var n=a(67294),r=a(79443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},93358:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var n=a(22122),r=a(19756),l=(a(67294),a(3905)),i=a(41395),o=a(58215),s={title:"\u81ea\u5b9a\u4e49\u5b89\u88c5"},u={unversionedId:"platform-engineers/advanced-install",id:"version-v1.2/platform-engineers/advanced-install",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49\u5b89\u88c5",description:"\u5e26\u7740\u8bc1\u4e66\u7ba1\u7406\u5668\u5b89\u88c5 KubeVela",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/platform-engineers/advanced-install.mdx",sourceDirName:"platform-engineers",slug:"/platform-engineers/advanced-install",permalink:"/zh/docs/platform-engineers/advanced-install",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/advanced-install.mdx",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1644474670,formattedLastUpdatedAt:"2022/2/10",frontMatter:{title:"\u81ea\u5b9a\u4e49\u5b89\u88c5"}},c=[{value:"\u5e26\u7740\u8bc1\u4e66\u7ba1\u7406\u5668\u5b89\u88c5 KubeVela",id:"\u5e26\u7740\u8bc1\u4e66\u7ba1\u7406\u5668\u5b89\u88c5-kubevela",children:[]},{value:"\u5b89\u88c5\u9884\u53d1\u5e03\u7248",id:"\u5b89\u88c5\u9884\u53d1\u5e03\u7248",children:[]},{value:"\u5347\u7ea7",id:"\u5347\u7ea7",children:[{value:"1. \u5347\u7ea7 CLI",id:"1-\u5347\u7ea7-cli",children:[]},{value:"2. \u5347\u7ea7\u6838\u5fc3\u63a7\u5236\u5668",id:"2-\u5347\u7ea7\u6838\u5fc3\u63a7\u5236\u5668",children:[]},{value:"3. \u5347\u7ea7 VelaUX",id:"3-\u5347\u7ea7-velaux",children:[]}]},{value:"\u5b89\u88c5 Kubectl KubeVela CLI \u63d2\u4ef6",id:"\u5b89\u88c5-kubectl-kubevela-cli-\u63d2\u4ef6",children:[]}],p={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5e26\u7740\u8bc1\u4e66\u7ba1\u7406\u5668\u5b89\u88c5-kubevela"},"\u5e26\u7740\u8bc1\u4e66\u7ba1\u7406\u5668\u5b89\u88c5 KubeVela"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cKubeVela \u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jet/kube-webhook-certgen"},"kube-webhook-certgen")," \u63d0\u4f9b\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66\u4ee5\u4fbf\u4f7f\u7528\u53c2\u6570\u6821\u9a8c\u7b49 Webhook \u529f\u80fd\u3002\n\u4f60\u53ef\u4ee5\u5bf9\u63a5\u8bc1\u4e66\u7ba1\u7406\u8f6f\u4ef6\uff08Cert Manager\uff09\uff0c\u4f46\u662f\u4f60\u9700\u8981\u63d0\u524d\u5b89\u88c5\u597d\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88c5 Cert Manager (\u5982\u679c\u5df2\u7ecf\u5b89\u88c5\uff0c\u53ef\u7701\u7565)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add jetstack https://charts.jetstack.io\nhelm repo update\nhelm install cert-manager jetstack/cert-manager --namespace cert-manager --version v1.2.0 --create-namespace --set installCRDs=true\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88c5 KubeVela \u540c\u65f6\u542f\u7528\u8bc1\u4e66\u7ba1\u7406\u5668\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela install --set admissionWebhooks.certManager.enabled=true\n")),(0,l.kt)("h2",{id:"\u5b89\u88c5\u9884\u53d1\u5e03\u7248"},"\u5b89\u88c5\u9884\u53d1\u5e03\u7248"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u67e5\u8be2\u6240\u6709\u53ef\u7528\u7248\u672c\nvela version list -a\n\n# \u5b89\u88c5\u6307\u5b9a\u7248\u672c\nvela install --version 1.2.0-beta.3\n")),(0,l.kt)("h2",{id:"\u5347\u7ea7"},"\u5347\u7ea7"),(0,l.kt)("h3",{id:"1-\u5347\u7ea7-cli"},"1. \u5347\u7ea7 CLI"),(0,l.kt)(i.Z,{className:"unique-tabs",defaultValue:"script",values:[{label:"Script",value:"script"},{label:"Homebrew",value:"homebrew"},{label:"Download directly from releases",value:"download"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"script",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," MacOS/Linux ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl -fsSl https://kubevela.io/script/install.sh | bash -s 1.2.3\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Windows")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4ec5\u652f\u6301\u5b89\u88c5\u6b63\u5f0f\u53d1\u884c\u7248\u672c\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'powershell -Command "iwr -useb https://kubevela.io/script/install.ps1 | iex"\n'))),(0,l.kt)(o.Z,{value:"homebrew",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"macOS/Linux")),(0,l.kt)("p",null,"\u5148\u66f4\u65b0\u4e0b\u4f60\u7684 brew\uff0c\u8bf7\u6ce8\u610f brew \u9014\u5f84\u4ec5\u652f\u6301\u5b89\u88c5\u6b63\u5f0f\u53d1\u884c\u7248\u672c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew update\n")),(0,l.kt)("p",null,"\u7d27\u63a5\u7740\u5b89\u88c5 KubeVela CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew install kubevela\n"))),(0,l.kt)(o.Z,{value:"download",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,l.kt)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela/releases"},"\u53d1\u5e03\u65e5\u5fd7"),"\u4e0b\u8f7d\u6700\u65b0\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"vela")," \u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u89e3\u538b\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u5e76\u4e14\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"$PATH")," \u4e2d\u914d\u597d\u73af\u5883\u53d8\u91cf\uff0c\u5c31\u641e\u5b9a\u5566\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"sudo mv ./vela /usr/local/bin/vela\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/issues/625"},"\u5b89\u88c5\u63d0\u793a"),":\n\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f Mac \u7cfb\u7edf\uff0c\u5b83\u4f1a\u5f39\u51fa \u201cvela\u201d \u65e0\u6cd5\u6253\u5f00\u7684\u8b66\u544a\uff0c\u56e0\u4e3a\u6765\u81ea\u5f00\u53d1\u8005\u7684\u5305\u65e0\u6cd5\u9a8c\u8bc1\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"MacOS \u5bf9\u80fd\u591f\u5728\u7cfb\u7edf\u4e2d\u8fd0\u884c\u7684\u8f6f\u4ef6\uff0c\u91c7\u53d6\u4e86\u66f4\u52a0\u4e25\u683c\u7684\u9650\u5236\u3002\u4f60\u6682\u65f6\u53ef\u4ee5\u901a\u8fc7\u6253\u5f00 'System Preference' -> 'Security & Privacy' -> General \u5e76\u70b9\u51fb 'Allow Anyway' \u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002")))),(0,l.kt)("h3",{id:"2-\u5347\u7ea7\u6838\u5fc3\u63a7\u5236\u5668"},"2. \u5347\u7ea7\u6838\u5fc3\u63a7\u5236\u5668"),(0,l.kt)("p",null,"\u5982\u679c\u4ece 1.2.0 \u4ee5\u540e\u7248\u672c\u5f00\u59cb\u5347\u7ea7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vela install --version v1.2.3\n")),(0,l.kt)("p",null,"\u5982\u679c\u4ece 1.2.0 \u4ee5\u524d\u7248\u672c\u5f00\u59cb\u5347\u7ea7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vela install --version v1.2.3 -r\n")),(0,l.kt)("h3",{id:"3-\u5347\u7ea7-velaux"},"3. \u5347\u7ea7 VelaUX"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vela addon enable velaux version=v1.2.3\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8bf7\u6ce8\u610f\uff0c\u5982\u679c\u5b89\u88c5\u65f6\u6307\u5b9a\u4e86\u81ea\u5b9a\u4e49\u53c2\u6570\uff0c\u6bd4\u5982\u6570\u636e\u5e93\u5730\u5740\u3002\u8bf7\u5728\u5347\u7ea7\u65f6\u540c\u65f6\u6307\u5b9a\u8be5\u53c2\u6570\u3002")),(0,l.kt)("h2",{id:"\u5b89\u88c5-kubectl-kubevela-cli-\u63d2\u4ef6"},"\u5b89\u88c5 Kubectl KubeVela CLI \u63d2\u4ef6"),(0,l.kt)("p",null,"\u5b89\u88c5 Kubectl KubeVela CLI \u63d2\u4ef6\uff0c\u53ef\u4ee5\u66f4\u597d\u7684\u8fdb\u884c\u5e94\u7528\u4ea4\u4ed8\u64cd\u4f5c\u3002"),(0,l.kt)(i.Z,{className:"unique-tabs",defaultValue:"krew",values:[{label:"Krew",value:"krew"},{label:"Script",value:"script"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"krew",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://krew.sigs.k8s.io/docs/user-guide/setup/install/"},"\u5148\u5b89\u88c5")," Krew\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u67e5\u770b Krew \u4e0a\u53ef\u7528\u7684\u63d2\u4ef6:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl krew update\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88c5 Kubectl KubeVela CLI \u63d2\u4ef6:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl krew install vela\n"))),(0,l.kt)(o.Z,{value:"script",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"macOS/Linux")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl -fsSl https://kubevela.io/script/install-kubectl-vela.sh | bash\n")),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4ece",(0,l.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/releases"},"\u53d1\u5e03\u9875\u9762"),"\u624b\u52a8\u4e0b\u8f7d\u6765\u4f7f\u7528\u3002"))))}m.isMDXComponent=!0},86010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);