export function Tag({ title, key}: {title: string, key: number} ) {
    return (
        <div
            key={key}
            className=" bg-BGDARK_700 rounded-lg px-4 py-1 font-ff_secondary text-xs text-WHITE_300"
        >
            {title}
        </div>
    )
}