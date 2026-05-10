import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{within as H,userEvent as O,waitFor as P,expect as T,fn as U}from"./index-CH2Su9EI.js";import{r as p}from"./index-tvICUrOf.js";import{c as X}from"./utils-BLSKlp9E.js";import{I as G}from"./Input-C8pFVffI.js";import{X as J,S as K}from"./x-BLe9R5rH.js";import"./index-yBjzXJbu.js";import"./createLucideIcon-zuoeuwZ4.js";const u=({value:a,onSearch:r,debounceMs:t=300,placeholder:m="Search…",label:M,ariaLabel:L="Search",disabled:W,className:Q})=>{const h=a!==void 0,[R,z]=p.useState(a??""),o=h?a:R;p.useEffect(()=>{const c=window.setTimeout(()=>r(o),t);return()=>window.clearTimeout(c)},[o,t]);const f=c=>{h?r(c):z(c)},A=()=>f("");return e.jsx("div",{className:X("w-full",Q),children:e.jsx(G,{"aria-label":L,role:"searchbox",label:M,value:o,onChange:f,placeholder:m,disabled:W,inputPrefix:e.jsx(K,{size:16,className:"text-muted-foreground"}),suffix:o?e.jsx("button",{type:"button",onClick:A,"aria-label":"Clear search",className:"text-muted-foreground hover:text-foreground transition-colors",children:e.jsx(J,{size:14})}):null})})};try{u.displayName="SearchBar",u.__docgenInfo={description:"`SearchBar` wraps the Input atom with a search icon, clear button, and\ndebounce so consumers don’t fire a query on every keystroke.\n\n- **Controlled**: pass `value` and react to `onSearch` to drive it externally.\n- **Uncontrolled**: omit `value`; the bar manages its own state.",displayName:"SearchBar",props:{value:{defaultValue:null,description:"Current committed query (controlled) or initial value (uncontrolled).",name:"value",required:!1,type:{name:"string | undefined"}},onSearch:{defaultValue:null,description:"Fired after the debounce window elapses with the latest value.",name:"onSearch",required:!0,type:{name:"(value: string) => void"}},debounceMs:{defaultValue:{value:"300"},description:"Debounce delay in ms. Default 300ms.",name:"debounceMs",required:!1,type:{name:"number | undefined"}},placeholder:{defaultValue:{value:"Search…"},description:"Placeholder text.",name:"placeholder",required:!1,type:{name:"string | undefined"}},label:{defaultValue:null,description:"Optional visible label above the input.",name:"label",required:!1,type:{name:"string | undefined"}},ariaLabel:{defaultValue:{value:"Search"},description:"Accessible label for screen readers when `label` is not rendered.",name:"ariaLabel",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:null,description:"Disable the control.",name:"disabled",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"Additional wrapper classes.",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}const se={title:"Molecules/SearchBar",component:u,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"`SearchBar` is a debounced search input with a clear button. Ideal for\r\nfiltering lists without flooding the backend on every keystroke."}}},args:{placeholder:"Search customers, invoices, plans…",debounceMs:300,onSearch:U()},decorators:[a=>e.jsx("div",{className:"w-[420px]",children:e.jsx(a,{})})]},l={},i={args:{label:"Find a customer"}},d={args:{disabled:!0,value:"read-only"}},n={render:a=>{const[r,t]=p.useState("");return e.jsxs("div",{className:"space-y-3",children:[e.jsx(u,{...a,value:r,onSearch:t}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Debounced query: ",e.jsx("code",{className:"font-mono",children:r||"—"})]})]})}},s={args:{debounceMs:100},play:async({canvasElement:a,args:r})=>{const m=H(a).getByRole("searchbox");await O.type(m,"flex"),await P(()=>T(r.onSearch).toHaveBeenCalledWith("flex"),{timeout:1e3})}};var b,y,v;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(v=(y=l.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,g,S;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Find a customer'
  }
}`,...(S=(g=i.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var w,q,N;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'read-only'
  }
}`,...(N=(q=d.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var j,C,B,D,_;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const [q, setQ] = useState('');
    return <div className='space-y-3'>\r
                <SearchBar {...args} value={q} onSearch={setQ} />\r
                <p className='text-sm text-muted-foreground'>\r
                    Debounced query: <code className='font-mono'>{q || '—'}</code>\r
                </p>\r
            </div>;
  }
}`,...(B=(C=n.parameters)==null?void 0:C.docs)==null?void 0:B.source},description:{story:"Controlled example that mirrors state back to the user.",...(_=(D=n.parameters)==null?void 0:D.docs)==null?void 0:_.description}}};var E,I,k,V,F;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    debounceMs: 100
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('searchbox');
    await userEvent.type(input, 'flex');
    await waitFor(() => expect(args.onSearch).toHaveBeenCalledWith('flex'), {
      timeout: 1000
    });
  }
}`,...(k=(I=s.parameters)==null?void 0:I.docs)==null?void 0:k.source},description:{story:"Interaction test: types a query and waits for the debounced callback.",...(F=(V=s.parameters)==null?void 0:V.docs)==null?void 0:F.description}}};const oe=["Default","WithLabel","Disabled","Controlled","DebouncedInteraction"];export{n as Controlled,s as DebouncedInteraction,l as Default,d as Disabled,i as WithLabel,oe as __namedExportsOrder,se as default};
