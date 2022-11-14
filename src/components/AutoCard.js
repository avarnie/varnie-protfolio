import React from "react";


export default function AutoCard(){
    return (
        <>
        <div id="intro" class="bg-[#
            3EAEAEA] h-auto my-6 py-8 rounded-lg border-4">
              <div id="avatar" class="flex justify-center py-2">
                <img class="w-40" src="https://api.multiavatar.com/JB.svg " alt="JB image" />
              </div>
              <div id="content" class="prose lg:prose-xl px-2">
                <h1 class="text-center text-gray-800 text-4xl capitalize font-medium">Abraham Varnie</h1>
                <small class="text-center block text-md text-gray-800">Graphics Designer &amp; Software Engineer</small>
                <p class="text-justify text-lg text-gray-800">Hello, my name is Abrahm Varnie. I am a student of Starz University. I am currently studing React at Orange Digital Center.</p>
              </div>
            </div>
        </>
    )
};