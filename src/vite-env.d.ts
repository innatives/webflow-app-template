/// <reference types="vite/client" />

interface Window {
  webflow?: {
    getStyleManager(): Promise<{
      getAllClasses(): Promise<string[]>
    }>
  }
}