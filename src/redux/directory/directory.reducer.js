const INITIAL_STATE = {
    sections: [
        {
            title: 'HATS',
            imageUrl: 'https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'JACKETS',
            imageUrl: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'SNEAKERS',
            imageUrl: 'https://images.unsplash.com/photo-1496202703211-aa28e9500c30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'MENS',
            imageUrl: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
            id: 4,
            size: 'large',
            linkUrl: 'shop/mens'
        },
        {
            title: 'WOMENS',
            imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
            id: 5,
            size: 'large',
            linkUrl: 'shop/womens'
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default directoryReducer