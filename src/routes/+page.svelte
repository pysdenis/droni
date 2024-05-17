<script lang="ts">
	import aboutus from "$lib/assets/video/aboutus.mp4";
	import Icon from "$lib/components/Icon.svelte";
	import arrow from "$lib/assets/images/arrow.svg?raw";
	import StaticPicture from "$lib/components/Picture/StaticPicture.svelte";
	import image from "$lib/assets/images/flytbase.png";
	import phone from "$lib/assets/images/phone.svg?raw";
	import location from "$lib/assets/images/location.svg?raw";
	import mailBox from "$lib/assets/images/email.svg?raw";
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

<section class="mt-12 mb-20 container">
	<h1 class="font-semibold text-center mb-10">About Skynova</h1>
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
	<div class="container text-white pt-2 justify-center flex flex-col">
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
	<div class="container pt-20">
		<div class="flex w-full justify-center">
			<h2 class="font-semibold text-center text-white mb-8">Flytbase</h2>
		</div>
		<div class="flex">
			<p class="text-md mt-3 text-white text-center mb-3 px-5">At Skynova, we're excited to embark on a groundbreaking journey to conceptualize, create, and monitor the next generation of drone deployment using the Flytbase platform.</p>
		</div>
		<div class="md:grid flex flex-col md:grid-cols-2">
			<StaticPicture width={500} height={500} class="w-full flex justify-center mt-4" image={image} alt="flytbase" />
			<div class="flex flex-col pt-6 gap-4">
				<p class="text-md mt-3 text-black text-justify">Our strategy is simple yet powerful: collaborate and innovate. By partnering with Flytbase, we harness their cutting-edge digital solutions while we handle the physical deployment. This synergy ensures seamless integration and unmatched efficiency in drone operations.</p>
				<p class="text-md mt-3 text-black text-justify">Together, we'll redefine the future of drone technology. Let's elevate your capabilities with the perfect blend of physical expertise and digital excellence.</p>
			</div>
		</div>
	</div>
</section>

<section>
	<div class="container pt-16">
		<h2 class="font-semibold text-center text-black mb-8">Contact</h2>
		<div class="w-full mt-4 flex justify-center	">
			<!-- svelte-ignore a11y-missing-attribute -->
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.5349255630988!2d-5.986954048311329!3d37.382808888216076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2520bd605507d981%3A0x6778fcf5968953de!2sGlobodain!5e0!3m2!1ses!2ses!4v1715933332232!5m2!1ses!2ses" width="600" height="450" style="width:100%; border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			<div class=" ml-4 flex gap-3 flex-col">
				<a href="mailto:example@seznam.cz" class="flex gap-2 items-center">
					<Icon icon={mailBox} class="w-6 text-black"/>
					example@seznam.cz
				</a>
				<a href="tel:+34691179497" class="flex gap-2 items-center">
					<Icon icon={phone} class="w-6 text-black"/>
					+34 691 17 94 97
				</a>
				<a href="https://maps.app.goo.gl/3YGxaCa6kykpSueC9" target="_blank" class="flex gap-2 items-center">
					<Icon icon={location} class="w-6 text-black"/>
					C. Bartolomé de Medina, 1, 41004 Sevilla
				</a>
			</div>
		</div>
	</div>
</section>

