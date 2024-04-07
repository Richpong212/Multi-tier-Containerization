pipeline {
    agent any

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
