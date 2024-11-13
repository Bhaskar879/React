import React from 'react'

function Card({username, btnText="default value"}) {
    // PROPS
    // function Card(props)
    // console.log("props", props);

    // console.log(username);
    
    return (

        <>
            <div
                className="w-72 h-40 flex flex-col justify-center gap-2 bg-indigo-500 rounded-lg shadow p-2 mt-4">
                <div className="flex gap-2">
                    <img alt="" className="bg-purple-200 w-24 h-24 shrink-0 rounded-lg" />
                    <div className="flex flex-col text-white">
                        <span className="font-bold italic">{username}</span>
                        <p class="line-clamp-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
                            dolor augue. Nunc dictum erat sit amet iaculis interdum. Ut neque
                            tellus, congue vel lectus aliquam, dignissim porttitor velit.
                        </p>
                    </div>
                </div>
                <button
                    className="hover:bg-purple-300 bg-neutral-50 font-bold text-indigo-500 rounded p-2">
                    {btnText}
                </button>
            </div>
        </>
    )
}

export default Card