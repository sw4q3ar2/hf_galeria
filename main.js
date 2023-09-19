import {kepLista} from "./adatok.js";
import Kepek from "./kepek.js";

$(function() {
    const szuloELEM = $(".gallery");
    const szuloELEM2 = $(".popup-img");
    new Kepek(kepLista, szuloELEM, szuloELEM2);
});