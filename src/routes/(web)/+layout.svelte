<script lang="ts">
	import '$lib/assets/css/main.css';
	import logo from '$lib/assets/images/logo.svg';
	import globo from '$lib/assets/images/globo.png';
	import heroVideo from '$lib/assets/video/hero.mp4';
</script>

<header>
	<div class="absolute z-50 w-full flex items-center gap-3 justify-center py-3 bg-transparent">
		<img src={logo} alt="Logo" class="h-14" />
	</div>
	<div id="hero" class="relative">
		<div class="absolute h-[100dvh] w-full overflow-hidden max-lg:mt-20">
			<video
				autoplay
				loop
				muted
				playsinline
				class="absolute inset-0 h-screen max-h-[750px] w-screen object-cover">
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
<main class="container">
	<slot />
</main>
<footer class="flex items-center justify-center bg-secondary">
	<img src="{globo}" alt="globodain logo">
</footer>
