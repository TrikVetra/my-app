import profileReducer, { addPostActionCreator } from "./profileReducer";

// 1. test data
let state = {   
    postData: [
        { id: 1, message: 'My first post' },
        { id: 2, message: 'Расскажу о муравьях' },
        { id: 3, message: 'И о снеговиках' }
    ],
    newPostText: "Yo!",
}
let action = addPostActionCreator("simple of text")

test('length of postData should be incremented', () => { //Название теста
    
    
    // 2. test action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.postData.length).toBe(4)
});

test('checking message', () => { //Название теста    
    
    // 2. test action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.postData[3].message).toBe("simple of text")
});


