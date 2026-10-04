import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // swagger

  const config = new DocumentBuilder()
    .setTitle('Backend Api')
    .setDescription('Api rest')
    .setVersion('1.0')
    .addTag('backend')
    .addBearerAuth()
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);
  // endswagger

  // validacion (class validator)
  /*
  app.useGlobalPipes(new ValidationPipe({
     whitelist: true,
     forbidNonWhitelisted: true
  }));
  */
 // Servidor archivos estaticos como (imagenes archivos)
 // app.useStaticAssets(join(__dirname, '..', 'uploads'), {
 //   prefix: '/public/'
 // })

  // CORS
  app.enableCors()

  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
