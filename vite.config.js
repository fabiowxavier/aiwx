export default {
    root: '.', // Ensure index.html is at the root
    build: {
        outDir: 'dist', // Output folder for production
        rollupOptions: {
            input: {
                main: 'index.html',
                about: 'about.html',
                contact: 'contact.html',
                vets: 'vets.html',
                startups: 'startups.html'
            }
        }
    },
    server: {
        port: 3000,
    }
};
