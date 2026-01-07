import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NetworkStatusModuleBase } from "./base/networkStatus.module.base";
import { NetworkStatusService } from "./networkStatus.service";
import { NetworkStatusController } from "./networkStatus.controller";
import { NetworkStatusResolver } from "./networkStatus.resolver";

@Module({
  imports: [NetworkStatusModuleBase, forwardRef(() => AuthModule)],
  controllers: [NetworkStatusController],
  providers: [NetworkStatusService, NetworkStatusResolver],
  exports: [NetworkStatusService],
})
export class NetworkStatusModule {}
