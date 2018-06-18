
# CGI NEWS

## Data

Users:Array<User>
User{
    id
    login
    alias
    email?
}

Comments:Array<Comment>
Comment {
    id,
    postId
    text,
    date,
    user:User
}


Categories:Array<Category>
Category :Enum

Collection:Array<Post>
Post {
    id,
    title,
    text,
    image,
    date,
    user:User
    category
}

## Services 

UserService
    -currentUser
    connectUser
    getAllUsers
    getUserByLogin
    getUserContent
PostService
    getAllPosts
    getPostsByCategory
CommentService
    getAllComments
    getCommentsByPostId
    getCommentsByUserId
    createComment

## Composition

Modules
        AppModule
        ServicesModule
        SharedModule
            * Header
            * Footer
            * Text
            * Button
            * Image
        NavigationModule
            * Navbar
            NavItem
            NavSearch
        ContentModule
            * Content
            * Categorie
            * Post
            PostHeader
            PostContent
            PostFooter(Comments)