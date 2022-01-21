export default function handler(req, res) {
    res.setPreviewData(getStaticProps)
    res.end('Preview mode enabled')
}

export async function getStaticProps(context) {
    const res = await fetch(`https://amandatrang.vercel.app/${context.preview ? 'preview' : ''}`)
}
