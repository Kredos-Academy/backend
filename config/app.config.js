export default {
    name: process.env.APP_NAME,
    port: process.env.APP_PORT ?? 4000,
    debug: process.env.APP_DEBUG ?? false,
}