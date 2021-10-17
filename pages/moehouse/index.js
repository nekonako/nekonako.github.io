import React, { useRef, useState } from 'react'

function Moehouse() {
  const usernameEl = useRef(null)
  const roomEl = useRef(null)
  const [username, setUsername] = useState(null)
  const [room, setRoom] = useState(null)

  const onSetUsername = () => {
    setUsername(usernameEl.current.value)
  }
  
  const onSetRoom = () => {
    setRoom(roomEl.current.value)
  }

  return (
    <>
      <div className="relative flex w-full min-h-screen md:w-2/3">
        <main className="flex-1">
          <div className="min-h-screen px-4 py-1 mt-20 md:m-8">
            {username == null && (
              <div>
                <p> username </p>
                <input type="text" ref={usernameEl} />
                <button onClick={onSetUsername}> submit </button>
              </div>
            )}
            {username !== null && room == null && (
              <div>
                <p> nama room </p>
                <input type="text" ref={roomEl} />
                <button onClick={onSetRoom}> submit </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  )
}

export default Moehouse
