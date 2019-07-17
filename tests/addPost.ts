mutation {
    addPost(title: "Hello Adonis", content: "Adonis is awesome!") {
        id
        title
        slug
        content
        user {
            username
            email
        }
    }
}