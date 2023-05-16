<script>
	const NOW_PLAYING_URL = `https://api.spotify.com/v1/me/player/currently-playing`;
	const TOKEN_URL = `https://accounts.spotify.com/api/token`;
	// const clientID = import.meta.env.SPOTIFY_CLIENT_ID;
	// const clientSecret = import.meta.env.SPOTIFY_CLIENT_SECRET;
	const refreshToken = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;
	const basicAuth = import.meta.env.VITE_SPOTIFY_AUTH;

	const getAccessToken = async () => {
		const response = await fetch(TOKEN_URL, {
			method: 'POST',
			headers: {
				Authorization: `Basic ${basicAuth}`,
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: `grant_type=refresh_token&refresh_token=${refreshToken}`
		});

		return response.json();
	};

	const getNowPlaying = async () => {
		const { access_token } = await getAccessToken();

		return fetch(NOW_PLAYING_URL, {
			headers: {
				Authorization: `Bearer ${access_token}`
			}
		});
	};

	const handler = async () => {
		const response = await getNowPlaying();

		if (response.status === 204 || response.status > 400) {
			return { isPlaying: false };
		}

		const song = await response.json();
		const isPlaying = song.is_playing;
		const title = song.item.name;
		const artist = song.item.artists.map((_artist) => _artist.name).join(', ');
		const songUrl = song.item.external_urls.spotify;

		return {
			artist,
			isPlaying,
			songUrl,
			title
		};
	};
</script>

<div class="content">
	{#await handler()}
		<p>Loading...</p>
	{:then data}
		{#if data.isPlaying}
			<lottie-player src="/sound-wave-np.json" background="transparent" speed="1" loop autoplay />
			<p>
				"{data.title}" by {data.artist} &mdash;
				<a href={data.songUrl} target="_blank" rel="noreferrer">Spotify</a>
			</p>
		{:else}
			<p>Not Playing &mdash; Spotify</p>
		{/if}
	{/await}
</div>

<style lang="sass">
  .content
    display: flex
    overflow: hidden
    align-items: center

  lottie-player
    height: 3.6rem
    width: 3.6rem

  p
    overflow: hidden
    white-space: nowrap
    min-width: 0 
    font-size: 1.4rem
    text-overflow: ellipsis


  a
    color: black
</style>
