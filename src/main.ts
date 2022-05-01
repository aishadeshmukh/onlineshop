import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as config from "config";
import { ValidationPipe } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    // enable cors
  app.enableCors({});

  // Added validation pipe globally for all APIs
  app.useGlobalPipes(new ValidationPipe());

  // Swagger configuration
  const swaggerConfig = new DocumentBuilder()
    .setTitle(config.swagger.title)
    .setDescription(config.swagger.description)
    .setVersion(config.swagger.version)
    .addTag(config.swagger.tag)
    .addBearerAuth()
    .build();


  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup("api", app, document);

  await app.listen(config.server.port);
}
bootstrap();
