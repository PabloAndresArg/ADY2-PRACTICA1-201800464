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
        stage('Buildfront') {
            steps {
                echo 'cd C:/Users/Pablo/Desktop/AYD2-PRACTICA1/ADY2-PRACTICA1-201800464/frontend && npm run build'
            }
        }
        stage('Deploy') {
            steps {
                echo 'move "C:/Users/Pablo/Desktop/AYD2-PRACTICA1/ADY2-PRACTICA1-201800464/frontend/build/*"  "C:/Users/Pablo/Desktop/AYD2-PRACTICA1/ADY2-PRACTICA1-201800464/nginx-1.20.2/html"'
                echo ' rd /S /Q "C:/Users/Pablo/Desktop/AYD2-PRACTICA1/ADY2-PRACTICA1-201800464/nginx-1.20.2/html/static"'
                echo 'move "C:/Users/Pablo/Desktop/AYD2-PRACTICA1/ADY2-PRACTICA1-201800464/frontend/build/static"  "C:/Users/Pablo/Desktop/AYD2-PRACTICA1/ADY2-PRACTICA1-201800464/nginx-1.20.2/html"'
            }
        }
    }
}