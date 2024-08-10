import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Note } from './notes/note.entity';
import { Category } from './categories/category.entity';
import { UserController } from './users/users.controller';
import { CategoryController } from './categories/categories.controller';
import { NoteController } from './notes/notes.controller';
import { UserService } from './users/users.service';
import { CategoryService } from './categories/categories.service';
import { NoteService } from './notes/notes.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',  // Replace with your MySQL host
      port: 3306,         // Replace with your MySQL port
      username: 'root',   // Replace with your MySQL username
      password: '123123', // Replace with your MySQL password
      database: 'notes',   // Replace with your MySQL database name
      entities: [User,Note,Category],       // Specify your entities here
      synchronize: false,  // Set to false in production
    }),
    TypeOrmModule.forFeature([User, Note, Category]),
  ],
  controllers: [UserController,CategoryController,NoteController],
  providers: [UserService,CategoryService,NoteService],
})
export class AppModule {}
