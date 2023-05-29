import React from 'react';

const Chat=({username,roomId,socketRef})=>{
    return(
        <div>
         <h1>{username}</h1>
         <h1>{roomId}</h1>
         <h1>{socketRef}</h1>
        </div>
    )
}

export default Chat;