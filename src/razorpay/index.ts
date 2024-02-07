import { Response } from 'express';
import { Request } from 'express';
const express = require('express');
const Razorpay= require('razorpay');

const razorpayRouter = express.Router()


const instance = new Razorpay({
    key_id: "rzp_test_ywdHvXUYgtmY9y",
    key_secret: "ir53S5XSXsjcCBbnbiwY4rMP",
})

razorpayRouter.get('/home', async(req: Request, res: Response)=>{
    res.status(200).send("This is the razorpay Home")
})

razorpayRouter.post('/payment', async(req: Request, res: Response)=>{


    var options = {
        amount: 1000,
        currency: "INR",
        receipt: Math.random().toString()
    }

    instance.orders.create(options,(err: object, order: object)=>{
        res.json({ data : order})
    })
})


//  WebHook URL for the payment gateway

razorpayRouter.get('/webhook', async(req: Request, res: Response)=>{
    
})