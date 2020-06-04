node {
    CYPRESS_DOCKER_PATH = 'docker/Dockerfile'
}

pipeline {
  agent { 
        dockerfile {
              filename "${CYPRESS_DOCKER_PATH}"
                args '-e HOME=${workspace}'
      } 
  }
  stages {
    stage('Clone scm') {
   steps {
    checkout([$class: 'GitSCM', branches: [
      [name: '*/master']
     ],
     userRemoteConfigs: [
      [url: 'https://github.com/abhinaba-ghosh/cy-fy.git']
     ]
    ])
   }
  }
    // first stage installs node dependencies and Cypress binary
    stage('Configuration') {
      steps {
        sh 'npm ci'
        sh '$(npm bin)/cypress verify'
        sh 'npm run clean' 
        sh 'npm run lint' 
      }
    }

   stage('Run Cypress UI Tests') {
   steps {
    sh "npm run e2e:headless" 
    sh "npm run report" 
   }
  }

    stage('Publish Reports') {
        steps{
        publishHTML(
                target: [
                        allowMissing         : false,
                        alwaysLinkToLastBuild: false,
                        keepAll              : true,
                        reportDir            : './reports/allure/allure-report',
                        reportFiles          : 'index.html',
                        reportName           : "UI Allure Report"
                ]
        )
    }
    }
  }

  post {
    // shutdown the server running in the background
    always {
      echo 'Stopping local server'
      sh 'pkill -f http-server'
    }
  }
}