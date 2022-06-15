const express=require('express');
const router=express.Router();
const userController=require('../controller/user_controller');
router.get('/sign-in',userController.signIn);
router.get('/sign-up',userController.signUp);
router.get('/profile',userController.user);
router.post('/create',userController.create);
router.post('/create-session',userController.create_session);
router.get('/sign-out',userController.signOut);
module.exports=router;