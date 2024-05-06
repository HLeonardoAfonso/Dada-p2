const head  = async () => {
    let strHtml = `
        <div class="flex-row d-flex align-items-center gap-4" >
            <div class="d-flex align-items-center ">
                <a href="/"><img src="http://localhost:4242/bo/images"></a>
                <div class="dropdown">
                    <button class="btn greyed  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">All</a></li>
                        <li><a class="dropdown-item" href="#">Abstract</a></li>
                        <li><a class="dropdown-item" href="#">Cartoon</a></li>
                        <li><a class="dropdown-item" href="#">3D</a></li>
                        <li><a class="dropdown-item" href="#">FanArt</a></li>
                        <li><a class="dropdown-item" href="#">Manga</a></li><li><a class="dropdown-item" href="#">All</a></li>
                        <li><a class="dropdown-item" href="#">Retro</a></li>
                        <li><a class="dropdown-item" href="#">PixelArt</a></li><li><a class="dropdown-item" href="#">All</a></li>
                        <li><a class="dropdown-item" href="#">Space</a></li>
                    </ul>
                </div>
            </div>
            <div class="d-flex  align-items-center col gap-5" >
                <form class="form-floating col d-flex align-items-center text-center" >
                    <input type="text" class="form-control"  id="exampleInputSearch" aria-describedby="Search area" placeholder="Search" >
                    <label class="text-center" for="floatingInput "><i class="bi bi-search "></i> Search</label>
                </form>
                <a>Buy</a>
                <a>Sell</a>    
                <div class="dropdown">
                    <button class="btn greyed  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        🇵🇹 € EUR
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">€ EUR</a></li>
                        <li><a class="dropdown-item" href="#">$ USD</a></li>
                        <li><a class="dropdown-item" href="#">£ GBP</a></li>
                    </ul>
                </div>  
            </div>
            <div class="col-md-2 d-inline-flex gap-2 ">
                <button class="btn-white  fit-100">
                    <div class="col-md-2 " style="width: 25px; height: 25px; border-radius: 75px; overflow: hidden; display: flex; justify-content: center;"  >
                        <img src="/assets/images/Artimage1.png" >
                    </div> &nbsp; &nbsp; &nbsp; So Lazo
                </button>
                <a ><i class="bi bi-star fs-4 " ></i></a>
                <a ><i class="bi bi-cart fs-4" ></i></a>
            </div>
        </div>
        <div class="pt-3 d-flex  align-items-center gap-2 justify-content-between">
            <a href="/search.html"><button class="btn-cian ">All</button></a>
            <button class="btn-cian">Abstract</button>
            <button class="btn-cian">Cartoon</button>
            <button class="btn-cian">3D</button>
            <button class="btn-cian">Fan Art</button>
            <button class="btn-cian">Manga</button>
            <button class="btn-cian">Retro</button>
            <button class="btn-cian">Pixel Art</button>
            <button class="btn-cian">Space</button>
            
            <button class="btn-white btn-large col-2">
                <i class="bi bi-download"></i> &nbsp; Download App
            </button>
        </div>
    `
    
    document.getElementById("head").innerHTML = strHtml;
}

head()