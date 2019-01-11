const xidingReducer = (prevstate=false,action)=>{
	let {type,payload}= action;
	switch(type){
		case "List":
			return payload;
		default:
			return prevstate
	}
}


export default xidingReducer;