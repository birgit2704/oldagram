const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const containerEl = document.getElementById("general-container");

for (let i = 0; i < posts.length; i++) {
  let main = document.createElement("div");

  main.innerHTML = `
  <main>
  <div class="general-container">
    <section class="main-header">
        <img class="avatar" src="${posts[i].avatar}" alt="avatar" />
        <div class="avatar-text">
        <h1>${posts[i].name}</h1>
        <p>${posts[i].location}</p>
        </div>
    </section>
    <section class="main-content">
    <img
        class="selfie"
        alt="self portrait"
        src="${posts[i].post}"
    />

    <div class="icons-section">
        <img src="images/icon-heart.png" alt="heart icon" />
        <img src="images/icon-comment.png" alt="comment icon" />
        <img src="images/icon-dm.png" alt="forward icon" />
        <div class="comments">
        <p class="likes bold">${posts[i].likes} likes</p>
        <p>
            <span class="bold">${posts[i].username}</span> ${posts[i].comment}
        </p>
        </div>
    </div>
    </section>
    </div>
</main>`;

  containerEl.appendChild(main);
}
