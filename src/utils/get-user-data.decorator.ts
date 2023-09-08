import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const GetUserData = createParamDecorator<undefined>(
  (_data, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    console.log(request.user);
    return request.user;
  },
);
