import { NextResponse } from "next/server";

const jokes = [
    "Why don't skeletons fight each other? They don't have the guts.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why don't eggs tell jokes? They'd crack each other up.",
    "What do you call fake spaghetti? An impasta.",
    "Why don't scientists trust atoms? Because they make up everything."
  ];
  
  

export async function GET() {
    try {
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        return NextResponse.json(randomJoke);
      } catch (error) {
        console.error('Error in jokes API:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
      }
}


// import { NextResponse } from "next/server";

// export async function GET() {
//     try {
//         const joke = "Why don't scientists trust atoms? Because they make up everything.";
//         return NextResponse.json(joke);
//     } catch (error) {
//         console.error('Error in jokes API:', error);
//         return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//     }
// }