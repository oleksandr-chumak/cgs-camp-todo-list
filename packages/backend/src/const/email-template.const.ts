import { MailTemplate } from '../types/mail.type';

export const EMAIL_TEMPLATE_FILENAME: Record<MailTemplate, string> = {
  reset: 'reset-account.hbs',
  confirm: 'confirm-account.hbs'
};
