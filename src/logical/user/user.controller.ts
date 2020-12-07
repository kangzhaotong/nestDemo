/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}
    @Post('getuser')
    findOne(@Body() body:any){
        return this.userService.findOne(body.username)
    }

}
