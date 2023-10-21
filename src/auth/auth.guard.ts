import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/users/users.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const idToken = request.headers['authorization']?.split('Bearer ')[1];

    if (idToken) {
      const user = await this.authService.verifyToken(idToken);
      console.log({ user });
      await this.userService.createUser({
        email: user.email,
        uid: user.uid,
        role: user.role,
      });
      if (user) {
        request.user = {
          email: user.email,
          role: user.role,
          userUid: user.uid,
        };
        return true;
      }
    }

    return false;
  }
}
