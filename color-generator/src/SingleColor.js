import React, {useState, useEffect} from 'react';

const SingleColor = ({ color,index}) => {

    const { rgb, weight, hex} = color;  
    //rgb return value:[255, 255, 255]
    //change to (255,255,255)
    const bcg = rgb.join(',')
    
    const textValue = `#${hex}`
    
    const [alert, setAlert] = useState(false);
    console.log(bcg)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setAlert(false)
        }, 1000)
        return () => clearTimeout(timeOut)
    })

    return (
        <article className={`color ${index > 10 && 'color-light'}`}
            style={{ backgroundColor: `rgb(${bcg})` }}
            // Applied navigator.clipboard.writeText()
            //writeText() gain value
            onClick={() => {
                setAlert(true)
                navigator.clipboard.writeText(textValue)
            }}>
            <p className='percent-value'>{weight} %</p>
            <p className='color-value'>{textValue}</p>
            {alert && <p className='alert'>already copied to clipboard</p> }
        </article>
    )
}

export default SingleColor;