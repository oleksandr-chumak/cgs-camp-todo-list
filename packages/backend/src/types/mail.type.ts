export type MailTemplate = 'reset' | 'confirm';

export type MailContext<T extends MailTemplate> = T extends 'reset'
  ? { url: string }
  : T extends 'confirm'
  ? { url: string }
  : never;
