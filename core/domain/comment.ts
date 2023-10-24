import { Post } from './post'

export type Comment = {
    id: number,
    name: string,
    email: string,
    body: string
    postId: Post['id']
}