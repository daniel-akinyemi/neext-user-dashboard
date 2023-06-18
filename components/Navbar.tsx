import Link from "next/link"

const Navbar = () => {
  return (
    <div>
        <Link href='/'>Home</Link>
        <Link href='/login'>Login</Link>
    </div>
  )
}

export default Navbar