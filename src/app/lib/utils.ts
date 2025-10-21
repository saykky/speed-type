export const getRandomWords = (words: string[]): string[] => {
    const shuffled = [...words]
    let j, temp
    for (let i = shuffled.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        temp = shuffled[j]
        shuffled[j] = shuffled[i]
        shuffled[i] = temp
    }
    return shuffled
}

export const saveUserData = (id: string, name: string) => {
    localStorage.setItem('deviceId', id)
    localStorage.setItem('userName', name)
}

export const getDeviceId = (): string | null => {
    const deviceId: string | null = localStorage.getItem('deviceId')
    return deviceId
}

export const getCpm = (): string | null => {
    const cpm : string | null = localStorage.getItem('cpm')
    return cpm
}

export const saveCpm = (cpm: string) => {
    localStorage.setItem("cpm", cpm)
}

export const getUserName = (): string | null => {
    const userName: string | null = localStorage.getItem('userName')
    return userName
}

export const isAuthenticated = (): boolean => {
    return !!localStorage.getItem('userName')
}