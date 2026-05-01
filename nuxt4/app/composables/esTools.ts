/**
 * 分享到社群媒體
 * - 行動裝置：使用 navigator.share（系統原生分享）
 * - 桌面：開新視窗到對應社群網站
 */
export const esShareTo = (data: {
  url: string
  socialMedia: 'Facebook' | 'Line' | 'Twitter' | 'Instagram'
}) => {
  const { isMobile } = useViewport()

  if (isMobile.value) {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: document.title,
        url: data.url,
      })
    }
    return
  }

  let shareUrl = ''
  switch (data.socialMedia) {
    case 'Facebook':
      shareUrl = 'https://facebook.com/sharer.php?u=' + data.url
      break
    case 'Line':
      shareUrl = 'https://social-plugins.line.me/lineit/share?url=' + data.url + '&amp;via=esdesign'
      break
    case 'Twitter':
      shareUrl = 'https://twitter.com/intent/tweet?url=' + data.url + '&amp;via=esdesign'
      break
    case 'Instagram':
      // 只能分享到 IG Story，且僅限手機瀏覽器
      shareUrl = 'https://www.instagram.com/stories/share/?url=' + data.url
      break
  }

  window.open(
    shareUrl,
    'shareWindow',
    'menubar=0,location=0,toolbar=0,status=0,scrollbars=1,width=800,height=600',
  )
}
