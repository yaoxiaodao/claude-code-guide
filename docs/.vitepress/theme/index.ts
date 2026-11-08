import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { useData } from 'vitepress'
import './style.css'

/**
 * 页面底部的"最后核对"提示。
 * 由每章 frontmatter 的 lastVerified / officialDoc 驱动，
 * 缺字段时自动不渲染，不需要在正文里手写。
 */
const VerifiedNote = {
  name: 'VerifiedNote',
  setup() {
    const { frontmatter } = useData()

    return () => {
      const verified = frontmatter.value.lastVerified
      if (!verified) return null

      const doc = frontmatter.value.officialDoc
      return h('div', { class: 'verified-note' }, [
        h('span', { class: 'verified-note__text' }, `本文最后按官方文档核对：${verified}`),
        doc
          ? h(
              'a',
              {
                class: 'verified-note__link',
                href: doc,
                target: '_blank',
                rel: 'noreferrer'
              },
              '查看官方原文 ↗'
            )
          : null
      ])
    }
  }
}

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(VerifiedNote)
    })
  }
}
