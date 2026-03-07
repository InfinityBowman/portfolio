export interface MarkdownModule {
  attributes: {
    title: string
    date: string
    published: string
    summary: string
    issue?: number
  }
  html: string
}
