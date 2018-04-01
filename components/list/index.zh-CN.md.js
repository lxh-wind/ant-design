webpackJsonp([172],{1729:function(t,d){t.exports={content:["section",["p","\u901a\u7528\u5217\u8868\u3002"],["h2","\u4f55\u65f6\u4f7f\u7528"],["p","\u6700\u57fa\u7840\u7684\u5217\u8868\u5c55\u793a\uff0c\u53ef\u627f\u8f7d\u6587\u5b57\u3001\u5217\u8868\u3001\u56fe\u7247\u3001\u6bb5\u843d\uff0c\u5e38\u7528\u4e8e\u540e\u53f0\u6570\u636e\u5c55\u793a\u9875\u9762\u3002"]],meta:{category:"Components",type:"Data Display",title:"List",subtitle:"\u5217\u8868",cols:1,filename:"components/list/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4f55\u65f6\u4f7f\u7528",title:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","List"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","bordered"],["td","\u662f\u5426\u5c55\u793a\u8fb9\u6846"],["td","boolean"],["td","false"]],["tr",["td","footer"],["td","\u5217\u8868\u5e95\u90e8"],["td","string","|","ReactNode"],["td","-"]],["tr",["td","grid"],["td","\u5217\u8868\u6805\u683c\u914d\u7f6e"],["td","object"],["td","-"]],["tr",["td","header"],["td","\u5217\u8868\u5934\u90e8"],["td","string","|","ReactNode"],["td","-"]],["tr",["td","itemLayout"],["td","\u8bbe\u7f6e ",["code","List.Item"]," \u5e03\u5c40, \u8bbe\u7f6e\u6210 ",["code","vertical"]," \u5219\u7ad6\u76f4\u6837\u5f0f\u663e\u793a, \u9ed8\u8ba4\u6a2a\u6392"],["td","string"],["td","-"]],["tr",["td","loading"],["td","\u5f53\u5361\u7247\u5185\u5bb9\u8fd8\u5728\u52a0\u8f7d\u4e2d\u65f6\uff0c\u53ef\u4ee5\u7528 ",["code","loading"]," \u5c55\u793a\u4e00\u4e2a\u5360\u4f4d"],["td","boolean","|",["a",{title:null,href:"https://ant.design/components/spin-cn/#API"},"object"]," (",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/8659"},"\u66f4\u591a"],")"],["td","false"]],["tr",["td","loadMore"],["td","\u52a0\u8f7d\u66f4\u591a"],["td","string","|","ReactNode"],["td","-"]],["tr",["td","pagination"],["td","\u5bf9\u5e94\u7684 ",["code","pagination"]," \u914d\u7f6e, \u8bbe\u7f6e ",["code","false"]," \u4e0d\u663e\u793a"],["td","boolean","|","object"],["td","false"]],["tr",["td","size"],["td","list \u7684\u5c3a\u5bf8"],["td",["code","default"]," ","|"," ",["code","middle"]," ","|"," ",["code","small"]],["td",["code","default"]]],["tr",["td","split"],["td","\u662f\u5426\u5c55\u793a\u5206\u5272\u7ebf"],["td","boolean"],["td","true"]]]],["h3","List grid props"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","column"],["td","\u5217\u6570"],["td","number"],["td","-"]],["tr",["td","gutter"],["td","\u6805\u683c\u95f4\u9694"],["td","number"],["td","0"]],["tr",["td","xs"],["td",["code","<576px"]," \u5c55\u793a\u7684\u5217\u6570"],["td","number"],["td","-"]],["tr",["td","sm"],["td",["code","\u2265576px"]," \u5c55\u793a\u7684\u5217\u6570"],["td","number"],["td","-"]],["tr",["td","md"],["td",["code","\u2265768px"]," \u5c55\u793a\u7684\u5217\u6570"],["td","number"],["td","-"]],["tr",["td","lg"],["td",["code","\u2265992px"]," \u5c55\u793a\u7684\u5217\u6570"],["td","number"],["td","-"]],["tr",["td","xl"],["td",["code","\u22651200px"]," \u5c55\u793a\u7684\u5217\u6570"],["td","number"],["td","-"]],["tr",["td","xxl"],["td",["code","\u22651600px"]," \u5c55\u793a\u7684\u5217\u6570"],["td","number"],["td","-"]]]],["h3","List.Item"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","actions"],["td","\u5217\u8868\u64cd\u4f5c\u7ec4\uff0c\u6839\u636e ",["code","itemLayout"]," \u7684\u4e0d\u540c, \u4f4d\u7f6e\u5728\u5361\u7247\u5e95\u90e8\u6216\u8005\u6700\u53f3\u4fa7"],["td","Array","<","ReactNode>"],["td","-"]],["tr",["td","extra"],["td","\u989d\u5916\u5185\u5bb9, \u901a\u5e38\u7528\u5728 ",["code","itemLayout"]," \u4e3a ",["code","vertical"]," \u7684\u60c5\u51b5\u4e0b, \u5c55\u793a\u53f3\u4fa7\u5185\u5bb9; ",["code","horizontal"]," \u5c55\u793a\u5728\u5217\u8868\u5143\u7d20\u6700\u53f3\u4fa7"],["td","string","|","ReactNode"],["td","-"]]]],["h3","List.Item.Meta"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","avatar"],["td","\u5217\u8868\u5143\u7d20\u7684\u56fe\u6807"],["td","ReactNode"],["td","-"]],["tr",["td","description"],["td","\u5217\u8868\u5143\u7d20\u7684\u63cf\u8ff0\u5185\u5bb9"],["td","string","|","ReactNode"],["td","-"]],["tr",["td","title"],["td","\u5217\u8868\u5143\u7d20\u7684\u6807\u9898"],["td","string","|","ReactNode"],["td","-"]]]]]}}});