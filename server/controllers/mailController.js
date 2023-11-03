import nodemailer from 'nodemailer';

export const mailSender = (req, res) => {
  try {
    const { name, phone, email, mes } = req.body;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAILER_EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    let message = {
      from: process.env.MAILER_EMAIL,
      to: [process.env.MAILER_EMAIL,'ramjee9580pal@gmail.com'],
      subject: 'Someone Contacted',
      html: `
        <html>
          <body>
            <div style="background-color: #f5f5f5; padding: 20px;">
              <div style="background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                <h1 style="color: #333; font-size: 24px; font-weight: bold;">Contact Form Submission</h1>
                <p style="color: #555; font-size: 16px; margin-top: 20px;">Name: ${name}</p>
                <p style="color: #555; font-size: 16px;">Phone: ${phone}</p>
                <p style="color: #555; font-size: 16px;">Email: ${email}</p>
                <p style="color: #555; font-size: 16px; margin-top: 20px;">Message:</p>
                <p style="color: #666; font-size: 14px; background-color: #fff; padding: 10px; border-radius: 5px;">${mes}</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    transporter.sendMail(message).then(() => {
      return res.status(201).json({ message: "Mail sent" });
    }).catch(err => {
      console.error(err);
      return res.status(400).json({ message: "Mail not sent" });
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Mail not sent" });
  }
};
