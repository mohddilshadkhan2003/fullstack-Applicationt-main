# Fullstack Portfolio & Agency Website

This application pairs a Java 17 and Spring Boot REST API with a vanilla JavaScript website for showcasing projects and clients, collecting enquiries, and managing demo content.

## Stack

- Java 17, Spring Boot 4.0.1, Spring Data MongoDB
- MongoDB local or Atlas
- HTML, CSS, vanilla JavaScript
- Maven Wrapper

## Run locally

From this directory, set the MongoDB URI and start the backend:

```bash
export SPRING_DATA_MONGODB_URI="mongodb://localhost:27017/backend"
cd backend
./mvnw spring-boot:run
```

On Windows PowerShell, set the variable with `$env:SPRING_DATA_MONGODB_URI="mongodb://localhost:27017/backend"` and run `./mvnw.cmd spring-boot:run`. The API defaults to `http://localhost:8080`.

In another terminal, serve the frontend:

```bash
cd frontend
python -m http.server 5500
```

Visit `http://localhost:5500/` or `http://localhost:5500/admin.html`. Set `APP_CORS_ALLOWED_ORIGINS` to the frontend origin(s) when they differ from the local defaults. The frontend's deployed API base URL is in `frontend/js/api.js`.

## Routes

| Method | Route | Purpose |
| --- | --- | --- |
| `GET` / `POST` | `/projects` | List or add projects |
| `GET` / `POST` | `/clients` | List or add clients |
| `GET` / `POST` | `/contact` | List or submit enquiries |
| `GET` / `POST` | `/subscribe` | List or add subscribers |

## Security

The dashboard and its API routes are not protected by authentication in this demo. Add server-side authorization before deploying with real data. Keep MongoDB credentials in environment variables, use HTTPS, and restrict CORS to trusted origins.
