export default ({ app }) => {
    app.router.afterEach((to, from) => {
        if(from.name) {
            app.router.hasHistory = true

        }
    })
}