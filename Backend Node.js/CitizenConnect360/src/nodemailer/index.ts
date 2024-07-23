import nodemailer from 'nodemailer';
import path from 'path';
import dotenv from 'dotenv';
import ejs from 'ejs';

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

// Step 1: Create a configuration object
let config = {
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    },
    logger: true,
    debug: true,
    connectionTimeout: 80000
};

// Step 2: Create a transporter
function createTransporter(config:any) {
    return nodemailer.createTransport(config);
}

// Step 3: Send email
export async function sendEmail(messageOption: any): Promise<void> {
    let transporter = createTransporter(config);
    try {
        await transporter.verify();
        await transporter.sendMail(messageOption);
        console.log('Email sent successfully');
    } catch (err) {
        console.error('SMTP Connection Error:', err);
    }
}
// Function to render and send email
export async function renderAndSendEmail(templatePath: string, templateData: any, messageOptions: any): Promise<void> {
    ejs.renderFile(templatePath, templateData, async (err, data) => {
        if (err) {
            console.error('Error rendering EJS template:', err);
            throw err;
        }
        messageOptions.html = data;
        await sendEmail(messageOptions);
    });
}
