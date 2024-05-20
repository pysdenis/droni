<script lang="ts">
	import '$lib/assets/css/main.css';
	import globo from '$lib/assets/images/globo.svg';
	import ig from '$lib/assets/images/ig.svg?raw';
	import fb from '$lib/assets/images/fb.svg?raw';
    import Icon from '$lib/components/Icon.svelte';
</script>

<footer class="flex items-center p-5 w-full bg-accent">
	<div class="container flex w-full justify-between">
		<a href="https://www.globodain.com/en/" target="_blank">
			<img src="{globo}" alt="globodain logo" class="h-16">
		</a>
		<div class="flex gap-3">
			<Icon icon={ig} class="w-6 text-white"/>
			<Icon icon={fb} class="w-6 text-white"/>
		</div>
	</div>
</footer>
