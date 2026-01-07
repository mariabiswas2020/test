import React, { useEffect, useState } from "react";
import { Admin, DataProvider } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { createBrowserHistory as createHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { AreaList } from "./area/AreaList";
import { AreaCreate } from "./area/AreaCreate";
import { AreaEdit } from "./area/AreaEdit";
import { AreaShow } from "./area/AreaShow";
import { PopList } from "./pop/PopList";
import { PopCreate } from "./pop/PopCreate";
import { PopEdit } from "./pop/PopEdit";
import { PopShow } from "./pop/PopShow";
import { PopRechargeList } from "./popRecharge/PopRechargeList";
import { PopRechargeCreate } from "./popRecharge/PopRechargeCreate";
import { PopRechargeEdit } from "./popRecharge/PopRechargeEdit";
import { PopRechargeShow } from "./popRecharge/PopRechargeShow";
import { PackageModelList } from "./packageModel/PackageModelList";
import { PackageModelCreate } from "./packageModel/PackageModelCreate";
import { PackageModelEdit } from "./packageModel/PackageModelEdit";
import { PackageModelShow } from "./packageModel/PackageModelShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { ResellerList } from "./reseller/ResellerList";
import { ResellerCreate } from "./reseller/ResellerCreate";
import { ResellerEdit } from "./reseller/ResellerEdit";
import { ResellerShow } from "./reseller/ResellerShow";
import { ResellerRechargeLogList } from "./resellerRechargeLog/ResellerRechargeLogList";
import { ResellerRechargeLogCreate } from "./resellerRechargeLog/ResellerRechargeLogCreate";
import { ResellerRechargeLogEdit } from "./resellerRechargeLog/ResellerRechargeLogEdit";
import { ResellerRechargeLogShow } from "./resellerRechargeLog/ResellerRechargeLogShow";
import { BillSheetList } from "./billSheet/BillSheetList";
import { BillSheetCreate } from "./billSheet/BillSheetCreate";
import { BillSheetEdit } from "./billSheet/BillSheetEdit";
import { BillSheetShow } from "./billSheet/BillSheetShow";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { ExpenseList } from "./expense/ExpenseList";
import { ExpenseCreate } from "./expense/ExpenseCreate";
import { ExpenseEdit } from "./expense/ExpenseEdit";
import { ExpenseShow } from "./expense/ExpenseShow";
import { SupplierList } from "./supplier/SupplierList";
import { SupplierCreate } from "./supplier/SupplierCreate";
import { SupplierEdit } from "./supplier/SupplierEdit";
import { SupplierShow } from "./supplier/SupplierShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { ProductItemList } from "./productItem/ProductItemList";
import { ProductItemCreate } from "./productItem/ProductItemCreate";
import { ProductItemEdit } from "./productItem/ProductItemEdit";
import { ProductItemShow } from "./productItem/ProductItemShow";
import { PurchaseList } from "./purchase/PurchaseList";
import { PurchaseCreate } from "./purchase/PurchaseCreate";
import { PurchaseEdit } from "./purchase/PurchaseEdit";
import { PurchaseShow } from "./purchase/PurchaseShow";
import { PurchaseItemList } from "./purchaseItem/PurchaseItemList";
import { PurchaseItemCreate } from "./purchaseItem/PurchaseItemCreate";
import { PurchaseItemEdit } from "./purchaseItem/PurchaseItemEdit";
import { PurchaseItemShow } from "./purchaseItem/PurchaseItemShow";
import { MarketingLeadList } from "./marketingLead/MarketingLeadList";
import { MarketingLeadCreate } from "./marketingLead/MarketingLeadCreate";
import { MarketingLeadEdit } from "./marketingLead/MarketingLeadEdit";
import { MarketingLeadShow } from "./marketingLead/MarketingLeadShow";
import { TokenCategoryList } from "./tokenCategory/TokenCategoryList";
import { TokenCategoryCreate } from "./tokenCategory/TokenCategoryCreate";
import { TokenCategoryEdit } from "./tokenCategory/TokenCategoryEdit";
import { TokenCategoryShow } from "./tokenCategory/TokenCategoryShow";
import { TokenList } from "./token/TokenList";
import { TokenCreate } from "./token/TokenCreate";
import { TokenEdit } from "./token/TokenEdit";
import { TokenShow } from "./token/TokenShow";
import { ActivityLogList } from "./activityLog/ActivityLogList";
import { ActivityLogCreate } from "./activityLog/ActivityLogCreate";
import { ActivityLogEdit } from "./activityLog/ActivityLogEdit";
import { ActivityLogShow } from "./activityLog/ActivityLogShow";
import { SettingList } from "./setting/SettingList";
import { SettingCreate } from "./setting/SettingCreate";
import { SettingEdit } from "./setting/SettingEdit";
import { SettingShow } from "./setting/SettingShow";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { SessionList } from "./session/SessionList";
import { SessionCreate } from "./session/SessionCreate";
import { SessionEdit } from "./session/SessionEdit";
import { SessionShow } from "./session/SessionShow";
import { VerificationTokenList } from "./verificationToken/VerificationTokenList";
import { VerificationTokenCreate } from "./verificationToken/VerificationTokenCreate";
import { VerificationTokenEdit } from "./verificationToken/VerificationTokenEdit";
import { VerificationTokenShow } from "./verificationToken/VerificationTokenShow";
import { PermissionList } from "./permission/PermissionList";
import { PermissionCreate } from "./permission/PermissionCreate";
import { PermissionEdit } from "./permission/PermissionEdit";
import { PermissionShow } from "./permission/PermissionShow";
import { UserPermissionList } from "./userPermission/UserPermissionList";
import { UserPermissionCreate } from "./userPermission/UserPermissionCreate";
import { UserPermissionEdit } from "./userPermission/UserPermissionEdit";
import { UserPermissionShow } from "./userPermission/UserPermissionShow";
import { PlanList } from "./plan/PlanList";
import { PlanCreate } from "./plan/PlanCreate";
import { PlanEdit } from "./plan/PlanEdit";
import { PlanShow } from "./plan/PlanShow";
import { SubscriptionList } from "./subscription/SubscriptionList";
import { SubscriptionCreate } from "./subscription/SubscriptionCreate";
import { SubscriptionEdit } from "./subscription/SubscriptionEdit";
import { SubscriptionShow } from "./subscription/SubscriptionShow";
import { UsageList } from "./usage/UsageList";
import { UsageCreate } from "./usage/UsageCreate";
import { UsageEdit } from "./usage/UsageEdit";
import { UsageShow } from "./usage/UsageShow";
import { InvoiceList } from "./invoice/InvoiceList";
import { InvoiceCreate } from "./invoice/InvoiceCreate";
import { InvoiceEdit } from "./invoice/InvoiceEdit";
import { InvoiceShow } from "./invoice/InvoiceShow";
import { NetworkStatusList } from "./networkStatus/NetworkStatusList";
import { NetworkStatusCreate } from "./networkStatus/NetworkStatusCreate";
import { NetworkStatusEdit } from "./networkStatus/NetworkStatusEdit";
import { NetworkStatusShow } from "./networkStatus/NetworkStatusShow";
import { ResellerPackageList } from "./resellerPackage/ResellerPackageList";
import { ResellerPackageCreate } from "./resellerPackage/ResellerPackageCreate";
import { ResellerPackageEdit } from "./resellerPackage/ResellerPackageEdit";
import { ResellerPackageShow } from "./resellerPackage/ResellerPackageShow";
import { MikroTikRouterList } from "./mikroTikRouter/MikroTikRouterList";
import { MikroTikRouterCreate } from "./mikroTikRouter/MikroTikRouterCreate";
import { MikroTikRouterEdit } from "./mikroTikRouter/MikroTikRouterEdit";
import { MikroTikRouterShow } from "./mikroTikRouter/MikroTikRouterShow";
import { CustomerSessionList } from "./customerSession/CustomerSessionList";
import { CustomerSessionCreate } from "./customerSession/CustomerSessionCreate";
import { CustomerSessionEdit } from "./customerSession/CustomerSessionEdit";
import { CustomerSessionShow } from "./customerSession/CustomerSessionShow";
import { TicketCategoryList } from "./ticketCategory/TicketCategoryList";
import { TicketCategoryCreate } from "./ticketCategory/TicketCategoryCreate";
import { TicketCategoryEdit } from "./ticketCategory/TicketCategoryEdit";
import { TicketCategoryShow } from "./ticketCategory/TicketCategoryShow";
import { SupportTicketList } from "./supportTicket/SupportTicketList";
import { SupportTicketCreate } from "./supportTicket/SupportTicketCreate";
import { SupportTicketEdit } from "./supportTicket/SupportTicketEdit";
import { SupportTicketShow } from "./supportTicket/SupportTicketShow";
import { SmsGatewayList } from "./smsGateway/SmsGatewayList";
import { SmsGatewayCreate } from "./smsGateway/SmsGatewayCreate";
import { SmsGatewayEdit } from "./smsGateway/SmsGatewayEdit";
import { SmsGatewayShow } from "./smsGateway/SmsGatewayShow";
import { SmsTemplateList } from "./smsTemplate/SmsTemplateList";
import { SmsTemplateCreate } from "./smsTemplate/SmsTemplateCreate";
import { SmsTemplateEdit } from "./smsTemplate/SmsTemplateEdit";
import { SmsTemplateShow } from "./smsTemplate/SmsTemplateShow";
import { SmsLogList } from "./smsLog/SmsLogList";
import { SmsLogCreate } from "./smsLog/SmsLogCreate";
import { SmsLogEdit } from "./smsLog/SmsLogEdit";
import { SmsLogShow } from "./smsLog/SmsLogShow";
import { auth0AuthProvider } from "./auth-provider/ra-auth-auth0";

const history = createHistory();

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: DataProvider) => {
        setDataProvider(() => provider);
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Admin
          history={history}
          title={"auth"}
          dataProvider={dataProvider}
          authProvider={auth0AuthProvider}
          theme={theme}
          dashboard={Dashboard}
          loginPage={Login}
        >
          <Resource
            name="User"
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
            show={UserShow}
          />
          <Resource
            name="Employee"
            list={EmployeeList}
            edit={EmployeeEdit}
            create={EmployeeCreate}
            show={EmployeeShow}
          />
          <Resource
            name="Area"
            list={AreaList}
            edit={AreaEdit}
            create={AreaCreate}
            show={AreaShow}
          />
          <Resource
            name="Pop"
            list={PopList}
            edit={PopEdit}
            create={PopCreate}
            show={PopShow}
          />
          <Resource
            name="PopRecharge"
            list={PopRechargeList}
            edit={PopRechargeEdit}
            create={PopRechargeCreate}
            show={PopRechargeShow}
          />
          <Resource
            name="PackageModel"
            list={PackageModelList}
            edit={PackageModelEdit}
            create={PackageModelCreate}
            show={PackageModelShow}
          />
          <Resource
            name="Customer"
            list={CustomerList}
            edit={CustomerEdit}
            create={CustomerCreate}
            show={CustomerShow}
          />
          <Resource
            name="Reseller"
            list={ResellerList}
            edit={ResellerEdit}
            create={ResellerCreate}
            show={ResellerShow}
          />
          <Resource
            name="ResellerRechargeLog"
            list={ResellerRechargeLogList}
            edit={ResellerRechargeLogEdit}
            create={ResellerRechargeLogCreate}
            show={ResellerRechargeLogShow}
          />
          <Resource
            name="BillSheet"
            list={BillSheetList}
            edit={BillSheetEdit}
            create={BillSheetCreate}
            show={BillSheetShow}
          />
          <Resource
            name="Transaction"
            list={TransactionList}
            edit={TransactionEdit}
            create={TransactionCreate}
            show={TransactionShow}
          />
          <Resource
            name="Expense"
            list={ExpenseList}
            edit={ExpenseEdit}
            create={ExpenseCreate}
            show={ExpenseShow}
          />
          <Resource
            name="Supplier"
            list={SupplierList}
            edit={SupplierEdit}
            create={SupplierCreate}
            show={SupplierShow}
          />
          <Resource
            name="Product"
            list={ProductList}
            edit={ProductEdit}
            create={ProductCreate}
            show={ProductShow}
          />
          <Resource
            name="ProductItem"
            list={ProductItemList}
            edit={ProductItemEdit}
            create={ProductItemCreate}
            show={ProductItemShow}
          />
          <Resource
            name="Purchase"
            list={PurchaseList}
            edit={PurchaseEdit}
            create={PurchaseCreate}
            show={PurchaseShow}
          />
          <Resource
            name="PurchaseItem"
            list={PurchaseItemList}
            edit={PurchaseItemEdit}
            create={PurchaseItemCreate}
            show={PurchaseItemShow}
          />
          <Resource
            name="MarketingLead"
            list={MarketingLeadList}
            edit={MarketingLeadEdit}
            create={MarketingLeadCreate}
            show={MarketingLeadShow}
          />
          <Resource
            name="TokenCategory"
            list={TokenCategoryList}
            edit={TokenCategoryEdit}
            create={TokenCategoryCreate}
            show={TokenCategoryShow}
          />
          <Resource
            name="Token"
            list={TokenList}
            edit={TokenEdit}
            create={TokenCreate}
            show={TokenShow}
          />
          <Resource
            name="ActivityLog"
            list={ActivityLogList}
            edit={ActivityLogEdit}
            create={ActivityLogCreate}
            show={ActivityLogShow}
          />
          <Resource
            name="Setting"
            list={SettingList}
            edit={SettingEdit}
            create={SettingCreate}
            show={SettingShow}
          />
          <Resource
            name="Account"
            list={AccountList}
            edit={AccountEdit}
            create={AccountCreate}
            show={AccountShow}
          />
          <Resource
            name="Session"
            list={SessionList}
            edit={SessionEdit}
            create={SessionCreate}
            show={SessionShow}
          />
          <Resource
            name="VerificationToken"
            list={VerificationTokenList}
            edit={VerificationTokenEdit}
            create={VerificationTokenCreate}
            show={VerificationTokenShow}
          />
          <Resource
            name="Permission"
            list={PermissionList}
            edit={PermissionEdit}
            create={PermissionCreate}
            show={PermissionShow}
          />
          <Resource
            name="UserPermission"
            list={UserPermissionList}
            edit={UserPermissionEdit}
            create={UserPermissionCreate}
            show={UserPermissionShow}
          />
          <Resource
            name="Plan"
            list={PlanList}
            edit={PlanEdit}
            create={PlanCreate}
            show={PlanShow}
          />
          <Resource
            name="Subscription"
            list={SubscriptionList}
            edit={SubscriptionEdit}
            create={SubscriptionCreate}
            show={SubscriptionShow}
          />
          <Resource
            name="Usage"
            list={UsageList}
            edit={UsageEdit}
            create={UsageCreate}
            show={UsageShow}
          />
          <Resource
            name="Invoice"
            list={InvoiceList}
            edit={InvoiceEdit}
            create={InvoiceCreate}
            show={InvoiceShow}
          />
          <Resource
            name="NetworkStatus"
            list={NetworkStatusList}
            edit={NetworkStatusEdit}
            create={NetworkStatusCreate}
            show={NetworkStatusShow}
          />
          <Resource
            name="ResellerPackage"
            list={ResellerPackageList}
            edit={ResellerPackageEdit}
            create={ResellerPackageCreate}
            show={ResellerPackageShow}
          />
          <Resource
            name="MikroTikRouter"
            list={MikroTikRouterList}
            edit={MikroTikRouterEdit}
            create={MikroTikRouterCreate}
            show={MikroTikRouterShow}
          />
          <Resource
            name="CustomerSession"
            list={CustomerSessionList}
            edit={CustomerSessionEdit}
            create={CustomerSessionCreate}
            show={CustomerSessionShow}
          />
          <Resource
            name="TicketCategory"
            list={TicketCategoryList}
            edit={TicketCategoryEdit}
            create={TicketCategoryCreate}
            show={TicketCategoryShow}
          />
          <Resource
            name="SupportTicket"
            list={SupportTicketList}
            edit={SupportTicketEdit}
            create={SupportTicketCreate}
            show={SupportTicketShow}
          />
          <Resource
            name="SmsGateway"
            list={SmsGatewayList}
            edit={SmsGatewayEdit}
            create={SmsGatewayCreate}
            show={SmsGatewayShow}
          />
          <Resource
            name="SmsTemplate"
            list={SmsTemplateList}
            edit={SmsTemplateEdit}
            create={SmsTemplateCreate}
            show={SmsTemplateShow}
          />
          <Resource
            name="SmsLog"
            list={SmsLogList}
            edit={SmsLogEdit}
            create={SmsLogCreate}
            show={SmsLogShow}
          />
        </Admin>
      </BrowserRouter>
    </div>
  );
};

export default App;
