# Postgres SQL Project

A simple CRUD REST API built with **Express**, **PostgreSQL**, and **Sequelize**. Created while learning PostgreSQL and Sequelize as an ORM — sharing it publicly for anyone else learning the same stack.

## Tech Stack

- **Node.js** + **Express** — server & routing
- **PostgreSQL** — database
- **Sequelize** — ORM (maps JS models to SQL, handles queries/migrations)
- **dotenv** — environment variable management

## Project Structure

```
postgres-project/
├── config/
│   └── db.js              # Sequelize instance + DB connection
├── controllers/
│   └── userController.js  # Route handler logic (CRUD)
├── models/
│   └── User.js             # Sequelize model definition
├── routes/
│   └── user.js             # Express routes for /user
├── .env.example             # Sample environment variables
├── index.js                  # App entry point
└── package.json
```

## Getting Started

### Prerequisites

- Node.js installed
- PostgreSQL installed and running locally (or a hosted instance)

### 1. Clone the repo

```bash
git clone https://github.com/Hassanjaved17/postgres_sql_project.git
cd postgres_sql_project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy `.env.example` to `.env` and fill in your database credentials:

```
DB_NAME=your_database_name
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432
```

### 4. Run the server

```bash
node index.js
```

On startup, Sequelize connects to PostgreSQL and syncs the models — creating the `Users` table automatically if it doesn't exist yet. The server runs on `http://localhost:4000`.

## API Endpoints

| Method | Endpoint       | Description         |
|--------|----------------|----------------------|
| POST   | `/user`        | Create a new user    |
| GET    | `/user`        | Get all users        |
| GET    | `/user/:id`    | Get a single user by ID |
| PUT    | `/user/:id`    | Update a user by ID  |
| DELETE | `/user/:id`    | Delete a user by ID  |

### Example — Create a user

```bash
curl -X POST http://localhost:4000/user \
  -H "Content-Type: application/json" \
  -d '{"firstName": "Hassan", "lastName": "Javed"}'
```

## What This Project Covers

- Connecting an Express app to PostgreSQL using Sequelize
- Defining models with `sequelize.define()` and data types
- Auto-syncing tables with `sequelize.sync()`
- Full CRUD operations: `create`, `findAll`, `findByPk`, `update`, `destroy`

## Roadmap

- [ ] Input validation
- [ ] Error handling middleware
- [ ] Migrations instead of `sync()`
- [ ] Pagination on `GET /user`

## Author

**Hassan Javed** — MERN Stack Developer
- Portfolio: [hassanjaved.dev](https://hassanjaveds.netlify.app)
- GitHub: [@Hassanjaved17](https://github.com/Hassanjaved17)

## License

This project is open source and available under the [MIT License](LICENSE).
