const titleReducer = (prevstate=[],action)=>{
    console.log(action,898989898989898)
	let {type,payload}= action;
	switch(type){
		case "name":
			return payload;
		default:
			return prevstate
	}
}


export default titleReducer;