<script lang="js">
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';

	let picker1;
	let picker;
	onMount(() => {
		picker1.opened = true;
		picker = writable(picker1)
		console.log(picker1.state.isPopupVisible)
		picker.subscribe(() => { console.log(picker1) })
	})

	import '$lib/scripts/toolcool-color-picker.min.js';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>

	<toolcool-color-picker bind:this={picker1} id="color-picker-1" color="rgb(90, 60, 90)" button-width="0rem" button-height="0rem"></toolcool-color-picker>

	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section>

<style>

	:root {
		--tool-cool-color-picker-btn-bg: rgba(0, 0, 0, 0);
		--tool-cool-color-picker-btn-border-color: rgba(0, 0, 0, 0);
		--tool-cool-color-picker-btn-border-color-inner: rgba(0, 0, 0, 0);
		--tool-cool-color-picker-btn-border-radius: 0rem;
		--tool-cool-color-picker-btn-border-radius-inner: 0rem;
	}

	toool-cool-color-picker {
		display: block !important;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
