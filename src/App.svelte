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
			id: 6,
            system: 'instagram',
            owner: 'penguin',
            username: 'penguin@eudoramail.com',
            password: 'penguin'
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


	function deleteRecord(i) {		
		dataRecord.splice(i, 1);
		dataRecord = [...dataRecord];
	}

	
</script>

<div class="title is-size-1 has-text-centered my-6">
	<h1>These are the records.</h1>
</div>
<div class="column">	
	<div class="columns">
		<div class="box">
			{#each dataRecord as record, i (record.id)}
			<Record
				index={i}
				deleteRecord={deleteRecord}			
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

