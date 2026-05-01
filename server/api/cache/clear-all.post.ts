/**
 * 清除所有頁面快取（SWR / route cache）
 *
 * 用法：
 *   POST /api/cache/clear-all
 */
export default defineEventHandler(async () => {
  const { logInfo, logError } = useLogs()

  try {
    const storage = useStorage('cache')
    const keys = await storage.getKeys('nitro:routes')

    for (const k of keys) {
      await storage.removeItem(k)
    }

    logInfo(`[Cache Clear All] cleared ${keys.length} keys`)

    return {
      success: true,
      cleared: keys.length,
      keys,
    }
  } catch (error: any) {
    logError('cache-clear-all', {}, 0, error.statusCode || 500, 'POST', error.message)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || '清除全部快取時發生錯誤',
    })
  }
})
