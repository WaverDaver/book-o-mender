import { use, useEffect, useState } from "react";

function Card({ title, about, genre1, genre2, genre3, bookcover }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-xs hover:shadow-2xl transition duration-300">
      <img src={bookcover} alt={title + " cover"} className="w-full h-64 object-cover" />
      <div className="p-4">
        <div className="font-bold text-xl text-orange-500 mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-4">{about}</p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">{genre1}</span>
          <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">{genre2}</span>
          <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">{genre3}</span>
        </div>
      </div>
    </div>
  );
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

    return (
      <div className="min-h-screen bg-white px-4 py-10">
        <h1 className="text-3xl font-bold text-orange-500 text-center mb-4">book-o-mend</h1>
        <p className="text-center text-gray-600 mb-6">try searching for Hamlet, The Catcher in the Rye, or anything else! </p>
  
        <form onSubmit={handleSearch} className="flex justify-center mb-10">
          <input
            type="text"
            value={searchQuery}
            placeholder="Search for a book..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </form>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <Card
            title={title1}
            genre1={genre1_1}
            genre2={genre1_2}
            genre3={genre1_3}
            bookcover={`https://covers.openlibrary.org/b/id/${bookCoverOne}-L.jpg`}
          />
          <Card
            title={title2}
            genre1={genre2_1}
            genre2={genre2_2}
            genre3={genre2_3}
            bookcover={`https://covers.openlibrary.org/b/id/${bookCoverTwo}-L.jpg`}
          />
          <Card
            title={title3}
            genre1={genre3_1}
            genre2={genre3_2}
            genre3={genre3_3}
            bookcover={`https://covers.openlibrary.org/b/id/${bookCoverThree}-L.jpg`}
          />
          <div className="absolute bottom-4 left-4 text-xs text-gray-500">
            <p>not all books are in the database!</p>
            </div>
        </div>
      </div>
    );
  }

export default Recommendation;