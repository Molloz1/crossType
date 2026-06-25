"use client";

import React from 'react'
import { Button } from './ui/button'
import { signOut } from '@/lib/auth-client';


export default function SignOut() {
  return (
    <div>
      <Button onClick={signOut}>Sign Out</Button>
    </div>
  )
}