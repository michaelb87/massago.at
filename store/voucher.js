export const state = () => ({
    vouchers: {
        1: {
            name: 'Klassisch',
            front: require('../assets/gutscheine/classic_front.jpg'),
            back: require('../assets/gutscheine/classic_back.jpg'),
            description: 'Ein klassischer Gutschein, passend für jeden Anlass. Hinterlassen Sie dem Beschenkten doch einfach eine persönliche Nachricht!',
        }
    },
    from: null,
})

export const mutations = {
}