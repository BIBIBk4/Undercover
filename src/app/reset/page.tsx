'use client';

import store, {reset} from "@/components/store";
import {  useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Reset() {
    const router = useRouter();
    const dispatch = store.dispatch;
    useEffect(() => {
        dispatch(reset());
        router.push('/newgame');
    }, [dispatch, router]);
    return <div></div>;
}