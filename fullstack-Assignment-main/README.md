<<<<<<< HEAD
# Full-Stack Assignment

A portfolio/agency website with a public landing page and an admin page. Visitors can submit contact details and subscribe by email; administrators can view submissions and manage displayed clients and projects.

## Technology

- Backend: Java 17, Spring Boot 4, Spring Data MongoDB, Maven
- Database: MongoDB Atlas
- Frontend: HTML, CSS, and vanilla JavaScript

## Project structure

```text
.
├── backend/       Spring Boot REST API
└── frontend/      index.html, admin.html, CSS, and JavaScript
```

## Prerequisites

Install JDK 17 (not only a JRE), MongoDB Atlas access, and a modern browser. Verify Java:

```powershell
java -version
javac -version
```

If Java is installed through Eclipse Adoptium but is not on `PATH`, use this for the current terminal:

```powershell
$env:JAVA_HOME = "C:\Program Files\Eclipse Adoptium\jdk-17.0.20.101-hotspot"
$env:Path = "$env:JAVA_HOME\bin;$env:Path"
```

## Configure MongoDB

Set the URI in `backend/src/main/resources/application.properties`:

```properties
spring.mongodb.uri=${MONGODB_URI}
```

Then, before starting the backend:

```powershell
$env:MONGODB_URI = "mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority"
```

Never commit MongoDB credentials. If credentials were previously committed, rotate the password in MongoDB Atlas.

## Run the backend

```powershell
cd C:\Users\User\Downloads\fullstack-Assignment-main\fullstack-Assignment-main\backend
.\mvnw.cmd spring-boot:run
```

The API runs at `http://localhost:8080` by default. Alternatively, run `BackendApplication.java` from IntelliJ IDEA.

## Run the frontend

Open `frontend/index.html` (landing page) or `frontend/admin.html` (admin page) in a browser. The API URL is in `frontend/js/api.js`; for local development use:

```javascript
const BASE_URL = "http://localhost:8080";
```

If direct HTML opening is blocked by browser security rules, serve `frontend/` with any static HTTP server.

## REST endpoints

Each resource supports `GET` and `POST`:

| Resource | Endpoint |
|---|---|
| Projects | `/projects` |
| Clients | `/clients` |
| Contact submissions | `/contact` |
| Email subscribers | `/subscribe` |

Test an endpoint with:

```powershell
Invoke-WebRequest http://localhost:8080/projects
```

## Troubleshooting

- `java` is not recognized: install JDK 17, restart PowerShell, and verify `JAVA_HOME`/`PATH`.
- `JAVA_HOME ... not defined correctly`: point `JAVA_HOME` to the JDK folder containing `bin\java.exe`, not to `bin` itself.
- MongoDB errors: check the URI, Atlas IP allowlist, and database-user permissions.
- Frontend API errors: confirm Spring Boot is running and `frontend/js/api.js` has the correct URL.
=======
# Full Stack Portfolio Website

A modern portfolio and agency website with a public landing page and an authenticated admin dashboard. Visitors can submit contact requests and subscribe to a newsletter, while admins can manage projects, clients, contact submissions, and subscribers.

## Overview

This application is split into two main parts:

- Backend: Java 17 + Spring Boot + MongoDB
- Frontend: HTML + CSS + JavaScript

The landing page showcases projects and clients, while the admin dashboard lets authorized users add and review content.

## Features

- Public landing page
- Contact form for enquiries
- Newsletter subscription
- Project display carousel/cards
- Client highlight section
- Admin panel for content management
- MongoDB persistence
- Input validation and safe frontend rendering

## Tech stack

- Java 17
- Spring Boot 4.0.1
- Spring Data MongoDB
- MongoDB Atlas / local MongoDB
- HTML5
- CSS3
- Vanilla JavaScript

## Project structure

```text
fullstack-Assignment-main/
├── backend/
│   ├── src/main/java/com/assignment/backend/
│   │   ├── config/
│   │   ├── controller/
│   │   ├── exception/
│   │   ├── model/
│   │   ├── repository/
│   │   └── BackendApplication.java
│   ├── src/main/resources/
│   │   └── application.properties
│   ├── pom.xml
│   ├── mvnw
│   └── mvnw.cmd
├── frontend/
│   ├── admin.html
│   ├── index.html
│   ├── css/
│   └── js/
├── README.md
└── backend.zip
```

## Local development setup

### Prerequisites

- JDK 17+
- Maven or Maven Wrapper
- MongoDB running locally or MongoDB Atlas connection string
- A browser for the frontend

### Backend setup

1. Open a terminal in the `backend` folder.
2. Set the MongoDB connection string:

```bash
export SPRING_DATA_MONGODB_URI="mongodb://localhost:27017/backend"
```

On Windows PowerShell:

```powershell
$env:SPRING_DATA_MONGODB_URI = "mongodb://localhost:27017/backend"
```

3. Start the app:

```bash
./mvnw spring-boot:run
```

4. The API should run at:

```text
http://localhost:8080
```

### Frontend setup

Serve the `frontend` directory using a static HTTP server or open the files directly in a modern browser.

Example using Python:

```bash
cd frontend
python -m http.server 5500
```

Then open:

- `http://localhost:5500/index.html`
- `http://localhost:5500/admin.html`

## API endpoints

### Public endpoints

- `GET /projects`
- `POST /projects`
- `GET /clients`
- `POST /clients`
- `POST /contact`
- `GET /contact`
- `POST /subscribe`
- `GET /subscribe`

### Notes

- Contact submissions and newsletter signups are public entry points.
- Administrative content management should be protected behind authenticated access in production.
- The default configuration is intended for local development and should be hardened before deployment.

## Environment variables

```bash
SPRING_DATA_MONGODB_URI
APP_CORS_ALLOWED_ORIGINS
PORT
```

Example:

```bash
export PORT=8080
export SPRING_DATA_MONGODB_URI="mongodb+srv://username:password@cluster.mongodb.net/backend"
export APP_CORS_ALLOWED_ORIGINS="http://localhost:5500,http://127.0.0.1:5500"
```

## Security notes

- Never commit real MongoDB credentials.
- Keep secrets in environment variables or a secret manager.
- Restrict admin APIs in production.
- Validate all incoming data.
- Avoid using `innerHTML` when rendering user-provided content.

## Troubleshooting

### MongoDB connection errors

- Check if MongoDB is running.
- Confirm the URI is valid.
- Ensure the database user has the correct permissions.

### Port already in use

- Change the server port in `application.properties` or set `PORT`.

### Frontend API errors

- Confirm the Spring Boot backend is running.
- Verify the frontend is using the correct API base URL.
- Check browser console logs for network errors.

## Production guidance

For production deployments:

- configure a secure MongoDB connection string
- add authentication for the admin dashboard
- restrict CORS to trusted domains only
- use HTTPS
- add monitoring, logging, and automated tests

## License

This project is provided as a study/demo project and is intended for educational use.

## Contributing

This project is a learning project and is currently maintained as a demo application. Contributions are welcome when they improve security, maintainability, and quality.
>>>>>>> 100ce418544a0a080b4cdd7aec7263632ddb6a7e
