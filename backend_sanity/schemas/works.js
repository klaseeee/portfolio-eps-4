export default {
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'projectLink',
            title: 'Project Link',
            type: 'url'
        },
        {
            name: 'codeLink',
            title: 'Code Link',
            type: 'url'
        }, 
        {
            name: 'imgUrl',
            title: 'imgURL',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [   
                {   
                    name: 'tag',
                    title: 'Tag',
                    type: "string",

                }
            ],
        }
    ]
}