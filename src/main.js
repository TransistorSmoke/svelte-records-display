import App from './App.svelte';

var container = document.querySelector('.container');
var app = new App({
	// target: document.body
	target: container
});

export default app;