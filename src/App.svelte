<script>
	import Record from './Components/Record.svelte';
	import Credits from './Components/Credits.svelte';

	// All test records
    let dataRecord = [
        {
			id: 1,
            system: 'gmail',
            owner: 'skylar',
            username: 'skylar@gmail.com',
            password: 'pass'
        },
        {
			id: 2,
            system: 'gmail',
            owner: 'breadcrumbs',
            username: 'breadcrumbs@gmail.com',
            password: 'pass_90990'
        },
        {
			id: 3,
            system: 'gmail',
            owner: 'netti',
            username: 'coolnat31@gmail.com',
            password: 'play_games_always'
        },
		{
			id: 4,
            system: 'gmail',
            owner: 'kulas',
            username: 'kulas@gmail.com',
            password: 'wazzup_kulas09'
        },
		{
			id: 5,
            system: 'yahoo',
            owner: 'bronz',
            username: 'silent_bg@eudoramail.com',
            password: 'coolhanj05'
        },
		{
			id: 7,
            system: 'hotmail',
            owner: 'marco',
            username: 'theo_the_korean@gmail.com',
            password: 'zookeeper_01'
        },
		{
			id: 8,
            system: 'steam',
            owner: 'error_page',
            username: 'error_page@gmail.com',
            password: 'krrok!'
        },
		{
			id: 9,
            system: 'Nate Corp',
            owner: 'netcorp',
            username: 'netcorp@gmail.com',
            password: 'nc_inc!'
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

</style>


<div class="title is-size-1 has-text-centered my-6">
	<h1>These are the records.</h1>
</div>
<div class="column">	
	<div class="columns">
		<div class="box" style="border: 2px solid red">
			{#each dataRecord as record, i (record.id)}
			<Record
				recordID={record.id}			
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

