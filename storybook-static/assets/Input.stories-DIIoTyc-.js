import{j as c}from"./jsx-runtime-Cf8x2fCZ.js";import{within as z,userEvent as O,expect as k,fn as q}from"./index-CH2Su9EI.js";import{r as G}from"./index-tvICUrOf.js";import{I as V}from"./Input-C8pFVffI.js";import"./index-yBjzXJbu.js";import"./utils-BLSKlp9E.js";const Z={title:"Atoms/Input",component:V,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"The `Input` atom is the primary text / numeric entry control of the\r\nFlexprice UI. It supports label / description / error states, optional\r\nprefix & suffix slots, and several number-formatting variants."}}},argTypes:{variant:{control:"inline-radio",options:["text","number","integer","formatted-number"]},size:{control:"inline-radio",options:["xs","sm","default","lg"]},disabled:{control:"boolean"}},args:{label:"Email",placeholder:"you@flexprice.io",type:"email",onChange:q()}},e={play:async({canvasElement:o,args:i})=>{const X=z(o).getByRole("textbox");await O.type(X,"hello@flexprice.io"),await k(i.onChange).toHaveBeenCalled()}},r={args:{description:"We only use this to send billing receipts."}},t={args:{label:"Password",type:"password",placeholder:"••••••••",error:"Password must be at least 8 characters"}},s={args:{label:"Customer ID",value:"cus_01HXAB…",disabled:!0}},a={args:{label:"Price",placeholder:"0.00",inputPrefix:c.jsx("span",{className:"text-muted-foreground",children:"$"}),suffix:"USD"}},n={render:o=>{const[i,l]=G.useState("1234567");return c.jsx(V,{...o,value:i,onChange:l})},args:{label:"Amount",variant:"formatted-number",inputPrefix:c.jsx("span",{className:"text-muted-foreground",children:"$"})},parameters:{controls:{exclude:["value","onChange"]}}};var p,d,u,m,f;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await userEvent.type(input, 'hello@flexprice.io');
    await expect(args.onChange).toHaveBeenCalled();
  }
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source},description:{story:"Baseline text input with a label.",...(f=(m=e.parameters)==null?void 0:m.docs)==null?void 0:f.description}}};var h,g,x,b,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    description: 'We only use this to send billing receipts.'
  }
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source},description:{story:"Description text rendered below the field for hints.",...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.description}}};var v,w,C,E,D;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    placeholder: '••••••••',
    error: 'Password must be at least 8 characters'
  }
}`,...(C=(w=t.parameters)==null?void 0:w.docs)==null?void 0:C.source},description:{story:"Error state — border turns destructive and the message is announced.",...(D=(E=t.parameters)==null?void 0:E.docs)==null?void 0:D.description}}};var P,S,I,W,A;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Customer ID',
    value: 'cus_01HXAB…',
    disabled: true
  }
}`,...(I=(S=s.parameters)==null?void 0:S.docs)==null?void 0:I.source},description:{story:"Non-interactive, muted style for read-only contexts.",...(A=(W=s.parameters)==null?void 0:W.docs)==null?void 0:A.description}}};var B,N,j,F,H;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Price',
    placeholder: '0.00',
    inputPrefix: <span className='text-muted-foreground'>$</span>,
    suffix: 'USD'
  }
}`,...(j=(N=a.parameters)==null?void 0:N.docs)==null?void 0:j.source},description:{story:"Prefix + suffix slots — useful for currency or unit hints.",...(H=(F=a.parameters)==null?void 0:F.docs)==null?void 0:H.description}}};var _,$,R,T,U;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('1234567');
    return <Input {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Amount',
    variant: 'formatted-number',
    inputPrefix: <span className='text-muted-foreground'>$</span>
  },
  parameters: {
    // The story renders with local state; disable the \`value\` control so
    // the Controls panel doesn't imply it’s wired through.
    controls: {
      exclude: ['value', 'onChange']
    }
  }
}`,...(R=($=n.parameters)==null?void 0:$.docs)==null?void 0:R.source},description:{story:"Formatted-number variant with thousand separators (controlled internally).",...(U=(T=n.parameters)==null?void 0:T.docs)==null?void 0:U.description}}};const ee=["Default","WithDescription","WithError","Disabled","WithAffixes","FormattedNumber"];export{e as Default,s as Disabled,n as FormattedNumber,a as WithAffixes,r as WithDescription,t as WithError,ee as __namedExportsOrder,Z as default};
