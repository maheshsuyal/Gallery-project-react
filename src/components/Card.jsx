
const Card = (props) => {

  return (
    <div>
        <a href={props.elem.url} target="_blank">
            <div className="h-40 w-44 overflow-hidden rounded-xl">
                <img className="h-full w-full object-cover" src={props.elem.download_url} alt=""></img>
            </div>
            <h2 className=" font-bold line-clamp-1 wrap-break-word text-lg px-1">{props.elem.author}</h2>
          </a>
    </div>
  )
}

export default Card