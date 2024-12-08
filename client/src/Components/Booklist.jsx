import { useState } from "react"
import React, { Suspense } from 'react';
import { Link, Outlet, Routes, Route} from "react-router-dom"
import Bookbyid from './Bookbyid';

const Booklist = (props)=>{
    const [bookslist,Setbookslist] = useState(props.bookslist)
    return(
        <> 
            {
            bookslist.map((b)=>{  
                return <div>
                    name: {b.name},
                    author: {b.auther} 
                    <Link to={`/books/${b.id}`}>for details</Link>
                    <Outlet/>
                    </div>
            })
            }
        <Routes>
        <Route path='/books/:id' element={<Suspense fallback="loading..."><Bookbyid bookslist={bookslist}/></Suspense>  }/>
        </Routes>
        </>
    )
}
export default Booklist