pipeline {
    agent {
        docker {
            image 'node:latest' // Use the latest Node.js Docker image
            args '-v /var/run/docker.sock:/var/run/docker.sock' // Mount Docker socket for Docker commands inside the container
        }
    }

    stages {
        stage('Fetch Code') {
            steps {
                // Checkout code from Git repository
                git branch: 'main', url: 'https://github.com/Richpong212/Multi-tier-Containerization.git'
            }
        }

        stage('Build the frontend') {
            steps {
                // Navigate to the frontend directory
                dir('frontend') {
                    // Install frontend dependencies
                    sh 'npm install'

                    // Build the frontend application
                    sh 'npm run build'
                }
            }
        }
    }
}
