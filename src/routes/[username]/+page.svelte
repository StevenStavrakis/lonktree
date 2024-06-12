<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const profile = data.profile;
</script>

<h1>{profile.fullName}</h1>
<p>{profile.email}</p>
<p>{profile.username}</p>



