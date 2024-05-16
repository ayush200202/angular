const express = require("express")
const mysqlconnection = require("./dbservice")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/getData",(req,res)=>{
    querystr="select * from users"
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






app.listen(8000,()=>{
    console.log(`server is running in port no 8000`)
})