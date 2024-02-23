import { User } from '@/domain/schemas/user.schema'
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { dbAtlasConn } from '@/lib/dbConnection'

export async function POST(request: Request) {
  try {
    // dbAtlasConn()
    const data = await request.json()
    //Find if user by email or username exists.
    dbAtlasConn()
    const usersFound = await User.find({
      $or: [{ email: data['email'] }, { username: data['username'] }],
    })
    if (usersFound.length) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      )
    }
    //Encrypt password
    data['password'] = await bcrypt.hash(data['password'], 10)    
    const response = await User.create(data)
    return NextResponse.json(response)
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
