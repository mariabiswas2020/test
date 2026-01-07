import { Module } from "@nestjs/common";
import { PopModuleBase } from "./base/pop.module.base";
import { PopService } from "./pop.service";
import { PopController } from "./pop.controller";
import { PopResolver } from "./pop.resolver";

@Module({
  imports: [PopModuleBase],
  controllers: [PopController],
  providers: [PopService, PopResolver],
  exports: [PopService],
})
export class PopModule {}
