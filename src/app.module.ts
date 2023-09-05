import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiariesModule } from './diaries/diaries.module';
import { GuestsDiariesModule } from './guests-diaries/guests-diaries.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, UsersModule, DiariesModule, GuestsDiariesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
