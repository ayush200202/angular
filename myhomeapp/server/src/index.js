const express = require("express")
const cors = require("cors")
const dbobj = require("./dbservice")
const { emit } = require("process")

const app=express()
const portno =8080

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send({msg:"Hello"})
})

app.post("/adduser",(req,res)=>{
    data = req.body
    console.log(data)
    quertstr="insert into users values (?,?,?,?,?,?)"
    dbobj.conn.query(quertstr,[data.firstname,data.lastname,data.email,data.address.street,data.address.country,data.address.zipcode],(err)=>{
        if(err){res.json({data:"User Regstration Failed"})}
        else{
            res.json({data:"User added"})
        }
    })
    
})

app.delete("/deleteuser",(req,res)=>{
    data=req.query.email
    console.log(data)
    querystr="delete from users where email=?"
    dbobj.conn.query(querystr,[data],(err)=>{
        if(err){res.json({data:"User Deletion Failed"})}
        else{
            res.json({data:"User Deleted"})
        }
    })
})

app.listen(portno,()=>{
    console.log("server is running");
})

