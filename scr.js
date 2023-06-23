// let likes = document.querySelectorAll('.S_likes-wrap');
// let likesCount;
// likes.forEach((like,index) => {
//   like.addEventListener('click', () => {
//     if(like.classList.contains('active')){
//       like.classList.remove('active');
//       console.log(`${index} --`)
//     }else{
//       like.classList.add('active');
//       console.log(`${index} ++`)
//     }
//     console.log(`${index} !`)
//   });
// });

// // const likeButton = document.getElementById('likeButton');
// // const likeCount = document.getElementById('likeCount');
// // let count = 0;
// // likeButton.addEventListener('click', function() {
// //   count++;
// //   likeCount.textContent = count.toString();
// // });

// thanks to fellow stackoverflower @epascarello

const likeButtonArray = document.querySelectorAll('.S_likes-wrap');

likeButtonArray.forEach(button => {

  // add the click event to the button
  button.addEventListener("click", () => {

    // toggle the class
    button.classList.toggle("active");

    // Determine if active or not to do the calculation
    const dir = button.classList.contains("active") ? 1 : -1;

    // find the count holder in the button
    const countElem = button.querySelector(".S_likes");

    // update the count
    const likes = +countElem.textContent + dir;
    countElem.textContent = likes;
  });

});<span>420</span>