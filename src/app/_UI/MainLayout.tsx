
export default function MainLayout({children, bgColor="white"}: {children: React.ReactNode, bgColor?:string }) {
  return (
    <div className={bgColor}>
      <main className="flex flex-col justify-center items-center md:w-[664px] lg:w-[1008px] 2xl:w-[1352px] mx-auto">
        {children}
      </main>
    </div>
  );
}
