/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface Comment {
  id: number,
  postId: number,
  text: string,
  date: Date,
  userId: number
}

interface Post {
  id: number,
  title: string,
  image: string,
  date: Date,
  userId: number,
  categoryId: number,
  comments: Array<Comment>
}

interface Category {
  id: number,
  name: string
}