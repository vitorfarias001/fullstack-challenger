import { Module } from '@nestjs/common';
import { MoviesController } from './app/controllers/index';
import { MoviesService } from './app/services/index';

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
