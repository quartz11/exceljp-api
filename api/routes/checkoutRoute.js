require('dotenv').config()
const express = require('express')
const app = express.Router();
const nodemailer = require('nodemailer')
app.get('/checkout',(req,res) => {
    res.send('test GET Checkout API');
  });
  
  app.post('/checkout', (req,res) => {
    res.send(req.body)
    console.log(req.body)
    console.log(JSON.stringify(req.body));
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        },
        port: 465,
        host: 'smtp.gmail.com'
    })

    var maillist = [
        'admin@1excellence.com',
        'yoshizawa@1excellence.com'
      ];

    const localTime = new Date().toLocaleString('en-US', {timeZone: 'Asia/Tokyo', hour12: false});
    const mailOptions = {
        from: process.env.EMAIL,
        to: maillist,
        subject: `【Order】OFFICIAL PAGE - お問い合わせがありました ${localTime} - ${req.body.first_name} ${req.body.family_name}`,
        text: req.body.first_name,

        html: `<div>
                <table>
                <tr>
                <td>
                <h2> Inquiry Type : </h2>
                </td>
                <td>
                <h2> ${req.body.itype} </h2>
                </td>
                </tr>
                <tr>
                <tr>
                <td>
                <h2> 質問者名 First : </h2>
                </td>
                <td>
                <h2> ${req.body.first_name} </h2>
                </td>
                </tr>
                <tr>
                <td>
                <h2> Middle name : </h2>
                </td>
                <td>
                <h2> ${req.body.middle_name} </h2>
                </td>
                </tr>
                <tr>
                <td>
                <h2> Family name : </h2>
                </td>
                <td>
                <h2> ${req.body.family_name} </h2>
                </td>
                </tr>
                <tr>
                <td>
                <h2> フリガナ First : </h2>
                </td>
                <td>
                <h2> ${req.body.first_name2} </h2>
                </td>
                </tr>
                <tr>
                <td>
                <h2> フリガナ Family name : </h2>
                </td>
                <td>
                <h2> ${req.body.family_name2} </h2>
                </td>
                </tr>
                <tr>
                <td>
                <h2> Date of Birth : </h2>
                </td>
                <td>
                <h2> ${req.body.year} / ${req.body.month} / ${req.body.day} </h2>
                </td>
                </tr>
                <tr>
                <td>
                <h2> 性別 : </h2>
                </td>
                <td>
                <h2> ${req.body.sex} </h2>
                </td>
                </tr>
                </tr>
                <tr>
                <td>
                <h2> 国名 : </h2>
                </td>
                <td>
                <h2> ${req.body.country} </h2>
                </td>
                </tr>
                </tr>
                <tr>
                <td>
                <h2> 住所 : </h2>
                </td>
                <td>
                <h2> ${req.body.addressn} </h2>
                </td>
                </tr>
                <tr>
                <td>
                <h2> 住所 : </h2>
                </td>
                <td>
                <h2> ${req.body.address} </h2>
                </td>
                </tr>
                <tr>
                <td>
                <h2> 電話番号 : </h2>
                </td>
                <td>
                <h2> ${req.body.telphone} </h2>
                </td>
                </tr>
                <tr>
                <td>
                <h2> メール : </h2>
                </td>
                <td>
                <h2> ${req.body.email} </h2>
                </td>
                </tr>
                <tr>
                <td>
                <h2> Order Number : </h2>
                </td>
                <td>
                <h2> ${req.body.ordernum} </h2>
                </td>
                </tr>
                <tr>
                <td>
                <h2> Choice of payment method : </h2>
                </td>
                <td>
                <h2> ${req.body.payment} </h2>
                </td>
                </tr>
                <tr>
                <td>
                <h2> Privacy Policy : </h2>
                </td>
                <td>
                <h2> ${req.body.privacy} </h2>
                </td>
                </tr>
                <tr>
                <td>
                <h2> お問い合わせ内容 : </h2>
                </td>
                <td>
                <h2> ${req.body.matter} </h2>
                </td>
                </tr>

                <br />
                </table>
                </div>`

    }

    transporter.sendMail(mailOptions, (error, info) =>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log('Email sent: '+info.response);
            res.send('success')
        }
    })

   
  })


  module.exports = app;