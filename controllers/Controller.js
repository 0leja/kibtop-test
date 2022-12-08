const Controller = {
    async getSlider(req, res, next) {
        const {lang} = req.query

        const index = lang === 'en' ? 0 : (lang === 'ru' ? 1 : 2)
        
        const slides = [
            [
                {id: 1, isDark: true, img: 'http://localhost:5000/hole.png', title: 'Promote your product', desc: 'Increase your ad views', background: 'linear-gradient(104.96deg, #FDDB92 -14.49%, #D1FDFF 110.23%)'},
                {id: 2, isDark: false, img: 'http://localhost:5000/cloud.png', title: 'Promo slider', desc: 'Detailed description of the promotion', background: 'linear-gradient(105.27deg, #CE9FFC 0%, #7367F0 155.64%), #D9D9D9'},
                {id: 3, isDark: true, img: 'http://localhost:5000/hole.png', title: 'Promote your product', desc: 'Increase your ad views', background: 'linear-gradient(286.88deg, #FF9966 -10.73%, #FF5E62 136.16%), #D9D9D9'},
                {id: 4, isDark: false, img: 'http://localhost:5000/cloud.png', title: 'Promo slider', desc: 'Detailed description of the promotion', background: 'linear-gradient(104.96deg, #FBFA00 -14.49%, #98E5D9 110.23%)'},
                
            ],
            [
                {id: 1, isDark: true, img: 'http://localhost:5000/hole.png', title: 'Продвинь свой товар', desc: 'Увеличь просмотры своего объявления', background: 'linear-gradient(104.96deg, #FDDB92 -14.49%, #D1FDFF 110.23%)'},
                {id: 2, isDark: false, img: 'http://localhost:5000/cloud.png', title: 'Баннер акций', desc: 'Подробное описание акции', background: 'linear-gradient(105.27deg, #CE9FFC 0%, #7367F0 155.64%), #D9D9D9'},
                {id: 3, isDark: true, img: 'http://localhost:5000/hole.png', title: 'Продвинь свой товар', desc: 'Увеличь просмотры своего объявления', background: 'linear-gradient(286.88deg, #FF9966 -10.73%, #FF5E62 136.16%), #D9D9D9'},
                {id: 4, isDark: false, img: 'http://localhost:5000/cloud.png', title: 'Баннер акций', desc: 'Подробное описание акции', background: 'linear-gradient(104.96deg, #FBFA00 -14.49%, #98E5D9 110.23%)'},
            ],
            [
                {id: 1, isDark: true, img: 'http://localhost:5000/hole.png', title: 'Ürününüzü tanıtın', desc: 'Reklam görüntülemelerinizi artırın', background: 'linear-gradient(104.96deg, #FDDB92 -14.49%, #D1FDFF 110.23%)'},
                {id: 2, isDark: false, img: 'http://localhost:5000/cloud.png', title: 'Promosyon kaydırıcısı', desc: 'Promosyonun ayrıntılı açıklaması', background: 'linear-gradient(105.27deg, #CE9FFC 0%, #7367F0 155.64%), #D9D9D9'},
                {id: 3, isDark: true, img: 'http://localhost:5000/hole.png', title: 'Ürününüzü tanıtın', desc: 'Reklam görüntülemelerinizi artırın', background: 'linear-gradient(286.88deg, #FF9966 -10.73%, #FF5E62 136.16%), #D9D9D9'},
                {id: 4, isDark: false, img: 'http://localhost:5000/cloud.png', title: 'Promosyon kaydırıcısı', desc: 'Promosyonun ayrıntılı açıklaması', background: 'linear-gradient(104.96deg, #FBFA00 -14.49%, #98E5D9 110.23%)'},
            ]
        ]


        return res.json(slides[index])
    },

    async getRecGoods(req, res, next) {
        const {lang} = req.query

        const index = lang === 'en' ? 0 : (lang === 'ru' ? 1 : 2)
        
        const goods = [
            [
                ...[1, 2, 3, 4, 5, 6, 7, 8].map(id => ({id, img: 'http://localhost:5000/camera.png', name: 'Product name', cost: '1000', adress: 'seller`s address', date: 'announcement date'}))
            ],
            [
                ...[1, 2, 3, 4, 5, 6, 7, 8].map(id => ({id, img: 'http://localhost:5000/camera.png', name: 'Имя продукта', cost: '1000', adress: 'адресс продовца', date: 'дата объявления'}))
            ],
            [
                ...[1, 2, 3, 4, 5, 6, 7, 8].map(id => ({id, img: 'http://localhost:5000/camera.png', name: 'Ürün adı', cost: '1000', adress: 'satıcı adresi', date: 'ilan tarihi'}))
            ]
        ]

        return res.json(goods[index])
    },


    async getNewGoods(req, res, next) {
        const {lang} = req.query

        const index = lang === 'en' ? 0 : (lang === 'ru' ? 1 : 2)
        
        const goods = [
            [
                ...[1, 2, 3, 4, 5, 6, 7, 8].map(id => ({id, img: 'http://localhost:5000/glass.png', name: 'Product name', cost: '1000', adress: 'seller`s address', date: 'announcement date'}))
            ],
            [
                ...[1, 2, 3, 4, 5, 6, 7, 8].map(id => ({id, img: 'http://localhost:5000/glass.png', name: 'Имя продукта', cost: '1000', adress: 'адресс продовца', date: 'дата объявления'}))
            ],
            [
                ...[1, 2, 3, 4, 5, 6, 7, 8].map(id => ({id, img: 'http://localhost:5000/glass.png', name: 'Ürün adı', cost: '1000', adress: 'satıcı adresi', date: 'ilan tarihi'}))
            ]
        ]

        return res.json(goods[index])
    },

    async getCities(req, res, next) {
        const {lang} = req.query
        
        const index = lang === 'en' ? 0 : (lang === 'ru' ? 1 : 2)
        
        const cities = [
            [
                ...[
                    ['Nicosia', 1, 11],
                    ['Kyrenia', 2, 12],
                    ['Famagusta', 3, 13],
                    ['Iskele', 4, 14],
                    ['Guzelyurt', 5, 15],
                    ['Lefke', 6, 16]
                    ].map(city => ({id: city[1], city: city[0], cityId: city[2]}))
            ],
            [
                ...[['Никосия', 0, 11],
                    ['Кирения', 1, 12],
                    ['Фамагуста', 2, 13],
                    ['Искеле', 3, 14],
                    ['Гюзельюрт', 4, 15],
                    ['Лефке', 5, 16
                    ]].map(city => ({id: city[1], city: city[0], cityId: city[2]}))
            ],
            
            [
                ...[
                    ['Lefkoşa', 1, 11],
                    ['Girne', 2, 12],
                    ['Gazimağusa', 3, 13],
                    ['İskele', 4, 14],
                    ['Güzelyurt', 5, 15],
                    ['Lefke', 6, 16]
                    ]
                .map(city => ({id: city[1], city: city[0], cityId: city[2]}))
            ]
        ]


        return res.json(cities[index])

    },

    async getCityById(req, res, next) {
        const {lang} = req.query
        const {cityId} = req.params
        
        const index = lang === 'en' ? 0 : (lang === 'ru' ? 1 : 2)
        
        const cities = [
            [
                ...[
                    ['Nicosia', 1, 11],
                    ['Kyrenia', 2, 12],
                    ['Famagusta', 3, 13],
                    ['Iskele', 4, 14],
                    ['Guzelyurt', 5, 15],
                    ['Lefke', 6, 16]
                    ].map(city => ({id: city[1], city: city[0], cityId: city[2]}))
            ],
            [
                ...[['Никосия', 0, 11],
                    ['Кирения', 1, 12],
                    ['Фамагуста', 2, 13],
                    ['Искеле', 3, 14],
                    ['Гюзельюрт', 4, 15],
                    ['Лефке', 5, 16
                    ]].map(city => ({id: city[1], city: city[0], cityId: city[2]}))
            ],
            
            [
                ...[
                    ['Lefkoşa', 1, 11],
                    ['Girne', 2, 12],
                    ['Gazimağusa', 3, 13],
                    ['İskele', 4, 14],
                    ['Güzelyurt', 5, 15],
                    ['Lefke', 6, 16]
                    ]
                .map(city => ({id: city[1], city: city[0], cityId: city[2]}))
            ]
        ]

        const city = cities[index].filter(city => city.cityId == cityId)[0]


        return res.json(city)

    }
}

module.exports = {Controller}