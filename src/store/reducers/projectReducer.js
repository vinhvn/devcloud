const initState = {
    projects: [],
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
            // console.log('created project', action.project);
            return {
                ...state,
                projects: [...state.projects, action.project],
            };
        case 'ADD_PROJECT_ERROR':
            // console.log('created project error', action.err);
            return state;
        default:
            return state;
    }
};

export default projectReducer;
