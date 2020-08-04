console.log("Let's get this party started!");
// document.cookie = 'name=foo; SameSite=None; Secure';
document.cookie = 'username=John Doe';

var x = document.cookie;
console.log(x);

// GIPHY API Key: jJKChLTZUrvNifl0Pt4WFnchsZkGTOYW
// Checkout cookie issue with Rafael

async function getPicByTerms(term) {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=jJKChLTZUrvNifl0Pt4WFnchsZkGTOYW&q=${term}&limit=1&offset=0&rating=g&lang=en`;
	const res = await axios.get(url);
	console.log(res);
	console.log(res.data.data[0].url);
	const img = document.querySelector('#pic');
	img.src = res.data.data[0].url;
}
