import React from 'react';
import { Building2 } from 'lucide-react';
import { SettingsSectionCard } from './SettingsSectionCard';
import { SettingsItem } from '../../types/settings';

export const BusinessSettings: React.FC = () => {
    const items: SettingsItem[] = [
        { id: 'business-info', label: 'Business Information', description: 'Legal name, address, tax info', route: '/backoffice/more/business/info' },
        { id: 'merchants', label: 'Merchants', description: 'Payment processor configuration', route: '/backoffice/more/business/merchants' },
    ];

    return (
        <SettingsSectionCard
            title="About Your Business"
            description="Manage your business identity and financial accounts."
            items={items}
            icon={Building2}
            iconColor="text-emerald-500"
        />
    );
};
