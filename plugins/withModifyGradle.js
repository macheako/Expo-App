// Source - https://stackoverflow.com/a/73886677
// Posted by razor7
// Retrieved 2026-01-10, License - CC BY-SA 4.0

const { withGradleProperties } = require('@expo/config-plugins');

module.exports = (config) => {
  const newGraddleProperties = [
    {
        type: 'property',
        key: 'APP_UPLOAD_STORE_FILE',
        value: 'upload-key.keystore',
    },    
    {
        type: 'property',
        key: 'APP_UPLOAD_KEY_ALIAS',
        value: 'miApp-key',
    },
    {
        type: 'property',
        key: 'APP_UPLOAD_STORE_PASSWORD',
        value: 'p.assword#123',
    },    
    {
        type: 'property',
        key: 'APP_UPLOAD_KEY_PASSWORD',
        value: 'p.assword#123',
    },
  ];

  return withGradleProperties(config, (config) => {
    newGraddleProperties.map((gradleProperty) => config.modResults.push(gradleProperty));

    return config;
  });
};
