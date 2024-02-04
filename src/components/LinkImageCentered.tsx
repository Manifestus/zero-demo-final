import Link from "next/link";


export default function LinkImageCentered( {href, children} ) {

        return <Link style={{ position: "absolute",  transform: "translate(-50%, -50%)" }} href={{href}}> {children} </Link>


}