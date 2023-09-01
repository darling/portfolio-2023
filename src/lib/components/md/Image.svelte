<script>
	export let src = '';
	export let alt = 'This is an image with no alt text';
</script>

<img loading="lazy" class="w-full" {src} {alt} />
<p class="text-center text-sm text-gray-500">
	{alt}
</p>
