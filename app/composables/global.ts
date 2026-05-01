import { useWindowSize } from '@vueuse/core'

// 全域 UI 狀態
export const usePageLoaded = () => useState<boolean>('isPageloaded', () => false)
export const useScrolled = () => useState<boolean>('isScrolled', () => false)
export const useSearchOpen = () => useState<boolean>('isSearchOpen', () => false)
export const useHeaderExpand = () => useState<boolean>('isHeaderExpand', () => false)
export const useHeaderWhite = () => useState<boolean>('isHeaderWhite', () => false)
export const useMenuOpen = () => useState<boolean>('isMenuOpen', () => false)

// 僅提供可序列化的初始值，避免 SSR 時 devalue 非 POJO 錯誤
export const useGlobal = () => useState<Record<string, any>>('globalOption', () => ({}))

/**
 * RWD 判斷（SSR 友善）
 * - 內部使用 VueUse 的 useWindowSize：SSR 時回傳 0，client 端 hydration 後自動更新
 * - 直接回傳 ref 與 computed，模板中可自動解包，不需要 .value 串多層
 *
 * 用法：
 *   const { width, height, isMobile, isTablet, isDesktop } = useViewport()
 *   if (isMobile.value) { ... }            // <script>
 *   <div v-if="isDesktop">...</div>        // <template>（自動解包）
 */
const BREAKPOINT_MOBILE = 768   // < 768 視為手機
const BREAKPOINT_DESKTOP = 1025 // >= 1025 視為桌機

export const useViewport = () => {
  // SSR 安全：server 端回傳 0；client 端會自動監聽 resize
  const { width, height } = useWindowSize({ initialWidth: 0, initialHeight: 0 })

  const isMobile = computed(() => width.value > 0 && width.value < BREAKPOINT_MOBILE)
  const isDesktop = computed(() => width.value >= BREAKPOINT_DESKTOP)
  const isTablet = computed(() => width.value >= BREAKPOINT_MOBILE && width.value < BREAKPOINT_DESKTOP)

  return { width, height, isMobile, isTablet, isDesktop }
}

// 過濾連結：把指向當前網域的絕對網址轉成相對路徑
export const filterLink = (link: string) => {
  if (link.includes('http')) {
    const url = new URL(link)

    // 檢查是否為當前網域
    if (import.meta.client && url.host === window.location.host) {
      // 保留路徑和錨點
      return url.pathname + url.hash
    }
    return link
  }
  return link
}
