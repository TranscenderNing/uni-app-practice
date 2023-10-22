import { http } from '@/utils/http'
import type { LoginResult } from '@/types/member'

type LoginParams = {
    code: string
    encryptedData: string
    iv: string
}

export const postLoginWxMin = (data: LoginParams) => {
    return http<LoginResult>({
        method: 'POST',
        url: '/login/wxMin',
        data
    })
}

export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
    return http<LoginResult>({
        method: 'POST',
        url: '/login/wxMin/simple',
        data: {
            phoneNumber
        }
    })
}