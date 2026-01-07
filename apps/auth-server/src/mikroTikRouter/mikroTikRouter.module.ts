import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MikroTikRouterModuleBase } from "./base/mikroTikRouter.module.base";
import { MikroTikRouterService } from "./mikroTikRouter.service";
import { MikroTikRouterController } from "./mikroTikRouter.controller";
import { MikroTikRouterResolver } from "./mikroTikRouter.resolver";

@Module({
  imports: [MikroTikRouterModuleBase, forwardRef(() => AuthModule)],
  controllers: [MikroTikRouterController],
  providers: [MikroTikRouterService, MikroTikRouterResolver],
  exports: [MikroTikRouterService],
})
export class MikroTikRouterModule {}
