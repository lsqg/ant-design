webpackJsonp([41],{1813:function(n,a,s){n.exports={basic:s(2172),digit:s(2173),disabled:s(2174),formatter:s(2175),size:s(2176)}},2172:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u6570\u5b57\u8f93\u5165\u6846\u3002"]],"en-US":[["p","Numeric-only input box."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/input-number/demo/basic.md",id:"components-input-number-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> InputNumber <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'changed\'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputNumber</span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(9),s(26));return n.createElement(a.InputNumber,{min:1,max:10,defaultValue:3,onChange:function(n){console.log("changed",n)}})}}},2173:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u548c\u539f\u751f\u7684\u6570\u5b57\u8f93\u5165\u6846\u4e00\u6837\uff0cvalue \u7684\u7cbe\u5ea6\u7531 step \u7684\u5c0f\u6570\u4f4d\u6570\u51b3\u5b9a\u3002"]],"en-US":[["p","A numeric-only input box whose values can be increased or decreased using a decimal step. The number of decimals (also known as precision) is determined by the step prop."]]},meta:{order:3,title:{"zh-CN":"\u5c0f\u6570","en-US":"Decimals"},filename:"components/input-number/demo/digit.md",id:"components-input-number-demo-digit"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> InputNumber <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'changed\'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputNumber</span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span> <span class="token attr-name">step</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0.1</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(9),s(26));return n.createElement(a.InputNumber,{min:0,max:10,step:.1,onChange:function(n){console.log("changed",n)}})}}},2174:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u70b9\u51fb\u6309\u94ae\u5207\u6362\u53ef\u7528\u72b6\u6001\u3002"]],"en-US":[["p","Click the button to toggle between available and disabled states."]]},meta:{order:2,title:{"zh-CN":"\u4e0d\u53ef\u7528","en-US":"Disabled"},filename:"components/input-number/demo/disabled.md",id:"components-input-number-demo-disabled"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> InputNumber<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  toggle <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      disabled<span class="token punctuation">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>disabled<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputNumber</span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>disabled<span class="token punctuation">}</span></span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>toggle<span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Toggle disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(9),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),t=s(26);function p(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}var e=function(s){function e(){var n,a,s;!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,e);for(var t=arguments.length,o=Array(t),c=0;c<t;c++)o[c]=arguments[c];return a=s=p(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(o))),s.state={disabled:!0},s.toggle=function(){s.setState({disabled:!s.state.disabled})},p(s,a)}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(e,n.Component),a(e,[{key:"render",value:function(){return n.createElement("div",null,n.createElement(t.InputNumber,{min:1,max:10,disabled:this.state.disabled,defaultValue:3}),n.createElement("div",{style:{marginTop:20}},n.createElement(t.Button,{onClick:this.toggle,type:"primary"},"Toggle disabled")))}}]),e}();return n.createElement(e,null)}}},2175:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u901a\u8fc7 ",["code","formatter"]," \u683c\u5f0f\u5316\u6570\u5b57\uff0c\u4ee5\u5c55\u793a\u5177\u6709\u5177\u4f53\u542b\u4e49\u7684\u6570\u636e\uff0c\u5f80\u5f80\u9700\u8981\u914d\u5408 ",["code","parser"]," \u4e00\u8d77\u4f7f\u7528\u3002"]],"en-US":[["p","Display value within it's situation with ",["code","formatter"],", and we usually use ",["code","parser"]," at the same time."]]},meta:{order:4,title:{"zh-CN":"\u683c\u5f0f\u5316\u5c55\u793a","en-US":"Formatter"},filename:"components/input-number/demo/formatter.md",id:"components-input-number-demo-formatter"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> InputNumber <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'changed\'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputNumber</span>\n      <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1000</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">formatter</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> <span class="token template-string"><span class="token string">`$ </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/\\B(?=(\\d{3})+(?!\\d))/g</span><span class="token punctuation">,</span> <span class="token string">\',\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">parser</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> value<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/\\$\\s?|(,*)/g</span><span class="token punctuation">,</span> <span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputNumber</span>\n      <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">formatter</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%`</span></span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">parser</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value <span class="token operator">=</span><span class="token operator">></span> value<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">\'%\'</span><span class="token punctuation">,</span> <span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(9),s(26));function t(n){console.log("changed",n)}return n.createElement("div",null,n.createElement(a.InputNumber,{defaultValue:1e3,formatter:function(n){return("$ "+n).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(n){return n.replace(/\$\s?|(,*)/g,"")},onChange:t}),n.createElement(a.InputNumber,{defaultValue:100,min:0,max:100,formatter:function(n){return n+"%"},parser:function(n){return n.replace("%","")},onChange:t}))}}},2176:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u4e09\u79cd\u5927\u5c0f\u7684\u6570\u5b57\u8f93\u5165\u6846\uff0c\u5f53 size \u5206\u522b\u4e3a ",["code","large"]," \u548c ",["code","small"]," \u65f6\uff0c\u8f93\u5165\u6846\u9ad8\u5ea6\u4e3a ",["code","40px"]," \u548c ",["code","24px"]," \uff0c\u9ed8\u8ba4\u9ad8\u5ea6\u4e3a ",["code","32px"],"\u3002"]],"en-US":[["p","There are three sizes available to a numeric input box. By default, the size is ",["code","32px"],". The two additional sizes are ",["code","large"]," and ",["code","small"]," which means ",["code","40px"]," and ",["code","24px"],", respectively."]]},meta:{order:1,title:{"zh-CN":"\u4e09\u79cd\u5927\u5c0f","en-US":"Sizes"},filename:"components/input-number/demo/size.md",id:"components-input-number-demo-size"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> InputNumber <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'changed\'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputNumber</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">100000</span><span class="token punctuation">}</span></span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputNumber</span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">100000</span><span class="token punctuation">}</span></span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InputNumber</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">100000</span><span class="token punctuation">}</span></span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(9),s(26));function t(n){console.log("changed",n)}return n.createElement("div",null,n.createElement(a.InputNumber,{size:"large",min:1,max:1e5,defaultValue:3,onChange:t}),n.createElement(a.InputNumber,{min:1,max:1e5,defaultValue:3,onChange:t}),n.createElement(a.InputNumber,{size:"small",min:1,max:1e5,defaultValue:3,onChange:t}))},style:".ant-input-number {\n  margin-right: 10px;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.ant-input-number</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}}});