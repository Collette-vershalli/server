const { Console } = require("console");
const express = require("express");


const app = express();
const PORT = 4000;


const users = [{id:1, name:'yaya', age:25},
{id:2, name:'carl', age:22},
];

app.use(express.json())

app.get('/user', (req,res) =>{
    return res.status(200).send(users);
})
app.post('/create-users' , (req, res) =>{
    const {name,age} = req.body;
    users.push({id:users.length+1,name ,age})
    return res.status(200).send(users);

})
 app.post('/update-users/:id' , (req, res) =>{
     
     const {id} = req.params
const userIndex = users.findIndex((u) => u.id==id)
let newValue = users[userIndex];
newValue = {...newValue, ...req.body};
users[userIndex] = newValue;
     return res.status(200).send(users); 
    })

app.listen (PORT, () => console.log(`server running on PORT ${PORT}`));