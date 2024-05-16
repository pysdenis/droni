<script lang="ts">
  import aboutus from "$lib/assets/video/aboutus.mp4";
</script>

<svelte:head>
  <script
    type="module"
    src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"
  ></script>
</svelte:head>

<section class="mt-6">
  <h1 class="font-semibold text-center mb-6">About Skynova</h1>
  <div class="flex gap-12 flex-col md:grid md:grid-cols-2 items-center">
    <p class="text-md mt-3 text-justify">
      Skynova represents an innovative system designed for the deployment of
      unmanned aerial vehicles (UAVs) during emergency scenarios. In the event
      of a crisis, these drones are activated from strategically positioned
      rooftop housings, facilitating the timely provision of real-time
      information to emergency services. Such a dynamic approach empowers first
      responders to make informed decisions while en route, optimizing their
      strategies for effectively addressing the emergency at hand.
    </p>
    <video
      playsinline
      class="w-auto"
      controls
      controlsList="nodownload noremoteplayback"
    >
      <source src={aboutus} type="video/mp4" />
    </video>
  </div>
  <div class="flex">
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
  </div>
</section>
