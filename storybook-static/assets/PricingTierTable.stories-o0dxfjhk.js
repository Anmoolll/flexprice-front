import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{within as k,expect as z}from"./index-CH2Su9EI.js";import{B as u}from"./Button-BowJkpMB.js";import{c as h}from"./utils-BLSKlp9E.js";import{C as L}from"./check-BKLz0gEF.js";import{M as O}from"./minus-BprdO1kM.js";import"./index-yBjzXJbu.js";import"./index-tvICUrOf.js";import"./index-CFHoO_dA.js";import"./index-Cz2yum4A.js";import"./createLucideIcon-zuoeuwZ4.js";const g=({tiers:s,features:d,className:B})=>e.jsx("div",{className:h("w-full rounded-[6px] border border-border bg-white overflow-hidden",B),children:e.jsxs("table",{className:"w-full table-fixed",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-border",children:[e.jsx("th",{className:"text-left px-5 py-5 w-1/4",children:e.jsx("span",{className:"sr-only",children:"Feature"})}),s.map(r=>e.jsxs("th",{scope:"col",className:h("px-5 py-5 text-left align-top",r.highlight&&"bg-[#EFF8FF]"),children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-base font-medium text-[#111827]",children:r.name}),r.highlight&&e.jsx("span",{className:"inline-flex items-center rounded-full bg-[#2F6FE2] px-2 py-0.5 text-[10px] font-medium text-white uppercase tracking-wide",children:"Recommended"})]}),r.description&&e.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:r.description}),e.jsx("p",{className:"mt-3 text-xl font-semibold text-[#111827]",children:r.price}),r.cta&&e.jsx("div",{className:"mt-3",children:r.cta})]},r.id))]})}),e.jsx("tbody",{children:d.map(r=>e.jsxs("tr",{className:"border-b border-border last:border-0",children:[e.jsx("th",{scope:"row",className:"text-left px-5 py-3.5 text-sm font-normal text-[#111827]",children:r.label}),s.map(m=>{const p=r.values[m.id];return e.jsx("td",{className:h("px-5 py-3.5 text-sm",m.highlight&&"bg-[#EFF8FF]/40"),children:typeof p=="boolean"?p?e.jsx(L,{size:16,className:"text-[#16A34A]","aria-label":"included"}):e.jsx(O,{size:16,className:"text-muted-foreground","aria-label":"not included"}):e.jsx("span",{children:p??"—"})},m.id)})]},r.label))})]})});try{g.displayName="PricingTierTable",g.__docgenInfo={description:"`PricingTierTable` compares plans side-by-side. Fully data-driven — pass\n`tiers` (columns) and `features` (rows). Booleans render as check/minus\nicons; strings are rendered verbatim.",displayName:"PricingTierTable",props:{tiers:{defaultValue:null,description:"Ordered list of tiers shown as columns.",name:"tiers",required:!0,type:{name:"PricingTier[]"}},features:{defaultValue:null,description:"Ordered list of feature rows.",name:"features",required:!0,type:{name:"PricingFeatureRow[]"}},className:{defaultValue:null,description:"Additional wrapper classes.",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}const a=[{id:"starter",name:"Starter",description:"For hobby projects and prototypes.",price:"$0 / mo",cta:e.jsx(u,{variant:"outline",size:"sm",children:"Start free"})},{id:"growth",name:"Growth",description:"For growing businesses with real usage.",price:"$49 / mo",highlight:!0,cta:e.jsx(u,{size:"sm",children:"Choose Growth"})},{id:"scale",name:"Scale",description:"For high-volume workloads.",price:"Custom",cta:e.jsx(u,{variant:"outline",size:"sm",children:"Contact sales"})}],c=[{label:"Events / month",values:{starter:"10k",growth:"1M",scale:"Unlimited"}},{label:"Projects",values:{starter:"1",growth:"10",scale:"Unlimited"}},{label:"Priority support",values:{starter:!1,growth:!0,scale:!0}},{label:"SLA",values:{starter:!1,growth:!1,scale:!0}},{label:"SSO",values:{starter:!1,growth:!0,scale:!0}},{label:"Custom contracts",values:{starter:!1,growth:!1,scale:!0}}],H={title:"Organisms/PricingTierTable",component:g,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Side-by-side pricing tier comparison. Fully data-driven."}}},args:{tiers:a,features:c},decorators:[s=>e.jsx("div",{className:"w-full max-w-4xl",children:e.jsx(s,{})})]},t={},n={args:{tiers:a.map(s=>({...s,highlight:!1})),features:c}},i={args:{tiers:a,features:c.slice(0,3)}},o={args:{tiers:a,features:[]}},l={args:{tiers:a,features:[{label:"Guaranteed export retention period for compliance and finance audits",values:{starter:"7 days",growth:"90 days",scale:"365 days"}},...c.slice(0,2)]},play:async({canvasElement:s})=>{const d=k(s);await z(d.getByText(/recommended/i)).toBeInTheDocument()}};var x,f,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,w,j;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    tiers: tiers.map(t => ({
      ...t,
      highlight: false
    })),
    features
  }
}`,...(j=(w=n.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var v,N,F;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    tiers,
    features: features.slice(0, 3)
  }
}`,...(F=(N=i.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var T,S,E;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    tiers,
    features: []
  }
}`,...(E=(S=o.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var _,P,C;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    tiers,
    features: [{
      label: 'Guaranteed export retention period for compliance and finance audits',
      values: {
        starter: '7 days',
        growth: '90 days',
        scale: '365 days'
      }
    }, ...features.slice(0, 2)]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/recommended/i)).toBeInTheDocument();
  }
}`,...(C=(P=l.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};const J=["Default","NoRecommended","CompactFeatureList","EmptyFeatures","WithLongFeatureNames"];export{i as CompactFeatureList,t as Default,o as EmptyFeatures,n as NoRecommended,l as WithLongFeatureNames,J as __namedExportsOrder,H as default};
