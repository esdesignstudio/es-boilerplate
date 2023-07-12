
export const useScrolled = () => useState<boolean>('isScrolled', () => false)
export const usePageLoaded = () => useState<boolean>('isPageloaded', () => false)

// export const useGlobal = () => useState<Object>('globalOption', () => {
//     const { data } = useAsyncData(
//         'get_globa_api',
//         () => $fetch( useRuntimeConfig().apiBase + '/get_global'), {
//             transform: (res) => {
//                 return res['data'] // res['data'] typescript
//             }
//         }
//     )
//     return data 
// })

