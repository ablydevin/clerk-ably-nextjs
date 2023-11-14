'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useConnectionStateListener, useAbly } from 'ably/react'

export default function Status() {

  const client = useAbly();
    const [state, setState] = useState('')
    useConnectionStateListener((stateChange) => {
      setState(stateChange.current)
    });
  
    return (
      <div>
        <p><span>Realtime Connection Status: {state}</span></p>
        <p><span>ClientId: {client.auth.clientId}</span></p>
      </div>
    )
}