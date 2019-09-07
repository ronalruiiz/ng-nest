import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  get() {
    return {
      status: 'ok',
      users: [
        {name: 'Ronal', age: 21, rol: 'user' },
        {name: 'Katty', age: 22, rol: 'admin' },
      ]};
  }
}
