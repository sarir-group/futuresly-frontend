import { getTranslations, getLocale } from 'next-intl/server';

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: [string] }>
}) {

  const { slug } = await params;
  const t = await getTranslations('HomePage');
  const locale = await getLocale();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        futuresly
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-xs">
        <div>main</div>
        <div>{slug && <>page/{locale}/{(slug || [])?.join('/')}</>}</div>
        <div>{t('title')}</div>
      </footer>
    </div>
  )
}