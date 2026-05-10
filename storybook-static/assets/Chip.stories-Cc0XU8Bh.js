import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{within as R,userEvent as H,expect as N,fn as B}from"./index-CH2Su9EI.js";import{C as a}from"./Chip-Soxnzbmb.js";import{C as V,T as X,a as _}from"./triangle-alert-B-2MpZEI.js";import{I as q}from"./info-DdqcZ-Gs.js";import"./index-yBjzXJbu.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-zuoeuwZ4.js";import"./index-tvICUrOf.js";const $={title:"Atoms/Chip",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"`Chip` is a compact, semantic status pill used throughout Flexprice\r\n(e.g. invoice statuses, plan cadence, integration health). It supports\r\nfive semantic variants and a custom color override."}}},argTypes:{variant:{control:"inline-radio",options:["default","success","warning","failed","info"]},disabled:{control:"boolean"},onClick:{action:"clicked"}},args:{label:"Active",variant:"success"}},r={},s={parameters:{layout:"padded"},render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"default",label:"Default"}),e.jsx(a,{variant:"success",label:"Paid",icon:e.jsx(V,{size:14})}),e.jsx(a,{variant:"warning",label:"Pending",icon:e.jsx(X,{size:14})}),e.jsx(a,{variant:"failed",label:"Overdue",icon:e.jsx(_,{size:14})}),e.jsx(a,{variant:"info",label:"Draft",icon:e.jsx(q,{size:14})})]})},n={args:{label:"Click me",variant:"info",onClick:B()},play:async({canvasElement:A,args:P})=>{const O=R(A).getByRole("button");await H.click(O),await N(P.onClick).toHaveBeenCalledTimes(1)}},i={args:{label:"Inactive",variant:"default",disabled:!0,onClick:B()}},t={args:{label:"Custom",bgColor:"#EEF2FF",textColor:"#4F46E5",borderColor:"#C7D2FE"}};var o,c,l,p,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source},description:{story:"Baseline chip.",...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.description}}};var m,u,C,v,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div className='flex flex-wrap gap-2'>\r
            <Chip variant='default' label='Default' />\r
            <Chip variant='success' label='Paid' icon={<CheckCircle2 size={14} />} />\r
            <Chip variant='warning' label='Pending' icon={<AlertTriangle size={14} />} />\r
            <Chip variant='failed' label='Overdue' icon={<XCircle size={14} />} />\r
            <Chip variant='info' label='Draft' icon={<Info size={14} />} />\r
        </div>
}`,...(C=(u=s.parameters)==null?void 0:u.docs)==null?void 0:C.source},description:{story:"Every semantic variant side-by-side.",...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.description}}};var f,g,h,x,k;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Click me',
    variant: 'info',
    onClick: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const chip = canvas.getByRole('button');
    await userEvent.click(chip);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source},description:{story:"Clickable chip with keyboard support (Enter/Space).",...(k=(x=n.parameters)==null?void 0:x.docs)==null?void 0:k.description}}};var y,E,w,j,D;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Inactive',
    variant: 'default',
    disabled: true,
    onClick: fn()
  }
}`,...(w=(E=i.parameters)==null?void 0:E.docs)==null?void 0:w.source},description:{story:"Disabled chip — neither clickable nor keyboard-focusable.",...(D=(j=i.parameters)==null?void 0:j.docs)==null?void 0:D.description}}};var F,z,I,S,T;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Custom',
    bgColor: '#EEF2FF',
    textColor: '#4F46E5',
    borderColor: '#C7D2FE'
  }
}`,...(I=(z=t.parameters)==null?void 0:z.docs)==null?void 0:I.source},description:{story:"Chip with custom color tokens (overrides variant).",...(T=(S=t.parameters)==null?void 0:S.docs)==null?void 0:T.description}}};const ee=["Default","Variants","Clickable","Disabled","CustomColor"];export{n as Clickable,t as CustomColor,r as Default,i as Disabled,s as Variants,ee as __namedExportsOrder,$ as default};
