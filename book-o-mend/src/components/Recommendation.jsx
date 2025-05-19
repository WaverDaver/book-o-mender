import { use, useEffect, useState } from "react";

function Card({title,about, genre1,genre2,genre3, bookcover}){
    return(
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <img src={bookcover} width= "200" height="300"alt={title + " cover"} />
    <div class="font-bold text-xl mb-2">{title}</div>
    <p class="text-gray-700 text-base">
      {about}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{genre1}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{genre2}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{genre3}</span>
  </div>
</div>

    )
}


function Recommendation(){


    const [searchQuery,setSearchQuery] = useState("");
    const [submitted, setSubmitted] = useState(false);

    //api data
    const [data, setData] = useState([])
    const [loading,setLoading] = useState(true)

    //book_cover_api_data
    const [bookData,setBookData] = useState([])
    const [bookDataLoading,setBookDataLoading] = useState(true)
    const[bookCoverOne, setBookCoverOne] = useState(null)

    const [bookData_2,setBookData_2] = useState([])
    const [bookDataLoading_2,setBookDataLoading_2] = useState(true)
    const[bookCoverTwo, setBookCoverTwo] = useState(null)

    const [bookData_3,setBookData_3] = useState([])
    const [bookDataLoading_3,setBookDataLoading_3] = useState(true)
    const[bookCoverThree, setBookCoverThree] = useState(null)

    //cards info
    const [title1, setTitle1] = useState("")
    const[title2, setTitle2] = useState("")
    const[title3, setTitle3] = useState("")

    //genres for card one
    const[genre1_1, setGenre1_1] = useState("")
    const[genre1_2, setGenre1_2] = useState("")
    const[genre1_3, setGenre1_3] = useState("")

    //genres for card two
    const[genre2_1, setGenre2_1] = useState("")
    const[genre2_2, setGenre2_2] = useState("")
    const[genre2_3, setGenre2_3] = useState("")

    //genres for card three
    const[genre3_1, setGenre3_1] = useState("")
    const[genre3_2, setGenre3_2] = useState("")
    const[genre3_3, setGenre3_3] = useState("")
    

    //function that runs when user presses enter
    const handleSearch = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    //api that is called when user presses enter
    useEffect(()=>{
      if (submitted && searchQuery.trim() !== ""){
        fetch("https://book-o-mend-backend.onrender.com/get-user/" + searchQuery)
        .then((response) => response.json())
        .then((json) => {
          setData(json),
          setLoading(false)

          setTitle1(json.book[0])
          setTitle2(json.book[1])
          setTitle3(json.book[2])


          fetch("https://openlibrary.org/search.json?title=" + json.book[0])
          .then((response_book) => response_book.json())
          .then((json) => {
            setBookData(json)
            setBookDataLoading(false)

            setBookCoverOne(json.docs[0].cover_i)

          })

          fetch("https://openlibrary.org/search.json?title=" + json.book[1])
          .then((response_book) => response_book.json())
          .then((json) => {
            setBookData_2(json)
            setBookDataLoading_2(false)

            setBookCoverTwo(json.docs[0].cover_i)

          })

          fetch("https://openlibrary.org/search.json?title=" + json.book[2])
          .then((response_book) => response_book.json())
          .then((json) => {
            setBookData_3(json)
            setBookDataLoading_3(false)

            setBookCoverThree(json.docs[0].cover_i)

          })


          var turning_genres_str_to_list1 = json.genre[0].replace(/'/g, '"')
          var turning_genres_str_to_list2 = json.genre[1].replace(/'/g, '"')
          var turning_genres_str_to_list3 = json.genre[2].replace(/'/g, '"')

          var genres1 = JSON.parse(turning_genres_str_to_list1)
          var genres2 = JSON.parse(turning_genres_str_to_list2)
          var genres3 = JSON.parse(turning_genres_str_to_list3)

          setGenre1_1(genres1[0])
          setGenre1_2(genres1[1])
          setGenre1_3(genres1[2])

          setGenre2_1(genres2[0])
          setGenre2_2(genres2[1])
          setGenre2_3(genres2[2])

          setGenre3_1(genres3[0])
          setGenre3_2(genres3[1])
          setGenre3_3(genres3[2])

        })
      }

      setSubmitted(false);
    }, [submitted]);

    return(
        <>
        <div className="flex justify-center items-center">
          
        <form onSubmit={handleSearch}>
        <input 
        type="text"
        value={searchQuery}
        placeholder="book title"
        onChange={(e) => setSearchQuery(e.target.value)}
         />
         </form>
         

        </div>
        
        <div className="flex justify-evenly items-center mt-50">
            <Card title={title1} about="sigma" genre1={genre1_1} genre2={genre1_2} genre3={genre1_3} bookcover={`https://covers.openlibrary.org/b/id/${bookCoverOne}-L.jpg`}></Card>
            <Card title={title2} about="sigma" genre1={genre2_1} genre2={genre2_2} genre3={genre2_3} bookcover={`https://covers.openlibrary.org/b/id/${bookCoverTwo}-L.jpg`}></Card>
            <Card title={title3} about="sigma" genre1={genre3_1} genre2={genre3_2} genre3={genre3_3} bookcover={`https://covers.openlibrary.org/b/id/${bookCoverThree}-L.jpg`}></Card>
        </div>
        </>
    )
}

export default Recommendation;