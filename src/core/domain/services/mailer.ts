export interface MailOptions {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  from?: string;
}

export abstract class Mailer {
  abstract send(options: MailOptions): Promise<void>;
}
