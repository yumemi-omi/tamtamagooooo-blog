export type MicroCMSGetQuery = Partial<{
  draftKey: string
  limit: number
  offset: number
  orders: string
  q: string
  fields: string
  ids: string
  filters: string
  depth: 1 | 2 | 3
}>

export type MicroCMSGetSingularQuery = Partial<{
  draftKey: string
  fields: string
  depth: 1 | 2 | 3
}>
