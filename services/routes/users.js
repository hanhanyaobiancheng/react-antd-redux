//博客信息页
var express = require('express');
var router = express.Router();
var articles = require('schema');
var moment = require('moment');

//请求所有用户
router.get('/',(req,res,next)=>{
    articles.find({},(err,resData)=>{
        if(err){
            res.json({
                'status':0,
                'message':'获取失败'
            })
        }else{
            res.json({
                'status':1,
                'message':'获取成功',
                'data':resData
            })
        }
    })
})
//请求单个用户(html)
router.get('/:id',(req,res,next)=>{
    articles.findOne({_id:req.params.id},(err,resData)=>{
        if(err){
            res.json({
                'status':0,
                'message':'获取失败'
            })
        }else{
            res.json({
                'status':1,
                'message':'获取文章成功',
                'data':resData
            })
        }
    })
})
//添加用户
router.post('/',(req,res,next)=>{
    if(!req.body.title || !req.body.text) {
        res.statusCode = 400;
        return res.send('Error 400: Post syntax incorrect.');
    }
    let article = {
        title : req.body.title,
        text : req.body.text
    }
    let newArticle = new articles(article);
    newArticle.save();
    res.json({
        'status':1,
        'message':'保存成功'
    });
})

//删除用户
router.post('/remove',(req,res,next)=>{
    //console.log(req.body.id);
    var id = req.body.id;
    articles.remove({_id:id},(err)=>{
        //console.log(err);
        if(err){
            res.json({
                'status':0,
                'message':'删除失败'
            })
        }else{
            res.json({
                'status':1,
                'message':'删除成功'
            });
        }
    })
})

//更新用户
router.post('/edit/:id',(req,res,next)=>{
    articles.findOne({_id:req.params.id}).update({
        "title": req.body.title,
        "text": req.body.text
    },(err)=>{
        if(err){
            res.json({
                'status':0,
                'message':'更新失败',
                "data": err
            });
        }else{
            res.json({
                'status':1,
                'message':'更新成功'
            });
        }
    })
})
module.exports = router;