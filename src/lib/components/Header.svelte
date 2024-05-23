<script lang="ts">
  import "$lib/assets/css/main.css";
  import logo from "$lib/assets/images/logo.svg";
  import heroVideo from "$lib/assets/video/hero.mp4";
  import StaticPicture from "$lib/components/Picture/StaticPicture.svelte";

  let windowScrollY = 0;
</script>

<svelte:window bind:scrollY={windowScrollY} />

<header>
  <div
    class:shadow-sm={windowScrollY > 40}
    class:!bg-accent={windowScrollY > 0}
    class:!p-0={windowScrollY > 0}
    class="fixed transition-all duration-300 left-0 right-0 top-0 pb-3 pt-3 md:pb-14 md:pt-6 xl:pb-6 z-50 w-full flex items-center gap-3 justify-start md:justify-center py-3 bg-transparent"
  >
    <a href="/">
      <StaticPicture
        width={238}
        height={26}
        image={logo}
        loading="eager"
        alt="Logo of the corporation"
		imgClass="md:h-14 w-full h-10"
        class="md:h-14 h-10 pl-[3%] md:pl-0"
      />
    </a>
    <a href="#contact" class="absolute right-[3%] text-white">Contact us</a>
  </div>
  <div id="hero" class="relative">
    <div
      class="absolute max-md:max-h-[60dvh] h-[100dvh] w-full overflow-hidden"
    >
      <video
        autoplay
        loop
        muted
        playsinline
        class="absolute inset-0 max-h-[60dvh] h-full md:max-h-[100dvh] w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div
        class="absolute max-h-[60dvh] h-full md:max-h-[100dvh] w-full from-black bg-gradient-to-b to-transparent via-transparent lg:max-h-[100%]"
      ></div>
    </div>
  </div>
</header>
