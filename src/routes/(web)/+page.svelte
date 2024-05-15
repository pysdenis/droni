<script lang="ts">
	import aboutus from '$lib/assets/video/aboutus.mp4';
	import { _ } from 'svelte-i18n';
</script>

<section class="mt-10">
	<p>{$_('page.home.title')}</p>
	<h1 class="font-semibold text-center">About Skynova</h1>
	<div class="flex">
		<p class="text-md mt-3 text-justify">Skynova represents an innovative system designed for the deployment of unmanned aerial vehicles (UAVs) during emergency scenarios. In the event of a crisis, these drones are activated from strategically positioned rooftop housings, facilitating the timely provision of real-time information to emergency services. Such a dynamic approach empowers first responders to make informed decisions while en route, optimizing their strategies for effectively addressing the emergency at hand.</p>
	</div>
	<video
		playsinline
		class="mt-5"
		controls
		controlsList="nodownload nofullscreen noremoteplayback"
	>
		<source src={aboutus} type="video/mp4" />
	</video>
</section>

