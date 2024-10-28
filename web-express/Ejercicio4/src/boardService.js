const posts = new Map();
let nextId = 0;

addPost({ user: "Pepe", title: "Vendo moto", text: "Barata, barata", imageFilename: 'post0_image.jpeg' });
addPost({ user: "Juan", title: "Compro coche", text: "Pago bien", imageFilename: 'post1_image.jpeg' });

export function addPost(post) {
    let id = nextId++;
    post.id = id.toString();
    posts.set(post.id, post);
}

export function deletePost(id){
    posts.delete(id);
}

export function getPosts(){
    return [...posts.values()];
}

export function getPost(id){
    return posts.get(id);
}