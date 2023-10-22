import { http } from '@/utils/http'
import type { GoodsResult } from '@/types/goods'

export const getGoods = (id: string) => {
    return http<GoodsResult>({
        method: 'GET',
        url: '/goods',
        data: {
            id
        }
    })
}