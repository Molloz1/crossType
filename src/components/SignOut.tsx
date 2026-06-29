"use client";

import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { Loader2, LogOut } from 'lucide-react';


export default function SignOut() {

  const [isSigningOut, setIsSigningOut] = useState(false)
  const router = useRouter()

  const handleSignOut = async () => {
    setIsSigningOut(true)
    try {
      await authClient.signOut()
      router.push("/login")
    } finally {
      setIsSigningOut(false)
    }
  }
  return (
    <div>
      <Button
      size="sm"
      variant={'ghost'}
      onClick={handleSignOut}
      disabled={isSigningOut}
      className='text-red-200'
    >
      {isSigningOut ? (
        <>
          <Loader2 className="animate-spin" />
          Signing out...
        </>
      ) : (
        <div className="flex flex-row gap-3 items-center ">
          <LogOut/>
        Sign Out
        </div>
      )}
    </Button>
    </div>
  )
}