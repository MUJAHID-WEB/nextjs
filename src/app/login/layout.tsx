"use client"

import Link from "next/link";
import './login.css'
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const pathName = usePathname();

    return (
       
        <div>
             {
                pathName != '/login/loginstudent' ?
                <ul className="login-menu">
                <li>
                    <h4>Login Navbar</h4>
                </li>
                <li>
                    <Link href="/login">Login Main</Link>
                </li>
                <li>
                    <Link href="/login/loginstudent">Student Login </Link>
                </li>
                <li>
                    <Link href="/login/loginteacher">Teacher Login </Link>
                </li>
            </ul>
            : <Link href="/login">Login Main</Link>

            
        }

          
            {children}
        </div>
    )
}
