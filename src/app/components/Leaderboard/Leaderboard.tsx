import { useEffect, useState } from 'react'
import { supabaseClient } from '@/app/lib/supabaseClient'
import { getDeviceId } from '@/app/lib/utils'

type UserResult = {
    id: string
    name: string
    cpm: number
    accuracy: number
    created_at: string
}

type LeaderboardProps = {
    countResults: number
    refreshBoard?: number
}

export default function Leaderboard({countResults, refreshBoard}: LeaderboardProps) {
    const [userResults, setUserResults] = useState<UserResult[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const deviceId: string | null = getDeviceId()

    useEffect(() => {
        const getUserResults = async () => {
            setLoading(true)
            setError(null)

            try {
                const { data: leaderboard, error: supabaseError } = await supabaseClient
                    .from('leaderboard')
                    .select('*')
                    .order('cpm', { ascending: false })
                    .order('accuracy', { ascending: false })
                    .range(0, countResults - 1)

                if (!supabaseError) setUserResults(leaderboard)
            } catch (err) {
                setError('Error loading leaderboard: ' + (err as Error).message)
            } finally {
                setLoading(false)
            }
        }

        getUserResults()
    }, [countResults, refreshBoard])

    if (loading) {
        return <div className='text-center mt-5'>Loading...</div>
    }

    if (error) {
        return <div className='text-red-500 text-center mt-5'>{error}</div>
    }

    const isUserInList = (result: UserResult) => result.id === deviceId

    return (
        <div className='max-w-[800px] m-auto'>
            <h2 className='text-xl font-bold my-[10px] text-center'>Top {countResults}</h2>
            <div className='max-h-[450px] overflow-y-auto border-2 border-white dark:border-zinc-800 rounded-lg mb-2'>
                <ul className='space-y-2 p-3'>
                    {userResults.map((result, index) => (
                        <li
                            key={result.id}
                            className={`flex relative justify-between items-center p-3 rounded-lg transition-all duration-200 ${
                                isUserInList(result)
                                    ? 'bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border-l-4 border-yellow-400 shadow-md font-bold transform scale-[1.02]'
                                    : ''
                            }`}
                        >
                            <div className='flex items-center gap-2'>
                                <span className={`font-semibold ${isUserInList(result) ? 'text-yellow-700 dark:text-yellow-300' : ''}`}>
                                    {index + 1}.
                                </span>
                                <span className={`${isUserInList(result) ? 'text-yellow-800 dark:text-yellow-200' : ''}`}>{result.name}</span>
                                {isUserInList(result) && (
                                    <span className='ml-2 px-2 py-1 bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 text-xs font-bold rounded-full shadow-sm'>
                                        You!
                                    </span>
                                )}
                            </div>
                            <div className='text-right'>
                                <p className={`${isUserInList(result) ? 'text-lg font-bold text-yellow-700 dark:text-yellow-300' : ''}`}>
                                    {result.cpm} CPM
                                </p>
                                <p className={`text-sm text-zinc-500 ${isUserInList(result) ? 'text-yellow-600 dark:text-yellow-400' : ''}`}>
                                    {result.accuracy}%
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {userResults.length === 0 && <p className='text-center text-gray-500'>Results not found</p>}
        </div>
    )
}
