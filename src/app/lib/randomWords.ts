export default function getRandomWords(words: string[]): string[] {
    const shuffled = [...words]
    let j, temp;
    for (let i = shuffled.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        temp = shuffled[j]
        shuffled[j] = shuffled[i]
        shuffled[i] = temp
    }
    return shuffled
}