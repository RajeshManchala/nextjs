/* eslint-disable @typescript-eslint/require-await */
module.exports = {
    webpack: {},
    async rewrites() {
        return [
            {
                source: '/buy-used-:carMakeModel-cars-:city-:lid(\\d+)/checkout',
                destination: '/buy-used-car',
            },
        ];
    },
};
