export const ProductSearch = ( { setterFunction }) => {
    return (
        <input className="cSearch"
        onChange={
            (changeEvent) => {
                setterFunction(changeEvent.target.value)
            }
        }
        type="text" placeholder="What candy are you looking for?" />
    )
}