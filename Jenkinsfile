pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
               sh 'cd C:/Users/Pablo/Desktop/AYD2-PRACTICA1/ADY2-PRACTICA1-201800464/frontend && npm i'
            }
        }
        stage('Test') {
            steps {
                sh 'cd C:/Users/Pablo/Desktop/AYD2-PRACTICA1/ADY2-PRACTICA1-201800464/frontend && npm run test -- --watchAll=false'
            }
        }
        stage('Front') {
            steps {
                sh 'cd C:/Users/Pablo/Desktop/AYD2-PRACTICA1/ADY2-PRACTICA1-201800464/frontend && npm run build'
            }
        }
        stage('Deploy') {
            steps {
                 sh 'cd C:/Users/Pablo/Desktop/AYD2-PRACTICA1/ADY2-PRACTICA1-201800464/nginx-1.20.2/ && rm -rf html/*'
                 sh 'mv C:/Users/Pablo/Desktop/AYD2-PRACTICA1/ADY2-PRACTICA1-201800464/frontend/build/static  C:/Users/Pablo/Desktop/AYD2-PRACTICA1/ADY2-PRACTICA1-201800464/nginx-1.20.2/html'
                 sh 'cd C:/Users/Pablo/Desktop/AYD2-PRACTICA1/ADY2-PRACTICA1-201800464/frontend/ && mv build/*  C:/Users/Pablo/Desktop/AYD2-PRACTICA1/ADY2-PRACTICA1-201800464/nginx-1.20.2/html'
            }
        }
    }
}