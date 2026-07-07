import nodemailer, { Transporter } from "nodemailer";
import { Mailer, MailOptions } from "@/features/core/domain/services/mailer";

export class NodemailerAdapter extends Mailer {
  private static instance: NodemailerAdapter | null = null;
  private readonly transporter: Transporter;

  private constructor() {
    super();
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  static getInstance(): NodemailerAdapter {
    if (!NodemailerAdapter.instance) {
      NodemailerAdapter.instance = new NodemailerAdapter();
    }
    return NodemailerAdapter.instance;
  }

  async send(options: MailOptions): Promise<void> {
    await this.transporter.sendMail({
      from: options.from ?? process.env.SMTP_FROM,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
    });
  }
}
