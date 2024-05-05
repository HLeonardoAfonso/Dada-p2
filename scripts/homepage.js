const findHomeListings  = async () => {
            let strHtml = ``;
            const response = await fetch('http://localhost:4242/api/listings/');
            const lv = await response.json();            

            const filterapplied = lv.filter(item => item.carros.tags == "popular" )

            for (artigo of filterapplied ) { 

                strHtml += `
                    <div class=" flex-column col-xxl-3 col-xl-3 col-lg-4 p-2 ">
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
                                <i class="bi bi-arrow-up-right"> </i> ${artigo.tags}
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
            document.getElementById("cardHomeListing").innerHTML = strHtml;
            }

        findHomeListings();

        const findAbtractListings  = async () => {
            let strHtml = ``;
            const response = await fetch('http://localhost:4242/api/listings/');
            const lv = await response.json();

            const filterapplied = lv.filter(item => item.carros.tags == "abstract" )

            for (artigo of filterapplied ) { 
                
                strHtml += `
                    <div class=" flex-column col-xxl-3 col-xl-3 col-lg-4 p-2 ">
                        <img src="" class="img img-fluid w-100">
                        <!--Title-->
                        <div class="d-flex mt-1 ">
                            <div class="d-flex">
                                <strong class="bold">${artigo.carro.title}</strong>
                                <div>, 1994</div>
                            </div>
                            <div  class="d-flex ms-auto ">
                                <div>5*</div>
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
                                <i class="bi bi-arrow-up-right"> </i> 
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
                                € 420
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
            document.getElementById("cardAbstractCollection").innerHTML = strHtml;
            }

        findAbtractListings();