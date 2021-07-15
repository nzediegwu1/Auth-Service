import { ApiResponseDTO } from 'src/common/response.dto';

export class GetProfileDTO extends ApiResponseDTO {
  data: {
    sub: string;
    given_name?: string;
    family_name?: string;
    nickname: string;
    name: string;
    picture?: string;
    locale?: string;
    updated_at: string;
  };
}

export enum ImageMimeType {
  'image/jpeg' = 'image/jpeg',
  'image/png' = 'image/png',
}
