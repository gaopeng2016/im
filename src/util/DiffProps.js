export default (props1, props2) => {
    if(!props1 || !props2)
        return true;

    const props1Length = Object.keys(props1).length;
    const props2Length = Object.keys(props2).length;
    if(props1Length !== props2Length)
        return true;

    for(let prop in props1){
        if(props1[prop] != props2[prop])
            return true
    }

    return false
}
