module.exports = {
    article:{
        title:{
            type: String,
            require: true
        },
        author:{
            type: String,
            require: true
        },
        text:{
            type: String,
            require: true
        },
        time:{
            createAt:{
                type: Date,
                default: Date.now()
            }
        }
    },
    comment:{
        articleId:{
            type: String,
            require: true
        },
        author:{
            type: String,
            require: true
        },
        text:{
            type: String,
            require: true
        },
        time:{
            type: Date,
            default: Date.now()
        }
    },
    user:{
        userName:{
            type: String,
            require: true
        },
        password:{
            type: String,
            require: true
        },
        avatar: {
            type: String,
            require: true
        },
        introduce:{ //一句话简介
            type: String,
            require: true
        }
        // bio:{//详细介绍（about页面）
        //     type: String,
        //     require: true
        // }
    },
    about:{
        bio:{//详细介绍（about页面）
            type: String,
            require: true
        }
    }
}
