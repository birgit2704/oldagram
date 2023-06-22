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

posts.forEach((post) => {
  let main = document.createElement("div");

  main.innerHTML = `
  <main>
  <div class="general-container">
    <section class="main-header">
        <img class="avatar" src="${post.avatar}" alt="avatar" />
        <div class="avatar-text">
        <h1>${post.name}</h1>
        <p>${post.location}</p>
        </div>
    </section>
    <section class="main-content">
    <img
        class="selfie"
        alt="self portrait"
        src="${post.post}"
    />

    <div class="icons-section">
        <img src="images/icon-heart.png" alt="heart icon" />
        <img src="images/icon-comment.png" alt="comment icon" />
        <img src="images/icon-dm.png" alt="forward icon" />
        <div class="comments">
        <p class="likes bold">${post.likes} likes</p>
        <p>
            <span class="bold">${post.username}</span> ${post.comment}
        </p>
        </div>
    </div>
    </section>
    </div>
</main>`;

  containerEl.appendChild(main);
});
