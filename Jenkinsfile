pipeline {
    agent any

    stages {
        stage('Obter branch no Github') {
            steps {
                git branch: 'main', url: 'https://github.com/RubaTeixeira/M17_Atividade.git'
            }
        }
        stage('Configurar módulos') {
            steps {
                sh 'npm install'
            }
        }
        stage('Executar teste') {
            steps {
                sh 'npm test'
                //Em capacities já temos as informações necessárias para o Browserstack
            }
        }
    }
}