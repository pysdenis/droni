<script lang="ts">
	import '$lib/assets/css/main.css';
	import logo from '$lib/assets/images/logo.svg';
</script>

<header class="flex items-center gap-3 justify-center py-3 bg-primary">
	<img src={logo} alt="Logo" class="h-11" />
	<nav class="text-white">
		<a href="/">Home</a>
		<a href="/about">About</a>
	</nav>
</header>
<main class="container">
	<slot />
</main>
<footer class="flex items-center justify-center bg-secondary">
	<p>footer</p>
</footer>
