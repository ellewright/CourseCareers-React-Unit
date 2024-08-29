import React, { useState, useEffect } from "react"
import RenderingLists from "./RenderingLists"

export default function Fragments() {

    {/* Also works: <React.Fragment key={id}></React.Fragment> */ }
    {/* For when you need to place a key on a fragment */ }

    return (
        <> {/* no need to wrap everything in a tag */}
            <RenderingLists />
        </>
    )
}