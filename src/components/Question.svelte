<script>
	export let question;
	export let answer;

    import { openedFaq } from "$data/openedFaq";
</script>

<details open={$openedFaq === question} class="w-full text-sm md:text-lg open:font-bold" on:toggle={({target}) => $openedFaq = target.open ? question : $openedFaq}>
	<summary class="list-none flex items-center justify-between text-VeryDarkDesaturatedBlue cursor-pointer hover:text-SoftRed" >
		{question}
		<img class="w-3 h-2 transition-all duration-300" src="icon-arrow-down.svg" alt="arrow down icon" />
	</summary>
	<p class="text-DarkGrayishBlue mt-2 font-normal">{answer}</p>
</details>
<hr class="w-full border-t-2 my-4 border-solid border-LightGrayishBlue" />

<style>
	details[open] > summary > img {
		transform: rotate(180deg);
	}
</style>
