<script lang="ts">
	import { onMount } from 'svelte';
	import { login, fetchV1Instance, mastodon } from 'masto';
	let url: string = 'https://social.pixie.town';
	let promise: undefined | Promise<mastodon.v1.Instance>;

	function fetch_() {
		promise = fetchV1Instance({ url });
	}
	onMount(fetch_);
</script>

<article class="px-4 flex flex-col space-y-6">
	<p>
		right, hello traveler! i can help you <strong>search posts you've liked</strong>, and i'm
		planning to learn how to export them soon.
	</p>
	<form>
		to begin, please enter your instance's URL:
		<input
			type="text"
			placeholder="https://example.com"
			id="url"
			bind:value={url}
			on:change={fetch_}
			class="inline-flex h-7 items-center justify-center border bg-white px-2 text-sm focus:outline-none ring focus:ring-2 ring-violet-400 hover:ring-violet-300 rounded"
		/>
	</form>

	{#if promise}
		{#await promise}
			<p>...waiting</p>
		{:then info}
			<strong>i found <span class="text-emerald-500 font-normal">{info.title}</span>!</strong>
			<img
				src={info.thumbnail}
				alt={`${info.title}'s instance thumbnail'`}
				class="w-max max-h-[15vh] md:max-h-[35vh] self-center rounded"
			/>
		{:catch error}
			<p class="text-red-500">{error.message}</p>
		{/await}
	{/if}
</article>
