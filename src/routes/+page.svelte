<script lang="ts">
	import { onMount } from 'svelte';
	import { login, fetchV1Instance, mastodon } from 'masto';
	import debounce from 'lodash.debounce';

	let urlInput: string = 'crimew.gay';
	let promise: undefined | Promise<mastodon.v1.Instance>;

	const fetch_ = debounce(() => {
		let surl;
		if (/^https?:\/\//.test(urlInput)) surl = urlInput;
		else surl = `https://${urlInput}`;

		const uurl = new URL(surl);
		uurl.pathname = '/';
		uurl.search = '';

		const url = uurl.toString();
		promise = fetchV1Instance({ url });
	}, 80);
	// 1000/((150wpm*5)/60) = 80ms, not many people are over 150wpm.

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
			bind:value={urlInput}
			on:input={fetch_}
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
				class="w-max max-h-[15vh] md:max-h-[35vh]
                       self-center p-2 md:p-4 rounded hover-shadow
                       outline outline-1 outline-slate-400"
			/>

			<a href="/create-app">that's my instance, let's go!</a>
		{:catch error}
			<p class="text-red-500">{error.message}</p>
		{/await}
	{/if}
</article>
