const framesCache = new Map()

export default function toggleMaximize() {
  const window = Window.focused()

  if (window.isMaximized()) {
    const frame = framesCache.get(window.hash()) || window.screen().flippedVisibleFrame()
    window.setFrame(frame)
  }
  else {
    framesCache.set(window.hash(), window.frame())
    window.maximize()
    window.snapToGrid()
  }
}
