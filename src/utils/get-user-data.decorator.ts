import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const GetUserData = createParamDecorator<undefined>(
  (_data, context: ExecutionContext) => {
    const { user } = context.switchToHttp().getRequest();

    return user;
  },
);
