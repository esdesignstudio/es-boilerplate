/**
 * 清除指定路徑的頁面快取（SWR / route cache）
 *
 * 用法：
 *   POST /api/cache/clear/                   → 清首頁
 *   POST /api/cache/clear/works              → 清 /works 列表頁
 *   POST /api/cache/clear/works/gogoro-jego  → 清單一動態頁
 *   POST /api/cache/clear/works/*            → 清 /works 底下所有子頁（萬用字元）
 */
export default defineEventHandler(async (event) => {
  const { logInfo, logError } = useLogs()

  try {
    const rawPath = (getRouterParam(event, 'path') ?? '').trim()
    const isWildcard = rawPath.endsWith('*')

    // 去除尾端 * 與 /
    const cleanPath = rawPath.replace(/\*$/, '').replace(/\/$/, '')

    // /works/foo → :works:foo；空字串 → :index（首頁）
    const keyPath = cleanPath ? ':' + cleanPath.replace(/\//g, ':') : ':index'

    const storage = useStorage('cache')
    const allKeys = await storage.getKeys('nitro:routes')
    const cleared: string[] = []

    for (const k of allKeys) {
      // key 範例：nitro:routes:_:works:gogoro-jego.{hash}
      const tail = k.replace('nitro:routes:_', '')

      const matched = isWildcard
        ? tail.startsWith(keyPath) // 萬用字元：前綴匹配
        : tail === keyPath || tail.startsWith(`${keyPath}.`) // 精確或帶 hash

      if (matched) {
        await storage.removeItem(k)
        cleared.push(k)
      }
    }

    cleared.forEach((k) => {
      const display = k.replace('nitro:routes:_:', '')
      logInfo(`[Cache Clear] /${rawPath} → ${display}`)
    })

    return {
      success: true,
      path: '/' + rawPath,
      cleared: cleared.length,
      keys: cleared,
    }
  } catch (error: any) {
    logError('cache-clear', {}, 0, error.statusCode || 500, 'POST', error.message)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || '清除快取時發生錯誤',
    })
  }
})
