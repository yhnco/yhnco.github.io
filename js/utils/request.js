/**
 * 
 * @example
 * http_get('http://messengerapi.localhost/api/messages').then(data => {
 * 
 * })
 */

export function http_get(url) {
    return new Promise(function(resolve, reject) {
        const options = {
            method: 'GET',
            mode: 'cors',
        }
        fetch(url, options).then(resp => {
            resp.json().then(resolve)
        })
    })

}


/**
 * 
 * @example
 * http_post('http://.../api/messages/new', {
 *   username: 'Julien',
 *   message: 'Un texte',
 * }).then(data => {
 * 
 * })
 */
export function http_post(url, informations) {
    return new Promise(function(resolve, reject) {
        const options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(informations)
        }
        fetch(url, options).then(resp => {
            resp.json().then(resolve)
        })
    })

}  

 