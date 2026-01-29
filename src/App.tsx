import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './app/providers/AuthProvider';
import { TenantStoreProvider } from './app/providers/TenantStoreProvider';
import { BackofficeLayout } from './modules/m9/layout/BackofficeLayout';
import { HomePage } from './modules/m9/pages/HomePage';
import { SalesActivityPage } from './modules/m9/pages/SalesActivityPage';
import { ReportsPage } from './modules/m9/pages/ReportsPage';
import { DailySalesPage, SalesByChannelPage, TopSellingItemsPage } from './modules/m9/pages/reports';
import { FinancesPage } from './modules/m9/pages/FinancesPage';
import { ItemsPage } from './modules/m9/pages/ItemsPage';
import { EmployeesPage } from './modules/m9/pages/EmployeesPage';
import { CustomersPage } from './modules/m9/pages/CustomersPage';
import { MorePage, CashVariancePage, CustomerProfilePage, ProfileDetailSettings, GenericSettingsDetail } from './modules/m9/pages';
import { RoleGuard } from './modules/m9/components/Auth/RoleGuard';

/**
 * Main Application Entry Point
 * Production-ready Role-Based Navigation & Access Control
 */
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TenantStoreProvider>
          <Routes>
            {/* Backoffice Portal Protected by RoleGuard */}
            <Route path="/backoffice" element={<RoleGuard><BackofficeLayout /></RoleGuard>}>
              <Route path="home" element={<HomePage />} />
              <Route path="sales-activity" element={<SalesActivityPage />} />
              <Route path="reports" element={<ReportsPage />} />
              <Route path="reports/daily-sales" element={<DailySalesPage />} />
              <Route path="reports/sales-by-channel" element={<SalesByChannelPage />} />
              <Route path="reports/top-selling-items" element={<TopSellingItemsPage />} />

              <Route path="finances" element={<FinancesPage />} />
              <Route path="items" element={<ItemsPage />} />
              <Route path="employees" element={<EmployeesPage />} />
              <Route path="customers" element={<CustomersPage />} />
              <Route path="customers/:customerId" element={<CustomerProfilePage />} />
              <Route path="cash-variance" element={<CashVariancePage />} />
              <Route path="more">
                <Route index element={<MorePage />} />
                <Route path="profile/edit" element={<ProfileDetailSettings />} />
                <Route path=":category/:subItem" element={<GenericSettingsDetail />} />
              </Route>

              <Route index element={<Navigate to="home" replace />} />
            </Route>

            {/* Global Redirects */}
            <Route path="/" element={<Navigate to="/backoffice/home" replace />} />
            <Route path="*" element={<Navigate to="/backoffice/home" replace />} />
          </Routes>
        </TenantStoreProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
