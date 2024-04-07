pipeline {
    agent any

    stage ('Fetch Code') {
        step {
            git branch: 'main', url: 'https://github.com/Richpong212/Multi-tier-Containerization.git'
        }
    }

    stage ('Build the code') {
        steps {
            sh 'cd Multi-tier-Containerization && cd frontend && npm install && npm run build'
        }
    }
}