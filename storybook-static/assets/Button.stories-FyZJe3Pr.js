import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{within as $,userEvent as ee,expect as te,fn as re}from"./index-CH2Su9EI.js";import{B as r}from"./Button-BowJkpMB.js";import{A as se,T as ae,a as ne,P as oe}from"./AddButton-SCMyl8qs.js";import"./index-yBjzXJbu.js";import"./index-tvICUrOf.js";import"./index-CFHoO_dA.js";import"./index-Cz2yum4A.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-zuoeuwZ4.js";const Be={title:"Atoms/Button",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"The `Button` atom is the primary action element of the Flexprice UI.\r\nIt supports variants (default/black/destructive/outline/secondary/ghost/link),\r\nsizes (xs/sm/default/lg/icon), an isLoading state, and prefix/suffix icon slots."}}},argTypes:{variant:{control:"select",options:["default","black","destructive","outline","secondary","ghost","link"]},size:{control:"inline-radio",options:["xs","sm","default","lg","icon"]},isLoading:{control:"boolean"},disabled:{control:"boolean"},onClick:{action:"clicked"}},args:{children:"Create subscription",variant:"default",size:"default",onClick:re()}},s={play:async({canvasElement:t,args:Y})=>{const Z=$(t).getByRole("button");await ee.click(Z),await te(Y.onClick).toHaveBeenCalledTimes(1)}},a={parameters:{layout:"padded"},render:t=>e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(r,{...t,variant:"default",children:"Default"}),e.jsx(r,{...t,variant:"black",children:"Black"}),e.jsx(r,{...t,variant:"destructive",children:"Destructive"}),e.jsx(r,{...t,variant:"outline",children:"Outline"}),e.jsx(r,{...t,variant:"secondary",children:"Secondary"}),e.jsx(r,{...t,variant:"ghost",children:"Ghost"}),e.jsx(r,{...t,variant:"link",children:"Link"})]})},n={parameters:{layout:"padded"},render:t=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(r,{...t,size:"xs",children:"Extra small"}),e.jsx(r,{...t,size:"sm",children:"Small"}),e.jsx(r,{...t,size:"default",children:"Default"}),e.jsx(r,{...t,size:"lg",children:"Large"})]})},o={args:{prefixIcon:e.jsx(oe,{}),suffixIcon:e.jsx(ne,{}),children:"Continue"}},i={args:{isLoading:!0,children:"Saving…"}},c={args:{disabled:!0}},d={args:{variant:"destructive",prefixIcon:e.jsx(ae,{}),children:"Delete customer"}},l={render:t=>e.jsx(se,{...t,label:"Add plan"})};var u,p,m,g,v;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:"Baseline primary action.",...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.description}}};var f,x,B,h,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: args => <div className='flex flex-wrap gap-3'>\r
            <Button {...args} variant='default'>Default</Button>\r
            <Button {...args} variant='black'>Black</Button>\r
            <Button {...args} variant='destructive'>Destructive</Button>\r
            <Button {...args} variant='outline'>Outline</Button>\r
            <Button {...args} variant='secondary'>Secondary</Button>\r
            <Button {...args} variant='ghost'>Ghost</Button>\r
            <Button {...args} variant='link'>Link</Button>\r
        </div>
}`,...(B=(x=a.parameters)==null?void 0:x.docs)==null?void 0:B.source},description:{story:"All variant tokens side-by-side — useful for design review.",...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.description}}};var b,k,j,S,D;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: args => <div className='flex items-center gap-3'>\r
            <Button {...args} size='xs'>Extra small</Button>\r
            <Button {...args} size='sm'>Small</Button>\r
            <Button {...args} size='default'>Default</Button>\r
            <Button {...args} size='lg'>Large</Button>\r
        </div>
}`,...(j=(k=n.parameters)==null?void 0:k.docs)==null?void 0:j.source},description:{story:"Size ramp from xs to lg.",...(D=(S=n.parameters)==null?void 0:S.docs)==null?void 0:D.description}}};var z,A,w,L,C;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    prefixIcon: <Plus />,
    suffixIcon: <ArrowRight />,
    children: 'Continue'
  }
}`,...(w=(A=o.parameters)==null?void 0:A.docs)==null?void 0:w.source},description:{story:"Button with prefix + suffix icon slots.",...(C=(L=o.parameters)==null?void 0:L.docs)==null?void 0:C.description}}};var I,E,T,N,R;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    children: 'Saving…'
  }
}`,...(T=(E=i.parameters)==null?void 0:E.docs)==null?void 0:T.source},description:{story:"Loading state — spinner replaces contents; button is disabled.",...(R=(N=i.parameters)==null?void 0:N.docs)==null?void 0:R.description}}};var O,P,G,H,V;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(G=(P=c.parameters)==null?void 0:P.docs)==null?void 0:G.source},description:{story:"Non-interactive disabled state.",...(V=(H=c.parameters)==null?void 0:H.docs)==null?void 0:V.description}}};var W,_,F,U,q;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    prefixIcon: <Trash2 />,
    children: 'Delete customer'
  }
}`,...(F=(_=d.parameters)==null?void 0:_.docs)==null?void 0:F.source},description:{story:"Destructive action — use sparingly.",...(q=(U=d.parameters)==null?void 0:U.docs)==null?void 0:q.description}}};var J,K,M,Q,X;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <AddButton {...args} label='Add plan' />
}`,...(M=(K=l.parameters)==null?void 0:K.docs)==null?void 0:M.source},description:{story:"Convenience wrapper: `<AddButton />` pre-fills a plus icon.",...(X=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};const he=["Default","Variants","Sizes","WithIcons","Loading","Disabled","Destructive","AsAddButton"];export{l as AsAddButton,s as Default,d as Destructive,c as Disabled,i as Loading,n as Sizes,a as Variants,o as WithIcons,he as __namedExportsOrder,Be as default};
