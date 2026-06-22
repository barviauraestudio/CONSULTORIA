import { useEffect } from 'react'

export function useBlurSiblings(parentSelector: string, childSelector: string) {
  useEffect(() => {
    const parents = document.querySelectorAll(parentSelector)

    const handleTouchStart = (e: TouchEvent) => {
      const child = (e.currentTarget as HTMLElement)
      const parent = child.closest(parentSelector)
      if (!parent) return

      // Add touch-active to parent
      parent.classList.add('touch-active')

      // Set touch-focus only on the touched child
      const children = parent.querySelectorAll(childSelector)
      children.forEach((c) => {
        if (c === child) {
          c.classList.add('touch-focus')
        } else {
          c.classList.remove('touch-focus')
        }
      })
    }

    parents.forEach((parent) => {
      const children = parent.querySelectorAll(childSelector)
      children.forEach((child) => {
        child.addEventListener('touchstart', handleTouchStart as EventListener, { passive: true })
      })
    })

    const handleGlobalTouchStart = (e: TouchEvent) => {
      const target = e.target as HTMLElement
      parents.forEach((parent) => {
        // If we didn't touch inside the parent or any child, reset
        if (!parent.contains(target)) {
          parent.classList.remove('touch-active')
          const children = parent.querySelectorAll(childSelector)
          children.forEach((c) => c.classList.remove('touch-focus'))
        }
      })
    }

    document.addEventListener('touchstart', handleGlobalTouchStart, { passive: true })

    return () => {
      parents.forEach((parent) => {
        const children = parent.querySelectorAll(childSelector)
        children.forEach((child) => {
          child.removeEventListener('touchstart', handleTouchStart as EventListener)
        })
      })
      document.removeEventListener('touchstart', handleGlobalTouchStart)
    }
  }, [parentSelector, childSelector])
}
