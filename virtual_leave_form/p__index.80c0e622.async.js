"use strict";(self.webpackChunkvirtual_leave_form=self.webpackChunkvirtual_leave_form||[]).push([[866],{68400:function(st,y,e){e.r(y),e.d(y,{default:function(){return w}});var z=e(90228),g=e.n(z),W=e(87999),E=e.n(W),G=e(48305),a=e.n(G),S=e(79519),H=e(11389),M=e.n(H),t=e(52676),v=function(n){return M().format(n,{thousand:",",code:"jp",precision:0,symbol:"\uFFE5"})},O=`
  @media print {
    hr {
      border-top: 1px solid #000 !important;
      margin: 10px 0 !important;
      visibility: visible !important;
    }
  }
`,L=function(n){var o=n.order,u=n.prefix,x=n.orderNum,h=n.tip,c=o.reduce(function(i,d){return i+d.price},0);return(0,t.jsxs)("div",{children:[(0,t.jsx)("style",{children:O}),(0,t.jsxs)("h1",{style:{fontSize:"20px"},children:["#",u,"-",x]}),(0,t.jsx)("hr",{style:{border:"1px solid #000",margin:"1.5em 0",backgroundColor:"#000",borderBottom:"none"}}),(0,t.jsxs)("h1",{style:{fontSize:"30px"},children:["#",u,"-",x]}),(0,t.jsx)("div",{style:{minWidth:"100%"},children:(0,t.jsxs)("table",{style:{margin:"1em 0 0 0",borderCollapse:"collapse",minWidth:"100%"},children:[(0,t.jsx)("thead",{style:{border:"1px solid #000000"},children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{style:{border:"1px solid #000000"},children:"Quantity"}),(0,t.jsx)("th",{style:{border:"1px solid #000000",textAlign:"left"},children:"Item"}),(0,t.jsx)("th",{style:{textAlign:"right",border:"1px solid #000000"},children:"Price"})]})}),(0,t.jsxs)("tbody",{style:{border:"1px solid #000000"},children:[o.map(function(i,d){return(0,t.jsxs)("tr",{style:{border:"1px solid #000000"},children:[(0,t.jsx)("td",{style:{border:"1px solid #000000",textAlign:"center"},children:i.quantity}),(0,t.jsx)("td",{style:{border:"1px solid #000000"},children:i.title}),(0,t.jsx)("td",{style:{textAlign:"right",border:"1px solid #000000"},children:v(i.price)})]},d)}),(0,t.jsxs)("tr",{style:{border:"1px solid #000000"},children:[(0,t.jsx)("td",{style:{border:"1px solid #000000",textAlign:"center"},children:"\u2764"}),(0,t.jsx)("td",{style:{border:"1px solid #000000"},children:"Tip"}),(0,t.jsx)("td",{style:{border:"1px solid #000000",textAlign:"right"},children:v(h)})]})]})]})}),(0,t.jsx)("div",{style:{float:"right"},children:(0,t.jsxs)(S.Z,{children:[(0,t.jsx)("strong",{children:"Total"}),(0,t.jsx)("strong",{children:v(c)})]})})]})},Q=L,U=e(25621),V=e(70691),$=e(83061),C=e(45529),I=e(72215),l=e(75271),p=e(35063),J=e(71323),A=e(37915),Z=e(6670),K=e(95052),X=e(56229),Y=p.Z.TextArea;function w(){var m=(0,l.useState)("Doki"),n=a()(m,2),o=n[0],u=n[1],x=(0,l.useState)("0001"),h=a()(x,2),c=h[0],i=h[1],d=(0,l.useState)(0),b=a()(d,2),T=b[0],k=b[1],q=(0,l.useState)("noteContent"),N=a()(q,2),j=N[0],_=N[1],tt=(0,l.useState)([{quantity:1,title:"04-15 \u2764 \u65B0\u4F5C \u2764\u30101419\u3011\u30B3\u30E9\u30C3\u30BF \u9AD8\u7D1A\u30AC\u30E9\u30B9\u30D3\u30FC\u30BA10mm,8mm,\u30E9\u30A6\u30F3\u30C9\u30AB\u30C3\u30C8\u30D3\u30FC\u30BA10mm,\u9AD8\u54C1\u8CEA\u30E1\u30BF\u30EB",price:1120}]),P=a()(tt,2),F=P[0],et=P[1],rt=(0,l.useState)(!1),D=a()(rt,2),B=D[0],R=D[1],nt=function(){R(!0),requestAnimationFrame(function(){window.print(),setTimeout(function(){return R(!1)},100)})};return(0,t.jsxs)("div",{children:[(0,t.jsx)("style",{children:`
          
        @media print {
          .no-print {
            display: none !important;
          }
              #note-area {
            page-break-before: always;
           }
          #printable-area {
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
   
          #printable-area {
            font-size:11px;
           }
      
        }
      `}),(0,t.jsxs)(J.Z,{children:[(0,t.jsx)(A.Z,{span:12,children:(0,t.jsxs)(Z.Z,{className:"no-print",title:(0,t.jsx)(K.ZP,{onClick:function(){return nt()},children:"\u{1F5A8}\uFE0F \u6253\u5370\u8BA2\u5355"}),children:[(0,t.jsxs)(S.Z,{children:[(0,t.jsx)(p.Z,{value:o,onChange:function(r){return u(r.target.value)},addonBefore:"\u524D\u7F00",style:{width:200}}),(0,t.jsx)(p.Z,{value:c,onChange:function(r){return i(r.target.value)},addonBefore:"\u5E8F\u53F7",style:{width:200}}),(0,t.jsx)(X.Z,{value:T,onChange:function(r){return k(r||0)},addonBefore:"Tip",style:{width:200}})]}),(0,t.jsx)(Y,{rows:4,value:j,onChange:function(r){_(r.target.value)}}),(0,t.jsx)(Z.Z,{style:{overflow:"auto",maxHeight:500},children:(0,t.jsx)(U.A,{onFinish:function(){var s=E()(g()().mark(function r(it){return g()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:et(it.order);case 1:case"end":return f.stop()}},r)}));return function(r){return s.apply(this,arguments)}}(),children:(0,t.jsx)(V.u,{name:"order",label:"\u4EA7\u54C1\u4FE1\u606F",initialValue:F,children:(0,t.jsxs)($.UW,{children:[(0,t.jsx)(C.Z,{name:"quantity",label:"quantity",rules:[{required:!0}]}),(0,t.jsx)(I.Z,{name:"title",label:"Item",rules:[{required:!0}]}),(0,t.jsx)(C.Z,{name:"price",label:"price",rules:[{required:!0}]})]},"group")})})})]})}),(0,t.jsx)(A.Z,{span:B?24:12,style:{padding:B?0:10},children:(0,t.jsxs)("div",{id:"printable-area",children:[(0,t.jsx)(Q,{prefix:o,orderNum:c,tip:T,order:F}),j&&(0,t.jsxs)("div",{id:"note-area",children:[(0,t.jsx)("div",{children:"Note"}),(0,t.jsx)("h2",{style:{fontSize:20},children:j})]})]})})]})]})}}}]);
