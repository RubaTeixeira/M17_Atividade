exports.config = {
  runner: "local",

  specs: ["./test/specs/**/*.js"],

  maxInstances: 1,

  capabilities: [
    {
      //platformName: "Android",
      //platformVersion: "9.0",
      //deviceName: "EbacTest",
      //automationName: "UiAutomator2",
      //app: "C:/Users/rubat/Documents/Proj2022/Qualidade de Software/Módulos/Módulo 17/M17_Atividade/app/android/wcandroid-13.1.apk",
      //appPackage: "com.woocommerce.android",
      //appActivity: ".ui.main.MainActivity",
      //appWaitActivity: "com.woocommerce.android.ui.login.LoginActivity",

      app: "bs://a0ae066093f5ec92da26669510dffda465edf900",

      device: "Samsung Galaxy Note 20",
      os_version: "10.0",

      project: "First project with Device Farm",
      build: "1",
      name: "Add_product_test",
    },
  ],

  logLevel: "info",
  bail: 0,

  //baseUrl: "http://localhost",
  //port: 4723,
  //path: "/wd/hub",
  //services: ["appium"],
  user: "robervalteixeira_jlp7zQ",
  key: "LenJrcf7R6VxxqpJQwRu",
  services: ["browserstack"],

  waitforTimeout: 15000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },

  //Relatório de teste
  reporters: ["spec"],
};
