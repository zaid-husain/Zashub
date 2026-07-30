export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between py-12 bg-white dark:bg-[#0a0a0a]">
      <div className="flex-1 flex flex-col items-center justify-center gap-5">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center animate-pulse shadow-lg shadow-primary-500/20">
          <span className="text-white font-bold text-2xl tracking-tighter">Z</span>
        </div>
        <span className="text-lg font-bold text-neutral-900 dark:text-white tracking-tight">Zashub</span>
        <div className="flex gap-2 mt-2">
          <span className="w-2.5 h-2.5 rounded-full bg-primary-600 animate-bounce [animation-delay:0ms]" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary-600 animate-bounce [animation-delay:150ms]" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary-600 animate-bounce [animation-delay:300ms]" />
        </div>
      </div>
      <div className="opacity-70 hover:opacity-100 transition-opacity">
        <a
          href="https://zashly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-white transition-colors"
        >
          <span className="text-amber-500">⚡</span> Powered by <span className="font-semibold text-neutral-800 dark:text-neutral-200">Zashly</span>
        </a>
      </div>
    </div>
  );
}

