const swaggerUi    = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'administraçao de alunos',
            version: '1.0.0',
            description: 'Documentação da API administraçao de alunos.',
        },
        servers: [
            {
                url: 'http://localhost:3000/', 
            },
        ],
    },
    apis: ['../routes/*.js'], 
};

const specs = swaggerJSDoc(options);


function swaggerDocs(app) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}

module.exports = swaggerDocs;