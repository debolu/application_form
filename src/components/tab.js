import { React, useState, useEffect } from 'react';

const url = 'https://course-api.com/react-tabs-project'

const Tab = () => {
  const [ loading, setLoading ] = useState(true)
  const [ forms, setForms ] = useState([]);
  const [ value, setValue ] = useState(0);
  const [error, setError] = useState("");

  const fetchForms = async() => {
    try {
      setLoading(false)
    const response = await fetch(url);
    const newForms = await response.json()
    setForms(newForms)
    setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
    
  }

  useEffect(() => {
    fetchForms()
  }, [])

  const selectTab = (i) => {
    setValue(value)
    console.log(i);
  }

  if(loading) {
    return <section className="loading">
      <h2>Loading...</h2>
    </section>
  }
  if (error) {
    return <section className="section loading">
    <h2>{error}</h2>;
  </section>
  }

  return <div className='main-tabs'>
  <section className='tab-bar'>
    <button className={'tab-btn' `${value===this.value && "active-btn"}`} value={0} onClick={selectTab(this.value)} disabled >**********</button>
    <button className={'tab-btn' `${value===this.value && "active-btn"}`} value={1} onClick={selectTab(this.value)} >Application Form</button>
    <button className={'tab-btn' `${value===this.value && "active-btn"}`} value={2} onClick={selectTab(this.value)} disabled >**********</button>
  </section>

  <section className="tab-info">

  </section>
  </div>
}

export default Tab;