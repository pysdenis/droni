<script lang="ts">
	import '$lib/assets/css/main.css';
	import logo from '$lib/assets/images/logo.svg';
	import globo from '$lib/assets/images/globo.svg';
	import heroVideo from '$lib/assets/video/hero.mp4';
    import StaticPicture from '$lib/components/Picture/StaticPicture.svelte';

	let windowScrollY = 0;
</script>

<svelte:window bind:scrollY={windowScrollY} />

<header>
	<div class:shadow-sm={windowScrollY > 40} class:!bg-black={windowScrollY > 0} class:!p-0={windowScrollY > 0} class="fixed transition-all duration-300 left-0 right-0 top-0 pb-3 pt-3 md:pb-14 md:pt-6 xl:pb-6 z-50 w-full flex items-center gap-3 justify-center py-3 bg-transparent">
		<a href="/">
			<StaticPicture width={238} height={26} image={logo} loading="eager" alt="Logo of the corporation" class="h-14" />
		</a>
	</div>
	<div id="hero" class="relative">
		<div class="absolute h-[100dvh] w-full overflow-hidden">
			<video
				autoplay
				loop
				muted
				playsinline
				class="absolute inset-0 max-h-[100dvh] w-full object-cover"
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

<main class="mt-[100dvh]">
	<slot />
</main>

<footer class="flex items-center justify-center p-5 bg-secondary">
	<img src="{globo}" alt="globodain logo" class="h-16">
</footer>
