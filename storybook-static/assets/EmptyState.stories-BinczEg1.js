import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{within as I,userEvent as F,expect as T}from"./index-CH2Su9EI.js";import{B as a}from"./Button-BowJkpMB.js";import{c as q}from"./utils-BLSKlp9E.js";import{c as D}from"./createLucideIcon-zuoeuwZ4.js";import{C as L}from"./credit-card-6qpeNzzH.js";import{F as U}from"./file-text-DBmzZ0w6.js";import{U as P}from"./users-BY6iSSHJ.js";import"./index-yBjzXJbu.js";import"./index-tvICUrOf.js";import"./index-CFHoO_dA.js";import"./index-Cz2yum4A.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=D("Inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]),W={sm:"py-8 px-6",md:"py-12 px-8",lg:"py-16 px-10"},m=({icon:t,title:r,description:n,primaryAction:p,secondaryAction:u,size:_="md",className:k})=>e.jsxs("div",{role:"status",className:q("flex flex-col items-center justify-center text-center bg-white border border-border rounded-[6px]",W[_],k),children:[e.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-full bg-[#F0F2F5] text-[#57646E] mb-4",children:t??e.jsx(O,{size:22})}),e.jsx("h3",{className:"text-base font-medium text-[#111827]",children:r}),n&&e.jsx("p",{className:"mt-1 max-w-md text-sm text-muted-foreground",children:n}),(p||u)&&e.jsxs("div",{className:"mt-5 flex flex-wrap items-center justify-center gap-2",children:[p,u]})]});try{m.displayName="EmptyState",m.__docgenInfo={description:"`EmptyState` is the canonical “no data yet” pattern. Use it at the root\nof a page, inside a card, or as a `DataTable` empty slot.",displayName:"EmptyState",props:{icon:{defaultValue:null,description:"Large illustrative icon. Defaults to an inbox glyph.",name:"icon",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"Primary heading.",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"Supporting copy.",name:"description",required:!1,type:{name:"string | undefined"}},primaryAction:{defaultValue:null,description:"Primary call-to-action (e.g. a `<Button>`).",name:"primaryAction",required:!1,type:{name:"ReactNode"}},secondaryAction:{defaultValue:null,description:"Optional secondary action.",name:"secondaryAction",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"md"},description:"Visual tone — compact or full-bleed.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"Additional wrapper classes.",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}const ae={title:"Organisms/EmptyState",component:m,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"`EmptyState` is the canonical empty-result pattern. Use it wherever a page,\r\ncard, or table has no data to display."}}},argTypes:{size:{control:"inline-radio",options:["sm","md","lg"]}},args:{title:"No invoices yet",description:"When you issue invoices they’ll show up here.",size:"md"},decorators:[t=>e.jsx("div",{className:"w-full max-w-xl",children:e.jsx(t,{})})]},s={},i={args:{title:"No customers yet",description:"Create your first customer to start tracking usage and billing.",icon:e.jsx(P,{size:22}),primaryAction:e.jsx(a,{children:"Create customer"}),secondaryAction:e.jsx(a,{variant:"ghost",size:"sm",children:"Import CSV"})},play:async({canvasElement:t})=>{const r=I(t),n=r.getByRole("button",{name:/create customer/i});await F.click(n),await T(r.getByRole("status")).toBeInTheDocument()}},o={args:{size:"sm",icon:e.jsx(U,{size:20}),title:"No drafts",description:"Nothing saved yet."}},c={args:{size:"lg",icon:e.jsx(L,{size:22}),title:"No payment methods",description:"Add a card to charge invoices automatically at cycle end.",primaryAction:e.jsx(a,{children:"Add card"})}},l={args:{title:"Fetching invoices",description:"Please wait while we sync your latest billing activity.",icon:e.jsx("span",{className:"inline-block h-4 w-4 rounded-full border-2 border-current border-r-transparent animate-spin","aria-label":"Loading"})}},d={args:{title:"Unable to load invoices",description:"Something went wrong while fetching data. Try again in a moment.",icon:e.jsx(L,{size:22}),primaryAction:e.jsx(a,{variant:"destructive",children:"Retry"}),secondaryAction:e.jsx(a,{variant:"ghost",children:"View logs"})}};var y,g,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,x,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'No customers yet',
    description: 'Create your first customer to start tracking usage and billing.',
    icon: <Users size={22} />,
    primaryAction: <Button>Create customer</Button>,
    secondaryAction: <Button variant='ghost' size='sm'>\r
                Import CSV\r
            </Button>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const primaryButton = canvas.getByRole('button', {
      name: /create customer/i
    });
    await userEvent.click(primaryButton);
    await expect(canvas.getByRole('status')).toBeInTheDocument();
  }
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var b,w,N;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    icon: <FileText size={20} />,
    title: 'No drafts',
    description: 'Nothing saved yet.'
  }
}`,...(N=(w=o.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var j,S,B;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    icon: <CreditCard size={22} />,
    title: 'No payment methods',
    description: 'Add a card to charge invoices automatically at cycle end.',
    primaryAction: <Button>Add card</Button>
  }
}`,...(B=(S=c.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var A,z,E;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: 'Fetching invoices',
    description: 'Please wait while we sync your latest billing activity.',
    icon: <span className='inline-block h-4 w-4 rounded-full border-2 border-current border-r-transparent animate-spin' aria-label='Loading' />
  }
}`,...(E=(z=l.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var C,R,V;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'Unable to load invoices',
    description: 'Something went wrong while fetching data. Try again in a moment.',
    icon: <CreditCard size={22} />,
    primaryAction: <Button variant='destructive'>Retry</Button>,
    secondaryAction: <Button variant='ghost'>View logs</Button>
  }
}`,...(V=(R=d.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};const re=["Default","WithActions","Small","Large","LoadingLike","ErrorRecovery"];export{s as Default,d as ErrorRecovery,c as Large,l as LoadingLike,o as Small,i as WithActions,re as __namedExportsOrder,ae as default};
