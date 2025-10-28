export function Comments() {
  const comment = document.createElement('div');
  comment.innerHTML = `
    <div class="flex flex-col gap-5 m-5">
      <span class="text-2xl font-bold">نظرات دانشجویان</span>
      <div class="grid grid-cols-2 grid-rows-2 gap-5">
        <div class="bg-white shadow-2xl p-5 rounded-3xl w-full flex gap-5">
          <img
            class="w-14 h-14 rounded-full"
            src="./src/assets/images.png"
            alt=""
          />
          <div class="flex flex-col gap-5">
            <p class="size-fit">
              این دوره عالی بود و پروژه ها به من کمک کردند تا سریع مهارت کسب کنم
              .
            </p>
            <span class="font-bold">-علی رضایی</span>
          </div>
        </div>
        <div class="bg-white shadow-2xl p-5 rounded-3xl w-full flex gap-5">
          <img class="w-14 h-14 rounded-full" src="./src/assets/2.jpg" alt="" />
          <div class="flex flex-col gap-5">
            <p class="size-fit">
              منتورینگ حرفه ای و پاسخ سریع به سوالات واقعا ارزشمند بود .
            </p>
            <span class="font-bold">-سارا محمدی</span>
          </div>
        </div>
      </div>
    </div>`;
  return comment;
}
