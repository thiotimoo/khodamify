"use server";

import { readFileSync } from "fs";
import path from "path";
import seedrandom from "seedrandom";

export const actionKhodamCheck = async (prevState: any, formData: FormData) => {
    try {
        const rawFormData = {
            nama: formData.get("nama") as string,
        };
        if (rawFormData.nama.trim() === "")
            return {
                khodamName: "",
                khodamIcon: "",
            };
        const file = await readFileSync(process.cwd() + "/public/assets/khodam.txt", "utf-8");
        const lines = file.split("\n");
        var rng = seedrandom(rawFormData.nama.trim());

        const randLineNum = Math.floor(rng() * lines.length);
        const splitted = lines[randLineNum].split(" ");

        return {
            khodamName: lines[randLineNum].substring(splitted[0].length),
            khodamIcon: splitted[0],
        };
    } catch (e) {
        console.error(e);
        return {
            khodamName: "",
            khodamIcon: "",
        };
    }
};
