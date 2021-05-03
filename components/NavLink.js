import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavLink({ link, name }) {
  
  const router = useRouter()
  let currentPage = false

  // checks to see if the current page matches with the link
  if (router.pathname == `/${link}`) {
    currentPage = true
  }
  
  return (
    <li className={`navLink ${currentPage ? "currentPage" : ""}`}>
      <svg xmlns="http://www.w3.org/2000/svg"
     width="0.2in" height="0.156667in"
     viewBox="0 0 125 47">
  <path id="Halo"
        fill="currentColor" stroke="none"
        d="M 95.50,1.19
           C 76.88,2.50 56.81,9.44 56.81,9.44
             56.81,9.44 30.65,15.29 16.81,23.06
             -2.56,33.69 1.25,39.62 1.25,39.62
             1.25,39.62 1.56,50.75 34.19,45.56
             56.31,42.31 72.19,37.50 72.12,37.62
             72.06,37.76 91.69,31.44 109.81,23.12
             127.00,15.56 124.19,5.94 124.19,5.94
             124.19,5.94 123.38,-0.50 95.50,1.19 Z
           M 27.88,26.06
           C 39.59,20.66 59.19,15.62 59.19,15.62
             59.19,15.62 74.42,11.10 88.56,9.31
             114.12,5.88 113.06,8.81 113.06,8.81
             113.06,8.81 117.12,12.56 108.75,16.81
             98.62,21.97 76.10,27.81 76.06,27.88
             76.03,27.93 54.49,34.85 40.69,36.81
             14.94,41.88 13.25,36.81 13.25,36.81
             13.25,36.81 7.44,33.62 27.88,26.06 Z" />
</svg>
      <Link href={`/${link}`}>{name}</Link>
    </li>
  )
}