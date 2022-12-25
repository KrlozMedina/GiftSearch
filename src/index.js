const API_KEY = "SV5UZYqaWilic3AtyRxttSFUKApuLSyX";
const API = "https://api.giphy.com/v1/gifs";

const container = document.getElementById('container')


fetch(`${API}/trending?api_key=${API_KEY}&limit=20&offset=0&rating=g&lang=en`)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        data.data.forEach(element => {
            const img = document.createElement('img')
            const div = document.createElement('div')
            // img.style.width = '200px'
            img.style.width = element.images.original.width
            img.style.height = element.images.original.height
            img.src = element.images.original.url;
            div.appendChild(img)
            container.appendChild(div)
        });
        
    })

function search() {
    const word = document.getElementById('word')

    if (word.value.length >= 3) {
        container.innerHTML = ''
    
        fetch(`${API}/search?api_key=${API_KEY}&q=${word.value}&limit=20&offset=0&rating=g&lang=en`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                data.data.forEach(element => {
                    const img = document.createElement('img')
                    img.style.width = element.images.original.width
                    img.style.height = element.images.original.height
                    img.src = element.images.original.webp;
                    container.appendChild(img)
                });
                
            })
    }

}
