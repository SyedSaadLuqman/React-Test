interface HeadingProp {
    title: string
}

const Heading = (props: HeadingProp)=>{
    return (
        <h1>{props.title}</h1>
    )
}

export default Heading