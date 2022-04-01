module.exports = {
    content: ['./src/**/*.{html,js,vue}'], // Make sure 'vue' is added here since this is a Vue project
    theme: {
        screens: {
            tablet: '768px',
            desktop: '1024px',
        },
        colors: {
            avocado: '#65B21C',
            'avocado-hover': '#E8F4FF',
            carrot: '#FE7E22',
            'carrot-hover': '#E8F4FF',
            midnight: '#333333',
            metal: '#666666',
            wolf: '#888888',
            stone: '#9AA4A7',
            slate: '#cccccc',
            koala: '#E6EAED',
            cloud: '#DBE7EA',
            breeze: '#F6F8FB',
            royal: '#2D9FFF',
            ocean: '#1F5989',
            strawberry: '#F72626',
            grape: '#F4FFEA',
            wheat: '#FFF5EB',
            morning: '#E8F4FF',
        },
        fontSize: {
            xs: ['14px', { lineHeight: '24px', letterSpacing: '-0.03em' }],
        },
    },
    plugins: [],
};
