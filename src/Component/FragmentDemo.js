import React from 'react'

function FragmentDemo() {
    const items = [{id:1,title:'abc'}, {id:2,title:'xyz'}, {id:3,title:'pqr'}]
    return (
        <React.Fragment>
            {
                items.map(item=>
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                    )
            }
            <h1>
                FragmentDemo
            </h1>
            <p>Hi Ankith G</p>
        </React.Fragment>  
    )
}
export default FragmentDemo
