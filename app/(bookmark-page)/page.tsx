"use client"

import { getRandom } from "@/app/(bookmark-page)/utils"
import React, { useEffect, useRef, useState } from "react"
import Bookmarks from "./bookmark.component"

type bookmark = {
  title: string,
  date: number,
  icon: string | null,
  link: string,
  labels: string[]
}
const { daisyTheme, classNameOfPattern, pastelColorHexCode } = getRandom

export default function Home() {
  const [style, updateStyle] = useState({
    theme: "",
    pattern: "",
    patternColor: "",
  })
  const [loading, setLoading] = useState(false)
  const [data, updateData] = useState<bookmark[]>([])
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

    const query = () => {
      setLoading(true)
      fetch("/api/bookmarks", { method: 'GET', redirect: "follow" })
        .then(response => response.json())
        .then(bookmarkData => {
          updateData(bookmarkData)
          setLoading(false)
        })
    }

    query()
  }, [])

  return (
    <main className={"flex min-h-screen min-w-full justify-center flex-col items-center py-1 px-4 overflow-hidden"} data-theme={style.theme}>

      <Bookmarks.bg pattern={style.pattern} color={style.patternColor} />

      <header className="min-w-full top-0 fixed flex justify-center items-center p-2 z-10 backdrop-blur-md flex-wrap gap-2 shadow sm:justify-normal">
        <span className="flex gap-4">
          <Bookmarks.link.github />
          <Bookmarks.link.add />
          <Bookmarks.refreshStyle onClick={refreshStyle} />
          <Bookmarks.counts count={data.length} />
        </span>
        <input className="shadow border border-primary input w-auto h-auto max-w-xs p-1 px-2 text-sm" type="search" name="search-input" id="search-input" placeholder="Search here..." onChange={search} ref={searchInputRef} />
        {/* <Bookmarks.searchBox onChange={search} ref={searchInputRef} /> */}
      </header>

      <span className="p-4 opacity-0"></span>

      <main className="grid w-full max-w-full gap-4 px-3 mt-20 sm:mt-8" style={{
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
      </main>

      <div className="flex flex-col">
        {data.length === 0 && <p className="text-md">No Data Found</p>}
        {loading && <button className="btn btn-ghost loading"></button>}
      </div>

      <span className="w-full h-32"></span>

    </main>
  )
}