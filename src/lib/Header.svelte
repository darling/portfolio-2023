<script lang="ts">
	import { random } from 'lodash';
	import { createColorClassGenerator } from './colors';
	export const hasBackground = true;

	const getRotation = (bias: boolean) => {
		// if bias then rotation can go left or right
		const rotation = random(bias ? -6 : 1, bias ? 1 : 6, false);
		return `transform: rotate(${rotation}deg);`;
	};

	const colorGen = createColorClassGenerator();

	let links = [
		{
			name: 'Home',
			href: '/',
			randomRotation: getRotation(true)
		},
		{
			name: 'Projects',
			href: '/projects',
			randomRotation: getRotation(false)
		}
	];
</script>

<header class="mx-auto max-w-4xl text-lg relative z-50 flex flex-col">
	<div class="flex flex-row justify-center p-4">
		<nav class="p-2 px-4 bg-white drop-shadow-sm flex flex-row gap-8">
			{#each links as link}
				<a
					class={'transition duration-100 font-bold px-2 ' + colorGen()}
					style={link.randomRotation}
					href={link.href}>{link.name}</a
				>
			{/each}
		</nav>
	</div>
</header>
