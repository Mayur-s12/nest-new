import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CreateMessageDto } from './create-message.dto';

@Controller('messages')
export class MessagesController {

    @Get()
    getMessages(){

    }

    @Post()
    createMessages(@Body() body:CreateMessageDto){
        console.log(body)
    }

    @Get('/:id')
    specificMessage(@Param() id:string){
        console.log(id)
    }
}
