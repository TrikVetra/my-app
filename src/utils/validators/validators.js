export const required = value => {
    if (!value) return `Поле не заполнено`;
    return undefined;    
}

// Это Thunk созданный для тго, чтобы передавать разную максимальную длину в зависимости от случая.
export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Максимальная длина ${maxLength} символов`;
    return undefined;
}

// Так выглядела бы функция с фиксированной максимальной длиной, но вместо неё мы используем санку, где длина будет подставляться.
const maxLength30 = value => {
    if (value && value.length > 30) return `Max length is 30 symbols`;
    return undefined;    
}

