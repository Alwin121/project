const upcomingReducer = (prevstate=[],action)=>{
	let {type,payload}= action;
	switch(type){
		case "List":
			return payload;
		default:
			return prevstate
	}
}


export default upcomingReducer;