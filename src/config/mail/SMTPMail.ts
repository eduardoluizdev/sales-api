import nodemailer from 'nodemailer';
import mailConfig from '@config/mail/mail';
import handlebasMailTemplate from './HandlebarsMailTemplate';

interface IMailContact {
  name: string;
  email: string;
}

interface ITemplateVariable {
  [key: string]: string | number;
}

interface IParseMailTemplate {
  file: string;
  variables: ITemplateVariable;
}
interface ISendMail {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  templateData: IParseMailTemplate;
}

export default class SMTPMail {
  static async sendMail({
    to,
    from,
    subject,
    templateData,
  }: ISendMail): Promise<void> {
    const mailTemplate = new handlebasMailTemplate();

    const transporter = nodemailer.createTransport({
      pool: true,
      host: process.env.MAIL_SERVER,
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_ACCOUNT,
        pass: process.env.MAIL_PASS,
      },
    });

    const { name, email } = mailConfig.defaults.from;

    await transporter.sendMail({
      from: {
        name: from?.name || name,
        address: from?.email || email,
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: await mailTemplate.parser(templateData),
    });
  }
}
