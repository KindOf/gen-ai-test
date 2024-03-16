import OpenAI from "openai";

import 'dotenv/config'

async function main() {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const completion = await openai.chat.completions.create({
        messages: [
            { role: "system", content: "Act as a Senior JavaScript developer" },
            { role: "user", content: "generate a js code to print first 20 fiboncci number to the console. Return result as a plain text, with no comments" },
        ],
        model: "gpt-3.5-turbo",
        temperature: 0,
        seed: 100,
    });

    console.log(completion.choices[0].message.content);
    eval(completion.choices[0].message.content);
}

main();
