import arrOfLinks from '@/data/bookmarks.json';
import arrOfPastelColors from '@/data/pastel-colors.json';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })
const randomPastelColor = () => arrOfPastelColors[Math.floor(Math.random() * arrOfPastelColors.length)]

export default function Home() {

  const
    [searchBoxElem, setSearchBoxElem] = useState<HTMLElement | null>(),
    [filteredArrOfBookmarks, setFilteredArrOfBookmarks] = useState(arrOfLinks),
    [isSearchBoxActive, setIsSearchBoxActive] = useState(false),
    [themeMode, setThemeMode] = useState('light'),
    toggleTheme = (themeMode: string) => setThemeMode(themeMode),
    search = (event: any) => {
      const searchedValue = (event.target.value).toLowerCase();
      if (searchedValue.trim().length < 2) {
        setFilteredArrOfBookmarks(arrOfLinks)
        return
      }
      let newFilteredArrOfBookmarks: typeof arrOfLinks = [];
      arrOfLinks.map(link => {
        if (link.title.toLowerCase().trim().includes(searchedValue)) {
          newFilteredArrOfBookmarks.push(link)
        }
      })
      setFilteredArrOfBookmarks(newFilteredArrOfBookmarks)
    };

  useEffect(() => {
    setSearchBoxElem(document.getElementById("search-box"))
    document.onkeyup = keyEvent => {
      if (keyEvent.code === "Slash" && keyEvent.key === "/") {
        setIsSearchBoxActive(true)
        searchBoxElem?.focus();
      }
    }
  }, [])

  return (
    <>
      <Head>
        <title>Bookmarks (Abhishek)</title>
        <meta name="description" content="Collection of bookmarks by Abhishek (https://www.github.com/sun-m00n)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />

      </Head>
      <main className={`body ${themeMode}-theme-mode`}>
        <header>
          <input type="search" name="search-box" id="search-box" placeholder="Find some bookmarks"
            onChange={search}
            onBlur={() => setIsSearchBoxActive(false)}
          />

          <span id="theme-box">

            <input type="radio" name="theme" id="light-theme-toggle" checked={themeMode === "light" ? true : false} onChange={() => toggleTheme('light')} />
            <label htmlFor='light-theme-toggle'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-stars-fill" viewBox="0 0 16 16" style={{ scale: "0.85" }}>
                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
              </svg>
            </label>
            <input type="radio" name="theme" id="dark-theme-toggle" checked={themeMode === "dark" ? true : false} onChange={() => toggleTheme('dark')} />

            <label htmlFor='dark-theme-toggle'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sun-fill" viewBox="0 0 16 16">
                <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
              </svg>
            </label>

            <label id="bookmarks-count">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2a8de9" className="bi bi-bookmark-fill"
                viewBox="0 0 16 16">
                <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
              </svg>
              &nbsp;Count: {filteredArrOfBookmarks.length}
            </label>
          </span>

        </header>
        <main>
          {
            filteredArrOfBookmarks.map(({ title, href }, index) => (
              <a
                key={index}
                className='link'
                href={href}
                target='blank'
                title={href}
                style={{ backgroundColor: randomPastelColor() }}
              >
                {title}
              </a>
            ))
          }
        </main>
      </main>
    </>
  )
}
