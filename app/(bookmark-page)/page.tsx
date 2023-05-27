"use client"

import { getRandom } from "@/app/(bookmark-page)/utils"
import React, { use, useEffect, useRef, useState } from "react"
// import data from "./bookmark.data"
import Bookmarks from "./bookmark.component"
import axios from "axios"

type bookmark = {
  title: string,
  date: number,
  icon: string | null,
  link: string,
  labels: string[]
}
const { daisyTheme, classNameOfPattern, pastelColorHexCode } = getRandom
// const dataQuery = fetch("https://drive.google.com/uc?export=download&id=1U1JO065GuvkrQnFTclsYIlWGolmcXkCn", { redirect: "follow", method: 'GET', })
const uri = "https://drive.google.com/uc?export=download&id=1U1JO065GuvkrQnFTclsYIlWGolmcXkCn"

function Home() {
  // const [data, updateData] = useState<bookmark[]>([])
  const dataQuery = axios.get("/api/bookmarks")//uri)
  const xdata = use(dataQuery)
  console.log(xdata)
  const data: bookmark[] = []
  const [style, updateStyle] = useState({
    theme: "",
    pattern: "",
    patternColor: "",
  })
  const [searchString, setSearchString] = useState("")
  const searchInputRef = useRef<HTMLInputElement>(null)

  function search() {
    const newStr = searchInputRef.current!.value.trim().toLowerCase()

    if (newStr.length < 1) {
      setSearchString(() => "")
      return
    }

    setSearchString(() => newStr)
  }

  function refreshStyle() {
    updateStyle(() => {
      return {
        theme: daisyTheme(),
        pattern: classNameOfPattern(),
        patternColor: pastelColorHexCode()
      }
    })
  }

  useEffect(() => {
    refreshStyle()

    // const query = () => fetch("/api/bookmarks", { redirect: "follow", method: 'GET', })
    //   .then(response => response.json())
    //   .then(bookmarkData => updateData(bookmarkData))

    // query()

  }, [])

  return (
    <main className={"flex min-h-screen min-w-full justify-center flex-col items-center py-1 px-4 overflow-hidden"} data-theme={style.theme}>
      <Bookmarks.bg pattern={style.pattern} color={style.patternColor} />
      <header className="min-w-full top-0 fixed flex justify-center items-center gap-2 p-2 z-10 backdrop-blur-md shadow sm:justify-normal">
        <Bookmarks.counts count={data.length} />
        <Bookmarks.refreshStyle onClick={refreshStyle} />
        {/* <Bookmarks.searchBox onChange={search} /> */}
        <input className="shadow border border-primary input h-auto p-1 px-2 text-sm" type="search" name="search-input" id="search-input" placeholder="Search here..." onChange={search} ref={searchInputRef} />
        <a href="https://github.com/sun-m00n" target="_blank" className="btn btn-ghost btn-sm link link-primary underline underline-offset-2 flex justify-center items-center gap-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github text-primary" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </header>
      <span className="p-4 opacity-0"></span>
      {/* <main className="flex max-w-full flex-col sm:justify-center sm:flex-wrap sm:flex-row gap-4 px-3 mt-8 overflow-scroll"> */}
      <main className=" grid w-full max-w-full gap-4 px-3 mt-8" style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
      }}>
        {
          data.map(bookmark => {

            const _key = `${bookmark.title}${bookmark.labels.join("")}`.trim().toLowerCase()
            const condition = searchString === "" ? true : _key.indexOf(searchString) !== -1

            return (
              <Bookmarks.card
                key={_key}
                data={bookmark}
                visible={condition}
              />
            )
          }
          )
        }
        <span className="w-full h-32"></span>
      </main>

    </main>
  )
}

export default Home


