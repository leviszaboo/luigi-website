import AboutMePage from "@/app/components/AboutMe/AboutMePage"
import Menu from "@/app/components/Menu/Menu/Menu"
import MemorizePosition from "@/app/components/Work/MemorizePosition"

const paragraphs = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae cons."
]

const sources = [
  "/Media/horizontal-final/patta-hor.jpeg", 
  "/Media/vertical-final/tno-vert.jpeg", 
  "/Media/vertical-final/patta-vert.jpeg",
  "/Media/horizontal-final/pond.jpeg",
  "/Media/vertical-final/mask.jpeg",
  "/Media/horizontal-final/stonebwoy.jpeg",
]

export default function AboutMe() {
  return (
    <>
      <MemorizePosition>
        <Menu/>
        <AboutMePage paragraphs={paragraphs} sources={sources}/>
      </MemorizePosition>
    </>
  )
}
