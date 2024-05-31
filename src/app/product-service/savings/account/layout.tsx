export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="bg-white">{children}</main>;
}
