<script lang="ts">
	import aboutus from "$lib/assets/video/aboutus.mp4";
	import Icon from "$lib/components/Icon.svelte";
	import arrow from "$lib/assets/images/arrow.svg?raw";
	import StaticPicture from "$lib/components/Picture/StaticPicture.svelte";
	import image from "$lib/assets/images/flytbase.png";
	import phone from "$lib/assets/images/phone.svg?raw";
	import location from "$lib/assets/images/location.svg?raw";
	import mailBox from "$lib/assets/images/email.svg?raw";
	import droneHome from "$lib/assets/images/DroneModel3.png";

	const texts = [
		{
			heading: "Efficiency Boost",
			text: "Maximize the efficiency of public service resources, ensuring they're always ready when needed.",
			show: false,
		},
		{
			heading: "Rapid Response",
			text: "Reduce the time from emergency notification to the arrival of first responders, potentially saving lives.",
			show: false,
		},
		{
			heading: "Detailed Insights",
			text: "Get close-up views of emergencies, helping to assess the situation quickly and accurately.",
			show: false,
		},
		{
			heading: "24/7 Availability",
			text: "Our drones are ready to assist around the clock, no pilot required.",
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
	<h1 class="font-semibold text-center mb-10">The Future of Public Safety</h1>
	<div class="flex gap-12 flex-col md:grid md:grid-cols-2 items-center">
		<p class="text-md mt-3 text-justify">Imagine a world where emergency responders can instantly deploy drones to assess and manage critical situations. Skynova makes this a reality. Our DRON FIRST project empowers police, firefighters, and state agencies with cutting-edge drone technology, enhancing their ability to respond quickly and effectively.</p>
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

<section class="bg-accent mb-0">
	<div class="container h-56 pt-16">
		<h2 class="font-semibold text-center text-white mb-8">About Skynova</h2>
			<div class="flex-col">
				<p class="text-md mt-3 text-white text-center">Skynova is an innovative company transforming the way police, firefighters, and other emergency services respond to crises. Our mission is to provide instant access to drone hangars, significantly enhancing the efficiency and speed of emergency responses.</p>
				<p class="text-md mt-3 text-white text-center">One of our key initiatives is DRON FIRST, designed to enhance public safety with cutting-edge drone technology. This project enables emergency responders to deploy drones quickly and effectively, which can be crucial in life-and-death situations.</p>

			</div>
	</div>
	<model-viewer
		class="h-[25rem] w-full bg-transparent mt-20"
		alt="A 3D model of our product."
		src="https://bflmpsvz.8u.cz/drone_home.glb"
		poster=""
		shadow-intensity="1"
		camera-controls
		touch-action="pan-y"
		disable-zoom
	></model-viewer>
</section>

<section class="bg-accent mb-0">
	<div class="container text-white pt-2 justify-center flex flex-col">
		<h2 class="font-semibold text-center mb-10 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Why Choose Skynova?</h2>
		<div class="md:grid flex flex-col grid-cols-4 gap-6">
			{#each texts as text}
				<span class="flex justify-start flex-col items-center">
					<button class="font-semibold text-md flex gap-4 items-center tracking-wider" on:click={() => text.show = !text.show}>
						<span class="font-semibold">{text.heading}</span>
						<Icon icon={arrow} class="text-white w-4 transform transition-all duration-300 rotate-180 {text.show ? '!rotate-90' : ''}" />
					</button>
					<p class:hidden={!text.show} class="text-md text-center mt-3 text-white">{text.text}</p>
				</span>
			{/each}
		</div>
	</div>
</section>

<section class="to-white bg-gradient-to-b from-accent via-[#657e90] pb-20 mb-0">
	<div class="container pt-20">
		<div class="flex w-full justify-center">
			<h2 class="font-semibold text-center text-white mb-8">Partnering with Flytbase</h2>
		</div>
		<div class="flex">
			<p class="text-md mt-3 text-white text-center mb-3 px-5">To enhance our capabilities, we collaborate with Flytbase, a leader in digital drone solutions. This partnership allows us to combine our physical infrastructure expertise with their digital platform, ensuring a comprehensive and robust drone deployment system.</p>
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

<section class="bg-white pb-10">
	<div class="container pt-20">
		<div class="flex w-full justify-center">
			<h2 class="font-semibold text-center text-black mb-3">Our Development Journey</h2>
		</div>
		<div class="flex flex-col gap-4">
			<p class="text-center text-lg">We follow a structured path to ensure success:</p>
			<div class="w-full flex justify-center">
				<ol class="text-justify md:w-[75%] flex flex-col gap-2 justify-between list-decimal">
					{#each [
						"<span class='font-semibold'>Conceptualizing:</span> Planning business models, conducting market research, and laying out the project.",
						"<span class='font-semibold'>Parametrization:</span> Defining design parameters, requirements, and labor division.",
						"<span class='font-semibold'>Design:</span> Creating layout and base models, focusing on user interface and experience.",
						"<span class='font-semibold'>First Sales:</span> Introducing our product to early adopters and gaining initial market traction.",
						"<span class='font-semibold'>Upgrading:</span> Validating, improving, and scaling our product for broader use."
					] as step}
						<li>{@html step}</li>
					{/each}
				</ol>
			</div>
		</div>
	</div>
</section>


<section class="bg-white pb-10">
	<div class="container">
		<div class="flex w-full justify-center">
			<h2 class="font-semibold text-center mb-8">
				Take the Next Step with Skynova
			</h2>
		</div>
		<div class="flex flex-col gap-3 justify-center">
			<p class="text-md mt-3 text-center px-5">At Skynova, we’re leading the way in drone technology to make emergency responses faster, safer, and more efficient. Discover how our innovative solutions can revolutionize public safety in your community.</p>
			<StaticPicture width={500} height={500} class="w-full my-4" imgClass="w-full" image={droneHome} alt="flytbase" />
			<span class="text-md px-5 text-center font-semibold">Ready to transform your emergency response capabilities? Contact us today to learn more and join the future of public safety with Skynova.</span>
		</div>
	</div>
</section>

<section>
	<div class="container">
		<h2 class="font-semibold text-center text-black mb-8">Contact</h2>
		<div class="w-full mt-4 flex flex-col gap-5 justify-center	">
			<!-- svelte-ignore a11y-missing-attribute -->
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.5349255630988!2d-5.986954048311329!3d37.382808888216076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2520bd605507d981%3A0x6778fcf5968953de!2sGlobodain!5e0!3m2!1ses!2ses!4v1715933332232!5m2!1ses!2ses" width="600" height="450" style="width:100%; border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			<div class="flex md:justify-between md:flex-row flex-col gap-3">
				<a href="mailto:example@seznam.cz" class="flex hover:text-blue-700 transition-all duration-300 gap-2 items-center">
					<Icon icon={mailBox} class="w-6 text-black"/>
					example@seznam.cz
				</a>
				<a href="tel:+34691179497" class="flex hover:text-blue-700 transition-all duration-300 gap-2 items-center">
					<Icon icon={phone} class="w-6 text-black"/>
					+34 691 17 94 97
				</a>
				<a href="https://maps.app.goo.gl/3YGxaCa6kykpSueC9" target="_blank" class="flex hover:text-blue-700 transition-all duration-300 gap-2 items-center">
					<Icon icon={location} class="w-6 text-black"/>
					C. Bartolomé de Medina, 1, 41004 Sevilla
				</a>
			</div>
		</div>
	</div>
</section>

