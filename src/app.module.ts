import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { DbModule } from './db/db.module';
import { PrismaService } from './db/prisma.service';


@Module({
  imports: [UsuarioModule, DbModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
