import {
  Controller,
  Get,
  Post,
  Headers,
  UploadedFile,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import jwt_decode from 'jwt-decode';
import { FileInterceptor } from '@nestjs/platform-express';

import { ProfileService } from './profile.service';
import { GetProfileDTO } from './profile.dto';
import { ApiResponseDTO } from 'src/common/response.dto';
import { ImageValidationPipe } from './image.validator';

@Controller('api')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('/me')
  register(
    @Headers('Authorization') authorization: string,
  ): Promise<GetProfileDTO> {
    return this.profileService.getUserProfile(authorization);
  }

  @Post('/upload')
  @UsePipes(ImageValidationPipe)
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Headers('Authorization') authorization: string,
  ): ApiResponseDTO {
    const payload = jwt_decode(authorization.slice(7)) as { sub: string };
    const [, userId] = payload.sub.split('|');

    this.profileService.uploadProfileImage(file, userId);
    return {
      message: 'Profile picture successfully uploaded',
    };
  }
}
