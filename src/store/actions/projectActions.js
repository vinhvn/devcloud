export const createProject = (project) => {
    return (dispatch, getState, { getFirestore }) => {
        // Make an async call to database
        const firestore = getFirestore();
        const { firstName, lastName } = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore
            .collection('projects')
            .add({
                ...project,
                authorFirstName: firstName,
                authorLastName: lastName,
                authorId,
                createdAt: new Date(),
            })
            .then(() => {
                // Then continue on to reducer
                dispatch({ type: 'ADD_PROJECT', project });
            })
            .catch((err) => {
                dispatch({ type: 'ADD_PROJECT_ERROR', err });
            });
    };
};
