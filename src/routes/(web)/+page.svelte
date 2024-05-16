<script lang="ts">
	import aboutus from '$lib/assets/video/aboutus.mp4';

</script>

<section class="mt-8 container">
	<h1 class="font-semibold text-center mb-8">About Skynova</h1>
	<div class="flex gap-12 flex-col md:grid md:grid-cols-2 items-center">
		<p class="text-md mt-3 text-justify">Skynova represents an innovative system designed for the deployment of unmanned aerial vehicles (UAVs) during emergency scenarios. In the event of a crisis, these drones are activated from strategically positioned rooftop housings, facilitating the timely provision of real-time information to emergency services. Such a dynamic approach empowers first responders to make informed decisions while en route, optimizing their strategies for effectively addressing the emergency at hand.</p>
		<!-- svelte-ignore a11y-media-has-caption -->
		<video
			playsinline
			class="w-auto"
			controls
			controlsList="nodownload noremoteplayback"
		>
			<source src={aboutus} type="video/mp4" />
		</video>
	</div>
</section>

<section class="from-white via-[#889dabe3] bg-gradient-to-b to-[#657e90] mb-0">
	<div class="container h-56 pt-16">
		<!-- <h2 class="font-semibold text-center mb-8">Lorem ipsum</h2>
		<div class="flex">
			<p class="text-md mt-3  text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet tincidunt sem. Duis fringilla quam vitae sem varius porta. Vestibulum a pretium urna, in porta lacus. Suspendisse porttitor eros nunc, sit amet pulvinar mauris aliquet et. Nam non odio nunc. Vivamus felis erat, finibus eu sagittis non, consequat vel nulla. Nunc rhoncus condimentum tellus in laoreet. Curabitur porta gravida posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. In sagittis cursus est, ut egestas ipsum accumsan vel.</p>
		</div> -->
	</div>
</section>

<section class="from-[#657e90] bg-gradient-to-b to-black mb-0">
	<div class="container text-white pt-16">
		<h2 class="font-semibold text-white text-center mb-8">Lorem ipsum</h2>
		<div class="flex">
			<p class="text-md mt-3 text-white text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet tincidunt sem. Duis fringilla quam vitae sem varius porta. Vestibulum a pretium urna, in porta lacus. Suspendisse porttitor eros nunc, sit amet pulvinar mauris aliquet et. Nam non odio nunc. Vivamus felis erat, finibus eu sagittis non, consequat vel nulla. Nunc rhoncus condimentum tellus in laoreet. Curabitur porta gravida posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. In sagittis cursus est, ut egestas ipsum accumsan vel.</p>
		</div>
	</div>
</section>

<section class="bg-black pb-20">
	<div class="container pt-16">
		<div class="flex w-full justify-center">
			<h2 class="font-semibold text-center mb-8 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Lorem ipsum</h2>
		</div>
		<div class="flex">
			<p class="text-md mt-3 text-white text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet tincidunt sem. Duis fringilla quam vitae sem varius porta. Vestibulum a pretium urna, in porta lacus. Suspendisse porttitor eros nunc, sit amet pulvinar mauris aliquet et. Nam non odio nunc. Vivamus felis erat, finibus eu sagittis non, consequat vel nulla. Nunc rhoncus condimentum tellus in laoreet. Curabitur porta gravida posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. In sagittis cursus est, ut egestas ipsum accumsan vel.</p>
		</div>
	</div>
</section>

