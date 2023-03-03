console.log("%c HI", "color: firebrick")

// ! CHALLENGE 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const dogImgContainer = document.getElementById("dog-image-container")

const fetchDogData = () => {
	fetch(imgUrl)
		.then((res) => res.json())
		.then((data) => {
			const dogImgUrls = data.message
			console.log(dogImgUrls)
			dogImgUrls.forEach((url) => {
				createImage(url)
			})
		})
}

const createImage = (imgUrl) => {
	// CREATE an image tag, and add the `url` to the src
	// const img = document.createElement("img")
	// img.src = url
	let squareDim = "400"
	// img.height = "400"
	// img.width = "400"
	// dogImgContainer.append(img)

	const imgHTMLStr = `<img src=${imgUrl} height=${squareDim} width=${squareDim}>`
	dogImgContainer.innerHTML += imgHTMLStr
}

// fetchDogData()

// ! CHALLENGE 2
const breedUrl = "https://dog.ceo/api/breeds/list/all"
const breedsList = document.getElementById("dog-breeds")

const fetchAllBreeds = () => {
	fetch(breedUrl)
		.then((res) => res.json())
		.then((data) => {
			const breedsObj = data.message
			// how to just get the mastiff breeds?
			// console.log(breedsObj.mastiff)
			// debugger
			// * FIRST Convert the object keys into an array of breeds
			// iterate over the array
			const breedsArray = Object.keys(breedsObj)
			breeds = breedsArray
			breedsArray.forEach((breedName) => {
				createBreeds(breedName)
			})

			// * SECOND use the FOR...IN Object iteration method
			// for (let breedName in breedsObj) {
			// 	const li = document.createElement("li")
			// 	const span = document.createElement("span")
			// 	span.textContent = breedName
			// 	span.addEventListener("click", changeColor)
			// 	li.append(span)
			// 	breedsList.append(li)
			// }
		})
}

fetchAllBreeds()

// ! CHALLENGE 3

const changeColor = (event) => {
	console.log(event.target)
	// one click ==> 'red'
	// second click ==> 'black'
	// ...
	const currentColor = event.target.style.color
	if (currentColor === "red") {
		event.target.style.color = "black"
	} else {
		event.target.style.color = "red"
	}
}

// ! CHALLENGE 4

const dropdown = document.getElementById("breed-dropdown")
let breeds = []

const filterBreeds = (firstLetter, breedsArray) => {
	// When I pass a letter as a str or char
	// I want to RETURN all the breeds that start with that letter
	return breedsArray.filter((breed) => {
		return breed[0] === firstLetter
	})
}

const createBreeds = (breedName) => {
	const li = document.createElement("li")
	const span = document.createElement("span")
	span.textContent = breedName
	span.addEventListener("click", changeColor)
	li.append(span)
	breedsList.append(li)
}

dropdown.addEventListener("change", (e) => {
	console.log(e.target.value)
	const filteredBreeds = filterBreeds(e.target.value, breeds)
	breedsList.innerHTML = ""
	filteredBreeds.forEach((breed) => {
		createBreeds(breed)
	})
})
