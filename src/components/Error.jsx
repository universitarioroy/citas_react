function Error({children}){
    return(
        <div className='bg-red-800 text-white text-sm text-center uppercase p-1 font-bold my-3 rounded'>
                    <p>{children}</p>
                </div>
    )
}

export {Error}