import React, { useEffect, useState } from 'react';
import array from './Constant';


const App = () => {

  const [myData, setMyData] = useState([]);
  const [sorting, setSorting] = useState("The Table Sorting According Name")

  // This function is used for Sort the value according to Name.
  const sortArray = () => {
    const sortedUsers = array.sort(function (a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
    );
    setMyData(sortedUsers);
  }

  // This function is used for Ascending the value according  to Id.

  const ascendingOrder = () => {
    const sortedArray = array.sort(function (a, b) {
      var nameA = parseInt(a.id);
      var nameB = parseInt(b.id);
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setMyData([...sortedArray]);
    setSorting("The Table In Ascending Order According to Id")

  }

  // This function is used for Descending the value according  to Id.
  const descendingOrder = () => {
    const sortedArray = array.sort(function (a, b) {
      var nameA = parseInt(a.id);
      var nameB = parseInt(b.id);
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    });
    setMyData([...sortedArray]);
    setSorting("The Table In Descending Order According to Id")
  }


  useEffect(() => {
    sortArray()
  }, []);


  return (
    <>
      <div className='m-5'>
        <button className='btn btn-danger px-5 mx-5' onClick={() => ascendingOrder()}>Assending</button>
        <button className='btn btn-danger px-5 mx-5' onClick={() => descendingOrder()}>Dessending</button>
      </div>
      <div className='container'>
        <h2 className='text-center'>{sorting}</h2>
        <div className='my-3'>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Date of joining</th>
                <th scope="col">Rating out of 10</th>
                <th scope="col">location</th>
                <th scope="col">Profile</th>
                <th scope="col">No. of Projects done</th>
              </tr>
            </thead>
            <tbody>
              {myData?.map((data, index) => (
                <tr key={index}>
                  <th scope="row">{data.id}</th>
                  <td>{data.name}</td>
                  <td>{data.date_of_joining}</td>
                  <td>{data.rating}</td>
                  <td>{data.location}</td>
                  <td>{data.profile}</td>
                  <td>{data.project_done}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App