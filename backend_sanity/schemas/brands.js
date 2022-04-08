export default {
    name: 'brands',
    title: 'Brands',
    type: 'document',
    fields: [
        {
            name: 'imgUrl',
            title: 'imgURL',
            type: 'image',
            options: {
                headshot: true
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        }
    ]
}