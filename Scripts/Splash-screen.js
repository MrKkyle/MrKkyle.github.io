/*get the modal */
document.addEventListener("DOMContentLoaded", splash);

function splash()
{
	const splash = document.querySelector(".splash");

	window.addEventListener("load", event =>
	{
		setTimeout(() =>
		{
			splash.classList.add("display-none");
		}, 2500);
	})
}