import React, {useState, useEffect} from 'react';

function Nav(props) {
  const [loading, setLoading] = useState(true)
  const [pageDetails, setPageDetails] = useState(null)

  useEffect(() => {
    setPageDetails(props.pageData)
    setLoading(false)
  }, [])
  return (
    <nav className="nav">
        {loading ? <h1>Loading...</h1> : 
        (
        <section>
        <button>L</button>
        <h1>{pageDetails["current_page"]}</h1>
        <h1>OF</h1>
        <h1>{pageDetails["total_pages"]}</h1>
        <button>R</button>
        </section>
        )}
    </nav>
  );
}

export default Nav;
