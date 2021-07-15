import {
  PipeTransform,
  Injectable,
  BadRequestException,
  UploadedFile,
} from '@nestjs/common';
import { ImageMimeType } from './profile.dto';

@Injectable()
export class ImageValidationPipe implements PipeTransform {
  transform(@UploadedFile() file: Express.Multer.File) {
    if (!file || !(file.mimetype in ImageMimeType)) {
      throw new BadRequestException('file is required and must be jpg or png');
    }
    return file;
  }
}
