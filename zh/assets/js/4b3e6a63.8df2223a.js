(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[24002],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,v=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(v,l(l({ref:n},s),{},{components:t})):r.createElement(v,l({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},91935:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return i},default:function(){return s}});var r=t(22122),a=t(19756),o=(t(67294),t(3905)),l={title:"\u4ea4\u4ed8\u7b2c\u4e00\u4e2a\u5e94\u7528"},p={unversionedId:"end-user/quick-start-cli",id:"version-v1.2/end-user/quick-start-cli",isDocsHomePage:!1,title:"\u4ea4\u4ed8\u7b2c\u4e00\u4e2a\u5e94\u7528",description:"\u6b22\u8fce\u6765\u5230 KubeVela! \u5728\u672c\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u4f1a\u5411\u4f60\u4ecb\u7ecd\u4e00\u4e9b\u4f8b\u5b50\u6765\u5e2e\u52a9\u4f60\u7406\u89e3\u5982\u4f55\u4f7f\u7528 KubeVela \u89e3\u51b3\u5e94\u7528\u4ea4\u4ed8\u4e2d\u7684\u5b9e\u9645\u95ee\u9898\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/end-user/quick-start-cli.md",sourceDirName:"end-user",slug:"/end-user/quick-start-cli",permalink:"/zh/docs/end-user/quick-start-cli",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/quick-start-cli.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642212376,formattedLastUpdatedAt:"2022/1/15",frontMatter:{title:"\u4ea4\u4ed8\u7b2c\u4e00\u4e2a\u5e94\u7528"},sidebar:"version-v1.2/docs",previous:{title:"\u7ba1\u7406\u90e8\u7f72\u76ee\u6807",permalink:"/zh/docs/how-to/dashboard/target/overview"},next:{title:"\u7ed9\u5e94\u7528\u914d\u7f6e\u8bbf\u95ee\u7f51\u5173",permalink:"/zh/docs/end-user/traits/ingress"}},i=[{value:"\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u793a\u4f8b",id:"\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u793a\u4f8b",children:[]},{value:"\u4ea4\u4ed8\u66f4\u591a\u7684\u7ec4\u4ef6",id:"\u4ea4\u4ed8\u66f4\u591a\u7684\u7ec4\u4ef6",children:[{value:"Helm \u7ec4\u4ef6",id:"helm-\u7ec4\u4ef6",children:[]},{value:"Terraform \u4e91\u8d44\u6e90\u7ec4\u4ef6",id:"terraform-\u4e91\u8d44\u6e90\u7ec4\u4ef6",children:[]},{value:"\u6765\u81ea Git \u4ed3\u5e93\u7684\u7ec4\u4ef6\uff08\u57fa\u4e8e Kustomize\uff09",id:"\u6765\u81ea-git-\u4ed3\u5e93\u7684\u7ec4\u4ef6\uff08\u57fa\u4e8e-kustomize\uff09",children:[]}]},{value:"\u7ed1\u5b9a\u8fd0\u7ef4\u7279\u5f81",id:"\u7ed1\u5b9a\u8fd0\u7ef4\u7279\u5f81",children:[]},{value:"\u5b9a\u4e49\u4ea4\u4ed8\u7b56\u7565\u4e0e\u4ea4\u4ed8\u5de5\u4f5c\u6d41",id:"\u5b9a\u4e49\u4ea4\u4ed8\u7b56\u7565\u4e0e\u4ea4\u4ed8\u5de5\u4f5c\u6d41",children:[]}],c={toc:i};function s(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6b22\u8fce\u6765\u5230 KubeVela! \u5728\u672c\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u4f1a\u5411\u4f60\u4ecb\u7ecd\u4e00\u4e9b\u4f8b\u5b50\u6765\u5e2e\u52a9\u4f60\u7406\u89e3\u5982\u4f55\u4f7f\u7528 KubeVela \u89e3\u51b3\u5e94\u7528\u4ea4\u4ed8\u4e2d\u7684\u5b9e\u9645\u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u5728\u5b9e\u8df5\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u4f60\u5df2\u7ecf\u6309\u7167 ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/install"},"\u5feb\u901f\u5b89\u88c5")," \u6587\u6863\uff0c\u5728\u4f60\u7684\u63a7\u5236\u5e73\u9762\u96c6\u7fa4\u4e2d\u5b89\u88c5\u4e86 KubeVela\u3002"),(0,o.kt)("h2",{id:"\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u793a\u4f8b"},"\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u793a\u4f8b"),(0,o.kt)("p",null,"KubeVela \u4e2d\u4e00\u4e2a\u7b80\u5355\u7684\u5e94\u7528\u90e8\u7f72\u5b9a\u4e49\uff0c\u5927\u81f4\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-app\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: ingress-1-20\n          properties:\n            domain: testsvc.example.com\n            http:\n              "/": 8000\n')),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," \u628a\u5b83\u63d0\u4ea4\u7ed9 KubeVela\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vela up -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/vela-app.yaml\n")),(0,o.kt)("p",null,"\u4e0a\u8ff0\u547d\u4ee4\u4e00\u65e6\u6267\u884c\uff0cKubeVela \u5c31\u4f1a\u5e2e\u52a9\u4f60\u5728\u76ee\u6807\u96c6\u7fa4\u4e2d\u4ea4\u4ed8\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"Web \u670d\u52a1"),"\u7c7b\u578b\u7684\u7ec4\u4ef6\uff0c\u4e14\u8be5\u7ec4\u4ef6\u7684\u5bb9\u5668\u955c\u50cf\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"crccheck/hello-world"),"\u3002\u5728\u672c\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5e76\u6ca1\u6709\u7279\u522b\u6307\u660e\u76ee\u6807\u96c6\u7fa4\u662f\u54ea\u4e2a\uff0c\u6240\u4ee5 KubeVela \u4f1a\u9ed8\u8ba4\u628a\u5e94\u7528\u90e8\u7f72\u5728\u5b83\u6240\u5728\u7684\u96c6\u7fa4\u4e5f\u5c31\u662f\u63a7\u5236\u5e73\u9762\u96c6\u7fa4\u5f53\u4e2d\u3002"),(0,o.kt)("p",null,"\u800c\u7531\u4e8e\u6211\u4eec\u5df2\u7ecf\u5728\u4e0a\u8ff0 YAML \u6587\u4ef6\u4e2d\u4e3a\u8fd9\u4e2a\u7ec4\u4ef6\u7ed1\u5b9a\u4e86\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"ingress")," \u7c7b\u578b\u7684\u8fd0\u7ef4\u7279\u5f81\uff0cKubeVela \u5c31\u4f1a\u6307\u5bfc Kubernetes \u81ea\u52a8\u4e3a\u8fd9\u4e2a\u7ec4\u4ef6\u80cc\u540e\u7684\u5de5\u4f5c\u8d1f\u8f7d\u914d\u7f6e Service\u3001\u7aef\u53e3\u6620\u5c04\u548c HTTP \u8def\u7531\u89c4\u5219\u3002\u6240\u4ee5\u53ea\u8981\u76ee\u6807\u96c6\u7fa4\u5177\u5907 Ingress \u80fd\u529b\uff0c\u4e0a\u8ff0 YAML \u4e00\u90e8\u7f72\u6210\u529f\uff0c\u4f60\u5c31\u53ef\u4ee5\u7acb\u523b\u901a\u8fc7\u5916\u57df\u540d\u6765\u95ee\u8fd9\u4e2a\u5e94\u7528\u4e86\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ curl -H "Host:testsvc.example.com" http://<your ip address>/\n<xmp>\nHello World\n\n\n                                       ##         .\n                                 ## ## ##        ==\n                              ## ## ## ## ##    ===\n                           /""""""""""""""""\\___/ ===\n                      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~\n                           \\______ o          _,/\n                            \\      \\       _,\'\n                             `\'--.._\\..--\'\'\n</xmp>\n')),(0,o.kt)("h2",{id:"\u4ea4\u4ed8\u66f4\u591a\u7684\u7ec4\u4ef6"},"\u4ea4\u4ed8\u66f4\u591a\u7684\u7ec4\u4ef6"),(0,o.kt)("p",null,"KubeVela \u5141\u8bb8\u4f60\u90e8\u7f72\u7684\u7ec4\u4ef6\u7c7b\u578b\u662f\u975e\u5e38\u4e30\u5bcc\u7684\u3002\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Web Service"),"\u7ec4\u4ef6\u5b9e\u9645\u4e0a\u5c31\u662f\u4e00\u4e2a\u9884\u5148\u7f16\u5199\u597d\u7684",(0,o.kt)("a",{parentName:"p",href:"https://cuelang.org/"},"CUE")," \u6587\u4ef6\u3002"),(0,o.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u9009\u62e9\u5176\u5b83\u5f88\u591a\u7c7b\u578b\uff0c\u6bd4\u5982\uff1a"),(0,o.kt)("h3",{id:"helm-\u7ec4\u4ef6"},"Helm \u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: app-delivering-chart\nspec:\n  components:\n    - name: redis-comp\n      type: helm\n      properties:\n        chart: redis-cluster\n        version: 6.2.7\n        url: https://charts.bitnami.com/bitnami\n        repoType: helm\n")),(0,o.kt)("h3",{id:"terraform-\u4e91\u8d44\u6e90\u7ec4\u4ef6"},"Terraform \u4e91\u8d44\u6e90\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: rds-cloud-source\nspec:\n  components:\n    - name: sample-db\n      type: alibaba-rds\n      properties:\n        instance_name: sample-db\n        account_name: oamtest\n        password: U34rfwefwefffaked\n        writeConnectionSecretToRef:\n          name: db-conn\n")),(0,o.kt)("h3",{id:"\u6765\u81ea-git-\u4ed3\u5e93\u7684\u7ec4\u4ef6\uff08\u57fa\u4e8e-kustomize\uff09"},"\u6765\u81ea Git \u4ed3\u5e93\u7684\u7ec4\u4ef6\uff08\u57fa\u4e8e Kustomize\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: git-app\nspec:\n  components:\n    - name: git-comp\n      type: kustomize\n      properties:\n        repoType: git\n        url: https://github.com/<path>/<to>/<repo>\n        git:\n          branch: master\n        path: ./app/dev/\n")),(0,o.kt)("p",null,"\u5f53\u7136\uff0c\u8fd8\u6709\u66f4\u591a\u3002\u6b22\u8fce\u67e5\u770b\u8fb9\u680f\u4e2d\u7684",(0,o.kt)("a",{parentName:"p",href:"./components/helm"},"\u9009\u62e9\u5f85\u4ea4\u4ed8\u7ec4\u4ef6")," \u7ae0\u8282\u6765\u9605\u8bfb\u5173\u4e8e\u90e8\u7f72\u5404\u79cd\u7c7b\u578b\u7684\u8be6\u7ec6\u6587\u6863\u3002\u5982\u679c\u4f60\u9700\u8981\u7684\u8bdd\uff0c\u4f60\u8fd8\u53ef\u4ee5\u5728 KubeVela \u4e2d\u6dfb\u52a0\u81ea\u5df1\u7684\u7ec4\u4ef6\u7c7b\u578b\u3002"),(0,o.kt)("h2",{id:"\u7ed1\u5b9a\u8fd0\u7ef4\u7279\u5f81"},"\u7ed1\u5b9a\u8fd0\u7ef4\u7279\u5f81"),(0,o.kt)("p",null,"KubeVela \u80fd\u505a\u7684\u8fdc\u4e0d\u6b62\u90e8\u7f72\uff0c\u8fd8\u5305\u62ec\u8fd0\u7ef4\u3002\u5b83\u5141\u8bb8\u4f60\u4e3a\u5f85\u4ea4\u4ed8\u7ec4\u4ef6\u7ed1\u5b9a\u9884\u5148\u5b9a\u4e49\u597d\u7684\u5404\u79cd\u8fd0\u7ef4\u884c\u4e3a\uff08\u53eb\u505a\u8fd0\u7ef4\u7279\u5f81\uff09\uff0c\u5e76\u4e14\u8fd9\u4e2a\u7ed1\u5b9a\u4f1a\u7acb\u523b\u751f\u6548\u3002\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c31\u4e3a Web \u670d\u52a1\u7ec4\u4ef6\u7ed1\u5b9a\u4e00\u4e2a\u201c\u5206\u6279\u53d1\u5e03\u201d\u8fd0\u7ef4\u7279\u5f81\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: rollout-trait-test\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      externalRevision: express-server-v1\n      properties:\n        image: stefanprodan/podinfo:4.0.3\n      traits:\n        - type: rollout\n          properties:\n            targetSize: 5\n            rolloutBatches:\n              - replicas: 2\n              - replicas: 3\n")),(0,o.kt)("p",null,"\u597d\u4e86\uff0c\u63a5\u4e0b\u6765\uff0c\u53ea\u8981\u4e0a\u8ff0 YAML \u4e2d\u7684\u955c\u50cf\u7248\u672c\u53d1\u751f\u53d8\u5316\uff0cKubeVela \u5c31\u4f1a\u6309\u7167\u4f60\u6240\u5b9a\u4e49\u7684\u5206\u6279\u7b56\u7565\u6765\u66f4\u65b0\u5bf9\u5e94\u7684\u5e94\u7528\u5b9e\u4f8b\u4e86\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4e86\u89e3 KubeVela \u6240\u652f\u6301\u7684\u6240\u6709\u8fd0\u7ef4\u7279\u5f81\uff0c\u6b22\u8fce\u67e5\u770b\u8fb9\u680f\u4e2d\u7684 ",(0,o.kt)("a",{parentName:"p",href:"./traits/ingress"},"\u7ed1\u5b9a\u8fd0\u7ef4\u7279\u5f81")," \u7ae0\u8282\uff0c\u540c\u6837\u7684\uff0cKubeVela \u5141\u8bb8\u4f60\u975e\u5e38\u5bb9\u6613\u7684\u5728\u5e73\u53f0\u4e2d\u6dfb\u52a0\u81ea\u5df1\u7684\u8fd0\u7ef4\u7279\u5f81\u3002"),(0,o.kt)("h2",{id:"\u5b9a\u4e49\u4ea4\u4ed8\u7b56\u7565\u4e0e\u4ea4\u4ed8\u5de5\u4f5c\u6d41"},"\u5b9a\u4e49\u4ea4\u4ed8\u7b56\u7565\u4e0e\u4ea4\u4ed8\u5de5\u4f5c\u6d41"),(0,o.kt)("p",null,"\u7ec4\u4ef6\u4e0e\u8fd0\u7ef4\u7279\u5f81\u53ea\u662f KubeVela \u975e\u5e38\u57fa\u672c\u7684\u529f\u80fd\u3002KubeVela \u672c\u8eab\u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a\u5168\u529f\u80fd\u7684\u6301\u7eed\u4ea4\u4ed8\uff08CD\uff09\u7cfb\u7edf\uff0c\u5e76\u4e14\u539f\u751f\u652f\u6301\u9762\u5411\u6df7\u5408\u73af\u5883\uff08\u6bd4\u5982\u6df7\u5408\u4e91/\u591a\u4e91/\u591a\u96c6\u7fa4\uff09\u5e94\u7528\u4ea4\u4ed8\u3002"),(0,o.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6211\u8981\u4ea4\u4ed8\u4e00\u4e2a\u5305\u62ec\u4e86\u4e24\u4e2a\u7ec4\u4ef6\u7684\u5fae\u670d\u52a1\u5e94\u7528\uff0c\u8981\u6c42\u5148\u9700\u8981\u5728\u9884\u53d1\u96c6\u7fa4\u5f53\u4e2d\u90e8\u7f72 1 \u4e2a\u526f\u672c\uff0c\u7136\u540e\u6682\u505c\u4ea4\u4ed8\u8fc7\u7a0b\uff0c\u8bf7\u4e3b\u7ba1\u8fdb\u884c\u4eba\u5de5\u5ba1\u6838\u3002\u5f53\u5ba1\u6838\u901a\u8fc7\u540e\uff0c\u518d\u7ee7\u7eed\u90e8\u7f72\u5230\u751f\u4ea7\u96c6\u7fa4\u4e2d\uff0c\u5e76\u4e14\u9700\u8981\u90e8\u7f72\u4e3a3\u4e2a\u526f\u672c\u3002")),(0,o.kt)("p",null,"\u60f3\u8c61\u4e00\u4e0b\uff0c\u4f60\u9700\u8981\u5728 CI/CD \u6d41\u6c34\u7ebf\u91cc\u7f16\u5199\u591a\u5c11\u201c\u810f\u4e71\u5dee\u201d\u7684\u4e00\u6b21\u6027\u811a\u672c\u6216\u8005\u80f6\u6c34\u4ee3\u7801\u624d\u80fd\u8ba9\u4e0a\u8ff0\u6d41\u7a0b\u81ea\u52a8\u5316\u7684\u3001\u4fdd\u8bc1\u4e00\u5b9a\u6b63\u786e\u6027\u7684\u6267\u884c\u8d77\u6765\uff1f"),(0,o.kt)("p",null,"\u800c\u5728 KubeVela \u4e2d\uff0c\u4e0a\u8ff0\u6d41\u7a0b\u53ef\u4ee5\u975e\u5e38\u5bb9\u6613\u7684\u901a\u8fc7\u5982\u4e0b\u6240\u793a\u7684\u58f0\u660e\u5f0f\u5de5\u4f5c\u6d41\u5efa\u6a21\u51fa\u6765\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: example-app\n  namespace: default\nspec:\n  components:\n    - name: hello-world-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: scaler\n          properties:\n            replicas: 1\n    - name: data-worker\n      type: worker\n      properties:\n        image: busybox\n        cmd:\n          - sleep\n          - '1000000'\n  policies:\n    - name: example-multi-env-policy\n      type: env-binding\n      properties:\n        envs:\n          - name: staging\n            placement: # selecting the cluster to deploy to\n              clusterSelector:\n                name: cluster-staging\n            selector: # selecting which component to use\n              components:\n                - hello-world-server\n\n          - name: prod\n            placement:\n              clusterSelector:\n                name: cluster-prod\n            patch: # overlay patch on above components\n              components:\n                - name: hello-world-server\n                  type: webservice\n                  traits:\n                    - type: scaler\n                      properties:\n                        replicas: 3\n\n    - name: health-policy-demo\n      type: health\n      properties:\n        probeInterval: 5\n        probeTimeout: 10\n\n  workflow:\n    steps:\n      # deploy to staging env\n      - name: deploy-staging\n        type: deploy2env\n        properties:\n          policy: example-multi-env-policy\n          env: staging\n\n      # manual check\n      - name: manual-approval\n        type: suspend\n\n      # deploy to prod env\n      - name: deploy-prod\n        type: deploy2env\n        properties:\n          policy: example-multi-env-policy\n          env: prod\n")),(0,o.kt)("p",null,"\u4e0d\u9700\u8981\u4efb\u4f55\u201c\u810f\u4e71\u5dee\u201d\u811a\u672c\uff0cKubeVela \u5c31\u80fd\u591f\u4ee5\u5b8c\u5168\u81ea\u52a8\u5316\u3001\u9ad8\u786e\u5b9a\u6027\u7684\u58f0\u660e\u5f0f\u5de5\u4f5c\u6d41\u5b8c\u6210\u6240\u6709\u7684\u5e94\u7528\u4ea4\u4ed8\u52a8\u4f5c\u3002\u66f4\u4e3a\u91cd\u8981\u7684\u662f\uff0cKubeVela \u5e0c\u671b\u4f60\u7ee7\u7eed\u4f7f\u7528\u4f60\u73b0\u6709\u7684\u4efb\u4f55 CI \u65b9\u6848\uff0c\u800c KubeVela \u5219\u8d1f\u8d23\u5e2e\u52a9\u4f60\u66f4\u597d\u7684\u5b8c\u6210 CD \u6d41\u7a0b\u3002"))}s.isMDXComponent=!0}}]);