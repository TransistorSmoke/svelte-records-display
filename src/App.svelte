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
            password: 'pass',
            isEditClicked: false
        },
        {
			id: 2,
            system: 'gmail',
            owner: 'breadcrumbs',
            username: 'breadcrumbs@gmail.com',
            password: 'pass_90990',
            isEditClicked: false
        },
        {
			id: 3,
            system: 'gmail',
            owner: 'netti',
            username: 'coolnat31@gmail.com',
            password: 'play_games_always',
            isEditClicked: false
        },
		{
			id: 4,
            system: 'gmail',
            owner: 'kulas',
            username: 'kulas@gmail.com',
            password: 'wazzup_kulas09',
            isEditClicked: false
        },
		{
			id: 5,
            system: 'yahoo',
            owner: 'bronz',
            username: 'silent_bg@eudoramail.com',
            password: 'coolhanj05',
            isEditClicked: false
        },
		{
			id: 6,
            system: 'instagram',
            owner: 'penguin',
            username: 'penguin@insta.com',
            password: 'penguin',
            isEditClicked: false
        },
		{
			id: 7,
            system: 'snapchat',
            owner: 'marco',
            username: 'marco-phoenix@gmail.com',
            password: 'zookeeper_01',
            isEditClicked: false
        },
		{
			id: 8,
            system: 'steam',
            owner: 'error paige',
            username: 'error_page@gmail.com',
            password: 'krrok!',
            isEditClicked: false
        },
		{
			id: 9,
            system: 'Nate Corp',
            owner: 'netcorp',
            username: 'netcorp@gmail.com',
            password: 'nc_inc!',
            isEditClicked: false
        },								
		{
			id: 10,
            system: 'Apple',
            owner: 'mr. adams',
            username: 'thevineyard@yahoo.com',
            password: 'crunchy_apple!',
            isEditClicked: false
        },						
		{
			id: 11,
            system: 'Starbucks',
            owner: 'Zoro',
            username: 'coffee_monster@yahoo.com',
            password: 'espress0-11%%%',
            isEditClicked: false
        },					
		{
			id: 12,
            system: 'Github',
            owner: 'Codebreaker',
            username: 'rebase@nocode.org',
            password: 'c0de-tmrw-09',
            isEditClicked: false
        },						
		{
			id: 13,
            system: 'vr',
            owner: 'adrenety',
            username: 'nate-ad@adina.com',
            password: 'h3y_nate!',
            isEditClicked: false
        },					
		{
			id: 14,
            system: 'samsung',
            owner: 'Sam',
            username: 'sung@sung.com',
            password: 'appl3_l0ves_s@msung',
            isEditClicked: false
        }						
    ];
    
    let dataEditCard = [];

    function editRecord(i) {
        let info = "YOU CANNOT EDIT ME YET"

        dataEditCard = [...dataEditCard, {
            recordIndex: i,
            owner: dataRecord[i].owner,
            username: dataRecord[i].username,
            password: dataRecord[i].password,
            isEditClicked: dataRecord[i].isEditClicked
        }]

        dataRecord[i].owner = info;
        dataRecord[i].username = info;
        dataRecord[i].password = info;
        dataRecord[i].isEditClicked = true;

        console.log(dataEditCard)

    }

	function deleteRecord(i) {		
		dataRecord.splice(i, 1);
		dataRecord = [...dataRecord];
	}
    
    function refreshpage() {
        location.reload();
    }
	
</script>

<div class="title is-size-1 has-text-centered mt-6 mb-3">
	<h1>These are the records.</h1>
</div>
<div class="has-text-centered my-5">
    <button class="button is-medium is-danger" on:click={refreshpage}>Refresh</button>
</div>
<div class="column">	
	<div class="columns">
		<div class="box">
			{#each dataRecord as record, i (record.id)}
			<Record
				index={i}
                {editRecord}
				{deleteRecord}
				system={record.system}
				owner={record.owner}
				username={record.username}
				password={record.password}
                isEdit={record.isEditClicked}

			/>
		{/each}
		</div>
	</div>	
</div>

<Credits />

