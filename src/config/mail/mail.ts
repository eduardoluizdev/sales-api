interface IMailConfig {
  driver: 'ethereal' | 'smtp';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      email: process.env.MAIL_ACCOUNT,
      name: process.env.MAIL_NAME,
    },
  },
} as IMailConfig;
