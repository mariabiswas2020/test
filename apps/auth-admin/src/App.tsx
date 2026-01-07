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
        </Admin>
      </BrowserRouter>
    </div>
  );
};

export default App;
