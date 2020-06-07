node {
    CYPRESS_DOCKER_PATH = 'docker/Dockerfile'
}

pipeline {
  agent { 
        dockerfile {
              filename "${CYPRESS_DOCKER_PATH}"
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
        sh 'npm config set registry https://registry.npmjs.org/'
        sh 'npm install'
        sh 'npx cypress verify'
        sh 'npm run clear' 
        sh 'npm run lint' 
      }
    }

   stage('Run Cypress UI Tests') {
   steps {
    sh "npm run cy:ui:headless" 
    sh "npx allure generate reports/ui/allure-results --clean -o reports/ui/allure-report" 
   }
  }

    stage('Publish Reports') {
        steps{
        publishHTML(
                target: [
                        allowMissing         : false,
                        alwaysLinkToLastBuild: false,
                        keepAll              : true,
                        reportDir            : './reports/ui/allure-report',
                        reportFiles          : 'index.html',
                        reportName           : "UI Allure Report"
                ]
        )
    }
    }
  }
}