export const SaveToLocalStorage = (key: string, value: Object | number | string | number[] | string []) => {
    const stringifiedValue = JSON.stringify(value)
    window.localStorage.setItem(key, stringifiedValue);
}

export const GetFromLocalStorage = <T>(key: string) => {
    const stringifiedValue = window.localStorage.getItem(key);
    if (stringifiedValue === null) {
        return undefined
    }
    return JSON.parse(stringifiedValue) as T
}

export const RemoveFromLocalStorage = (key: string) => {
    window.localStorage.removeItem(key);
}