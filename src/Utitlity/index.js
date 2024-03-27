
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
          cardread.push (bookId)
     localStorage.setItem('cards', JSON.stringify(cardread))
          toast ('Add Read List')
          return
     }

     toast('Allready add')
     return

}

// whise list

export const getWhishcard = () => {
     

     const storedWhishCard = localStorage.getItem('cards')
      
     if(storedWhishCard) {
          return JSON.parse(storedWhishCard)
     }

     return []
}

export const saveWhislist = bookId => {
     let Whislistread =  getWhishcard()
     const Exist = Whislistread.find(newWhislist => newWhislist  === bookId)
     let cardread = getReadcard ()
     const isExist = cardread.find(newCard => newCard  === bookId)
     if (!Exist && !isExist) {
          Whislistread.push (bookId)
     localStorage.setItem('Whislists', JSON.stringify(Whislistread))
          // toast ('Add Read List')
          // return
          console.log(Whislistread);
     }

     toast('Allready add')
     return

}
