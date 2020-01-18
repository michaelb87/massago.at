export const defaultState = () => {
    return {
        vouchers: {
            1: {
                name: 'Klassisch',
                front: '../images/gutscheine/classic_front.jpg',
                back: '../images/gutscheine/classic_back.jpg',
                description: 'Ein klassischer Gutschein, passend für jeden Anlass. Hinterlassen Sie dem Beschenkten doch einfach eine persönliche Nachricht!',
            }
        },
        tarifs: {
            1: {
                minutes: 50,
                price: 60
            },
            2: {
                minutes: 80,
                price: 90
            }
        },
        from: null,
        selectedVouchers: [
            {
                id: Math.random(),
                voucherId: 1,
                data: {
                    from: 'Michael',
                    to: 'Andrea',
                    tarif_id: 1,
                    message: 'This is a test message. Wishing you the best my dear! ',
                }
            }
        ]
    }
}