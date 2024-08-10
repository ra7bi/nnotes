import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',  // Replace with your MySQL host
      port: 3306,         // Replace with your MySQL port
      username: 'root',   // Replace with your MySQL username
      password: '123123', // Replace with your MySQL password
      database: 'notes',   // Replace with your MySQL database name
      entities: [],       // Specify your entities here
      synchronize: false,  // Set to false in production
    }),
  ],
})
export class AppModule {}
