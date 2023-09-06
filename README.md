## Description

This is an app to leave your memories for people after your death.

## Installation

```bash
$ yarn install
```

## Setup database

- Create Postgress database "death-diary"
- Change database url in .env file
- Run:

```bash
$ yarn prisma migrate dev
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Features

#### Routes

- [ ] Users
  - [x] Get All
  - [ ] Get me
  - [x] Get One By Id
  - [x] Create
  - [x] Update
  - [x] Delete
- [ ] Diaries
  - [x] Get All
  - [x] Get One By Id
  - [x] Create
  - [x] Update
  - [x] Delete
- [ ] Guests Diaries
  - [x] Create
  - [x] Delete
- [ ] Notes
  - [ ] Get All
  - [ ] Get One By Id
  - [ ] Create
  - [ ] Update
  - [ ] Delete

#### Use Cases

- [ ] Authentication
- [ ] Owner of Diary can choose when (release condition) the guests can view the Diary
- [ ] Guest can view Diaries just when release conditions are satisfied
