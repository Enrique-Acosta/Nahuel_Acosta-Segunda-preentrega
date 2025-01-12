import { Router } from "express";
import fs from 'fs/promises';
 
const router= Router()


router.get('/',(req,res)=>{
    res.render('home', {})
})


export default router