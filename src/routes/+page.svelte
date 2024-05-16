<script lang="ts">
	import aboutus from "$lib/assets/video/aboutus.mp4";
	import Icon from "$lib/components/Icon.svelte";
	import arrow from "$lib/assets/images/arrow.svg?raw";

	const texts = [
		{
			heading: "Easy Access",
			text: "We've made it super simple for emergency teams to get to the drones they need. No fuss, no delays. Just quick and secure access whenever they're needed.",
			show: false,
		},
		{
			heading: "Speedy Response",
			text: "Time is critical in emergencies. Our solution cuts down the time it takes for help to arrive after getting the call. That means we're on the scene faster, ready to tackle whatever comes our way.",
			show: false,
		},
		{
			heading: "Clearer Views",
			text: "With our drones, responders can see exactly what's happening up close. That means they can figure out how urgent things are and decide on the best plan of action in a snap.",
			show: false,
		},
		{
			heading: "Always Ready",
			text: "Our system works 24/7, no pilot needed. That means help is always just a click away, whether it's day or night.",
			show: false,
		},
	]
</script>

<svelte:head>
	<script
		type="module"
		src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"
	></script>
</svelte:head>

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

<section class="bg-black mb-0">
	<div class="container h-56 pt-16">
		<h2 class="font-semibold text-center text-white mb-8">What is it?</h2>
			<div class="flex">
				<p class="text-md mt-3 text-white text-center">Get ready for a game-changer in emergency services! Our Drone Hangar Access Solution is here to make a big difference for police, firefighters, and other state agencies. It's all about using resources smarter and getting help where it's needed faster.</p>
			</div>
	</div>
	<model-viewer
		class="h-[30rem] w-full bg-transparent"
		alt="L"
		src="https://fbgbrrgtvgretv.000webhostapp.com/drone_home.glb"
		poster=""
		shadow-intensity="1"
		camera-controls
		touch-action="pan-y"
		disable-zoom
	></model-viewer>
</section>

<section class="bg-black mb-0">
	<div class="container text-white pt-16 justify-center flex flex-col">
		<h2 class="font-semibold text-center mb-8 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Benefits</h2>
		<div class="md:grid flex flex-col grid-cols-4 gap-6">
			{#each texts as text}
				<span class="flex justify-start flex-col items-center">
					<button class="font-semibold text-md flex gap-4 items-center tracking-wider" on:click={() => text.show = !text.show}>
						{text.heading}
						<Icon icon={arrow} class="text-white w-4 transform transition-all duration-300 rotate-180 {text.show ? '!rotate-90' : ''}" />
					</button>
					<p class:hidden={!text.show} class="text-md text-center mt-3 text-white">{text.text}</p>
				</span>
			{/each}
		</div>
	</div>
</section>

<section class="to-white bg-gradient-to-b from-black via-[#657e90] pb-20">
	<div class="container pt-16">
		<div class="flex w-full justify-center">
			<h2 class="font-semibold text-center mb-8 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Lorem ipsum</h2>
		</div>
		<div class="flex">
			<p class="text-md mt-3 text-white text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet tincidunt sem. Duis fringilla quam vitae sem varius porta. Vestibulum a pretium urna, in porta lacus. Suspendisse porttitor eros nunc, sit amet pulvinar mauris aliquet et. Nam non odio nunc. Vivamus felis erat, finibus eu sagittis non, consequat vel nulla. Nunc rhoncus condimentum tellus in laoreet. Curabitur porta gravida posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. In sagittis cursus est, ut egestas ipsum accumsan vel.</p>
		</div>
	</div>
</section>

