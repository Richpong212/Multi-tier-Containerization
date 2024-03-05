# Multi-Tier Application Setup with Docker Compose

This Docker Compose configuration file sets up a multi-tier application environment using Docker. The setup includes containers for PostgreSQL, the backend server, Memcached, and the frontend web application.

## Services

### PostgreSQL

- **Image:** PostgreSQL
- **Container Name:** postgresql
- **Ports:** 5432:5432
- **Volumes:**
  - ./Database/schema.sql:/docker-entrypoint-initdb.d/schema.sql
  - ./Database/seed.sql:/docker-entrypoint-initdb.d/seed.sql
- **Environment File:** .env
- **Description:** PostgreSQL service for the application database.

### Backend

- **Build:**
  - Context: ./Backend
  - Dockerfile: Dockerfile.backend
- **Container Name:** backend
- **Ports:** 3005:3005
- **Volumes:**
  - ./Backend:/HackYourBrain-Backend
- **Environment File:** .env
- **Description:** Backend server service for handling application logic.

### Memcached

- **Image:** memcached:latest
- **Container Name:** memcached
- **Ports:** 11211:11211
- **Description:** Memcached service for caching in the application.

### Frontend

- **Build:**
  - Context: ./frontend
  - Dockerfile: Dockerfile.frontend
- **Container Name:** frontend
- **Ports:** 80:80
- **Volumes:**
  - ./frontend:/HackYourBrain-Frontend
- **Environment File:** .env
- **Description:** Frontend web application service for user interface.

## Networks

- **backend:** Bridge network for communication between backend services.
- **frontend:** Bridge network for communication between frontend and backend services.

## Usage

1. Clone this repository to your local machine.
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory.
   ```bash
   cd <project_directory>
   ```
3. Ensure you have Docker and Docker Compose installed on your machine.
4. Customize the `.env` file with your desired environment variables.
5. Run the Docker Compose command to start the services.
   ```bash
   docker-compose up
   ```
6. Access your application in the browser at `http://localhost`.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request with any improvements or suggestions.

## License

This project is licensed under the [MIT License](LICENSE).
