<script>
	import { page } from '$app/stores';
    import { writable } from "svelte/store";
	import { onMount } from 'svelte';

    let last = writable();
    onMount(() => last.set(document.referrer));
</script>

<h1 class="font-semibold w-fit mx-auto text-lg text-red-500 bg-slate-200 p-2 rounded">
	{$page.status}: {$page.error?.message}

    <div class="text-emerald-600 font-light">
        sorry!
        <a href={$last}>try going back?</a>
    </div>
</h1>

