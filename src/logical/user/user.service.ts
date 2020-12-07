/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    findOne(username:string):string {
        if(username==="kid"){
            return "已找到"
        }else{
            return "没找到"

        }
    }
}
