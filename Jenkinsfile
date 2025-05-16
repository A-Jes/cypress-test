pipeline{
    agent any

    parameters{
        string(name: 'SPEC', defaultValue: "cypress\e2e\allSpec.spec.cy.js", description: "Enter the script path that you want to execute")
        choice(name: 'BROWSER', choices: ['chrome','edge','firefox'], description: "Choice the browser where you want to execute your scripts")
    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Building'){
            echo "Building the application"
        }
        stage('Build'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploying'){
            echo "Deploying the application"
        }
    }
}