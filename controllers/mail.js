const nodemailer = require("nodemailer");

exports.sendMail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "chandansamantaray784@gmail.com",
      pass: "mzbhetappllqfzio",
    },
  });

  const info = await transporter.sendMail({
    from: "chandansamantaray784@gmail.com", // sender address
    to: "ksamantaray784@gmail.com", // list of receivers
    subject: "Blogify Team", // Subject line
    text: "567890", // plain text body
    html: "<b>675478</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

  res.json({
    message: info,
  });
};
