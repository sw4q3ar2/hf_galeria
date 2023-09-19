class kepElem{
    kattintas(){
        $('.kepElem').on('click', function() {
            const index = $(this).index();
            const cim = kepLista[index].cim;
            const leiras = kepLista[index].leiras;
            const kepUrl = kepLista[index].url;
    
            const nagyKepDiv = $('<div>').addClass('nagy-kep');
    
            const nagyKep = $('<img>').attr('src', kepUrl);
    
            const cimLeirasDiv = $('<div>').addClass('cim-leiras');
            cimLeirasDiv.append($('<h2>').text(cim));
            cimLeirasDiv.append($('<p>').text(leiras));

            nagyKepDiv.append(nagyKep);
            nagyKepDiv.append(cimLeirasDiv);
    
            $('body').append(nagyKepDiv);
    
            nagyKepDiv.on('click', function() {
                $(this).remove();
            });
        });
    };
};


export default kepElem;