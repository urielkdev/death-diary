import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { providePrismaClientExceptionFilter } from 'nestjs-prisma';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { DiariesModule } from './diaries/diaries.module';
import { GuestsDiariesModule } from './guests-diaries/guests-diaries.module';
import { NotesModule } from './notes/notes.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    DiariesModule,
    GuestsDiariesModule,
    AuthModule,
    NotesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    providePrismaClientExceptionFilter(),
  ],
})
export class AppModule {}
