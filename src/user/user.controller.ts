import { Body, Controller, HttpException, HttpStatus, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices/client/client-proxy';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { UserDto } from './User.dto';

@Controller('user')
export class UserController {
    constructor(
        @Inject('USER_SERVICE') private  userClient: ClientProxy,
    ){}

    @Post('create_user')
    async create_user(
        @Body() user: UserDto
    )
    {
        const result = await firstValueFrom(this.userClient.send({ cmd: 'create_user' }, UserDto));

        if(result.error) throw new HttpException(result.error, HttpStatus.BAD_REQUEST);

        return { 
            message: 'User created successfully', 
            data: result 
        };
    }
}
