import { useEffect, useState } from 'react'
import axios from 'axios'

const useAxios = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const res = await axios.get(url)
                setData(res.data)

                setLoading(false)
                
            } catch(error) {
                setError(error)
                setLoading(false)
            }
        }

        fetchData()
    }, [url])

    return { data, error, loading }
}

export default useAxios