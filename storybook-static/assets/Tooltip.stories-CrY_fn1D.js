import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{within as n,userEvent as x,expect as g}from"./index-CH2Su9EI.js";import{B as y}from"./Button-BowJkpMB.js";import{T as f}from"./Tooltip-C49e0TIC.js";import{I as w}from"./info-DdqcZ-Gs.js";import"./index-yBjzXJbu.js";import"./index-tvICUrOf.js";import"./index-CFHoO_dA.js";import"./index-Cz2yum4A.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-zuoeuwZ4.js";import"./index-D-RJfZY-.js";import"./index-CAnzo2x9.js";import"./index-BLHw34Di.js";const P={title:"Atoms/Tooltip",component:f,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"`Tooltip` is a thin, styled wrapper around Radix Tooltip with Flexprice\r\ndefaults (sideOffset, typography, subtle shadow). Use for short hints —\r\nnever as the only way to convey critical information (a11y)."}}},argTypes:{side:{control:"inline-radio",options:["top","right","bottom","left"]},align:{control:"inline-radio",options:["start","center","end"]}},args:{content:"Usage includes all metered events from the last 30 days.",side:"top",align:"center",children:e.jsxs(y,{variant:"outline",size:"sm",children:[e.jsx(w,{size:14})," Hover me"]})},decorators:[a=>e.jsx("div",{className:"p-16",children:e.jsx(a,{})})]},t={play:async({canvasElement:a})=>{const v=n(a).getByRole("button",{name:/hover me/i});await x.hover(v),await g(await n(document.body).findByText(/usage includes all metered events/i)).toBeInTheDocument()}},o={args:{side:"bottom"}},s={args:{content:e.jsxs("div",{className:"max-w-xs space-y-1",children:[e.jsx("p",{className:"font-medium",children:"What is MTR?"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Monthly Tracked Revenue — the normalized MRR across all active subscriptions."})]})}};var r,i,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', {
      name: /hover me/i
    });
    await userEvent.hover(trigger);
    await expect(await within(document.body).findByText(/usage includes all metered events/i)).toBeInTheDocument();
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,l,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    side: 'bottom'
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,u,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    content: <div className='max-w-xs space-y-1'>\r
                <p className='font-medium'>What is MTR?</p>\r
                <p className='text-xs text-muted-foreground'>\r
                    Monthly Tracked Revenue — the normalized MRR across all active subscriptions.\r
                </p>\r
            </div>
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const U=["Default","BottomPlacement","RichContent"];export{o as BottomPlacement,t as Default,s as RichContent,U as __namedExportsOrder,P as default};
