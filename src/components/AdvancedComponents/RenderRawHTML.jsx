export default function RenderRawHTML() {

    const CUSTOM_HTML = `
    <h1>Hello World</h1>
    `

    return (
        <div dangerouslySetInnerHTML={{ __html: CUSTOM_HTML }}></div>
    )
}