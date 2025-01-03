import express from 'express'
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

let users =[

]

const router = express.Router();
router.get('/',(req,res)=>{
    console.log(users);
    res.send(users);
});
router.post('/',(req,res)=>{
    const user = req.body;
    users.push(user);
    users.push({...user,id: uuidv4()});

    console.log("POST ROUTE REACHED");
    res.send(`User with the name ${user.firstName} added to the database`);
});
router.get('/:id', (req,res)=>{
 const {id} = req.params;
 const foundUser = users.find((user) => user.id === id)
 res.send(foundUser);
});
router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    users = users.filter((user)=> user.id !==id);
    res.send(`user with the ID ${id} has been deleted`)
});
router.patch('/:id',(req,res)=>{
    const{id} = req.params;
    const{firstName,LastName,age} = req.body;
    const userToBeUpdated = users.find((user)=> user.id ===id)
    if(firstName){ user.firstName = firstName; }
    if(LastName){ user.LastNameName = LastName; }
    if(age){ user.age = age; }
    res.send(`user with the ID ${id} has been updated`)    
})
export default router;

