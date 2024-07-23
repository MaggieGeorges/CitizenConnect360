// src/services/emailService.ts
import nodemailer from 'nodemailer';
import ejs from 'ejs';
import path from 'path';
import { sendEmail } from '../helpers/helpers';


export async function sendResetEmail(email: string, token: string) {
    const resetLink = `http://your-frontend-url/reset-password?token=${token}`;

    const templatePath = path.join(__dirname, '../../Templates/resetPassword.ejs');
    const htmlContent = await ejs.renderFile(templatePath, { resetLink });

    const messageOptions = {
        to: email,
        from: process.env.EMAIL,
        subject: 'Password Reset Request',
        html: htmlContent
    };

    await sendEmail(messageOptions);
}
