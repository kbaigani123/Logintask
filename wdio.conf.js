exports.config = {
    // ====================
    // Appium Configuration
    // ====================
    services: ['appium'],
    appium: {
      args: {
        address: '127.0.0.1',
        port: 4723,
      },
    },
    port: 4723,
  
    // ====================
    // Specify Test Files
    // ====================
    specs: ['./features/*.feature'],
    exclude: [],
  
    // ====================
    // Capabilities
    // ====================
    maxInstances: 1,
    capabilities: [{
      platformName: 'Android',
      'appium:deviceName': 'emulator-5554', // Replace with your device name or emulator
      'appium:platformVersion': '11.0', // Replace with your platform version
      'appium:appPackage': 'com.example.androidapp', // Replace with your app's package name
      'appium:appActivity': '.LoginActivity', // Replace with your app's main activity
      'appium:noReset': true,
    }],
  
    // ====================
    // Test Configurations
    // ====================
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './reports/screenshots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
  
    // ====================
    // Cucumber Configuration
    // ====================
    framework: 'cucumber',
    reporters: [['cucumberjs-json', {
      jsonFolder: './reports/json/',
      language: 'en',
    }]],
    cucumberOpts: {
      requireModule: ['@babel/register'],
      require: ['./step-definitions/*.js'],
      backtrace: true,
      requireTimeout: 120000,
      format: ['pretty'],
      colors: true,
    },
  };