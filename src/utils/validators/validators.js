export const required = value => {
    if (!value) return `Field is required`;
    return undefined;    
}

// Это Thunk созданный для тго, чтобы передавать разную максимальную длину в зависимости от случая.
export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}

const maxLength30 = value => {
    if (value && value.length > 30) return `Max length is 30 symbols`;
    return undefined;    
}

