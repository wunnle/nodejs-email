const express = require("express");
const nodemailer = require("nodemailer");
const knownServices = require("./helpers/known-services");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;

app.post("/sendEmail", async (req, res) => {
  console.log(req.body);

  const { service, user, pass, from, to, subject, text, html } = req.body;

  const serverConfig = {};

  const foundConfig = knownServices[service];

  console.log(foundConfig);

  if (knownServices[service]) {
    serverConfig.host = foundConfig.host;
    serverConfig.port = foundConfig.port;
  } else {
    res.status(400).send("unknown service");
  }

  let transporter = nodemailer.createTransport({
    ...serverConfig,
    auth: { user, pass },
  });

  let info = await transporter.sendMail({
    from,
    to,
    subject,
    text,
    html,
  });

  console.log("Message sent: %s", info.messageId);

  res.send({ message: "Message sent", data: info.messageId });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
