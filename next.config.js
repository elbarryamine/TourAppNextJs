module.exports = {
    async rewrites() {
        return [
            {
                source: '/app/root/:any*',
                destination: '/app/root/',
            },
        ]
    },
}
