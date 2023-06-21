let likes = document.querySelectorAll('.S_likes-wrap');
let likesCount;
likes.forEach((like,index) => {
  like.addEventListener('click', () => {
    if(like.classList.contains('active')){
      like.classList.remove('active');
      console.log(`${index} --`)
    }else{
      like.classList.add('active');
      console.log(`${index} ++`)
    }
    console.log(`${index} !`)
  });
});

// const likeButton = document.getElementById('likeButton');
// const likeCount = document.getElementById('likeCount');
// let count = 0;
// likeButton.addEventListener('click', function() {
//   count++;
//   likeCount.textContent = count.toString();
// });