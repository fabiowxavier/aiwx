export default {
    root: '.', // Tells Vite your index.html is in this root directory
    build: {
        outDir: 'dist', // Output folder for production
        publicDir: 'src', // Adjust this to where your static files should be served from
    },
    server: {
        port: 3000 // Dev server port (optional)
    }
}