import { useState } from "react"
import { useParams } from "react-router-dom"


const Bookbyid = (props)=>{
    const {id} = useParams()
    const [bookslist,Setbookslist] = useState(props.bookslist)
    const book = bookslist.find((b)=>{return b.id===id})

    return(
        
        <div>
            name: {book.name} <br/>
            id: {book.id} <br/>
            auther: {book.auther} <br/>
            pages: {book.pages}
        </div>
    )
}
export default Bookbyid