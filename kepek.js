import { kepLista } from "./adatok.js";
import kepElem from "./kepElemek.js";

class Kepek{
    #kepek = [];
    constructor(kepLista,szuloELEM,szuloELEM2){
        this.#kepek = kepLista;
        this.szuloELEM = szuloELEM;
        this.szuloELEM2 = szuloELEM2;
        console.log(szuloELEM);
        for (let index = 0; index < kepLista.length; index++) {
            szuloELEM.append(`<div class="kepElem"> <img src='${kepLista[index].url}' alt='kepek'> </div>`)
        }
        szuloELEM2.append(`<div class="kepElem"> <img src='${kepLista.url}' alt='kepek'> </div>`)
        this.megj();
        
    }

    megj(){
        $('.gallery img').on('click', function() {
            $('.popup-img').css('display', 'block');
            $('.popup-img img').attr('src', $(this).attr('src'));
        });
    
        $('.popup-img span').on('click', function() {
            $('.popup-img').css('display', 'none');
        });
    }
}


export default Kepek;