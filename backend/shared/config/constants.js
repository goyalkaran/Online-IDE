module.exports={
    ROUTES:{
        HOME:'/',
        USER:{
            OAUTH:'/oauth'
        },
        QUESTION:{
            COMPILE_AND_RUN:'/run'
        }
    },
    HTTP_STATUS_CODES:{
        SUCCESS : 200,
        FILE_NOT_FOUND: 404,
        SERVER_ERROR : 500
    },
    SCHEMAS:{
        USER_SCHEMA: 'users',
        QUESTIONS_SCHEMA:'questions',
        SOLUTION_SCHEMA:'solutions'
    }
}