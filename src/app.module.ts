import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.develop.env`, `.env`],
      isGlobal: true,
    }),
    UsersModule

  ]
})
export class AppModule {}
