import {
  watch
} from 'vue'
import store from '@/store'

export const watchLang = (...cbs) => {
  watch(
    // 监听对象
    () => store.getters.lang,
    // 循环
    () => {
      cbs.forEach(cb => cb(store.getters.lang))
    }, {
      deep: true
    })
}
