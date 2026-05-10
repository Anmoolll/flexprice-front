import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{I as n}from"./InvoiceStatusBadge-0nwmZNhr.js";import"./index-yBjzXJbu.js";import"./Chip-Soxnzbmb.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-zuoeuwZ4.js";import"./index-tvICUrOf.js";import"./triangle-alert-B-2MpZEI.js";import"./clock-ySRxDokB.js";import"./file-text-DBmzZ0w6.js";const c=["DRAFT","FINALIZED","PENDING","PAID","OVERDUE","FAILED","VOIDED","SKIPPED"],_={title:"Molecules/InvoiceStatusBadge",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"`InvoiceStatusBadge` maps the canonical invoice lifecycle statuses to a\r\nconsistent color + icon + label via the `Chip` atom."}}},argTypes:{status:{control:"select",options:c},hideIcon:{control:"boolean"}},args:{status:"PAID"}},s={},r={parameters:{layout:"padded"},render:()=>o.jsx("div",{className:"flex flex-wrap gap-2",children:c.map(e=>o.jsx(n,{status:e},e))})},t={parameters:{layout:"padded"},render:()=>o.jsx("div",{className:"flex flex-wrap gap-2",children:c.map(e=>o.jsx(n,{status:e,hideIcon:!0},e))})},a={args:{status:"paid"}};var p,d,i;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(i=(d=s.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,u,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div className='flex flex-wrap gap-2'>\r
            {ALL_STATUSES.map(s => <InvoiceStatusBadge key={s} status={s} />)}\r
        </div>
}`,...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var I,S,g;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div className='flex flex-wrap gap-2'>\r
            {ALL_STATUSES.map(s => <InvoiceStatusBadge key={s} status={s} hideIcon />)}\r
        </div>
}`,...(g=(S=t.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var x,f,v,A,D;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    status: 'paid'
  }
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source},description:{story:"Lowercase input is normalised — useful when consuming raw backend payloads.",...(D=(A=a.parameters)==null?void 0:A.docs)==null?void 0:D.description}}};const U=["Default","AllStatuses","WithoutIcons","LowercaseInput"];export{r as AllStatuses,s as Default,a as LowercaseInput,t as WithoutIcons,U as __namedExportsOrder,_ as default};
