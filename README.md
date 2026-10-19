# cookie-auth

jwt auth stored in http-only cookies: express api and react client.

## features

- sign up, sign in and logout
- jwt in an http-only cookie, read back on `GET /user`
- passwords hashed with bcrypt

## stack

express 5 · mongoose · jsonwebtoken · react 19 + vite · recoil · tailwind css 4 · typescript

## run locally

```bash
cd backend && npm install && cp .env.example .env && npm run dev
cd frontend && npm install && npm run dev
```

## env

copy `backend/.env.example` to `backend/.env`: `MONGO_URI`, `JWT_SECRET`.
