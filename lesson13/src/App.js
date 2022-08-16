import React, {useEffect, useState} from "react";
import axios from "axios";

function App() {

  const [ data, setData ] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(( res ) => setData( res.data ))
        .catch((err)=>console.log(err))
  }, [])
console.log(data, "datasadsssdd")
  return (
    <div className="col-md-10 mx-auto">
      <table className="table table-dark">
        <thead>
        <tr>
          <th scope="col">albumId</th>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Url</th>
          <th scope='col'>ThumbnailUrl</th>
        </tr>
        </thead>
        <tbody>
        { data.map(( item, index ) => (
            <tr key={ index }>
              <td>{ item.albumId }</td>
              <td>{ item.id }</td>
              <td>{ item.title }</td>
              <td>{ item.url }</td>
              <td>{ item.thumbnailUrl }</td>
            </tr>
        )) }
        </tbody>
      </table>
    </div>
  );
}

export default App;
