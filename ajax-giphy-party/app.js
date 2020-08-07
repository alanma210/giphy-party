console.log("Let's get this party started!");
const gifArea = document.querySelector('#gif-area');

// GIPHY API Key: jJKChLTZUrvNifl0Pt4WFnchsZkGTOYW

async function getPicByTerms(term) {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=jJKChLTZUrvNifl0Pt4WFnchsZkGTOYW&q=${term}&offset=0&rating=g&lang=en`;
	const res = await axios.get(url);
	// console.log(res);
	let numResults = res.data.data.length;
	if (numResults) {
		let randomIdx = Math.floor(Math.random() * numResults);
		let newCol = document.createElement('div');
		let newImg = document.createElement('img');
		newImg.src = res.data.data[randomIdx].images.downsized_medium.url;
		newCol.append(newImg);
		gifArea.append(newCol);
	}
}

const form = document.querySelector('#searchform');
form.addEventListener('submit', function (e) {
	const input = document.querySelector('#searchTerm');
	e.preventDefault();
	getPicByTerms(input.value);
});

const removeBtn = document.querySelector('#remove');
removeBtn.addEventListener('click', function (e) {
	const $gifArea = $('#gif-area');
	$gifArea.empty();
	const input = document.querySelector('#searchTerm');
	input.value = '';
});
