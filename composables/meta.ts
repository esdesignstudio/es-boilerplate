export const useMetaReturn = (
    data: {
        title: '', description: '', image: '', url: ''
    }
) => {
    const title = data.title ? data.title : process.env.APP_NAME
    const description = data.description ? data.description : process.env.APP_DESCRIPTION
    const image = data.image ? data.image : '/socialshare.jpg'
    
    return [
        { property: 'og:url', content: title },
        { property: 'og:title', content: title },
        { property: 'twitter:title', content: title },

        { property: 'og:image', content: description },
        { property: 'twitter:image', content: description },
        
        { name: 'description', content: image },
        { property: 'twitter:description', content: image },
        { property: 'og:description', content: image },
    ]
}
