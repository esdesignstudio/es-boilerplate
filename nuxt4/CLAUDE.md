# CLAUDE.md

此專案是一個 **空白 Nuxt 4 starter theme**，後續會以此為基礎開發各類網站。請依照以下規則協助開發。

---

## 專案資訊

- **框架**：Nuxt 4.4+（Vue 3.5+ / Vite / Nitro）
- **套件管理器**：pnpm
- **品牌前綴**：`ss`（icon collection、rootId 都使用此前綴）
- **語言**：TypeScript（前端 .vue 檔可用 JS，server 端統一 TS）
- **樣式**：SCSS（`sass-embedded`）

---

## 目錄結構（Nuxt 4）

```
nuxt4/
├── app/                   ← 前端程式碼（Nuxt 4 新結構）
│   ├── app.vue
│   ├── error.vue
│   ├── pages/
│   ├── components/
│   ├── composables/
│   ├── plugins/
│   └── assets/
│       ├── scss/
│       ├── fonts/
│       └── icons/         ← @nuxt/icon 自訂 SVG（前綴 ss）
├── server/                ← Nitro 後端
│   └── api/
├── shared/                ← 前後端共用工具（自動匯入兩邊）
│   └── utils/
├── public/                ← 靜態檔
└── nuxt.config.ts
```

### 重要差異（與 Nuxt 3）
| 項目 | Nuxt 3 | Nuxt 4 |
|---|---|---|
| 前端程式 | 根目錄 | **`app/` 下** |
| `server/` | 根目錄 | **仍在根目錄** |
| 共用工具 | 自己處理 | **`shared/utils/` 自動匯入兩邊** |
| `process.client/server` | 可用 | **改用 `import.meta.client/server`** |

---

## 已安裝模組與套件

### Nuxt 模組
- `@nuxt/icon` — icon 系統
- `@nuxt/image` — 圖片優化
- `@nuxtjs/sitemap` — sitemap 產生
- `@vueuse/nuxt` — VueUse 自動匯入

### Runtime 套件
- `gsap` — 動畫
- `swiper@11` — 輪播
- `locomotive-scroll@5` — 平滑捲動（已透過 `app/plugins/locomotive.client.ts` 設定）
- `dayjs` — 日期處理
- `@gtm-support/vue-gtm` — GTM 整合

---

## SCSS 命名規範（BEM）

### 規則
**B**lock + **E**lement + **M**odifier

```
block_name              ← 區塊（kebab-case）
block_name__element     ← 子元素（雙底線）
block_name__element-modifier  ← 修飾狀態（單連字號）
```

### 動態 class 命名
為了與動態狀態切換對應，**動態 class 一律使用 `-` 前綴**（不是 BEM modifier 的 `--` 雙連字號）：

| 用途 | 寫法 |
|---|---|
| 啟用狀態 | `-active` |
| 開啟狀態 | `-open` |
| 隱藏 | `-hidden` |
| 載入中 | `-loading` |
| 禁用 | `-disabled` |

### 標準範例

```scss
// ✅ 正確
.header-menu {
    width: 100%;
    max-width: 980px;
    margin: 0 auto;

    &__item {
        height: 30px;
        line-height: 30px;

        &-active {
            font-weight: bold;
        }
    }
}
```

對應 Vue 樣板：
```vue
<nav class="header-menu">
    <a class="header-menu__item" :class="{ '-active': isActive }">...</a>
</nav>
```

→ 編譯後：`.header-menu__item.-active { font-weight: bold }`

> ⚠️ **不要寫成 `__item--active`**，本專案統一用 `-active` 表示狀態，避免 BEM 雙連字號的視覺繁瑣。

### 元件 SCSS 範例骨架
每個 `.vue` 元件的 `<style lang="scss">` 開頭固定：

```scss
$class-name: header-menu;
.#{$class-name} {
    // ...
}
```

便於複製、改名、保持一致性。

---

## SCSS 工具

### 全域可用 mixin（已透過 `nuxt.config.ts` 自動 `@use`）
- `media-breakpoint-up($name)` / `media-breakpoint-down($name)` / `media-breakpoint-only($name)` / `media-breakpoint-between($a, $b)`
- 斷點名稱：`mobile` / `tablet` / `medium` / `desktop` / `large`（定義在 `assets/scss/config.scss`）
- `@include typo('display_40')` 等字級
- `@include size(w, h)`、版面相關工具

### 用法
```scss
.foo {
    font-size: 1.6rem;

    @include media-breakpoint-down(tablet) {
        font-size: 1.4rem;
    }
}
```

---

## Composables / Utils

### 自動匯入位置
| 路徑 | 匯入範圍 |
|---|---|
| `app/composables/` | 只在 client / SFC |
| `server/utils/` | 只在 server |
| `shared/utils/` | **兩邊都自動匯入** |

### 已提供
- `useViewport()` — RWD 判斷（SSR 友善，回傳 `{ width, height, isMobile, isTablet, isDesktop }`，全部是 reactive ref）
- `useGlobal()` / `usePageLoaded()` / `useMenuOpen()` 等全域狀態
- `filterLink(url)` — 把同網域絕對網址轉成相對路徑
- `useLogs()`（在 `shared/utils/`）— 統一格式的 server / client 日誌
- `ESinit()` — 頁面初始化 + locomotive scroll + 路由 transition
- `esShareTo()` — 社群分享

### 重要：RWD 判斷一律用 `useViewport()`
```ts
const { isMobile, isDesktop } = useViewport()
// template 自動解包：<div v-if="isDesktop">
// script 用 .value：if (isMobile.value) { ... }
```
**不要**自己寫 `window.innerWidth`，會在 SSR 階段壞掉。

---

## Icon 使用方式

本專案用 `@nuxt/icon` + 自訂 collection（前綴 `ss`），SVG 放在 `app/assets/icons/`。

```vue
<!-- 使用本地 SVG -->
<Icon name="ss:arrow-forward" />
<Icon name="ss:close" />

<!-- 使用 iconify 的線上 icon -->
<Icon name="mdi:home" />
```

⚠️ 自訂 SVG 檔名請用 **kebab-case**（`arrow-forward.svg`），避免被 `@nuxt/icon` 自動 normalize 而出現警告。

---

## Server API

### 快取清除 endpoint（已內建）
```bash
POST /api/cache/clear/                  # 清首頁
POST /api/cache/clear/{path}            # 清指定路徑
POST /api/cache/clear/{path}/*          # 清子頁萬用字元
POST /api/cache/clear-all               # 全清
```

### 設定頁面快取
在 `nuxt.config.ts` 的 `routeRules`：
```ts
routeRules: {
    '/': { swr: 3600 },
    '/works': { swr: 3600 },
    '/works/**': { swr: 3600 },
}
```

---

## 環境變數

`.env` 檔位於 nuxt4 根目錄，nuxt.config.ts 會額外讀取**上層 `../.env`**（多專案共用情境）。

常用變數：
- `ENV` — `dev` / `uat` / `prod`
- `NUXT_SITE_URL` — 站點 URL
- `I18N_ENABLED` — 是否啟用 i18n（預設 false）

---

## 開發指令

```bash
pnpm dev          # 啟動開發伺服器
pnpm build        # 正式建置
pnpm preview      # 預覽 build 結果
pnpm nuxt prepare # 重新產生 .nuxt types
```

---

## 開發注意事項

1. **新增頁面**：放在 `app/pages/`，不是根目錄的 `pages/`
2. **新增元件**：放在 `app/components/`，會自動匯入（命名依資料夾路徑：`components/header/index.vue` → `<Header />`）
3. **server 端要用 composable**：放在 `shared/utils/`（不要放在 `app/composables/`，server 不會自動匯入）
4. **避免 `process.client/server`**：改用 `import.meta.client/server`
5. **SCSS 的 `if()` function 已棄用**：用 `@if/@else` 區塊
6. **新增動態 class**：用 `-active` / `-open` / `-disabled` 等，不是 BEM 的 `--modifier`
