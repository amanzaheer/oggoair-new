import sgMail from "@sendgrid/mail";

const sendEmail = async function (
  email: string,
  subject: string,
  html: string
) {
  if (!email || !subject || !html) {
    return "give all credentials";
  }
  try {
    const apiKey = process.env.SEND_GRID_API_KEY as string;
    sgMail.setApiKey(apiKey);
    const msg = {
      to: email,
      from: {
        name: "Oggosistem",
        email: "support@oggosistem.com",
      }, // Use the email address or domain you verified above
      subject: subject,
      html: html,
    };

    await sgMail.send(msg);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default sendEmail;
