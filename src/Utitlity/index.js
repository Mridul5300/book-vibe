
export const getReadcard = () => {
     
     const storedcards = localStorage.getItem('cards')
      
     if(storedcards) {
          return JSON.parse(storedcards)
     }

     return []
}

export const saveCards = bookId => {
     let cardread = getReadcard ()
     const isExist = cardread.find(newCard => newCard  === bookId)
          // console.log(isExist);
     if (!isExist) {
         alert("all ready aded")
         return
     }

     cardread.push (bookId)
     localStorage.setItem('cards', JSON.stringify(cardread))
     alert('added succed')

}