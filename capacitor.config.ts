import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'movie-rater',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
