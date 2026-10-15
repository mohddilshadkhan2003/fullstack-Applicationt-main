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
