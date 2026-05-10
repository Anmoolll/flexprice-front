import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{P as Y}from"./progress-Cu0Xz6vk.js";import{c as x}from"./utils-BLSKlp9E.js";import"./index-yBjzXJbu.js";import"./index-tvICUrOf.js";import"./index-CAnzo2x9.js";import"./index-BLHw34Di.js";import"./index-CFHoO_dA.js";import"./index-Cz2yum4A.js";const Z={neutral:"[&>div]:bg-[#3293D9]",success:"[&>div]:bg-[#16A34A]",warning:"[&>div]:bg-[#C2410C]",danger:"[&>div]:bg-[#DC2626]"},ee={neutral:"bg-[#E5F0FF]",success:"bg-[#ECFBE4]",warning:"bg-[#FFF7ED]",danger:"bg-[#FEE2E2]"},ae=a=>a.toLocaleString(),r=({value:a,limit:t,label:W,formatValue:f=ae,thresholds:n,tone:K,hidePercentage:z,className:J})=>{const s=t===void 0||!Number.isFinite(t),i=s?0:Math.max(0,Math.min(100,a/(t||1)*100)),Q=(n==null?void 0:n.warning)??75,X=(n==null?void 0:n.danger)??95,b=K??(s?"neutral":i>=X?"danger":i>=Q?"warning":"success");return e.jsxs("div",{className:x("w-full space-y-1.5",J),children:[e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsx("span",{className:"text-[#111827] font-medium",children:W}),e.jsxs("span",{className:"text-muted-foreground tabular-nums",children:[f(a),s?" – unlimited":` / ${f(t)}`,!s&&!z&&` (${i.toFixed(0)}%)`]})]}),e.jsx(Y,{value:s?100:i,className:x("h-2",ee[b],Z[b])})]})};try{r.displayName="UsageBar",r.__docgenInfo={description:'`UsageBar` visualises consumption against a limit with threshold-aware\ncolors. Accessible: exposes `role="progressbar"` with `aria-valuenow` via\nthe underlying Radix Progress primitive.',displayName:"UsageBar",props:{value:{defaultValue:null,description:"Current consumed value.",name:"value",required:!0,type:{name:"number"}},limit:{defaultValue:null,description:"Total allotted value. Pass `Infinity` or omit for an unlimited meter.",name:"limit",required:!1,type:{name:"number | undefined"}},label:{defaultValue:null,description:"Optional label rendered above the bar.",name:"label",required:!1,type:{name:"ReactNode"}},formatValue:{defaultValue:{value:"(n: number) => n.toLocaleString()"},description:"Formatter for the numeric value + limit (defaults to `toLocaleString`).",name:"formatValue",required:!1,type:{name:"((n: number) => string) | undefined"}},thresholds:{defaultValue:null,description:"Threshold → tone overrides. Defaults to 75% warning / 95% danger.",name:"thresholds",required:!1,type:{name:"{ warning?: number | undefined; danger?: number | undefined; } | undefined"}},tone:{defaultValue:null,description:"Force a specific tone (skips threshold logic).",name:"tone",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"neutral"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}},hidePercentage:{defaultValue:null,description:"Hide the percentage text on the right.",name:"hidePercentage",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"Additional wrapper classes.",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}const ce={title:"Molecules/UsageBar",component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"`UsageBar` visualises consumption against a limit with threshold-aware\r\ncoloring. Use it for API quotas, credits, seats, and any other metered\r\nresource shown in the Flexprice dashboard."}}},argTypes:{tone:{control:"inline-radio",options:[void 0,"neutral","success","warning","danger"]},hidePercentage:{control:"boolean"}},args:{label:"API events",value:4800,limit:1e4},decorators:[a=>e.jsx("div",{className:"w-[360px]",children:e.jsx(a,{})})]},o={},l={args:{value:8200}},d={args:{value:9700}},u={args:{value:1e4}},c={args:{label:"Active seats",value:42,limit:1/0}},m={args:{label:"Bandwidth",value:74.2,limit:100,formatValue:a=>`${a.toFixed(1)} GB`}},p={args:{label:"Processed records",value:41500,limit:5e4,hidePercentage:!0}},g={args:{label:"Compute quota",value:64,limit:100,thresholds:{warning:60,danger:85}}},v={render:()=>e.jsxs("div",{className:"space-y-4 w-[360px]",children:[e.jsx(r,{label:"Events",value:4800,limit:1e4}),e.jsx(r,{label:"Seats",value:8,limit:10}),e.jsx(r,{label:"Storage",value:9.7,limit:10,formatValue:a=>`${a.toFixed(1)} GB`}),e.jsx(r,{label:"Credits",value:250,limit:1/0})]})};var h,w,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(y=(w=o.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var F,B,S;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    value: 8200
  }
}`,...(S=(B=l.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var N,j,P;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: 9700
  }
}`,...(P=(j=d.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var C,E,U;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    value: 10000
  }
}`,...(U=(E=u.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var V,_,q;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Active seats',
    value: 42,
    limit: Infinity
  }
}`,...(q=(_=c.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var A,T,I;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Bandwidth',
    value: 74.2,
    limit: 100,
    formatValue: n => \`\${n.toFixed(1)} GB\`
  }
}`,...(I=(T=m.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var D,O,$;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Processed records',
    value: 41500,
    limit: 50000,
    hidePercentage: true
  }
}`,...($=(O=p.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var k,R,G;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Compute quota',
    value: 64,
    limit: 100,
    thresholds: {
      warning: 60,
      danger: 85
    }
  }
}`,...(G=(R=g.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var H,L,M;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className='space-y-4 w-[360px]'>\r
            <UsageBar label='Events' value={4800} limit={10000} />\r
            <UsageBar label='Seats' value={8} limit={10} />\r
            <UsageBar label='Storage' value={9.7} limit={10} formatValue={n => \`\${n.toFixed(1)} GB\`} />\r
            <UsageBar label='Credits' value={250} limit={Infinity} />\r
        </div>
}`,...(M=(L=v.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const me=["Ok","Warning","Danger","Full","Unlimited","CustomFormatter","HiddenPercentage","CustomThresholds","Stacked"];export{m as CustomFormatter,g as CustomThresholds,d as Danger,u as Full,p as HiddenPercentage,o as Ok,v as Stacked,c as Unlimited,l as Warning,me as __namedExportsOrder,ce as default};
