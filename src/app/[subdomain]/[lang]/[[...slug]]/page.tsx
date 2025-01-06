export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; subdomain: string; slug: string }>
}) {
  const { lang, subdomain, slug } = await params;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        futuresly
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div>lang: {lang.toString()}</div>
        <div>subdomain: {subdomain.toString()}</div>
        <div>slug: {slug.toString()}</div>
      </footer>
    </div>
  )
}