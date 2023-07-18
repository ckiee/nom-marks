<script>
  import '../app.css';
	import cookie from '$lib/cookie.svg';
</script>

<svelte:head>
	<title>nom-marks</title>
</svelte:head>

<header>
	<!-- <h1 style="font-weight: normal; border-bottom: 2px dotted #000;">nom-marks</h1>
	     <div style="display: inline-block;"> -->
	<h1 class="border-b-2 border-violet-400 border-dotted my-4 text-xl font-bold">
		<img src={cookie} class="w-8 h-8 m-1 mt-0 self-center inline" alt="ckie" />'s nom-marks
	</h1>
	<div class="font-semibold w-fit container mx-auto text-lg">
		<span>search your mastodon-compatible bookmarks & faves</span>
		<div
			class="text-end md:text-start
                   md:w-fit md:relative md:inset-x-1/2
                   md:-rotate-6 md:ml-12 md:rounded-md md:drop-shadow-lg
                   text-base text-emerald-500 whitespace-normal bg-slate-200 p-2"
		>
			(now with 100% less server-side action!)
		</div>
	</div>
</header>

<slot />

<!-- TODO impl, also hide if there's an error. need to read from slot whether its ok to show next . next could be a fragment provided by slot! -->
<div class="mt-4 flex w-full justify-between"><span>&lt;- back</span><span>next -&gt;</span></div>
