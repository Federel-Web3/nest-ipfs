export default () => ({
  PORT: parseInt(process.env.PORT, 10) || 3000, //change these ports later
  WEB3_STORAGE_TOKEN: process.env.WEB3_STORAGE_TOKEN,
});

export interface IENVs {
  PORT: string;
  WEB3_STORAGE_TOKEN: string;
}
