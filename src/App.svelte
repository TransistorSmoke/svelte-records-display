<script>
	import Nav from './Components/Nav.svelte';
	import Record from './Components/Record.svelte';
	import Credits from './Components/Credits.svelte';

	// All test records
    let dataRecord = [
        {
            system: 'gmail',
            owner: 'jason',
            username: 'jason_test@gmail.com',
            password: 'pass'
        },
        {
            system: 'gmail',
            owner: 'bb',
            username: 'bb@gmail.com',
            password: 'pass_90990'
        },
        {
            system: 'gmail',
            owner: 'netti',
            username: 'coolnat31@gmail.com',
            password: 'play_games_always'
        },
		{
            system: 'gmail',
            owner: 'kulas',
            username: 'kulas@gmail.com',
            password: 'wazzup_kulas09'
        },
		{
            system: 'yahoo',
            owner: 'bronz',
            username: 'silent_bg@eudoramail.com',
            password: 'coolhanj05'
        },
		{
            system: 'hotmail',
            owner: 'theo marco',
            username: 'theo_the_korean@gmail.com',
            password: 'zookeeper_01'
        },
		{
            system: 'steam',
            owner: 'jason',
            username: 'orbital_ner@gmail.com',
            password: 'krookrookroo'
        }								
    ];	
</script>

<style>	
	/* .wrapper {
		border: 1px solid red;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	} */

	/* h1 {
		border: 1px solid black;		
	} */

	/* .data {
		width: 50%;
		border: 1px solid red;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	
	}

	.container-records {
		width: 100%;	
		padding: 0 12px;
	
	} */

	.container-center {
		margin: 0 auto;
	}
</style>

<!-- <div class="box">
	<div class="title is-1">
		<h1>These are the records.</h1>
	</div>
	<div class="data">
		<div class="container-records">
			{#each dataRecord as record}
			<Record 
				system={record.system}
				owner={record.owner}
				username={record.username}
				password={record.password}
			/>
		{/each}
		</div>

	</div>	
</div> -->


<div class="title is-size-1 has-text-centered my-6">
	<h1>These are the records.</h1>
</div>
<div class="column">	
	<div class="columns">
		<div class="box">
			{#each dataRecord as record}
			<Record 
				system={record.system}
				owner={record.owner}
				username={record.username}
				password={record.password}
			/>
		{/each}
		</div>
	</div>	
</div>

<Credits />

