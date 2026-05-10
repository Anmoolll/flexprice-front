import { FC } from 'react';
import { CheckCircle2, Clock, AlertTriangle, XCircle, FileText, MinusCircle } from 'lucide-react';
import Chip from '@/components/atoms/Chip';

/** Canonical invoice status values supported by the badge. */
export type InvoiceStatus = 'DRAFT' | 'FINALIZED' | 'PENDING' | 'PAID' | 'OVERDUE' | 'VOIDED' | 'SKIPPED' | 'FAILED';

interface StatusConfig {
	label: string;
	variant: 'default' | 'success' | 'warning' | 'failed' | 'info';
	icon: React.ReactNode;
}

const STATUS_MAP: Record<InvoiceStatus, StatusConfig> = {
	DRAFT: { label: 'Draft', variant: 'info', icon: <FileText size={12} /> },
	FINALIZED: { label: 'Finalized', variant: 'info', icon: <FileText size={12} /> },
	PENDING: { label: 'Pending', variant: 'warning', icon: <Clock size={12} /> },
	PAID: { label: 'Paid', variant: 'success', icon: <CheckCircle2 size={12} /> },
	OVERDUE: { label: 'Overdue', variant: 'failed', icon: <AlertTriangle size={12} /> },
	FAILED: { label: 'Failed', variant: 'failed', icon: <XCircle size={12} /> },
	VOIDED: { label: 'Voided', variant: 'default', icon: <MinusCircle size={12} /> },
	SKIPPED: { label: 'Skipped', variant: 'default', icon: <MinusCircle size={12} /> },
};

interface InvoiceStatusBadgeProps {
	/** Canonical invoice status (case-insensitive — lowercase input is accepted). */
	status: InvoiceStatus | Lowercase<InvoiceStatus>;
	/** Hide the leading icon. */
	hideIcon?: boolean;
	/** Additional CSS classes. */
	className?: string;
}

/**
 * `InvoiceStatusBadge` renders a Chip with consistent color / label / icon
 * for every supported invoice lifecycle status. Safe to use inside table
 * cells, drawers, and the invoice detail header.
 */
const InvoiceStatusBadge: FC<InvoiceStatusBadgeProps> = ({ status, hideIcon, className }) => {
	const normalized = status.toUpperCase() as InvoiceStatus;
	const config = STATUS_MAP[normalized] ?? STATUS_MAP.DRAFT;
	return <Chip variant={config.variant} icon={hideIcon ? undefined : config.icon} label={config.label} className={className} />;
};

export default InvoiceStatusBadge;
