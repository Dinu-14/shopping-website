import React from 'react'
import Link from "next/link";

const navBar = () => {
  return (
  
  <div className="hidden lg:block">
   <div className="container">
<div className="flex w-fit gap-10 mx-auto font-medium py-4 0text-blackish">
<Link className="navbar_ link relative" href="#">
HOME
</Link>
<Link className="navbar_ link relative" href="#">
CATOGORIES
</Link>
<Link className="navbar_ link relative" href="#">
MEN'S
</Link>
<Link className="navbar_ link relative" href="#">
WOMEN'S
</Link>
<Link className="navbar_ link relative" href="#">
JEWELRY
</Link>
<Link className="navbar_ link relative" href="#">
PERFUME
</Link>
<Link className="navbar_ link relative" href="#">
BLOG
</Link>
<Link className="navbar_ link relative" href="#">
HOT OFFERS
</Link>

</div>
</div>
</div>

  )
}

export default navBar