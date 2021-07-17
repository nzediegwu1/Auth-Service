import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { join } from 'path';
import { writeFileSync, readFile, unlinkSync } from 'fs';

import config from 'src/config/environment.config';
const extToggle = { png: 'jpeg', jpeg: 'png' };

@Injectable()
export class ProfileService {
  async getUserProfile(authorization: string) {
    axios.defaults.headers.common.Authorization = authorization;
    const { data } = await axios.post(`${config.AUTH0_DOMAIN}/userinfo`);

    const [, userId] = data.sub.split('|');
    data.id = userId;

    const message = 'Profile successfully retrieved';
    return { message, data };
  }
  async uploadProfileImage(file: Express.Multer.File, userId: string) {
    const [, ext] = file.mimetype.split('/');
    const newFile = join(__dirname, `../../public/${userId}.${ext}`);
    writeFileSync(newFile, file.buffer);

    const oldFile = join(__dirname, `../../public/${userId}.${extToggle[ext]}`);
    readFile(oldFile, (_, data) => {
      if (data) unlinkSync(oldFile);
    });
  }
}
