
blog();

async function blog(){
    // const api = 'https://sheetdb.io/api/v1/muaq64jkepqm2';
    const api = './api.json';
    const response = await fetch(api);

    const data = await response.json()

    // console.log(data);
    

    document.querySelector('.right-content-space').innerHTML =`
            ${data.map((data)=>{
                return `
                <div class="card">
                <div class="card-header">
                    <div class="title padding">
                        ${data.title}
                    </div>
                    <div class="author padding">
                        <span class="date">${data.date}</span>
                        <div class="author-info">
                            <span class="author-name hover">${data.author}</span>
                            <img class="profile" src="./blog-test-imgs/bear.jpg" alt="">
                        </div>
                    </div>
                </div>
    
    
                <div class="img-and-content content-border padding">
                    <div class= "img-frame">
                        <img class="cover-img" src="${data.cover}" alt="" srcset="">
                    </div>
                    <p class="content-p">${data.content}</p>
    
    
                    <div class="card-cta">
                        <button class="btn hover">CONTIUE READING</button>
                        <div class="tag">
                            <p class="tag-name">GENERAL</p>
                        </div>
                    </div>
                </div>
            </div>
                `
            }).join('')}
    `
}



