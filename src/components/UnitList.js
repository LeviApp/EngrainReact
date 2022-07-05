import React, {useState, useEffect} from 'react';
import Unit from './Unit'
function UnitList(props) {
    const [loading, setLoading] = useState(true)
    const [unitListDetails, setUnitListDetails] = useState(null)
  useEffect(() => {
    setLoading(false)
    setUnitListDetails(props.unitData)
  }, [])
  return (
    <div className="unitlist">
        {loading ? <h1>Loading...</h1> : <h1>{unitListDetails["total_count"]}</h1>}
        {loading ? <h1>Loading...</h1> : 
        <section>{unitListDetails["data"].map(val => <Unit key={val.id} unitData={val}/>)
        
        }</section>}
        {/* {loading ? <h1>Loading...</h1> : <h1>{areaMore["total_count"]}</h1>} */}

    </div>
  );
}

export default UnitList;
