import React, {useState, useEffect} from 'react';

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
        {loading ? <h1>Loading...</h1> : <h1>{pageInfo["per_page"]}</h1>}
        {loading ? <h1>Loading...</h1> : <h1>{area1["total_count"]}</h1>}
        {loading ? <h1>Loading...</h1> : <h1>{areaMore["total_count"]}</h1>}

    </div>
  );
}

export default Main;
