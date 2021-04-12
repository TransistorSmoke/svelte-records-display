<script>
    import Update from './Update.svelte';

    export let id;
    export let system;
    export let owner;
    export let username;
    export let password;

    export let currentRecords;

    function deleteRecord() {
        console.log("hello world")
    }
    
  

</script>

<style>
    .record {
        display: inline-block;
        margin: 12px 10px;   
        width: 300px;        
        border-radius: 8px;
        background-color:  rgba(112, 158, 255, 0.2);
        box-shadow: 1px 2px 4px 0px rgba(0,0,0,0.1);
        
    }
    .header {
        margin: 0;
        text-align: center;        
    }

    .header figure {
        margin: 0 auto;
    }

    .system {
        text-transform: uppercase;
        font-weight: bold;        
    }

    .record-info {
        text-align: center;
        background-color: rgba(255, 255, 255, 1);
        padding: 4px 0;
    }


    .record-update {     
        display: flex;
        justify-content: flex-end;
    }

    .update-icons {
        width: 28px;
        height: 28px;        
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 16px;;
    }

    .record-update .update-icons:last-child {
        margin: 0 4px;        
    }

    .record-update i.far{        
        color: rgb(138, 138, 138);
    }

    .record-update i.far:hover{
        cursor: pointer;
    }

    .record-update .update-icons {
        background-color: white;
        padding: 4px;
    }    


    .record-info .mb-5 > p:first-child {        
        padding: 4px 0;        
    }

    p.title ~ p {
        font-weight: bold;
        font-size: 0.75em;
    }

    /* .small-strong {
        font-weight: bold;
        font-size: 0.9rem;
    } */

    
</style>

<div class="record pt-3">    
    <div class="record-update">
        <div class="update-icons">
            <i class="far fa-edit"></i>
        </div>
        <div class="update-icons" on:click={deleteRecord}>
            <i class="far fa-trash-alt"></i>
        </div>
    </div>
            
    <header class="header my-4">
        <figure class="image is-64x64">
            <img src="../icons/yahoo.png" alt="yahoo logo">
          </figure>
        <div class="system my-2">
            <p class="title is-4">{system}</p>
        </div>
    </header>
    <div class="record-info">
        <div class="mb-5">
            <p class="title is-5">{owner}</p>
            <p class="subtitle small-strong">OWNER</p>
        </div>

        <div class="mb-5">
            <p class="title is-5">{username}</p>            
            <p class="subtitle">USERNAME</p>
        </div>
        <div class="mb-5">
            <p class="title is-5">{password}</p>            
            <p class="subtitle">PASSWORD</p>
        </div>
    </div>
</div>
