export function Contact() {
  const contact = document.createElement('div');
  contact.innerHTML = `
  <div class="grid grid-cols-1 grid-row-5 gap-5 m-6 bg-white shadow-2xl rounded-sm
 p-8 ">
	<span class="text-2xl font-bold">تماس با ما </span>
	<input class="border-gray-400 border-1 rounded-sm p-3" type="text" placeholder="نام شما ">
	
	<input class="border-gray-400 border-1 rounded-sm p-3" type="text" placeholder="ایمیل شما ">

	<input class="border-gray-400 border-1 rounded-sm p-2 h-36 " type="text" placeholder="پیام شما ">

	<button class="bg-[#6c63ff] w-20 h-10 rounded-xl text-white"> ارسال</button>
</div>`;
  return contact;
}
