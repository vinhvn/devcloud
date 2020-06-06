export const login = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        const { email, password } = credentials;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                dispatch({ type: 'LOGIN_SUCCESS' });
            })
            .catch((err) => {
                dispatch({ type: 'LOGIN_ERROR', err });
            });
    };
};

export const logout = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase
            .auth()
            .signOut()
            .then(() => {
                firebase.logout();
                dispatch({ type: 'LOGOUT_SUCCESS' });
            });
    };
};

export const register = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase
            .auth()
            .createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then((resp) => {
                return firestore
                    .collection('users')
                    .doc(resp.user.uid)
                    .set({
                        firstName: newUser.firstName,
                        lastName: newUser.lastName,
                        initials: newUser.firstName[0] + newUser.lastName[0],
                    });
            })
            .then(() => {
                dispatch({ type: 'REGISTER_SUCCESS' });
            })
            .catch((err) => {
                dispatch({ type: 'REGISTER_ERROR', err });
            });
    };
};
