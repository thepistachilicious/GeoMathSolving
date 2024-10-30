import { useState } from 'react'
import { useEffect } from 'react'
import './info.css'
 

const Info = () => {
    const [text, setText] = useState('')
    const [show, setShow] = useState(false)
    const [team, setTeam] = useState(false)

    useEffect(() => {
        setShow(false)
    },[text])

  return (
    <div className='info'>
        <div className='bar'>
            <img src='Logo_Gr.svg' alt='' />
            <p>Contact us</p>
            <p>About</p>
            <p>Help</p>
            <button onClick={() => setTeam(pre => !pre)}>Nhom 10</button>
        </div>

        <div className='main'>
            <div className="logo">
                <img src='Logo_Gr.svg' alt='' />
                <p>Make your Math course easier with AI</p>
            </div>
            <div className="search">
                <input 
                    value={text}
                    type='text'
                    placeholder='Enter your problem'
                    onChange={e => setText(e.target.value)}
                />
                <button onClick={() => setShow(pre => !pre)}>
                    <img src='search.png' alt=''/>
                </button>
            </div>

        </div>

        {
            show && text &&
            <div className="result">
                <p>{text}</p>
            </div>      
        }

        {
            team && 
            <div className="teamInfo">
                <p>22520929 - Đặng Thanh Ngân</p>
                <p>22520424 - Thái Đình Nhật Hiển</p>
                <p>22521272 - Nguyễn Hồng Phát</p>
                <p>22521373 - Phạm Thanh Thảo</p>
            </div>
        }
    </div>
  )
}

export default Info