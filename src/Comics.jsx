import React from 'react'

const Comics = ({ comics }) => {
  return (
    <>
        <h1 style={{textAlign: 'center'}}>Comics: </h1>

        <section className='comics-list'>
            {comics.length ? comics.map((item) => (
                <div className='comic' key={item.id}>
                    <img src={`${item["img"]}`} alt="" />
                    <h3>{item["comicName"]}</h3>
                    <div className='details'>
                        <p>Issues: {`${item["issues"]}`}</p>
                        {item["completed"] ? <p>Completed</p> : <p>Ongoing</p>}
                        <p>character: {item["character"]}</p>
                    </div>
                </div>
            )) : <p>Loading Comics...</p>}
        </section>
    </>
  )
}

export default Comics