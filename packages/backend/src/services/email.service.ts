import { createTransport, Transporter } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import fs from 'fs/promises';
import * as path from 'path';
import * as Handlebars from 'handlebars';
import { MailContext, MailTemplate } from '../types/mail.type';
import { EMAIL_TEMPLATE_FILENAME } from '../const/email-template.const';

export class EmailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }

  async sendMail<T extends MailTemplate>(
    to: string,
    subject: string,
    templateName: T,
    context: MailContext<T>
  ): Promise<void> {
    const templateFile: string = EMAIL_TEMPLATE_FILENAME[templateName];
    const emailTemplateSource = await fs.readFile(
      path.join(__dirname, '..', 'mail-templates', templateFile),
      { encoding: 'utf8' }
    );

    const template: HandlebarsTemplateDelegate = Handlebars.compile(emailTemplateSource);

    const htmlToSend: string = template(context);

    const extendedMailOptions: Mail.Options = {
      from: 'auth.server.test.my@gmail.com',
      to,
      subject,
      html: htmlToSend
    };

    this.transporter.sendMail(extendedMailOptions);
  }
}
