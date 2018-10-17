const print = () => {
	console.log('hello from default exports module')
}

const notUsed = () => {
	console.log('not used method')
}

export default {
	print,
	notUsed
}