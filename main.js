const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    },
    {       
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=535",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=30"
        },
        "likes": 95,
        "created": "2021-03-05"
    }, 
    {
        "id": 7,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=536",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=31"
        },
        "likes": 95,
        "created": "2021-03-05"
    }, 
    {
        "id": 8,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=537",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=32"
        },
        "likes": 95,
        "created": "2021-03-05"
    }, 
    {
        "id": 9,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=538",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=33"
        },
        "likes": 95,
        "created": "2021-03-05"
    }, 
    {
        "id": 10,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=539",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=34"
        },
        "likes": 95,
        "created": "2021-03-05"
    }, 
    {
        "id": 11,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=522",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=35"
        },
        "likes": 95,
        "created": "2021-03-05"
    }, 
    {
        "id": 12,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=541",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=36"
        },
        "likes": 95,
        "created": "2021-03-05"
    },  
    {
        "id": 13,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=542",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=37"
        },
        "likes": 95,
        "created": "2021-03-05"
    },  
    {
        "id": 14,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=543",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=38"
        },
        "likes": 95,
        "created": "2021-03-05"
    },  
    {
        "id": 15,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=544",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=39"
        },
        "likes": 95,
        "created": "2021-03-05"
    },  
    {
        "id": 16,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=545",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=40"
        },
        "likes": 95,
        "created": "2021-03-05"
    },  
    {
        "id": 17,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=546",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=41"
        },
        "likes": 95,
        "created": "2021-03-05"
    },  
    {
        "id": 18,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=547",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=42"
        },
        "likes": 95,
        "created": "2021-03-05"
    },  
    {
        "id": 19,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=548",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=43"
        },
        "likes": 95,
        "created": "2021-03-05"
    },  
    {
        "id": 20,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=549",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=44"
        },
        "likes": 95,
        "created": "2021-03-05"
    },    

]; 

// Invece di usare un ciclo for, (dato che abbiamo un array di aggetti) usiamo un forEach per iterare pi?? semplicemente 
const allPost = document.getElementById("container"); 
     
    posts.forEach((element) =>{
        allPost.innerHTML += 
        `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${element["author"]["image"]}" alt="${element["author"]["name"]}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${element["author"]["name"]}</div>
                        <div class="post-meta__time">${element["created"]}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
            <div class="post__image">
                <img src="${element["media"]}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${element["id"]}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${element["id"]}" class="js-likes-counter">${element["likes"]}</b> persone
                    </div>
                </div> 
            </div>            
        </div>

        `;
    }); 

    const likeCounters = document.querySelectorAll(`.js-likes-counter`);
    const likeButtons = document.querySelectorAll(`.js-like-button`); 
    const likedPosts = [];
    
   
    for (let i = 0 ; i < likeButtons.length ; i++){
        const element = likeButtons[i];
        element.addEventListener('click', (event) => {
            event.preventDefault();
    
            if ( element.classList.contains('like-button--liked') ){
                element.classList.remove('like-button--liked');
    
                // mi prendo il counter attuale dei like
                likeCounters[i].innerHTML = parseInt(likeCounters[i].innerHTML) - 1;
                likedPosts.splice( likedPosts.indexOf(likeButtons[i].getAttribute('data-postid') ));
    
            } else {
                element.classList.add('like-button--liked');
    
                // mi prendo il counter attuale dei like
                likeCounters[i].innerHTML = parseInt(likeCounters[i].innerHTML) + 1;
                likedPosts.push(likeButtons[i].getAttribute('data-postid'));
            }console.log(likedPosts)
        })
    }; 

    