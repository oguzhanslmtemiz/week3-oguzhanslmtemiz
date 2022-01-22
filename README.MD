# TypeScript Auth with JWT & Session

## Tech Stack

**Server:** Node, Express, Mongoose, JWT, joi, bcrypt, CORS, Helmet, Dotenv, express-session, http-status, nodemon, ts-node

## API Reference

| Route      | HTTP Verb | POST body                                                   | Description | Auth   |
| ---------- | --------- | ----------------------------------------------------------- | ----------- | ------ |
| /login     | `POST`    | { username: 'username', password: 'password' }              | Login       |        |
| /register  | `POST`    | { name: 'name' ,username: 'username', password: 'password'} | Register    |        |
| /dashboard | `GET`     |                                                             | Dashboard   | Bearer |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` `DB_URL` `SESSION_SECRET` `JWT_SECRET`

## Run Locally

Clone the project

```bash
  git clone https://github.com/Kodluyoruz-NodeJs-Bootcamp/week3-oguzhanslmtemiz.git
```

Go to the project directory

```bash
  cd week3-oguzhanslmtemiz
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn start
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
