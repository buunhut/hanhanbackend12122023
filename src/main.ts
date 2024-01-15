import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: '*' });


  //qui định đường dẫn mặc định để load file ảnh là public/img
  app.use(express.static('./public/img'));

  const config = new DocumentBuilder()
    .setTitle('HANHAN')
    .setVersion('v0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);




  await app.listen(8080);
}
bootstrap();



//nest new my-backend, chọn yarn lúc khởi tạo
//yarn add @nestjs/swagger swagger-ui-express, lệnh cài đặt swagger
//yarn add @nestjs/jwt, lệnh cài jwt
//yarn add express
//yarn add multer
//yarn add --dev @types/multer
//yarn add dotenv


//yarn add bcryptjs, lệnh cài đặt bcryptjs để mã hoá password
//yarn add prisma @prisma/client, lệnh cài đặt prisma
//yarn prisma init, lệnh tạo schema.prisma và .env

//cấu hình chuỗi kết nối csdl
//vào .env sửa thông tin kết nối csdl DATABASE_URL="mysql://root:1234@localhost:3306/db_demo?schema=public"
//vào schema.prisma sửa provider = "mysql"
//yarn prisma db pull, map các bảng về
//yarn prisma generate, đẩy các bảng vào prisma/client để dùng

// nest g resource nguoiDung --no-spec, lệnh tạo cấu trúc thư mục chuẩn của nest, (mình ít dùng vì viết hết vào app)
