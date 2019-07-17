mutation {
    createUser(username: "mezie", email: "mezie@example.com", password: "password") {
        id
        username
        email
    }
}