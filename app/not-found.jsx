import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFound = ()=> {
    return <div>
        <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center" >
            <h1 className="text-6xl font-bold gradient gradient-title mb-4"> 404</h1>
            <p className="text-black text-4xl"> Page Not Found</p>
            <p className="text-gray-600 mb-8"> Oops! The page you are looking doesn't exist <br/> or maybe removed.</p>
            <Link href="/">
               <Button>Return Home</Button>
            </Link>
        </div>

    </div>
}

export default NotFound;