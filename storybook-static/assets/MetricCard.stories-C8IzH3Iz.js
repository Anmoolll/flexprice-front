import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{M as r}from"./MetricCard-DCU4REa3.js";import"./index-yBjzXJbu.js";import"./index-tvICUrOf.js";import"./Input-C8pFVffI.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-zuoeuwZ4.js";const Z={title:"Molecules/MetricCard",component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"`MetricCard` is the dashboard KPI primitive. It formats a numeric value\r\nwith an optional currency symbol or percent suffix, and can show an\r\nup/down trend indicator."}}},args:{title:"Monthly Recurring Revenue",value:128450.5,currency:"USD"},decorators:[d=>e.jsx("div",{className:"w-[320px]",children:e.jsx(d,{})})]},a={},t={args:{showChangeIndicator:!0,isNegative:!1}},s={args:{showChangeIndicator:!0,isNegative:!0,value:82300}},n={args:{title:"Churn rate",value:2.4,isPercent:!0,currency:void 0,showChangeIndicator:!0,isNegative:!0}},o={args:{title:"Active subscriptions",value:1248,currency:void 0}},c={args:{title:"New revenue this cycle",value:0,currency:"USD",showChangeIndicator:!1}},i={parameters:{layout:"padded"},decorators:[d=>e.jsx("div",{className:"w-full max-w-4xl",children:e.jsx(d,{})})],render:()=>e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsx(r,{title:"MRR",value:128450,currency:"USD",showChangeIndicator:!0}),e.jsx(r,{title:"Active customers",value:1248,showChangeIndicator:!0}),e.jsx(r,{title:"Churn rate",value:2.4,isPercent:!0,showChangeIndicator:!0,isNegative:!0}),e.jsx(r,{title:"Invoices overdue",value:23,showChangeIndicator:!0,isNegative:!0})]})};var u,l,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,g,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    showChangeIndicator: true,
    isNegative: false
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,w,C;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    showChangeIndicator: true,
    isNegative: true,
    value: 82300
  }
}`,...(C=(w=s.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var x,I,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Churn rate',
    value: 2.4,
    isPercent: true,
    currency: undefined,
    showChangeIndicator: true,
    isNegative: true
  }
}`,...(y=(I=n.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var N,f,S;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: 'Active subscriptions',
    value: 1248,
    currency: undefined
  }
}`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var M,j,D;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: 'New revenue this cycle',
    value: 0,
    currency: 'USD',
    showChangeIndicator: false
  }
}`,...(D=(j=c.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var P,R,U;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  decorators: [Story => <div className='w-full max-w-4xl'><Story /></div>],
  render: () => <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>\r
            <MetricCard title='MRR' value={128450} currency='USD' showChangeIndicator />\r
            <MetricCard title='Active customers' value={1248} showChangeIndicator />\r
            <MetricCard title='Churn rate' value={2.4} isPercent showChangeIndicator isNegative />\r
            <MetricCard title='Invoices overdue' value={23} showChangeIndicator isNegative />\r
        </div>
}`,...(U=(R=i.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};const _=["Default","WithTrendUp","WithTrendDown","PercentValue","PlainNumber","ZeroState","GridExample"];export{a as Default,i as GridExample,n as PercentValue,o as PlainNumber,s as WithTrendDown,t as WithTrendUp,c as ZeroState,_ as __namedExportsOrder,Z as default};
