"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function SearchBar() {

    const router = useRouter()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>)=>{
        // e: React.FormEvent<HTMLFormElement>
        // 是react用來處理表單事件 可以透過這方法取得form表單中的內容
        e.preventDefault();
        // preventDefault() 是用來阻止表單的默認行為
        const formData = new FormData(e.currentTarget)
        console.log(formData)
        //formData 是用來儲存輸入表單的欄位名稱和值
        const name = formData.get("name") as string
        // 在formData 內取得name 的資料,並把他type轉為字串

        if(name){
            router.push(`/list?name=${name}`)        
        }

    }
  return (
    <form className='flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1' onSubmit={handleSearch}>
        <input type='text' name='name' placeholder='Search' className='flex-1 bg-transparent outline-none'></input>
        <button className='cursor: pointer;'>
            <Image src="/search.png" alt='' width={16} height={16}/>
        </button>
    </form>
  )
}
