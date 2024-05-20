<script lang="ts">
	import '$lib/assets/css/main.css';
    import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<main class="mt-[29rem] md:mt-[100dvh]">
	<slot />
</main>

<Footer />
