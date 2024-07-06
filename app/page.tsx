"use client";
import { Twemoji } from "react-emoji-render";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    MagicWand,
    Plus,
    Sparkle,
    StarFour,
} from "@phosphor-icons/react/dist/ssr";
import { useFormState, useFormStatus } from "react-dom";
import { actionKhodamCheck } from "./actions/khodam-cek";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import StarfieldBackground from "@/components/layout/misc/starfield-background";

const initialState = {
    khodamName: "",
    khodamIcon: "",
};
const MotionButton = motion(Button);
const MotionLink = motion(Link);

export default function Home() {
    return (
        <main className="flex min-h-svh flex-col items-center justify-between p-6 gap-6 z-20">
            <StarfieldBackground />
            <HeaderSection />
            <FormSection />
            <CreditSection />
        </main>
    );
}

function HeaderSection() {
    return (
        <div className="text-start w-full max-w-screen-sm pt-16">
            <MagicWand className="text-4xl text-purple-300" weight="duotone" />
            <h1 className="text-6xl font-black text-purple-300">Khodam-ify</h1>
            <span className="text-2xl font-normal">Cek khodam kamu!</span>
        </div>
    );
}

function FormSection() {
    const { pending } = useFormStatus();
    const [khodamName, setKhodamName] = useState("");
    const [khodamIcon, setKhodamIcon] = useState("");
    const [state, formAction] = useFormState(actionKhodamCheck, initialState);
    useEffect(() => {
        setKhodamName(state.khodamName);
        setKhodamIcon(state.khodamIcon);
    }, [state]);

    return (
        <form
            className="w-full h-full flex flex-col gap-6 max-w-screen-sm "
            action={formAction}
        >
            <AnimatePresence mode="wait">
                {khodamIcon && khodamName && (
                    <motion.div
                        key={state.khodamName}
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className="border flex flex-col items-center gap-2 p-4 relative bg-black/20 backdrop-blur-sm "
                    >
                        <Plus className="absolute -left-3 -top-3 w-6 h-6" />
                        <Plus className="absolute -left-3 -bottom-3 w-6 h-6" />
                        <Plus className="absolute -right-3 -top-3 w-6 h-6" />
                        <Plus className="absolute -right-3 -bottom-3 w-6 h-6" />

                        <span className=" font-normal">
                            Khodam kamu adalah:
                        </span>
                        <Twemoji className="text-6xl">{khodamIcon}</Twemoji>
                        <span className="font-semibold text-2xl">
                            {khodamName}
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="bg-white text-black p-2 rounded-2xl flex flex-col gap-2">
                <Input
                    type="name"
                    name="nama"
                    placeholder="Nama kamu"
                    className="text-xl py-8 px-4 rounded-xl  backdrop-blur-sm"
                    disabled={pending}
                />
                <MotionButton
                    whileHover={{
                        scale: 1.1,
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="text-lg py-6 flex flex-row items-center justify-center gap-2 rounded-xl bg-black text-white hover:bg-gray-800 w-full "
                    disabled={pending}
                >
                    <Sparkle weight="fill" />
                    Cek Khodam
                </MotionButton>
            </div>
        </form>
    );
}

function CreditSection() {
    return (
        <div className="flex flex-row max-md:flex-col gap-2 max-md:w-full">
            <TrakteerSection />
            <TimooLogo />
        </div>
    );
}

function TrakteerSection() {
    return (
        <MotionLink
            className="max-md:w-full items-center justify-center flex flex-row gap-2 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg"
            href="https://trakteer.id/thiotimoo"
            whileHover={{
                scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
        >
            <Image
                className="w-6 h-6 object-contain"
                src="/assets/trakteer-icon.png"
                width={50}
                height={50}
                alt="Trakteer"
            />
            <span>Donasi Di Trakteer</span>
        </MotionLink>
    );
}

function TimooLogo() {
    return (
        <MotionButton
            className="max-md:w-full flex items-center justify-center flex-row gap-2 px-4 py-2 rounded-full text-base"
            variant="link"
            asChild
        >
            <Link href="https://timoo-web.vercel.app">
                Created by
                <span className="font-mono font-semibold flex flex-row items-center gap-1">
                    <StarFour
                        className="dark:text-blue-400 text-blue-900"
                        weight="duotone"
                    />
                    timoo
                </span>
            </Link>
        </MotionButton>
    );
}
