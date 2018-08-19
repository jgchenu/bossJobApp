export function getRedirectPath({
    type,
    avatar
}) {
    let url = (type === 'boss') ? '/boss' : '/genius'
    if (!avatar) {
       
    }
     url += 'info'
    console.log(url)
    return url;
}