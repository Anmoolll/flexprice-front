import{j as p}from"./jsx-runtime-Cf8x2fCZ.js";import{within as l,userEvent as m,expect as z}from"./index-CH2Su9EI.js";import{r as J}from"./index-tvICUrOf.js";import{F as V}from"./Select-Y0xiqHMU.js";import"./index-yBjzXJbu.js";import"./index-CAnzo2x9.js";import"./index-BLHw34Di.js";import"./index-D-RJfZY-.js";import"./index-Cz2yum4A.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-zuoeuwZ4.js";import"./check-BKLz0gEF.js";const K=[{value:"starter",label:"Starter",description:"10k events / month, one project"},{value:"growth",label:"Growth",description:"100k events, unlimited projects"},{value:"scale",label:"Scale",description:"Volume pricing, priority support"},{value:"enterprise",label:"Enterprise",description:"Custom SLA",disabled:!0}],ne={title:"Atoms/Select",component:V,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"`Select` is the Flexprice dropdown primitive. It wraps Radix Select with\r\nlabel, description, error, optional radio-style items, and per-option\r\nprefix/suffix icons & descriptions."}}},args:{options:K,label:"Plan",placeholder:"Select a plan"},decorators:[r=>p.jsx("div",{style:{width:320},children:p.jsx(r,{})})]},e=r=>{const[d,c]=J.useState("");return p.jsx(V,{...r,value:d,onChange:c})},t={render:e,play:async({canvasElement:r})=>{const c=l(r).getByRole("combobox");await m.click(c);const Y=await l(document.body).findByText("Growth");await m.click(Y),await z(c).toHaveTextContent("Growth")}},o={render:e,args:{required:!0,description:"You can change this later in Billing → Plans."}},s={render:e,args:{error:"A plan is required to continue."}},a={render:e,args:{isRadio:!0}},n={render:e,args:{disabled:!0}},i={render:e,args:{options:[],noOptionsText:"No plans are available in this region."}};var u,g,h,y,w;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: Controlled,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox');
    await userEvent.click(trigger);
    const option = await within(document.body).findByText('Growth');
    await userEvent.click(option);
    await expect(trigger).toHaveTextContent('Growth');
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source},description:{story:"Baseline select with a label and placeholder.",...(w=(y=t.parameters)==null?void 0:y.docs)==null?void 0:w.description}}};var x,v,b,S,E;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: Controlled,
  args: {
    required: true,
    description: 'You can change this later in Billing → Plans.'
  }
}`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source},description:{story:"Required field with a description.",...(E=(S=o.parameters)==null?void 0:S.docs)==null?void 0:E.description}}};var f,C,R,j,B;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Controlled,
  args: {
    error: 'A plan is required to continue.'
  }
}`,...(R=(C=s.parameters)==null?void 0:C.docs)==null?void 0:R.source},description:{story:"Error state.",...(B=(j=s.parameters)==null?void 0:j.docs)==null?void 0:B.description}}};var D,T,k,P,q;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: Controlled,
  args: {
    isRadio: true
  }
}`,...(k=(T=a.parameters)==null?void 0:T.docs)==null?void 0:k.source},description:{story:"Radio-style items (single-choice with a radio indicator).",...(q=(P=a.parameters)==null?void 0:P.docs)==null?void 0:q.description}}};var A,G,O,N,W;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: Controlled,
  args: {
    disabled: true
  }
}`,...(O=(G=n.parameters)==null?void 0:G.docs)==null?void 0:O.source},description:{story:"Disabled select.",...(W=(N=n.parameters)==null?void 0:N.docs)==null?void 0:W.description}}};var F,_,H,I,L;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: Controlled,
  args: {
    options: [],
    noOptionsText: 'No plans are available in this region.'
  }
}`,...(H=(_=i.parameters)==null?void 0:_.docs)==null?void 0:H.source},description:{story:"Empty state — custom copy when there are no options.",...(L=(I=i.parameters)==null?void 0:I.docs)==null?void 0:L.description}}};const ie=["Default","WithDescription","WithError","RadioStyle","Disabled","Empty"];export{t as Default,n as Disabled,i as Empty,a as RadioStyle,o as WithDescription,s as WithError,ie as __namedExportsOrder,ne as default};
