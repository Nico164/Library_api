import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Library API')
    .setDescription('library website service')
    .setVersion('1.0.0')
    .addTag('books')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app)
  SwaggerModule.setup('api', app, document);
  await app.listen(9000);
}
bootstrap();
