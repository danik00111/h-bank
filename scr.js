let likes = document.querySelectorAll('.S_likes-wrap');
let likesCount;
likes.forEach(like => {
  like.addEventListener('click', () => {
    if(like.classList.contains('active')){
      like.classList.remove('active');
      console.log(`.active removed for ${like}`)
    }else{
      like.classList.add('active');
      console.log(`.active added for ${like}`)
    }
    console.log(`.active toggled for ${like}`)
  });
});

// const likeButton = document.getElementById('likeButton');
// const likeCount = document.getElementById('likeCount');
// let count = 0;
// likeButton.addEventListener('click', function() {
//   count++;
//   likeCount.textContent = count.toString();
// });