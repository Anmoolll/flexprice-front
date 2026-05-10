import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as r}from"./Spinner-DWIZM58S.js";import"./index-yBjzXJbu.js";const N={title:"Atoms/Spinner",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"`Spinner` is a lightweight inline loading indicator. It inherits its color\r\nfrom the parent's `color` / text color and scales via the `size` prop."}}},args:{size:24}},s={},a={parameters:{layout:"padded"},render:()=>e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx(r,{size:16}),e.jsx(r,{size:24}),e.jsx(r,{size:40}),e.jsx(r,{size:64})]})},n={parameters:{layout:"padded"},render:()=>e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx("span",{className:"text-primary",children:e.jsx(r,{})}),e.jsx("span",{className:"text-destructive",children:e.jsx(r,{})}),e.jsx("span",{className:"text-[#16A34A]",children:e.jsx(r,{})}),e.jsx("span",{className:"text-muted-foreground",children:e.jsx(r,{})})]})},t={parameters:{layout:"padded"},render:()=>e.jsxs("div",{className:"inline-flex items-center gap-2 rounded-md border border-border bg-white px-3 py-2 text-sm text-muted-foreground",children:[e.jsx(r,{size:14}),e.jsx("span",{children:"Syncing usage data..."})]})};var i,o,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(d=(o=s.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var p,c,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div className='flex items-center gap-6'>\r
            <Spinner size={16} />\r
            <Spinner size={24} />\r
            <Spinner size={40} />\r
            <Spinner size={64} />\r
        </div>
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,x,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div className='flex items-center gap-6'>\r
            <span className='text-primary'><Spinner /></span>\r
            <span className='text-destructive'><Spinner /></span>\r
            <span className='text-[#16A34A]'><Spinner /></span>\r
            <span className='text-muted-foreground'><Spinner /></span>\r
        </div>
}`,...(u=(x=n.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var g,S,j;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div className='inline-flex items-center gap-2 rounded-md border border-border bg-white px-3 py-2 text-sm text-muted-foreground'>\r
            <Spinner size={14} />\r
            <span>Syncing usage data...</span>\r
        </div>
}`,...(j=(S=t.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const y=["Default","Sizes","InheritsColor","InlineLoadingState"];export{s as Default,n as InheritsColor,t as InlineLoadingState,a as Sizes,y as __namedExportsOrder,N as default};
