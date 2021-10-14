import React from 'react'
import { Span } from './effectHook'

function Fragment() {
    return (
        <div className={"azz"}>
            <h2>Fragment in React is used  to render Multiple Components in a Return statment </h2>
            <React.Fragment>This is an example of raect Fragment But we Mostly use <Span props='<div>'/> insted of React Fragment or (<Span props="<> </>"/>)</React.Fragment>.
        </div>
    )
}

export default Fragment
 