import { MicroCMSGetSingularQuery } from '@/types/microCMS/Query'
import { Post } from '@/types/microCMS/api/Post'

export type Methods = {
  get: {
    resBody: {
      post: Post
      highlightedBody: string
    }
    query?: MicroCMSGetSingularQuery & { id?: string }
  }
}
