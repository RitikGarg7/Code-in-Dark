const express =require('express')
const path=require('path')
const session =require('express-session')
const passport=require('./passport')
// const route= require('express').Router()
// const passport=require('../passport')
// const Users=require('../db').Users
// const hack=require('../hackerearth-api').hack
// const Sequelize=require('sequelize')
var mysql = require('mysql');

const app=express();

const SERVER_PORT=process.env.PORT || 3333

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use(session({
    secret:'somesecretstring'
}))
app.use(passport.initialize())
app.use(passport.session())

var options={
    host     : 'localhost',
    user     : 'root',
    database : 'techfest',
    password:'etuoryuojl',
    connectionLimit:3,
    port: 3306,
}
var connection = mysql.createConnection(options); 

// app.use('/user',require('./routes/root').route)
//  app.use('/question',require('./routes/question').route) 
app.use('/',express.static(__dirname))
app.use('/codeMirror',express.static(path.join(__dirname,'codeMirror')))


app.get('/',(req,res)=>{
    // if(req.session.loggedin){
    //     console.log(req.session.username)
    //      res.render('homepage',{currentuser:req.session.username})
    //     //res.render('login')
    // }else{
    //     res.redirect('/signup')
    // }
   // res.render('../views/homepage');
    res.render('index');
})


app.get('/login',(req, res)=>{
    res.render('login.ejs')
})
app.get('/signup',(req,res)=>{
    res.render('signup')
})

// app.post('/login',passport.authenticate('local',{

    
//     failureRedirect:'/login',
//     successRedirect:'/'
// }))
app.post('/login',function(req,res) {
    var Username =req.body.username;
    var Password = req.body.password;
    console.log(Username+" "+Password);
 		connection.query('SELECT * FROM userdata WHERE Username = ? AND Password = ?', [Username, Password], function(error, results, fields) {
			if (results.length > 0) {
                console.log("line 73");
				req.session.loggedin = true;
				req.session.username = Username;
				res.redirect("/inside");
			} else {
                console.log("line 78");
				res.redirect("/signup");
            }	
            console.log("line 80");
			res.end();
		});
})
app.post('/signup',(req,res)=>{
    // Users.create({
    //     name:req.body.name,
    //     college: req.body.college,
    //     username: req.body.username,
    //     password: req.body.password,
    // }).then((createdUser)=>{
    //     res.redirect('/login')
    // })

    var person={
        Name:req.body.name,
        College:req.body.college,
        Username:req.body.username,
        password:req.body.password
    }
    var l='insert into userdata set ?';
    connection.query(l,person,function(error,result) {
        if(error) throw error;
        console.log(result);
    })
    res.redirect("/login");
})

app.get("/inside",function(req,res) {
    if(req.session.loggedin){
        console.log(req.session.username)
         res.render('homepage',{currentuser:req.session.username})
        //res.render('login')
    }else{
        res.redirect('/signup')
    }
})


app.listen(SERVER_PORT,()=>console.log('server started at http://localhost:3333'))





app.get('/ques1',(req,res)=>{
    if(req.session.loggedin){
        console.log("line 128");
        res.render('q1')
    }else{
        console.log("line 130");
        res.redirect('/user/signup')
    }
}) 

app.get('/ques2',(req,res)=>{
    if(req.session.loggedin){
        res.render('q2')
    }else{
        res.redirect('/user/signup')
    }
})
app.get('/ques3',(req,res)=>{
    if(req.session.loggedin){
        res.render('q3')
    }else{
        res.redirect('/user/signup')
    }
})
app.get('/ques4',(req,res)=>{
    if(req.session.loggedin){
        res.render('q4')
    }else{
        res.redirect('/user/signup')
    }
})
app.get('/ques5',(req,res)=>{
    if(req.session.loggedin){
        res.render('q5')
    }else{
        res.redirect('/user/signup')
    }
})

app.post('/ques1',(req,res)=>{
    var config = {}
    config.time_limit = 1;
    config.memory_limit = 323244;
    config.source = req.body.q1code;
    config.input = "";
    config.language = "Cpp";

    hack.compile(config)
        .then(result=>{
            Users.findOne({
                where:{
                    username:req.user.dataValues.username
                }
            }).then((user)=>{
                user.updateAttributes({
                    ques1:JSON.parse(result).web_link,
                    // time:Sequelize.NOW
                })
                res.render('homepage')
            })
        })
        .catch(err=>{
            console.log(err)
        })

})

app.post('/ques2',(req,res)=>{
    var config = {}
    config.time_limit = 1;
    config.memory_limit = 323244;
    config.source = req.body.q2code;
    config.input = "";
    config.language = "Cpp";

    hack.compile(config)
        .then(result=>{
            Users.findOne({
                where:{
                    username:req.user.dataValues.username
                }
            }).then((user)=>{
                user.updateAttributes({
                    ques2:JSON.parse(result).web_link,
                    // time:Sequelize.NOW
                })
                res.render('homepage')
            })
        })
        .catch(err=>{
            console.log(err)
        })

})

app.post('/ques3',(req,res)=>{
    var config = {}
    config.time_limit = 1;
    config.memory_limit = 323244;
    config.source = req.body.q3code;
    config.input = "";
    config.language = "Cpp";

    hack.compile(config)
        .then(result=>{
            Users.findOne({
                where:{
                    username:req.user.dataValues.username
                }
            }).then((user)=>{
                user.updateAttributes({
                    ques3:JSON.parse(result).web_link,
                    // time:Sequelize.NOW
                })
                res.render('homepage')
            })
        })
        .catch(err=>{
            console.log(err)
        })

})
app.post('/ques4',(req,res)=>{
    var config = {}
    config.time_limit = 1;
    config.memory_limit = 323244;
    config.source = req.body.q4code;
    config.input = "";
    config.language = "Cpp";

    hack.compile(config)
        .then(result=>{
            Users.findOne({
                where:{
                    username:req.user.dataValues.username
                }
            }).then((user)=>{
                user.updateAttributes({
                    ques4:JSON.parse(result).web_link,
                    // time:Sequelize.NOW
                })
                res.render('homepage')
            })
        })
        .catch(err=>{
            console.log(err)
        })

})
app.post('/ques5',(req,res)=>{
    var config = {}
    config.time_limit = 1;
    config.memory_limit = 323244;
    config.source = req.body.q5code;
    config.input = "";
    config.language = "Cpp";

    hack.compile(config)
        .then(result=>{
            Users.findOne({
                where:{
                    username:req.user.dataValues.username
                }
            }).then((user)=>{
                user.updateAttributes({
                    ques5:JSON.parse(result).web_link,
                    // time:Sequelize.NOW
                })
                res.render('homepage')
            })
        })
        .catch(err=>{
            console.log(err)
        })

})
