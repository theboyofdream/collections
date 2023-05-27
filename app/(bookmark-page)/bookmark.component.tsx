import { calculateColor, getRandom } from "@/app/(bookmark-page)/utils"
import React, { RefObject } from "react"
const { pastelColorHexCode } = getRandom

type bookmark_props = {
    visible?: true | false,
    data: {
        title: string,
        date?: number,
        icon?: string | null,
        link: string,
        labels: string[]
    }
}

const Bookmarks = {
    bg: ({ pattern, color }: { pattern: string, color: string }) => <div className={`fixed top-0 left-0 -z-0 min-h-full min-w-full opacity-50 ${pattern}`} style={{
        color: color,
        // backgroundColor: getRandom.pastelColorHexCode(),
    }}></div>,
    counts: ({ count }: { count: number }) => (
        <span className="flex justify-center items-center gap-1 btn btn-sm btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-star-fill scale-[80%]" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.178.178 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.178.178 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.178.178 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.178.178 0 0 1-.134-.098L8.16 4.1z" />
            </svg>
            <span className="text-xs font-semibold">{count}</span>
        </span>
    ),
    refreshStyle: ({ onClick }: { onClick: () => void }) => <button className="btn btn-sm btn-square btn-primary" id="refresh-style-btn" onClick={() => {
        onClick()
        const svg = document.getElementById("refresh-style-btn")!.children[0] as HTMLElement
        svg.style.rotate = (svg.style.rotate ? parseInt(svg.style.rotate.replace("deg", "")) : 0) + 180 + "deg"
    }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-repeat transition-all ease-in-out duration-500" viewBox="0 0 16 16">
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
            <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
        </svg>
    </button>,
    link: {
        github: () => <a href="https://github.com/sun-m00n" target="_blank" className="btn btn-sm btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
        </a>,
        add: () => <a className="btn btn-sm btn-primary" href="https://forms.gle/yJKCi4HAVAiXqyJu6" target="_blank" rel="noopener noreferrer">
            +
            <span className="hidden sm:block">&nbsp;bookmark</span>
        </a>
    },
    searchBox: ({ onChange, ref }: { onChange: () => void, ref: RefObject<HTMLInputElement> }) => <input className="shadow border border-primary input w-auto h-auto max-w-xs p-1 px-2 text-sm" type="search" name="search-input" id="search-input" placeholder="Search here..." onChange={onChange} ref={ref} />,
    card: ({ visible = true, data }: bookmark_props) => {
        const color = pastelColorHexCode()
        return (
            <a href={data.link} target="_blank" className={`card p-3 py-1.5 gap-1 cursor-pointer border border-primary break-words bg-[${color}] transition-all hover:shadow-md hover:rounded-none ${visible ? "flex" : "hidden"}`} style={{ backgroundColor: color }}>
                <span
                    className={`text-sm capitalize text-[${calculateColor(color)}] drop-shadow`}
                    style={{ fontWeight: 400, letterSpacing: "0.06rem" }}
                >
                    {data.title}
                </span>
                <span className="card-actions">
                    {
                        data.labels.map((label, index) =>
                            <span className="badge badge-sm" key={index}>{label}</span>)
                    }
                </span>
            </a>
        )
    },
}

const MemoizedCard = React.memo(Bookmarks.card)

export default Bookmarks
export { MemoizedCard }
