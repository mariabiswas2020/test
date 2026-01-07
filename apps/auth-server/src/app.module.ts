import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { EmployeeModule } from "./employee/employee.module";
import { AreaModule } from "./area/area.module";
import { PopModule } from "./pop/pop.module";
import { PopRechargeModule } from "./popRecharge/popRecharge.module";
import { PackageModelModule } from "./packageModel/packageModel.module";
import { CustomerModule } from "./customer/customer.module";
import { ResellerModule } from "./reseller/reseller.module";
import { ResellerRechargeLogModule } from "./resellerRechargeLog/resellerRechargeLog.module";
import { BillSheetModule } from "./billSheet/billSheet.module";
import { TransactionModule } from "./transaction/transaction.module";
import { ExpenseModule } from "./expense/expense.module";
import { SupplierModule } from "./supplier/supplier.module";
import { ProductModule } from "./product/product.module";
import { ProductItemModule } from "./productItem/productItem.module";
import { PurchaseModule } from "./purchase/purchase.module";
import { PurchaseItemModule } from "./purchaseItem/purchaseItem.module";
import { MarketingLeadModule } from "./marketingLead/marketingLead.module";
import { TokenCategoryModule } from "./tokenCategory/tokenCategory.module";
import { TokenModule } from "./token/token.module";
import { ActivityLogModule } from "./activityLog/activityLog.module";
import { SettingModule } from "./setting/setting.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    UserModule,
    EmployeeModule,
    AreaModule,
    PopModule,
    PopRechargeModule,
    PackageModelModule,
    CustomerModule,
    ResellerModule,
    ResellerRechargeLogModule,
    BillSheetModule,
    TransactionModule,
    ExpenseModule,
    SupplierModule,
    ProductModule,
    ProductItemModule,
    PurchaseModule,
    PurchaseItemModule,
    MarketingLeadModule,
    TokenCategoryModule,
    TokenModule,
    ActivityLogModule,
    SettingModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
