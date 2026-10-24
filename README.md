# Fullstack Portfolio and Agency Website

A modern full-stack portfolio and agency website built with Java, Spring Boot, MongoDB, and vanilla JavaScript.

This project showcases a public landing page, project/client highlights, contact form submissions, email subscriptions, and an admin dashboard for managing content.

## Overview

The application is designed as a small business portfolio website where visitors can:
- view projects and client work
- learn about the agency
- submit contact requests
- subscribe for updates

The admin panel lets administrators review incoming enquiries and manage project/client data.

## Architecture

```mermaid
flowchart LR
    A[User Browser] --> B[Frontend: index.html / admin.html]
    B --> C[JavaScript API Layer]
    C --> D[Spring Boot REST API]
    D --> E[MongoDB Database]
    E --> F[Projects / Clients / Contact / Subscribers]
    F --> G[Admin Dashboard]
```

## Workflow

```mermaid
sequenceDiagram
    participant U as User
    participant F as Frontend
    participant B as Backend API
    participant M as MongoDB

    U->>F: Open landing page
    F->>B: GET /projects
    F->>B: GET /clients
    B->>M: Fetch data
    M-->>B: Project/client records
    B-->>F: JSON response
    F-->>U: Render content

    U->>F: Submit contact form
    F->>B: POST /contact
    B->>M: Save enquiry
    M-->>B: Confirmation
    B-->>F: Success response
    F-->>U: Show confirmation
```

## Tech Stack

- Java 17
- Spring Boot
- Spring Data MongoDB
- MongoDB
- HTML5
- CSS3
- JavaScript
- Maven

## Project Structure

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
│   ├── mvnw.cmd
│   └── Dockerfile
├── frontend/
│   ├── index.html
│   ├── admin.html
│   ├── css/
│   └── js/
│       ├── api.js
│       ├── index.js
│       └── admin.js
├── README.md
└── backend.zip
```

## Features

- Dynamic project showcase
- Client highlight section
- Contact form for enquiries
- Email subscription form
- Admin panel for viewing entries
- MongoDB persistence
- REST-based architecture
- Browser-based frontend

## System Requirements

Before running the project, ensure your machine has:

### Required software
- JDK 17+
- Maven 3.8+
- MongoDB running locally or a valid MongoDB Atlas connection string
- Modern browser such as Chrome, Edge, or Firefox

### Optional tools
- IntelliJ IDEA or VS Code
- Git
- Docker (for containerized deployment)

## Verify Java and Maven

### Windows PowerShell
```powershell
java -version
javac -version
mvn -version
```

### macOS/Linux
```bash
java -version
javac -version
mvn -version
```

If Java is not recognized, install JDK 17 and restart your terminal.

## Environment Variables

The backend reads configuration from environment variables.

### Windows PowerShell
```powershell
$env:PORT="8080"
$env:SPRING_DATA_MONGODB_URI="mongodb://localhost:27017/backend"
$env:APP_CORS_ALLOWED_ORIGINS="http://localhost:5500,http://127.0.0.1:5500"
```

### macOS/Linux
```bash
export PORT=8080
export SPRING_DATA_MONGODB_URI="mongodb://localhost:27017/backend"
export APP_CORS_ALLOWED_ORIGINS="http://localhost:5500,http://127.0.0.1:5500"
```

## Run the Backend

Go to the backend folder and start the Spring application:

### Windows
```powershell
cd backend
./mvnw.cmd spring-boot:run
```

### macOS/Linux
```bash
cd backend
./mvnw spring-boot:run
```

The application will start on:
```text
http://localhost:8080
```

## Run the Frontend

You can either open the HTML files directly in the browser or serve the folder with a static server.

### Option 1: Open directly
Open:
- frontend/index.html
- frontend/admin.html

### Option 2: Serve with Python
```bash
cd frontend
python -m http.server 5500
```

Then open:
- http://localhost:5500/index.html
- http://localhost:5500/admin.html

## MongoDB Configuration

The backend uses MongoDB through Spring Data MongoDB. Example configuration:

```properties
spring.application.name=backend
server.port=${PORT:8080}
spring.data.mongodb.uri=${SPRING_DATA_MONGODB_URI:mongodb://localhost:27017/backend}
app.cors.allowed-origins=${APP_CORS_ALLOWED_ORIGINS:http://localhost:5500,http://127.0.0.1:5500}
```

If you are using MongoDB Atlas, set the URI to your Atlas connection string instead of localhost.

## API Endpoints

### Public endpoints
- GET /projects
- POST /projects
- GET /clients
- POST /clients
- POST /contact
- GET /contact
- POST /subscribe
- GET /subscribe

### Example request
```bash
curl http://localhost:8080/projects
```

## Admin Functionality

The admin page is used to:
- review submitted contact requests
- review newsletter subscriptions
- add projects
- add clients

This is a demo implementation and should be secured in production with authentication and authorization.

## Security Notes

- Never commit real MongoDB credentials
- Keep secrets in environment variables
- Use HTTPS in production
- Restrict admin APIs with authentication
- Validate user input on both frontend and backend

## Troubleshooting

### Java not recognized
- Install JDK 17
- Restart the terminal
- Verify JAVA_HOME and PATH

### MongoDB connection errors
- Check if MongoDB is running
- Confirm the URI is valid
- For Atlas, ensure IP access is allowed

### Frontend API errors
- Ensure backend is running
- Check browser console for network errors
- Confirm the base URL points to http://localhost:8080

## Professional Upgrade Suggestions

To make the project more production-ready, consider:
- JWT-based admin authentication
- Service-layer refactor
- DTO validation and centralized exception handling
- Better UI/UX with frameworks like React or Angular
- Docker Compose for full environment setup
- CI/CD pipeline and automated tests

## License

This project is intended for learning and demonstration purposes.

## Contributing

Contributions are welcome if they improve code quality, security, maintainability, or the user experience.

---

This repository is a learning/full-stack demo project.
It demonstrates a simple end-to-end flow from browser form submissions to database persistence through a Spring Boot API.

"path":"fullstack-Assignment-main/README.md" },{"content":"# Full Stack Portfolio Website

A modern portfolio and agency website with a public landing page and an admin dashboard. Visitors can submit contact requests and subscribe to a newsletter, while administrators can manage projects and clients.

## Overview

This application is split into two main parts:

- Backend: Java 17 + Spring Boot + MongoDB
- Frontend: HTML + CSS + JavaScript

The landing page showcases projects and clients, while the admin dashboard allows authorized users to review submissions and add content.

## Architecture

```mermaid
flowchart LR
    A[User Browser] --> B[Frontend Landing Page]
    B --> C[REST API]
    C --> D[Spring Boot Controller]
    D --> E[MongoDB]
    E --> F[Projects, Clients, Contact, Subscribers]
    F --> G[Admin Dashboard]
```

## Workflow

```mermaid
sequenceDiagram
    participant U as Visitor
    participant F as Frontend
    participant B as Backend API
    participant M as MongoDB

    U->>F: Visit website
    F->>B: GET /projects
    F->>B: GET /clients
    B->>M: Retrieve records
    M-->>B: JSON data
    B-->>F: Data response
    F-->>U: Render portfolio cards

    U->>F: Submit contact form
    F->>B: POST /contact
    B->>M: Save enquiry
    M-->>B: Saved
    B-->>F: Success
    F-->>U: Confirmation message
```

## Features

- Public landing page
- Contact form for enquiries
- Newsletter subscription
- Project display cards
- Client showcase section
- Admin panel for content management
- MongoDB persistence
- REST API integration

## Tech Stack

- Java 17
- Spring Boot
- Spring Data MongoDB
- MongoDB Atlas / local MongoDB
- HTML5
- CSS3
- Vanilla JavaScript
- Maven

## Project Structure

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
│   ├── mvnw.cmd
│   └── Dockerfile
├── frontend/
│   ├── admin.html
│   ├── index.html
│   ├── css/
│   └── js/
├── README.md
└── backend.zip
```

## Local Development Setup

### Prerequisites

- JDK 17+
- Maven or Maven Wrapper
- MongoDB running locally or a MongoDB Atlas connection string
- A modern browser

### Backend Setup

1. Open a terminal in the `backend` directory.
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

Or on Windows:

```powershell
./mvnw.cmd spring-boot:run
```

4. The API starts at:

```text
http://localhost:8080
```

### Frontend Setup

Serve the frontend directory or open the HTML directly.

Example with Python:

```bash
cd frontend
python -m http.server 5500
```

Then open:
- http://localhost:5500/index.html
- http://localhost:5500/admin.html

## API Endpoints

### Public endpoints
- GET /projects
- POST /projects
- GET /clients
- POST /clients
- POST /contact
- GET /contact
- POST /subscribe
- GET /subscribe

## Environment Variables

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

## Security Notes

- Never commit real MongoDB credentials.
- Keep secrets in environment variables or a secret manager.
- Restrict admin APIs in production.
- Validate incoming data.
- Use HTTPS in production.

## Troubleshooting

### MongoDB connection errors
- Check if MongoDB is running.
- Confirm the URI is valid.
- Ensure the database user has permissions.

### Port already in use
- Change the server port in `application.properties` or set `PORT`.

### Frontend API errors
- Confirm the Spring Boot backend is running.
- Verify the frontend uses the correct API base URL.
- Check the browser console for errors.

## Production Guidance

For production deployment:

- configure a secure MongoDB connection string
- add authentication for the admin dashboard
- restrict CORS to trusted domains
- use HTTPS
- add monitoring, logging, and automated tests

## License

This project is provided for learning and demonstration purposes.

## Contributing

This is a learning project and contributions are welcome when they improve quality, maintainability, and security.
"}]}