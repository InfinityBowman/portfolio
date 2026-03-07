declare module '*.md' {
  const attributes: {
    title: string
    date: string
    published: string
    summary: string
    issue?: number
    [key: string]: unknown
  }
  const html: string
  export { attributes, html }
}
