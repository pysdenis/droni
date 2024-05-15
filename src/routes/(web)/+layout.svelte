<script lang="ts">
	import '$lib/assets/css/main.css';
	import logo from '$lib/assets/images/logo.svg';
	import globo from '$lib/assets/images/globo.svg';
	import heroVideo from '$lib/assets/video/hero.mp4';
	import { browser } from '$app/environment';
	import '$lib/i18n';
	import { locale, waitLocale } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import { storable } from '$lib/scripts/storable';

</script>

<header>
	<div class="absolute z-50 w-full flex items-center gap-3 justify-center py-3 bg-transparent">
		<a href="/">
			<img src={logo} alt="Logo of the corporation" class="h-14" />
		</a>
	</div>
	<div id="hero" class="relative">
		<div class="absolute h-[100dvh] w-full overflow-hidden">
			<video
				autoplay
				loop
				muted
				playsinline
				class="absolute inset-0 h-screen max-h-[100dvh] w-screen object-cover"
			>
				<source src={heroVideo} type="video/mp4" />
			</video>
			<div class="absolute h-full w-full from-black bg-gradient-to-b to-transparent via-transparent lg:max-h-[100%]">
				<div class="relative h-full w-full">
					<div
						class="to-primary-700 absolute bottom-0 h-[467px] w-full bg-gradient-to-b from-transparent lg:h-[288px]"
					></div>
				</div>
			</div>
		</div>
	</div>
</header>
<main class="container mt-[100dvh]">
	<slot />
</main>
<footer class="flex items-center justify-center p-5 bg-secondary">
	<img src="{globo}" alt="globodain logo" class="h-16">
</footer>
