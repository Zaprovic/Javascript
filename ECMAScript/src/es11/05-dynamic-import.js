const btn = document.querySelector("#btn");
btn.addEventListener("click", async () => {
	const mod = await import("./module.js");
    console.log(mod.summing(3,4))
});
