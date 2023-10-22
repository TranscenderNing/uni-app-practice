// 封装组合式函数
import type { XtxGuessInstance } from '@/types/component'
import { ref } from 'vue'

export const useGuessList = () => {
    // 获取 猜你喜欢组件实例
    const guessRef = ref<XtxGuessInstance>()

    const onScrolltolower = () => {
        guessRef.value?.getGuessData()
    }
    // 返回 ref 和 事件回调
    return {
        guessRef,
        onScrolltolower
    }
}