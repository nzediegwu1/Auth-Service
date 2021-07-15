import { ApiResponseDTO } from 'src/common/response.dto';

export class AuthResponseDTO extends ApiResponseDTO {
  data: {
    accessToken: string;
    tokenType: string;
  };
}
