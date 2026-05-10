import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{within as R,userEvent as W,expect as B}from"./index-CH2Su9EI.js";import{r as p}from"./index-tvICUrOf.js";import{C as O}from"./Chip-Soxnzbmb.js";import{c as h}from"./utils-BLSKlp9E.js";import{c as f}from"./createLucideIcon-zuoeuwZ4.js";import{W as H,R as L,B as P,S as G}from"./wallet-D-SPlune.js";import{U as M}from"./users-BY6iSSHJ.js";import{C as U}from"./credit-card-6qpeNzzH.js";import"./index-yBjzXJbu.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=f("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=f("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=f("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]),c=({header:t,sections:i,activeId:s,onSelect:r,footer:n,className:V})=>e.jsxs("aside",{"aria-label":"Primary navigation",className:h("flex flex-col h-full w-64 bg-white border-r border-border text-sm",V),children:[t&&e.jsx("div",{className:"px-4 py-4 border-b border-border",children:t}),e.jsx("nav",{className:"flex-1 overflow-y-auto py-3",children:i.map((x,b)=>e.jsxs("div",{className:h(b!==0&&"mt-4"),children:[x.title&&e.jsx("p",{className:"px-5 mb-1 text-[11px] uppercase tracking-wide text-muted-foreground font-medium",children:x.title}),e.jsx("ul",{className:"space-y-0.5 px-2",children:x.items.map(a=>{const v=a.id===s,g=h("w-full flex items-center gap-2 px-3 py-2 rounded-[6px] text-left transition-colors",v?"bg-[#F0F2F5] text-[#111827] font-medium":"text-[#4B5563] hover:bg-[#F9FAFB] hover:text-[#111827]",a.disabled&&"opacity-50 cursor-not-allowed pointer-events-none"),N=e.jsxs(e.Fragment,{children:[a.icon&&e.jsx("span",{className:"shrink-0",children:a.icon}),e.jsx("span",{className:"flex-1 truncate",children:a.label}),a.trailing&&e.jsx("span",{className:"shrink-0",children:a.trailing})]});return e.jsx("li",{children:a.href?e.jsx("a",{href:a.href,"aria-current":v?"page":void 0,onClick:q=>{r&&(q.preventDefault(),r(a))},className:g,children:N}):e.jsx("button",{type:"button","aria-current":v?"page":void 0,disabled:a.disabled,onClick:()=>r==null?void 0:r(a),className:g,children:N})},a.id)})})]},b))}),n&&e.jsx("div",{className:"px-4 py-3 border-t border-border",children:n})]});try{c.displayName="SidebarNav",c.__docgenInfo={description:"`SidebarNav` is a reusable, app-agnostic vertical navigation. It does not\nassume routing — pass `onSelect` to integrate with whatever router you\nuse, or pass an `href` on each item to render native anchors.",displayName:"SidebarNav",props:{header:{defaultValue:null,description:"Sidebar header content (logo, workspace switcher, etc.).",name:"header",required:!1,type:{name:"ReactNode"}},sections:{defaultValue:null,description:"Grouped navigation items.",name:"sections",required:!0,type:{name:"SidebarNavSection[]"}},activeId:{defaultValue:null,description:"ID of the currently-active item.",name:"activeId",required:!1,type:{name:"string | undefined"}},onSelect:{defaultValue:null,description:"Called when an item is clicked.",name:"onSelect",required:!1,type:{name:"((item: SidebarNavItem) => void) | undefined"}},footer:{defaultValue:null,description:"Sidebar footer content (user card, settings, etc.).",name:"footer",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional wrapper classes.",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}const u=[{title:"Overview",items:[{id:"dashboard",label:"Dashboard",icon:e.jsx(J,{size:16})},{id:"events",label:"Events",icon:e.jsx(T,{size:16})}]},{title:"Product catalog",items:[{id:"plans",label:"Plans",icon:e.jsx(S,{size:16})},{id:"features",label:"Features",icon:e.jsx(S,{size:16})},{id:"wallets",label:"Wallets",icon:e.jsx(H,{size:16})}]},{title:"Customers & billing",items:[{id:"customers",label:"Customers",icon:e.jsx(M,{size:16})},{id:"subscriptions",label:"Subscriptions",icon:e.jsx(U,{size:16})},{id:"invoices",label:"Invoices",icon:e.jsx(L,{size:16}),trailing:e.jsx(O,{variant:"failed",label:"3",className:"!px-1.5 !text-[10px]"})}]},{title:"System",items:[{id:"docs",label:"Docs",icon:e.jsx(P,{size:16}),href:"https://docs.flexprice.io"},{id:"settings",label:"Settings",icon:e.jsx(G,{size:16})}]}],ie={title:"Organisms/SidebarNav",component:c,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"`SidebarNav` is a reusable, app-agnostic vertical navigation with grouped\r\nsections, active highlighting, optional trailing adornments, and header /\r\nfooter slots."}}},decorators:[t=>e.jsxs("div",{className:"h-[720px] flex bg-[#f8fafc]",children:[e.jsx(t,{}),e.jsx("div",{className:"flex-1 p-8 text-sm text-muted-foreground",children:e.jsx("p",{className:"max-w-md",children:"App content area. The sidebar on the left is the organism being demonstrated. Click an item to change the active selection."})})]})]},o={render:()=>{const[t,i]=p.useState("dashboard");return e.jsx(c,{header:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"h-7 w-7 rounded-md bg-[#092E44] grid place-items-center text-white text-xs font-semibold",children:"F"}),e.jsxs("div",{className:"flex flex-col leading-tight",children:[e.jsx("span",{className:"font-medium text-[#111827]",children:"Flexprice"}),e.jsx("span",{className:"text-[11px] text-muted-foreground",children:"Acme Corp"})]})]}),sections:u,activeId:t,onSelect:s=>i(s.id),footer:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"h-7 w-7 rounded-full bg-[#E5F0FF] grid place-items-center text-[11px] font-medium text-[#2F6FE2]",children:"SS"}),e.jsxs("div",{className:"flex flex-col leading-tight text-xs",children:[e.jsx("span",{className:"text-[#111827] font-medium",children:"Subrat Gupta"}),e.jsx("span",{className:"text-muted-foreground",children:"subrat@flexprice.io"})]})]})})}},d={render:()=>{const[t,i]=p.useState("plans");return e.jsx(c,{sections:u,activeId:t,onSelect:s=>i(s.id)})}},l={render:()=>{const[t,i]=p.useState("dashboard"),s=u.map(r=>({...r,items:r.items.map(n=>n.id==="settings"||n.id==="features"?{...n,disabled:!0}:n)}));return e.jsx(c,{sections:s,activeId:t,onSelect:r=>i(r.id)})}},m={render:()=>{const[t,i]=p.useState("dashboard");return e.jsx(c,{sections:u,activeId:t,onSelect:s=>i(s.id)})},play:async({canvasElement:t})=>{const s=R(t).getByRole("button",{name:/subscriptions/i});await W.click(s),await B(s).toHaveAttribute("aria-current","page")}};var y,j,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState('dashboard');
    return <SidebarNav header={<div className='flex items-center gap-2'>\r
                        <div className='h-7 w-7 rounded-md bg-[#092E44] grid place-items-center text-white text-xs font-semibold'>\r
                            F\r
                        </div>\r
                        <div className='flex flex-col leading-tight'>\r
                            <span className='font-medium text-[#111827]'>Flexprice</span>\r
                            <span className='text-[11px] text-muted-foreground'>Acme Corp</span>\r
                        </div>\r
                    </div>} sections={sections} activeId={active} onSelect={i => setActive(i.id)} footer={<div className='flex items-center gap-2'>\r
                        <div className='h-7 w-7 rounded-full bg-[#E5F0FF] grid place-items-center text-[11px] font-medium text-[#2F6FE2]'>\r
                            SS\r
                        </div>\r
                        <div className='flex flex-col leading-tight text-xs'>\r
                            <span className='text-[#111827] font-medium'>Subrat Gupta</span>\r
                            <span className='text-muted-foreground'>subrat@flexprice.io</span>\r
                        </div>\r
                    </div>} />;
  }
}`,...(w=(j=o.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var A,F,k;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState('plans');
    return <SidebarNav sections={sections} activeId={active} onSelect={i => setActive(i.id)} />;
  }
}`,...(k=(F=d.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var I,E,C;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState('dashboard');
    const disabledSections: SidebarNavSection[] = sections.map(section => ({
      ...section,
      items: section.items.map(item => item.id === 'settings' || item.id === 'features' ? {
        ...item,
        disabled: true
      } : item)
    }));
    return <SidebarNav sections={disabledSections} activeId={active} onSelect={i => setActive(i.id)} />;
  }
}`,...(C=(E=l.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var z,D,_;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState('dashboard');
    return <SidebarNav sections={sections} activeId={active} onSelect={i => setActive(i.id)} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const subscriptions = canvas.getByRole('button', {
      name: /subscriptions/i
    });
    await userEvent.click(subscriptions);
    await expect(subscriptions).toHaveAttribute('aria-current', 'page');
  }
}`,...(_=(D=m.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const re=["Default","WithoutHeaderOrFooter","WithDisabledItems","SelectionInteraction"];export{o as Default,m as SelectionInteraction,l as WithDisabledItems,d as WithoutHeaderOrFooter,re as __namedExportsOrder,ie as default};
