import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TablesModule } from './modules/tables/tables.module';

@Module({
  imports: [
    TablesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',        
      port: 5432,               
      username: 'postgres',
      password: 'kaung4241',
      database: 'CherryMyoDB',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,        
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
