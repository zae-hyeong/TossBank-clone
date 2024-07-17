export default function MainLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex flex-col justify-center items-center lg:w-[664px] xl:w-[1008px] 2xl:w-[1352px] mx-auto">
        {children}
      </div>
    </div>
  );
}
