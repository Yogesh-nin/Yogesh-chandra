import React, { useEffect, useState }  from 'react'
import ContactForm from '../Components/Contact/ContactForm'
import Loader from '../Components/Loader';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);

  return (
    <>
    {
      loading ? <Loader /> :
      (
        <div className="w-100 page-section d-flex align-items-center">
          <ContactForm />
        </div>
      )
    }
    
    </>
  )
}

export default Contact