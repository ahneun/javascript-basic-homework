// 여기에 1번 문제의 답을 작성하세요.
// 다음의 요청을 async await 문법으로 바꿔보세요.
// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);


async function proDucts() {
  const res = await fetch('https://dummyjson.com/products');
}

proDucts();

// // 여기에 2번 문제의 답을 작성하세요.

// fetch('https://dummyjson.com/products/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'BMW Pencil',
//     /* other product data */
//   })
// })
// .then(res => res.json())
// .then(console.log);


async function posts () {

   const res = await fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify({
    title: 'BMW Pencil',
    }) 
})}

posts();
