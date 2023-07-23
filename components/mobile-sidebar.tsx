"use client";


import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import {
    Sheet, SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import {Sidebar} from "@/components/sidebar";
import {useEffect, useState} from "react";

export const MobileSidebar =  () => {
    const [isMounted, setIsmounted] = useState(false)


    useEffect(() => {
        setIsmounted(true)
    }, []);

    if(!isMounted){
        return null
    }
    return (
        <Sheet>
            <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden sm:block">
            <Menu className="md-hidden"/>
        </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <Sidebar></Sidebar>
            </SheetContent>
        </Sheet>
    )

}
