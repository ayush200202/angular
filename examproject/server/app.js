const express =require('express')
const cors = require('cors')
const mysqlconnection = require('./dbobj')
const app = express()

app.use(cors())
app.use(express.json())

app.post("/addcustomer",(req,res)=>{
    data=req.body
    querystr="insert into customer(cname,cmobile,caddr,cemail,username,password) values(?,?,?,?,?,?)"
    mysqlconnection.conn.query(querystr,[data.cname,data.cmobile,data.caddr,data.cemail,data.username,data.password],(err)=>{
        if(err){res.json({data:"Customer Registration Failed"})}
        else{
            res.json({data:"Customer Added"})
        }
    })
})


app.get("/products",(req,res)=>{
    querystr="select * from products"
    mysqlconnection.conn.query(querystr,(err,data)=>{
        if(err){
            console.log(err)
            res.send(err)
         }
        else if(data.length===0)
              {
                 res.send("No Data Found")
              }
        else {
               res.send(data)
            }
    })
})

app.get("/productsbyid",(req,res)=>{
    pid=req.query.pid
    querystr="select * from products where pid=?"
    mysqlconnection.conn.query(querystr,[pid],(err,data)=>{
        if(err){
            console.log(err)
            res.send(err)
         }
        else if(data.length===0)
              {
                 res.send("No Data Found")
              }
        else {
               res.send(data)
            }
    })
})

app.get("/login",(req,res)=>{
   data=req.body
   querystr="select * from customer where username=? and password=?"
    mysqlconnection.conn.query(querystr,[data.username,data.password],(err,data)=>{
        if(err){
            console.log(err)
            res.send(err)
         }
        else if(data.length===0)
              {
                
                res.json({msg:"No user Found"})
              }
        else {

               res.json({msg:"Login Successful"})
            }
    }) 
})





app.listen(8000,()=>{
    console.log(`server is running in port no 8000`)
})