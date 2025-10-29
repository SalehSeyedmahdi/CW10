export function Hero() {
    const hero = document.createElement("div");
    hero.innerHTML = `
    <div class="flex justify-between p-10">
      <div class="w-4/10 flex flex-col shadow-xl items-end rounded-xl p-8">
        <p class="font-bold text-xl mb-4" dir="rtl">ثبت نام رایگان</p>
        <input type="email" placeholder="ایمیل شما" dir="rtl" class="w-1/2 border border-[gray] rounded-sm">
        <button class="w-full text-[#ffffff] bg-[#6b62ff] p-2 rounded-xl">شروع کنید</button>
      </div>
      <div class="flex flex-col gap-8" dir="rtl">
        <p class="font-bold text-5xl">یادگیری React از صفر تا پیشرفته</p>
        <p class="text-[gray] text-lg">با Learnora، پروژه محور React را یاد بگیرید و مهارت های حرفه ای کسب کنید.</p>
        <div class="flex gap-5">
          <button class="text-[#ffffff] bg-[#6b62ff] rounded-xl p-2 pr-4 pl-4">شروع رایگان</button>
          <button class="border border-[#6b62ff] text-[#6b62ff] rounded-xl p-2 pr-4 pl-4">مشاهده سرفصل ها</button>
        </div>
      </div>
    </div>
    `;
    return hero;
}