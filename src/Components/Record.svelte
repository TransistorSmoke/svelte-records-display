<script>
    export let system;
    export let owner;
    export let username;
    export let password;
</script>

<style>
    .record {
        display: inline-block;
        margin: 12px 10px;   
        /* padding: 0 4px;	 */
        width: 300px;

        /* border: 1px solid rgba(112, 112, 112, 0.2); */

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

    /* .small-strong {
        font-weight: bold;
        font-size: 0.9rem;
    } */

    .record-update {     
        display: flex;
        justify-content: flex-end;
    }

    .record-update i.far{
        margin: 0 3px;
        color: rgb(138, 138, 138);
    }

    .record-update i.far:last-child {
        margin-right: 12px;
    }
    .record-info .mb-5 > p:first-child {        
        padding: 4px 0;        
    }

    p.title ~ p {
        font-weight: bold;
        font-size: 0.75em;
    }
    
</style>

<div class="record pt-3">
    <div class="record-update">
        <!-- <span class="edit">Edit</span> -->
        <i class="far fa-edit"></i>
        <i class="far fa-trash-alt"></i>
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
