import React, {useState, useEffect} from 'react';

function UnitList(props) {
  const [unitList, setUnitList] = useState(null)
  useEffect(() => {
    setUnitList(props.list)

  }, [])
  return (
    <div className="Main">
        {loading ? <h1>Loading...</h1> : <h1>{pageInfo["per_page"]}</h1>}
        {loading ? <h1>Loading...</h1> : <h1>{area1["total_count"]}</h1>}
        {loading ? <h1>Loading...</h1> : <h1>{areaMore["total_count"]}</h1>}

    </div>
  );
}

export default UnitList;
