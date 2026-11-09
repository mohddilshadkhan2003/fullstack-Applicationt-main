# Fullstack Portfolio & Agency Website

A lightweight portfolio and agency website with a Java 17 / Spring Boot REST API, MongoDB persistence, and a responsive HTML, CSS, and vanilla JavaScript frontend.

[![Java](https://img.shields.io/badge/Java-17-orange?logo=openjdk)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-4.0.1-brightgreen?logo=springboot)](https://spring.io/projects/spring-boot)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-green?logo=mongodb)](https://www.mongodb.com/)
[![Frontend-Vanilla JavaScript-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## What it does

- Presents projects and client highlights from the API
- Accepts contact enquiries and newsletter subscriptions
- Provides a dashboard for adding portfolio content and viewing submissions
- Uses MongoDB through Spring Data MongoDB

> **Security:** The admin page and its APIs are a demo, not an authenticated admin system. Do not expose them publicly with real or sensitive data without adding server-side authentication and authorization.

## Built with

| Area | Technologies |
| --- | --- |
| Backend | Java 17, Spring Boot 4.0.1, Spring Web MVC, Spring Data MongoDB |
| Frontend | HTML5, CSS3, vanilla JavaScript |
| Database | MongoDB (local or Atlas) |
| Build | Maven Wrapper |

## Repository layout

```text
.
├── README.md
└── fullstack-Assignment-main/
    ├── backend/   Spring Boot API and Maven Wrapper
    └── frontend/  Landing page, admin page, styles, and JavaScript
```

## Run locally

### Requirements

- JDK 17 or newer
- MongoDB running locally, or a MongoDB Atlas connection URI
- A modern browser

### 1. Configure the backend

From the repository root, enter the application directory:

```bash
cd fullstack-Assignment-main
```

Set the database URI and allowed frontend origins before starting the API.

**macOS / Linux**

```bash
export SPRING_DATA_MONGODB_URI="mongodb://localhost:27017/backend"
export APP_CORS_ALLOWED_ORIGINS="http://localhost:5500,http://127.0.0.1:5500"
```

**Windows PowerShell**

```powershell
$env:SPRING_DATA_MONGODB_URI="mongodb://localhost:27017/backend"
$env:APP_CORS_ALLOWED_ORIGINS="http://localhost:5500,http://127.0.0.1:5500"
```

Never commit database credentials. For Atlas, use your connection URI in the environment variable.

### 2. Start the API

Run from `fullstack-Assignment-main/`:

```bash
cd backend
./mvnw spring-boot:run
```

On Windows, use `./mvnw.cmd spring-boot:run`. The API listens on `http://localhost:8080` by default; set `PORT` to change it.

### 3. Serve the frontend

In a second terminal, from `fullstack-Assignment-main/`:

```bash
cd frontend
python -m http.server 5500
```

Open [http://localhost:5500/](http://localhost:5500/) for the site or [http://localhost:5500/admin.html](http://localhost:5500/admin.html) for the demo dashboard. Serving the files over HTTP is recommended over opening them directly.

## API routes

| Method | Route | Purpose |
| --- | --- | --- |
| `GET` / `POST` | `/projects` | Read or add projects |
| `GET` / `POST` | `/clients` | Read or add clients |
| `GET` / `POST` | `/contact` | Read or submit contact enquiries |
| `GET` / `POST` | `/subscribe` | Read or add newsletter subscribers |

Example health-of-data check:

```bash
curl http://localhost:8080/projects
```

## Configuration

| Variable | Default | Description |
| --- | --- | --- |
| `PORT` | `8080` | HTTP port for the API |
| `SPRING_DATA_MONGODB_URI` | `mongodb://localhost:27017/backend` | MongoDB connection URI |
| `APP_CORS_ALLOWED_ORIGINS` | `http://localhost:5500,http://127.0.0.1:5500` | Comma-separated browser origins permitted by CORS |

The deployed frontend API URL is configured in `fullstack-Assignment-main/frontend/js/api.js`.

## Performance notes

The frontend keeps successful GET responses in a short-lived in-memory cache, reuses concurrent identical reads, renders card lists in a single DOM update, and lazy-loads images. The API enables HTTP response compression for larger responses. These optimizations are intentionally lightweight and do not replace production profiling, database indexing, or pagination for large datasets.

## Production checklist

- Add server-side authentication and authorization for every admin route.
- Restrict CORS to the actual deployed frontend origin(s).
- Store secrets in a managed secret store and use HTTPS.
- Add pagination and suitable MongoDB indexes as data volume grows.
- Add automated tests, monitoring, and request/input limits before public deployment.

## Contributing

Improvements to accessibility, performance, documentation, tests, and security are welcome. Please keep credentials and other secrets out of commits.

## License

No license is currently specified. Contact the repository owner before redistributing this project.
