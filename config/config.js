const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        IS_DEV_ENV: true,
        USE_CUSTOM_API_ENDPOINT: true,
        API_ENDPOINT: 'http://localhost:3000',
        ENVIRONMENT: 'development',
    },
    staging: {
        IS_DEV_ENV: false,
        USE_CUSTOM_API_ENDPOINT: false,
        ENVIRONMENT: 'staging',
    },
    production: {
        IS_DEV_ENV: false,
        USE_CUSTOM_API_ENDPOINT: false,
        ENVIRONMENT: 'production',
    },
};

module.exports = config[env];
