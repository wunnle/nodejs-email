const knownServices = {
  gmail: {
    name: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
  },
  "outlook.com": {
    name: "Outlook.com",
    host: "smtp.live.com",
    port: 587,
  },
  office365: {
    name: "Office365",
    host: "smtp.office365.com",
    port: 587,
  },
  hotmail: {
    name: "Hotmail",
    host: "smtp.live.com",
    port: 465,
  },
  yahoo: {
    name: "Yahoo",
    host: "plus.smtp.mail.yahoo.com",
    port: 465,
  },
};

module.exports = knownServices;
