# STAMPARE LISTA DELLA SPESA CON CICLO WHILE
   Il programma chiede di creare una lista della spesa e barrare con un evento click le cose che abbiamo già acquistato 
  1. INPUT 
    - [x]  creare arrey lista della spesa
    - [x]  creare variabile da collegare al dom
    - [x] creare variabile i per ciclo while

  2. LOGICA 
    creare ciclo while
    
      condizione "i" deve essere minore di spesa.length

      creo variabile elemLista in cui deposito ogni elemento dell array

      creo un tag HTML "li" e lo collego a elemLista 

      nel nuovo tag html appena creato grazie a textContent e attraverso al template literals deposito nel documento il contenuto dell'array.

      inserisco l'elemeto li all interno di listaSpesa attarverso appendChild
      che ci permette appunto di inserire li "elemento figlio" all interno del tag ul con classe "lista-spesa".

      A questo punto metto un evento in ascolto ad elemLista ovvero: tramite click ogni volta che premo il mause un elemento dell array viene barrato.

      Nell evento aggiungo una condizione:
      se (style.textDecoration è === line-through) 
         togli la barra visto che già è presente
      altrimenti
         aggiungi la barra.   
       



