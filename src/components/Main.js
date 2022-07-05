import React, {useState, useEffect} from 'react';

import Nav from './Nav';
function Main() {
  const [loading, setLoading] = useState(true)

  const [pageInfo, setPageInfo] = useState(null)
  const [area1, setArea1] = useState(null)
  const [areaMore, setAreaMore] = useState(null)

  useEffect(() => {
    fetch('https://engrain-unify.herokuapp.com/?per-page=100&page=1', {
      headers: {
        'API-Key': '7d64ca3869544c469c3e7a586921ba37'
      },
    })
    .then(response => response.json())
    .then(data => {
      setPageInfo(data["pages"])
      setArea1(data["area1units"])
      setAreaMore(data["areamoreunits"])

      setLoading(false)

      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });


  }, [])
  return (
    <div className="Main">
        {loading ? <h1>Loading...</h1> : <Nav pageData={pageInfo} />}

    </div>
  );
}

export default Main;
