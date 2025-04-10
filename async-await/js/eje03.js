const baseUrl = 'https://picsum.photos/v2/';
const app = {         // Array que tiene diferentes funciones
    getPictures: async function () {        // Trae la informacion
        const resp = await fetch(`${baseUrl}list`);
        const data = await resp.json();
        if (resp.ok && resp.status == 200) {
            this.renderPictures(data);
        }  
    },
    renderPictures: function(data) {
        const content = document.querySelector(".content");
        data.map(item => {
            console.log(item);
            content.innerHTML += `
                <div class="image-card">
                <img width="100" height="100" src="${item.download_url}" alt="">
                <div class="img-section">
                    <h2>Author</h2>
                    <span>${item.author}</span>
                </div>
                </div>
                <div class="img-section">
                    <h2>URL:</h2>
                    <span>
                        <a href="${item.url}" target="_blank">Abrir</a>
                    </span>
                </div>
            `;
        });
    },
    saludar: () => {alert("Hola Picsum!")}
};   // Aqui se necesita ;

(async function () {
    try {
        await app.getPictures();
    } catch (error) {
        console.error(`Mi error> ${error}`);
    }
})()