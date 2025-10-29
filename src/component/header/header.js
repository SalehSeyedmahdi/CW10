export function Header() {
    const header = document.createElement("div");
    header.innerHTML = `
    <div class="flex justify-between items-center p-10">
      <ul class="flex flex-row-reverse items-center gap-6 text-lg">
        <li>ویژگی ها</li>
        <li>سرفصل ها</li>
        <li>قیمت ها</li>
        <li>نظرات</li>
        <button class="text-sm text-[#ffffff] bg-[#6b62ff] rounded-xl p-3 pr-5 pl-5">شروع یادگیری</button>
      </ul>
      <div class="flex items-center gap-4">
        <p class="font-bold text-xl">Learnora</p>
        <div class="w-11 h-11 flex justify-center items-center text-xl text-[#ffffff] font-bold bg-[#7b72ff] rounded-xl">L</div>
      </div>
    </div>
    `;
    return header;
}