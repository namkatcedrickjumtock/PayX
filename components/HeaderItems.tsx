
function HeaderItems({ text }: any) {
    return (
        // TODO: implement font family and responsivenes at md size
     <div>
           <p className="hidden lg:inline-flex">
            {text}
        </p>
     </div>
    )
}

export default HeaderItems
