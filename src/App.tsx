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
import { CustomersPage } from './modules/m9/pages/CustomersPage';
import { MorePage, CashVariancePage, CustomerProfilePage, ProfileDetailSettings, GenericSettingsDetail } from './modules/m9/pages';
import {
  UsersPage,
  RolesPage,
  InventoryPage,
  AddInventoryPage,
  InventoryEntriesPage,
  ListInventoryPage,
  RecipesPage,
  ListReturnsPage,
  VendorsPage,
  InventoryEntryDetailPage,
  InventoryItemDetailPage,
  RecipeDetailPage,
  CreateRecipePage,
  EditRecipePage,
  InventoryItemFormPage,
  EditInventoryEntryPage,
  VendorFormPage,
  CreateReturnPage,
  ReturnDetailPage,
  VendorDetailPage,
  BusinessOperationsPage
} from './modules/m9/pages';
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
              <Route path="users" element={<UsersPage />} />
              <Route path="roles" element={<RolesPage />} />
              <Route path="employees" element={<Navigate to="/backoffice/users" replace />} />
              <Route path="customers" element={<CustomersPage />} />
              <Route path="customers/:customerId" element={<CustomerProfilePage />} />
              <Route path="cash-variance" element={<CashVariancePage />} />

              {/* Inventory Module */}
              <Route path="inventory" element={<InventoryPage />} />
              <Route path="inventory/add" element={<AddInventoryPage />} />
              <Route path="inventory/vendors" element={<VendorsPage />} />
              <Route path="inventory/vendors/create" element={<VendorFormPage />} />
              <Route path="inventory/vendors/:id" element={<VendorDetailPage />} />
              <Route path="inventory/vendors/:id/edit" element={<VendorFormPage />} />


              <Route path="inventory/returns" element={<ListReturnsPage />} />
              <Route path="inventory/returns/create" element={<CreateReturnPage />} />
              <Route path="inventory/returns/:id" element={<ReturnDetailPage />} />

              <Route path="inventory/entries" element={<InventoryEntriesPage />} />

              <Route path="inventory/entries/add" element={<AddInventoryPage />} />
              <Route path="inventory/entries/:id" element={<InventoryEntryDetailPage />} />
              <Route path="inventory/entries/:id/edit" element={<EditInventoryEntryPage />} />
              <Route path="inventory/list" element={<ListInventoryPage />} />

              <Route path="inventory/items/create" element={<InventoryItemFormPage />} />
              <Route path="inventory/items/:id" element={<InventoryItemDetailPage />} />
              <Route path="inventory/items/:id/edit" element={<InventoryItemFormPage />} />

              <Route path="inventory/recipes" element={<RecipesPage />} />
              <Route path="inventory/recipes/create" element={<CreateRecipePage />} />
              <Route path="inventory/recipes/:id" element={<RecipeDetailPage />} />
              <Route path="inventory/recipes/:id/edit" element={<EditRecipePage />} />

              <Route path="inventory/returns" element={<ListReturnsPage />} />

              <Route path="inventory/vendors" element={<VendorsPage />} />


              <Route path="settings">
                <Route path="business-operations" element={<BusinessOperationsPage />} />
              </Route>

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
