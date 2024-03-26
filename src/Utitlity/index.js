import { json } from "react-router-dom"


export const getcards = () => {
     let cards = []
     const storedcards = localStorage.getItem('cards')
      
     if(cards) {
          cards = JSON.parse(storedcards)
     }

     return cards
}

export const setcards = card => {
     let cards = getcards ()
     const isExist = cards.find(c => c.bookId === card.bookId)

     if (isExist) {
          return alert("all ready aded")
     }

     cards.push (card)
     localStorage.setItem('cards', JSON.stringify(cards))
     alert('added succed')
}