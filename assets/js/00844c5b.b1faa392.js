(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[15204],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},24264:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var n=r(22122),o=r(19756),i=(r(67294),r(3905)),a={title:"vela def render"},l={unversionedId:"cli/vela_def_render",id:"version-v1.2/cli/vela_def_render",isDocsHomePage:!1,title:"vela def render",description:"Render X-Definition.",source:"@site/versioned_docs/version-v1.2/cli/vela_def_render.md",sourceDirName:"cli",slug:"/cli/vela_def_render",permalink:"/docs/cli/vela_def_render",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/cli/vela_def_render.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1644459439,formattedLastUpdatedAt:"2/10/2022",frontMatter:{title:"vela def render"}},c=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}],d={toc:c};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Render X-Definition."),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Render X-Definition with cue format into kubernetes YAML format. Could be used to check whether the cue format definition is working as expected. If a directory is used as input, all cue definitions in the directory will be rendered."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"vela def render DEFINITION.cue [flags]\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Command below will render my-webservice.cue into YAML format and print it out.\n> vela def render my-webservice.cue\n# Command below will render my-webservice.cue and save it in my-webservice.yaml.\n> vela def render my-webservice.cue -o my-webservice.yaml# Command below will render all cue format definitions in the ./defs/cue/ directory and save the YAML objects in ./defs/yaml/.\n> vela def render ./defs/cue/ -o ./defs/yaml/\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -h, --help             help for render\n      --message string   Specify the header message of the generated YAML file. For example, declaring author information.\n  -o, --output string    Specify the output path of the rendered definition YAML. If empty, the definition will be printed in the console. If input is a directory, the output path is expected to be a directory as well.\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -y, --yes   Assume yes for all user prompts\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"vela_def"},"vela def"),"\t - Manage Definitions")),(0,i.kt)("h4",{id:"go-back-to-cli-commands-homepage"},"Go Back to ",(0,i.kt)("a",{parentName:"h4",href:"vela"},"CLI Commands")," Homepage."),(0,i.kt)("h6",{id:"auto-generated-by-spf13cobra-on-9-feb-2022-refer-to-script-in-kubevela"},"Auto generated by spf13/cobra on 9-Feb-2022, refer to ",(0,i.kt)("a",{parentName:"h6",href:"https://github.com/oam-dev/kubevela/tree/master/hack/docgen"},"script in KubeVela"),"."))}s.isMDXComponent=!0}}]);