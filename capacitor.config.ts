import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.shadow.app',
  appName: 'Shadow',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    iosScheme: 'https',
    hostname: 'localhost'
  },
  plugins: {
    SpeechRecognition: {
      androidPermissions: true
    }
  }
};

export default config;
