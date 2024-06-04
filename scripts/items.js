             
// collects the filters applied



// collects info from API to display the cards

const findListings  = async () => {
    let strHtml = ``;
    const response = await fetch('api/listings/');
    const lv = await response.json();
    for (const artigo of lv) {
        strHtml += `
            <div class=" flex-column col-xxl-3 col-xl-3 col-lg-4 p-2 " tags="${artigo.tags}">
                <img src="${artigo.coverimg}" class="img img-fluid w-100">
                <!--Title-->
                <div class="d-flex mt-1 ">
                    <div class="d-flex">
                        <strong class="bold">${artigo.title}</strong>
                        <div>, ${artigo.year}</div>
                    </div>
                    <div  class="d-flex ms-auto ">
                        <div>${artigo.rating}</div>
                        <i class="bi bi-star-fill" style = "color:#BB86FF;"></i>
                        <i class="bi bi-star-fill" style = "color:#BB86FF;"></i>
                        <i class="bi bi-star-fill" style = "color:#BB86FF;"></i>
                        <i class="bi bi-star-fill " style = "color:#BB86FF;"></i>
                        <i class="bi bi-star"></i>
                        <div> (255) </div>
                    </div>  
                </div>
                <!--Artist-->
                <div class="d-flex justify-content-between align-items-center">
                    <div>by <a href="/artist">${artigo.artist}</a></div>
                    <div  class="d-inline-flex gap-1" >
                        <button type="button" class="badgeIconSmall" >
                            <i class="bi bi-check-lg"></i>
                        </button>
                        <button type="button" class="badgeIconSmall " >
                            <i class="bi bi-stars"></i>
                        </button>
                        <button type="button" class="badgeIconSmall" >
                            <i class="bi bi-arrow-up-right"></i>
                        </button>
                        <button type="button" class="badgeIconSmall" >
                            <i class="bi bi-check-lg"></i>
                        </button>
                        <button type="button" class="badgeIconSmall" >
                            <i class="bi bi-stars"></i>
                        </button>
                        <button type="button" class="badgeIconSmall" >
                            <i class="bi bi-arrow-up-right"></i>
                        </button>
                    </div>
                </div>
                <!-- tags of the item type -->
                <div class="d-flex flex-wrap my-1 gap-2">
                    <button type="button" class="badgeInfoSmall ">
                        <i class="bi bi-arrow-up-right"> </i> Digital art 
                    </button>
                    <button type="button" class="badgeInfoSmall" >
                        <i class="bi bi-arrow-up-right"> </i>Etherium
                    </button>
                    <button type="button" class="badgeInfoSmall" >
                        <i class="bi bi-arrow-up-right">  </i>Fan art
                    </button>
                    <button type="button" class="badgeInfoSmall" >
                        <i class="bi bi-stars"></i>Cartoon
                    </button>
                </div>
                <!--Star and price-->
                <div class="d-flex justify-content-between my-2">
                    <div class="d-flex gap-2">
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                    </div>
                    <div class="d-flex pe-4">
                        € ${artigo.price}
                    </div>
                </div>
                <!-- buy button -->
                <div class="d-flex justify-content-end my-2 ">
                    <a href="/cart" >
                        <button type="button" class="btn-purp" >
                            <i class="bi bi-cart"></i> &nbsp Add to Cart
                        </button>
                    </a>
                </div>
            </div>
        `
    }
    document.getElementById("cardListing").innerHTML = strHtml;
}

findListings();

const toggledArray = [];

function filterbyid(id) {
    let strBtnHtml = ``;
    if (toggledArray.includes(id)) {
        toggledArray.splice(toggledArray.indexOf(id), 1);
        if (toggledArray.length == 0) {
            findListings();
            document.getElementById("filterBtn").innerHTML = strBtnHtml;
            return 0;
        }
    } else {
        toggledArray.push(id);
    }
    // console.log(toggledArray);

    for (const tag of toggledArray) {
        strBtnHtml += `
            <div class="btn-grey mx-2" style="width: fit-content;" onclick="closeTag()">
                <i class="bi bi-x"></i> ${tag}
            </div>
        `
    }
    document.getElementById("filterBtn").innerHTML = strBtnHtml;

    findFilterListings();
    return(toggledArray)
}

// aplies filter tags

const findFilterListings  = async () => {
    let strHtml = ``;
    const response = await fetch('/api/listings');
    const lv = await response.json();

    const filterapplied = lv.filter(item => toggledArray.includes(item.tags));
    // console.log(filterapplied);

    for (const artigo of filterapplied) {
        strHtml += `
            <div class=" flex-column col-xxl-3 col-xl-3 col-lg-4 p-2 " tags="${artigo.tags}">
                <img src="${artigo.coverimg}" class="img img-fluid w-100">
                <!--Title-->
                <div class="d-flex mt-1 ">
                    <div class="d-flex">
                        <strong class="bold">${artigo.title}</strong>
                        <div>, ${artigo.year}</div>
                    </div>
                    <div  class="d-flex ms-auto ">
                        <div>${artigo.rating}</div>
                        <i class="bi bi-star-fill" style = "color:#BB86FF;"></i>
                        <i class="bi bi-star-fill" style = "color:#BB86FF;"></i>
                        <i class="bi bi-star-fill" style = "color:#BB86FF;"></i>
                        <i class="bi bi-star-fill " style = "color:#BB86FF;"></i>
                        <i class="bi bi-star"></i>
                        <div> (255) </div>
                    </div>  
                </div>
                <!--Artist-->
                <div class="d-flex justify-content-between align-items-center">
                    <div>by <a href="artist-page.html">The Rusted Pixel</a></div>
                    <div  class="d-inline-flex gap-1" >
                        <button type="button" class="badgeIconSmall" >
                            <i class="bi bi-check-lg"></i>
                        </button>
                        <button type="button" class="badgeIconSmall " >
                            <i class="bi bi-stars"></i>
                        </button>
                        <button type="button" class="badgeIconSmall" >
                            <i class="bi bi-arrow-up-right"></i>
                        </button>
                        <button type="button" class="badgeIconSmall" >
                            <i class="bi bi-check-lg"></i>
                        </button>
                        <button type="button" class="badgeIconSmall" >
                            <i class="bi bi-stars"></i>
                        </button>
                        <button type="button" class="badgeIconSmall" >
                            <i class="bi bi-arrow-up-right"></i>
                        </button>
                    </div>
                </div>
                <!-- tags of the item type -->
                <div class="d-flex flex-wrap my-1 gap-2">
                    <button type="button" class="badgeInfoSmall ">
                        <i class="bi bi-arrow-up-right"> </i> Digital art 
                    </button>
                    <button type="button" class="badgeInfoSmall" >
                        <i class="bi bi-arrow-up-right"> </i>Etherium
                    </button>
                    <button type="button" class="badgeInfoSmall" >
                        <i class="bi bi-arrow-up-right">  </i>Fan art
                    </button>
                    <button type="button" class="badgeInfoSmall" >
                        <i class="bi bi-stars"></i>Cartoon
                    </button>
                </div>
                <!--Star and price-->
                <div class="d-flex justify-content-between my-2">
                    <div class="d-flex gap-2">
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                    </div>
                    <div class="d-flex pe-4">
                        € ${artigo.price}
                    </div>
                </div>
                <!-- buy button -->
                <div class="d-flex justify-content-end my-2 ">
                    <button type="button" class="btn-purp w-50" >
                        <i class="bi bi-cart"></i> &nbsp Add to Cart
                    </button>
                </div>
            </div>
        `
    }
    document.getElementById("cardListing").innerHTML = strHtml;
}
    
    