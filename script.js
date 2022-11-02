const btn = document.getElementById('btn')

const getRandomNumber = () => Math.ceil((Math.random() * 80) + 1)

const changePosition = (element) => {
	element.style.top = `${getRandomNumber()}%`
	element.style.left = `${getRandomNumber()}%`
}

btn.addEventListener('mouseover',()=>{
	changePosition(btn)
})
