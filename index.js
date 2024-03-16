import OpenAI from "openai";

import 'dotenv/config'

async function main() {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const completion = await openai.chat.completions.create({
        messages: [
            { role: "system", content: "Act as a Senior JavaScript developer" },
            { role: "user", content: "generate a js code to print 'Hello, world' to the console. Return result as a plan text, with no comments" },
        ],
        model: "gpt-3.5-turbo",
        temperature: 0,
        seed: 100,
    });

    eval(completion.choices[0].message.content);
}

main();
