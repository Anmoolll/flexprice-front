import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { useState } from 'react';
import { LayoutDashboard, Users, CreditCard, Receipt, Activity, Settings, BookOpen, Wallet, Package } from 'lucide-react';
import Chip from '@/components/atoms/Chip';
import SidebarNav, { type SidebarNavSection } from './SidebarNav';

const sections: SidebarNavSection[] = [
	{
		title: 'Overview',
		items: [
			{ id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={16} /> },
			{ id: 'events', label: 'Events', icon: <Activity size={16} /> },
		],
	},
	{
		title: 'Product catalog',
		items: [
			{ id: 'plans', label: 'Plans', icon: <Package size={16} /> },
			{ id: 'features', label: 'Features', icon: <Package size={16} /> },
			{ id: 'wallets', label: 'Wallets', icon: <Wallet size={16} /> },
		],
	},
	{
		title: 'Customers & billing',
		items: [
			{ id: 'customers', label: 'Customers', icon: <Users size={16} /> },
			{ id: 'subscriptions', label: 'Subscriptions', icon: <CreditCard size={16} /> },
			{
				id: 'invoices',
				label: 'Invoices',
				icon: <Receipt size={16} />,
				trailing: <Chip variant='failed' label='3' className='!px-1.5 !text-[10px]' />,
			},
		],
	},
	{
		title: 'System',
		items: [
			{ id: 'docs', label: 'Docs', icon: <BookOpen size={16} />, href: 'https://docs.flexprice.io' },
			{ id: 'settings', label: 'Settings', icon: <Settings size={16} /> },
		],
	},
];

/**
 * `SidebarNav` is a reusable, app-agnostic vertical navigation with grouped
 * sections, active highlighting, optional trailing adornments, and header /
 * footer slots.
 */
const meta: Meta<typeof SidebarNav> = {
	title: 'Organisms/SidebarNav',
	component: SidebarNav,
	tags: ['autodocs'],
	parameters: { layout: 'fullscreen' },
	decorators: [
		(Story) => (
			<div className='h-[720px] flex bg-[#f8fafc]'>
				<Story />
				<div className='flex-1 p-8 text-sm text-muted-foreground'>
					<p className='max-w-md'>
						App content area. The sidebar on the left is the organism being demonstrated. Click an item to change the active selection.
					</p>
				</div>
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof SidebarNav>;

export const Default: Story = {
	render: () => {
		const [active, setActive] = useState('dashboard');
		return (
			<SidebarNav
				header={
					<div className='flex items-center gap-2'>
						<div className='h-7 w-7 rounded-md bg-[#092E44] grid place-items-center text-white text-xs font-semibold'>F</div>
						<div className='flex flex-col leading-tight'>
							<span className='font-medium text-[#111827]'>Flexprice</span>
							<span className='text-[11px] text-muted-foreground'>Acme Corp</span>
						</div>
					</div>
				}
				sections={sections}
				activeId={active}
				onSelect={(i) => setActive(i.id)}
				footer={
					<div className='flex items-center gap-2'>
						<div className='h-7 w-7 rounded-full bg-[#E5F0FF] grid place-items-center text-[11px] font-medium text-[#2F6FE2]'>SS</div>
						<div className='flex flex-col leading-tight text-xs'>
							<span className='text-[#111827] font-medium'>Subrat Gupta</span>
							<span className='text-muted-foreground'>subrat@flexprice.io</span>
						</div>
					</div>
				}
			/>
		);
	},
};

export const WithoutHeaderOrFooter: Story = {
	render: () => {
		const [active, setActive] = useState('plans');
		return <SidebarNav sections={sections} activeId={active} onSelect={(i) => setActive(i.id)} />;
	},
};

export const WithDisabledItems: Story = {
	render: () => {
		const [active, setActive] = useState('dashboard');
		const disabledSections: SidebarNavSection[] = sections.map((section) => ({
			...section,
			items: section.items.map((item) => (item.id === 'settings' || item.id === 'features' ? { ...item, disabled: true } : item)),
		}));
		return <SidebarNav sections={disabledSections} activeId={active} onSelect={(i) => setActive(i.id)} />;
	},
};

export const SelectionInteraction: Story = {
	render: () => {
		const [active, setActive] = useState('dashboard');
		return <SidebarNav sections={sections} activeId={active} onSelect={(i) => setActive(i.id)} />;
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const subscriptions = canvas.getByRole('button', { name: /subscriptions/i });
		await userEvent.click(subscriptions);
		await expect(subscriptions).toHaveAttribute('aria-current', 'page');
	},
};
