import React, {useState, useEffect} from 'react';

function Unit(props) {
    const [loading, setLoading] = useState(true)
    const [unitDetails, setUnitDetails] = useState(null)
    const [date, setDate] = useState(null)

  useEffect(() => {
    setLoading(false)
    setUnitDetails(props.unitData)
    let dateData = new Date(props.unitData["updated_at"]);
    setDate(`${dateData.toLocaleString('en-US')}`)
    // const day = date.getDate();
    // const month = date.getMonth() + 1;
    // const year = date.getFullYear();  
  }, [])
  return (
    <div className="unit">
        {loading ? <h1>Loading...</h1> : 
        <section>
        <h1>{date}</h1>
        <h1>{unitDetails["unit_number"]}</h1>
        <h1>{unitDetails["area"]}</h1>
        </section>}
    </div>
  );
}

export default Unit;