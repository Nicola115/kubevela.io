(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[62252],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},51479:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={title:"vela port-forward"},l={unversionedId:"cli/vela_port-forward",id:"cli/vela_port-forward",isDocsHomePage:!1,title:"vela port-forward",description:"Forward local ports to container/service port of vela application.",source:"@site/docs/cli/vela_port-forward.md",sourceDirName:"cli",slug:"/cli/vela_port-forward",permalink:"/docs/next/cli/vela_port-forward",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/cli/vela_port-forward.md",version:"current",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1644459439,formattedLastUpdatedAt:"2/10/2022",frontMatter:{title:"vela port-forward"}},p=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}],s={toc:p};function c(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Forward local ports to container/service port of vela application."),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Forward local ports to container/service port of vela application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vela port-forward APP_NAME [flags]\n")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"port-forward APP_NAME [options] [LOCAL_PORT:]REMOTE_PORT [...[LOCAL_PORT_N:]REMOTE_PORT_N]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      --address strings                Addresses to listen on (comma separated). Only accepts IP addresses or localhost as a value. When localhost is supplied, vela will try to bind on both 127.0.0.1 and ::1 and will fail if neither of these addresses are available to bind. (default [localhost])\n  -e, --env string                     specify environment name for application\n  -h, --help                           help for port-forward\n  -n, --namespace string               specify the Kubernetes namespace to use\n      --pod-running-timeout duration   The length of time (like 5s, 2m, or 3h, higher than zero) to wait until at least one pod is running (default 1m0s)\n      --route                          forward ports from route trait service\n")),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -y, --yes   Assume yes for all user prompts\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("h4",{id:"go-back-to-cli-commands-homepage"},"Go Back to ",(0,a.kt)("a",{parentName:"h4",href:"vela"},"CLI Commands")," Homepage."),(0,a.kt)("h6",{id:"auto-generated-by-spf13cobra-on-9-feb-2022-refer-to-script-in-kubevela"},"Auto generated by spf13/cobra on 9-Feb-2022, refer to ",(0,a.kt)("a",{parentName:"h6",href:"https://github.com/oam-dev/kubevela/tree/master/hack/docgen"},"script in KubeVela"),"."))}c.isMDXComponent=!0}}]);