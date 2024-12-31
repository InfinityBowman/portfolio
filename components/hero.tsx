export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <h1 className="sr-only">BeThere marketing page</h1>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl">Explore My Capabilities.</p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
