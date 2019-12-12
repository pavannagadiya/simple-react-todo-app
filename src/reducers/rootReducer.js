const initState = {
    posts: [
        { id: '1', title: 'First', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sint nihil officiis, doloremque obcaecati veritatis delectus ut pariatur reiciendis provident eius distinctio, dolor odit qui, quas accusamus quasi minus debitis?' },

        { id: '2', title: 'Second', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sint nihil officiis, doloremque obcaecati veritatis delectus ut pariatur reiciendis provident eius distinctio, dolor odit qui, quas accusamus quasi minus debitis?' },

        { id: '3', title: 'Third', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sint nihil officiis, doloremque obcaecati veritatis delectus ut pariatur reiciendis provident eius distinctio, dolor odit qui, quas accusamus quasi minus debitis?' }
    ]
};

const rootReducer = (state = initState, action) => {
    console.log(action);
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state
}

export default rootReducer;