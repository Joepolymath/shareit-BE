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

  @Get('/verify')
  verifyToken() {
    admin
      .auth()
      .verifyIdToken(
        'eyJhbGciOiJSUzI1NiIsImtpZCI6IjAzZDA3YmJjM2Q3NWM2OTQyNzUxMGY2MTc0ZWIyZjE2NTQ3ZDRhN2QiLCJ0eXAiOiJKV1QifQ.eyJyb2xlIjoiYWRtaW4iLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2hhcmVpdC0xMGNhMyIsImF1ZCI6InNoYXJlaXQtMTBjYTMiLCJhdXRoX3RpbWUiOjE2OTc4ODU2NTEsInVzZXJfaWQiOiI4cHU3RUZYMFA3TnhvUFc3aWM0SzVqa3EzT08yIiwic3ViIjoiOHB1N0VGWDBQN054b1BXN2ljNEs1amtxM09PMiIsImlhdCI6MTY5Nzg4NTY1MSwiZXhwIjoxNjk3ODg5MjUxLCJlbWFpbCI6InVzZXIuY0B0ZXN0LmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ1c2VyLmNAdGVzdC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.SbUtHilbLOE8kE9BOBYVbF6XoB0SDR5CYOWnuYt5PezF5t-y8uSABYT-loB0hcUDDdEZzbH1B8mDCCwP12ngxB5Cabn3IUaVopezGkYfMY9pIa5rvyTod9o9KPnTJffu1DDurqHMSTRwF4nH9uuoVVh5NkTFHFiqScwBo4mccdhiPEhj7UKHLucX-q64z1mcelHQQTAYGX7RW-et2lAfSiAomdy0FGjXY7e7M2pAP9i9n6Bnf6JkZxTueB8KRkpiybJ9Run59ARaupbJpa76dy4cToisNJPx_Z2dbEnl6TOHtPRglex6ryvDYK2kozqLU0SRe7jrfv3XYrkANVGRJQ',
      )
      .then((decodedToken) => {
        // Claim added
        const user = decodedToken;
        console.log({ user });
      })
      .catch((error) => {
        // Handle errors
        console.log('CLAIM NOT ADDED', error);
      });
    return 'Ran claim endpoint';
  }
}
