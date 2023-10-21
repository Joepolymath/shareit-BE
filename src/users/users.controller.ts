import { Controller, Get } from '@nestjs/common';

import admin from 'src/common/firebase/firebase';

@Controller('users')
export class UsersController {
  @Get('/add-claims')
  addRole() {
    admin
      .auth()
      .setCustomUserClaims('8pu7EFX0P7NxoPW7ic4K5jkq3OO2', { role: 'admin' })
      .then(() => {
        // Claim added
        console.log('Claim added');
      })
      .catch((error) => {
        // Handle errors
        console.log('CLAIM NOT ADDED', error);
      });
    return 'Ran claim endpoint';
  }
}
