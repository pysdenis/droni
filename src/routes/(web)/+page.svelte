<script lang="ts">
import { onMount } from 'svelte';
import { fetchData, type Article } from '$lib/api/api';

let article: Article;

onMount(async () => {
	const response = await fetchData('articles', 1);
	article = response as Article;
});
</script>

<h1 class="">Articles</h1>
