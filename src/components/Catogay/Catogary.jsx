import React from 'react'

export default function Catogary() {
    const youtubeCategories = [
        "Film & Animation",
        "Autos & Vehicles",
        "Music",
        "Pets & Animals",
        "Sports",
        "Travel & Events",
        "Gaming",
        "People & Blogs",
        "Comedy",
        "Entertainment",
        "News & Politics",
        "Howto & Style",
        "Education",
        "Science & Technology",
        "Nonprofits & Activism",
        "Activism",
        "Food & Drink",
        "Fashion & Beauty",
        "Home & Garden",
        "DIY & Crafts",
        "Health & Fitness",
        "Business & Finance",
        "Shopping",
        "Fine Arts",
        "Literature",
        "Philosophy",
        "Religion",
        "History",
        "Psychology",
        "Sociology",
        "Languages",
        "Travel",
        "Documentary",
        "Technology",
        "Engineering",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Astronomy",
        "Environmental Science",
        "Medicine",
        "Psychiatry",
        "Dentistry",
        "Nursing",
        "Pharmacy",
        "Veterinary Medicine",
        "Law",
        "Computer Science"
    ];
    



    return (
        <section id='catogary' className=' bg-[#fafafa] dark:bg-[#121212] text-black dark:text-white'>
            <ul className='flex gap-2  w-[800px] overflow-scroll'>
                {
                    youtubeCategories.map((e)=> <li className="whitespace-nowrap py-1 px-2 border">{e}</li>)
                }
            </ul>
        </section>
    )
}
