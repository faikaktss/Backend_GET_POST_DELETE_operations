require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");

const PORT = process.env.PORT || 3000;
const app = express();
const pool = new Pool({
  user: process.env.DATABASE_USER, //env dosyasındaki veriyi bu şekilde eşitliyoruz
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_NAME
});

app.use(express.json());

app.get('/users', async(req,res) =>{
  try{
    const result = await pool.query('select * from users');
    res.status(200).json(result.rows);
  }catch(error){
    console.log(error);
    res.status(400).json({message:"invalid_data"});
  }
})

app.post('/users',async (req,res) =>{

  const {name,email,age} = req.body;
 try{
    const result = await pool.query('INSERT INTO users(name,email,age) VALUES ($1,$2,$3) RETURNING * ',[name,email,age]);
    res.status(201).json(result.rows);
  }catch(error){
    console.log(error);
    res.status(400).json({message:"invalid_data"});
  }
})


app.delete('/users/:id', async(req,res)=>{
  try{
    const usersId = req.params.id;
    await pool.query('DELETE FROM users where id= $1',[Number(usersId)]);
    res.status(202).json({message:"Silme işlemi başarili"});
  }catch(error){
    console.log(error); 
    res.status(400).json({message:"invalid_data"});
  }
});

app.listen(PORT, () => {
  console.log("Sunucu Ayakta!!! PORT: ", PORT);
});
