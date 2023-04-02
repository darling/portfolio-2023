<script>
	import '../app.css';
	import Footer from '../lib/Footer.svelte';
	import Header from '../lib/Header.svelte';

	// Five hex codes of lilac
	export const colors = ['#F3E5F5', '#E1BEE7', '#CE93D8', '#BA68C8', '#AB47BC'];
</script>

<div>
	<div class="overflow-hidden">
		<Header />
		<slot />
		<Footer />
	</div>
</div>
