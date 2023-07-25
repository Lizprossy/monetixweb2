

const api = new GhostContentAPI({
    url: 'https://monetix-lending.ghost.io',
    key: 'b3d5ff751d4105ec368c24eedd',
    version: 'v2'
  });

  api.posts
    .browse({limit: 20, include: 'tags'})
    .then((posts) => {
        //code that inserts the blog posts to the page 
    })
    .catch((err) => {
        console.error(err);
    });

    api.posts
    .browse({limit: 20, include: 'tags'})
    .then((posts) => {
       var temp = document.getElementsByTagName("template")[0]; // reference of template tag in DOM;
       posts.forEach((post) => {
            var card = temp.content.cloneNode(true); // copy of template's content  
            var image = card.querySelector(".card-img-top");
            var title = card.querySelector(".card-title");
            var subtitle = card.querySelector(".card-text");
            var button = card.querySelector(".btn-primary")
            button.href=post.url;
            image.alt=post.title;
            image.src = post.feature_image;
            subtitle.textContent = post.custom_excerpt;
            title.textContent = post.title;
            var cardContainer = document.getElementById("blog-posts"); // place on the page where we want to append our template
            cardContainer.appendChild (card); // append the template's copy to the page 
       });

})