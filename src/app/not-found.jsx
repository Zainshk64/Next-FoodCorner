import Link from "next/link";

export default function notfound() {
  return (
    <div>
      <p>Page not found</p>
      <Link href={'/'}>Back to home</Link>
    </div>
  )
}
