import api from '../api'
import useSWR from "swr";

export const useGetData = () => {
    const {data, error, isValidating} = useSWR( 'zip-code', async () =>  {
        const respone = await api.zipApi.getData()
        return respone
      },
      {revalidateOnFocus : false}
    )
    return {data, error, isValidating}
}