import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as r}from"./index-BKx0brzA.js";import{M as t}from"./index-Cdoc1q8m.js";import"./index-yBjzXJbu.js";import"./index-tvICUrOf.js";import"./iframe-Bmck7sdK.js";import"./index-CAnzo2x9.js";import"./index-BLHw34Di.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Introduction"}),`
`,e.jsx(n.h1,{id:"flexprice-component-library",children:"Flexprice Component Library"}),`
`,e.jsx(n.p,{children:`A focused, production-quality component library extracted from and inspired
by the Flexprice billing platform. Existing components are documented here in
isolation; new primitives (DataTable, InvoiceStatusBadge, UsageBar, SearchBar,
EmptyState, PricingTierTable, SidebarNav) were added where the assignment
required them, in line with the existing architecture and tokens.`}),`
`,e.jsx(n.h2,{id:"assignment-intent",children:"Assignment intent"}),`
`,e.jsx(n.p,{children:"This Storybook is designed to act as a mini internal design system:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"composable components with strict TypeScript APIs"}),`
`,e.jsxs(n.li,{children:["reusable styling patterns (",e.jsx(n.code,{children:"cn"}),", Tailwind tokens, ",e.jsx(n.code,{children:"cva"})," where relevant)"]}),`
`,e.jsx(n.li,{children:"accessibility-aware interactions (keyboard + ARIA semantics)"}),`
`,e.jsx(n.li,{children:"realistic stories for happy paths and edge states"}),`
`,e.jsx(n.li,{children:"interaction tests for user-critical behaviors"}),`
`]}),`
`,e.jsx(n.h2,{id:"stack",children:"Stack"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"React 18 + TypeScript (strict)"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tailwind CSS"})," with shadcn ",e.jsx(n.code,{children:"new-york"})," design tokens"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Radix UI"})," primitives for accessibility"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"class-variance-authority"})," for variant ergonomics"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TanStack Table v8 + TanStack Virtual"})," for the DataTable"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Zustand v5"})," for the filter store"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TanStack Query v5"})," for the query config presets"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Vitest + Testing Library"})," for unit tests"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Storybook 8"})," with autodocs and play-function interaction tests"]}),`
`]}),`
`,e.jsx(n.h2,{id:"atomic-structure",children:"Atomic structure"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Atoms"})," (",e.jsx(n.code,{children:"src/components/atoms/*"}),"): Button, Chip, Input, Select, Tooltip, Spinner"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Molecules"})," (",e.jsx(n.code,{children:"src/components/molecules/*"}),"): MetricCard, InvoiceStatusBadge, UsageBar, SearchBar, ",e.jsx(n.strong,{children:"DataTable"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Organisms"})," (",e.jsx(n.code,{children:"src/components/organisms/*"}),"): EmptyState, PricingTierTable, SidebarNav"]}),`
`]}),`
`,e.jsx(n.h2,{id:"conventions",children:"Conventions"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Styling"}),`: Tailwind utility classes only. No inline styles except for
variant-driven `,e.jsx(n.code,{children:"style"})," (e.g., the dynamic chip color tokens)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Class merging"}),": Use ",e.jsx(n.code,{children:"cn()"})," from ",e.jsx(n.code,{children:"@/lib/utils"})," (clsx + tailwind-merge)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Variants"}),": Authored with ",e.jsx(n.code,{children:"cva()"})," for type-safe variant + size unions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"A11y"}),`: Every interactive component supports keyboard navigation,
has correct ARIA semantics, and respects focus rings.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Types"}),": No ",e.jsx(n.code,{children:"any"}),". Props are explicit, with JSDoc on public APIs."]}),`
`]}),`
`,e.jsx(n.h2,{id:"what-to-review-first",children:"What to review first"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Molecules / DataTable"}),": generic ",e.jsx(n.code,{children:"<T,>"}),` API, sorting, loading/empty states,
and virtualized rendering with a 10,000-row performance story.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Store / useFilterStore"}),`: session-persisted route-scoped filters with URL
fingerprint sync for lightweight shareability.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lib / createQueryConfig"}),": query-client presets (",e.jsx(n.code,{children:"REALTIME"}),", ",e.jsx(n.code,{children:"DEFAULT"}),`,
`,e.jsx(n.code,{children:"STATIC"}),") aligned with TanStack Query v5 behavior."]}),`
`]}),`
`,e.jsx(n.h2,{id:"highlights-to-look-at",children:"Highlights to look at"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Molecules / DataTable"})," — the marquee piece. Generic ",e.jsx(n.code,{children:"<T,>"}),` columns API,
TanStack Table sorting, skeleton loading, empty state, and a 10,000-row
story demonstrating windowed virtualization.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hooks / useFilterStore"})," — Zustand store persisted to ",e.jsx(n.code,{children:"sessionStorage"}),`,
keyed by route, with a lightweight URL fingerprint for shareable links.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Utilities / createQueryConfig"}),` — TanStack Query v5 preset factory
exposing `,e.jsx(n.code,{children:"REALTIME"}),", ",e.jsx(n.code,{children:"DEFAULT"}),", and ",e.jsx(n.code,{children:"STATIC"})," policies."]}),`
`]}),`
`,e.jsx(n.h2,{id:"quick-validation-commands",children:"Quick validation commands"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"npm run storybook"})," to inspect components in development mode"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"npm run build-storybook"})," to generate a static publishable Storybook"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"npx vitest run src/components src/lib src/store"})," for focused regression checks"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.strong,{children:"sidebar"})," to navigate. The ",e.jsx(n.strong,{children:"Controls"}),", ",e.jsx(n.strong,{children:"Actions"}),`, and
`,e.jsx(n.strong,{children:"Interactions"})," tabs are wired up across all interactive stories."]})]})}function u(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{u as default};
