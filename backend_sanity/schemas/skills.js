export default {
    title: 'Skills',
    name: 'skills',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string'
        },
        {
            title: 'BgColor',
            name: 'bgColor',
            type: 'string'
        },
        {
            title: 'Icon',
            name: 'icon',
            type: 'image',
            options: {
                hotspot: true,
            }
        }
    ]

}